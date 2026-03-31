/* ===================================
   TESTING.JS - МОДУЛЬ ОНЛАЙН-ТЕСТИРОВАНИЯ
   =================================== */

let testingState = null;

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ⚠  Используем СТРОГО NEO_TG_TESTING (@tiift_helper_bot).
// Fallback на NEO_TG_CONFIG/NEO_TG_SUPPORT намеренно убран —
// он указывал на бот ПОДДЕРЖКИ и вызывал маршрутизацию не туда.
function getNeoTelegramConfig() {
    if(typeof window === 'undefined') return null;
    var cfg = window.NEO_TG_TESTING || null;
    if(!cfg || !cfg.enabled || !cfg.token || !cfg.chatId) return null;
    return cfg;
}

function isBlankAnswerValue(ans) {
    if(ans === null || ans === undefined) return true;
    if(Array.isArray(ans)) return ans.length === 0;
    return String(ans).trim().length === 0;
}

function isQuestionAnswered(q) {
    if(!testingState) return false;
    return !isBlankAnswerValue(testingState.answers[q.id]);
}

function markMissedQuestionButtons(missedNums1Based) {
    if(!testingState) return;
    var btns = document.querySelectorAll('.qmap-btn');
    if(!btns || btns.length === 0) return;

    var missedSet = new Set((missedNums1Based || []).map(function(x){ return String(x); }));
    btns.forEach(function(btn, idx) {
        var n = String(idx + 1);
        if(missedSet.has(n)) btn.classList.add('qmap-missed');
        else btn.classList.remove('qmap-missed');
    });
}

/* ─────────────────────────────────────────────
   ВАЛИДАТОР: возвращает массив 1-based номеров
   вопросов, на которые ответ не дан
   ───────────────────────────────────────────── */
function getUnansweredIndices() {
    if(!testingState) return [];
    var missed = [];
    testingState.questions.forEach(function(q, idx) {
        var ans = testingState.answers[q.id];
        if(isBlankAnswerValue(ans)) {
            missed.push(idx + 1); // 1-based для отображения
        }
    });
    return missed;
}

/* ─────────────────────────────────────────────
   МОДАЛЬНОЕ ОКНО: деловой стиль, список
   пропущенных вопросов с кнопками навигации
   ───────────────────────────────────────────── */
function showUnansweredModal(missedNums) {
    // Удаляем предыдущий экземпляр, если есть
    var old = document.getElementById('unansweredModal');
    if(old) old.parentNode.removeChild(old);

    var numsHtml = missedNums.map(function(n) {
        return '<button class="unans-nav-btn" onclick="closeUnansweredModal(); goToQuestion(' + (n - 1) + ')">' + n + '</button>';
    }).join('');

    var modal = document.createElement('div');
    modal.id = 'unansweredModal';
    modal.innerHTML =
        '<div class="unans-overlay" onclick="closeUnansweredModal()"></div>' +
        '<div class="unans-modal">' +
            '<div class="unans-modal-icon"><i class="fas fa-exclamation-circle"></i></div>' +
            '<h3 class="unans-modal-title">Тестирование не завершено</h3>' +
            '<p class="unans-modal-body">' +
                'Для завершения тестирования и получения итогового результата необходимо ' +
                'предоставить ответы на все вопросы. Пожалуйста, вернитесь к следующим пунктам:' +
            '</p>' +
            '<div class="unans-nums">' + numsHtml + '</div>' +
            '<p class="unans-modal-hint">Нажмите на номер вопроса для быстрого перехода.</p>' +
            '<button class="btn-main unans-close-btn" onclick="closeUnansweredModal()">Вернуться к тесту</button>' +
        '</div>';

    // Инлайн-стили модального окна
    var style = document.createElement('style');
    style.id = 'unansweredModalStyle';
    style.textContent =
        '.unans-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:9000;cursor:pointer;}' +
        '.unans-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9001;' +
            'background:var(--card-bg);border:1px solid var(--error-red);border-radius:16px;' +
            'box-shadow:0 0 40px rgba(255,77,77,.25);width:90%;max-width:480px;padding:32px 28px;' +
            'text-align:center;animation:slideDown .25s ease;}' +
        '.unans-modal-icon{font-size:2.6rem;color:var(--error-red);margin-bottom:14px;}' +
        '.unans-modal-title{color:var(--text-main);font-size:1.15rem;font-weight:700;margin:0 0 14px;}' +
        '.unans-modal-body{color:var(--text-sec);font-size:.9rem;line-height:1.65;margin:0 0 20px;}' +
        '.unans-nums{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:14px;}' +
        '.unans-nav-btn{background:rgba(255,77,77,.12);border:1px solid rgba(255,77,77,.45);' +
            'color:#ff6b6b;border-radius:8px;width:40px;height:40px;font-size:.9rem;font-weight:600;' +
            'cursor:pointer;transition:all .2s;}' +
        '.unans-nav-btn:hover{background:rgba(255,77,77,.3);color:#fff;}' +
        '.unans-modal-hint{color:var(--text-sec);font-size:.78rem;margin:0 0 22px;}' +
        '.unans-close-btn{width:100%;margin:0;}';

    var oldStyle = document.getElementById('unansweredModalStyle');
    if(oldStyle) oldStyle.parentNode.removeChild(oldStyle);
    document.head.appendChild(style);
    document.body.appendChild(modal);
}

