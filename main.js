/* ===================================
   MAIN.JS - ГЛАВНЫЙ ФАЙЛ ИНИЦИАЛИЗАЦИИ
   =================================== */

// Инициализация приложения при загрузке страницы
window.onload = function() {
    // Инициализация фона
    initBackground();
    
    // Инициализация списка университетов
    initUniversities();
    
    // Рендер ресурсов
    renderResources();
    
    // Проверка сессии пользователя
    checkSession();
    
    // Загрузка данных чата
    loadChatData();
    
    // Обновление UI в зависимости от авторизации
    updateAuthUI();
    
    console.log('%c🚀 NEO.HUB загружен успешно!', 'color: #00f3ff; font-size: 16px; font-weight: bold;');
    console.log('%c📚 Образовательная платформа для студентов Узбекистана', 'color: #0aff68; font-size: 12px;');
};