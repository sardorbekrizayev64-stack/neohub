/* ===================================
   CHAT.JS - СИСТЕМА ПОДДЕРЖКИ
   =================================== */

let chatBlockedUntil = 0;
let lastQuestionAsked = null;
let questionRepeatCount = 0;
let userQuestions = [];

// ===================================
// TELEGRAM BOT КОНФИГУРАЦИЯ (единая)
// ===================================
// ── Поддержка использует СТРОГО @my_site_ai_bot (NEO_TG_SUPPORT) ────────
// ⚠  НЕ использовать NEO_TG_TESTING здесь — он зарезервирован для testing.js
const TG_CONFIG = (typeof window !== 'undefined' && window.NEO_TG_SUPPORT)
    ? window.NEO_TG_SUPPORT
    : { token: '', chatId: '', enabled: false };

// Отправка вопроса в Telegram
async function sendToTelegram(questionData) {
    if(!TG_CONFIG.enabled || !TG_CONFIG.token || TG_CONFIG.token === 'YOUR_BOT_TOKEN') {
        console.warn('⚠️ Telegram бот не настроен. Вопрос сохранён локально.');
        return false;
    }
    
    const text = [
        '📩 <b>Новый вопрос от студента</b>',
        '',
        `🆔 <b>ID студента:</b> <code>${questionData.uid}</code>`,
        `👤 <b>ФИО:</b> ${questionData.fio}`,
        `🎓 <b>ВУЗ:</b> ${questionData.university}`,
        `📧 <b>Email:</b> ${questionData.email}`,
        '',
        `❓ <b>Вопрос:</b>`,
        questionData.question,
        '',
        `🕐 <b>Время:</b> ${new Date(questionData.timestamp).toLocaleString('ru-RU')}`,
        '',
        `💬 <i>Чтобы ответить, напишите:</i>`,
        `<code>/reply ${questionData.uid} [ваш ответ]</code>`
    ].join('\n');
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TG_CONFIG.token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TG_CONFIG.chatId,
                text: text,
                parse_mode: 'HTML'
            })
        });
        const result = await response.json();
        return result.ok;
    } catch(e) {
        console.error('Telegram ошибка:', e);
        return false;
    }
}

// Инициализация чата при открытии страницы поддержки
function initChat() {
    const chatWin = document.getElementById('chatWindow');
    
    const now = new Date().getTime();
    if(chatBlockedUntil > now) {
        const hoursLeft = Math.ceil((chatBlockedUntil - now) / (1000 * 60 * 60));
        chatWin.innerHTML = `<div class="chat-blocked-msg">
            <i class="fas fa-ban" style="font-size: 2rem; margin-bottom: 10px;"></i><br>
            К сожалению, мы вынуждены ограничить вам доступ к системе поддержки.<br><br>
            <b>Причина:</b> Спам (повторяющиеся запросы).<br>
            <b>Блокировка снимется через:</b> ${hoursLeft} ч.
        </div>`;
        document.getElementById('chatOptions').style.display = 'none';
        document.getElementById('chatInputContainer').style.display = 'none';
        return;
    }

    if(chatWin.children.length === 0) {
        addMessage("Привет! Я NEO.BOT. Чем могу помочь?", 'bot');
        showOptions();
    }
}

// Добавление сообщения в чат
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = text;
    document.getElementById('chatWindow').appendChild(div);
    document.getElementById('chatWindow').scrollTop = document.getElementById('chatWindow').scrollHeight;
}