function closeUnansweredModal() {
    var modal = document.getElementById('unansweredModal');
    if(modal) modal.parentNode.removeChild(modal);
}

/* ─────────────────────────────────────────────
   ПРЯМОЙ ПЕРЕХОД К ВОПРОСУ по индексу (0-based)
   ───────────────────────────────────────────── */
function goToQuestion(idx) {
    if(!testingState) return;
    if(idx >= 0 && idx < testingState.questions.length) {
        testingState.index = idx;
        renderCurrentQuestion();
    }
}

function initTesting() {
    if(typeof isAuthenticated !== 'undefined' && !isAuthenticated) {
        if(typeof showLocked === 'function') showLocked();
        return;
    }
    renderTestingHome();
}

function renderTestingHome() {
    const root = document.getElementById('testingRoot');
    if(!root) return;

    const keys = Object.keys(TEST_BANK || {});
    if(keys.length === 0) {
        root.innerHTML = '<div class="testing-placeholder"><h2>Тесты не найдены</h2><p>Добавьте вопросы в <code>js/tests.js</code></p></div>';
        return;
    }

    let cards = '';
    keys.forEach(function(k) {
        const title = (subjectsContent && subjectsContent[k] && subjectsContent[k].title) ? subjectsContent[k].title : (TEST_BANK[k].title || k);
        const count = (TEST_BANK[k].questions || []).length;
        const writtenCount = (typeof WRITTEN_TEST_BANK !== 'undefined' && WRITTEN_TEST_BANK && WRITTEN_TEST_BANK[k] && WRITTEN_TEST_BANK[k].questions)
            ? WRITTEN_TEST_BANK[k].questions.length
            : 0;
        cards +=
            '<div class="test-card">' +
                '<div class="test-card-title">' + escapeHtml(title) + '</div>' +
                '<div class="test-card-meta">Тест: <b>' + count + '</b>' + (writtenCount ? (' · Письменные: <b>' + writtenCount + '</b>') : '') + '</div>' +
                '<button class="btn-main" style="margin-top:12px;" onclick="openTestSubject(\'' + k + '\')">Открыть</button>' +
            '</div>';
    });

    root.innerHTML =
        '<div class="test-home">' +
            '<div class="test-home-note">' +
                '<div style="color: var(--text-main); font-weight: 600; margin-bottom: 8px;">Правила</div>' +
                '<ul style="margin-left: 18px; color: var(--text-sec); line-height: 1.6;">' +
                    '<li>Можно выбрать <b>один</b> или <b>несколько</b> вариантов (зависит от вопроса).</li>' +
                    '<li>Разрешается пропускать вопросы и возвращаться к ним позже.</li>' +
                    '<li>Правильные ответы <b>не показываются</b> во время прохождения.</li>' +
                    '<li>Завершение теста возможно только при <b>ответах на все вопросы</b>.</li>' +
                    '<li>После завершения вы увидите <b>балл</b> и <b>работу над ошибками</b>.</li>' +
                    '<li>Письменные ответы отправляются администратору, а ответ/пояснение будет доступно в разделе <b>«Профиль»</b>.</li>' +
                '</ul>' +
            '</div>' +
            '<div class="test-subject-grid">' + cards + '</div>' +
        '</div>';
}

