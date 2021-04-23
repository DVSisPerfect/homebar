import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bar: [
        {
            id: 1,
            name: 'White Rum',
            price: 1958,
            quantity: 1800,   
        },
        {
            id: 2,
            name: 'Black Rum',
            price: 1958,
            quantity: 900,           
        },
        {
            id: 3,
            name: 'Spiced Rum',
            price: 1901,
            quantity: 500,
        },
        {
            id: 4,
            name: 'Absinth',
            price: 3555,
            quantity: 700,         
        },
        {
            id: 5,
            name: 'Sambuca',
            price: 1000,
            quantity: 250,         
        },
        {
            id: 6,
            name: 'Aperol',
            price: 2200,
            quantity: 1000,            
        },
        {
            id: 7,
            name: 'Cointreau',
            price: 1660,
            quantity: 1000,           
        },

        {
            id: 8,
            name: 'Martini Rosso',
            price: 1288,
            quantity: 700,           
        },
        {
            id: 9,
            name: 'Whiskey',
            price: 2519,
            quantity: 1000,           
        },
        {
            id: 10,
            name: 'Marasca Cherry',
            price: 1939,
            quantity: 700,           
        },

        {
            id: 11,
            name: 'Vodka',
            price: 300,
            quantity: 300,            
        },
        {
            id: 12,
            name: 'Gin',
            price: 2800,
            quantity: 1000,          
        },
        {
            id: 13,
            name: 'Malibu',
            price: 1375,
            quantity: 1000,           
        },

        {
            id: 14,
            name: 'Cognac',
            price: 1740,
            quantity: 1000,           
        },
        {
            id: 15,
            name: 'Baileys',
            price: 1936,
            quantity: 500,       
        },
        {
            id: 16,
            name: 'Creme de Cafe',
            price: 1939,
            quantity: 700,         
        },
        {
            id: 17,
            name: 'Peachtree',
            price: 2024,
            quantity: 700,            
        },
        {
            id: 18,
            name: 'Tequila',
            price: 3352,
            quantity: 400,           
        },
        {
            id: 19,
            name: 'Blackcurrant Syrup',
            price: 600,
            quantity: 900,            
        },
        {
            id: 20,
            name: 'Orgeat Syrup',
            price: 555,
            quantity:  400,          
        },

        {
            id: 21,
            name: 'Simple Syrup',
            price: 555,
            quantity: 1600,         
        },        
        {
            id: 22,
            name: 'Cranberries Syrup',
            price: 655,
            quantity: 900,          
        },

        {
            id: 23,
            name: 'Passion Fruit Syrup',
            price: 655,
            quantity: 600,           
        },       
        {
            id: 24,
            name: 'Cherry Syrup',
            price: 655,
            quantity: 500,           
        },

        {
            id: 25,
            name: 'Blue curacao Syrup',
            price: 600,
            quantity: 900,      
        },
        {
            id: 26,
            name: 'Ginger Syrup',
            price: 5,
            quantity: 700,          
        },
        {
            id: 27,
            name: 'Strawberry Syrup',
            price: 600,
            quantity: 400,            
        },
        {
            id: 28,
            name: 'Grenadine Syrup',
            price: 555,
            quantity: 600,           
        },
        {
            id: 29,
            name: 'Mint Syrup',
            price: 555,
            quantity: 600,          
        },
        ],
        cocktails: [
        {
            id: 1,
            title: '«Голубые Гавайи»',
            type: 'highball',
            src: require('../img/blue-hawaii.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: {
                id: 1,
                'White Rum': 30,
                'Malibu': 30,
                'Blue Curacao': 30,
                'Ананасовый сок': 100,
                }
        },
        {
            id: 2,
            title: '«Багама Мама»',
            type: 'highball',
            src: require('../img/bahama-mama.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: {
                id: 2,
                'Белый ром': 30,
                'Темный ром': 15,
                'Malibu': 30,
                'Ананасовый сок': 60,
                'Апельсиновый сок': 60,
                'Гренадин': 5,
            }
        },
        {
            id: 3,
            title: '«Зомби»',
            type: 'highball',
            src: require('../img/zombie.jpg'),
            likes: 3,
            count: 0,
            buy: 0,
            composition: {
                id: 3,
                'Золотой ром': 20,
                'Темный ром': 20,
                'Белый ром': 20,
                'Персиковый ликер': 15,
                'Вишневый сироп': 15,
                'Гренадин': 5 ,            
                'Ананасовый сок': 30,
                'Апельсиновый сок': 30,
                'Angostura': 1,        
            },
        },
        {
            id: 4,
            title: '«Ураган»',
            type: 'highball',
            src: require('../img/hurricane.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: {
                'Белый ром': 30,
                'Темный ром': 30,
                'Сок лайма': 15,
                'Апельсиновый сок': 15,
                'Ананасовый сок': 15,
                'Сироп Маракуйя': 15,
                'Гренадин': 15,
            }
        },
        {
            id: 5,
            title: '«Пина Колада»',
            type: 'highball',
            src: require('../img/pina-colada.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Белый ром: 50,
            Ананасовый сок: 90,
            Malibu: 30,`
        },
        {
            id: 6,
            title: '«Грог»',
            type: 'highball',
            src: require('../img/grog.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Черный чай –150 мл;
            Белый ром: 30,
            Сахарный сироп –15 мл;
            Сиропы –15 мл;
            Дольки лимона/апельсина.`
        },
        {
            id: 7,
            title: '«Голубая лагуна»',
            type: 'highball',
            src: require('../img/blue-lagoon.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
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
            likes: 0,
            count: 0,
            buy: 0,
            composition: 
                `Белый ром: 30,
            Malibu: 30,
            Ананасовый сок: 60,
            Сок лайма: 15,
            Гренадин: 10,
            Клубничный сироп: 10,`
            
        },
        {
            id: 9,
            title: '«Вишневый»',
            type: 'highball',
            src: '',
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Белый ром: 45,
            Вишневый сок: 60,
            Сахарный сироп: 15,
            Клубничный сироп: 15,`
        },
        {
            id: 10,
            title: '«Зеленая Фея»',
            type: 'highball',
            src: require('../img/green-fairy.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Белый ром: 15,
            Водка: 15,
            Серебряная текила: 15,
            Абсент: 15,
            Blue Curacao: 10,
            Лимонный сок: 30,
            Спрайт.`
        },
        {
            id: 11,
            title: '«Финская Заправка»',
            type: 'highball',
            src: require('../img/finka.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Абсент: 20,
            Водка: 20, 
            Cointreau: 20,
            Шотландский виски: 20, 
            Черносмородиновый сироп: 20, 
            Сок лайма: 20,
        },
        {
            id: 12,
            title: '«Сингапурский Слинг»',
            type: 'highball',
            src: require('../img/singapore-sling.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Джин: 30,
            Cointreau: 10,
            Ананасовый сок: 12,;
            Сок лайма: 15,
            Вишневый сироп: 15,
            Гренадин: 10,
            Angostura: дэ,        },
        {
            id: 13,
            title: '«Базиликовый Смэш»',
            type: 'old',
            src: require('../img/gin-basil-smash.jpg'),
            likes: 2,
            count: 0,
            buy: 0,
            composition: `Джин: 60,
            Сахарный сироп: 20,
            Лимонный сок: 30,
            Базилик.`
        },
        {
            id: 14,
            title: '«Брамбл»',
            type: 'old',
            src: require('../img/bramble.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Джин: 50,
            Сахарный сироп: 20,
            Лимонный сок: 20,
            Ликёр Шамбор: 20,`
        },
        {
            id: 15,
            title: '«Том Коллинз»',
            type: 'highball',
            src: require('../img/tom-collins.jpg'),
            likes: 10,
            count: 0,
            buy: 0,
            composition: `Джин: 50,
            Лимонный сок: 25,
            Сахарный сироп: 25,
            Содовая.`
        },
        {
            id: 16,
            title: '«Бульдог Маргарита»',
            type: 'highball',
            src: require('../img/bulldog-margarita.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Текила: 45,
            Cointreau: 25,
            Сок лайма: 30,
            Апельсиновый сок: 30,
            Сахарный сироп: 30,
            Пиво Корона: 1 ,лка (0,33 л).`
        },
        {
            id: 17,
            title: '«Секс на Пляже»',
            type: 'highball',
            src: require('../img/sex-on-the-beach.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Водка: 40,
            Персиковый ликер: 20,
            Апельсиновый сок: 40,
            Клюквенный сок: 40,`
        },
        {
            id: 18,
            title: '«Кейп Кодер»',
            type: 'highball',
            src: require('../img/cape-codder.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Водка: 50,            Клюквенный сок: 12,;
            Сахарный сироп: 15,
            Angostura: дэ,        },
        {
            id: 19,
            title: '«Космополитен»',
            type: 'cocktail',
            src: require('../img/cosmopolitan-2.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Водка: 45,
            Cointreau: 15,
            Сок лайма: 10,
            Клюквенный сок: 30,`
        },
        {
            id: 20,
            title: '«Маргарита»',
            type: 'cocktail',
            src: require('../img/tommys-margarita.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Серебряная текила: 40, 
            Cointreau: 20, 
            Сок лайма: 40, `
        },
        {
            id: 21,
            title: '«Дайкири»',
            type: 'cocktail',
            src: require('../img/daiquiri.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Белый ром: 45, 
            Сок лайма– 30 мл;
            Сахарный сироп: 15, `
        },
        {
            id: 22,
            title: '«Карусель»',
            type: 'cocktail',
            src: require('../img/merry-go-round.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Ром со специями: 40,
            Персиковый ликер: 15,
            Cointreau: 10,
            Лимонный сок: 15,
            Сидр полусухой: 40,`
        },
        {
            id: 23,
            title: '«Олд Кубан»',
            type: 'cocktail',
            src: require('../img/old-cuban.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Тёмный: 45,
            Сахарный сироп: 30,
            Angostura: дэ,           Сок лайма: 25,
            Игристое вино: 60,
            Мята.`
        },
        {
            id: 24,
            title: '«Мартинез»',
            type: 'cocktail',
            src: require('../img/martinez.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Джин: 60,
            Мартини Россо: 30,
            Вишневый сироп: 5 ,            Angostura: дэ,
        },
        {
            id: 25,
            title: '«Камикадзе»',
            type: 'shot',
            src: require('../img/kamikaze.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Водка: 30,
            Cointreau: 30,
            Лимонный сок: 30,`
        },
        {
            id: 26,
            title: '«Хиросима»',
            type: 'shot',
            src: require('../img/hiroshima.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `1 Самбука: 20,
            3 Абсент: 20,
            2 Baileys: 20,
            4 Гренадин: 5 ,
        },
        {
            id: 27,
            title: '«Медуза»',
            type: 'shot',
            src: require('../img/jellyfish.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `1 Malibu: 20,
            3 Белый ром: 20,
            4 Baileys: 5 ,            2 Cointreau: 20,
            5 Blue Curacao: 5 ,
        },
        {
            id: 28,
            title: '«Мимоза»',
            type: 'flute',
            src: require('../img/mimosa.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Игристое вино (Просекко или Шампанское) — 1 часть
            Апельсиновый сок  — 1 часть`
        },
        {
            id: 29,
            title: '«Шампань-коктейль»',
            type: 'flute',
            src: require('../img/champagne-cocktail.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Игристое вино : 10,;
            Angostura: дэ,           Сахар: 1 ,чек.    `
        },
        {
            id: 30,
            title: '«Френч 75»',
            type: 'flute',
            src: require('../img/french-75.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Джин: 30,
            Игристое вино –50 мл;
            Сахарный сироп: 15,
            Лимонный сок: 15,   `
        },
        {
            id: 31,
            title: '«Беллини»',
            type: 'flute',
            src: require('../img/bellini.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Проссеко: 10,;
            Персиковый сок: 50,`
        },
        {
            id: 32,
            title: '«Кир»',
            type: 'flute',
            src: require('../img/kir.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Белое вино — 9 частей
            Creme de cassis — 1 часть`
        },
        {
            id: 33,
            title: '«Русский весенний пунш»',
            type: 'highball',
            src: require('../img/russian-punch.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
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
            likes: 0,
            count: 0,
            buy: 0,
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
            likes: 0,
            count: 0,
            buy: 0,
            composition: `1 Гренадин: 15,            2 Самбука: 15,            3 Baileys: 15,            4 Абсент: 15,
        },
        {
            id: 36,
            title: '«Сталактит»',
            type: 'shot',
            src: require('../img/notstalactite.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Самбука: 40,            Baileys: 10,            Черносмородиновый сироп: 10,
        },
        {
            id: 37,
            title: '«Облака»',
            type: 'shot',
            src: require('../img/clouds.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `1 Самбука: 20,            2 Серебряная текила: 20,            5 Абсент: 10,            Blue Curacao: 3 ,           Baileys: 3 ,        },
        {
            id: 38,
            title: '«Б-52»',
            type: 'shot',
            src: require('../img/b52.jpg'),
            likes: 0,
            count: 0,
            buy: 0,
            composition: `Бейлис — 1 часть
            Калуа (кофейный ликёр) — 1 часть
            Куантро (или Трипл сек) — 1 часть`
        },
        ],
        photos: [
        {
            id: 1,
            src:require('../img/photo1.jpg'),
        },
        {
            id: 2,
            src:require('../img/photo2.jpg'),
        }, 
        {
            id: 3, 
            src:require('../img/photo3.jpg'),
        }, 
        {
            id: 4,
            src:require('../img/photo4.jpg'),
        }, 
        {
            id: 5,
            src:require('../img/photo5.jpg'),
        }
        ],
        cart: [],

    },
    mutations: {
        addToCart(state, item) {
            item.count++;
            state.cart.push(item);            
        },
        deleteItem(state, id) {
            state.cart[id].count = 0;
            state.cart.splice(id, 1);
        },
        plusCounter(state, id) {
            state.cart[id].count++;
        },
        minusCounter(state, id) {
            state.cart[id].count--;
        },
        buy(state, id) {
            state.cart[id].buy += state.cart[id].count;
        }
    },
    actions: {
        addToCart({ commit, state }, id) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == id) {
                    commit('plusCounter', i);
                    return;
                }
            }
            for (let item of state.cocktails) {
                if (item.id == id) {
                    commit('addToCart', item);
                    return;
                }
            }            
        },
        deleteItem({ commit }, id) {
            commit('deleteItem', id)
        },
        plusCounter({ commit, state }, id) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == id) {
                    commit('plusCounter', i);
                }
            }
        },
        minusCounter({ commit, state }, id) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == id && state.cart[i].count > 1) {
                    commit('minusCounter', i);
                    return;
                }
                if (state.cart[i].id == id && state.cart[i].count == 1) {
                    commit('deleteItem', i);
                    return;
                }
            }
        },
        buy({ commit, state }) {
            for (let i = state.cart.length: 1;, -1; i--) {
                commit('buy', i);
                console.log(`Всего куплено уже ${state.cart[i].buy} ${state.cart[i].title}`)
                commit('deleteItem', i);                
            }
        }
    },

});

export default store;
