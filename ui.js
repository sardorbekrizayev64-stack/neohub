/* ===================================
   UI.JS - УПРАВЛЕНИЕ ИНТЕРФЕЙСОМ
   =================================== */

// Переключение между страницами
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    
    let target = pageId + '-view';
    if(pageId === 'home') target = 'home-view';
    
    const el = document.getElementById(target);
    if(el) {
        el.classList.add('active');
        window.scrollTo(0,0);
    }

    // Обновление таблицы студентов при открытии соответствующего раздела
    if(pageId === 'students' && typeof renderStudentsTable === 'function') {
        renderStudentsTable();
    }

    // Инициализация модуля тестирования при открытии раздела
    if(pageId === 'testing' && typeof initTesting === 'function') {
        initTesting();
    }
    
    // Polling ответов: запускаем при входе в профиль, останавливаем при уходе
    if(pageId === 'profile') {
        if(typeof startProfilePolling === 'function') setTimeout(startProfilePolling, 100);
    } else {
        if(typeof stopProfilePolling === 'function') stopProfilePolling();
    }

    // Обновление активного пункта меню
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    const navLink = document.getElementById('nav-' + pageId);
    if(navLink) navLink.classList.add('active');
    
    // Закрытие мобильного меню
    document.getElementById('navbar').classList.remove('open');
}

// Переключение мобильного меню
function toggleMenu() {
    document.getElementById('navbar').classList.toggle('open');
}

// Переключение темы (светлая/тёмная)
function toggleTheme() {
    const html = document.documentElement;
    if(html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        document.getElementById('themeBtn').innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.setAttribute('data-theme', 'dark');
        document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Открытие детальной страницы предмета
function openSubject(subjectKey) {
    const data = subjectsContent[subjectKey];
    if(data) {
        document.getElementById('subject-header').textContent = data.title;
        document.getElementById('subject-desc').textContent = data.desc;
        
        const actionsContainer = document.getElementById('subjectActions');
        let html = '';

        if(data.hasLearning) {
            html += `<div class="action-card learning-type" onclick="openLearning('${subjectKey}')">
                        <i class="fas fa-graduation-cap" style="font-size: 3rem; color: var(--neon-green);"></i>
                        <div class="action-title">Начать обучение</div>
                        <div class="action-desc">Подробные уроки с объяснениями</div>
                    </div>`;
        }

        html += `<a href="${data.videoLink}" target="_blank" class="action-card video-type">
                    <i class="fas fa-play-circle" style="font-size: 3rem; color: var(--neon-pink);"></i>
                    <div class="action-title">Видео курсы</div>
                    <div class="action-desc">Посмотреть видеоуроки по теме</div>
                </a>

                <a href="${data.siteLink}" target="_blank" class="action-card site-type">
                    <i class="fas fa-globe" style="font-size: 3rem; color: var(--neon-blue);"></i>
                    <div class="action-title">Информативный сайт</div>
                    <div class="action-desc">Читать материалы и статьи</div>
                </a>`;

        actionsContainer.innerHTML = html;
        
        document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
        document.getElementById('subject-detail-view').classList.add('active');
        window.scrollTo(0,0);
    }
}

// Переключение развернутого/свернутого состояния новости
function toggleNews(btn) {
    const content = btn.previousElementSibling.querySelector('.news-full');
    if(content.style.display === 'block') {
        content.style.display = 'none';
        btn.textContent = 'Читать далее';
    } else {
        content.style.display = 'block';
        btn.textContent = 'Свернуть';
    }
}

// №3 — Фон заменён на Particle Swarm Canvas Animation
// Инициализация происходит автоматически через inline-скрипт в index.html
function initBackground() {
    // Canvas-анимация инициализируется отдельно (см. конец index.html)
    console.log('%c🎨 Particle Swarm background активен', 'color: #00f3ff; font-size: 11px;');
}

// №3 — Инициализация умного поиска ВУЗов
// Функция рендерит первые варианты при открытии формы
function initUniversities() {
    // Умный поиск работает через filterUniversities() в index.html
    // Здесь только инициализация placeholder если нужно
    const searchInput = document.getElementById('uniSearchInput');
    if(searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') hideUniDropdown();
        });
    }
}

// Рендер ресурсов
function renderResources() {
    const container = document.getElementById('resources-container');
    let html = '';
    resourcesData.forEach(cat => {
        html += `<div class="resources-category"><h3>${cat.cat}</h3><div class="resources-grid">`;
        cat.items.forEach(item => {
            html += `<a href="${item.l}" target="_blank" class="resource-card">
                        <div>
                            <div class="resource-title">${item.t}</div>
                            <div class="resource-desc">${item.d}</div>
                        </div>
                        <div style="margin-top:10px; text-align:right; font-size:0.8rem; color:var(--neon-blue);">
                            Перейти <i class="fas fa-external-link-alt"></i>
                        </div>
                     </a>`;
        });
        html += `</div></div>`;
    });
    container.innerHTML = html;
}

// Наблюдатель за открытием страницы поддержки для инициализации чата
document.addEventListener('DOMContentLoaded', () => {
    const supportView = document.getElementById('support-view');
    if(supportView) {
        const observer = new MutationObserver(() => {
            if(supportView.classList.contains('active')) {
                initChat();
            }
        });
        observer.observe(supportView, { attributes: true, attributeFilter: ['class'] });
    }
});