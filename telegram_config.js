/* ===================================================================
   TELEGRAM_CONFIG.JS — ТРИ БОТА NEO.HUB
   ===================================================================

   ┌──────────────────────────────────────────────────────────────┐
   │  БОТ 1 (@my_site_ai_bot)   — ТОЛЬКО Поддержка               │
   │    chat.js    → отправляет вопросы студентов                 │
   │    profile.js → читает ответы через getUpdates               │
   │    Команда ответа: /reply NEO-XXXXX текст                    │
   ├──────────────────────────────────────────────────────────────┤
   │  БОТ 2 (@tiift_helper_bot) — ТОЛЬКО Тестирование             │
   │    testing.js → отправляет письменные ответы студентов       │
   │    Команда ответа: /treply NEO-XXXXX subj qId текст          │
   ├──────────────────────────────────────────────────────────────┤
   │  БОТ 3 (tift_reg_bot)      — ТОЛЬКО Регистрации              │
   │    auth.js   → уведомление о новом студенте (notify only)    │
   └──────────────────────────────────────────────────────────────┘

   ⚠  НИКОГДА не смешивай токены ботов!
      Каждый модуль должен брать строго свою переменную:
        chat.js    / profile.js  → window.NEO_TG_SUPPORT
        testing.js               → window.NEO_TG_TESTING
        auth.js                  → window.NEO_TG_REG
*/

(function () {

    // ── КОНСТАНТЫ ТОКЕНОВ (для наглядности и будущей отладки) ───────────
    var SUPPORT_BOT_TOKEN  = '8362875504:AAEcAkdqmVd8vBf5VNVwVbDRMbiYz6IOTIo'; // @my_site_ai_bot
    var TEST_BOT_TOKEN     = '8785731980:AAGS5y_805muyiTWId6Tecr7zUUXSQDcILw'; // @tiift_helper_bot
    var REG_BOT_TOKEN      = '7869245023:AAHYb4NKDv-GiBLPA5X_38GzdxbrEBqY_Bs'; // @tift_reg_bot

    var ADMIN_CHAT_ID      = '7973433557'; // единый Chat ID для всех трёх ботов

    // ── БОТ 1: @my_site_ai_bot — вопросы поддержки + ответы ────────────
    // Используется: chat.js, profile.js
    window.NEO_TG_SUPPORT = {
        token:   SUPPORT_BOT_TOKEN,
        chatId:  ADMIN_CHAT_ID,
        enabled: true
    };

    // ── БОТ 2: @tiift_helper_bot — письменные ответы из тестирования ────
    // Используется: testing.js  (ТОЛЬКО этот модуль!)
    window.NEO_TG_TESTING = {
        token:   TEST_BOT_TOKEN,
        chatId:  ADMIN_CHAT_ID,
        enabled: true
    };

    // ── БОТ 3: @tift_reg_bot — уведомления о регистрации ────────────────
    // Используется: auth.js  (только notify, без чтения ответов)
    window.NEO_TG_REG = {
        token:   REG_BOT_TOKEN,
        chatId:  ADMIN_CHAT_ID,
        enabled: true
    };

    // ── Обратная совместимость — алиас на бот ПОДДЕРЖКИ ─────────────────
    // ⚠  NEO_TG_CONFIG = SUPPORT-бот. Не использовать в testing.js!
    window.NEO_TG_CONFIG = window.NEO_TG_SUPPORT;

})();