/* ===================================
   TESTS.JS - БАЗА ТЕСТОВ ПО ПРЕДМЕТАМ
   =================================== */

// Формат:
// TEST_BANK[subjectKey] = { title, questions: [{ id, prompt, type: 'single'|'multi', options:[{id,text}], correct:[optionId] }] }

const TEST_BANK = {
  physics: {
    title: 'Физика',
    questions: [
      { id: 'p1', prompt: 'Что такое закон Ома?', type: 'single', options: [{id:'a',text:'U = I/R'},{id:'b',text:'U = IR'},{id:'c',text:'I = UR'},{id:'d',text:'R = U*I'}], correct: ['b'] },
      { id: 'p2', prompt: 'Какова формула кинетической энергии?', type: 'single', options: [{id:'a',text:'E = mv'},{id:'b',text:'E = (1/2)mv^2'},{id:'c',text:'E = mgh'},{id:'d',text:'E = Fs'}], correct: ['b'] },
      { id: 'p3', prompt: 'Что описывает второй закон Ньютона?', type: 'single', options: [{id:'a',text:'Закон инерции'},{id:'b',text:'F = m*a'},{id:'c',text:'Действие равно противодействию'},{id:'d',text:'Закон сохранения энергии'}], correct: ['b'] },
      { id: 'p4', prompt: 'Какова скорость света в вакууме?', type: 'single', options: [{id:'a',text:'3*10^8 м/с'},{id:'b',text:'3*10^6 м/с'},{id:'c',text:'3*10^10 м/с'},{id:'d',text:'3*10^5 м/с'}], correct: ['a'] },
      { id: 'p5', prompt: 'Что такое дифракция?', type: 'single', options: [{id:'a',text:'Отражение света'},{id:'b',text:'Преломление света'},{id:'c',text:'Огибание препятствий волнами'},{id:'d',text:'Поглощение света'}], correct: ['c'] },
      { id: 'p6', prompt: 'Формула работы:', type: 'single', options: [{id:'a',text:'A = F/s'},{id:'b',text:'A = Fs'},{id:'c',text:'A = ma'},{id:'d',text:'A = P*t'}], correct: ['b'] },
      { id: 'p7', prompt: 'Что такое потенциальная энергия?', type: 'single', options: [{id:'a',text:'Энергия движения'},{id:'b',text:'Энергия положения'},{id:'c',text:'Тепловая энергия'},{id:'d',text:'Электрическая энергия'}], correct: ['b'] },
      { id: 'p8', prompt: 'Закон сохранения импульса применяется когда?', type: 'single', options: [{id:'a',text:'При столкновениях'},{id:'b',text:'В свободном падении'},{id:'c',text:'В равномерном движении'},{id:'d',text:'При нагревании'}], correct: ['a'] },
      { id: 'p9', prompt: 'Что такое индукция?', type: 'single', options: [{id:'a',text:'Создание магнитного поля током'},{id:'b',text:'Создание тока магнитным полем'},{id:'c',text:'Сопротивление'},{id:'d',text:'Емкость'}], correct: ['b'] },
      { id: 'p10', prompt: 'Формула периода маятника:', type: 'single', options: [{id:'a',text:'T = 2π√(l/g)'},{id:'b',text:'T = 2π√(g/l)'},{id:'c',text:'T = √(2π l/g)'},{id:'d',text:'T = 2π l/g'}], correct: ['a'] },
      { id: 'p11', prompt: 'Что такое волновая длина?', type: 'single', options: [{id:'a',text:'Расстояние между пиками волны'},{id:'b',text:'Частота волны'},{id:'c',text:'Амплитуда'},{id:'d',text:'Скорость волны'}], correct: ['a'] },
      { id: 'p12', prompt: 'Закон Кулона:', type: 'single', options: [{id:'a',text:'F = kq1q2/r^2'},{id:'b',text:'F = kq1q2/r'},{id:'c',text:'F = q1q2/r^2'},{id:'d',text:'F = kq1/r^2'}], correct: ['a'] },
      { id: 'p13', prompt: 'Что такое термодинамика?', type: 'single', options: [{id:'a',text:'Изучение движения'},{id:'b',text:'Изучение тепла и энергии'},{id:'c',text:'Изучение света'},{id:'d',text:'Изучение электричества'}], correct: ['b'] },
      { id: 'p14', prompt: 'Первый закон термодинамики:', type: 'single', options: [{id:'a',text:'ΔU = Q - A'},{id:'b',text:'ΔU = Q + A'},{id:'c',text:'Q = ΔU + A'},{id:'d',text:'A = Q - ΔU'}], correct: ['c'] },
      { id: 'p15', prompt: 'Что такое рефракция?', type: 'single', options: [{id:'a',text:'Отражение'},{id:'b',text:'Преломление'},{id:'c',text:'Дифракция'},{id:'d',text:'Интерференция'}], correct: ['b'] },
      { id: 'p16', prompt: 'Формула мощности:', type: 'single', options: [{id:'a',text:'P = A/t'},{id:'b',text:'P = Fv'},{id:'c',text:'P = UI'},{id:'d',text:'Все вышеперечисленное'}], correct: ['d'] },
      { id: 'p17', prompt: 'Что такое центростремительная сила?', type: 'single', options: [{id:'a',text:'F = mv^2/r'},{id:'b',text:'F = mg'},{id:'c',text:'F = kx'},{id:'d',text:'F = μN'}], correct: ['a'] },
      { id: 'p18', prompt: 'Закон Архимеда:', type: 'single', options: [{id:'a',text:'Выталкивающая сила равна весу жидкости'},{id:'b',text:'Давление в жидкости'},{id:'c',text:'Плавучесть'},{id:'d',text:'a и c'}], correct: ['d'] },
      { id: 'p19', prompt: 'Что такое квант?', type: 'single', options: [{id:'a',text:'Минимальная порция энергии'},{id:'b',text:'Частица света'},{id:'c',text:'Электрон'},{id:'d',text:'Протон'}], correct: ['a'] },
      { id: 'p20', prompt: 'Формула Эйнштейна:', type: 'single', options: [{id:'a',text:'E = mc^2'},{id:'b',text:'E = hf'},{id:'c',text:'E = (1/2)mv^2'},{id:'d',text:'E = q*U'}], correct: ['a'] },
      { id: 'p21', prompt: 'Что такое осциллятор?', type: 'single', options: [{id:'a',text:'Колебательная система'},{id:'b',text:'Волновая система'},{id:'c',text:'Электрическая цепь'},{id:'d',text:'Магнит'}], correct: ['a'] },
      { id: 'p22', prompt: 'Закон Паскаля:', type: 'single', options: [{id:'a',text:'Давление передается равномерно'},{id:'b',text:'Сила трения'},{id:'c',text:'Закон Ома'},{id:'d',text:'Закон Ньютона'}], correct: ['a'] },
      { id: 'p23', prompt: 'Что такое интерференция?', type: 'single', options: [{id:'a',text:'Наложение волн'},{id:'b',text:'Отражение'},{id:'c',text:'Преломление'},{id:'d',text:'Поглощение'}], correct: ['a'] },
      { id: 'p24', prompt: 'Формула импульса:', type: 'single', options: [{id:'a',text:'p = mv'},{id:'b',text:'p = Ft'},{id:'c',text:'a и b'},{id:'d',text:'p = E/c'}], correct: ['c'] },
      { id: 'p25', prompt: 'Что такое сверхпроводимость?', type: 'single', options: [{id:'a',text:'Нулевое сопротивление'},{id:'b',text:'Высокое сопротивление'},{id:'c',text:'Изоляция'},{id:'d',text:'Диэлектрик'}], correct: ['a'] },
      { id: 'p26', prompt: 'Закон Гука:', type: 'single', options: [{id:'a',text:'F = -kx'},{id:'b',text:'F = ma'},{id:'c',text:'F = Gm1m2/r^2'},{id:'d',text:'F = q*E'}], correct: ['a'] },
      { id: 'p27', prompt: 'Что такое радиоактивность?', type: 'single', options: [{id:'a',text:'Распад ядер'},{id:'b',text:'Излучение света'},{id:'c',text:'Электромагнитные волны'},{id:'d',text:'Звуковые волны'}], correct: ['a'] },
      { id: 'p28', prompt: 'Формула частоты:', type: 'single', options: [{id:'a',text:'f = 1/T'},{id:'b',text:'f = T/1'},{id:'c',text:'f = v/λ'},{id:'d',text:'a и c'}], correct: ['d'] },
      { id: 'p29', prompt: 'Что такое лазер?', type: 'single', options: [{id:'a',text:'Усиление света стимулированным излучением'},{id:'b',text:'Обычный свет'},{id:'c',text:'Радиоволны'},{id:'d',text:'Ультразвук'}], correct: ['a'] },
      { id: 'p30', prompt: 'Закон всемирного тяготения:', type: 'single', options: [{id:'a',text:'F = Gm1m2/r^2'},{id:'b',text:'F = Gm1m2/r'},{id:'c',text:'F = m1m2/r^2'},{id:'d',text:'F = Gm/r^2'}], correct: ['a'] }
    ]
  },

  lang: {
    title: 'Иностранный язык (английский)',
    questions: [
      { id: 'e1', prompt: 'What is the past tense of "go"?', type: 'single', options: [{id:'a',text:'Went'},{id:'b',text:'Goed'},{id:'c',text:'Gone'},{id:'d',text:'Goes'}], correct: ['a'] },
      { id: 'e2', prompt: 'Choose the correct sentence:', type: 'single', options: [{id:'a',text:"He don't like apples"},{id:'b',text:"He doesn't like apples"},{id:'c',text:'He no like apples'},{id:'d',text:'He likes not apples'}], correct: ['b'] },
      { id: 'e3', prompt: 'What does "ubiquitous" mean?', type: 'single', options: [{id:'a',text:'Rare'},{id:'b',text:'Everywhere'},{id:'c',text:'Hidden'},{id:'d',text:'Expensive'}], correct: ['b'] },
      { id: 'e4', prompt: 'Passive voice: "The book was read by him." Active is:', type: 'single', options: [{id:'a',text:'He reads the book'},{id:'b',text:'He read the book'},{id:'c',text:'He is reading the book'},{id:'d',text:'He has read the book'}], correct: ['b'] },
      { id: 'e5', prompt: 'Synonym of "happy":', type: 'single', options: [{id:'a',text:'Sad'},{id:'b',text:'Joyful'},{id:'c',text:'Angry'},{id:'d',text:'Tired'}], correct: ['b'] },
      { id: 'e6', prompt: 'What is a modal verb?', type: 'single', options: [{id:'a',text:'Can, could'},{id:'b',text:'Run, jump'},{id:'c',text:'Book, table'},{id:'d',text:'Happy, sad'}], correct: ['a'] },
      { id: 'e7', prompt: '"If I were rich, I _____ travel."', type: 'single', options: [{id:'a',text:'Will'},{id:'b',text:'Would'},{id:'c',text:'Can'},{id:'d',text:'Shall'}], correct: ['b'] },
      { id: 'e8', prompt: 'Antonym of "big":', type: 'single', options: [{id:'a',text:'Small'},{id:'b',text:'Large'},{id:'c',text:'Huge'},{id:'d',text:'Giant'}], correct: ['a'] },
      { id: 'e9', prompt: 'What is "gerund"?', type: 'single', options: [{id:'a',text:'Verb + ing as noun'},{id:'b',text:'Past participle'},{id:'c',text:'Adjective'},{id:'d',text:'Adverb'}], correct: ['a'] },
      { id: 'e10', prompt: '"She has been living here _____ 5 years."', type: 'single', options: [{id:'a',text:'Since'},{id:'b',text:'For'},{id:'c',text:'Ago'},{id:'d',text:'From'}], correct: ['b'] },
      { id: 'e11', prompt: 'What does "procrastinate" mean?', type: 'single', options: [{id:'a',text:'Do immediately'},{id:'b',text:'Delay'},{id:'c',text:'Forget'},{id:'d',text:'Remember'}], correct: ['b'] },
      { id: 'e12', prompt: 'Reported speech: He said, "I am tired." ->', type: 'single', options: [{id:'a',text:'He said he is tired'},{id:'b',text:'He said he was tired'},{id:'c',text:'He says he was tired'},{id:'d',text:'He said I was tired'}], correct: ['b'] },
      { id: 'e13', prompt: '"The more you study, _____ better you get."', type: 'single', options: [{id:'a',text:'A'},{id:'b',text:'An'},{id:'c',text:'The'},{id:'d',text:'No article'}], correct: ['c'] },
      { id: 'e14', prompt: 'Plural of "child":', type: 'single', options: [{id:'a',text:'Childs'},{id:'b',text:'Childes'},{id:'c',text:'Children'},{id:'d',text:'Childrens'}], correct: ['c'] },
      { id: 'e15', prompt: 'What is "idiom"?', type: 'single', options: [{id:'a',text:'Literal expression'},{id:'b',text:'Figurative expression'},{id:'c',text:'Grammar rule'},{id:'d',text:'Spelling'}], correct: ['b'] },
      { id: 'e16', prompt: '"He _____ to the store yesterday."', type: 'single', options: [{id:'a',text:'Go'},{id:'b',text:'Went'},{id:'c',text:'Goes'},{id:'d',text:'Going'}], correct: ['b'] },
      { id: 'e17', prompt: 'Synonym of "beautiful":', type: 'single', options: [{id:'a',text:'Ugly'},{id:'b',text:'Pretty'},{id:'c',text:'Plain'},{id:'d',text:'Dull'}], correct: ['b'] },
      { id: 'e18', prompt: '"Neither John _____ Mary came."', type: 'single', options: [{id:'a',text:'Or'},{id:'b',text:'Nor'},{id:'c',text:'And'},{id:'d',text:'But'}], correct: ['b'] },
      { id: 'e19', prompt: 'What does "ambiguous" mean?', type: 'single', options: [{id:'a',text:'Clear'},{id:'b',text:'Uncertain'},{id:'c',text:'Direct'},{id:'d',text:'Simple'}], correct: ['b'] },
      { id: 'e20', prompt: 'Future perfect: "By tomorrow, I _____ the book."', type: 'single', options: [{id:'a',text:'Will read'},{id:'b',text:'Will have read'},{id:'c',text:'Have read'},{id:'d',text:'Read'}], correct: ['b'] },
      { id: 'e21', prompt: '"This is the man _____ helped me."', type: 'single', options: [{id:'a',text:'Who'},{id:'b',text:'Which'},{id:'c',text:'What'},{id:'d',text:'Where'}], correct: ['a'] },
      { id: 'e22', prompt: 'Antonym of "hot":', type: 'single', options: [{id:'a',text:'Warm'},{id:'b',text:'Cold'},{id:'c',text:'Boiling'},{id:'d',text:'Mild'}], correct: ['b'] },
      { id: 'e23', prompt: 'What is "adverb"?', type: 'single', options: [{id:'a',text:'Describes noun'},{id:'b',text:'Describes verb'},{id:'c',text:'Person/place'},{id:'d',text:'Action'}], correct: ['b'] },
      { id: 'e24', prompt: '"She sings _____."', type: 'single', options: [{id:'a',text:'Beautiful'},{id:'b',text:'Beauty'},{id:'c',text:'Beautifully'},{id:'d',text:'Beautify'}], correct: ['c'] },
      { id: 'e25', prompt: '"I wish I _____ fly."', type: 'single', options: [{id:'a',text:'Can'},{id:'b',text:'Could'},{id:'c',text:'Will'},{id:'d',text:'Shall'}], correct: ['b'] },
      { id: 'e26', prompt: 'Synonym of "quick":', type: 'single', options: [{id:'a',text:'Slow'},{id:'b',text:'Fast'},{id:'c',text:'Lazy'},{id:'d',text:'Tired'}], correct: ['b'] },
      { id: 'e27', prompt: '"The cat is _____ the table."', type: 'single', options: [{id:'a',text:'On'},{id:'b',text:'In'},{id:'c',text:'At'},{id:'d',text:'To'}], correct: ['a'] },
      { id: 'e28', prompt: 'What does "metaphor" mean?', type: 'single', options: [{id:'a',text:'Direct comparison'},{id:'b',text:'Like or as'},{id:'c',text:'Alliteration'},{id:'d',text:'Rhyme'}], correct: ['a'] },
      { id: 'e29', prompt: 'Present continuous: "I _____ now."', type: 'single', options: [{id:'a',text:'Am eating'},{id:'b',text:'Eat'},{id:'c',text:'Ate'},{id:'d',text:'Have eaten'}], correct: ['a'] },
      { id: 'e30', prompt: '"Few" vs "a few": "Few" means', type: 'single', options: [{id:'a',text:'Some'},{id:'b',text:'Almost none'},{id:'c',text:'Many'},{id:'d',text:'All'}], correct: ['b'] }
    ]
  },

  writing: {
    title: 'Академическое письмо',
    questions: [
      { id: 'w1', prompt: 'Что такое тезис в эссе?', type: 'single', options: [{id:'a',text:'Заключение'},{id:'b',text:'Основная идея'},{id:'c',text:'Введение'},{id:'d',text:'Пример'}], correct: ['b'] },
      { id: 'w2', prompt: 'Как цитировать источник?', type: 'single', options: [{id:'a',text:'APA, MLA'},{id:'b',text:'Просто копировать'},{id:'c',text:'Без указания'},{id:'d',text:'Только имя автора'}], correct: ['a'] },
      { id: 'w3', prompt: 'Структура эссе:', type: 'single', options: [{id:'a',text:'Введение, тело, заключение'},{id:'b',text:'Только тело'},{id:'c',text:'Только введение'},{id:'d',text:'Заключение сначала'}], correct: ['a'] },
      { id: 'w4', prompt: 'Что такое плагиат?', type: 'single', options: [{id:'a',text:'Оригинальная работа'},{id:'b',text:'Копирование без цитирования'},{id:'c',text:'Цитирование'},{id:'d',text:'Редактирование'}], correct: ['b'] },
      { id: 'w5', prompt: 'Абзац должен иметь:', type: 'single', options: [{id:'a',text:'Topic sentence'},{id:'b',text:'Нет структуры'},{id:'c',text:'Только примеры'},{id:'d',text:'Длинные предложения'}], correct: ['a'] },
      { id: 'w6', prompt: 'Transition words:', type: 'single', options: [{id:'a',text:'However, moreover'},{id:'b',text:'Run, jump'},{id:'c',text:'Book, pen'},{id:'d',text:'Happy, sad'}], correct: ['a'] },
      { id: 'w7', prompt: 'Что такое abstract?', type: 'single', options: [{id:'a',text:'Краткое изложение'},{id:'b',text:'Полный текст'},{id:'c',text:'Список литературы'},{id:'d',text:'Приложение'}], correct: ['a'] },
      { id: 'w8', prompt: 'В исследовательской работе:', type: 'single', options: [{id:'a',text:'Методология'},{id:'b',text:'Нет методов'},{id:'c',text:'Только мнение'},{id:'d',text:'Фикция'}], correct: ['a'] },
      { id: 'w9', prompt: 'Как избежать run-on sentences?', type: 'single', options: [{id:'a',text:'Использовать точки'},{id:'b',text:'Делать длинные'},{id:'c',text:'Без пунктуации'},{id:'d',text:'Только запятые'}], correct: ['a'] },
      { id: 'w10', prompt: 'Что такое peer review?', type: 'single', options: [{id:'a',text:'Проверка коллег'},{id:'b',text:'Самопроверка'},{id:'c',text:'Нет проверки'},{id:'d',text:'Автоматическая'}], correct: ['a'] },
      { id: 'w11', prompt: 'Bibliography:', type: 'single', options: [{id:'a',text:'Список источников'},{id:'b',text:'Текст эссе'},{id:'c',text:'Введение'},{id:'d',text:'Заключение'}], correct: ['a'] },
      { id: 'w12', prompt: 'Argumentative essay:', type: 'single', options: [{id:'a',text:'Убеждает'},{id:'b',text:'Описывает'},{id:'c',text:'Рассказывает историю'},{id:'d',text:'Информирует'}], correct: ['a'] },
      { id: 'w13', prompt: 'Что такое thesis statement?', type: 'single', options: [{id:'a',text:'Вопрос'},{id:'b',text:'Утверждение'},{id:'c',text:'Цитата'},{id:'d',text:'Пример'}], correct: ['b'] },
      { id: 'w14', prompt: 'Paraphrasing:', type: 'single', options: [{id:'a',text:'Перефразировать своими словами'},{id:'b',text:'Копировать'},{id:'c',text:'Удалять'},{id:'d',text:'Добавлять'}], correct: ['a'] },
      { id: 'w15', prompt: 'Formal language:', type: 'single', options: [{id:'a',text:'Избегать сленга'},{id:'b',text:'Использовать сленг'},{id:'c',text:'Короткие формы'},{id:'d',text:'Эмоции'}], correct: ['a'] },
      { id: 'w16', prompt: 'Что такое outline?', type: 'single', options: [{id:'a',text:'План эссе'},{id:'b',text:'Готовый текст'},{id:'c',text:'Картинка'},{id:'d',text:'Таблица'}], correct: ['a'] },
      { id: 'w17', prompt: 'Descriptive essay:', type: 'single', options: [{id:'a',text:'Описывает'},{id:'b',text:'Аргументирует'},{id:'c',text:'Сравнивает'},{id:'d',text:'Анализирует'}], correct: ['a'] },
      { id: 'w18', prompt: 'In-text citation:', type: 'single', options: [{id:'a',text:'(Author, year)'},{id:'b',text:'Только год'},{id:'c',text:'Нет'},{id:'d',text:'Только автор'}], correct: ['a'] },
      { id: 'w19', prompt: 'Что такое conclusion?', type: 'single', options: [{id:'a',text:'Подведение итогов'},{id:'b',text:'Новые идеи'},{id:'c',text:'Введение'},{id:'d',text:'Примеры'}], correct: ['a'] },
      { id: 'w20', prompt: 'Compare and contrast:', type: 'single', options: [{id:'a',text:'Сравнивает сходства и различия'},{id:'b',text:'Только сходства'},{id:'c',text:'Только различия'},{id:'d',text:'Нет сравнения'}], correct: ['a'] },
      { id: 'w21', prompt: 'Academic tone:', type: 'single', options: [{id:'a',text:'Объективный'},{id:'b',text:'Эмоциональный'},{id:'c',text:'Субъективный'},{id:'d',text:'Разговорный'}], correct: ['a'] },
      { id: 'w22', prompt: 'Что такое appendix?', type: 'single', options: [{id:'a',text:'Дополнительные материалы'},{id:'b',text:'Основной текст'},{id:'c',text:'Абстракт'},{id:'d',text:'Титульный'}], correct: ['a'] },
      { id: 'w23', prompt: 'Editing:', type: 'single', options: [{id:'a',text:'Проверка ошибок'},{id:'b',text:'Написание'},{id:'c',text:'Планирование'},{id:'d',text:'Исследование'}], correct: ['a'] },
      { id: 'w24', prompt: 'Narrative essay:', type: 'single', options: [{id:'a',text:'Рассказывает историю'},{id:'b',text:'Аргументирует'},{id:'c',text:'Описывает'},{id:'d',text:'Информирует'}], correct: ['a'] },
      { id: 'w25', prompt: 'Что такое hook?', type: 'single', options: [{id:'a',text:'Привлечение внимания во введении'},{id:'b',text:'Заключение'},{id:'c',text:'Цитата'},{id:'d',text:'Пример'}], correct: ['a'] },
      { id: 'w26', prompt: 'Research question:', type: 'single', options: [{id:'a',text:'Фокус исследования'},{id:'b',text:'Ответ'},{id:'c',text:'Заключение'},{id:'d',text:'Пример'}], correct: ['a'] },
      { id: 'w27', prompt: 'Coherence:', type: 'single', options: [{id:'a',text:'Логическая связь'},{id:'b',text:'Хаос'},{id:'c',text:'Длина'},{id:'d',text:'Стиль'}], correct: ['a'] },
      { id: 'w28', prompt: 'Что такое footnote?', type: 'single', options: [{id:'a',text:'Примечание внизу страницы'},{id:'b',text:'В тексте'},{id:'c',text:'Список'},{id:'d',text:'Абстракт'}], correct: ['a'] },
      { id: 'w29', prompt: 'Expository essay:', type: 'single', options: [{id:'a',text:'Объясняет'},{id:'b',text:'Убеждает'},{id:'c',text:'Описывает'},{id:'d',text:'Рассказывает'}], correct: ['a'] },
      { id: 'w30', prompt: 'Revision:', type: 'single', options: [{id:'a',text:'Пересмотр содержания'},{id:'b',text:'Проверка грамматики'},{id:'c',text:'Написание'},{id:'d',text:'Публикация'}], correct: ['a'] }
    ]
  },

  coding: {
    title: 'Программирование',
    questions: [
      { id:'c1', prompt:'Что такое переменная?', type:'single', options:[{id:'a',text:'Хранение данных'},{id:'b',text:'Функция'},{id:'c',text:'Цикл'},{id:'d',text:'Класс'}], correct:['a'] },
      { id:'c2', prompt:'В Python, как объявить список?', type:'single', options:[{id:'a',text:'[]'},{id:'b',text:'{}'},{id:'c',text:'()'},{id:'d',text:'<>'}], correct:['a'] },
      { id:'c3', prompt:'Что делает цикл for?', type:'single', options:[{id:'a',text:'Повторяет код'},{id:'b',text:'Условие'},{id:'c',text:'Функция'},{id:'d',text:'Класс'}], correct:['a'] },
      { id:'c4', prompt:'Что такое if-else?', type:'single', options:[{id:'a',text:'Условное ветвление'},{id:'b',text:'Цикл'},{id:'c',text:'Массив'},{id:'d',text:'Строка'}], correct:['a'] },
      { id:'c5', prompt:'В Java, main метод:', type:'single', options:[{id:'a',text:'public static void main(String[] args)'},{id:'b',text:'void main()'},{id:'c',text:'static main()'},{id:'d',text:'public main()'}], correct:['a'] },
      { id:'c6', prompt:'Что такое рекурсия?', type:'single', options:[{id:'a',text:'Функция вызывает себя'},{id:'b',text:'Цикл'},{id:'c',text:'Массив'},{id:'d',text:'Объект'}], correct:['a'] },
      { id:'c7', prompt:'Boolean тип:', type:'single', options:[{id:'a',text:'True/False'},{id:'b',text:'Число'},{id:'c',text:'Строка'},{id:'d',text:'Список'}], correct:['a'] },
      { id:'c8', prompt:'Что такое массив?', type:'single', options:[{id:'a',text:'Коллекция элементов'},{id:'b',text:'Функция'},{id:'c',text:'Переменная'},{id:'d',text:'Цикл'}], correct:['a'] },
      { id:'c9', prompt:'В C++, cout для:', type:'single', options:[{id:'a',text:'Вывод'},{id:'b',text:'Ввод'},{id:'c',text:'Условие'},{id:'d',text:'Цикл'}], correct:['a'] },
      { id:'c10', prompt:'Что такое функция?', type:'single', options:[{id:'a',text:'Переиспользуемый код'},{id:'b',text:'Переменная'},{id:'c',text:'Массив'},{id:'d',text:'Класс'}], correct:['a'] },
      { id:'c11', prompt:'ООП:', type:'single', options:[{id:'a',text:'Объектно-ориентированное программирование'},{id:'b',text:'Процедурное'},{id:'c',text:'Функциональное'},{id:'d',text:'Логическое'}], correct:['a'] },
      { id:'c12', prompt:'Inheritance:', type:'single', options:[{id:'a',text:'Наследование'},{id:'b',text:'Инкапсуляция'},{id:'c',text:'Полиморфизм'},{id:'d',text:'Абстракция'}], correct:['a'] },
      { id:'c13', prompt:'Что такое exception?', type:'single', options:[{id:'a',text:'Обработка ошибок'},{id:'b',text:'Цикл'},{id:'c',text:'Функция'},{id:'d',text:'Массив'}], correct:['a'] },
      { id:'c14', prompt:'В Python, import для:', type:'single', options:[{id:'a',text:'Импорт модулей'},{id:'b',text:'Экспорт'},{id:'c',text:'Удаление'},{id:'d',text:'Копирование'}], correct:['a'] },
      { id:'c15', prompt:'Algorithm:', type:'single', options:[{id:'a',text:'Шаги решения проблемы'},{id:'b',text:'Код'},{id:'c',text:'Язык'},{id:'d',text:'Компилятор'}], correct:['a'] },
      { id:'c16', prompt:'Binary search:', type:'single', options:[{id:'a',text:'Поиск в отсортированном массиве'},{id:'b',text:'Сортировка'},{id:'c',text:'Добавление'},{id:'d',text:'Удаление'}], correct:['a'] },
      { id:'c17', prompt:'Что такое string?', type:'single', options:[{id:'a',text:'Последовательность символов'},{id:'b',text:'Число'},{id:'c',text:'Логическое'},{id:'d',text:'Массив'}], correct:['a'] },
      { id:'c18', prompt:'Loop while:', type:'single', options:[{id:'a',text:'Пока условие верно'},{id:'b',text:'Для каждого'},{id:'c',text:'Если'},{id:'d',text:'Иначе'}], correct:['a'] },
      { id:'c19', prompt:'Class:', type:'single', options:[{id:'a',text:'Шаблон для объектов'},{id:'b',text:'Функция'},{id:'c',text:'Переменная'},{id:'d',text:'Цикл'}], correct:['a'] },
      { id:'c20', prompt:'Debugging:', type:'single', options:[{id:'a',text:'Поиск ошибок'},{id:'b',text:'Написание кода'},{id:'c',text:'Компиляция'},{id:'d',text:'Исполнение'}], correct:['a'] },
      { id:'c21', prompt:'Что такое API?', type:'single', options:[{id:'a',text:'Интерфейс программирования приложений'},{id:'b',text:'Язык'},{id:'c',text:'База данных'},{id:'d',text:'Сеть'}], correct:['a'] },
      { id:'c22', prompt:'Polymorphism:', type:'single', options:[{id:'a',text:'Много форм'},{id:'b',text:'Наследование'},{id:'c',text:'Инкапсуляция'},{id:'d',text:'Абстракция'}], correct:['a'] },
      { id:'c23', prompt:'В HTML, <div> для:', type:'single', options:[{id:'a',text:'Контейнер'},{id:'b',text:'Изображение'},{id:'c',text:'Ссылка'},{id:'d',text:'Текст'}], correct:['a'] },
      { id:'c24', prompt:'Variable scope:', type:'single', options:[{id:'a',text:'Видимость переменной'},{id:'b',text:'Тип'},{id:'c',text:'Значение'},{id:'d',text:'Имя'}], correct:['a'] },
      { id:'c25', prompt:'Что такое compiler?', type:'single', options:[{id:'a',text:'Переводит код в машинный'},{id:'b',text:'Исполняет'},{id:'c',text:'Редактирует'},{id:'d',text:'Тестирует'}], correct:['a'] },
      { id:'c26', prompt:'Stack:', type:'single', options:[{id:'a',text:'LIFO структура'},{id:'b',text:'FIFO'},{id:'c',text:'Дерево'},{id:'d',text:'Граф'}], correct:['a'] },
      { id:'c27', prompt:'Queue:', type:'single', options:[{id:'a',text:'FIFO'},{id:'b',text:'LIFO'},{id:'c',text:'Массив'},{id:'d',text:'Список'}], correct:['a'] },
      { id:'c28', prompt:'Big O notation:', type:'single', options:[{id:'a',text:'Сложность алгоритма'},{id:'b',text:'Размер'},{id:'c',text:'Скорость'},{id:'d',text:'Память'}], correct:['a'] },
      { id:'c29', prompt:'Что такое database?', type:'single', options:[{id:'a',text:'Хранение данных'},{id:'b',text:'Код'},{id:'c',text:'Сеть'},{id:'d',text:'Графика'}], correct:['a'] },
      { id:'c30', prompt:'Git:', type:'single', options:[{id:'a',text:'Контроль версий'},{id:'b',text:'Язык'},{id:'c',text:'База'},{id:'d',text:'Сеть'}], correct:['a'] }
    ]
  },

  history: {
    title: 'Новейшая история Узбекистана',
    questions: [
      { id:'h1', prompt:'Когда Узбекистан обрел независимость?', type:'single', options:[{id:'a',text:'1991'},{id:'b',text:'1989'},{id:'c',text:'1993'},{id:'d',text:'2000'}], correct:['a'] },
      { id:'h2', prompt:'Кто был первым президентом?', type:'single', options:[{id:'a',text:'Ислам Каримов'},{id:'b',text:'Шавкат Мирзиёев'},{id:'c',text:'Абдулла Арипов'},{id:'d',text:'Нигматилла Юлдашев'}], correct:['a'] },
      { id:'h3', prompt:'Что такое "Хлопковое дело" 1980-х?', type:'single', options:[{id:'a',text:'Коррупция в хлопковой отрасли'},{id:'b',text:'Реформы'},{id:'c',text:'Независимость'},{id:'d',text:'Война'}], correct:['a'] },
      { id:'h4', prompt:'Когда умер Ислам Каримов?', type:'single', options:[{id:'a',text:'2016'},{id:'b',text:'2010'},{id:'c',text:'2020'},{id:'d',text:'2005'}], correct:['a'] },
      { id:'h5', prompt:'Реформы Мирзиёева включают:', type:'single', options:[{id:'a',text:'Либерализацию экономики'},{id:'b',text:'Закрытие границ'},{id:'c',text:'Увеличение цензуры'},{id:'d',text:'Уменьшение туризма'}], correct:['a'] },
      { id:'h6', prompt:'Что произошло в Андижане в 2005?', type:'single', options:[{id:'a',text:'Протесты и подавление'},{id:'b',text:'Выборы'},{id:'c',text:'Независимость'},{id:'d',text:'Экономический бум'}], correct:['a'] },
      { id:'h7', prompt:'Узбекистан входит в:', type:'single', options:[{id:'a',text:'ШОС'},{id:'b',text:'НАТО'},{id:'c',text:'ЕС'},{id:'d',text:'АСЕАН'}], correct:['a'] },
      { id:'h8', prompt:'Когда была принята Конституция?', type:'single', options:[{id:'a',text:'1992'},{id:'b',text:'1991'},{id:'c',text:'2000'},{id:'d',text:'2010'}], correct:['a'] },
      { id:'h9', prompt:'Экономика Узбекистана основана на:', type:'single', options:[{id:'a',text:'Хлопок, газ, золото'},{id:'b',text:'Нефть только'},{id:'c',text:'Туризм только'},{id:'d',text:'IT'}], correct:['a'] },
      { id:'h10', prompt:'Что такое "Новый Узбекистан"?', type:'single', options:[{id:'a',text:'Программа реформ Мирзиёева'},{id:'b',text:'Старый режим'},{id:'c',text:'Война'},{id:'d',text:'Кризис'}], correct:['a'] },
      { id:'h11', prompt:'Когда Узбекистан вышел из ОДКБ?', type:'single', options:[{id:'a',text:'2012'},{id:'b',text:'2000'},{id:'c',text:'2020'},{id:'d',text:'1995'}], correct:['a'] },
      { id:'h12', prompt:'Президентские выборы 2021:', type:'single', options:[{id:'a',text:'Мирзиёев переизбран'},{id:'b',text:'Каримов'},{id:'c',text:'Оппозиция выиграла'},{id:'d',text:'Отменены'}], correct:['a'] },
      { id:'h13', prompt:'Что произошло в Каракалпакстане в 2022?', type:'single', options:[{id:'a',text:'Протесты против конституционных изменений'},{id:'b',text:'Независимость'},{id:'c',text:'Экономический рост'},{id:'d',text:'Выборы'}], correct:['a'] },
      { id:'h14', prompt:'Узбекистан и Афганистан:', type:'single', options:[{id:'a',text:'Граница и торговля'},{id:'b',text:'Война'},{id:'c',text:'Нет отношений'},{id:'d',text:'Союз'}], correct:['a'] },
      { id:'h15', prompt:'Реформы в образовании:', type:'single', options:[{id:'a',text:'Увеличение университетов'},{id:'b',text:'Снижение'},{id:'c',text:'Закрытие школ'},{id:'d',text:'Нет изменений'}], correct:['a'] },
      { id:'h16', prompt:'Когда ввели сум как валюту?', type:'single', options:[{id:'a',text:'1994'},{id:'b',text:'1991'},{id:'c',text:'2000'},{id:'d',text:'2010'}], correct:['a'] },
      { id:'h17', prompt:'Роль в Центральной Азии:', type:'single', options:[{id:'a',text:'Лидер'},{id:'b',text:'Изолирован'},{id:'c',text:'Член ЕС'},{id:'d',text:'В НАТО'}], correct:['a'] },
      { id:'h18', prompt:'Экологические проблемы:', type:'single', options:[{id:'a',text:'Аральское море'},{id:'b',text:'Нет'},{id:'c',text:'Только загрязнение воздуха'},{id:'d',text:'Леса'}], correct:['a'] },
      { id:'h19', prompt:'Туризм в Узбекистане:', type:'single', options:[{id:'a',text:'Развивается, Самарканд, Бухара'},{id:'b',text:'Запрещен'},{id:'c',text:'Минимальный'},{id:'d',text:'Только бизнес'}], correct:['a'] },
      { id:'h20', prompt:'Отношения с Россией:', type:'single', options:[{id:'a',text:'Союзнические'},{id:'b',text:'Враждебные'},{id:'c',text:'Нет'},{id:'d',text:'Только торговля'}], correct:['a'] },
      { id:'h21', prompt:'Женские права:', type:'single', options:[{id:'a',text:'Улучшения в реформах'},{id:'b',text:'Нет изменений'},{id:'c',text:'Ухудшение'},{id:'d',text:'Запрет'}], correct:['a'] },
      { id:'h22', prompt:'Когда был референдум по Конституции?', type:'single', options:[{id:'a',text:'2023'},{id:'b',text:'2010'},{id:'c',text:'1990'},{id:'d',text:'2005'}], correct:['a'] },
      { id:'h23', prompt:'Энергетика:', type:'single', options:[{id:'a',text:'Газ и нефть'},{id:'b',text:'Только солнечная'},{id:'c',text:'Нет ресурсов'},{id:'d',text:'Импорт всего'}], correct:['a'] },
      { id:'h24', prompt:'COVID-19 в Узбекистане:', type:'single', options:[{id:'a',text:'Вакцинация и локдауны'},{id:'b',text:'Нет влияния'},{id:'c',text:'Кризис'},{id:'d',text:'Отказ от вакцин'}], correct:['a'] },
      { id:'h25', prompt:'Отношения с Китаем:', type:'single', options:[{id:'a',text:'"Один пояс, один путь"'},{id:'b',text:'Нет'},{id:'c',text:'Война'},{id:'d',text:'Изоляция'}], correct:['a'] },
      { id:'h26', prompt:'Население Узбекистана:', type:'single', options:[{id:'a',text:'Около 35 млн'},{id:'b',text:'10 млн'},{id:'c',text:'50 млн'},{id:'d',text:'5 млн'}], correct:['a'] },
      { id:'h27', prompt:'Капитал:', type:'single', options:[{id:'a',text:'Ташкент'},{id:'b',text:'Самарканд'},{id:'c',text:'Бухара'},{id:'d',text:'Андижан'}], correct:['a'] },
      { id:'h28', prompt:'Независимость от:', type:'single', options:[{id:'a',text:'СССР'},{id:'b',text:'России'},{id:'c',text:'Ирана'},{id:'d',text:'Китая'}], correct:['a'] },
      { id:'h29', prompt:'Текущий президент на 2026:', type:'single', options:[{id:'a',text:'Шавкат Мирзиёев'},{id:'b',text:'Ислам Каримов'},{id:'c',text:'Новый'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'h30', prompt:'Экономический рост:', type:'single', options:[{id:'a',text:'Реформы привели к росту'},{id:'b',text:'Снижение'},{id:'c',text:'Стагнация'},{id:'d',text:'Кризис'}], correct:['a'] }
    ]
  },

  algebra: {
    title: 'Линейная алгебра',
    questions: [
      { id:'a1', prompt:'Что такое матрица?', type:'single', options:[{id:'a',text:'Таблица чисел'},{id:'b',text:'Вектор'},{id:'c',text:'Функция'},{id:'d',text:'Число'}], correct:['a'] },
      { id:'a2', prompt:'Детерминант 2x2:', type:'single', options:[{id:'a',text:'ad - bc'},{id:'b',text:'a+b+c+d'},{id:'c',text:'ab + cd'},{id:'d',text:'a - b'}], correct:['a'] },
      { id:'a3', prompt:'Что такое вектор?', type:'single', options:[{id:'a',text:'Направленный отрезок'},{id:'b',text:'Матрица'},{id:'c',text:'Скаляр'},{id:'d',text:'Полином'}], correct:['a'] },
      { id:'a4', prompt:'Собственные значения:', type:'single', options:[{id:'a',text:'Для A v = λ v'},{id:'b',text:'Детерминант'},{id:'c',text:'След'},{id:'d',text:'Ранг'}], correct:['a'] },
      { id:'a5', prompt:'Транспонирование:', type:'single', options:[{id:'a',text:'Замена строк на столбцы'},{id:'b',text:'Умножение'},{id:'c',text:'Сложение'},{id:'d',text:'Инверсия'}], correct:['a'] },
      { id:'a6', prompt:'Линейная независимость:', type:'single', options:[{id:'a',text:'Векторы не выражаются через другие'},{id:'b',text:'Зависимы'},{id:'c',text:'Ортогональны'},{id:'d',text:'Параллельны'}], correct:['a'] },
      { id:'a7', prompt:'Ранг матрицы:', type:'single', options:[{id:'a',text:'Макс. независимых строк'},{id:'b',text:'Размер'},{id:'c',text:'Детерминант'},{id:'d',text:'След'}], correct:['a'] },
      { id:'a8', prompt:'Обратная матрица:', type:'single', options:[{id:'a',text:'A * A^{-1} = I'},{id:'b',text:'A + A^{-1} = 0'},{id:'c',text:'A * A = I'},{id:'d',text:'A - A^{-1} = I'}], correct:['a'] },
      { id:'a9', prompt:'Скалярное произведение:', type:'single', options:[{id:'a',text:'v · w = |v||w|cosθ'},{id:'b',text:'v x w'},{id:'c',text:'v + w'},{id:'d',text:'v - w'}], correct:['a'] },
      { id:'a10', prompt:'Базис пространства:', type:'single', options:[{id:'a',text:'Линейно независимые векторы, генерирующие пространство'},{id:'b',text:'Один вектор'},{id:'c',text:'Матрица'},{id:'d',text:'Число'}], correct:['a'] },
      { id:'a11', prompt:'Ортогональная матрица:', type:'single', options:[{id:'a',text:'A^T * A = I'},{id:'b',text:'A * A = I'},{id:'c',text:'A + A^T = I'},{id:'d',text:'A - A^T = 0'}], correct:['a'] },
      { id:'a12', prompt:'Метод Гаусса:', type:'single', options:[{id:'a',text:'Приведение к ступенчатому виду'},{id:'b',text:'Детерминант'},{id:'c',text:'Собственные значения'},{id:'d',text:'Векторы'}], correct:['a'] },
      { id:'a13', prompt:'Размерность:', type:'single', options:[{id:'a',text:'Число векторов в базисе'},{id:'b',text:'Ранг'},{id:'c',text:'Детерминант'},{id:'d',text:'След'}], correct:['a'] },
      { id:'a14', prompt:'Векторное произведение:', type:'single', options:[{id:'a',text:'В 3D, перпендикулярно'},{id:'b',text:'Скаляр'},{id:'c',text:'Сумма'},{id:'d',text:'Разность'}], correct:['a'] },
      { id:'a15', prompt:'Линейное преобразование:', type:'single', options:[{id:'a',text:'T(av + bw) = aT(v) + bT(w)'},{id:'b',text:'Только аддитивно'},{id:'c',text:'Только умножение'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'a16', prompt:'Ядро:', type:'single', options:[{id:'a',text:'Ker(T) = {v | T(v)=0}'},{id:'b',text:'Im(T)'},{id:'c',text:'Базис'},{id:'d',text:'Ранг'}], correct:['a'] },
      { id:'a17', prompt:'Образ:', type:'single', options:[{id:'a',text:'Im(T)'},{id:'b',text:'Ker(T)'},{id:'c',text:'Детерминант'},{id:'d',text:'След'}], correct:['a'] },
      { id:'a18', prompt:'Симметричная матрица:', type:'single', options:[{id:'a',text:'A = A^T'},{id:'b',text:'A = -A^T'},{id:'c',text:'A * A^T = I'},{id:'d',text:'A + A^T = 0'}], correct:['a'] },
      { id:'a19', prompt:'Диагонализация:', type:'single', options:[{id:'a',text:'A = P D P^{-1}'},{id:'b',text:'A = P + D'},{id:'c',text:'A = P * D'},{id:'d',text:'A = D'}], correct:['a'] },
      { id:'a20', prompt:'Норма вектора:', type:'single', options:[{id:'a',text:'Длина'},{id:'b',text:'Направление'},{id:'c',text:'Компоненты'},{id:'d',text:'Сумма'}], correct:['a'] },
      { id:'a21', prompt:'Эрмитова матрица:', type:'single', options:[{id:'a',text:'A = A^*'},{id:'b',text:'A = A^T'},{id:'c',text:'A = -A^*'},{id:'d',text:'A * A^* = I'}], correct:['a'] },
      { id:'a22', prompt:'След матрицы:', type:'single', options:[{id:'a',text:'Сумма диагонали'},{id:'b',text:'Детерминант'},{id:'c',text:'Ранг'},{id:'d',text:'Инверсия'}], correct:['a'] },
      { id:'a23', prompt:'Ортонормированный базис:', type:'single', options:[{id:'a',text:'Ортогональные единичные векторы'},{id:'b',text:'Зависимые'},{id:'c',text:'Параллельные'},{id:'d',text:'Скаляры'}], correct:['a'] },
      { id:'a24', prompt:'Метод Крамера:', type:'single', options:[{id:'a',text:'Решение систем с детерминантами'},{id:'b',text:'Гаусс'},{id:'c',text:'Жордан'},{id:'d',text:'SVD'}], correct:['a'] },
      { id:'a25', prompt:'SVD:', type:'single', options:[{id:'a',text:'Разложение A = U Σ V^T'},{id:'b',text:'Диагонализация'},{id:'c',text:'Инверсия'},{id:'d',text:'Транспонирование'}], correct:['a'] },
      { id:'a26', prompt:'Линейная комбинация:', type:'single', options:[{id:'a',text:'a1 v1 + ... + an vn'},{id:'b',text:'Произведение'},{id:'c',text:'Деление'},{id:'d',text:'Вычитание'}], correct:['a'] },
      { id:'a27', prompt:'Подпространство:', type:'single', options:[{id:'a',text:'Замкнуто под сложением и умножением'},{id:'b',text:'Только сложением'},{id:'c',text:'Только умножением'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'a28', prompt:'Жорданова форма:', type:'single', options:[{id:'a',text:'Для недиагонализируемых матриц'},{id:'b',text:'Диагональная'},{id:'c',text:'Ортогональная'},{id:'d',text:'Симметричная'}], correct:['a'] },
      { id:'a29', prompt:'Проекция:', type:'single', options:[{id:'a',text:'Proj_u v = (v·u / u·u) u'},{id:'b',text:'v + u'},{id:'c',text:'v - u'},{id:'d',text:'v x u'}], correct:['a'] },
      { id:'a30', prompt:'Характеристический полином:', type:'single', options:[{id:'a',text:'det(A - λI) = 0'},{id:'b',text:'trace(A)'},{id:'c',text:'rank(A)'},{id:'d',text:'A + λI'}], correct:['a'] }
    ]
  },

  database: {
    title: 'База данных',
    questions: [
      { id:'db1', prompt:'Что такое SQL?', type:'single', options:[{id:'a',text:'Язык запросов'},{id:'b',text:'База данных'},{id:'c',text:'Таблица'},{id:'d',text:'Ключ'}], correct:['a'] },
      { id:'db2', prompt:'Primary key:', type:'single', options:[{id:'a',text:'Уникальный идентификатор'},{id:'b',text:'Внешний ключ'},{id:'c',text:'Индекс'},{id:'d',text:'Вью'}], correct:['a'] },
      { id:'db3', prompt:'Что такое JOIN?', type:'single', options:[{id:'a',text:'Соединение таблиц'},{id:'b',text:'Удаление'},{id:'c',text:'Вставка'},{id:'d',text:'Обновление'}], correct:['a'] },
      { id:'db4', prompt:'Normalization:', type:'single', options:[{id:'a',text:'Уменьшение избыточности'},{id:'b',text:'Увеличение'},{id:'c',text:'Удаление данных'},{id:'d',text:'Копирование'}], correct:['a'] },
      { id:'db5', prompt:'RDBMS:', type:'single', options:[{id:'a',text:'Relational Database Management System'},{id:'b',text:'NoSQL'},{id:'c',text:'Graph DB'},{id:'d',text:'Key-Value'}], correct:['a'] },
      { id:'db6', prompt:'SELECT * FROM table WHERE id=1:', type:'single', options:[{id:'a',text:'Выбор строки'},{id:'b',text:'Удаление'},{id:'c',text:'Обновление'},{id:'d',text:'Вставка'}], correct:['a'] },
      { id:'db7', prompt:'Foreign key:', type:'single', options:[{id:'a',text:'Ссылка на другую таблицу'},{id:'b',text:'Primary'},{id:'c',text:'Unique'},{id:'d',text:'Index'}], correct:['a'] },
      { id:'db8', prompt:'ACID:', type:'single', options:[{id:'a',text:'Atomicity, Consistency, Isolation, Durability'},{id:'b',text:'Только Atomicity'},{id:'c',text:'Нет'},{id:'d',text:'Base'}], correct:['a'] },
      { id:'db9', prompt:'Index:', type:'single', options:[{id:'a',text:'Ускоряет поиск'},{id:'b',text:'Замедляет'},{id:'c',text:'Удаляет'},{id:'d',text:'Копирует'}], correct:['a'] },
      { id:'db10', prompt:'NoSQL:', type:'single', options:[{id:'a',text:'Нереляционные БД'},{id:'b',text:'Реляционные'},{id:'c',text:'SQL только'},{id:'d',text:'Таблицы'}], correct:['a'] },
      { id:'db11', prompt:'Transaction:', type:'single', options:[{id:'a',text:'Группа операций'},{id:'b',text:'Одна операция'},{id:'c',text:'Таблица'},{id:'d',text:'Ключ'}], correct:['a'] },
      { id:'db12', prompt:'View:', type:'single', options:[{id:'a',text:'Виртуальная таблица'},{id:'b',text:'Реальная'},{id:'c',text:'Индекс'},{id:'d',text:'Триггер'}], correct:['a'] },
      { id:'db13', prompt:'GROUP BY:', type:'single', options:[{id:'a',text:'Группировка'},{id:'b',text:'Сортировка'},{id:'c',text:'Фильтр'},{id:'d',text:'Соединение'}], correct:['a'] },
      { id:'db14', prompt:'HAVING:', type:'single', options:[{id:'a',text:'Фильтр после GROUP BY'},{id:'b',text:'Перед'},{id:'c',text:'Вместо WHERE'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'db15', prompt:'Trigger:', type:'single', options:[{id:'a',text:'Автоматический код при событии'},{id:'b',text:'Функция'},{id:'c',text:'Процедура'},{id:'d',text:'Индекс'}], correct:['a'] },
      { id:'db16', prompt:'ER-диаграмма:', type:'single', options:[{id:'a',text:'Модель сущностей и связей'},{id:'b',text:'Таблица'},{id:'c',text:'Запрос'},{id:'d',text:'Индекс'}], correct:['a'] },
      { id:'db17', prompt:'3NF:', type:'single', options:[{id:'a',text:'Нет транзитивных зависимостей'},{id:'b',text:'1NF'},{id:'c',text:'2NF'},{id:'d',text:'BCNF'}], correct:['a'] },
      { id:'db18', prompt:'Stored procedure:', type:'single', options:[{id:'a',text:'Сохраненный код'},{id:'b',text:'Таблица'},{id:'c',text:'Вью'},{id:'d',text:'Ключ'}], correct:['a'] },
      { id:'db19', prompt:'Aggregate functions:', type:'single', options:[{id:'a',text:'SUM, COUNT'},{id:'b',text:'SELECT'},{id:'c',text:'JOIN'},{id:'d',text:'WHERE'}], correct:['a'] },
      { id:'db20', prompt:'Database schema:', type:'single', options:[{id:'a',text:'Структура'},{id:'b',text:'Данные'},{id:'c',text:'Запросы'},{id:'d',text:'Логи'}], correct:['a'] },
      { id:'db21', prompt:'Backup:', type:'single', options:[{id:'a',text:'Резервное копирование'},{id:'b',text:'Удаление'},{id:'c',text:'Обновление'},{id:'d',text:'Вставка'}], correct:['a'] },
      { id:'db22', prompt:'MongoDB:', type:'single', options:[{id:'a',text:'Document-oriented NoSQL'},{id:'b',text:'Relational'},{id:'c',text:'SQL'},{id:'d',text:'Graph'}], correct:['a'] },
      { id:'db23', prompt:'CAP theorem:', type:'single', options:[{id:'a',text:'Consistency, Availability, Partition tolerance'},{id:'b',text:'Только Consistency'},{id:'c',text:'ACID'},{id:'d',text:'BASE'}], correct:['a'] },
      { id:'db24', prompt:'Subquery:', type:'single', options:[{id:'a',text:'Запрос внутри запроса'},{id:'b',text:'Главный запрос'},{id:'c',text:'JOIN'},{id:'d',text:'UNION'}], correct:['a'] },
      { id:'db25', prompt:'UNION:', type:'single', options:[{id:'a',text:'Объединение результатов'},{id:'b',text:'Пересечение'},{id:'c',text:'Разница'},{id:'d',text:'Соединение'}], correct:['a'] },
      { id:'db26', prompt:'Constraint:', type:'single', options:[{id:'a',text:'Ограничение'},{id:'b',text:'Разрешение'},{id:'c',text:'Функция'},{id:'d',text:'Процедура'}], correct:['a'] },
      { id:'db27', prompt:'Data type:', type:'single', options:[{id:'a',text:'VARCHAR, INT'},{id:'b',text:'Таблица'},{id:'c',text:'Запрос'},{id:'d',text:'Ключ'}], correct:['a'] },
      { id:'db28', prompt:'Replication:', type:'single', options:[{id:'a',text:'Копирование данных'},{id:'b',text:'Удаление'},{id:'c',text:'Обновление'},{id:'d',text:'Поиск'}], correct:['a'] },
      { id:'db29', prompt:'Sharding:', type:'single', options:[{id:'a',text:'Разделение данных по серверам'},{id:'b',text:'Объединение'},{id:'c',text:'Индекс'},{id:'d',text:'Вью'}], correct:['a'] },
      { id:'db30', prompt:'ORM:', type:'single', options:[{id:'a',text:'Object-Relational Mapping'},{id:'b',text:'SQL'},{id:'c',text:'NoSQL'},{id:'d',text:'DB'}], correct:['a'] }
    ]
  },

  network: {
    title: 'Компьютерные сети',
    questions: [
      { id:'n1', prompt:'Что такое IP?', type:'single', options:[{id:'a',text:'Internet Protocol'},{id:'b',text:'TCP'},{id:'c',text:'HTTP'},{id:'d',text:'FTP'}], correct:['a'] },
      { id:'n2', prompt:'OSI модель:', type:'single', options:[{id:'a',text:'7 слоев'},{id:'b',text:'4 слоя'},{id:'c',text:'5 слоев'},{id:'d',text:'3 слоя'}], correct:['a'] },
      { id:'n3', prompt:'TCP:', type:'single', options:[{id:'a',text:'Надежный, с соединением'},{id:'b',text:'Без соединения'},{id:'c',text:'UDP'},{id:'d',text:'IP'}], correct:['a'] },
      { id:'n4', prompt:'UDP:', type:'single', options:[{id:'a',text:'Без соединения'},{id:'b',text:'Надежный'},{id:'c',text:'TCP'},{id:'d',text:'HTTP'}], correct:['a'] },
      { id:'n5', prompt:'MAC адрес:', type:'single', options:[{id:'a',text:'Физический адрес'},{id:'b',text:'Логический'},{id:'c',text:'IP'},{id:'d',text:'URL'}], correct:['a'] },
      { id:'n6', prompt:'Router:', type:'single', options:[{id:'a',text:'Маршрутизирует пакеты'},{id:'b',text:'Коммутатор'},{id:'c',text:'Хаб'},{id:'d',text:'Модем'}], correct:['a'] },
      { id:'n7', prompt:'HTTP:', type:'single', options:[{id:'a',text:'HyperText Transfer Protocol'},{id:'b',text:'FTP'},{id:'c',text:'SMTP'},{id:'d',text:'POP'}], correct:['a'] },
      { id:'n8', prompt:'DNS:', type:'single', options:[{id:'a',text:'Domain Name System'},{id:'b',text:'IP'},{id:'c',text:'MAC'},{id:'d',text:'URL'}], correct:['a'] },
      { id:'n9', prompt:'Firewall:', type:'single', options:[{id:'a',text:'Защита от атак'},{id:'b',text:'Маршрутизация'},{id:'c',text:'Коммутация'},{id:'d',text:'Модуляция'}], correct:['a'] },
      { id:'n10', prompt:'LAN:', type:'single', options:[{id:'a',text:'Local Area Network'},{id:'b',text:'WAN'},{id:'c',text:'MAN'},{id:'d',text:'PAN'}], correct:['a'] },
      { id:'n11', prompt:'IPv4:', type:'single', options:[{id:'a',text:'32-битный адрес'},{id:'b',text:'128-битный'},{id:'c',text:'IPv6'},{id:'d',text:'MAC'}], correct:['a'] },
      { id:'n12', prompt:'Subnet mask:', type:'single', options:[{id:'a',text:'Разделение сети'},{id:'b',text:'IP'},{id:'c',text:'MAC'},{id:'d',text:'Port'}], correct:['a'] },
      { id:'n13', prompt:'Port:', type:'single', options:[{id:'a',text:'Номер для сервисов'},{id:'b',text:'Адрес'},{id:'c',text:'Протокол'},{id:'d',text:'Слой'}], correct:['a'] },
      { id:'n14', prompt:'Ethernet:', type:'single', options:[{id:'a',text:'Стандарт LAN'},{id:'b',text:'Wi‑Fi'},{id:'c',text:'Bluetooth'},{id:'d',text:'5G'}], correct:['a'] },
      { id:'n15', prompt:'VPN:', type:'single', options:[{id:'a',text:'Virtual Private Network'},{id:'b',text:'Public'},{id:'c',text:'LAN'},{id:'d',text:'WAN'}], correct:['a'] },
      { id:'n16', prompt:'Bandwidth:', type:'single', options:[{id:'a',text:'Пропускная способность'},{id:'b',text:'Задержка'},{id:'c',text:'Jitter'},{id:'d',text:'Loss'}], correct:['a'] },
      { id:'n17', prompt:'Switch:', type:'single', options:[{id:'a',text:'Коммутатор, по MAC'},{id:'b',text:'Router'},{id:'c',text:'Hub'},{id:'d',text:'Modem'}], correct:['a'] },
      { id:'n18', prompt:'Wi‑Fi:', type:'single', options:[{id:'a',text:'Беспроводная сеть'},{id:'b',text:'Проводная'},{id:'c',text:'Ethernet'},{id:'d',text:'Fiber'}], correct:['a'] },
      { id:'n19', prompt:'HTTPS:', type:'single', options:[{id:'a',text:'Защищенный HTTP'},{id:'b',text:'FTP'},{id:'c',text:'SMTP'},{id:'d',text:'HTTP'}], correct:['a'] },
      { id:'n20', prompt:'ARP:', type:'multi', options:[{id:'a',text:'Address Resolution Protocol'},{id:'b',text:'IP to MAC'},{id:'c',text:'DNS'},{id:'d',text:'RARP'}], correct:['a','b'] },
      { id:'n21', prompt:'ICMP:', type:'single', options:[{id:'a',text:'Для ping'},{id:'b',text:'TCP'},{id:'c',text:'UDP'},{id:'d',text:'HTTP'}], correct:['a'] },
      { id:'n22', prompt:'NAT:', type:'single', options:[{id:'a',text:'Network Address Translation'},{id:'b',text:'IP'},{id:'c',text:'MAC'},{id:'d',text:'Port'}], correct:['a'] },
      { id:'n23', prompt:'QoS:', type:'single', options:[{id:'a',text:'Quality of Service'},{id:'b',text:'Bandwidth'},{id:'c',text:'Latency'},{id:'d',text:'Throughput'}], correct:['a'] },
      { id:'n24', prompt:'Bluetooth:', type:'single', options:[{id:'a',text:'PAN'},{id:'b',text:'LAN'},{id:'c',text:'WAN'},{id:'d',text:'MAN'}], correct:['a'] },
      { id:'n25', prompt:'Fiber optic:', type:'single', options:[{id:'a',text:'Оптическое волокно'},{id:'b',text:'Медный кабель'},{id:'c',text:'Радио'},{id:'d',text:'Satellite'}], correct:['a'] },
      { id:'n26', prompt:'VLAN:', type:'single', options:[{id:'a',text:'Virtual LAN'},{id:'b',text:'Real'},{id:'c',text:'WAN'},{id:'d',text:'PAN'}], correct:['a'] },
      { id:'n27', prompt:'OSPF:', type:'single', options:[{id:'a',text:'Routing protocol'},{id:'b',text:'Switching'},{id:'c',text:'Firewall'},{id:'d',text:'DNS'}], correct:['a'] },
      { id:'n28', prompt:'BGP:', type:'single', options:[{id:'a',text:'Border Gateway Protocol'},{id:'b',text:'Internal'},{id:'c',text:'OSPF'},{id:'d',text:'RIP'}], correct:['a'] },
      { id:'n29', prompt:'Latency:', type:'single', options:[{id:'a',text:'Задержка'},{id:'b',text:'Скорость'},{id:'c',text:'Пропускная'},{id:'d',text:'Потери'}], correct:['a'] },
      { id:'n30', prompt:'Cloud networking:', type:'single', options:[{id:'a',text:'AWS, Azure'},{id:'b',text:'Local'},{id:'c',text:'Hardware only'},{id:'d',text:'No network'}], correct:['a'] }
    ]
  },

  discrete: {
    title: 'Дискретные структуры',
    questions: [
      { id:'ds1', prompt:'Что такое множество?', type:'single', options:[{id:'a',text:'Коллекция уникальных элементов'},{id:'b',text:'Список'},{id:'c',text:'Массив'},{id:'d',text:'Функция'}], correct:['a'] },
      { id:'ds2', prompt:'Булева алгебра:', type:'single', options:[{id:'a',text:'0 и 1, AND, OR'},{id:'b',text:'Числа'},{id:'c',text:'Векторы'},{id:'d',text:'Матрицы'}], correct:['a'] },
      { id:'ds3', prompt:'Граф:', type:'single', options:[{id:'a',text:'Вершины и ребра'},{id:'b',text:'Дерево'},{id:'c',text:'Цикл'},{id:'d',text:'Путь'}], correct:['a'] },
      { id:'ds4', prompt:'Дерево:', type:'single', options:[{id:'a',text:'Граф без циклов'},{id:'b',text:'С циклами'},{id:'c',text:'Диграф'},{id:'d',text:'Мультиграф'}], correct:['a'] },
      { id:'ds5', prompt:'Комбинаторика:', type:'single', options:[{id:'a',text:'Сочетания, перестановки'},{id:'b',text:'Вероятность'},{id:'c',text:'Статистика'},{id:'d',text:'Алгебра'}], correct:['a'] },
      { id:'ds6', prompt:'Логическое И:', type:'single', options:[{id:'a',text:'AND'},{id:'b',text:'OR'},{id:'c',text:'NOT'},{id:'d',text:'XOR'}], correct:['a'] },
      { id:'ds7', prompt:'Теорема о рукопожатиях:', type:'single', options:[{id:'a',text:'Сумма степеней четная'},{id:'b',text:'Нечетная'},{id:'c',text:'Равна нулю'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'ds8', prompt:'Бинарное дерево:', type:'single', options:[{id:'a',text:'Каждый узел до 2 детей'},{id:'b',text:'3'},{id:'c',text:'1'},{id:'d',text:'Любое'}], correct:['a'] },
      { id:'ds9', prompt:'Рекурсия:', type:'single', options:[{id:'a',text:'Определение через себя'},{id:'b',text:'Итерация'},{id:'c',text:'Цикл'},{id:'d',text:'Функция'}], correct:['a'] },
      { id:'ds10', prompt:'Порядок роста:', type:'single', options:[{id:'a',text:'O(n)'},{id:'b',text:'Размер'},{id:'c',text:'Сложность'},{id:'d',text:'Все'}], correct:['c'] },
      { id:'ds11', prompt:'Модульная арифметика:', type:'single', options:[{id:'a',text:'mod'},{id:'b',text:'Деление'},{id:'c',text:'Умножение'},{id:'d',text:'Сложение'}], correct:['a'] },
      { id:'ds12', prompt:'Индукция:', type:'single', options:[{id:'a',text:'Доказательство для всех n'},{id:'b',text:'Только базис'},{id:'c',text:'Шаг'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'ds13', prompt:'Диграф:', type:'single', options:[{id:'a',text:'Направленный граф'},{id:'b',text:'Ненаправленный'},{id:'c',text:'Простой'},{id:'d',text:'Полный'}], correct:['a'] },
      { id:'ds14', prompt:'Эйлеров путь:', type:'single', options:[{id:'a',text:'Проходит каждое ребро раз'},{id:'b',text:'Вершину'},{id:'c',text:'Цикл'},{id:'d',text:'Дерево'}], correct:['a'] },
      { id:'ds15', prompt:'Гамильтонов цикл:', type:'single', options:[{id:'a',text:'Через все вершины раз'},{id:'b',text:'Ребра'},{id:'c',text:'Путь'},{id:'d',text:'Дерево'}], correct:['a'] },
      { id:'ds16', prompt:'Биномиальный коэффициент:', type:'single', options:[{id:'a',text:'C(n,k) = n! / (k!(n-k)!)'},{id:'b',text:'P(n,k)'},{id:'c',text:'n^k'},{id:'d',text:'n+k'}], correct:['a'] },
      { id:'ds17', prompt:'Логика предикатов:', type:'single', options:[{id:'a',text:'∀, ∃'},{id:'b',text:'Только пропозиции'},{id:'c',text:'Булева'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'ds18', prompt:'Автомат:', type:'single', options:[{id:'a',text:'Машина состояний'},{id:'b',text:'Граф'},{id:'c',text:'Дерево'},{id:'d',text:'Множество'}], correct:['a'] },
      { id:'ds19', prompt:'Теория кодов:', type:'single', options:[{id:'a',text:'Кодирование, декодирование'},{id:'b',text:'Графы'},{id:'c',text:'Множества'},{id:'d',text:'Логика'}], correct:['a'] },
      { id:'ds20', prompt:'Пидженхол принцип:', type:'single', options:[{id:'a',text:'Голубиные дыры'},{id:'b',text:'Если n+1 в n, то дубликат'},{id:'c',text:'Нет'},{id:'d',text:'Комбинаторика'}], correct:['b'] },
      { id:'ds21', prompt:'Группа:', type:'single', options:[{id:'a',text:'Множество с операцией, ассоциативно, инверсия, единица'},{id:'b',text:'Только операция'},{id:'c',text:'Кольцо'},{id:'d',text:'Поле'}], correct:['a'] },
      { id:'ds22', prompt:'Кольцо:', type:'single', options:[{id:'a',text:'Две операции'},{id:'b',text:'Одна'},{id:'c',text:'Группа'},{id:'d',text:'Поле'}], correct:['a'] },
      { id:'ds23', prompt:'Поле:', type:'single', options:[{id:'a',text:'Кольцо с делением'},{id:'b',text:'Группа'},{id:'c',text:'Множество'},{id:'d',text:'Граф'}], correct:['a'] },
      { id:'ds24', prompt:'Решето Эратосфена:', type:'single', options:[{id:'a',text:'Поиск простых чисел'},{id:'b',text:'Сортировка'},{id:'c',text:'Поиск'},{id:'d',text:'Граф'}], correct:['a'] },
      { id:'ds25', prompt:'Теория игр:', type:'single', options:[{id:'a',text:'Стратегии, выигрыши'},{id:'b',text:'Графы'},{id:'c',text:'Множества'},{id:'d',text:'Логика'}], correct:['a'] },
      { id:'ds26', prompt:'Формальные языки:', type:'single', options:[{id:'a',text:'Грамматики, автоматы'},{id:'b',text:'Программирование'},{id:'c',text:'Сети'},{id:'d',text:'БД'}], correct:['a'] },
      { id:'ds27', prompt:'Тьюринг машина:', type:'single', options:[{id:'a',text:'Модель вычисления'},{id:'b',text:'Автомат'},{id:'c',text:'Граф'},{id:'d',text:'Дерево'}], correct:['a'] },
      { id:'ds28', prompt:'NP-полные проблемы:', type:'single', options:[{id:'a',text:'Трудные для решения'},{id:'b',text:'P'},{id:'c',text:'Легкие'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'ds29', prompt:'Буль функция:', type:'single', options:[{id:'a',text:'От 0/1 к 0/1'},{id:'b',text:'Числовая'},{id:'c',text:'Векторная'},{id:'d',text:'Матричная'}], correct:['a'] },
      { id:'ds30', prompt:'Семантика:', type:'single', options:[{id:'a',text:'Значение выражений'},{id:'b',text:'Синтаксис'},{id:'c',text:'Грамматика'},{id:'d',text:'Автомат'}], correct:['a'] }
    ]
  },

  electronics: {
    title: 'Электроника и схемы',
    questions: [
      { id:'el1', prompt:'Что такое резистор?', type:'single', options:[{id:'a',text:'Сопротивление'},{id:'b',text:'Емкость'},{id:'c',text:'Индуктивность'},{id:'d',text:'Диод'}], correct:['a'] },
      { id:'el2', prompt:'Конденсатор:', type:'single', options:[{id:'a',text:'Хранит заряд'},{id:'b',text:'Пропускает ток'},{id:'c',text:'Усиливает'},{id:'d',text:'Переключает'}], correct:['a'] },
      { id:'el3', prompt:'Индуктор:', type:'single', options:[{id:'a',text:'Магнитное поле'},{id:'b',text:'Заряд'},{id:'c',text:'Сопротивление'},{id:'d',text:'Напряжение'}], correct:['a'] },
      { id:'el4', prompt:'Диод:', type:'single', options:[{id:'a',text:'Пропускает в одном направлении'},{id:'b',text:'Двух'},{id:'c',text:'Нет'},{id:'d',text:'Усиливает'}], correct:['a'] },
      { id:'el5', prompt:'Транзистор:', type:'single', options:[{id:'a',text:'Усилитель, переключатель'},{id:'b',text:'Резистор'},{id:'c',text:'Конденсатор'},{id:'d',text:'Диод'}], correct:['a'] },
      { id:'el6', prompt:'Логический элемент AND:', type:'single', options:[{id:'a',text:'1 если все 1'},{id:'b',text:'OR'},{id:'c',text:'NOT'},{id:'d',text:'XOR'}], correct:['a'] },
      { id:'el7', prompt:'Операционный усилитель:', type:'single', options:[{id:'a',text:'Усиление сигнала'},{id:'b',text:'Логика'},{id:'c',text:'Питание'},{id:'d',text:'Фильтр'}], correct:['a'] },
      { id:'el8', prompt:'RC-цепь:', type:'single', options:[{id:'a',text:'Фильтр'},{id:'b',text:'Усилитель'},{id:'c',text:'Логика'},{id:'d',text:'Память'}], correct:['a'] },
      { id:'el9', prompt:'Закон Кирхгофа для токов:', type:'single', options:[{id:'a',text:'Сумма в узле =0'},{id:'b',text:'Напряжений'},{id:'c',text:'Сопротивлений'},{id:'d',text:'Емкостей'}], correct:['a'] },
      { id:'el10', prompt:'Закон Кирхгофа для напряжений:', type:'single', options:[{id:'a',text:'Сумма в контуре =0'},{id:'b',text:'Токов'},{id:'c',text:'Мощности'},{id:'d',text:'Заряда'}], correct:['a'] },
      { id:'el11', prompt:'MOSFET:', type:'single', options:[{id:'a',text:'Тип транзистора'},{id:'b',text:'Диод'},{id:'c',text:'Резистор'},{id:'d',text:'Конденсатор'}], correct:['a'] },
      { id:'el12', prompt:'BJT:', type:'single', options:[{id:'a',text:'Биполярный транзистор'},{id:'b',text:'Униполярный'},{id:'c',text:'Диод'},{id:'d',text:'Опто'}], correct:['a'] },
      { id:'el13', prompt:'Флип-флоп:', type:'single', options:[{id:'a',text:'Память'},{id:'b',text:'Усилитель'},{id:'c',text:'Фильтр'},{id:'d',text:'Генератор'}], correct:['a'] },
      { id:'el14', prompt:'ADC:', type:'single', options:[{id:'a',text:'Analog to Digital Converter'},{id:'b',text:'Digital to Analog'},{id:'c',text:'Amplifier'},{id:'d',text:'Filter'}], correct:['a'] },
      { id:'el15', prompt:'DAC:', type:'single', options:[{id:'a',text:'Digital to Analog'},{id:'b',text:'Analog to Digital'},{id:'c',text:'Logic'},{id:'d',text:'Power'}], correct:['a'] },
      { id:'el16', prompt:'Мультиплексор:', type:'single', options:[{id:'a',text:'Выбор сигнала'},{id:'b',text:'Демультиплексор'},{id:'c',text:'Сумматор'},{id:'d',text:'Счетчик'}], correct:['a'] },
      { id:'el17', prompt:'Сумматор:', type:'single', options:[{id:'a',text:'Сложение битов'},{id:'b',text:'Вычитание'},{id:'c',text:'Умножение'},{id:'d',text:'Деление'}], correct:['a'] },
      { id:'el18', prompt:'Фильтр низких частот:', type:'single', options:[{id:'a',text:'Пропускает низкие'},{id:'b',text:'Высокие'},{id:'c',text:'Все'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'el19', prompt:'Генератор:', type:'single', options:[{id:'a',text:'Создает сигнал'},{id:'b',text:'Усиливает'},{id:'c',text:'Фильтрует'},{id:'d',text:'Конвертирует'}], correct:['a'] },
      { id:'el20', prompt:'Трансформатор:', type:'single', options:[{id:'a',text:'Изменяет напряжение'},{id:'b',text:'Ток'},{id:'c',text:'Сопротивление'},{id:'d',text:'Емкость'}], correct:['a'] },
      { id:'el21', prompt:'Реле:', type:'single', options:[{id:'a',text:'Электромеханический переключатель'},{id:'b',text:'Транзистор'},{id:'c',text:'Диод'},{id:'d',text:'Конденсатор'}], correct:['a'] },
      { id:'el22', prompt:'LED:', type:'single', options:[{id:'a',text:'Light Emitting Diode'},{id:'b',text:'Laser'},{id:'c',text:'Resistor'},{id:'d',text:'Capacitor'}], correct:['a'] },
      { id:'el23', prompt:'PCB:', type:'single', options:[{id:'a',text:'Printed Circuit Board'},{id:'b',text:'Chip'},{id:'c',text:'Wire'},{id:'d',text:'Battery'}], correct:['a'] },
      { id:'el24', prompt:'Импеданс:', type:'single', options:[{id:'a',text:'Комплексное сопротивление'},{id:'b',text:'Реальное'},{id:'c',text:'Мнимое'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'el25', prompt:'Резонанс:', type:'single', options:[{id:'a',text:'В LC-цепи'},{id:'b',text:'RC'},{id:'c',text:'RL'},{id:'d',text:'Все'}], correct:['a'] },
      { id:'el26', prompt:'Логический NOT:', type:'single', options:[{id:'a',text:'Инвертор'},{id:'b',text:'AND'},{id:'c',text:'OR'},{id:'d',text:'NAND'}], correct:['a'] },
      { id:'el27', prompt:'NAND:', type:'single', options:[{id:'a',text:'Универсальный элемент'},{id:'b',text:'Только AND'},{id:'c',text:'OR'},{id:'d',text:'XOR'}], correct:['a'] },
      { id:'el28', prompt:'Счетчик:', type:'single', options:[{id:'a',text:'Считает импульсы'},{id:'b',text:'Суммирует'},{id:'c',text:'Умножает'},{id:'d',text:'Делит'}], correct:['a'] },
      { id:'el29', prompt:'Shift register:', type:'single', options:[{id:'a',text:'Сдвиг битов'},{id:'b',text:'Память'},{id:'c',text:'Усилитель'},{id:'d',text:'Фильтр'}], correct:['a'] },
      { id:'el30', prompt:'Power supply:', type:'single', options:[{id:'a',text:'Источник питания'},{id:'b',text:'Усилитель'},{id:'c',text:'Фильтр'},{id:'d',text:'Логика'}], correct:['a'] }
    ]
  },

  philosophy: {
    title: 'Философия',
    questions: [
      { id:'ph1', prompt:'Кто такой Сократ?', type:'single', options:[{id:'a',text:'Греческий философ, "Знаю, что ничего не знаю"'},{id:'b',text:'Аристотель'},{id:'c',text:'Платон'},{id:'d',text:'Ницше'}], correct:['a'] },
      { id:'ph2', prompt:'Платон:', type:'single', options:[{id:'a',text:'Теория идей'},{id:'b',text:'Атомизм'},{id:'c',text:'Нигилизм'},{id:'d',text:'Экзистенциализм'}], correct:['a'] },
      { id:'ph3', prompt:'Аристотель:', type:'single', options:[{id:'a',text:'Логика, этика'},{id:'b',text:'Идеи'},{id:'c',text:'Скептицизм'},{id:'d',text:'Стоицизм'}], correct:['a'] },
      { id:'ph4', prompt:'Что такое этика?', type:'single', options:[{id:'a',text:'Изучение морали'},{id:'b',text:'Онтология'},{id:'c',text:'Эпистемология'},{id:'d',text:'Метафизика'}], correct:['a'] },
      { id:'ph5', prompt:'Кант:', type:'single', options:[{id:'a',text:'Категорический императив'},{id:'b',text:'Утилитаризм'},{id:'c',text:'Эгоизм'},{id:'d',text:'Релятивизм'}], correct:['a'] },
      { id:'ph6', prompt:'Ницше:', type:'single', options:[{id:'a',text:'"Бог мертв"'},{id:'b',text:'Идеализм'},{id:'c',text:'Материализм'},{id:'d',text:'Рационализм'}], correct:['a'] },
      { id:'ph7', prompt:'Декарт:', type:'single', options:[{id:'a',text:'"Cogito ergo sum"'},{id:'b',text:'Эмпиризм'},{id:'c',text:'Скептицизм'},{id:'d',text:'Феноменология'}], correct:['a'] },
      { id:'ph8', prompt:'Гегель:', type:'single', options:[{id:'a',text:'Диалектика'},{id:'b',text:'Позитивизм'},{id:'c',text:'Экзистенциализм'},{id:'d',text:'Стоицизм'}], correct:['a'] },
      { id:'ph9', prompt:'Маркс:', type:'single', options:[{id:'a',text:'Коммунизм, материализм'},{id:'b',text:'Капитализм'},{id:'c',text:'Идеализм'},{id:'d',text:'Анархизм'}], correct:['a'] },
      { id:'ph10', prompt:'Экзистенциализм:', type:'single', options:[{id:'a',text:'Сартр, свобода'},{id:'b',text:'Детерминизм'},{id:'c',text:'Фатализм'},{id:'d',text:'Позитивизм'}], correct:['a'] },
      { id:'ph11', prompt:'Утилитаризм:', type:'single', options:[{id:'a',text:'Максимум счастья'},{id:'b',text:'Долг'},{id:'c',text:'Добродетель'},{id:'d',text:'Эгоизм'}], correct:['a'] },
      { id:'ph12', prompt:'Эпистемология:', type:'single', options:[{id:'a',text:'Теория знания'},{id:'b',text:'Этика'},{id:'c',text:'Онтология'},{id:'d',text:'Логика'}], correct:['a'] },
      { id:'ph13', prompt:'Онтология:', type:'single', options:[{id:'a',text:'Бытие'},{id:'b',text:'Знание'},{id:'c',text:'Мораль'},{id:'d',text:'Красота'}], correct:['a'] },
      { id:'ph14', prompt:'Феноменология:', type:'single', options:[{id:'a',text:'Гуссерль'},{id:'b',text:'Кант'},{id:'c',text:'Ницше'},{id:'d',text:'Аристотель'}], correct:['a'] },
      { id:'ph15', prompt:'Стоицизм:', type:'single', options:[{id:'a',text:'Контроль эмоций'},{id:'b',text:'Гедонизм'},{id:'c',text:'Скептицизм'},{id:'d',text:'Эпикуреизм'}], correct:['a'] },
      { id:'ph16', prompt:'Эмпиризм:', type:'single', options:[{id:'a',text:'Опыт как источник знания'},{id:'b',text:'Разум'},{id:'c',text:'Вера'},{id:'d',text:'Интуиция'}], correct:['a'] },
      { id:'ph17', prompt:'Рационализм:', type:'single', options:[{id:'a',text:'Разум'},{id:'b',text:'Опыт'},{id:'c',text:'Эмоции'},{id:'d',text:'Традиция'}], correct:['a'] },
      { id:'ph18', prompt:'Постмодернизм:', type:'single', options:[{id:'a',text:'Нет абсолютной истины'},{id:'b',text:'Абсолют'},{id:'c',text:'Классика'},{id:'d',text:'Реализм'}], correct:['a'] },
      { id:'ph19', prompt:'Феминизм:', type:'single', options:[{id:'a',text:'Равенство полов'},{id:'b',text:'Патриархат'},{id:'c',text:'Матриархат'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'ph20', prompt:'Конфуцианство:', type:'single', options:[{id:'a',text:'Этика, гармония'},{id:'b',text:'Даосизм'},{id:'c',text:'Буддизм'},{id:'d',text:'Христианство'}], correct:['a'] },
      { id:'ph21', prompt:'Даосизм:', type:'single', options:[{id:'a',text:'Дао, гармония с природой'},{id:'b',text:'Конфуций'},{id:'c',text:'Будда'},{id:'d',text:'Иисус'}], correct:['a'] },
      { id:'ph22', prompt:'Буддизм:', type:'single', options:[{id:'a',text:'Четыре благородные истины'},{id:'b',text:'Десять заповедей'},{id:'c',text:'Коран'},{id:'d',text:'Веды'}], correct:['a'] },
      { id:'ph23', prompt:'Христианство:', type:'single', options:[{id:'a',text:'Иисус Христос'},{id:'b',text:'Мухаммед'},{id:'c',text:'Будда'},{id:'d',text:'Конфуций'}], correct:['a'] },
      { id:'ph24', prompt:'Ислам:', type:'single', options:[{id:'a',text:'Пять столпов'},{id:'b',text:'Троица'},{id:'c',text:'Карма'},{id:'d',text:'Дао'}], correct:['a'] },
      { id:'ph25', prompt:'Атеизм:', type:'single', options:[{id:'a',text:'Нет бога'},{id:'b',text:'Агностицизм'},{id:'c',text:'Теизм'},{id:'d',text:'Пантеизм'}], correct:['a'] },
      { id:'ph26', prompt:'Агностицизм:', type:'single', options:[{id:'a',text:'Неизвестно о боге'},{id:'b',text:'Есть бог'},{id:'c',text:'Нет'},{id:'d',text:'Много богов'}], correct:['a'] },
      { id:'ph27', prompt:'Метафизика:', type:'single', options:[{id:'a',text:'За пределами физики'},{id:'b',text:'Физика'},{id:'c',text:'Этика'},{id:'d',text:'Логика'}], correct:['a'] },
      { id:'ph28', prompt:'Эстетика:', type:'single', options:[{id:'a',text:'Изучение красоты'},{id:'b',text:'Мораль'},{id:'c',text:'Знание'},{id:'d',text:'Бытие'}], correct:['a'] },
      { id:'ph29', prompt:'Социальный контракт:', type:'single', options:[{id:'a',text:'Руссо, Гоббс'},{id:'b',text:'Кант'},{id:'c',text:'Ницше'},{id:'d',text:'Сократ'}], correct:['a'] },
      { id:'ph30', prompt:'Философия науки:', type:'single', options:[{id:'a',text:'Поппер, фальсифицируемость'},{id:'b',text:'Этика'},{id:'c',text:'Онтология'},{id:'d',text:'Эстетика'}], correct:['a'] }
    ]
  },

  religion: {
    title: 'Религиоведение',
    questions: [
      { id:'r1', prompt:'Что такое религия?', type:'single', options:[{id:'a',text:'Вера в сверхъестественное'},{id:'b',text:'Наука'},{id:'c',text:'Искусство'},{id:'d',text:'Политика'}], correct:['a'] },
      { id:'r2', prompt:'Христианство:', type:'single', options:[{id:'a',text:'Библия, Иисус'},{id:'b',text:'Коран'},{id:'c',text:'Тора'},{id:'d',text:'Веды'}], correct:['a'] },
      { id:'r3', prompt:'Ислам:', type:'single', options:[{id:'a',text:'Мухаммед, Коран'},{id:'b',text:'Иисус'},{id:'c',text:'Будда'},{id:'d',text:'Кришна'}], correct:['a'] },
      { id:'r4', prompt:'Буддизм:', type:'single', options:[{id:'a',text:'Сиддхартха Гаутама, нирвана'},{id:'b',text:'Мокша'},{id:'c',text:'Рай'},{id:'d',text:'Ад'}], correct:['a'] },
      { id:'r5', prompt:'Индуизм:', type:'single', options:[{id:'a',text:'Брахма, Вишну, Шива'},{id:'b',text:'Троица'},{id:'c',text:'Аллах'},{id:'d',text:'Яхве'}], correct:['a'] },
      { id:'r6', prompt:'Иудаизм:', type:'single', options:[{id:'a',text:'Тора, монотеизм'},{id:'b',text:'Политеизм'},{id:'c',text:'Атеизм'},{id:'d',text:'Пантеизм'}], correct:['a'] },
      { id:'r7', prompt:'Сикхизм:', type:'single', options:[{id:'a',text:'Гуру Нанак, один бог'},{id:'b',text:'Много богов'},{id:'c',text:'Нет бога'},{id:'d',text:'Природа'}], correct:['a'] },
      { id:'r8', prompt:'Даосизм:', type:'single', options:[{id:'a',text:'Лао-цзы, Дао дэ цзин'},{id:'b',text:'Конфуций'},{id:'c',text:'Будда'},{id:'d',text:'Мухаммед'}], correct:['a'] },
      { id:'r9', prompt:'Конфуцианство:', type:'single', options:[{id:'a',text:'Этика, ритуалы'},{id:'b',text:'Медитация'},{id:'c',text:'Молитва'},{id:'d',text:'Жертвоприношения'}], correct:['a'] },
      { id:'r10', prompt:'Шаманизм:', type:'single', options:[{id:'a',text:'Духи, шаманы'},{id:'b',text:'Книги'},{id:'c',text:'Храмы'},{id:'d',text:'Монастыри'}], correct:['a'] },
      { id:'r11', prompt:'Монотеизм:', type:'single', options:[{id:'a',text:'Один бог'},{id:'b',text:'Много'},{id:'c',text:'Нет'},{id:'d',text:'Природа'}], correct:['a'] },
      { id:'r12', prompt:'Политеизм:', type:'single', options:[{id:'a',text:'Много богов'},{id:'b',text:'Один'},{id:'c',text:'Нет'},{id:'d',text:'Анимизм'}], correct:['a'] },
      { id:'r13', prompt:'Атеизм:', type:'single', options:[{id:'a',text:'Нет веры в бога'},{id:'b',text:'Вера'},{id:'c',text:'Агностицизм'},{id:'d',text:'Деизм'}], correct:['a'] },
      { id:'r14', prompt:'Агностицизм:', type:'single', options:[{id:'a',text:'Неизвестно'},{id:'b',text:'Есть'},{id:'c',text:'Нет'},{id:'d',text:'Много'}], correct:['a'] },
      { id:'r15', prompt:'Теизм:', type:'single', options:[{id:'a',text:'Вера в бога'},{id:'b',text:'Нет'},{id:'c',text:'Неизвестно'},{id:'d',text:'Природа'}], correct:['a'] },
      { id:'r16', prompt:'Пантеизм:', type:'single', options:[{id:'a',text:'Бог = природа'},{id:'b',text:'Отдельный бог'},{id:'c',text:'Нет'},{id:'d',text:'Много'}], correct:['a'] },
      { id:'r17', prompt:'Анимизм:', type:'single', options:[{id:'a',text:'Духи в объектах'},{id:'b',text:'Один бог'},{id:'c',text:'Нет'},{id:'d',text:'Книги'}], correct:['a'] },
      { id:'r18', prompt:'Священные тексты ислама:', type:'single', options:[{id:'a',text:'Коран'},{id:'b',text:'Библия'},{id:'c',text:'Тора'},{id:'d',text:'Упанишады'}], correct:['a'] },
      { id:'r19', prompt:'Карма:', type:'single', options:[{id:'a',text:'В индуизме, буддизме'},{id:'b',text:'Грех'},{id:'c',text:'Рай'},{id:'d',text:'Ад'}], correct:['a'] },
      { id:'r20', prompt:'Нирвана:', type:'single', options:[{id:'a',text:'Освобождение от страданий'},{id:'b',text:'Рай'},{id:'c',text:'Ад'},{id:'d',text:'Перерождение'}], correct:['a'] },
      { id:'r21', prompt:'Мессия:', type:'single', options:[{id:'a',text:'В иудаизме, христианстве'},{id:'b',text:'Пророк'},{id:'c',text:'Будда'},{id:'d',text:'Гуру'}], correct:['a'] },
      { id:'r22', prompt:'Пророк:', type:'single', options:[{id:'a',text:'Мухаммед в исламе'},{id:'b',text:'Иисус'},{id:'c',text:'Моисей'},{id:'d',text:'Все'}], correct:['d'] },
      { id:'r23', prompt:'Молитва:', type:'single', options:[{id:'a',text:'Общение с богом'},{id:'b',text:'Медитация'},{id:'c',text:'Ритуал'},{id:'d',text:'Жертва'}], correct:['a'] },
      { id:'r24', prompt:'Паломничество:', type:'single', options:[{id:'a',text:'Хадж в исламе'},{id:'b',text:'Крестный ход'},{id:'c',text:'Йога'},{id:'d',text:'Пост'}], correct:['a'] },
      { id:'r25', prompt:'Пост:', type:'single', options:[{id:'a',text:'Рамадан'},{id:'b',text:'Пасха'},{id:'c',text:'Дивали'},{id:'d',text:'Ханука'}], correct:['a'] },
      { id:'r26', prompt:'Праздник:', type:'single', options:[{id:'a',text:'Рождество в христианстве'},{id:'b',text:'Ид'},{id:'c',text:'Дивали'},{id:'d',text:'Все'}], correct:['d'] },
      { id:'r27', prompt:'Секта:', type:'single', options:[{id:'a',text:'Маленькая группа в религии'},{id:'b',text:'Основная'},{id:'c',text:'Новая религия'},{id:'d',text:'Нет'}], correct:['a'] },
      { id:'r28', prompt:'Миф:', type:'single', options:[{id:'a',text:'Священная история'},{id:'b',text:'Факт'},{id:'c',text:'Наука'},{id:'d',text:'Философия'}], correct:['a'] },
      { id:'r29', prompt:'Ритуал:', type:'single', options:[{id:'a',text:'Повторяющееся действие'},{id:'b',text:'Молитва'},{id:'c',text:'Пост'},{id:'d',text:'Все'}], correct:['a'] },
      { id:'r30', prompt:'Секуляризм:', type:'single', options:[{id:'a',text:'Отделение религии от государства'},{id:'b',text:'Теократия'},{id:'c',text:'Атеизм'},{id:'d',text:'Вера'}], correct:['a'] }
    ]
  }
};

/* ===================================
   WRITTEN_TEST_BANK - ПИСЬМЕННЫЕ ВОПРОСЫ (5 на предмет)
   Формат:
   WRITTEN_TEST_BANK[subjectKey] = { title, questions: [{ id, prompt, type:'text' }] }
   =================================== */
const WRITTEN_TEST_BANK = {
  physics: {
    title: 'Физика — письменные вопросы',
    questions: [
      { id: 'pw1', type: 'text', prompt: 'Сформулируйте закон Ома и приведите пример его применения на бытовом устройстве.' },
      { id: 'pw2', type: 'text', prompt: 'Объясните разницу между силой и энергией (кратко, своими словами).' },
      { id: 'pw3', type: 'text', prompt: 'Опишите, что показывает второй закон Ньютона, и приведите пример из жизни.' },
      { id: 'pw4', type: 'text', prompt: 'Что такое интерференция и где она встречается?' },
      { id: 'pw5', type: 'text', prompt: 'Какие факторы влияют на сопротивление проводника? Перечислите и поясните.' }
    ]
  },
  lang: {
    title: 'Иностранный язык — письменные вопросы',
    questions: [
      { id: 'lw1', type: 'text', prompt: 'Write 3–5 sentences about your daily routine using Present Simple.' },
      { id: 'lw2', type: 'text', prompt: 'Explain the difference between “few” and “a few” and give one example for each.' },
      { id: 'lw3', type: 'text', prompt: 'Make one question and one negative sentence in Past Simple (any topic).' },
      { id: 'lw4', type: 'text', prompt: 'Write a short formal email (4–6 sentences) asking a teacher for an appointment.' },
      { id: 'lw5', type: 'text', prompt: 'Define the word “procrastination” in your own words and give one tip to avoid it.' }
    ]
  },
  writing: {
    title: 'Академическое письмо — письменные вопросы',
    questions: [
      { id: 'ww1', type: 'text', prompt: 'Напишите тезис (thesis statement) для эссе на тему: «Онлайн-обучение эффективнее офлайн-обучения».' },
      { id: 'ww2', type: 'text', prompt: 'Составьте план эссе (outline) из 5–7 пунктов на любую академическую тему.' },
      { id: 'ww3', type: 'text', prompt: 'Перефразируйте предложение (paraphrase): «Students learn better when they practice regularly.»' },
      { id: 'ww4', type: 'text', prompt: 'Напишите 3 transition words/phrases и приведите по одному примеру предложения с каждым.' },
      { id: 'ww5', type: 'text', prompt: 'Кратко объясните, что такое плагиат и как его избежать в учебной работе.' }
    ]
  },
  coding: {
    title: 'Программирование — письменные вопросы',
    questions: [
      { id: 'cw1', type: 'text', prompt: 'Объясните, что такое переменная и чем отличается объявление от присваивания.' },
      { id: 'cw2', type: 'text', prompt: 'Опишите разницу между массивом/списком и объектом/словарём. Приведите пример использования каждого.' },
      { id: 'cw3', type: 'text', prompt: 'Что такое функция? Опишите 2 преимущества использования функций в коде.' },
      { id: 'cw4', type: 'text', prompt: 'Поясните, что такое “ошибка” (exception) и приведите пример, когда она может возникнуть.' },
      { id: 'cw5', type: 'text', prompt: 'Кратко объясните, что такое API и зачем оно нужно.' }
    ]
  },
  history: {
    title: 'Новейшая история Узбекистана — письменные вопросы',
    questions: [
      { id: 'hw1', type: 'text', prompt: 'Назовите ключевые события, связанные с независимостью Узбекистана (2–4 пункта).' },
      { id: 'hw2', type: 'text', prompt: 'Кратко опишите роль Конституции 1992 года для государства.' },
      { id: 'hw3', type: 'text', prompt: 'Какие направления реформ в «Новом Узбекистане» вы считаете наиболее важными? Почему?' },
      { id: 'hw4', type: 'text', prompt: 'Опишите одну социально-экономическую проблему региона (на ваш выбор) и возможные пути решения.' },
      { id: 'hw5', type: 'text', prompt: 'Кратко объясните, почему экологическая проблема Аральского моря важна для страны.' }
    ]
  },
  algebra: {
    title: 'Линейная алгебра — письменные вопросы',
    questions: [
      { id: 'aw1', type: 'text', prompt: 'Дайте определение матрицы и перечислите 2 области применения матриц.' },
      { id: 'aw2', type: 'text', prompt: 'Объясните, что означает A · A^{-1} = I. Когда обратимая матрица существует?' },
      { id: 'aw3', type: 'text', prompt: 'Что такое ранг матрицы и что он показывает?' },
      { id: 'aw4', type: 'text', prompt: 'Опишите своими словами, что такое собственные значения/собственные векторы и зачем они нужны.' },
      { id: 'aw5', type: 'text', prompt: 'Кратко опишите алгоритм метода Гаусса для решения системы линейных уравнений.' }
    ]
  },
  database: {
    title: 'База данных — письменные вопросы',
    questions: [
      { id: 'dbw1', type: 'text', prompt: 'Объясните разницу между PRIMARY KEY и FOREIGN KEY. Приведите пример.' },
      { id: 'dbw2', type: 'text', prompt: 'Что такое нормализация? Назовите цель и один пример, что она улучшает.' },
      { id: 'dbw3', type: 'text', prompt: 'Опишите, что такое JOIN и в каких случаях он нужен.' },
      { id: 'dbw4', type: 'text', prompt: 'Сформулируйте, что такое транзакция и зачем нужны свойства ACID.' },
      { id: 'dbw5', type: 'text', prompt: 'Объясните, что такое индекс и какие есть плюсы/минусы его использования.' }
    ]
  },
  network: {
    title: 'Компьютерные сети — письменные вопросы',
    questions: [
      { id: 'nw1', type: 'text', prompt: 'Опишите разницу между TCP и UDP и приведите пример, где подходит каждый.' },
      { id: 'nw2', type: 'text', prompt: 'Что такое DNS и как он помогает открыть сайт по доменному имени?' },
      { id: 'nw3', type: 'text', prompt: 'Кратко опишите назначение маршрутизатора (router) и коммутатора (switch).' },
      { id: 'nw4', type: 'text', prompt: 'Что такое HTTPS и чем он отличается от HTTP?' },
      { id: 'nw5', type: 'text', prompt: 'Объясните, что такое NAT и зачем он используется в домашних сетях.' }
    ]
  },
  discrete: {
    title: 'Дискретные структуры — письменные вопросы',
    questions: [
      { id: 'dw1', type: 'text', prompt: 'Опишите, что такое граф, вершины и рёбра. Приведите пример реального графа.' },
      { id: 'dw2', type: 'text', prompt: 'Что такое дерево и чем оно отличается от произвольного графа?' },
      { id: 'dw3', type: 'text', prompt: 'Сформулируйте принцип Дирихле (pigeonhole) и приведите пример.' },
      { id: 'dw4', type: 'text', prompt: 'Объясните, что такое математическая индукция и как выглядит её структура.' },
      { id: 'dw5', type: 'text', prompt: 'Кратко опишите разницу между эйлеровым путём и гамильтоновым циклом.' }
    ]
  },
  electronics: {
    title: 'Электроника и схемы — письменные вопросы',
    questions: [
      { id: 'elw1', type: 'text', prompt: 'Объясните назначение резистора и конденсатора и приведите пример схемы, где они используются.' },
      { id: 'elw2', type: 'text', prompt: 'Что такое диод и как он работает? Где его применяют?' },
      { id: 'elw3', type: 'text', prompt: 'Кратко опишите, что делает транзистор и почему он важен в электронике.' },
      { id: 'elw4', type: 'text', prompt: 'Сформулируйте закон Кирхгофа для токов (KCL) и объясните его смысл.' },
      { id: 'elw5', type: 'text', prompt: 'Что такое печатная плата (PCB) и какие задачи она решает?' }
    ]
  },
  philosophy: {
    title: 'Философия — письменные вопросы',
    questions: [
      { id: 'phw1', type: 'text', prompt: 'Определите, что такое философия, и назовите 2 её ключевых вопроса.' },
      { id: 'phw2', type: 'text', prompt: 'Кратко объясните различие между этикой и онтологией.' },
      { id: 'phw3', type: 'text', prompt: 'Как вы понимаете фразу Декарта «Cogito, ergo sum»? (2–4 предложения)' },
      { id: 'phw4', type: 'text', prompt: 'Опишите одну идею Канта (например, категорический императив) своими словами.' },
      { id: 'phw5', type: 'text', prompt: 'Что такое постмодернизм? Назовите одну характерную черту.' }
    ]
  },
  religion: {
    title: 'Религиоведение — письменные вопросы',
    questions: [
      { id: 'rw1', type: 'text', prompt: 'Дайте определение религии и назовите 2 её социальные функции.' },
      { id: 'rw2', type: 'text', prompt: 'Кратко объясните разницу между монотеизмом и политеизмом. Приведите примеры.' },
      { id: 'rw3', type: 'text', prompt: 'Что такое секуляризм и как он влияет на общество и государство?' },
      { id: 'rw4', type: 'text', prompt: 'Опишите, что такое религиозный ритуал, и приведите один пример.' },
      { id: 'rw5', type: 'text', prompt: 'Как вы понимаете понятие «священный текст»? Приведите 2 примера.' }
    ]
  }
};

