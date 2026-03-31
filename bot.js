/**
 * ============================================================
 *  NEO.HUB — tiift_helper_bot  (Node.js)
 *  Токен: задаётся через env NEO_TG_TOKEN (8785731980...)
 *  Запуск: node bot.js
 *  Требует: npm install node-fetch
 * ============================================================
 *
 *  ┌──────────────────────────────────────────────────────┐
 *  │  РОЛЬ ЭТОГО БОТА: ОТВЕТЫ АДМИНИСТРАТОРА             │
 *  │                                                      │
 *  │  1. Студент задаёт вопрос на сайте (раздел «Поддержка»)  │
 *  │  2. Вопрос уходит в «Поддержка Сайта TIFT» (8362875504)  │
 *  │  3. Администратор ЧИТАЕТ вопросы в «Поддержка Сайта»     │
 *  │  4. Администратор пишет СЮДА (tiift_helper_bot):         │
 *  │     /reply NEO-XXXXXXXX ваш ответ                        │
 *  │  5. profile.js опрашивает ЭТОТ бот каждые 15 сек        │
 *  │  6. Ответ появляется в Профиле студента                  │
 *  └──────────────────────────────────────────────────────┘
 *
 *  НЕ ПУТАТЬ с users_monitor.js — тот бот (8362875504)
 *  только мониторит регистрации и вопросы.
 */

const TOKEN   = process.env.NEO_TG_TOKEN || '';
const CHAT_ID = process.env.NEO_TG_CHAT_ID || '';
if(!TOKEN || !CHAT_ID) {
    console.error('❌ Не заданы переменные окружения NEO_TG_TOKEN и/или NEO_TG_CHAT_ID');
    console.error('   Пример PowerShell:');
    console.error('   $env:NEO_TG_TOKEN="ВАШ_ТОКЕН"');
    console.error('   $env:NEO_TG_CHAT_ID="ВАШ_CHAT_ID"');
    process.exit(1);
}
const API     = `https://api.telegram.org/bot${TOKEN}`;
const fs      = require('fs');
const ANSWERS_FILE = './answers.json';

// Загружаем или создаём файл ответов
function loadAnswers() {
    if (!fs.existsSync(ANSWERS_FILE)) {
        fs.writeFileSync(ANSWERS_FILE, JSON.stringify({}, null, 2));
    }
    return JSON.parse(fs.readFileSync(ANSWERS_FILE, 'utf8'));
}

function saveAnswers(data) {
    fs.writeFileSync(ANSWERS_FILE, JSON.stringify(data, null, 2));
}

// Получить обновления от Telegram
async function getUpdates(offset) {
    const res = await fetch(`${API}/getUpdates?timeout=30&offset=${offset || 0}`);
    const data = await res.json();
    return data.result || [];
}