function openTestSubject(subjectKey) {
    const root = document.getElementById('testingRoot');
    if(!root) return;
    const test = (TEST_BANK || {})[subjectKey];
    if(!test) {
        root.innerHTML = '<p style="color: var(--text-sec); text-align:center;">Тест не найден.</p>';
        return;
    }

    const title = (subjectsContent && subjectsContent[subjectKey] && subjectsContent[subjectKey].title) ? subjectsContent[subjectKey].title : (test.title || subjectKey);
    const count = (test.questions || []).length;
    const writtenCount = (typeof WRITTEN_TEST_BANK !== 'undefined' && WRITTEN_TEST_BANK && WRITTEN_TEST_BANK[subjectKey] && WRITTEN_TEST_BANK[subjectKey].questions)
        ? WRITTEN_TEST_BANK[subjectKey].questions.length
        : 0;

    root.innerHTML =
        '<div class="test-panel">' +
            '<button class="chat-btn" onclick="renderTestingHome()" style="margin-bottom: 16px;">' +
                '<i class="fas fa-arrow-left"></i> К выбору предметов' +
            '</button>' +
            '<h2 style="color: var(--neon-yellow); margin-bottom: 10px;">' + escapeHtml(title) + '</h2>' +
            '<div style="color: var(--text-sec); margin-bottom: 10px;">Вопросов в тесте: <b>' + count + '</b></div>' +
            (writtenCount ? ('<div style="color: var(--text-sec); margin-bottom: 18px;">Письменных вопросов: <b>' + writtenCount + '</b> (ответ появится в <b>Профиле</b>)</div>') : '<div style="height:8px;"></div>') +
            '<div style="display:flex; gap:12px; flex-wrap:wrap;">' +
                '<button class="btn-main" onclick="beginTest(\'' + subjectKey + '\')">Начать тест</button>' +
                (writtenCount
                    ? '<button class="btn-main" style="background: var(--neon-green); color:#000;" onclick="beginWrittenTest(\'' + subjectKey + '\')"><i class="fas fa-pen"></i> Письменные вопросы</button>'
                    : ''
                ) +
            '</div>' +
        '</div>';
}

function beginTest(subjectKey) {
    const test = (TEST_BANK || {})[subjectKey];
    if(!test || !test.questions || test.questions.length === 0) return;

    testingState = {
        mode: 'mcq',
        subjectKey: subjectKey,
        questions: test.questions,
        answers: {}, // questionId -> array(optionId)
        index: 0,
        startedAt: Date.now(),
        lastMissed: []
    };

    renderCurrentQuestion();
}

function beginWrittenTest(subjectKey) {
    const test = (typeof WRITTEN_TEST_BANK !== 'undefined' && WRITTEN_TEST_BANK) ? WRITTEN_TEST_BANK[subjectKey] : null;
    if(!test || !test.questions || test.questions.length === 0) return;

    testingState = {
        mode: 'written',
        subjectKey: subjectKey,
        questions: test.questions,
        answers: {}, // questionId -> string
        index: 0,
        startedAt: Date.now(),
        lastMissed: []
    };

    renderCurrentQuestion();
}

function setAnswer(questionId, selectedIds) {
    if(!testingState) return;
    testingState.answers[questionId] = selectedIds;
}

function getAnswer(questionId) {
    if(!testingState) return [];
    return testingState.answers[questionId] || [];
}

