/* ===================================
   PROFILE.JS - ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
   =================================== */

   let profilePollInterval = null;
   let testingPollInterval = null;

   // @my_site_ai_bot — бот Поддержки (chat.js / profile.js)
   function getNeoTelegramConfig() {
       if(typeof window === 'undefined') return null;
       var cfg = window.NEO_TG_SUPPORT || window.NEO_TG_CONFIG || null;
       if(!cfg || !cfg.enabled || !cfg.token || !cfg.chatId) return null;
       return cfg;
   }

   // @my_tift_bot — бот Тестирования (testing.js / profile.js)
   function getNeoTestingConfig() {
       if(typeof window === 'undefined') return null;
       var cfg = window.NEO_TG_TESTING || null;
       if(!cfg || !cfg.enabled || !cfg.token || !cfg.chatId) return null;
       return cfg;
   }
   
   // Загрузка данных пользователя в профиль
   function loadUserData() {
       if(!currentUser) return;
       document.getElementById('profFio').value   = currentUser.fio;
       document.getElementById('profUni').value   = currentUser.university;
       document.getElementById('profEmail').value = currentUser.email;
       document.getElementById('profPhone').value = currentUser.phone || '';
       document.getElementById('profDob').value   = currentUser.dob   || '';
       var uidEl = document.getElementById('profUID');
       if(uidEl) uidEl.value = currentUser.uid || 'Не назначен';
   }
   
   // Включение режима редактирования
   function enableEdit() {
       if(!currentUser) return;
       var now        = new Date().getTime();
       var lastEdit   = currentUser.lastEditDate || 0;
       var daysPassed = (now - lastEdit) / (1000 * 60 * 60 * 24);
   
       if(daysPassed < 30) {
           var daysLeft = Math.ceil(30 - daysPassed);
           var msg = document.getElementById('timerMsg');
           msg.style.display = 'block';
           msg.textContent = 'Редактирование недоступно. Вы сможете изменить данные через ' + daysLeft + ' дн.';
           setTimeout(function(){ msg.style.display = 'none'; }, 5000);
           return;
       }
       document.getElementById('profPhone').disabled = false;
       document.getElementById('profDob').disabled   = false;
       document.getElementById('editProfileBtn').style.display = 'none';
       document.getElementById('saveProfileBtn').style.display = 'inline-block';
   }
   
   // Сохранение изменений профиля
   function saveProfile() {
       if(!currentUser) return;
       var email = localStorage.getItem('neoCurrentUserEmail');
       currentUser.phone        = document.getElementById('profPhone').value;
       currentUser.dob          = document.getElementById('profDob').value;
       currentUser.lastEditDate = new Date().getTime();
       localStorage.setItem('user_' + email, JSON.stringify(currentUser));
   
       document.getElementById('profPhone').disabled = true;
       document.getElementById('profDob').disabled   = true;
       document.getElementById('editProfileBtn').style.display = 'inline-block';
       document.getElementById('saveProfileBtn').style.display = 'none';
   
       var success = document.getElementById('successMsg');
       success.style.display = 'block';
       setTimeout(function(){ success.style.display = 'none'; }, 3000);
   }
   
   // Копирование UID в буфер
   function copyUID() {
       if(!currentUser || !currentUser.uid) return;
       navigator.clipboard.writeText(currentUser.uid).then(function() {
           var btn = document.getElementById('copyUidBtn');
           if(!btn) return;
           var orig = btn.innerHTML;
           btn.innerHTML = '<i class="fas fa-check"></i>';
           btn.style.color = 'var(--neon-green)';
           setTimeout(function(){ btn.innerHTML = orig; btn.style.color = ''; }, 2000);
       });
   }
   
   /* =============================================
      ПОЛУЧЕНИЕ ОТВЕТОВ ИЗ TELEGRAM
      ============================================= */
   async function fetchRepliesFromTelegram() {
       if(!currentUser || !currentUser.uid) return;

       var cfg = getNeoTelegramConfig();
       if(!cfg) return;

       var uid         = currentUser.uid;
       // Offset хранится в localStorage — чтобы не пропускать сообщения
       // и не конфликтовать с параллельными вызовами
       var offsetKey   = 'neoTgOffset_' + cfg.token.slice(-6);
       var savedOffset = parseInt(localStorage.getItem(offsetKey) || '0', 10);

       try {
           // Запрашиваем обновления начиная с сохранённого offset
           // timeout=0 — не блокирующий запрос (важно для frontend)
           var url = 'https://api.telegram.org/bot' + cfg.token
               + '/getUpdates?limit=100&timeout=0'
               + (savedOffset > 0 ? '&offset=' + savedOffset : '');

           var res  = await fetch(url);
           var data = await res.json();

           if(!data.ok || !data.result || data.result.length === 0) return;

           var stored   = JSON.parse(localStorage.getItem('adminReplies') || '{}');
           var myReplies = stored[uid] || [];
           var newFound  = false;
           var maxUpdateId = savedOffset;

           data.result.forEach(function(update) {
               // Двигаем offset — чтобы следующий вызов не получил те же данные
               if(update.update_id >= maxUpdateId) {
                   maxUpdateId = update.update_id + 1;
               }

               var msg = update.message;
               if(!msg || !msg.text) return;

               // Формат ответа: /reply NEO-XXXXXXXX текст ответа
               var match = msg.text.match(/^\/reply\s+(NEO-[A-Z0-9]+)\s+([\s\S]+)$/);
               if(!match) return;
               if(match[1] !== uid) return; // этот ответ для другого студента

               // Защита от дублей
               var msgId = update.update_id;
               if(myReplies.some(function(r){ return r.tgUpdateId === msgId; })) return;

               // Ищем вопрос студента по uid — берём самый последний
               var questions   = JSON.parse(localStorage.getItem('userQuestions') || '[]');
               var myQuestions = questions.filter(function(q){ return q.uid === uid; });
               var lastQ = myQuestions.length > 0
                   ? myQuestions[myQuestions.length - 1].question
                   : 'Вопрос';

               myReplies.push({
                   answer:     match[2].trim(),
                   question:   lastQ,
                   timestamp:  msg.date * 1000,
                   tgUpdateId: msgId
               });
               newFound = true;
               console.log('%c📩 Новый ответ от администратора для ' + uid,
                   'color:#00f3ff;font-weight:bold;');
           });

           // Сохраняем новый offset
           if(maxUpdateId > savedOffset) {
               localStorage.setItem(offsetKey, String(maxUpdateId));
           }

           if(newFound) {
               stored[uid] = myReplies;
               localStorage.setItem('adminReplies', JSON.stringify(stored));
               checkAdminReplies();
           }

       } catch(e) {
           console.warn('Telegram poll error:', e.message);
       }
   }
   
   /* =============================================
      ОТОБРАЖЕНИЕ ОТВЕТОВ
      ============================================= */
   function checkAdminReplies() {
       if(!currentUser || !currentUser.uid) return;
   
       var replies   = JSON.parse(localStorage.getItem('adminReplies') || '{}');
       var myReplies = replies[currentUser.uid] || [];
       var container = document.getElementById('adminRepliesContainer');
       if(!container) return;
   
       var clearBtn = document.getElementById('clearAllRepliesBtn');
       if(clearBtn) clearBtn.style.display = myReplies.length > 0 ? 'inline-block' : 'none';
   
       if(myReplies.length === 0) {
           container.innerHTML = '<p style="color:var(--text-sec);font-size:0.9rem;text-align:center;padding:10px;">Ответов пока нет</p>';
           return;
       }
   
       var html     = '';
       var reversed = myReplies.slice().reverse();
   
       for(var di = 0; di < reversed.length; di++) {
           var r       = reversed[di];
           var realIdx = myReplies.length - 1 - di;
           var dateStr = new Date(r.timestamp).toLocaleString('ru-RU');
   
           html += '<div class="reply-item">';
               html += '<div class="reply-header">';
                   html += '<span class="reply-label">';
                       html += '<i class="fas fa-reply"></i> Ответ администратора';
                   html += '</span>';
                   html += '<div class="reply-meta">';
                       html += '<span class="reply-date">' + dateStr + '</span>';
                       html += '<button class="reply-del-btn" onclick="deleteReply(' + realIdx + ')" title="Удалить ответ">';
                           html += '<i class="fas fa-times"></i>';
                       html += '</button>';
                   html += '</div>';
               html += '</div>';
               html += '<div class="reply-question"><b>Ваш вопрос:</b> ' + r.question + '</div>';
               html += '<div class="reply-answer">' + r.answer + '</div>';
           html += '</div>';
       }
       container.innerHTML = html;
   }
   
   /* =============================================
      УДАЛЕНИЕ ОТВЕТОВ
      ============================================= */
   function deleteReply(index) {
       if(!currentUser || !currentUser.uid) return;
       if(!confirm('Удалить этот ответ?')) return;
   
       var replies   = JSON.parse(localStorage.getItem('adminReplies') || '{}');
       var myReplies = replies[currentUser.uid] || [];
       myReplies.splice(index, 1);
       replies[currentUser.uid] = myReplies;
       localStorage.setItem('adminReplies', JSON.stringify(replies));
       checkAdminReplies();
   }
   
   function clearAllReplies() {
       if(!currentUser || !currentUser.uid) return;
       if(!confirm('Удалить все вопросы и ответы? Это действие нельзя отменить.')) return;
   
       var replies = JSON.parse(localStorage.getItem('adminReplies') || '{}');
       replies[currentUser.uid] = [];
       localStorage.setItem('adminReplies', JSON.stringify(replies));
   
       var questions = JSON.parse(localStorage.getItem('userQuestions') || '[]');
       var filtered  = questions.filter(function(q){ return q.uid !== currentUser.uid; });
       localStorage.setItem('userQuestions', JSON.stringify(filtered));
       checkAdminReplies();
   }
   
   /* =============================================
      СПИСОК ВСЕХ ЗАРЕГИСТРИРОВАННЫХ СТУДЕНТОВ
      ============================================= */
   function getAllRegisteredUsers() {
       const users = [];
       for (let i = 0; i < localStorage.length; i++) {
           const key = localStorage.key(i);
           if (key && key.startsWith('user_')) {
               try {
                   const raw = localStorage.getItem(key);
                   if (!raw) continue;
                   const u = JSON.parse(raw);
                   if (u && u.fio && u.email) {
                       users.push(u);
                   }
               } catch (e) {
                   // пропускаем битые записи
               }
           }
       }
       users.sort(function(a, b) {
           const aTime = a.registeredAt || 0;
           const bTime = b.registeredAt || 0;
           return aTime - bTime;
       });
       return users;
   }
   