// Обработка выбора предустановленного вопроса
function handleChatAction(question, answer) {
    const now = new Date().getTime();
    if(chatBlockedUntil > now) return;

    if(lastQuestionAsked === question) {
        questionRepeatCount++;
        
        if(questionRepeatCount === 3) {
            addMessage(question, 'user');
            setTimeout(() => {
                addMessage("Уважаемый пользователь! Вся имеющаяся информация по вашему запросу была предоставлена ранее. Пожалуйста, уточните, остались ли у вас другие дополнительные вопросы?", 'bot');
            }, 500);
            return;
        }
        
        if(questionRepeatCount >= 4) {
            addMessage(question, 'user');
            setTimeout(() => {
                addMessage("К сожалению, мы вынуждены ограничить вам доступ к системе поддержки на 12 часов из-за повторяющихся запросов.", 'bot');
                const blockTime = new Date().getTime() + (12 * 60 * 60 * 1000);
                chatBlockedUntil = blockTime;
                localStorage.setItem('chatBlockedUntil', blockTime);
                setTimeout(() => initChat(), 2000);
            }, 500);
            return;
        }
    } else {
        lastQuestionAsked = question;
        questionRepeatCount = 1;
    }

    addMessage(question, 'user');
    setTimeout(() => {
        addMessage(answer, 'bot');
        setTimeout(() => askFollowUp(), 500);
    }, 500);
}

// Спросить, есть ли ещё вопросы
function askFollowUp() {
    addMessage("Есть ли у вас дополнительные вопросы?", 'bot');
    
    const cont = document.getElementById('chatOptions');
    cont.style.display = 'block';
    cont.innerHTML = '';
    
    const yesBtn = document.createElement('button');
    yesBtn.className = 'chat-btn';
    yesBtn.textContent = 'Да, есть вопрос';
    yesBtn.onclick = () => {
        addMessage("Да, есть вопрос", 'user');
        setTimeout(() => {
            addMessage("Отлично! Выберите интересующий вас вопрос из списка ниже или задайте свой:", 'bot');
            showOptions();
        }, 500);
    };
    
    const noBtn = document.createElement('button');
    noBtn.className = 'chat-btn';
    noBtn.textContent = 'Нет, спасибо';
    noBtn.onclick = () => {
        addMessage("Нет, спасибо", 'user');
        setTimeout(() => {
            addMessage("Благодарим вас за обращение! Если возникнут вопросы, мы всегда на связи. Удачи в учебе! 🎓", 'bot');
            document.getElementById('chatOptions').innerHTML = '';
            document.getElementById('chatInputContainer').style.display = 'none';
            
            const returnBtn = document.createElement('button');
            returnBtn.className = 'chat-btn';
            returnBtn.textContent = 'Задать новый вопрос';
            returnBtn.onclick = () => { lastQuestionAsked = null; questionRepeatCount = 0; showOptions(); };
            document.getElementById('chatOptions').appendChild(returnBtn);
        }, 500);
    };
    
    cont.appendChild(yesBtn);
    cont.appendChild(noBtn);
}