// Отправить сообщение
async function sendMessage(chatId, text, parseMode = 'HTML') {
    await fetch(`${API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: parseMode })
    });
}

// Обработка команды /reply
async function handleReply(text) {
    // Формат: /reply NEO-XXXXXXXX текст ответа
    const match = text.match(/^\/reply\s+(NEO-[A-Z0-9]+)\s+(.+)$/s);
    
    if (!match) {
        await sendMessage(CHAT_ID,
            '❌ <b>Неверный формат.</b>\n\n' +
            'Используй:\n' +
            '<code>/reply NEO-XXXXXXXX текст ответа</code>\n\n' +
            'Пример:\n' +
            '<code>/reply NEO-N8KMU93N Привет! По твоему вопросу...</code>'
        );
        return;
    }

    const uid    = match[1];
    const answer = match[2].trim();

    // Загружаем вопросы чтобы найти оригинальный вопрос студента
    let questions = [];
    if (fs.existsSync('./questions.json')) {
        questions = JSON.parse(fs.readFileSync('./questions.json', 'utf8'));
    }
    const original = questions.find(q => q.uid === uid);
    const questionText = original ? original.question : 'Вопрос не найден';

    // Сохраняем ответ
    const answers = loadAnswers();
    if (!answers[uid]) answers[uid] = [];
    answers[uid].push({
        answer:    answer,
        question:  questionText,
        timestamp: Date.now()
    });
    saveAnswers(answers);

    // Подтверждение тебе
    await sendMessage(CHAT_ID,
        `✅ <b>Ответ отправлен студенту</b>\n\n` +
        `🆔 ID: <code>${uid}</code>\n` +
        `📝 Вопрос: ${questionText}\n` +
        `💬 Ответ: ${answer}`
    );

    console.log(`[${new Date().toLocaleString('ru-RU')}] Ответ для ${uid} сохранён`);
}

// Обработка команды /list — список вопросов без ответа
async function handleList() {
    let questions = [];
    if (fs.existsSync('./questions.json')) {
        questions = JSON.parse(fs.readFileSync('./questions.json', 'utf8'));
    }
    const answers = loadAnswers();

    const unanswered = questions.filter(q => !answers[q.uid] || answers[q.uid].length === 0);

    if (unanswered.length === 0) {
        await sendMessage(CHAT_ID, '✅ Все вопросы отвечены!');
        return;
    }

    let text = `📋 <b>Вопросы без ответа (${unanswered.length}):</b>\n\n`;
    unanswered.slice(0, 10).forEach((q, i) => {
        text += `${i+1}. 🆔 <code>${q.uid}</code>\n`;
        text += `   👤 ${q.fio}\n`;
        text += `   ❓ ${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}\n\n`;
    });
    text += `\n<i>Ответить: /reply NEO-XXXXXXXX текст</i>`;

    await sendMessage(CHAT_ID, text);
}

// Регистрация команд в меню Telegram
async function registerCommands() {
    try {
        const res = await fetch(`${API}/setMyCommands`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                commands: [
                    { command: 'start', description: 'Информация о боте и список команд' },
                    { command: 'list',  description: 'Список вопросов без ответа' },
                    { command: 'reply', description: 'Ответить студенту — /reply NEO-XXXXX текст' }
                ]
            })
        });
        const data = await res.json();
        if(data.ok) console.log('✅ Команды поддержки зарегистрированы');
        else        console.warn('⚠️', data.description);
    } catch(e) {
        console.warn('⚠️ registerCommands error:', e.message);
    }
}

// Главный polling цикл
let offset = 0;
async function poll() {
    console.log('🤖 NEO.HUB Bot запущен. Жду команды...');
    console.log(`📌 Доступные команды:`);
    console.log(`   /reply NEO-XXXXXXXX текст — ответить студенту`);
    console.log(`   /list — список неотвеченных вопросов`);
    console.log(`   /start — приветствие\n`);

    await registerCommands();

    while (true) {
        try {
            const updates = await getUpdates(offset);
            for (const update of updates) {
                offset = update.update_id + 1;
                const msg = update.message;
                if (!msg || !msg.text) continue;

                console.log(`[${new Date().toLocaleString('ru-RU')}] Получено: ${msg.text.substring(0, 60)}`);

                if (msg.text.startsWith('/reply')) {
                    await handleReply(msg.text);
                } else if (msg.text === '/list') {
                    await handleList();
                } else if (msg.text === '/start') {
                    await sendMessage(CHAT_ID,
                        '👋 <b>NEO.HUB Admin Bot</b>\n\n' +
                        'Команды:\n' +
                        '📋 /list — вопросы без ответа\n' +
                        '💬 /reply NEO-XXXXXXXX текст — ответить студенту\n\n' +
                        '<i>Ответы автоматически появятся в профиле студента на сайте.</i>'
                    );
                } else {
                    await sendMessage(CHAT_ID,
                        '❓ Неизвестная команда.\n\n' +
                        '/list — вопросы без ответа\n' +
                        '/reply NEO-XXXXXXXX текст — ответить'
                    );
                }
            }
        } catch (e) {
            console.error('Ошибка polling:', e.message);
            await new Promise(r => setTimeout(r, 5000));
        }
    }
}

poll();