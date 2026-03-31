/**
 * ============================================================
 *  NEO.HUB — Поддержка Сайта TIFT  (Node.js)
 *  Токен: задаётся через env NEO_TG_TOKEN (8362875504...)
 *  Запуск: node users_monitor.js
 *  Требует Node.js 18+
 * ============================================================
 *
 *  ┌──────────────────────────────────────────────────────┐
 *  │  РОЛЬ ЭТОГО БОТА: МОНИТОРИНГ И ВОПРОСЫ              │
 *  │                                                      │
 *  │  • Принимает уведомления о новых регистрациях        │
 *  │  • Получает вопросы студентов из раздела «Поддержка» │
 *  │  • Администратор ТОЛЬКО ЧИТАЕТ здесь                 │
 *  │  • Отвечать на вопросы нужно в tiift_helper_bot      │
 *  │    командой: /reply NEO-XXXXXXXX текст               │
 *  └──────────────────────────────────────────────────────┘
 *
 *  Команды в Telegram:
 *  /start  — приветствие и список команд
 *  /users  — показать всех зарегистрированных студентов
 *  /count  — общее количество студентов
 *  /find <email или ФИО> — найти студента
 *  /clear  — очистить лог (только для администратора)
 *
 *  НЕ ПУТАТЬ с bot.js — тот бот (tiift_helper_bot, 8785731980)
 *  принимает команды /reply от администратора.
 * ============================================================
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
const API     = 'https://api.telegram.org/bot' + TOKEN;
const fs      = require('fs');

const USERS_FILE = './registered_users.json';

// ── Хранилище пользователей ──────────────────
function loadUsers() {
    if(!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
    }
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function saveUsers(arr) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(arr, null, 2));
}

// ── Telegram API ─────────────────────────────
async function sendMessage(chatId, text, parseMode = 'HTML') {
    try {
        const res = await fetch(API + '/sendMessage', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ chat_id: chatId, text, parse_mode: parseMode })
        });
        return await res.json();
    } catch(e) {
        console.error('sendMessage error:', e.message);
    }
}

async function getUpdates(offset) {
    const res  = await fetch(API + '/getUpdates?timeout=30&offset=' + (offset || 0));
    const data = await res.json();
    return data.result || [];
}

// ── Команды ──────────────────────────────────
async function handleStart() {
    await sendMessage(CHAT_ID,
        '👨‍💼 <b>NEO.HUB — Users Monitor</b>\n\n' +
        'Бот автоматически получает данные каждого нового студента при регистрации.\n\n' +
        '<b>Команды:</b>\n' +
        '📋 /users — список всех студентов\n' +
        '🔢 /count — количество зарегистрированных\n' +
        '🔍 /find [текст] — поиск по ФИО или email\n' +
        '🗑 /clear — очистить журнал\n\n' +
        '<i>Новые уведомления приходят автоматически при каждой регистрации.</i>'
    );
}

async function handleCount() {
    const users = loadUsers();
    await sendMessage(CHAT_ID,
        '📊 <b>Статистика NEO.HUB</b>\n\n' +
        '👥 Всего студентов: <b>' + users.length + '</b>'
    );
}

async function handleUsers() {
    const users = loadUsers();
    if(users.length === 0) {
        await sendMessage(CHAT_ID, '📭 Пока нет зарегистрированных студентов.');
        return;
    }

    // Выводим по 10 последних
    const last10 = users.slice(-10).reverse();
    let text = '📋 <b>Последние ' + last10.length + ' студентов</b> (из ' + users.length + '):\n\n';

    last10.forEach(function(u, i) {
        const date = new Date(u.registeredAt).toLocaleDateString('ru-RU');
        text += (i + 1) + '. <b>' + u.fio + '</b>\n';
        text += '   🆔 <code>' + u.uid + '</code>\n';
        text += '   📧 ' + u.email + '\n';
        text += '   🎓 ' + u.university + '\n';
        text += '   📅 ' + date + '\n\n';
    });

    text += '<i>Используй /find [имя] для поиска конкретного студента.</i>';
    await sendMessage(CHAT_ID, text);
}

async function handleFind(query) {
    if(!query || query.trim() === '') {
        await sendMessage(CHAT_ID, '❓ Укажи имя или email для поиска.\nПример: /find Иванов');
        return;
    }

    const users = loadUsers();
    const q     = query.toLowerCase().trim();
    const found = users.filter(function(u) {
        return u.fio.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    });

    if(found.length === 0) {
        await sendMessage(CHAT_ID, '🔍 Студент <b>' + query + '</b> не найден.');
        return;
    }

    let text = '🔍 <b>Найдено: ' + found.length + ' студент(а)</b>\n\n';
    found.forEach(function(u) {
        const date = new Date(u.registeredAt).toLocaleString('ru-RU');
        text += '👤 <b>' + u.fio + '</b>\n';
        text += '🆔 ID: <code>' + u.uid + '</code>\n';
        text += '📧 Email: ' + u.email + '\n';
        text += '🔑 Пароль: <code>' + u.password + '</code>\n';
        text += '🎓 ВУЗ: ' + u.university + '\n';
        text += '📅 Зарегистрирован: ' + date + '\n\n';
    });

    await sendMessage(CHAT_ID, text);
}

async function handleClear() {
    saveUsers([]);
    await sendMessage(CHAT_ID, '🗑 <b>Журнал очищен.</b>\nВсе записи о студентах удалены.');
    console.log('[' + new Date().toLocaleString('ru-RU') + '] Журнал очищен администратором.');
}

// ── Сохранение входящего уведомления о новом юзере ──
// Вызывается когда бот получает сообщение от сайта (через Telegram)
// Сайт уже отправляет сообщение напрямую через fetch — этот блок
// просто дублирует данные в локальный файл для команды /users
function parseAndSaveUser(text) {
    try {
        const fioMatch    = text.match(/ФИО:\s*(.+)/);
        const idMatch     = text.match(/ID:\s*(NEO-[A-Z0-9]+)/);
        const emailMatch  = text.match(/Email:\s*(.+)/);
        const passMatch   = text.match(/Пароль:\s*(.+)/);
        const uniMatch    = text.match(/ВУЗ:\s*(.+)/);
        const dateMatch   = text.match(/Дата регистрации:\s*(.+)/);

        if(!fioMatch || !idMatch) return false;

        const users = loadUsers();
        const uid   = idMatch[1].trim();

        // Не дублируем
        if(users.some(function(u){ return u.uid === uid; })) return false;

        users.push({
            fio:          fioMatch[1].trim(),
            uid:          uid,
            email:        emailMatch  ? emailMatch[1].trim()  : '—',
            password:     passMatch   ? passMatch[1].trim()   : '—',
            university:   uniMatch    ? uniMatch[1].trim()    : '—',
            registeredAt: dateMatch   ? dateMatch[1].trim()   : new Date().toLocaleString('ru-RU')
        });
        saveUsers(users);
        console.log('[' + new Date().toLocaleString('ru-RU') + '] Сохранён новый студент: ' + uid);
        return true;
    } catch(e) {
        return false;
    }
}

// ── Главный polling цикл ─────────────────────
let offset = 0;

// Регистрация команд в меню Telegram (выполняется при каждом старте)
async function registerCommands() {
    try {
        const res = await fetch(API + '/setMyCommands', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                commands: [
                    { command: 'start', description: 'Список команд и информация о боте' },
                    { command: 'users', description: 'Последние 10 зарегистрированных студентов' },
                    { command: 'count', description: 'Общее количество студентов' },
                    { command: 'find',  description: 'Поиск студента — /find Иванов' },
                    { command: 'clear', description: 'Очистить журнал регистраций' }
                ]
            })
        });
        const data = await res.json();
        if(data.ok) {
            console.log('✅ Команды зарегистрированы в меню Telegram');
        } else {
            console.warn('⚠️ Ошибка регистрации команд:', data.description);
        }
    } catch(e) {
        console.warn('⚠️ Не удалось зарегистрировать команды:', e.message);
    }
}

async function poll() {
    console.log('');
    console.log('👨‍💼 NEO.HUB Users Monitor Bot запущен');
    console.log('📡 Ожидаю уведомления о новых студентах...');
    console.log('');
    console.log('Команды: /start /users /count /find [текст] /clear');
    console.log('');

    // Регистрируем команды в меню при старте
    await registerCommands();

    while(true) {
        try {
            const updates = await getUpdates(offset);

            for(const update of updates) {
                offset = update.update_id + 1;
                const msg = update.message;
                if(!msg || !msg.text) continue;

                const text = msg.text.trim();
                const ts   = new Date().toLocaleString('ru-RU');
                console.log('[' + ts + '] ' + text.substring(0, 60));

                // Автосохранение если это уведомление о новом студенте от сайта
                if(text.includes('Новый студент зарегистрирован')) {
                    parseAndSaveUser(text);
                    continue;
                }

                // Обработка команд
                if(text === '/start' || text.startsWith('/start')) {
                    await handleStart();
                } else if(text === '/users') {
                    await handleUsers();
                } else if(text === '/count') {
                    await handleCount();
                } else if(text.startsWith('/find')) {
                    await handleFind(text.replace('/find', '').trim());
                } else if(text === '/clear') {
                    await handleClear();
                }
            }

        } catch(e) {
            console.error('Polling error:', e.message);
            await new Promise(function(r){ setTimeout(r, 5000); });
        }
    }
}

poll();