// Показать варианты вопросов
function showOptions() {
    const opts = [
        { t: "Я вообще не понимаю тему, с чего мне начать?", r: "Перейдите в раздел интересующего вас предмета. Мы выстроили темы в логическом порядке: от простых основ к сложным концепциям. Для предметов Физика, Иностранный язык и Академическое письмо доступны подробные обучающие материалы с пошаговыми объяснениями." },
        { t: "Достаточно ли материалов сайта для сдачи экзамена?", r: "Мы аккумулируем фундаментальную базу и ключевые концепции. Для подготовки к углублённым академическим стандартам используйте дополнительные ресурсы в разделах «Информативный сайт» и «Видеокурсы»." },
        { t: "Где найти шаблоны для курсовых и рефератов?", r: "Все актуальные шаблоны и рекомендации по структуре работ размещены в разделе «Академическое письмо». Там вы найдёте подробные инструкции по оформлению, цитированию и избеганию плагиата." },
        { t: "Почему сайт загружается медленно?", r: "Скорость загрузки может зависеть от качества вашего интернет-соединения или временной нагрузки на серверы. Рекомендуем обновить страницу или очистить кэш браузера." },
        { t: "Что делать, если не открывается раздел?", r: "Мы регулярно проводим мониторинг доступности всех внешних ссылок. Если раздел не активен, возможно, ведутся технические работы. Попробуйте повторить попытку через некоторое время." }
    ];

    const cont = document.getElementById('chatOptions');
    cont.style.display = 'block';
    cont.innerHTML = '';
    
    opts.forEach(o => {
        const btn = document.createElement('button');
        btn.className = 'chat-btn';
        btn.textContent = o.t;
        btn.onclick = () => handleChatAction(o.t, o.r);
        cont.appendChild(btn);
    });

    // №1 — Кнопка "Задать свой вопрос" только для авторизованных
    const customBtn = document.createElement('button');
    customBtn.className = 'chat-btn';
    customBtn.style.borderColor = 'var(--neon-green)';
    customBtn.style.color = 'var(--neon-green)';
    customBtn.textContent = "✍️ Задать свой вопрос";
    customBtn.onclick = () => {
        if(typeof isAuthenticated === 'undefined' || !isAuthenticated) {
            addMessage("✍️ Задать свой вопрос", 'user');
            setTimeout(() => {
                addMessage(`<b>⚠️ Требуется регистрация</b><br><br>Функция «Задать свой вопрос» доступна только для зарегистрированных студентов.<br><br>Пожалуйста, <span style="color:var(--neon-green);cursor:pointer;text-decoration:underline;" onclick="showAuth()">войдите или зарегистрируйтесь</span>, чтобы задать вопрос администратору.`, 'bot');
            }, 400);
            return;
        }
        enableCustomQuestion();
    };
    cont.appendChild(customBtn);

    // №1 — Смена юзерки администратора на @Night_Pok
    const adminBtn = document.createElement('button');
    adminBtn.className = 'chat-btn';
    adminBtn.style.borderColor = 'var(--error-red)';
    adminBtn.style.color = 'var(--error-red)';
    adminBtn.textContent = "Связаться с администратором";
    adminBtn.onclick = () => handleChatAction("Связаться с администратором", 
        `<b>Уважаемые пользователи!</b><br><br>Если вы столкнулись с критической ошибкой или у вас есть предложения, просим направить официальное обращение.<br><br><b>Контакт администратора:</b> <a href="https://t.me/Night_Pok" target="_blank" style="color:var(--neon-blue);">@Night_Pok</a>`);
    cont.appendChild(adminBtn);
}