function renderCurrentQuestion() {
    const root = document.getElementById('testingRoot');
    if(!root || !testingState) return;

    const q = testingState.questions[testingState.index];
    const title = (subjectsContent && subjectsContent[testingState.subjectKey] && subjectsContent[testingState.subjectKey].title)
        ? subjectsContent[testingState.subjectKey].title
        : testingState.subjectKey;

    const isText = q.type === 'text';
    const selected = isText ? (testingState.answers[q.id] || '') : getAnswer(q.id);
    const isMulti = q.type === 'multi';

    // ── Карта вопросов: зелёный = отвечен, серый = пропущен, синий = текущий ──
    let mapHtml = '<div class="test-qmap">';
    testingState.questions.forEach(function(qq, idx) {
        const isAnswered = isQuestionAnswered(qq);
        const isCurrent  = idx === testingState.index;
        var cls = 'qmap-btn';
        if(isCurrent)       cls += ' qmap-current';
        else if(isAnswered) cls += ' qmap-done';
        else                cls += ' qmap-empty';
        mapHtml += '<button class="' + cls + '" onclick="goToQuestion(' + idx + ')" title="Вопрос ' + (idx+1) + '">' + (idx + 1) + '</button>';
    });
    mapHtml += '</div>';

    // Добавляем стили карты (один раз, если ещё нет)
    if(!document.getElementById('qmapStyle')) {
        var s = document.createElement('style');
        s.id = 'qmapStyle';
        s.textContent =
            '.test-qmap{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;padding:12px 14px;' +
                'background:rgba(255,255,255,.04);border-radius:10px;border:1px solid var(--border-color);}' +
            '.qmap-btn{width:34px;height:34px;border-radius:7px;border:1px solid;font-size:.8rem;' +
                'font-weight:600;cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;justify-content:center;}' +
            '.qmap-done{background:rgba(10,255,104,.15);border-color:rgba(10,255,104,.5);color:var(--neon-green);}' +
            '.qmap-done:hover{background:rgba(10,255,104,.28);}' +
            '.qmap-empty{background:rgba(255,255,255,.05);border-color:var(--border-color);color:var(--text-sec);}' +
            '.qmap-empty:hover{background:rgba(255,255,255,.12);color:var(--text-main);}' +
            '.qmap-current{background:rgba(0,243,255,.18);border-color:var(--neon-blue);color:var(--neon-blue);' +
                'box-shadow:0 0 8px rgba(0,243,255,.3);}' +
            '.qmap-missed{background:rgba(255,77,77,.12)!important;border-color:rgba(255,77,77,.55)!important;color:#ff6b6b!important;}' +
            '.qmap-legend{display:flex;gap:14px;margin-bottom:6px;font-size:.75rem;color:var(--text-sec);flex-wrap:wrap;}' +
            '.qmap-legend span{display:flex;align-items:center;gap:5px;}';
        document.head.appendChild(s);
    }

    let optionsHtml = '';
    if(isText) {
        if(!document.getElementById('textAnswerStyle')) {
            var ts = document.createElement('style');
            ts.id = 'textAnswerStyle';
            ts.textContent =
                '.test-textarea{width:100%;min-height:140px;resize:vertical;padding:12px 14px;border-radius:12px;' +
                'border:1px solid var(--border-color);background:rgba(255,255,255,.03);color:var(--text-main);' +
                'outline:none;line-height:1.6;font-size:.92rem;}' +
                '.test-textarea:focus{border-color:var(--neon-blue);box-shadow:0 0 10px rgba(0,243,255,.18);}';
            document.head.appendChild(ts);
        }
        optionsHtml =
            '<textarea class="test-textarea" placeholder="Введите ваш ответ..." oninput="onTextAnswerChange(\'' + q.id + '\', this.value)">' +
            escapeHtml(selected) +
            '</textarea>';
    } else {
        (q.options || []).forEach(function(opt) {
            const checked = selected.includes(opt.id);
            const inputType = isMulti ? 'checkbox' : 'radio';
            const name = 'q_' + q.id;
            optionsHtml +=
                '<label class="test-option">' +
                    '<input type="' + inputType + '" name="' + name + '" value="' + opt.id + '" ' + (checked ? 'checked' : '') +
                    ' onchange="onOptionChange(\'' + q.id + '\', \'' + (isMulti ? 'multi' : 'single') + '\')">' +
                    '<span class="test-option-text"><b>(' + escapeHtml(opt.id) + ')</b> ' + escapeHtml(opt.text) + '</span>' +
                '</label>';
        });
    }

    const progressText = (testingState.index + 1) + ' / ' + testingState.questions.length;
    const answeredCount = testingState.questions.filter(function(qq) { return isQuestionAnswered(qq); }).length;

    root.innerHTML =
        '<div class="test-panel">' +
            '<div class="test-header">' +
                '<button class="chat-btn" onclick="openTestSubject(\'' + testingState.subjectKey + '\')">' +
                    '<i class="fas fa-arrow-left"></i> Выйти из теста' +
                '</button>' +
                '<div class="test-progress">' + escapeHtml(title) + ' — <b>' + progressText + '</b></div>' +
            '</div>' +

            // Карта вопросов + легенда
            '<div class="qmap-legend">' +
                '<span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgba(10,255,104,.25);border:1px solid rgba(10,255,104,.5);"></span> Отвечен (' + answeredCount + ')</span>' +
                '<span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgba(0,243,255,.18);border:1px solid var(--neon-blue);"></span> Текущий</span>' +
                '<span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgba(255,255,255,.05);border:1px solid var(--border-color);"></span> Не отвечен (' + (testingState.questions.length - answeredCount) + ')</span>' +
            '</div>' +
            mapHtml +

            '<div class="test-question">' +
                '<div class="test-question-title">' + escapeHtml(q.prompt) + '</div>' +
                '<div class="test-question-hint">' +
                    (isText ? 'Введите ответ своими словами.' : (isMulti ? 'Можно выбрать несколько вариантов.' : 'Выберите один вариант.')) +
                '</div>' +
                '<div class="test-options">' + optionsHtml + '</div>' +
            '</div>' +

            '<div class="test-nav">' +
                '<button class="chat-btn" onclick="prevQuestion()" ' + (testingState.index === 0 ? 'disabled' : '') + '>' +
                    '<i class="fas fa-chevron-left"></i> Назад' +
                '</button>' +
                (testingState.index < testingState.questions.length - 1
                    ? '<button class="btn-main" style="width:auto;padding:12px 26px;margin:0;" onclick="nextQuestion()">Далее <i class="fas fa-chevron-right"></i></button>'
                    : '<button class="btn-main" style="width:auto;padding:12px 26px;margin:0;background:var(--neon-green);color:#000;" onclick="finishTest()"><i class="fas fa-check"></i> Завершить</button>'
                ) +
            '</div>' +
        '</div>';

    // если ранее фиксировали пропуски — подсветить их в карте
    if(testingState.lastMissed && testingState.lastMissed.length) {
        markMissedQuestionButtons(testingState.lastMissed);
    }
}

