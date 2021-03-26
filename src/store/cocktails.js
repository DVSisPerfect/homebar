const cocktails = [
    {
        id: 1,
        title: '«Голубые Гавайи»',
        type: 'highball',
        src: require('../img/blue-hawaii.jpg'),
        composition: `Белый ром – 30 мл;
        Malibu – 30 мл;
        Blue Curacao – 30 мл;
        Ананасовый сок – 100 мл`
    },
    {
        id: 2,
        title: '«Багама Мама»',
        type: 'highball',
        src: require('../img/bahama-mama.jpg'),
        composition: `Белый ром – 30 мл;
        Темный ром – 15 мл;
        Malibu – 30 мл;
        Ананасовый сок – 60 мл;
        Апельсиновый сок – 60 мл;
        Гренадин – 5 мл.`
    },
    {
        id: 3,
        title: '«Зомби»',
        type: 'highball',
        src: require('../img/zombie.jpg'),
        composition: `Золотой ром – 20 мл;
        Темный ром – 20 мл;
        Белый ром – 20 мл;
        Персиковый ликер – 15 мл;
        Вишневый сироп – 15 мл;
        Гренадин – 5 мл;
        Ананасовый сок – 30 мл;
        Апельсиновый сок – 30 мл.
        Angostura – дэш.`
    },
    {
        id: 4,
        title: '«Ураган»',
        type: 'highball',
        src: require('../img/hurricane.jpg'),
        composition: `Белый ром – 30 мл;
        Темный ром – 30 мл;
        Сок лайма – 15 мл;
        Апельсиновый сок  – 15 мл;
        Ананасовый сок – 15 мл;
        Сироп Маракуйя – 15 мл;
        Гренадин – 15 мл`
    },
    {
        id: 5,
        title: '«Пина Колада»',
        type: 'highball',
        src: require('../img/pina-colada.jpg'),
        composition: `Белый ром – 50 мл;
        Ананасовый сок – 90 мл;
        Malibu – 30 мл.`
    },
    {
        id: 6,
        title: '«Грог»',
        type: 'highball',
        src: require('../img/grog.jpg'),
        composition: `Черный чай –150 мл;
        Белый ром – 30 мл;
        Сахарный сироп –15 мл;
        Сиропы –15 мл;
        Дольки лимона/апельсина.`
    },
    {
        id: 7,
        title: '«Голубая лагуна»',
        type: 'highball',
        src: require('../img/blue-lagoon.jpg'),
        composition: `Водка — 50 мл
        Блю Кюрасао — 10 мл
        Спрайт/7-UP — 100–150 мл
        Долька лимона для украшения`
    },
    {
        id: 8,
        title: '«IC Royal»',
        type: 'highball',
        src: '',
        composition: `Белый ром – 30 мл;
        Malibu – 30 мл;
        Ананасовый сок – 60 мл;
        Сок лайма – 15 мл;
        Гренадин – 10 мл;
        Клубничный сироп – 10 мл.`
    },
    {
        id: 9,
        title: '«Вишневый»',
        type: 'highball',
        src: '',
        composition: `Белый ром – 45 мл;
        Вишневый сок – 60 мл;
        Сахарный сироп – 15 мл;
        Клубничный сироп – 15 мл.`
    },
    {
        id: 10,
        title: '«Зеленая Фея»',
        type: 'highball',
        src: require('../img/green-fairy.jpg'),
        composition: `Белый ром – 15 мл;
        Водка – 15 мл;
        Серебряная текила – 15 мл;
        Абсент – 15 мл;
        Blue Curacao – 10 мл;
        Лимонный сок – 30 мл;
        Спрайт.`
    },
    {
        id: 11,
        title: '«Финская Заправка»',
        type: 'highball',
        src: require('../img/finka.jpg'),
        composition: `Абсент - 20 мл;
        Водка - 20 мл; 
        Cointreau - 20 мл;
        Шотландский виски - 20 мл; 
        Черносмородиновый сироп - 20 мл; 
        Сок лайма - 20 мл.`
    },
    {
        id: 12,
        title: '«Сингапурский Слинг»',
        type: 'highball',
        src: require('../img/singapore-sling.jpg'),
        composition: `Джин – 30 мл;
        Cointreau – 10 мл;
        Ананасовый сок – 120 мл;
        Сок лайма – 15 мл;
        Вишневый сироп – 15 мл;
        Гренадин – 10 мл;
        Angostura – дэш.`
    },
    {
        id: 13,
        title: '«Базиликовый Смэш»',
        type: 'old',
        src: require('../img/gin-basil-smash.jpg'),
        composition: `Джин – 60 мл;
        Сахарный сироп – 20 мл;
        Лимонный сок – 30 мл;
        Базилик.`
    },
    {
        id: 14,
        title: '«Брамбл»',
        type: 'old',
        src: require('../img/bramble.jpg'),
        composition: `Джин – 50 мл;
        Сахарный сироп – 20 мл;
        Лимонный сок – 20 мл;
        Ликёр Шамбор – 20 мл.`
    },
    {
        id: 15,
        title: '«Том Коллинз»',
        type: 'highball',
        src: require('../img/tom-collins.jpg'),
        composition: `Джин – 50 мл;
        Лимонный сок – 25 мл;
        Сахарный сироп – 25 мл;
        Содовая.`
    },
    {
        id: 16,
        title: '«Бульдог Маргарита»',
        type: 'highball',
        src: require('../img/bulldog-margarita.jpg'),
        composition: `Текила – 45 мл;
        Cointreau – 25 мл;
        Сок лайма – 30 мл;
        Апельсиновый сок – 30 мл;
        Сахарный сироп – 30 мл;
        Пиво Корона – 1 бутылка (0,33 л).`
    },
    {
        id: 17,
        title: '«Секс на Пляже»',
        type: 'highball',
        src: require('../img/sex-on-the-beach.jpg'),
        composition: `Водка – 40 мл;
        Персиковый ликер – 20 мл;
        Апельсиновый сок – 40 мл;
        Клюквенный сок – 40 мл.`
    },
    {
        id: 18,
        title: '«Кейп Кодер»',
        type: 'highball',
        src: require('../img/cape-codder.jpg'),
        composition: `Водка – 50мл;
        Клюквенный сок – 120 мл;
        Сахарный сироп – 15 мл;
        Angostura – дэш.`
    },
    {
        id: 19,
        title: '«Космополитен»',
        type: 'cocktail',
        src: require('../img/cosmopolitan-2.jpg'),
        composition: `Водка – 45 мл;
        Cointreau – 15 мл;
        Сок лайма – 10 мл;
        Клюквенный сок – 30 мл.`
    },
    {
        id: 20,
        title: '«Маргарита»',
        type: 'cocktail',
        src: require('../img/tommys-margarita.jpg'),
        composition: `Серебряная текила – 40 мл; 
        Cointreau – 20 мл; 
        Сок лайма – 40 мл. `
    },
    {
        id: 21,
        title: '«Дайкири»',
        type: 'cocktail',
        src: require('../img/daiquiri.jpg'),
        composition: `Белый ром – 45 мл; 
        Сок лайма– 30 мл;
        Сахарный сироп – 15 мл. `
    },
    {
        id: 22,
        title: '«Карусель»',
        type: 'cocktail',
        src: require('../img/merry-go-round.jpg'),
        composition: `Ром со специями – 40 мл;
        Персиковый ликер – 15 мл;
        Cointreau – 10 мл;
        Лимонный сок – 15 мл;
        Сидр полусухой – 40 мл.`
    },
    {
        id: 23,
        title: '«Олд Кубан»',
        type: 'cocktail',
        src: require('../img/old-cuban.jpg'),
        composition: `Тёмный – 45 мл;
        Сахарный сироп – 30 мл;
        Angostura – дэш;
        Сок лайма – 25 мл;
        Игристое вино – 60 мл;
        Мята.`
    },
    {
        id: 24,
        title: '«Мартинез»',
        type: 'cocktail',
        src: require('../img/martinez.jpg'),
        composition: `Джин – 60 мл;
        Мартини Россо – 30 мл;
        Вишневый сироп – 5 мл;
        Angostura – дэш. `
    },
    {
        id: 25,
        title: '«Камикадзе»',
        type: 'shot',
        src: require('../img/kamikaze.jpg'),
        composition: `Водка – 30 мл;
        Cointreau – 30 мл;
        Лимонный сок – 30 мл.`
    },
    {
        id: 26,
        title: '«Хиросима»',
        type: 'shot',
        src: require('../img/hiroshima.jpg'),
        composition: `1 Самбука – 20 мл;
        3 Абсент – 20 мл;
        2 Baileys – 20 мл;
        4 Гренадин – 5 мл.`
    },
    {
        id: 27,
        title: '«Медуза»',
        type: 'shot',
        src: require('../img/jellyfish.jpg'),
        composition: `1 Malibu – 20 мл;
        3 Белый ром – 20 мл;
        4 Baileys – 5 мл;
        2 Cointreau – 20 мл;
        5 Blue Curacao – 5 мл.`
    },
    {
        id: 28,
        title: '«Мимоза»',
        type: 'flute',
        src: require('../img/mimosa.jpg'),
        composition: `Игристое вино (Просекко или Шампанское) — 1 часть
        Апельсиновый сок  — 1 часть`
    },
    {
        id: 29,
        title: '«Шампань-коктейль»',
        type: 'flute',
        src: require('../img/champagne-cocktail.jpg'),
        composition: `Игристое вино  – 100 мл;
        Angostura – дэш;
        Сахар – 1 кусочек.    `
    },
    {
        id: 30,
        title: '«Френч 75»',
        type: 'flute',
        src: require('../img/french-75.jpg'),
        composition: `Джин – 30 мл;
        Игристое вино –50 мл;
        Сахарный сироп – 15 мл;
        Лимонный сок – 15 мл.   `
    },
    {
        id: 31,
        title: '«Беллини»',
        type: 'flute',
        src: require('../img/bellini.jpg'),
        composition: `Проссеко – 100 мл;
        Персиковый сок - 50 мл.`
    },
    {
        id: 32,
        title: '«Кир»',
        type: 'flute',
        src: require('../img/kir.jpg'),
        composition: `Белое вино — 9 частей
        Creme de cassis — 1 часть`
    },
    {
        id: 33,
        title: '«Русский весенний пунш»',
        type: 'highball',
        src: require('../img/russian-punch.jpg'),
        composition: `Водка — 25 мл
        Ликёр черносмородиновый (Крем де Кассис) — 15 мл
        Лимонный сок — 25 мл
        Сахарный сироп — 10 мл
        Игристое вино — на долив
        Долька лимона для украшения  `
    },
    {
        id: 34,
        title: '«Электрический лимонад»',
        type: 'highball',
        src: require('../img/electric-lemonade.jpg'),
        composition: `Водка — 45 мл
        Лимонный сок — 30 мл
        Сахарный сироп — 15 мл
        Лимонно-лаймовая содовая (Спрайт/7Up) — 60 мл
        Блю Кюрасао — 2 ч.л.
        Долька лимона для украшения`
    },
    {
        id: 35,
        title: '«Казантип»',
        type: 'shot',
        src: require('../img/kazantip.jpg'),
        composition: `1 Гренадин – 15 мл
        2 Самбука – 15 мл
        3 Baileys – 15 мл
        4 Абсент – 15 мл`
    },
    {
        id: 36,
        title: '«Сталактит»',
        type: 'shot',
        src: require('../img/notstalactite.jpg'),
        composition: `Самбука – 40 мл
        Baileys – 10 мл
        Черносмородиновый сироп – 10 мл`
    },
    {
        id: 37,
        title: '«Облака»',
        type: 'shot',
        src: require('../img/clouds.jpg'),
        composition: `1 Самбука – 20 мл
        2 Серебряная текила – 20 мл
        5 Абсент – 10 мл
        Blue Curacao – 3 мл
        Baileys – 3 мл`
    },
    {
        id: 38,
        title: '«Б-52»',
        type: 'shot',
        src: require('../img/b52.jpg'),
        composition: `Бейлис — 1 часть
        Калуа (кофейный ликёр) — 1 часть
        Куантро (или Трипл сек) — 1 часть`
    },
];

export default cocktails;