// Включить поле для ввода своего вопроса (только для авторизованных)
function enableCustomQuestion() {
    document.getElementById('chatOptions').style.display = 'none';
    
    const inputContainer = document.getElementById('chatInputContainer');
    inputContainer.innerHTML = `
        <div class="chat-input-area">
            <textarea class="chat-input" id="customQuestionInput" placeholder="Напишите ваш вопрос..."></textarea>
            <button class="chat-send-btn" onclick="sendCustomQuestion()">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    inputContainer.style.display = 'block';
    
    document.getElementById('customQuestionInput').addEventListener('keypress', function(e) {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendCustomQuestion();
        }
    });

    addMessage("Пожалуйста, напишите ваш вопрос. Администратор ответит вам в течение 24 часов.", 'bot');
}

// Отправить пользовательский вопрос (№4 — с отправкой в Telegram)
async function sendCustomQuestion() {
    const input = document.getElementById('customQuestionInput');
    const question = input.value.trim();
    
    if(!question) {
        alert('Пожалуйста, введите ваш вопрос');
        return;
    }

    addMessage(question, 'user');
    input.value = '';
    input.disabled = true;
    
    const questionData = {
        question: question,
        timestamp: new Date().getTime(),
        user: (typeof currentUser !== 'undefined' && currentUser) ? currentUser.email : 'Гость',
        fio: (typeof currentUser !== 'undefined' && currentUser) ? currentUser.fio : 'Гость',
        university: (typeof currentUser !== 'undefined' && currentUser) ? currentUser.university : '-',
        email: (typeof currentUser !== 'undefined' && currentUser) ? currentUser.email : '-',
        uid: (typeof currentUser !== 'undefined' && currentUser) ? (currentUser.uid || 'N/A') : 'N/A'
    };
    
    userQuestions.push(questionData);
    localStorage.setItem('userQuestions', JSON.stringify(userQuestions));

    // Сохраняем вопрос в глобальный список для бота (answers.json читает бот)
    try {
        await fetch('questions.json', { method: 'HEAD' }); // проверяем есть ли файл
    } catch(e) {}
    // Вопрос уходит через Telegram ниже

    // Показываем индикатор отправки
    addMessage('<i class="fas fa-spinner fa-spin"></i> Отправляю ваш вопрос...', 'bot');
    
    // №4 — Попытка отправки в Telegram
    const sent = await sendToTelegram(questionData);
    
    // Убираем индикатор
    const chatWin = document.getElementById('chatWindow');
    if(chatWin.lastChild && chatWin.lastChild.innerHTML && chatWin.lastChild.innerHTML.includes('fa-spinner')) {
        chatWin.removeChild(chatWin.lastChild);
    }

    if(sent) {
        setTimeout(() => {
            addMessage(`Спасибо! ✅ Ваш вопрос успешно отправлен администратору.<br><br>
                <b>Ваш ID студента:</b> <code style="color:var(--neon-green);">${questionData.uid}</code><br><br>
                Ответ появится в разделе <b>«Профиль → Мои вопросы»</b> в течение <b>24 часов</b>.`, 'bot');
            document.getElementById('chatInputContainer').style.display = 'none';
            setTimeout(() => askFollowUp(), 1000);
        }, 500);
    } else {
        setTimeout(() => {
            addMessage(`Ваш вопрос сохранён 📋<br><br>
                <b>Ваш ID студента:</b> <code style="color:var(--neon-green);">${questionData.uid}</code><br><br>
                Администратор <a href="https://t.me/Night_Pok" target="_blank" style="color:var(--neon-blue);">@Night_Pok</a> свяжется с вами напрямую в течение <b>24 часов</b>.<br>
                Ответ также появится в разделе <b>«Профиль → Мои вопросы»</b>.`, 'bot');
            document.getElementById('chatInputContainer').style.display = 'none';
            setTimeout(() => askFollowUp(), 1000);
        }, 500);
    }
}

// Загрузка данных блокировки и вопросов при старте
function loadChatData() {
    const blocked = localStorage.getItem('chatBlockedUntil');
    if(blocked) chatBlockedUntil = parseInt(blocked);
    const savedQuestions = localStorage.getItem('userQuestions');
    if(savedQuestions) userQuestions = JSON.parse(savedQuestions);
}

// ===================================
// РУЧНОЙ РЕЖИМ: adminReply() через консоль браузера
// Использование: adminReply('NEO-XXXXXXXX', 'Текст ответа')
// ===================================
function adminReply(uid, answer, originalQuestion) {
    if(!uid || !answer) {
        console.error('Использование: adminReply("NEO-XXXXXXXX", "текст ответа")');
        return false;
    }
    
    const replies = JSON.parse(localStorage.getItem('adminReplies') || '{}');
    if(!replies[uid]) replies[uid] = [];
    
    // Находим вопрос из истории
    const questions = JSON.parse(localStorage.getItem('userQuestions') || '[]');
    const q = questions.find(q => q.uid === uid);
    const questionText = originalQuestion || (q ? q.question : 'Вопрос');
    
    replies[uid].push({
        answer: answer,
        question: questionText,
        timestamp: new Date().getTime()
    });
    
    localStorage.setItem('adminReplies', JSON.stringify(replies));
    
    // Если профиль открыт — обновляем сразу
    if(typeof checkAdminReplies === 'function') checkAdminReplies();
    
    console.log('%c✅ Ответ для ' + uid + ' сохранён!', 'color: #0aff68; font-weight: bold;');
    console.log('Текст ответа:', answer);
    return true;
}