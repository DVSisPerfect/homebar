<template>
    <div class = 'container'>
        
        <section class = 'cards-section' >
            <div class = 'cards-pre'>
                <h1 class = 'cards-title'>Best cocktails of all time</h1>
                <div class = 'cards-description'>Don't know what to choose - use our 
                    <router-link to="/roulette" class = 'cards-description'>Russian roulette</router-link>
                </div>
            </div>

            <div class = 'cards highballs'>                    
                <div class = 'cards-row'>
                    <h1 class = 'cards-header'>«Highball»</h1>
                    <div class = 'card' v-for="cocktail in test" :key="cocktail.id">
                        <img class = 'card-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                        <div class = 'card-body'>
                            <h3 class = 'card-title'>{{cocktail.title}}</h3>
                            <div class = 'card-text' v-for="(prop, name) in cocktail.composition" :key="prop.id">
                                <div class = 'card-text' v-if="name !== 'id'">{{name}}: {{prop}}мл</div>
                            </div>                            
                        </div>
                        <button class = 'card-button' @click="addToCart(cocktail.id)" v-if="cocktail.count == 0">
                            <div class = 'card-link' >Try me</div>
                        </button>
                        <div class = 'card-counter' v-else>
                            <button class = 'counter' @click="plusCounter(cocktail.id)">+</button>
                            <h3 class = 'card-count'>{{cocktail.count}}</h3>
                            <button class = 'counter' @click="minusCounter(cocktail.id)">-</button>
                        </div>
                    </div>
                </div>                 
            </div>

            <div class = 'cards highballs'>                    
                <div class = 'cards-row'>
                    <h1 class = 'cards-header'>«Highball»</h1>
                    <div class = 'card' v-for="cocktail in highballs" :key="cocktail.id">
                        <img class = 'card-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                        <div class = 'card-body'>
                            <h3 class = 'card-title'>{{cocktail.title}}</h3>
                            <div class = 'card-text'>{{cocktail.composition}}</div>                            
                        </div>
                        <button class = 'card-button' @click="addToCart(cocktail.id)" v-if="cocktail.count == 0">
                            <div class = 'card-link' >Try me</div>
                        </button>
                        <div class = 'card-counter' v-else>
                            <button class = 'counter' @click="plusCounter(cocktail.id)">+</button>
                            <h3 class = 'card-count'>{{cocktail.count}}</h3>
                            <button class = 'counter' @click="minusCounter(cocktail.id)">-</button>
                        </div>
                    </div>
                </div>                 
            </div>

            <div class = 'cards flutes'>                   
                <div class = 'cards-row'>
                    <h1 class = 'cards-header'>«Le Champagne»</h1>
                    <div class = 'card' v-for="cocktail in flutes" :key="cocktail.id">
                        <img class = 'card-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                        <div class = 'card-body'>
                            <h3 class = 'card-title'>{{cocktail.title}}</h3>
                            <div class = 'card-text'>{{cocktail.composition}}</div>                            
                        </div>
                        <button class = 'card-button' @click="addToCart(cocktail.id)" v-if="cocktail.count == 0">
                            <div class = 'card-link' >Try me</div>
                        </button>
                        <div class = 'card-counter' v-else>
                            <button class = 'counter' @click="plusCounter(cocktail.id)">+</button>
                            <h3 class = 'card-count'>{{cocktail.count}}</h3>
                            <button class = 'counter' @click="minusCounter(cocktail.id)">-</button>
                        </div>
                    </div>
                </div>                 
            </div>

            <div class = 'cards olds'>
                <div class = 'cards-row'>
                    <h1 class = 'cards-header'>«Roxxane»</h1>
                    <div class = 'card' v-for="cocktail in olds" :key="cocktail.id">
                        <img class = 'card-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                        <div class = 'card-body'>
                            <h3 class = 'card-title'>{{cocktail.title}}</h3>
                            <div class = 'card-text'>{{cocktail.composition}}</div>                            
                        </div>
                        <button class = 'card-button' @click="addToCart(cocktail.id)" v-if="cocktail.count == 0">
                            <div class = 'card-link' >Try me</div>
                        </button>
                        <div class = 'card-counter' v-else>
                            <button class = 'counter' @click="plusCounter(cocktail.id)">+</button>
                            <h3 class = 'card-count'>{{cocktail.count}}</h3>
                            <button class = 'counter' @click="minusCounter(cocktail.id)">-</button>
                        </div>
                    </div>
                </div>                 
            </div>

            <div class = 'cards shots'>
                <div class = 'cards-row'>
                    <h1 class = 'cards-header'>«Sho ti»</h1>
                    <div class = 'card' v-for="cocktail in shots" :key="cocktail.id">
                        <img class = 'card-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                        <div class = 'card-body'>
                            <h3 class = 'card-title'>{{cocktail.title}}</h3>
                            <div class = 'card-text'>{{cocktail.composition}}</div>                            
                        </div>
                        <button class = 'card-button' @click="addToCart(cocktail.id)" v-if="cocktail.count == 0">
                            <div class = 'card-link' >Try me</div>
                        </button>
                        <div class = 'card-counter' v-else>
                            <button class = 'counter' @click="plusCounter(cocktail.id)">+</button>
                            <h3 class = 'card-count'>{{cocktail.count}}</h3>
                            <button class = 'counter' @click="minusCounter(cocktail.id)">-</button>
                        </div>
                    </div>
                </div>                 
            </div>

        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