function onOptionChange(questionId, mode) {
    if(!testingState) return;
    const q = testingState.questions.find(function(x){ return x.id === questionId; });
    if(!q) return;

    const name = 'q_' + questionId;
    const inputs = document.querySelectorAll('input[name="' + name + '"]');
    const selected = [];
    inputs.forEach(function(inp) {
        if(inp.checked) selected.push(inp.value);
    });

    if(mode === 'single' && selected.length > 1) {
        setAnswer(questionId, [selected[selected.length - 1]]);
    } else {
        setAnswer(questionId, selected);
    }

    // Обновляем карту вопросов без перерисовки всей страницы
    refreshQuestionMap();
}

function onTextAnswerChange(questionId, value) {
    if(!testingState) return;
    testingState.answers[questionId] = value;
    refreshQuestionMap();
}

/* ─────────────────────────────────────────────
   Обновление карты вопросов без полной перерисовки
   ───────────────────────────────────────────── */
function refreshQuestionMap() {
    if(!testingState) return;
    var btns = document.querySelectorAll('.qmap-btn');
    if(!btns.length) return;

    var answeredCount = 0;
    testingState.questions.forEach(function(qq, idx) {
        var isAnswered = isQuestionAnswered(qq);
        var isCurrent  = idx === testingState.index;
        var btn = btns[idx];
        if(!btn) return;
        btn.className = 'qmap-btn ' + (isCurrent ? 'qmap-current' : isAnswered ? 'qmap-done' : 'qmap-empty');
        if(testingState.lastMissed && testingState.lastMissed.length) {
            // сохраняем подсветку пропусков (если она активна)
            var n = idx + 1;
            if(testingState.lastMissed.indexOf(n) !== -1 && !isAnswered) btn.classList.add('qmap-missed');
        }
        if(isAnswered) answeredCount++;
    });

    // Обновляем счётчики в легенде
    var legendSpans = document.querySelectorAll('.qmap-legend span');
    if(legendSpans[0]) legendSpans[0].innerHTML =
        '<span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgba(10,255,104,.25);border:1px solid rgba(10,255,104,.5);"></span> Отвечен (' + answeredCount + ')';
    if(legendSpans[2]) legendSpans[2].innerHTML =
        '<span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgba(255,255,255,.05);border:1px solid var(--border-color);"></span> Не отвечен (' + (testingState.questions.length - answeredCount) + ')';
}

