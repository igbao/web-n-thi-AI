/**
 * APP.JS - Hệ Thống Ôn Thi Trắc Nghiệm Môn Ứng Dụng AI
 * Hỗ trợ 208 câu hỏi trắc nghiệm chia theo 6 chương tài liệu học phần.
 */

(function () {
  'use strict';

  // ==========================================
  // 1. STATE MANAGEMENT & STORAGE
  // ==========================================
  const STORAGE_KEY = 'ai_exam_study_state_v2';
  const THEME_KEY = 'ai_exam_theme_v2';

  let appState = {
    answered: {},     // { [qId]: { selected: number, isCorrect: boolean } }
    bookmarks: [],    // array of qId
    lastActiveChapter: null,
  };

  // Load saved state from LocalStorage
  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answered) appState.answered = parsed.answered;
        if (Array.isArray(parsed.bookmarks)) appState.bookmarks = parsed.bookmarks;
        if (parsed.lastActiveChapter) appState.lastActiveChapter = parsed.lastActiveChapter;
      }
    } catch (e) {
      console.warn('Could not load state from localStorage', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn('Could not save state to localStorage', e);
    }
    updateGlobalStats();
  }

  // Current session runtime state
  let currentSession = {
    mode: 'practice',          // 'practice' | 'exam'
    chapterId: null,           // null (all) or 'ch1'..'ch6'
    questions: [],             // array of question objects for this session
    currentIndex: 0,
    examAnswers: {},           // for exam mode: { [qId]: selectedIndex }
    examTimer: null,
    examSecondsRemaining: 0,
    examTotalSeconds: 0,
    examStartTime: 0,
    filter: 'all',             // 'all' | 'unanswered' | 'incorrect' | 'starred'
  };

  // ==========================================
  // 2. DOM ELEMENTS
  // ==========================================
  const viewHome = document.getElementById('viewHome');
  const viewQuiz = document.getElementById('viewQuiz');
  const chaptersGrid = document.getElementById('chaptersGrid');
  const btnGoHome = document.getElementById('btnGoHome');
  const btnBackToHome = document.getElementById('btnBackToHome');
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const btnResetAllProgress = document.getElementById('btnResetAllProgress');

  // Hero Stats
  const overallPercent = document.getElementById('overallPercent');
  const overallProgressFill = document.getElementById('overallProgressFill');
  const statCompletedCount = document.getElementById('statCompletedCount');
  const statCorrectCount = document.getElementById('statCorrectCount');
  const statIncorrectCount = document.getElementById('statIncorrectCount');
  const statBookmarkedCount = document.getElementById('statBookmarkedCount');
  const headerProgressText = document.getElementById('headerProgressText');
  const headerStarredCount = document.getElementById('headerStarredCount');
  const btnFilterStarredHeader = document.getElementById('btnFilterStarredHeader');

  // Hero Actions
  const btnStartAllPractice = document.getElementById('btnStartAllPractice');
  const btnStartAllExam = document.getElementById('btnStartAllExam');

  // Quiz Navigation Elements
  const quizChapterBadge = document.getElementById('quizChapterBadge');
  const quizTopicBadge = document.getElementById('quizTopicBadge');
  const examTimerBox = document.getElementById('examTimerBox');
  const examTimerDisplay = document.getElementById('examTimerDisplay');
  const btnToggleBookmark = document.getElementById('btnToggleBookmark');
  const btnShuffleQuiz = document.getElementById('btnShuffleQuiz');
  const btnSubmitExam = document.getElementById('btnSubmitExam');
  const currentQDisplay = document.getElementById('currentQDisplay');
  const totalQDisplay = document.getElementById('totalQDisplay');
  const modeBadgeText = document.getElementById('modeBadgeText');
  const quizProgressBar = document.getElementById('quizProgressBar');

  // Question Card Elements
  const questionCard = document.getElementById('questionCard');
  const qNumPill = document.getElementById('qNumPill');
  const qSourceDoc = document.getElementById('qSourceDoc');
  const questionText = document.getElementById('questionText');
  const optionsList = document.getElementById('optionsList');
  const explanationBox = document.getElementById('explanationBox');
  const explanationText = document.getElementById('explanationText');
  const btnPrevQuestion = document.getElementById('btnPrevQuestion');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const btnResetQuestion = document.getElementById('btnResetQuestion');

  // Palette Elements
  const paletteAnsweredCount = document.getElementById('paletteAnsweredCount');
  const questionsNumbersGrid = document.getElementById('questionsNumbersGrid');
  const filterTabs = document.querySelectorAll('.palette-filters .filter-tab');

  // Result Modal Elements
  const examResultModal = document.getElementById('examResultModal');
  const resultTitle = document.getElementById('resultTitle');
  const resultScoreTen = document.getElementById('resultScoreTen');
  const resultCorrectCount = document.getElementById('resultCorrectCount');
  const resultIncorrectCount = document.getElementById('resultIncorrectCount');
  const resultAccuracy = document.getElementById('resultAccuracy');
  const resultTimeSpent = document.getElementById('resultTimeSpent');
  const breakdownList = document.getElementById('breakdownList');
  const btnReviewExamQuestions = document.getElementById('btnReviewExamQuestions');
  const btnRetakeExam = document.getElementById('btnRetakeExam');
  const btnCloseResultModal = document.getElementById('btnCloseResultModal');

  // ==========================================
  // 3. INITIALIZATION
  // ==========================================
  function initApp() {
    loadSavedState();
    initTheme();
    renderChapterCards();
    updateGlobalStats();
    attachEventListeners();
  }

  // Theme Handling
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light-theme';
    document.body.className = savedTheme;
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light-theme' : 'dark-theme';
    document.body.className = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
  }

  // ==========================================
  // 4. HOME VIEW: CHAPTERS & STATS
  // ==========================================
  function renderChapterCards() {
    chaptersGrid.innerHTML = '';

    CHAPTERS_DATA.forEach((ch) => {
      const chQuestions = QUESTIONS_BANK.filter((q) => q.chapterId === ch.id);
      const totalInCh = chQuestions.length;

      // Calculate completed in this chapter
      let completedInCh = 0;
      let correctInCh = 0;
      chQuestions.forEach((q) => {
        if (appState.answered[q.id]) {
          completedInCh++;
          if (appState.answered[q.id].isCorrect) correctInCh++;
        }
      });

      const percent = totalInCh > 0 ? Math.round((completedInCh / totalInCh) * 100) : 0;

      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.innerHTML = `
        <div class="chapter-card-top">
          <div class="chapter-meta">
            <div class="chapter-icon-badge">
              <span class="ch-icon">${ch.icon}</span>
              <span class="ch-badge" style="background-color: ${ch.color}15; color: ${ch.color}; border-color: ${ch.color}40;">${ch.badge}</span>
            </div>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">Chương ${ch.num}</span>
          </div>
          <h3 class="ch-title">${ch.title}</h3>
          <span class="ch-doc-name" title="${ch.originalTitle}">📄 ${ch.originalTitle}</span>
          <p class="ch-desc">${ch.description}</p>
        </div>

        <div class="chapter-card-bottom">
          <div class="chapter-progress-block">
            <div class="ch-progress-info">
              <span>Tiến độ: ${completedInCh}/${totalInCh} câu</span>
              <span style="color: ${ch.color}; font-family: var(--font-mono);">${percent}%</span>
            </div>
            <div class="ch-progress-track">
              <div class="ch-progress-bar" style="width: ${percent}%; background-color: ${ch.color};"></div>
            </div>
          </div>

          <div class="chapter-card-actions">
            <button class="btn-card-primary" data-action="practice" data-chapter="${ch.id}" style="background-color: ${ch.color};">
              Luyện Tập Ngay
            </button>
            <button class="btn-card-outline" data-action="exam" data-chapter="${ch.id}">
              Thi Thử
            </button>
          </div>
        </div>
      `;

      chaptersGrid.appendChild(card);
    });
  }

  function updateGlobalStats() {
    const total = QUESTIONS_BANK.length;
    let completed = 0;
    let correct = 0;
    let incorrect = 0;

    QUESTIONS_BANK.forEach((q) => {
      if (appState.answered[q.id]) {
        completed++;
        if (appState.answered[q.id].isCorrect) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    const starredCount = appState.bookmarks.length;

    // Update Hero elements
    overallPercent.textContent = `${percent}%`;
    overallProgressFill.style.width = `${percent}%`;
    statCompletedCount.textContent = `${completed}/${total}`;
    statCorrectCount.textContent = correct;
    statIncorrectCount.textContent = incorrect;
    statBookmarkedCount.textContent = starredCount;

    // Header pills
    headerProgressText.textContent = `${completed}/${total} đã làm`;
    headerStarredCount.textContent = `${starredCount} đã lưu`;

    // Re-render chapter cards to reflect updated individual progress
    renderChapterCards();
  }

  // ==========================================
  // 5. STARTING QUIZ / PRACTICE SESSIONS
  // ==========================================
  function startQuizSession(chapterId, mode, customQuestions = null) {
    currentSession.mode = mode;
    currentSession.chapterId = chapterId;
    currentSession.currentIndex = 0;
    currentSession.filter = 'all';
    currentSession.examAnswers = {};

    // Stop any existing exam timer
    if (currentSession.examTimer) {
      clearInterval(currentSession.examTimer);
      currentSession.examTimer = null;
    }

    if (customQuestions) {
      currentSession.questions = [...customQuestions];
    } else if (chapterId) {
      currentSession.questions = QUESTIONS_BANK.filter((q) => q.chapterId === chapterId);
    } else {
      currentSession.questions = [...QUESTIONS_BANK];
    }

    if (currentSession.questions.length === 0) {
      alert('Không có câu hỏi nào phù hợp với bộ lọc đã chọn!');
      return;
    }

    // Configure Exam Mode vs Practice Mode
    if (mode === 'exam') {
      modeBadgeText.textContent = 'Chế độ Thi Thử (Bấm Giờ)';
      examTimerBox.style.display = 'inline-flex';
      btnSubmitExam.style.display = 'inline-block';
      btnResetQuestion.style.display = 'none';

      // Setup exam timer (1 minute per question, or minimum 15 mins)
      const minutes = Math.max(15, Math.ceil(currentSession.questions.length * 1));
      currentSession.examTotalSeconds = minutes * 60;
      currentSession.examSecondsRemaining = currentSession.examTotalSeconds;
      currentSession.examStartTime = Date.now();
      startExamTimer();
    } else {
      modeBadgeText.textContent = 'Chế độ Luyện Tập (Hiện Giải Thích)';
      examTimerBox.style.display = 'none';
      btnSubmitExam.style.display = 'none';
      btnResetQuestion.style.display = 'inline-flex';
    }

    // Update Header badges in Quiz View
    if (chapterId) {
      const chInfo = CHAPTERS_DATA.find((c) => c.id === chapterId);
      quizChapterBadge.textContent = chInfo ? `Chương ${chInfo.num}` : 'Chuyên đề';
      quizChapterBadge.style.display = 'inline-block';
    } else {
      quizChapterBadge.textContent = 'Toàn Bộ 6 Chương';
      quizChapterBadge.style.display = 'inline-block';
    }

    // Switch view
    viewHome.classList.remove('active');
    viewQuiz.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render question
    renderCurrentQuestion();
    renderPalette();
  }

  // ==========================================
  // 6. QUESTION RENDERING & INTERACTION
  // ==========================================
  function renderCurrentQuestion() {
    const q = currentSession.questions[currentSession.currentIndex];
    if (!q) return;

    // Header info
    currentQDisplay.textContent = `Câu ${currentSession.currentIndex + 1}`;
    totalQDisplay.textContent = `/ ${currentSession.questions.length} câu`;
    qNumPill.textContent = `CÂU HỎI ${q.id}`;
    quizTopicBadge.textContent = q.topic || 'Nội dung bài học';
    qSourceDoc.textContent = q.chapterTitle;

    // Progress bar
    const progressPercent = Math.round(((currentSession.currentIndex + 1) / currentSession.questions.length) * 100);
    quizProgressBar.style.width = `${progressPercent}%`;

    // Star icon state
    const isStarred = appState.bookmarks.includes(q.id);
    if (isStarred) {
      btnToggleBookmark.classList.add('starred');
      btnToggleBookmark.innerHTML = '<span class="bookmark-icon">⭐</span> <span class="btn-tool-text">Đã lưu</span>';
    } else {
      btnToggleBookmark.classList.remove('starred');
      btnToggleBookmark.innerHTML = '<span class="bookmark-icon">☆</span> <span class="btn-tool-text">Đánh dấu</span>';
    }

    // Question Text
    questionText.textContent = q.question;

    // Render 4 Options
    optionsList.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];

    const userState = appState.answered[q.id];
    const isExam = currentSession.mode === 'exam';
    const examSelected = currentSession.examAnswers[q.id];

    q.options.forEach((optText, optIdx) => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';
      optEl.dataset.index = optIdx;

      let extraClass = '';
      if (isExam) {
        if (examSelected === optIdx) {
          extraClass = 'selected-exam';
        }
      } else {
        // Practice mode
        if (userState !== undefined) {
          optEl.classList.add('disabled');
          if (optIdx === q.correct) {
            extraClass = 'correct';
          } else if (optIdx === userState.selected) {
            extraClass = 'incorrect';
          }
        }
      }

      if (extraClass) optEl.classList.add(extraClass);

      optEl.innerHTML = `
        <div class="option-marker">${optionLetters[optIdx]}</div>
        <div class="option-text">${optText}</div>
      `;

      optEl.addEventListener('click', () => handleOptionSelect(optIdx));
      optionsList.appendChild(optEl);
    });

    // Explanation Box
    if (!isExam && userState !== undefined) {
      explanationBox.style.display = 'block';
      explanationText.innerHTML = q.explanation;
    } else {
      explanationBox.style.display = 'none';
    }

    // Navigation buttons state
    btnPrevQuestion.disabled = currentSession.currentIndex === 0;
    btnNextQuestion.disabled = currentSession.currentIndex === currentSession.questions.length - 1;

    // Highlight current number in palette
    highlightPaletteItem();
  }

  function handleOptionSelect(optionIdx) {
    const q = currentSession.questions[currentSession.currentIndex];
    if (!q) return;

    if (currentSession.mode === 'exam') {
      // In Exam mode: just record the answer and update styling
      currentSession.examAnswers[q.id] = optionIdx;
      renderCurrentQuestion();
      renderPalette();
      return;
    }

    // Practice Mode: Check immediately
    // If already answered, don't re-select unless reset
    if (appState.answered[q.id] !== undefined) return;

    const isCorrect = optionIdx === q.correct;
    appState.answered[q.id] = {
      selected: optionIdx,
      isCorrect: isCorrect,
      answeredAt: Date.now(),
    };

    saveState();
    renderCurrentQuestion();
    renderPalette();
  }

  function resetCurrentQuestion() {
    const q = currentSession.questions[currentSession.currentIndex];
    if (!q) return;

    if (currentSession.mode === 'exam') {
      delete currentSession.examAnswers[q.id];
    } else {
      delete appState.answered[q.id];
      saveState();
    }
    renderCurrentQuestion();
    renderPalette();
  }

  function toggleBookmarkCurrentQuestion() {
    const q = currentSession.questions[currentSession.currentIndex];
    if (!q) return;

    const idx = appState.bookmarks.indexOf(q.id);
    if (idx >= 0) {
      appState.bookmarks.splice(idx, 1);
    } else {
      appState.bookmarks.push(q.id);
    }

    saveState();
    renderCurrentQuestion();
    renderPalette();
  }

  function goToNextQuestion() {
    if (currentSession.currentIndex < currentSession.questions.length - 1) {
      currentSession.currentIndex++;
      renderCurrentQuestion();
    }
  }

  function goToPrevQuestion() {
    if (currentSession.currentIndex > 0) {
      currentSession.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function shuffleCurrentQuiz() {
    if (confirm('Bạn có muốn xáo trộn thứ tự các câu hỏi trong phiên này?')) {
      for (let i = currentSession.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentSession.questions[i], currentSession.questions[j]] = [currentSession.questions[j], currentSession.questions[i]];
      }
      currentSession.currentIndex = 0;
      renderCurrentQuestion();
      renderPalette();
    }
  }

  // ==========================================
  // 7. QUESTION PALETTE & FILTERS
  // ==========================================
  function renderPalette() {
    questionsNumbersGrid.innerHTML = '';
    const isExam = currentSession.mode === 'exam';

    let answeredCount = 0;

    currentSession.questions.forEach((q, idx) => {
      const userState = appState.answered[q.id];
      const examSelected = currentSession.examAnswers[q.id];
      const isStarred = appState.bookmarks.includes(q.id);

      let isAnswered = false;
      let isCorrect = false;
      let isIncorrect = false;

      if (isExam) {
        isAnswered = examSelected !== undefined;
      } else {
        if (userState !== undefined) {
          isAnswered = true;
          isCorrect = userState.isCorrect;
          isIncorrect = !userState.isCorrect;
        }
      }

      if (isAnswered) answeredCount++;

      // Filter check
      if (currentSession.filter === 'unanswered' && isAnswered) return;
      if (currentSession.filter === 'incorrect' && !isIncorrect) return;
      if (currentSession.filter === 'starred' && !isStarred) return;

      const numBtn = document.createElement('button');
      numBtn.className = 'q-num-btn';
      numBtn.textContent = idx + 1;
      numBtn.dataset.index = idx;

      if (idx === currentSession.currentIndex) numBtn.classList.add('current');
      if (isStarred) numBtn.classList.add('starred');

      if (isExam) {
        if (isAnswered) numBtn.classList.add('answered-exam');
      } else {
        if (isCorrect) numBtn.classList.add('correct');
        if (isIncorrect) numBtn.classList.add('incorrect');
      }

      numBtn.addEventListener('click', () => {
        currentSession.currentIndex = idx;
        renderCurrentQuestion();
      });

      questionsNumbersGrid.appendChild(numBtn);
    });

    paletteAnsweredCount.textContent = `${answeredCount}/${currentSession.questions.length}`;
  }

  function highlightPaletteItem() {
    const allBtns = questionsNumbersGrid.querySelectorAll('.q-num-btn');
    allBtns.forEach((btn) => {
      if (parseInt(btn.dataset.index, 10) === currentSession.currentIndex) {
        btn.classList.add('current');
      } else {
        btn.classList.remove('current');
      }
    });
  }

  // ==========================================
  // 8. EXAM MODE TIMER & SUBMISSION
  // ==========================================
  function startExamTimer() {
    updateTimerDisplay();
    currentSession.examTimer = setInterval(() => {
      currentSession.examSecondsRemaining--;
      updateTimerDisplay();

      if (currentSession.examSecondsRemaining <= 0) {
        clearInterval(currentSession.examTimer);
        currentSession.examTimer = null;
        alert('Hết giờ làm bài! Hệ thống sẽ tự động nộp bài thi của bạn.');
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(currentSession.examSecondsRemaining / 60);
    const secs = currentSession.examSecondsRemaining % 60;
    examTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function submitExam() {
    if (currentSession.examTimer) {
      clearInterval(currentSession.examTimer);
      currentSession.examTimer = null;
    }

    const totalQuestions = currentSession.questions.length;
    let correctCount = 0;
    let incorrectCount = 0;

    // Track per-chapter stats
    const chapterStats = {};

    currentSession.questions.forEach((q) => {
      const chId = q.chapterId;
      if (!chapterStats[chId]) {
        chapterStats[chId] = { total: 0, correct: 0 };
      }
      chapterStats[chId].total++;

      const selectedIdx = currentSession.examAnswers[q.id];
      const isCorrect = selectedIdx === q.correct;

      if (selectedIdx !== undefined) {
        // Record into global state as well
        appState.answered[q.id] = {
          selected: selectedIdx,
          isCorrect: isCorrect,
          answeredAt: Date.now(),
        };

        if (isCorrect) {
          correctCount++;
          chapterStats[chId].correct++;
        } else {
          incorrectCount++;
        }
      } else {
        // Unanswered treated as incorrect in final calculation
        incorrectCount++;
      }
    });

    saveState();

    // Calculate score / 10
    const scoreTen = totalQuestions > 0 ? ((correctCount / totalQuestions) * 10).toFixed(1) : 0;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Calculate time spent
    const timeSpentSecs = currentSession.examTotalSeconds - currentSession.examSecondsRemaining;
    const spentMins = Math.floor(timeSpentSecs / 60);
    const spentSecs = timeSpentSecs % 60;
    const timeSpentStr = `${spentMins} phút ${spentSecs} giây`;

    // Display Results in Modal
    resultScoreTen.textContent = scoreTen;
    resultCorrectCount.textContent = `${correctCount} / ${totalQuestions}`;
    resultIncorrectCount.textContent = `${incorrectCount} câu`;
    resultAccuracy.textContent = `${accuracy}%`;
    resultTimeSpent.textContent = timeSpentStr;

    // Title & Trophy based on score
    const trophyEl = document.getElementById('resultTrophy');
    if (accuracy >= 90) {
      resultTitle.textContent = 'KẾT QUẢ XUẤT SẮC! 🎉';
      trophyEl.textContent = '🏆';
    } else if (accuracy >= 75) {
      resultTitle.textContent = 'KẾT QUẢ RẤT TỐT! 👏';
      trophyEl.textContent = '🥇';
    } else if (accuracy >= 50) {
      resultTitle.textContent = 'KẾT QUẢ ĐẠT! CỐ GẮNG THÊM';
      trophyEl.textContent = '🥈';
    } else {
      resultTitle.textContent = 'CẦN ÔN TẬP KỸ HƠN! 📚';
      trophyEl.textContent = '💪';
    }

    // Render Chapter Breakdown
    breakdownList.innerHTML = '';
    Object.keys(chapterStats).forEach((chId) => {
      const stat = chapterStats[chId];
      const chInfo = CHAPTERS_DATA.find((c) => c.id === chId);
      const chPercent = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;

      const item = document.createElement('div');
      item.className = 'breakdown-item';
      item.innerHTML = `
        <div class="breakdown-item-top">
          <span>${chInfo ? chInfo.title : chId}</span>
          <span>${stat.correct}/${stat.total} câu (${chPercent}%)</span>
        </div>
        <div class="breakdown-track">
          <div class="breakdown-fill" style="width: ${chPercent}%; background-color: ${chPercent >= 80 ? 'var(--success)' : chPercent >= 50 ? 'var(--warning)' : 'var(--danger)'}"></div>
        </div>
      `;
      breakdownList.appendChild(item);
    });

    examResultModal.style.display = 'flex';
  }

  // ==========================================
  // 9. EVENT LISTENERS
  // ==========================================
  function attachEventListeners() {
    // Brand Logo & Back to Home
    btnGoHome.addEventListener('click', goHome);
    btnBackToHome.addEventListener('click', goHome);

    // Theme Toggle
    btnThemeToggle.addEventListener('click', toggleTheme);

    // Reset Progress
    btnResetAllProgress.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ ôn tập và câu trả lời? Thao tác này không thể hoàn tác.')) {
        appState.answered = {};
        appState.bookmarks = [];
        saveState();
        alert('Đã đặt lại tiến độ thành công!');
      }
    });

    // Hero buttons
    btnStartAllPractice.addEventListener('click', () => {
      startQuizSession(null, 'practice');
    });

    btnStartAllExam.addEventListener('click', () => {
      // Pick 40 random questions from across all chapters
      const shuffled = [...QUESTIONS_BANK].sort(() => 0.5 - Math.random());
      const selected40 = shuffled.slice(0, 40);
      startQuizSession(null, 'exam', selected40);
    });

    // Starred count in header clicked: filter to starred questions
    btnFilterStarredHeader.addEventListener('click', () => {
      if (appState.bookmarks.length === 0) {
        alert('Bạn chưa đánh dấu sao câu hỏi nào. Hãy nhấp biểu tượng ⭐ khi làm bài để lưu lại các câu quan trọng!');
        return;
      }
      const starredQuestions = QUESTIONS_BANK.filter((q) => appState.bookmarks.includes(q.id));
      startQuizSession(null, 'practice', starredQuestions);
    });

    // Chapter Card Clicks
    chaptersGrid.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('button[data-chapter]');
      if (!targetBtn) return;

      const chapterId = targetBtn.dataset.chapter;
      const action = targetBtn.dataset.action; // 'practice' or 'exam'

      startQuizSession(chapterId, action);
    });

    // Quiz Navigation Buttons
    btnNextQuestion.addEventListener('click', goToNextQuestion);
    btnPrevQuestion.addEventListener('click', goToPrevQuestion);
    btnResetQuestion.addEventListener('click', resetCurrentQuestion);
    btnToggleBookmark.addEventListener('click', toggleBookmarkCurrentQuestion);
    btnShuffleQuiz.addEventListener('click', shuffleCurrentQuiz);
    btnSubmitExam.addEventListener('click', () => {
      const answeredCount = Object.keys(currentSession.examAnswers).length;
      const total = currentSession.questions.length;
      if (confirm(`Bạn đã làm ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài thi ngay không?`)) {
        submitExam();
      }
    });

    // Palette Filter Tabs
    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        currentSession.filter = tab.dataset.filter;
        renderPalette();
      });
    });

    // Exam Modal Action Buttons
    btnCloseResultModal.addEventListener('click', () => {
      examResultModal.style.display = 'none';
      goHome();
    });

    btnRetakeExam.addEventListener('click', () => {
      examResultModal.style.display = 'none';
      startQuizSession(currentSession.chapterId, 'exam');
    });

    btnReviewExamQuestions.addEventListener('click', () => {
      examResultModal.style.display = 'none';
      // Switch current session to practice mode so user sees explanations for all questions!
      currentSession.mode = 'practice';
      modeBadgeText.textContent = 'Xem Lại Chi Tiết & Lời Giải';
      examTimerBox.style.display = 'none';
      btnSubmitExam.style.display = 'none';
      btnResetQuestion.style.display = 'inline-flex';

      // Switch filter to 'incorrect' so user immediately sees their wrong answers
      filterTabs.forEach((t) => {
        t.classList.toggle('active', t.dataset.filter === 'incorrect');
      });
      currentSession.filter = 'incorrect';

      renderCurrentQuestion();
      renderPalette();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  function handleKeyboardShortcuts(e) {
    if (!viewQuiz.classList.contains('active')) return;
    if (examResultModal.style.display === 'flex') return;

    // Keys 1, 2, 3, 4
    if (['1', '2', '3', '4'].includes(e.key)) {
      handleOptionSelect(parseInt(e.key, 10) - 1);
    }
    // Keys A, B, C, D (case-insensitive)
    else if (['a', 'A'].includes(e.key)) {
      handleOptionSelect(0);
    } else if (['b', 'B'].includes(e.key) && !e.ctrlKey && !e.metaKey) {
      // If pressing alone: can be option B or bookmark toggle. Let's make B toggle bookmark if shift is pressed, or option B
      // To prevent ambiguity, pressing B selects option B (index 1), Shift+B bookmarks!
      handleOptionSelect(1);
    } else if (['c', 'C'].includes(e.key)) {
      handleOptionSelect(2);
    } else if (['d', 'D'].includes(e.key)) {
      handleOptionSelect(3);
    }
    // Arrow Left: Previous
    else if (e.key === 'ArrowLeft') {
      goToPrevQuestion();
    }
    // Arrow Right: Next
    else if (e.key === 'ArrowRight') {
      goToNextQuestion();
    }
  }

  function goHome() {
    if (currentSession.examTimer) {
      if (!confirm('Bạn đang trong bài thi có tính giờ. Thoát ra sẽ hủy bài thi hiện tại. Bạn có chắc không?')) {
        return;
      }
      clearInterval(currentSession.examTimer);
      currentSession.examTimer = null;
    }

    viewQuiz.classList.remove('active');
    viewHome.classList.add('active');
    updateGlobalStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // RUN APPLICATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', initApp);
})();