/*eslint-disabled*/
export default {
    name: 'Cocktails',

    data() {
        return {
            highballs: [],
            flutes: [],
            olds: [],
            shots: [],
            test: [
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
            ]
        }
    },

    computed: {
        ...mapState(['cocktails'])
    },

    
    mounted() {
        for (let cocktail of this.cocktails) {
            switch(cocktail.type) {
                case 'highball':
                    this.highballs.push(cocktail);
                    break;
                case 'flute':
                    this.flutes.push(cocktail);
                    break;
                case 'old':
                    this.olds.push(cocktail);
                    break;
                case 'shot':
                    this.shots.push(cocktail);
                    break;
            }
        }
    },

    methods: {
        ...mapActions(['addToCart', 'plusCounter', 'minusCounter']),
    },

};
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Courier New, monospace, Verdana, Geneva, Tahoma, sans-serif;
}

.container{
    width: 100vw;
    height: 100vh;
    margin-top: 55px;    
    background-color: black;
}

.cards-pre {
    padding: 15px 0;
}

.cards-title, .cards-description{
    color: whitesmoke;
    text-align: center;
}

.cards-row{
    padding: 20px 50px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.7);
}

.cards { 
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

.cards-header {
    position: absolute;
    margin-top: -10px;
    color: whitesmoke;
    text-align: center;
    z-index: 98;
    font-size: 36px;
}

.highballs {    
    background-image: url('../img/highball.jpg');   
}

.flutes {
    background-image: url('../img/flute.jpg');
}

.shots {
    background-image: url('../img/shots.jpg');
}

.olds {
    background-image: url('../img/olds.jpg');
}
.card{
    min-height: 100%;
    padding: 25px;
    margin-top: 25px;
    width: 25%;
    background: transparent;
    text-align: center;    
    display: flex;
    flex-direction: column;
}

.card-img{
    width: 440px;
    height: 265px;
    object-fit: cover;
    object-position: 50% 50%;
    color: whitesmoke;
}

.card-body {
    flex: 1 1 auto;
}

.card-title, .card-text{
    margin-bottom: 10px;
    color: whitesmoke;
}

.card-button{
    text-align: center;
    background: rgb(134, 53, 29);
    padding: 10px 70px;
    border-radius: 10px;
    cursor: pointer;
}

.card-counter {
    max-height: 39px;
    box-shadow: -3px -3px 1px rgb(90, 90, 90);
    background: rgb(134, 53, 29);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.card-count {
    color: whitesmoke;
}

.counter {
    background: rgb(134, 53, 29);
    color: whitesmoke;
}

.card-link{
    text-decoration: none;
    color: whitesmoke;
}

</style>