function nextQuestion() {
    if(!testingState) return;
    if(testingState.index < testingState.questions.length - 1) {
        testingState.index++;
        renderCurrentQuestion();
    }
}

function prevQuestion() {
    if(!testingState) return;
    if(testingState.index > 0) {
        testingState.index--;
        renderCurrentQuestion();
    }
}

function isQuestionCorrect(q, selected) {
    const sel = (selected || []).slice().sort();
    const cor = (q.correct || []).slice().sort();
    if(sel.length !== cor.length) return false;
    for(let i = 0; i < sel.length; i++) if(sel[i] !== cor[i]) return false;
    return true;
}

function optionText(q, optionId) {
    const opt = (q.options || []).find(function(o){ return o.id === optionId; });
    return opt ? opt.text : optionId;
}

function finishTest() {
    if(!testingState) return;
    const root = document.getElementById('testingRoot');
    if(!root) return;

    // ── ВАЛИДАЦИЯ: блокируем завершение при наличии пропущенных вопросов ──
    var missed = getUnansweredIndices();
    if(missed.length > 0) {
        testingState.lastMissed = missed.slice();
        markMissedQuestionButtons(missed);
        showUnansweredModal(missed);
        return; // финализация прервана
    }
    testingState.lastMissed = [];

    if(testingState.mode === 'written') {
        finishWrittenTest();
        return;
    }

    const questions = testingState.questions;
    let correctCount = 0;

    const details = questions.map(function(q) {
        const selected = getAnswer(q.id);
        const ok = isQuestionCorrect(q, selected);
        if(ok) correctCount++;
        return {
            id: q.id,
            prompt: q.prompt,
            selected: selected,
            correct: q.correct || [],
            ok: ok,
            type: q.type || 'single',
            options: q.options || []
        };
    });

    const total = questions.length;
    const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const finishedAt = Date.now();

    saveTestResult({
        subjectKey: testingState.subjectKey,
        correct: correctCount,
        total: total,
        percent: percent,
        startedAt: testingState.startedAt,
        finishedAt: finishedAt,
        details: details
    });

    const title = (subjectsContent && subjectsContent[testingState.subjectKey] && subjectsContent[testingState.subjectKey].title)
        ? subjectsContent[testingState.subjectKey].title
        : testingState.subjectKey;

    let items = '';
    details.forEach(function(d, idx) {
        const your = d.selected.length ? d.selected.map(function(x){ return '(' + x + ') ' + optionText(d, x); }).join(', ') : '—';
        const corr = d.correct.length ? d.correct.map(function(x){ return '(' + x + ') ' + optionText(d, x); }).join(', ') : '—';
        items +=
            '<div class="test-result-item ' + (d.ok ? 'ok' : 'bad') + '">' +
                '<div class="test-result-q"><b>Вопрос ' + (idx + 1) + ':</b> ' + escapeHtml(d.prompt) + '</div>' +
                '<div class="test-result-a"><b>Ваш ответ:</b> ' + escapeHtml(your) + '</div>' +
                '<div class="test-result-c"><b>Верный ответ:</b> ' + escapeHtml(corr) + '</div>' +
            '</div>';
    });

    root.innerHTML =
        '<div class="test-panel">' +
            '<button class="chat-btn" onclick="renderTestingHome()" style="margin-bottom: 16px;">' +
                '<i class="fas fa-arrow-left"></i> К выбору предметов' +
            '</button>' +
            '<h2 style="color: var(--neon-green); margin-bottom: 10px;">Результаты — ' + escapeHtml(title) + '</h2>' +
            '<div class="test-summary">' +
                '<div><b>Баллы:</b> ' + correctCount + ' / ' + total + '</div>' +
                '<div><b>Процент:</b> ' + percent + '%</div>' +
            '</div>' +
            '<div class="test-results-list">' + items + '</div>' +
            '<div class="test-nav" style="margin-top: 18px;">' +
                '<button class="chat-btn" onclick="openTestSubject(\'' + testingState.subjectKey + '\')">Пройти ещё раз</button>' +
                '<button class="btn-main" style="width:auto; padding: 12px 26px; margin:0;" onclick="renderTestingHome()">Другой предмет</button>' +
            '</div>' +
        '</div>';

    testingState = null;
}

