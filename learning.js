/* ===================================
LEARNING.JS - ПОЛНАЯ ВЕРСИЯ
ВСЕ 12 ПРЕДМЕТОВ С ДЕТАЛЬНЫМ КОНТЕНТОМ
Дата: 2026
=================================== */
const learningMaterials = {

/* ===================================
1. ФИЗИКА
=================================== */
physics: {
intro: "От базовой механики к пониманию квантовых процессов. Физика объясняет фундаментальные законы Вселенной — от движения планет до работы вашего смартфона.",
founder: "Великие умы: Архимед, Галилео Галилей, Исаак Ньютон, Майкл Фарадей, Джеймс Максвелл, Альберт Эйнштейн, Нильс Бор.",
topics: [
{
title: "1. Введение в физику",
icon: "fa-ruler",
subtopics: [
{
title: "Единицы измерения СИ",
content: "Международная система единиц (СИ) включает 7 основных единиц: метр (длина), килограмм (масса), секунда (время), ампер (ток), кельвин (температура), моль (количество вещества), кандела (сила света).",
example: "Пример: Скорость измеряется в м/с, сила — в ньютонах (Н), энергия — в джоулях (Дж).",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Система СИ — стандарт измерений"
},
{
title: "Векторы и скаляры",
content: "Скаляры имеют только величину (масса, время, температура). Векторы имеют величину и направление (скорость, сила, ускорение).",
example: "Пример: 5 кг — скаляр. 5 м/с на север — вектор.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Векторы имеют направление"
},
{
title: "Погрешности измерений",
content: "Абсолютная погрешность — разница между измеренным и истинным значением. Относительная погрешность — отношение абсолютной к истинному значению.",
example: "Пример: Измерение 10.5 ± 0.1 см означает, что истинное значение между 10.4 и 10.6 см.",
image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
imageCaption: "Точность измерений важна"
}
]
},
{
title: "2. Кинематика",
icon: "fa-running",
subtopics: [
{
title: "Прямолинейное движение",
content: "Равномерное: v = s/t. Равноускоренное: v = v₀ + at, s = v₀t + at²/2.",
example: "Пример: Автомобиль разгоняется с 0 до 20 м/с за 10 с. Ускорение a = 20/10 = 2 м/с².",
image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
imageCaption: "Равноускоренное движение"
},
{
title: "Криволинейное движение",
content: "Движение по окружности: центростремительное ускорение a = v²/R. Угловая скорость ω = v/R.",
example: "Пример: Спутник на орбите движется с постоянной скоростью, но меняет направление — есть ускорение.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Движение по орбите"
}
]
},
{
title: "3. Динамика",
icon: "fa-bolt",
subtopics: [
{
title: "Законы Ньютона",
content: "I закон: тело сохраняет состояние покоя или движения. II закон: F = ma. III закон: действие равно противодействию.",
example: "Пример: Чтобы разогнать массу 1000 кг с ускорением 2 м/с², нужна сила F = 2000 Н.",
image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
imageCaption: "Законы Ньютона"
},
{
title: "Сила трения и гравитация",
content: "Трение: F = μN. Гравитация: F = G·m₁·m₂/r². Вес: P = mg.",
example: "Пример: На Земле g ≈ 9.8 м/с². Человек 70 кг весит 686 Н.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Гравитация действует везде"
}
]
},
{
title: "4. Работа и энергия",
icon: "fa-battery-full",
subtopics: [
{
title: "Механическая работа",
content: "A = F·s·cosα. Мощность: P = A/t.",
example: "Пример: Поднять груз 10 кг на 2 м: A = mgh = 10·9.8·2 = 196 Дж.",
image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
imageCaption: "Работа и энергия"
},
{
title: "Закон сохранения энергии",
content: "Eₖ + Eₚ = const в замкнутой системе. Eₖ = mv²/2, Eₚ = mgh.",
example: "Пример: Маятник: в верхней точке максимум Eₚ, в нижней — максимум Eₖ.",
image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
imageCaption: "Энергия сохраняется"
}
]
},
{
title: "5. Импульс и столкновения",
icon: "fa-exchange-alt",
subtopics: [
{
title: "Закон сохранения импульса",
content: "Импульс: p = mv. В замкнутой системе суммарный импульс сохраняется.",
example: "Пример: При столкновении двух шаров их суммарный импульс до и после одинаков.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Сохранение импульса"
},
{
title: "Упругие и неупругие столкновения",
content: "Упругие: сохраняется энергия и импульс. Неупругие: только импульс, энергия переходит в тепло.",
example: "Пример: Бильярдные шары — упругое столкновение. Пластилин — неупругое.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Типы столкновений"
}
]
},
{
title: "6. Вращательное движение",
icon: "fa-sync",
subtopics: [
{
title: "Момент силы и момент импульса",
content: "Момент силы: M = F·r. Момент импульса: L = I·ω. Закон сохранения момента импульса.",
example: "Пример: Фигурист прижимает руки — вращается быстрее (момент инерции уменьшается).",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Вращательное движение"
}
]
},
{
title: "7. Статика и равновесие",
icon: "fa-balance-scale",
subtopics: [
{
title: "Условия равновесия",
content: "Сумма сил = 0, сумма моментов = 0. Центр масс и устойчивость.",
example: "Пример: Мост находится в равновесии, когда все силы скомпенсированы.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Статическое равновесие"
}
]
},
{
title: "8. Механика жидкостей и газов",
icon: "fa-tint",
subtopics: [
{
title: "Гидростатика и закон Архимеда",
content: "Давление в жидкости: P = ρgh. Сила Архимеда: F = ρ·g·V.",
example: "Пример: Корабль плавает, потому что сила Архимеда равна весу судна.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Закон Архимеда"
},
{
title: "Гидродинамика и уравнение Бернулли",
content: "P + ρgh + ρv²/2 = const. Давление уменьшается там, где скорость потока больше.",
example: "Пример: Крыло самолёта: сверху скорость больше → давление меньше → подъёмная сила.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Уравнение Бернулли"
}
]
},
{
title: "9. Колебания и волны",
icon: "fa-wave-square",
subtopics: [
{
title: "Механические колебания",
content: "Математический маятник: T = 2π√(L/g). Пружинный маятник: T = 2π√(m/k). Резонанс.",
example: "Пример: Качели раскачиваются сильнее при совпадении частоты толчков с собственной частотой.",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Колебания маятника"
},
{
title: "Волны и акустика",
content: "Звук — механическая волна. Скорость звука в воздухе ≈ 340 м/с. Эффект Доплера.",
example: "Пример: Сирена машины меняет тон при приближении и удалении (эффект Доплера).",
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
imageCaption: "Звуковые волны"
}
]
},
{
title: "10. Молекулярная физика и термодинамика",
icon: "fa-thermometer-half",
subtopics: [
{
title: "МКТ и идеальный газ",
content: "Уравнение состояния: PV = nRT. Основное уравнение МКТ: P = nm₀v²/3.",
example: "Пример: При нагреве газа в закрытом сосуде давление растёт.",
image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
imageCaption: "Молекулярно-кинетическая теория"
},
{
title: "Законы термодинамики",
content: "I закон: ΔU = Q - A. II закон: энтропия замкнутой системы возрастает. КПД тепловых двигателей.",
example: "Пример: Тепловой двигатель не может иметь КПД 100%.",
image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
imageCaption: "Термодинамика"
}
]
},
{
title: "11. Электричество и магнетизм",
icon: "fa-magnet",
subtopics: [
{
title: "Электростатика",
content: "Закон Кулона: F = k·q₁·q₂/r². Напряжённость: E = F/q. Потенциал: φ = W/q.",
example: "Пример: Два заряда 1 мКл на расстоянии 1 м отталкиваются с силой 9000 Н.",
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
imageCaption: "Электрическое поле"
},
{
title: "Постоянный ток",
content: "Закон Ома: I = U/R. Правила Кирхгофа для сложных цепей. Мощность: P = UI.",
example: "Пример: Лампа 100 Ом при 220 В: I = 2.2 А, P = 484 Вт.",
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
imageCaption: "Закон Ома"
},
{
title: "Магнетизм",
content: "Магнитное поле токов. Сила Лоренца: F = qvB·sinα. Сила Ампера: F = BIL·sinα.",
example: "Пример: Электродвигатель работает на основе силы Ампера.",
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
imageCaption: "Магнитное поле"
},
{
title: "Электромагнитная индукция",
content: "Закон Фарадея: ε = -ΔΦ/Δt. Правило Ленца: индукционный ток противодействует изменению потока.",
example: "Пример: Генератор превращает механическую энергию в электрическую.",
image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
imageCaption: "Электромагнитная индукция"
}
]
},
{
title: "12. Оптика и квантовая физика",
icon: "fa-atom",
subtopics: [
{
title: "Волновая оптика",
content: "Интерференция, дифракция, поляризация света. Закон преломления: n₁·sinα = n₂·sinβ.",
example: "Пример: Радуга — результат дисперсии света в каплях воды.",
image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
imageCaption: "Оптические явления"
},
{
title: "Квантовая механика",
content: "Квант энергии: E = hν. Фотоэффект. Строение атома: ядро + электроны на орбиталях.",
example: "Пример: Солнечные батареи работают на основе фотоэффекта.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Квантовый мир"
}
]
}
]
},

/* ===================================
2. ИНОСТРАННЫЙ ЯЗЫК (АНГЛИЙСКИЙ)
=================================== */
lang: {
intro: "От алфавита до свободного аргументирования. Английский — язык международного общения, науки и технологий.",
founder: "Современные методы: Стивен Крашен (теория ввода), Бенни Льюис (полиглот), Габриэль Вайнер (карточки).",
topics: [
{
title: "1. Введение",
icon: "fa-font",
subtopics: [
{
title: "Алфавит и фонетика",
content: "26 букв, 44 звука. Транскрипция IPA. Правила чтения: open/closed syllable.",
example: "Пример: 'a' в 'name' [eɪ], в 'cat' [æ], в 'father' [ɑː].",
image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
imageCaption: "Английский алфавит"
},
{
title: "Базовые формулы приветствия",
content: "Hello, Hi, Good morning/afternoon/evening. How are you? I'm fine, thanks.",
example: "Пример: 'Nice to meet you' — 'Nice to meet you too'.",
image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
imageCaption: "Приветствия"
}
]
},
{
title: "2. Грамматика: основы",
icon: "fa-book",
subtopics: [
{
title: "Глагол to be",
content: "I am, you/we/they are, he/she/it is. Отрицание: am not, isn't, aren't.",
example: "Пример: 'I am a student'. 'She is a doctor'. 'They are friends'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Глагол to be"
},
{
title: "Местоимения",
content: "Личные: I, you, he, she, it, we, they. Притяжательные: my, your, his, her, its, our, their.",
example: "Пример: 'This is my book'. 'That is her car'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Местоимения"
},
{
title: "Существительные и артикли",
content: "a/an — неопределённый, the — определённый. Множественное число: +s, +es, irregular (child→children).",
example: "Пример: 'a cat', 'an apple', 'the sun', 'children', 'mice'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Артикли"
}
]
},
{
title: "3. Времена: Настоящее",
icon: "fa-clock",
subtopics: [
{
title: "Present Simple",
content: "Регулярные действия, факты. I/you/we/they + V₁, he/she/it + V₁+s.",
example: "Пример: 'I work every day'. 'She works at Google'. 'Water boils at 100°C'.",
image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
imageCaption: "Present Simple"
},
{
title: "Present Continuous",
content: "Действие сейчас. am/is/are + V-ing.",
example: "Пример: 'I am studying now'. 'She is reading a book'.",
image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
imageCaption: "Present Continuous"
}
]
},
{
title: "4. Времена: Прошедшее и Будущее",
icon: "fa-hourglass-half",
subtopics: [
{
title: "Past Simple",
content: "Завершённые действия в прошлом. V₂ (правильные: +ed, неправильные: таблица).",
example: "Пример: 'I worked yesterday'. 'She went to London last year'.",
image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
imageCaption: "Past Simple"
},
{
title: "Future Simple",
content: "will + V₁. 'be going to' для планов.",
example: "Пример: 'I will call you'. 'I am going to study tomorrow'.",
image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
imageCaption: "Future Simple"
},
{
title: "Present Perfect",
content: "have/has + V₃. Опыт, результат к настоящему моменту.",
example: "Пример: 'I have visited Paris'. 'She has finished her work'.",
image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
imageCaption: "Present Perfect"
}
]
},
{
title: "5. Модальные глаголы и условия",
icon: "fa-exchange-alt",
subtopics: [
{
title: "Модальные глаголы",
content: "can (способность), must (обязанность), should (совет), may (разрешение).",
example: "Пример: 'I can swim'. 'You must study'. 'You should rest'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Модальные глаголы"
},
{
title: "Условные предложения",
content: "0 тип: факт (If you heat ice, it melts). 1 тип: реально (If it rains, I will stay). 2 тип: нереально сейчас (If I were rich, I would travel). 3 тип: нереально в прошлом (If I had studied, I would have passed).",
example: "Пример: 'If I had time, I would help you'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Conditionals"
}
]
},
{
title: "6. Продвинутая грамматика",
icon: "fa-graduation-cap",
subtopics: [
{
title: "Passive Voice",
content: "be + V₃. Акцент на действии, а не исполнителе.",
example: "Пример: 'The book was written by Tolstoy'. 'The house is being built'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Passive Voice"
},
{
title: "Reported Speech",
content: "Согласование времён: Present→Past, will→would, can→could.",
example: "Пример: He said: 'I am tired' → He said that he was tired.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Косвенная речь"
},
{
title: "Герундий и инфинитив",
content: "Герундий (V-ing) как существительное. Инфинитив (to V) для цели. Фразовые глаголы.",
example: "Пример: 'I enjoy reading' (герундий). 'I want to study' (инфинитив).",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Герундий vs Инфинитив"
}
]
}
]
},

/* ===================================
3. АКАДЕМИЧЕСКОЕ ПИСЬМО
=================================== */
writing: {
intro: "От идеи до готовой научной статьи. Навык чёткого, логичного и убедительного изложения мыслей.",
founder: "Стандарты: MLA, APA, Harvard. Организации: Purdue OWL, университетские writing centers.",
topics: [
{
title: "1. Введение в академическое письмо",
icon: "fa-file-alt",
subtopics: [
{
title: "Отличия от других стилей",
content: "Формальность, объективность, точность, логичность, отсутствие эмоций. Избегать: сленга, сокращений, местоимения 'я'.",
example: "Плохо: 'Я думаю, это круто'. Хорошо: 'Данные свидетельствуют о значительном улучшении'.",
image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
imageCaption: "Академический стиль"
},
{
title: "Целевая аудитория",
content: "Определите: кто читатель? какой уровень знаний? какая цель текста?",
example: "Пример: Статья для журнала vs. курсовая для преподавателя.",
image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
imageCaption: "Аудитория важна"
}
]
},
{
title: "2. Процесс написания",
icon: "fa-brain",
subtopics: [
{
title: "Brainstorming и майндмэппинг",
content: "Генерация идей без критики. Визуальная карта связей между концепциями.",
example: "Пример: Центр: 'Изменение климата'. Ветви: причины, последствия, решения.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Майндмэппинг"
},
{
title: "Фрирайтинг",
content: "Непрерывное письмо 10-15 минут без остановки и редактирования.",
example: "Пример: Пишите всё, что приходит в голову по теме, потом выделяйте главное.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Фрирайтинг"
}
]
},
{
title: "3. Структура эссе",
icon: "fa-layer-group",
subtopics: [
{
title: "Введение",
content: "1) Представить тему. 2) Обосновать актуальность. 3) Сформулировать тезис. 4) Описать структуру. Объём: 10-15%.",
example: "Пример: 'Глобальное потепление — угроза XXI века. Цель работы — проанализировать последствия'.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Введение"
},
{
title: "Основная часть",
content: "3-5 абзацев. Каждый: Topic sentence + evidence + analysis + concluding sentence.",
example: "Пример: Абзац 1: причины. Абзац 2: последствия. Абзац 3: решения.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Основная часть"
},
{
title: "Заключение",
content: "1) Переформулировать тезис. 2) Обобщить аргументы. 3) Значение работы. Без новой информации.",
example: "Пример: 'Таким образом, необходимы срочные меры для снижения выбросов'.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Заключение"
}
]
},
{
title: "4. Тезис и абзац",
icon: "fa-align-left",
subtopics: [
{
title: "Thesis Statement",
content: "Одно предложение, выражающее главную идею. Конкретное, аргументируемое, значимое.",
example: "Плохо: 'Загрязнение — это плохо'. Хорошо: 'Промышленные выбросы требуют регулирования для защиты здоровья'.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Тезис"
},
{
title: "Структура абзаца",
content: "Topic sentence (главная мысль) → Supporting evidence (доказательства) → Concluding sentence (вывод).",
example: "Пример: 'Исследования показывают...' → данные → 'Следовательно...'",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Абзац"
}
]
},
{
title: "5. Связность и типы эссе",
icon: "fa-link",
subtopics: [
{
title: "Cohesion and Coherence",
content: "Вводные слова: however, therefore, furthermore, in contrast, consequently.",
example: "Пример: 'Исследования подтверждают это. Однако есть альтернативные взгляды.'",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Связность"
},
{
title: "Типы эссе",
content: "Compare and Contrast, Cause and Effect, Argumentative.",
example: "Пример: Argumentative: тезис → аргументы → контраргументы → опровержение → вывод.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Типы эссе"
}
]
},
{
title: "6. Источники и цитирование",
icon: "fa-quote-right",
subtopics: [
{
title: "Поиск источников",
content: "Google Scholar, PubMed, JSTOR, CyberLeninka, eLIBRARY. Оценка: авторитетность, актуальность, объективность.",
example: "Пример: Рецензируемые журналы надёжнее блогов.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Источники"
},
{
title: "Цитирование: APA, MLA, Harvard",
content: "APA: (Author, Year). MLA: (Author Page). Harvard: (Author Year: Page).",
example: "Пример APA: 'Смит (2020) утверждает...' или '(Смит, 2020)'.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Цитирование"
},
{
title: "Плагиат",
content: "Копирование без указания источника. Избегайте: парафраз + цитата + библиография.",
example: "Пример: Используйте антиплагиат перед сдачей.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Антиплагиат"
}
]
},
{
title: "7. Продвинутые техники",
icon: "fa-pen-fancy",
subtopics: [
{
title: "Literature Review",
content: "Обзор литературы: анализ существующих исследований по теме. Выявление пробелов в знаниях.",
example: "Пример: 'Иванов (2019) изучал X, Петров (2020) расширил исследование...'",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Обзор литературы"
},
{
title: "Abstract",
content: "Аннотация: краткое содержание работы (150-250 слов). Цель, методы, результаты, выводы.",
example: "Пример: 'В данной работе исследуется... Использованы методы... Получены результаты...'",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Аннотация"
}
]
},
{
title: "8. Редактирование",
icon: "fa-edit",
subtopics: [
{
title: "Саморедактирование",
content: "Проверка: логика, структура, стиль, аргументы. Отложите текст на 1-2 дня перед проверкой.",
example: "Пример: Читайте вслух для выявления awkward phrasing.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Редактирование"
},
{
title: "Корректура",
content: "Грамматика, пунктуация, орфография, форматирование.",
example: "Пример: Используйте Grammarly, но не доверяйте полностью.",
image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
imageCaption: "Корректура"
}
]
}
]
},

/* ===================================
4. ПРОГРАММИРОВАНИЕ
=================================== */
coding: {
intro: "От алгоритмического мышления до объектно-ориентированной парадигмы. Универсальный базовый курс.",
founder: "Пионеры: Ада Лавлейс, Алан Тьюринг, Грейс Хоппер. Языки: Python, Java, C++, JavaScript.",
topics: [
{
title: "1. Введение",
icon: "fa-code",
subtopics: [
{
title: "Что такое программирование",
content: "Написание инструкций для компьютера. Алгоритм — последовательность шагов. Программа = алгоритм на языке программирования.",
example: "Пример: Алгоритм 'Приготовить чай': 1) Вскипятить воду. 2) Положить чай. 3) Залить кипятком.",
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
imageCaption: "Программирование"
},
{
title: "Настройка среды",
content: "IDE: VS Code, PyCharm, IntelliJ. Компиляция vs интерпретация. Hello, World!",
example: "Пример Python: print('Hello, World!')",
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
imageCaption: "IDE"
}
]
},
{
title: "2. Переменные и типы данных",
icon: "fa-database",
subtopics: [
{
title: "Переменные",
content: "Именованное место в памяти. Синтаксис: name = value. Регистрозависимость.",
example: "Пример: age = 25, name = 'Anna', is_student = True",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Переменные"
},
{
title: "Типы данных",
content: "int, float, str, bool, list, dict, tuple, set.",
example: "Пример: x = 10 (int), y = 3.14 (float), s = 'text' (str)",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Типы данных"
}
]
},
{
title: "3. Операторы и ввод/вывод",
icon: "fa-calculator",
subtopics: [
{
title: "Арифметические и логические",
content: "+, -, *, /, //, %, **. Логические: and, or, not. Сравнения: ==, !=, <, >, <=, >=",
example: "Пример: 10 // 3 = 3, 10 % 3 = 1, 2 ** 3 = 8",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Операторы"
},
{
title: "Ввод и вывод",
content: "print() — вывод. input() — ввод (всегда строка!). Преобразование: int(), float().",
example: "Пример: age = int(input('Возраст: '))",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Ввод/вывод"
}
]
},
{
title: "4. Управляющие конструкции",
icon: "fa-code-branch",
subtopics: [
{
title: "if-else и match",
content: "if условие: блок. elif — иначе если. else — иначе. match-case (Python 3.10+).",
example: "Пример: if age >= 18: print('Взрослый') else: print('Несовершеннолетний')",
image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&q=80",
imageCaption: "Условия"
},
{
title: "Циклы",
content: "while (предусловие), do-while (постусловие), for (счётчик). break, continue.",
example: "Пример: for i in range(5): print(i) # 0,1,2,3,4",
image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&q=80",
imageCaption: "Циклы"
}
]
},
{
title: "5. Массивы и структуры",
icon: "fa-list",
subtopics: [
{
title: "Одномерные массивы",
content: "Списки: [1, 2, 3]. Индексация с 0. Методы: append, insert, remove, pop, sort.",
example: "Пример: nums = [10, 20, 30]; nums.append(40); print(nums[0]) # 10",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Списки"
},
{
title: "Многомерные массивы",
content: "Матрицы: [[1,2],[3,4]]. Вложенные циклы для перебора.",
example: "Пример: matrix = [[1,2,3],[4,5,6]]; print(matrix[1][2]) # 6",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Матрицы"
},
{
title: "Словари и множества",
content: "Dict: {'key': 'value'}. Set: {1, 2, 3} — уникальные элементы.",
example: "Пример: student = {'name': 'Anna', 'age': 20}; print(student['name'])",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Словари"
}
]
},
{
title: "6. Функции",
icon: "fa-function",
subtopics: [
{
title: "Объявление и вызов",
content: "def name(params): return value. Параметры по умолчанию.",
example: "Пример: def add(a, b): return a + b; result = add(5, 3) # 8",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Функции"
},
{
title: "Область видимости и рекурсия",
content: "Локальные (внутри функции) и глобальные (везде). Рекурсия — функция вызывает себя.",
example: "Пример: def factorial(n): return 1 if n<=1 else n*factorial(n-1)",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Рекурсия"
}
]
},
{
title: "7. Строки и файлы",
icon: "fa-file",
subtopics: [
{
title: "Обработка строк",
content: "Методы: upper, lower, split, join, replace, find, strip.",
example: "Пример: 'Hello'.upper() → 'HELLO'. 'a,b,c'.split(',') → ['a','b','c']",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Строки"
},
{
title: "Работа с файлами",
content: "open('file.txt', 'r/w/a'). with для автозакрытия. read, write, readline.",
example: "Пример: with open('data.txt', 'w') as f: f.write('Hello')",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Файлы"
}
]
},
{
title: "8. Исключения и ООП",
icon: "fa-object-group",
subtopics: [
{
title: "Обработка исключений",
content: "try-except-else-finally. Защита от сбоев.",
example: "Пример: try: x = 1/0 except ZeroDivisionError: print('Ошибка!')",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "Исключения"
},
{
title: "Основы ООП",
content: "Класс, объект, инкапсуляция, наследование, полиморфизм. __init__, self.",
example: "Пример: class Student: def __init__(self, name): self.name = name",
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
imageCaption: "ООП"
}
]
}
]
},

/* ===================================
5. НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА
=================================== */
history: {
intro: "От конца XIX века до современных реформ. Путь от колониального периода к независимому государству.",
founder: "Ключевые фигуры: Джадиды, Ислам Каримов, Шавкат Мирзиёев.",
topics: [
{
title: "1. Колониальный период",
icon: "fa-flag",
subtopics: [
{
title: "Узбекистан в конце XIX – начале XX века",
content: "Вхождение в состав Российской империи. Строительство железных дорог. Развитие хлопководства.",
example: "Пример: Ташкент стал административным центром Туркестанского генерал-губернаторства.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Колониальный период"
},
{
title: "Движение джадидов",
content: "Просветительское движение. Лидеры: Фитрат, Чолпан, Абдулла Авлони. Реформа образования, национальное пробуждение.",
example: "Пример: Открытие новых школ (усул-и джадид) вместо традиционных медресе.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Джадиды"
}
]
},
{
title: "2. Советский период",
icon: "fa-star",
subtopics: [
{
title: "1917 год и Туркестанская автономия",
content: "Революция, попытка создания автономии, установление советской власти.",
example: "Пример: Кокандская автономия (ноябрь 1917 — февраль 1918).",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "1917 год"
},
{
title: "Образование УзССР (1924)",
content: "Национально-территориальное размежевание. Столица: Самарканд (1925), Ташкент (1930).",
example: "Пример: 27 октября 1924 — дата образования Узбекской ССР.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "УзССР"
},
{
title: "Индустриализация и коллективизация",
content: "1920-1930-е: строительство заводов, коллективные хозяйства. Хлопковая специализация.",
example: "Пример: Чирчикский электрохимический комбинат, Ферганский канал.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Индустриализация"
},
{
title: "Репрессии 1930-х",
content: "Политические репрессии. Трагедия национальной интеллигенции. Фитрат, Чолпан, Усман Юсупов.",
example: "Пример: 1937-1938 — пик репрессий в Узбекистане.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Репрессии"
}
]
},
{
title: "3. Вторая мировая война",
icon: "fa-medal",
subtopics: [
{
title: "Вклад в победу",
content: "450+ тысяч узбекистанцев на фронте. 120+ Героев Советского Союза. Эвакуация заводов.",
example: "Пример: Гани Мелибаев, Тулаган Матниязов — герои войны.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Великая Отечественная"
}
]
},
{
title: "4. Послевоенное развитие",
icon: "fa-chart-line",
subtopics: [
{
title: "1945-1960-е годы",
content: "Восстановление экономики. Развитие образования, науки, культуры.",
example: "Пример: Открытие Академии наук УзССР (1943).",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Послевоенный период"
},
{
title: "Эпоха Рашидова (1959-1983)",
content: "Достижения: орошение, хлопководство, культура. Противоречия: 'хлопковое дело'.",
example: "Пример: Строительство каналов, развитие театра и кино.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Рашидов"
}
]
},
{
title: "5. Независимость",
icon: "fa-landmark",
subtopics: [
{
title: "Распад СССР и независимость",
content: "31 августа 1991 — Декларация о независимости. 1 сентября — День независимости.",
example: "Пример: 29 декабря 1991 — референдум, 98.2% за независимость.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Независимость"
},
{
title: "Конституция и государственность",
content: "8 декабря 1992 — Конституция. Президентская республика. Государственные символы.",
example: "Пример: Флаг, герб, гимн приняты в 1991-1992.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Конституция"
},
{
title: "Эпоха Каримова",
content: "Узбекская модель перехода к рыночной экономике. Поэтапные реформы.",
example: "Пример: Введение сума (1994), приватизация.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Каримов"
}
]
},
{
title: "6. Эра Мирзиёева",
icon: "fa-forward",
subtopics: [
{
title: "Стратегия действий (2017-2021)",
content: "5 приоритетов: экономика, госуправление, социальная сфера, безопасность, внешняя политика.",
example: "Пример: Либерализация валюты (2017), упрощение визового режима.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Реформы"
},
{
title: "Новый Узбекистан",
content: "Социально-экономические реформы. Глобальная интеграция. Цифровизация.",
example: "Пример: my.gov.uz, электронные услуги, борьба с коррупцией.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Новый Узбекистан"
}
]
}
]
},

/* ===================================
6. ЛИНЕЙНАЯ АЛГЕБРА
=================================== */
algebra: {
intro: "От простых систем уравнений до спектральной теории матриц. Фундамент современной математики и информатики.",
founder: "Готфрид Лейбниц, Габриэль Крамер, Артур Кэли, Дэвид Гильберт, Эмми Нётер.",
topics: [
{
title: "1. Системы линейных уравнений",
icon: "fa-equals",
subtopics: [
{
title: "Основные понятия",
content: "СЛАУ: a₁₁x₁ + a₁₂x₂ + ... = b₁. Матричная форма: AX = B.",
example: "Пример: 2x + 3y = 8, 4x + y = 10",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "СЛАУ"
},
{
title: "Метод Гаусса",
content: "Приведение к ступенчатому виду. Прямой и обратный ход.",
example: "Пример: Исключение переменных последовательным вычитанием строк.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Метод Гаусса"
},
{
title: "Метод Жордана-Гаусса",
content: "Приведение к диагональному виду. Сразу получаем решение.",
example: "Пример: Единичная матрица в левой части → решение в правой.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Жордан-Гаусс"
}
]
},
{
title: "2. Матрицы",
icon: "fa-th",
subtopics: [
{
title: "Виды и операции",
content: "Сложение, умножение на скаляр. Умножение матриц: строка на столбец.",
example: "Пример: A(2×3) · B(3×2) = C(2×2)",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Матрицы"
},
{
title: "Транспонирование",
content: "Aᵀ: строки становятся столбцами. (Aᵀ)ᵀ = A.",
example: "Пример: |1 2|ᵀ = |1 3|\\n             |3 4|    |2 4|",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Транспонирование"
}
]
},
{
title: "3. Определители",
icon: "fa-calculator",
subtopics: [
{
title: "Определители 2-го и 3-го порядков",
content: "2×2: ad - bc. 3×3: правило Саррюса или разложение.",
example: "Пример: |3 8| = 3·4 - 8·2 = -4\\n             |2 4|",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Определитель"
},
{
title: "Миноры и алгебраические дополнения",
content: "Минор Mᵢⱼ — определитель после вычёркивания i-й строки и j-го столбца. Aᵢⱼ = (-1)ⁱ⁺ʲ·Mᵢⱼ.",
example: "Пример: Разложение по первой строке: det = a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Миноры"
}
]
},
{
title: "4. Обратная матрица",
icon: "fa-undo",
subtopics: [
{
title: "Условия и методы",
content: "Существует если det ≠ 0. A⁻¹ = (1/det) · adj(A).",
example: "Пример: Для 2×2: A⁻¹ = (1/det) | d -b|\\n                                    |-c  a|",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Обратная матрица"
},
{
title: "Правило Крамера",
content: "xᵢ = det(Aᵢ)/det(A), где Aᵢ — матрица с заменой i-го столбца на B.",
example: "Пример: Для системы 2×2 вычисляем 3 определителя.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Крамер"
}
]
},
{
title: "5. Векторная алгебра",
icon: "fa-arrow-up",
subtopics: [
{
title: "Векторы на плоскости и в пространстве",
content: "Координаты, длина |v| = √(x²+y²+z²). Линейные операции.",
example: "Пример: v = (3, 4, 0), |v| = 5",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Векторы"
},
{
title: "Произведения векторов",
content: "Скалярное: u·v = |u||v|cosθ. Векторное: u×v — перпендикулярный вектор. Смешанное: объём параллелепипеда.",
example: "Пример: u·v = 0 → векторы перпендикулярны.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Произведения"
}
]
},
{
title: "6. Линейные пространства",
icon: "fa-vector-square",
subtopics: [
{
title: "Линейная зависимость",
content: "Система векторов линейно зависима если существует нетривиальная линейная комбинация = 0.",
example: "Пример: v₁ = (1,2), v₂ = (2,4) — зависимы (v₂ = 2v₁).",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Зависимость"
},
{
title: "Базис и размерность",
content: "Базис — максимальная линейно независимая система. Размерность = количество векторов базиса.",
example: "Пример: В R³ базис: e₁=(1,0,0), e₂=(0,1,0), e₃=(0,0,1). Размерность = 3.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Базис"
}
]
},
{
title: "7. Линейные операторы",
icon: "fa-exchange-alt",
subtopics: [
{
title: "Матрица оператора",
content: "Линейное преобразование задаётся матрицей. Ядро и образ.",
example: "Пример: Поворот на 90°: |0 -1|\\n                    |1  0|",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Операторы"
},
{
title: "Собственные векторы и значения",
content: "Av = λv. Характеристическое уравнение: det(A - λI) = 0.",
example: "Пример: Для диагональной матрицы собственные значения — диагональные элементы.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Собственные значения"
}
]
},
{
title: "8. Квадратичные формы",
icon: "fa-chart-area",
subtopics: [
{
title: "Закон инерции",
content: "Приведение к каноническому виду. Положительная/отрицательная определённость.",
example: "Пример: f(x,y) = x² + 2xy + y² = (x+y)²",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Квадратичные формы"
}
]
}
]
},

/* ===================================
7. БАЗА ДАННЫХ
=================================== */
database: {
intro: "От основ реляционной алгебры до администрирования БД. Критически важный навык в эпоху больших данных.",
founder: "Эдгар Кодд (реляционная модель), Дональд Чемберлин (SQL), создатели MongoDB, Redis, Neo4j.",
topics: [
{
title: "1. Введение в БД",
icon: "fa-database",
subtopics: [
{
title: "Что такое БД и СУБД",
content: "БД — структурированный набор данных. СУБД — программа для управления (MySQL, PostgreSQL, Oracle).",
example: "Пример: Интернет-магазин: товары, пользователи, заказы.",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Базы данных"
},
{
title: "Архитектура клиент-сервер",
content: "Клиент отправляет запросы, сервер обрабатывает и возвращает результаты.",
example: "Пример: Веб-приложение → сервер БД → ответ.",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Клиент-сервер"
}
]
},
{
title: "2. Реляционная модель",
icon: "fa-table",
subtopics: [
{
title: "Таблицы, кортежи, домены",
content: "Таблица = отношение. Строка = кортеж. Столбец = атрибут с доменом (типом).",
example: "Пример: Таблица Students: ID (INT), Name (VARCHAR), Age (INT).",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Таблицы"
},
{
title: "Первичные и внешние ключи",
content: "Primary Key — уникальный идентификатор. Foreign Key — ссылка на PK другой таблицы.",
example: "Пример: Orders.student_id → Students.id",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Ключи"
}
]
},
{
title: "3. Проектирование БД",
icon: "fa-drafting-compass",
subtopics: [
{
title: "ER-диаграммы",
content: "Entity-Relationship: сущности, атрибуты, связи (1:1, 1:M, M:N).",
example: "Пример: Студент —(изучает)→ Предмет (M:N через промежуточную таблицу).",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "ER-диаграмма"
},
{
title: "Нормализация",
content: "1NF: атомарные значения. 2NF: нет частичных зависимостей. 3NF: нет транзитивных зависимостей.",
example: "Пример: Разделение таблицы для устранения избыточности.",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Нормализация"
}
]
},
{
title: "4. SQL: DDL",
icon: "fa-code",
subtopics: [
{
title: "CREATE, ALTER, DROP",
content: "CREATE TABLE, ALTER TABLE (ADD/MODIFY COLUMN), DROP TABLE.",
example: "Пример: CREATE TABLE Users (id INT PRIMARY KEY, name VARCHAR(100));",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "DDL"
}
]
},
{
title: "5. SQL: DML",
icon: "fa-edit",
subtopics: [
{
title: "INSERT, UPDATE, DELETE",
content: "Вставка, обновление, удаление данных. Осторожно с DELETE без WHERE!",
example: "Пример: INSERT INTO Users (name) VALUES ('Anna');",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "DML"
}
]
},
{
title: "6. SELECT и фильтрация",
icon: "fa-search",
subtopics: [
{
title: "SELECT, WHERE, ORDER BY, LIMIT",
content: "Выборка данных с фильтрацией, сортировкой и ограничением.",
example: "Пример: SELECT * FROM Users WHERE age > 18 ORDER BY name LIMIT 10;",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "SELECT"
},
{
title: "Агрегатные функции",
content: "COUNT, SUM, AVG, MIN, MAX. GROUP BY, HAVING.",
example: "Пример: SELECT age, COUNT(*) FROM Users GROUP BY age HAVING COUNT(*) > 5;",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Агрегация"
}
]
},
{
title: "7. JOIN и подзапросы",
icon: "fa-link",
subtopics: [
{
title: "INNER JOIN, LEFT/RIGHT JOIN",
content: "Объединение таблиц по ключам. INNER — только совпадения. LEFT — все из левой + совпадения.",
example: "Пример: SELECT u.name, o.product FROM Users u INNER JOIN Orders o ON u.id = o.user_id;",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "JOIN"
},
{
title: "Подзапросы и UNION",
content: "Вложенные SELECT. UNION, INTERSECT, EXCEPT для множеств.",
example: "Пример: SELECT * FROM Users WHERE id IN (SELECT user_id FROM Orders);",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Подзапросы"
}
]
},
{
title: "8. Представления и индексы",
icon: "fa-eye",
subtopics: [
{
title: "Views",
content: "Виртуальные таблицы. CREATE VIEW. Упрощение сложных запросов.",
example: "Пример: CREATE VIEW ActiveUsers AS SELECT * FROM Users WHERE active = 1;",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Views"
},
{
title: "Индексы",
content: "Кластеризованные и некластеризованные. Ускорение поиска. CREATE INDEX.",
example: "Пример: CREATE INDEX idx_name ON Users(name);",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Индексы"
}
]
},
{
title: "9. Транзакции",
icon: "fa-sync",
subtopics: [
{
title: "ACID",
content: "Atomicity, Consistency, Isolation, Durability. COMMIT, ROLLBACK.",
example: "Пример: Перевод денег: либо оба обновления, либо ни одного.",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Транзакции"
}
]
},
{
title: "10. Программирование в БД",
icon: "fa-file-code",
subtopics: [
{
title: "Процедуры, функции, триггеры",
content: "Хранимые процедуры, пользовательские функции. Триггеры — автодействие при изменении.",
example: "Пример: Триггер для логирования изменений в таблице.",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "Программирование"
}
]
},
{
title: "11. NoSQL",
icon: "fa-database",
subtopics: [
{
title: "Документные, графовые, ключ-значение",
content: "MongoDB (документы), Neo4j (графы), Redis (ключ-значение). Гибкая схема.",
example: "Пример: MongoDB: {name: 'Anna', courses: ['Math', 'Physics']}",
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
imageCaption: "NoSQL"
}
]
}
]
},

/* ===================================
8. КОМПЬЮТЕРНЫЕ СЕТИ
=================================== */
network: {
intro: "От передачи битов по кабелю до защиты информации в интернете. Основа современного цифрового мира.",
founder: "Винтон Серф, Боб Кан (TCP/IP), Тим Бернерс-Ли (WWW), создатели Ethernet и Wi-Fi.",
topics: [
{
title: "1. Введение",
icon: "fa-network-wired",
subtopics: [
{
title: "Классификация сетей",
content: "LAN (локальная), MAN (городская), WAN (глобальная). Интернет — крупнейшая WAN.",
example: "Пример: Домашняя Wi-Fi сеть — LAN. Подключение к провайдеру — WAN.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Типы сетей"
},
{
title: "Топологии",
content: "Звезда, кольцо, шина, сетка. Преимущества и недостатки каждой.",
example: "Пример: Звезда — все устройства к центральному коммутатору.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Топологии"
}
]
},
{
title: "2. Модель OSI",
icon: "fa-layer-group",
subtopics: [
{
title: "7 уровней OSI",
content: "7. Прикладной (HTTP). 6. Представления. 5. Сеансовый. 4. Транспортный (TCP/UDP). 3. Сетевой (IP). 2. Канальный. 1. Физический.",
example: "Пример: Email: SMTP (7) → TCP (4) → IP (3) → Ethernet (2) → кабель (1).",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "OSI"
},
{
title: "Модель TCP/IP",
content: "4 уровня: Прикладной, Транспортный, Сетевой, Канально-физический.",
example: "Пример: HTTP → TCP → IP → Ethernet.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "TCP/IP"
}
]
},
{
title: "3. Физический уровень",
icon: "fa-ethernet",
subtopics: [
{
title: "Кабели и среды",
content: "Витая пара (Cat5e, Cat6), оптоволокно, беспроводные (Wi-Fi, Bluetooth).",
example: "Пример: Cat6 поддерживает 10 Гбит/с до 55 м.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Кабели"
}
]
},
{
title: "4. Канальный уровень",
icon: "fa-sitemap",
subtopics: [
{
title: "MAC-адреса и фреймы",
content: "48-битный уникальный адрес. Формат кадра Ethernet.",
example: "Пример: MAC: 00:1A:2B:3C:4D:5E",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "MAC-адрес"
},
{
title: "Коммутаторы и VLAN",
content: "Switch работает на уровне 2. VLAN — виртуальные LAN для сегментации.",
example: "Пример: VLAN 10 — бухгалтерия, VLAN 20 — IT.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "VLAN"
},
{
title: "Ethernet и Wi-Fi",
content: "Ethernet (802.3), Wi-Fi (802.11 a/b/g/n/ac/ax).",
example: "Пример: Wi-Fi 6 (802.11ax) — до 9.6 Гбит/с.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Wi-Fi"
}
]
},
{
title: "5. Сетевой уровень",
icon: "fa-globe",
subtopics: [
{
title: "IPv4 адресация",
content: "32 бита, 4 октета. Классы A, B, C. Публичные и приватные адреса.",
example: "Пример: 192.168.1.1 — приватный. 8.8.8.8 — публичный (Google DNS).",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "IPv4"
},
{
title: "Subnetting",
content: "Маски подсети. CIDR (/24, /16). Вычисление диапазонов.",
example: "Пример: 192.168.1.0/24 — 256 адресов (1-254 для хостов).",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Subnetting"
},
{
title: "Маршрутизация",
content: "Router, таблицы маршрутизации. Статические и динамические маршруты (OSPF, BGP).",
example: "Пример: Домашний роутер — NAT между LAN и WAN.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Маршрутизация"
},
{
title: "ICMP и ARP",
content: "ping, traceroute (ICMP). ARP — разрешение IP в MAC.",
example: "Пример: ping google.com проверяет доступность.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "ICMP"
}
]
},
{
title: "6. Транспортный уровень",
icon: "fa-exchange-alt",
subtopics: [
{
title: "TCP и UDP",
content: "TCP — надёжный (соединение, подтверждения). UDP — быстрый (без гарантии).",
example: "Пример: HTTP — TCP. Видеострим — UDP.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "TCP/UDP"
},
{
title: "Порты",
content: "0-65535. 0-1023 — зарезервированные (HTTP:80, HTTPS:443, SSH:22).",
example: "Пример: Веб-сервер слушает порт 80.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Порты"
},
{
title: "DHCP и NAT",
content: "DHCP — автоназначение IP. NAT/PAT — трансляция адресов для выхода в интернет.",
example: "Пример: Роутер выдаёт 192.168.1.x устройствам через DHCP.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "DHCP/NAT"
}
]
},
{
title: "7. Прикладной уровень",
icon: "fa-cloud",
subtopics: [
{
title: "DNS",
content: "Доменные имена в IP. Иерархия: корневые → TLD → авторитетные серверы.",
example: "Пример: google.com → 142.250.x.x",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "DNS"
},
{
title: "HTTP/HTTPS, FTP, SMTP",
content: "HTTP (80), HTTPS (443) — веб. FTP (21) — файлы. SMTP (25) — почта.",
example: "Пример: HTTPS шифрует трафик через SSL/TLS.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Протоколы"
}
]
},
{
title: "8. IPv6 и безопасность",
icon: "fa-shield-alt",
subtopics: [
{
title: "IPv6",
content: "128 бит, hex формат. Автонастройка. Решает нехватку адресов.",
example: "Пример: 2001:0db8:85a3::8a2e:0370:7334",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "IPv6"
},
{
title: "Безопасность",
content: "Firewalls, VPN, шифрование (SSL/TLS).",
example: "Пример: VPN создаёт зашифрованный туннель.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Безопасность"
}
]
}
]
},

/* ===================================
9. ДИСКРЕТНЫЕ СТРУКТУРЫ
=================================== */
discrete: {
intro: "От теории множеств до теории графов и булевой алгебры. Фундамент Computer Science.",
founder: "Леонард Эйлер (графы), Джордж Буль (логика), Готлоб Фреге, Алан Тьюринг.",
topics: [
{
title: "1. Теория множеств",
icon: "fa-circle",
subtopics: [
{
title: "Операции над множествами",
content: "Объединение ∪, пересечение ∩, разность \\, дополнение Ā. Круги Эйлера.",
example: "Пример: A={1,2,3}, B={2,3,4}. A∪B={1,2,3,4}, A∩B={2,3}.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Множества"
},
{
title: "Подмножества",
content: "A ⊆ B если все элементы A в B. Пустое множество ∅.",
example: "Пример: {1,2} ⊆ {1,2,3}.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Подмножества"
}
]
},
{
title: "2. Бинарные отношения",
icon: "fa-link",
subtopics: [
{
title: "Свойства отношений",
content: "Рефлексивность, симметричность, транзитивность. Отношения эквивалентности и порядка.",
example: "Пример: '=' — эквивалентность. '≤' — порядок.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Отношения"
}
]
},
{
title: "3. Функции",
icon: "fa-f",
subtopics: [
{
title: "Инъекция, сюръекция, биекция",
content: "Инъекция: разные входы → разные выходы. Сюръекция: все выходы покрыты. Биекция: и то, и другое.",
example: "Пример: f(x) = 2x — биекция на R.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Функции"
}
]
},
{
title: "4. Математическая логика",
icon: "fa-brain",
subtopics: [
{
title: "Логические операции",
content: "И (∧), ИЛИ (∨), НЕ (¬), импликация (→), эквиваленция (↔).",
example: "Пример: p→q ложно только если p=1, q=0.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Логика"
},
{
title: "Таблицы истинности",
content: "2ⁿ строк для n переменных. Законы де Моргана.",
example: "Пример: ¬(p∧q) = ¬p∨¬q",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Таблицы"
},
{
title: "Кванторы",
content: "∀ (всеобщности), ∃ (существования). Логика предикатов.",
example: "Пример: ∀x∃y (x < y) — для любого x найдётся больший y.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Кванторы"
}
]
},
{
title: "5. Методы доказательств",
icon: "fa-check-double",
subtopics: [
{
title: "Прямое, от противного, индукция",
content: "Прямое: A→B. От противного: предположить ¬B, вывести противоречие. Индукция: база + шаг.",
example: "Пример: Индукция: 1+2+...+n = n(n+1)/2.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Доказательства"
}
]
},
{
title: "6. Комбинаторика",
icon: "fa-calculator",
subtopics: [
{
title: "Правила суммы и произведения",
content: "Сумма: m или n способов → m+n. Произведение: m и n → m×n.",
example: "Пример: 5 рубашек × 3 брюк = 15 комбинаций.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Комбинаторика"
},
{
title: "Перестановки, размещения, сочетания",
content: "P(n) = n!. A(n,k) = n!/(n-k)!. C(n,k) = n!/(k!(n-k)!).",
example: "Пример: C(5,2) = 10 способов выбрать 2 из 5.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Сочетания"
},
{
title: "Бином Ньютона",
content: "(a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ.",
example: "Пример: (a+b)² = a² + 2ab + b².",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Бином"
}
]
},
{
title: "7. Теория графов",
icon: "fa-project-diagram",
subtopics: [
{
title: "Вершины, рёбра, степени",
content: "G = (V, E). Степень — количество рёбер. Ориентированные и неориентированные.",
example: "Пример: Соцсеть: люди — вершины, дружба — рёбра.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Графы"
},
{
title: "Представление графов",
content: "Матрица смежности, матрица инцидентности, списки смежности.",
example: "Пример: Матрица n×n для n вершин.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Представление"
},
{
title: "Пути и циклы",
content: "Эйлеровы (все рёбра), Гамильтоновы (все вершины).",
example: "Пример: Задача о кёнигсбергских мостах — Эйлер.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Пути"
},
{
title: "Деревья",
content: "Связный ациклический граф. n вершин → n-1 рёбер. Бинарные деревья.",
example: "Пример: Файловая система — дерево.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Деревья"
},
{
title: "Алгоритмы на графах",
content: "BFS (в ширину), DFS (в глубину), Дейкстра (кратчайший путь).",
example: "Пример: BFS находит кратчайший путь в невзвешенном графе.",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Алгоритмы"
}
]
},
{
title: "8. Булева алгебра",
icon: "fa-microchip",
subtopics: [
{
title: "Булевы функции",
content: "0 и 1. СДНФ, СКНФ. Минимизация: карты Карно.",
example: "Пример: f(x,y) = x∧y ∨ ¬x∧¬y (эквиваленция).",
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
imageCaption: "Булева алгебра"
}
]
}
]
},

/* ===================================
10. ЭЛЕКТРОНИКА И СХЕМЫ
=================================== */
electronics: {
intro: "От закона Ома до цифровых микросхем. Основа всей современной техники.",
founder: "Джон Бардин, Уолтер Браттейн, Уильям Шокли (транзистор), Джек Килби (микросхема).",
topics: [
{
title: "1. Базовые понятия",
icon: "fa-bolt",
subtopics: [
{
title: "Заряд, ток, напряжение, сопротивление",
content: "I = Q/t, U = W/Q, R = U/I. Закон Ома: U = I·R.",
example: "Пример: 9В батарея, 300 Ом резистор → I = 30 мА.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Закон Ома"
},
{
title: "Мощность",
content: "P = U·I = I²·R = U²/R.",
example: "Пример: Лампа 220В, 60Вт → I ≈ 0.27А.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Мощность"
},
{
title: "Последовательное и параллельное",
content: "Последовательно: I одинаков, U складывается. Параллельно: U одинаково, I складывается.",
example: "Пример: R₁+R₂ (посл.), 1/(1/R₁+1/R₂) (парал.).",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Соединения"
}
]
},
{
title: "2. Законы Кирхгофа",
icon: "fa-project-diagram",
subtopics: [
{
title: "Первый закон (узлы)",
content: "Сумма токов в узле = 0 (входящие = выходящие).",
example: "Пример: I₁ + I₂ = I₃ + I₄",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Закон токов"
},
{
title: "Второй закон (контуры)",
content: "Сумма напряжений в замкнутом контуре = 0.",
example: "Пример: U₁ + U₂ - U₃ = 0",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Закон напряжений"
}
]
},
{
title: "3. Пассивные компоненты",
icon: "fa-microchip",
subtopics: [
{
title: "Конденсаторы и катушки",
content: "C: Q = C·U. L: ε = -L·dI/dt. RC и RL переходные процессы.",
example: "Пример: Конденсатор 100 мкФ заряжается за τ = RC.",
image: "https://images.unsplash.com/photo-1601524869904-cbddb99e2072?w=800&q=80",
imageCaption: "Конденсаторы"
}
]
},
{
title: "4. Методы расчёта",
icon: "fa-calculator",
subtopics: [
{
title: "Контурные токи и узловые потенциалы",
content: "Методы для сложных цепей. Система уравнений.",
example: "Пример: 3 контура → 3 уравнения.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Расчёт цепей"
},
{
title: "Теоремы Тевенина и Нортона",
content: "Эквивалентный генератор. Упрощение сложных схем.",
example: "Пример: Любую линейную цепь → источник + сопротивление.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Тевенин"
}
]
},
{
title: "5. Переменный ток",
icon: "fa-wave-square",
subtopics: [
{
title: "Синусоидальные сигналы",
content: "Амплитуда, частота, фаза. Импеданс Z = R + jX.",
example: "Пример: 220В, 50Гц — стандарт сети.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "AC"
}
]
},
{
title: "6. Полупроводники",
icon: "fa-chip",
subtopics: [
{
title: "p-n переход",
content: "Зонная теория. Проводимость, дырки.",
example: "Пример: Кремний, германий.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Полупроводники"
},
{
title: "Диоды",
content: "ВАХ, выпрямители, стабилитроны, светодиоды.",
example: "Пример: LED: красный ~1.8В, белый ~3.2В.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Диоды"
}
]
},
{
title: "7. Транзисторы",
icon: "fa-microchip",
subtopics: [
{
title: "Биполярные (BJT)",
content: "NPN, PNP. Режимы: отсечка, активный, насыщение.",
example: "Пример: NPN: ток базы управляет током коллектора.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "BJT"
},
{
title: "Полевые (MOSFET)",
content: "Затвор, сток, исток. Управление напряжением.",
example: "Пример: Arduino → MOSFET → мотор 12В.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "MOSFET"
}
]
},
{
title: "8. Операционные усилители",
icon: "fa-microchip",
subtopics: [
{
title: "Свойства идеального ОУ",
content: "Бесконечное усиление, бесконечное входное сопротивление, нулевое выходное.",
example: "Пример: Инвертирующий усилитель: Uout = -Uin·(Rf/Rin).",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "ОУ"
},
{
title: "Схемы на ОУ",
content: "Инвертирующий, неинвертирующий усилитель, компаратор, сумматор.",
example: "Пример: Компаратор сравнивает два напряжения.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Схемы на ОУ"
}
]
},
{
title: "9. Цифровая электроника",
icon: "fa-microchip",
subtopics: [
{
title: "Логические вентили",
content: "AND, OR, NOT, NAND, NOR, XOR. Таблицы истинности.",
example: "Пример: AND: выход 1 только если оба входа 1.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Логические вентили"
},
{
title: "Комбинационная логика",
content: "Дешифраторы, шифраторы, мультиплексоры, сумматоры.",
example: "Пример: Полусумматор складывает два бита.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Комбинационная логика"
},
{
title: "Триггеры",
content: "RS, D, JK, T триггеры. Элементы памяти.",
example: "Пример: D-триггер запоминает бит по тактовому сигналу.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Триггеры"
},
{
title: "Цифровые устройства",
content: "Регистры сдвига, счётчики импульсов.",
example: "Пример: Счётчик считает количество импульсов.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
imageCaption: "Цифровые устройства"
}
]
}
]
},

/* ===================================
11. ФИЛОСОФИЯ
=================================== */
philosophy: {
intro: "От античных мыслителей до экзистенциализма и этики. Фундаментальные вопросы о существовании, знании, ценностях.",
founder: "Сократ, Платон, Аристотель, Кант, Гегель, Ницше, Сартр, Камю.",
topics: [
{
title: "1. Введение в философию",
icon: "fa-question",
subtopics: [
{
title: "Что такое философия",
content: "Философия — любовь к мудрости. Изучает бытие, познание, ценности, разум. Основные вопросы: Что существует? Что я могу знать? Что я должен делать?",
example: "Пример: Наука отвечает КАК устроен мир. Философия спрашивает ПОЧЕМУ мир существует.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Философия — поиск мудрости"
},
{
title: "Разделы философии",
content: "Онтология (бытие), гносеология (познание), этика (мораль), эстетика (прекрасное), логика (мышление).",
example: "Пример: Онтология: 'Существует ли душа?'. Этика: 'Допустима ли ложь во спасение?'.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Разделы философии"
}
]
},
{
title: "2. Античная философия",
icon: "fa-landmark",
subtopics: [
{
title: "Досократики",
content: "Фалес (всё из воды), Гераклит (всё течёт), Демокрит (атомизм). Поиск первоначала (архе).",
example: "Пример: Гераклит: 'Нельзя дважды войти в одну реку'.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Досократики"
},
{
title: "Сократ и диалектика",
content: "Диалог как метод поиска истины. 'Я знаю, что ничего не знаю'. Казнён за 'развращение молодёжи'.",
example: "Пример: Сократ задавал вопросы, приводя собеседника к противоречию.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Сократ"
},
{
title: "Платон: мир идей",
content: "Два мира: идей (совершенный) и вещей (копии). Душа бессмертна. Миф о пещере.",
example: "Пример: Люди в пещере видят тени, думая что это реальность.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Платон"
},
{
title: "Аристотель: логика",
content: "Форма и материя неразделимы. Силлогизмы. 'Человек — политическое животное'.",
example: "Пример: 'Все люди смертны. Сократ — человек. Следовательно, Сократ смертен'.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Аристотель"
}
]
},
{
title: "3. Средневековая философия",
icon: "fa-church",
subtopics: [
{
title: "Патристика и схоластика",
content: "Теоцентризм. Августин (патристика), Фома Аквинский (схоластика). Вера и разум.",
example: "Пример: Фома Аквинский: 5 доказательств бытия Бога.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Схоластика"
}
]
},
{
title: "4. Философия Нового времени",
icon: "fa-lightbulb",
subtopics: [
{
title: "Рационализм: Декарт",
content: "'Cogito, ergo sum' (Мыслю, следовательно существую). Методическое сомнение.",
example: "Пример: Декарт сомневался во всём, пока не нашёл несомненное — факт мышления.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Декарт"
},
{
title: "Эмпиризм: Локк, Юм",
content: "Знание из опыта. Локк: tabula rasa (чистая доска). Юм: причинность — привычка ума.",
example: "Пример: Юм: нет гарантии, что солнце взойдёт завтра (только привычка).",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Эмпиризм"
}
]
},
{
title: "5. Немецкая классическая философия",
icon: "fa-book",
subtopics: [
{
title: "Кант: критическая философия",
content: "'Вещь в себе' непознаваема. Категорический императив: поступай так, чтобы максима могла быть всеобщим законом.",
example: "Пример: Ложь не может быть всеобщим законом → лгать нельзя.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Кант"
},
{
title: "Гегель: диалектика",
content: "Тезис → антитезис → синтез. История — развитие Абсолютного Духа.",
example: "Пример: Феодализм → восстание → капитализм.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Гегель"
}
]
},
{
title: "6. Философия XIX-XX веков",
icon: "fa-users",
subtopics: [
{
title: "Марксизм",
content: "Диалектический и исторический материализм. Проблема отчуждения человека.",
example: "Пример: Рабочий отчуждён от продукта своего труда.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Маркс"
},
{
title: "Экзистенциализм",
content: "Сартр, Камю. Существование предшествует сущности. Свобода = ответственность. Абсурд.",
example: "Пример: Ты выбираешь: помочь или пройти мимо. Выбор делает тебя тем, кто ты есть.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Экзистенциализм"
}
]
},
{
title: "7. Онтология и гносеология",
icon: "fa-brain",
subtopics: [
{
title: "Учение о бытии",
content: "Материя, пространство, время. Идеализм vs материализм.",
example: "Пример: Материализм: материя первична. Идеализм: сознание первично.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Онтология"
},
{
title: "Теория познания",
content: "Субъект и объект познания. Проблема истины и её критерии.",
example: "Пример: correspondence theory: истина = соответствие действительности.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Гносеология"
}
]
},
{
title: "8. Этика и аксиология",
icon: "fa-balance-scale",
subtopics: [
{
title: "Природа морали",
content: "Добро и зло, долг, совесть. Утилитаризм, деонтология, этика добродетелей.",
example: "Пример: Утилитаризм: наибольшее счастье для наибольшего числа людей.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Этика"
},
{
title: "Система ценностей",
content: "Что важно в жизни? Свобода, справедливость, счастье, знание.",
example: "Пример: Иерархия ценностей у разных людей и культур.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Ценности"
}
]
}
]
},

/* ===================================
12. РЕЛИГИОВЕДЕНИЕ
=================================== */
religion: {
intro: "От ранних форм верований до религии в современном обществе. Объективное исследование религиозных феноменов.",
founder: "Фридрих Макс Мюллер, Мирча Элиаде, Клиффорд Гирц.",
topics: [
{
title: "1. Введение в религиоведение",
icon: "fa-book-open",
subtopics: [
{
title: "Что такое религия",
content: "Система верований и практик, связанных со священным. Компоненты: вера, ритуалы, этика, сообщество.",
example: "Пример: В христианстве священное — Бог. Ритуалы — молитва, причастие.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Религия"
},
{
title: "Функции религии",
content: "Мировоззренческая, регулятивная, интегративная, компенсаторная, коммуникативная.",
example: "Пример: В средние века церковь объясняла мир (мировоззрение), устанавливала законы (регуляция).",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Функции религии"
}
]
},
{
title: "2. Ранние формы религии",
icon: "fa-fire",
subtopics: [
{
title: "Анимизм и тотемизм",
content: "Анимизм — вера в одушевлённость природы. Тотемизм — вера в родство с животным/растением.",
example: "Пример: Племя считает медведя тотемом-предком.",
image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
imageCaption: "Анимизм"
},
{
title: "Политеизм древних цивилизаций",
content: "Египет (Ра, Осирис), Греция (Зевс, Афина), Рим, Индия. Боги — покровители явлений.",
example: "Пример: Зевс — бог неба, Посейдон — моря, Аид — подземного мира.",
image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
imageCaption: "Политеизм"
}
]
},
{
title: "3. Монотеистические религии",
icon: "fa-praying-hands",
subtopics: [
{
title: "Иудаизм",
content: "Древнейшая монотеистическая религия. Один Бог — Яхве. Танах (Ветхий Завет). 613 заповедей.",
example: "Пример: Шаббат (суббота) — день отдыха. Кашрут — законы о пище.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Иудаизм"
},
{
title: "Христианство",
content: "I век н.э. Иисус Христос — Мессия, Сын Божий. Библия: Ветхий + Новый Завет. Спасение через веру.",
example: "Пример: Иисус умер на кресте за грехи людей, воскрес. Таинства: крещение, причастие.",
image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
imageCaption: "Христианство"
},
{
title: "Ислам",
content: "VII век, Аравия. Пророк Мухаммад. Один Бог — Аллах. Коран. Пять столпов ислама.",
example: "Пример: Намаз 5 раз в день. Пост в Рамадан. Хадж в Мекку.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Ислам"
}
]
},
{
title: "4. Восточные религии",
icon: "fa-yin-yang",
subtopics: [
{
title: "Буддизм",
content: "VI-V вв. до н.э., Индия. Будда (Сиддхартха Гаутама). Четыре благородные истины. Восьмеричный путь. Нирвана.",
example: "Пример: Страдания от привязанности. Отказ от желаний → освобождение → нирвана.",
image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
imageCaption: "Буддизм"
},
{
title: "Индуизм",
content: "Древнейшая религия Индии. Веды. Брахман (мировая душа), Атман (индивидуальная). Сансара, карма, мокша.",
example: "Пример: Хорошая карма → рождение в высшей касте. Плохая карма → рождение животным.",
image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
imageCaption: "Индуизм"
}
]
},
{
title: "5. Священные тексты",
icon: "fa-scroll",
subtopics: [
{
title: "Структура и язык",
content: "Библия, Коран, Веды, Трипитака. Языки оригиналов: иврит, греческий, арабский, санскрит, пали.",
example: "Пример: Коран читается только на арабском в молитве.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Священные тексты"
},
{
title: "Толкование (экзегетика)",
content: "Герменевтика — искусство толкования текстов. Разные школы толкования.",
example: "Пример: Буквальное vs аллегорическое толкование.",
image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
imageCaption: "Экзегетика"
}
]
},
{
title: "6. Новые религиозные движения",
icon: "fa-star",
subtopics: [
{
title: "Причины возникновения",
content: "Социальные изменения, поиск смысла, кризис традиционных религий.",
example: "Пример: НРД возникают в периоды быстрых социальных изменений.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "НРД"
},
{
title: "Типология и деструктивные культы",
content: "Разные типы НРД. Признаки деструктивных культов: контроль сознания, изоляция.",
example: "Пример: Важно отличать НРД от деструктивных культов.",
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
imageCaption: "Деструктивные культы"
}
]
},
{
title: "7. Религия в современном мире",
icon: "fa-globe",
subtopics: [
{
title: "Секуляризация",
content: "Снижение роли религии в обществе. Разделение церкви и государства. Религия становится личным делом.",
example: "Пример: В Европе религия — личное дело, не основа государства.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Секуляризация"
},
{
title: "Межконфессиональный диалог",
content: "Встречи лидеров религий для обсуждения общих ценностей. Мир, толерантность, сотрудничество.",
example: "Пример: Встречи христиан, мусульман, иудеев, буддистов.",
image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
imageCaption: "Межрелигиозный диалог"
},
{
title: "Религиозный фундаментализм",
content: "Возврат к 'истокам', отвержение современности. Может приводить к конфликтам.",
example: "Пример: Фундаментализм в разных религиях имеет общие черты.",
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
imageCaption: "Фундаментализм"
}
]
}
]
}
};