function getUserTotalScore(user) {
    if(user && typeof user.totalScore === 'number' && isFinite(user.totalScore)) {
        return Math.max(0, Math.floor(user.totalScore));
    }
    if(!user || !user.uid) return 0;
    try {
        const raw = localStorage.getItem('neoTestResults_' + user.uid);
        if(!raw) return 0;
        const data = JSON.parse(raw);
        const best = (data && data.bestBySubject) ? data.bestBySubject : {};
        let sum = 0;
        Object.keys(best).forEach(function(k) {
            const v = best[k];
            if(v && typeof v.correct === 'number' && isFinite(v.correct)) sum += v.correct;
        });
        return Math.max(0, Math.floor(sum));
    } catch(e) {
        return 0;
    }
}

   function renderStudentsTable() {
       const container = document.getElementById('students-table-container');
       if (!container) return;

       const users = getAllRegisteredUsers();

       if (users.length === 0) {
           container.innerHTML = '<p style="text-align:center; color: var(--text-sec); padding: 20px;">Пока нет ни одного зарегистрированного студента.</p>';
           return;
       }

       // ── АЛГОРИТМ ЛИДЕРБОРДА ──────────────────────────────────────────────
       // Считаем балл каждому студенту и сортируем по убыванию.
       // Студент с максимальным баллом всегда первый (лидер).
       const ranked = users.map(function(u) {
           return { user: u, score: getUserTotalScore(u) };
       });

       ranked.sort(function(a, b) {
           if (b.score !== a.score) return b.score - a.score;   // по баллу убыв.
           return (a.user.registeredAt || 0) - (b.user.registeredAt || 0); // при равенстве — раньше зарег.
       });

       // Медали для тройки лидеров
       var medals = ['🥇', '🥈', '🥉'];

       let rows = '';
       ranked.forEach(function(item, index) {
           var u     = item.user;
           var score = item.score;
           var fio   = u.fio || '-';
           var uni   = u.university || '-';
           var uid   = u.uid || '-';
           var isLeader = index === 0 && score > 0;
           var medal    = index < 3 && score > 0 ? medals[index] : '';

           // Стиль строки лидера — выделенный фон + золотая рамка
           var rowStyle = isLeader
               ? ' style="background: linear-gradient(90deg, rgba(255,234,0,.10) 0%, rgba(255,165,0,.06) 100%);' +
                 'border-left: 3px solid var(--neon-yellow); font-weight: 600;"'
               : (index === 1 ? ' style="border-left: 3px solid #a8a8a8;"' :
                  index === 2 ? ' style="border-left: 3px solid #cd7f32;"' : '');

           // Цвет балла
           var scoreColor = score === 0 ? 'var(--text-sec)'
               : index === 0 ? 'var(--neon-yellow)'
               : index === 1 ? '#c0c0c0'
               : index === 2 ? '#cd7f32'
               : 'var(--neon-green)';

           rows += '<tr' + rowStyle + '>' +
               '<td style="text-align:center; font-size: 1.1rem;">' + (medal || (index + 1)) + '</td>' +
               '<td>' +
                   (isLeader ? '<span style="color:var(--neon-yellow);">★ </span>' : '') +
                   fio +
               '</td>' +
               '<td style="font-size: 0.82rem; color: var(--text-sec);">' + uni + '</td>' +
               '<td><code style="font-size:0.78rem;">' + uid + '</code></td>' +
               '<td style="text-align:center;"><b style="color:' + scoreColor + '; font-size: 1.05rem;">' + score + '</b></td>' +
           '</tr>';
       });

       // Шапка с плашкой лидера (если есть хотя бы один балл)
       var leaderBanner = '';
       if (ranked.length > 0 && ranked[0].score > 0) {
           var leader = ranked[0].user;
           leaderBanner =
               '<div style="' +
                   'background: linear-gradient(135deg, rgba(255,234,0,.12), rgba(255,165,0,.08));' +
                   'border: 1px solid rgba(255,234,0,.4); border-radius: 12px;' +
                   'padding: 14px 20px; margin-bottom: 20px;' +
                   'display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">' +
                   '<span style="font-size: 2.2rem;">🏆</span>' +
                   '<div>' +
                       '<div style="color: var(--neon-yellow); font-weight: 700; font-size: 1rem;">Лидер рейтинга</div>' +
                       '<div style="color: var(--text-main); font-size: 0.95rem;">' + (leader.fio || '-') + '</div>' +
                       '<div style="color: var(--text-sec); font-size: 0.8rem;">' + (leader.university || '-') + '</div>' +
                   '</div>' +
                   '<div style="margin-left: auto; text-align: center;">' +
                       '<div style="color: var(--neon-yellow); font-size: 1.8rem; font-weight: 700; line-height:1;">' + ranked[0].score + '</div>' +
                       '<div style="color: var(--text-sec); font-size: 0.75rem;">баллов</div>' +
                   '</div>' +
               '</div>';
       }

       container.innerHTML =
           leaderBanner +
           '<div class="students-table-wrapper">' +
               '<table class="students-table">' +
                   '<thead>' +
                       '<tr>' +
                           '<th style="text-align:center;">#</th>' +
                           '<th>ФИО</th>' +
                           '<th>Университет</th>' +
                           '<th>ID студента</th>' +
                           '<th style="text-align:center;">Баллы ▼</th>' +
                       '</tr>' +
                   '</thead>' +
                   '<tbody>' + rows + '</tbody>' +
               '</table>' +
           '</div>';
   }
   
   /* =============================================
      ПОЛУЧЕНИЕ ОТВЕТОВ ИЗ БОТА ТЕСТИРОВАНИЯ
      @my_tift_bot — команда /treply NEO-XXXXX subj qId текст
      ============================================= */
   async function fetchTestingRepliesFromTelegram() {
       if(!currentUser || !currentUser.uid) return;
       var cfg = getNeoTestingConfig();
       if(!cfg) return;
       var uid       = currentUser.uid;
       var offsetKey = 'neoTgOffset_testing_' + cfg.token.slice(-6);
       var savedOffset = parseInt(localStorage.getItem(offsetKey) || '0', 10);
       try {
           var url = 'https://api.telegram.org/bot' + cfg.token
               + '/getUpdates?limit=100&timeout=0'
               + (savedOffset > 0 ? '&offset=' + savedOffset : '');
           var res  = await fetch(url);
           var data = await res.json();
           if(!data.ok || !data.result || data.result.length === 0) return;
           var stored      = JSON.parse(localStorage.getItem('testingReplies') || '{}');
           var myReplies   = stored[uid] || [];
           var newFound    = false;
           var maxUpdateId = savedOffset;
           data.result.forEach(function(update) {
               if(update.update_id >= maxUpdateId) maxUpdateId = update.update_id + 1;
               var msg = update.message;
               if(!msg || !msg.text) return;
               // Формат: /treply NEO-XXXXX subj qId текст
               var match = msg.text.match(/^\/treply\s+(NEO-[A-Z0-9]+)\s+(\S+)\s+(\S+)\s+([\s\S]+)$/);
               if(!match) return;
               if(match[1] !== uid) return;
               var msgId = update.update_id;
               if(myReplies.some(function(r){ return r.tgUpdateId === msgId; })) return;
               var subjectKey = match[2];
               var questionId = match[3];
               var answerText = match[4].trim();
               var questionText = '—';
               try {
                   var wq = JSON.parse(localStorage.getItem('writtenQuestions') || '[]');
                   var found = wq.find(function(q){
                       return q.uid === uid && q.subjectKey === subjectKey && q.questionId === questionId;
                   });
                   if(found) questionText = found.question;
               } catch(e) {}
               myReplies.push({
                   answer: answerText, question: questionText,
                   subjectKey: subjectKey, questionId: questionId,
                   timestamp: msg.date * 1000, tgUpdateId: msgId
               });
               newFound = true;
               console.log('%c📩 Новый ответ из тестирования для ' + uid, 'color:#0aff68;font-weight:bold;');
           });
           if(maxUpdateId > savedOffset) localStorage.setItem(offsetKey, String(maxUpdateId));
           if(newFound) {
               stored[uid] = myReplies;
               localStorage.setItem('testingReplies', JSON.stringify(stored));
               checkTestingReplies();
           }
       } catch(e) {
           console.warn('Testing Telegram poll error:', e.message);
       }
   }

   /* =============================================
      ОТОБРАЖЕНИЕ ОТВЕТОВ ИЗ ТЕСТИРОВАНИЯ
      ============================================= */
   function checkTestingReplies() {
       if(!currentUser || !currentUser.uid) return;
       var replies   = JSON.parse(localStorage.getItem('testingReplies') || '{}');
       var myReplies = replies[currentUser.uid] || [];
       var container = document.getElementById('testingRepliesContainer');
       if(!container) return;
       var clearBtn = document.getElementById('clearTestingRepliesBtn');
       if(clearBtn) clearBtn.style.display = myReplies.length > 0 ? 'inline-block' : 'none';
       if(myReplies.length === 0) {
           container.innerHTML = '<p style="color:var(--text-sec);font-size:0.9rem;text-align:center;padding:10px;">Ответов пока нет</p>';
           return;
       }
       var html = '';
       var reversed = myReplies.slice().reverse();
       for(var di = 0; di < reversed.length; di++) {
           var r = reversed[di];
           var realIdx = myReplies.length - 1 - di;
           var dateStr = new Date(r.timestamp).toLocaleString('ru-RU');
           var subj = (typeof subjectsContent !== 'undefined' && subjectsContent && subjectsContent[r.subjectKey])
               ? subjectsContent[r.subjectKey].title : (r.subjectKey || '');
           html += '<div class="reply-item">';
           html += '<div class="reply-header">';
           html += '<span class="reply-label"><i class="fas fa-pen-alt"></i> Ответ преподавателя</span>';
           html += '<div class="reply-meta">';
           html += '<span class="reply-date">' + dateStr + '</span>';
           html += '<button class="reply-del-btn" onclick="deleteTestingReply(' + realIdx + ')" title="Удалить"><i class="fas fa-times"></i></button>';
           html += '</div></div>';
           if(subj) html += '<div style="font-size:0.78rem;color:var(--neon-yellow);margin-bottom:6px;"><i class="fas fa-book"></i> ' + subj + '</div>';
           html += '<div class="reply-question"><b>Вопрос:</b> ' + r.question + '</div>';
           html += '<div class="reply-answer">' + r.answer + '</div>';
           html += '</div>';
       }
       container.innerHTML = html;
   }

   function deleteTestingReply(index) {
       if(!currentUser || !currentUser.uid) return;
       if(!confirm('Удалить этот ответ?')) return;
       var replies   = JSON.parse(localStorage.getItem('testingReplies') || '{}');
       var myReplies = replies[currentUser.uid] || [];
       myReplies.splice(index, 1);
       replies[currentUser.uid] = myReplies;
       localStorage.setItem('testingReplies', JSON.stringify(replies));
       checkTestingReplies();
   }

   function clearAllTestingReplies() {
       if(!currentUser || !currentUser.uid) return;
       if(!confirm('Удалить все ответы из тестирования? Это нельзя отменить.')) return;
       var replies = JSON.parse(localStorage.getItem('testingReplies') || '{}');
       replies[currentUser.uid] = [];
       localStorage.setItem('testingReplies', JSON.stringify(replies));
       checkTestingReplies();
   }

   /* =============================================
      POLLING — автообновление каждые 15 сек
      ============================================= */

   function startProfilePolling() {
       fetchRepliesFromTelegram();
       checkAdminReplies();
       fetchTestingRepliesFromTelegram();
       checkTestingReplies();
       if(profilePollInterval) clearInterval(profilePollInterval);
       profilePollInterval = setInterval(fetchRepliesFromTelegram, 15000);
       if(testingPollInterval) clearInterval(testingPollInterval);
       testingPollInterval = setInterval(fetchTestingRepliesFromTelegram, 15000);
   }
   
   function stopProfilePolling() {
       if(profilePollInterval) {
           clearInterval(profilePollInterval);
           profilePollInterval = null;
       }
       if(testingPollInterval) {
           clearInterval(testingPollInterval);
           testingPollInterval = null;
       }
   }