async function finishWrittenTest() {
    if(!testingState) return;
    const root = document.getElementById('testingRoot');
    if(!root) return;

    if(typeof currentUser === 'undefined' || !currentUser || !currentUser.uid) return;

    const cfg = getNeoTelegramConfig();
    const subjectKey = testingState.subjectKey;
    const title = (subjectsContent && subjectsContent[subjectKey] && subjectsContent[subjectKey].title)
        ? subjectsContent[subjectKey].title
        : subjectKey;

    const sentAt = Date.now();
    const payload = testingState.questions.map(function(q, idx) {
        return {
            source: 'testing',
            uid: currentUser.uid,
            fio: currentUser.fio || '—',
            university: currentUser.university || '—',
            email: currentUser.email || '—',
            subjectKey: subjectKey,
            subjectTitle: title,
            questionId: q.id,
            questionNumber: idx + 1,
            question: q.prompt,
            studentAnswer: String(testingState.answers[q.id] || '').trim(),
            timestamp: sentAt
        };
    });

    // сохраняем локально (нужно для привязки ответов в профиле)
    try {
        const raw = localStorage.getItem('writtenQuestions') || '[]';
        const arr = JSON.parse(raw);
        const merged = Array.isArray(arr) ? arr : [];
        payload.forEach(function(p) { merged.push(p); });
        localStorage.setItem('writtenQuestions', JSON.stringify(merged));
    } catch(e) {}

    // UI: индикатор отправки
    root.innerHTML =
        '<div class="test-panel">' +
            '<h2 style="color: var(--neon-green); margin-bottom: 10px;">Письменные ответы отправляются</h2>' +
            '<div style="color: var(--text-sec); line-height: 1.6;">' +
                '<i class="fas fa-spinner fa-spin"></i> Пожалуйста, подождите...' +
            '</div>' +
        '</div>';

    let ok = true;
    if(!cfg) ok = false;

    if(cfg) {
        for(let i = 0; i < payload.length; i++) {
            const p = payload[i];
            const text = [
                '📝 <b>Письменный ответ (Тестирование)</b>',
                '',
                `🆔 <b>ID студента:</b> <code>${p.uid}</code>`,
                `👤 <b>ФИО:</b> ${escapeHtml(p.fio)}`,
                `🎓 <b>ВУЗ:</b> ${escapeHtml(p.university)}`,
                `📧 <b>Email:</b> ${escapeHtml(p.email)}`,
                '',
                `📚 <b>Предмет:</b> ${escapeHtml(p.subjectTitle)}`,
                `🔢 <b>Вопрос №:</b> ${p.questionNumber}`,
                `🏷 <b>Код вопроса:</b> <code>${subjectKey} ${p.questionId}</code>`,
                '',
                `❓ <b>Вопрос:</b>`,
                escapeHtml(p.question),
                '',
                `✍️ <b>Ответ студента:</b>`,
                escapeHtml(p.studentAnswer),
                '',
                `🕐 <b>Время:</b> ${new Date(p.timestamp).toLocaleString('ru-RU')}`,
                '',
                `💬 <i>Чтобы ответить студенту, напишите:</i>`,
                `<code>/treply ${p.uid} ${subjectKey} ${p.questionId} [ваш ответ]</code>`
            ].join('\n');

            try {
                const res = await fetch('https://api.telegram.org/bot' + cfg.token + '/sendMessage', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: cfg.chatId,
                        text: text,
                        parse_mode: 'HTML'
                    })
                });
                const data = await res.json();
                if(!data || !data.ok) ok = false;
            } catch(e) {
                ok = false;
            }
        }
    }

    root.innerHTML =
        '<div class="test-panel">' +
            '<button class="chat-btn" onclick="openTestSubject(\'' + subjectKey + '\')" style="margin-bottom: 16px;">' +
                '<i class="fas fa-arrow-left"></i> Назад к предмету' +
            '</button>' +
            '<h2 style="color: var(--neon-green); margin-bottom: 10px;">Письменные ответы зафиксированы</h2>' +
            '<div style="color: var(--text-sec); line-height: 1.7;">' +
                (ok
                    ? 'Ваши ответы направлены администратору. Ответы и пояснения будут доступны в разделе <b>«Профиль → Мои вопросы и ответы»</b>.'
                    : 'Ваши ответы сохранены на устройстве. Интеграция Telegram не настроена или временно недоступна. Ответы и пояснения появятся в профиле после восстановления отправки.'
                ) +
            '</div>' +
            '<div style="margin-top: 18px; display:flex; gap: 12px; flex-wrap: wrap;">' +
                '<button class="btn-main" style="width:auto; padding:12px 26px; margin:0;" onclick="beginWrittenTest(\'' + subjectKey + '\')">Пройти снова</button>' +
                '<button class="chat-btn" style="width:auto; padding:12px 26px; margin:0;" onclick="renderTestingHome()">Другой предмет</button>' +
            '</div>' +
        '</div>';

    testingState = null;
}