/* ===================================
ФУНКЦИИ ОТКРЫТИЯ СТРАНИЦЫ ОБУЧЕНИЯ
=================================== */
function openLearning(subjectKey) {
const material = learningMaterials[subjectKey];
if(!material) return;
const learningView = document.getElementById('learning-view');

let html = `
     <button onclick="openSubject('${subjectKey}')" class="chat-btn" style="margin-bottom: 20px;">
         <i class="fas fa-arrow-left"></i> Назад к предмету
     </button>
    
     <div class="learning-container">
         <div class="subject-intro">
             <h2>${subjectsContent[subjectKey].title}</h2>
             <p class="explanation">${material.intro}</p>
         </div>

         <div class="founder-info">
             <h3 style="color: var(--neon-pink); margin-bottom: 10px;">
                 <i class="fas fa-user-graduate"></i> История и основатели
             </h3>
             <p class="explanation">${material.founder}</p>
         </div>

         <h2 style="color: var(--neon-green); margin: 30px 0 20px 0;">
             <i class="fas fa-book-open"></i> Темы для изучения
         </h2>
`;

if(!material.topics || material.topics.length === 0) {
    html += `
         <div class="learning-note" style="background: var(--card-bg); padding: 30px; border-radius: 15px; text-align: center; border: 2px solid var(--neon-blue);">
             <i class="fas fa-tools" style="font-size: 3rem; color: var(--neon-blue); margin-bottom: 15px;"></i>
             <h3 style="color: var(--neon-green); margin-bottom: 10px;">Детальные материалы в разработке</h3>
             <p class="explanation">
                Мы работаем над созданием подробного пошагового курса по этому предмету.
             </p>
         </div>
    `;
} else {
    material.topics.forEach((topic, topicIndex) => {
        html += `
             <div class="topic-section">
                 <div class="topic-title" onclick="toggleTopic(${topicIndex}, '${subjectKey}')">
                     <i class="fas ${topic.icon}"></i>
                     <span>${topic.title}</span>
                     <i class="fas fa-chevron-down" style="margin-left: auto; font-size: 1rem;"></i>
                 </div>
                 <div class="topic-content" id="topic-${subjectKey}-${topicIndex}">
        `;

        topic.subtopics.forEach(sub => {
            html += `
                 <div class="subtopic">
                     <h4>${sub.title}</h4>
                     <p class="explanation">${sub.content}</p>
                    ${sub.example ? `<div class="example-box"><strong>💡 ${sub.example}</strong></div>` : ''}
                    ${sub.image ? `
                         <div class="image-container">
                             <img src="${sub.image}" alt="${sub.title}" class="subtopic-image" loading="lazy">
                            ${sub.imageCaption ? `<p class="image-caption">${sub.imageCaption}</p>` : ''}
                         </div>
                    ` : ''}
                 </div>
            `;
        });

        html += ` </div> </div>`;
    });
}

html += ` </div>`;
learningView.innerHTML = html;

document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
learningView.classList.add('active');
window.scrollTo(0,0);
}

// Переключение раскрытия/закрытия темы
function toggleTopic(index, subjectKey) {
const content = document.getElementById(`topic-${subjectKey}-${index}`);
const title = content.previousElementSibling;
content.classList.toggle('show');
title.classList.toggle('active');
}