function saveTestResult(result) {
    if(typeof currentUser === 'undefined' || !currentUser || !currentUser.uid) return;

    const uid = currentUser.uid;
    const key = 'neoTestResults_' + uid;
    let data = null;
    try {
        data = JSON.parse(localStorage.getItem(key) || 'null');
    } catch(e) {
        data = null;
    }
    if(!data || typeof data !== 'object') data = {};
    if(!Array.isArray(data.attempts)) data.attempts = [];
    if(!data.bestBySubject || typeof data.bestBySubject !== 'object') data.bestBySubject = {};

    data.attempts.push({
        subjectKey: result.subjectKey,
        correct: result.correct,
        total: result.total,
        percent: result.percent,
        startedAt: result.startedAt,
        finishedAt: result.finishedAt
    });
    if(data.attempts.length > 100) data.attempts = data.attempts.slice(-100);

    const prev = data.bestBySubject[result.subjectKey];
    const isBetter = !prev || (result.correct > prev.correct);
    if(isBetter) {
        data.bestBySubject[result.subjectKey] = {
            correct: result.correct,
            total: result.total,
            percent: result.percent,
            timestamp: result.finishedAt
        };
    }

    // Общий балл = сумма лучших результатов (по количеству верных)
    let totalScore = 0;
    Object.keys(data.bestBySubject).forEach(function(k) {
        const v = data.bestBySubject[k];
        if(v && typeof v.correct === 'number' && isFinite(v.correct)) totalScore += v.correct;
    });
    data.totalScore = totalScore;
    data.updatedAt = Date.now();

    localStorage.setItem(key, JSON.stringify(data));

    // Пробуем записать общий балл в профиль пользователя
    try {
        currentUser.totalScore = totalScore;
        const email = currentUser.email || localStorage.getItem('neoCurrentUserEmail');
        if(email) {
            const userKey = 'user_' + email;
            const raw = localStorage.getItem(userKey);
            if(raw) {
                const u = JSON.parse(raw);
                u.totalScore = totalScore;
                localStorage.setItem(userKey, JSON.stringify(u));
            }
        }
    } catch(e) {}
}