<template>
        <div class = 'container'>
            
            <div class = 'cards-section' >
                <div class = 'cards-pre'>
                    <h1 class = 'cards-title'>Best cocktails of all time</h1>
                    <div class = 'cards-description'>Don't know what to choose - use our <a href = '#' class = 'cards-description'>Russian roulette</a></div>
                </div>

                <div class = 'cards highballs'>
                    <div class = 'cards-row'>
                        <div class = 'card' v-for="cocktail in highballs" :key="cocktail.id">
                            <img class = 'card-img' :src="cocktail.src">
                            <div class = 'card-body'>
                                <h3 class = 'card-title'>{{cocktail.title}}</h3>
                                <div class = 'card-text'>{{cocktail.composition}}
                                    </div>
                                <div class = 'card-button'>
                                    <a class = 'card-link'>Try me</a>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>

                <div class = 'cards flutes'>
                    <div class = 'cards-row'>
                        <div class = 'card' v-for="cocktail in flutes" :key="cocktail.id">
                            <img class = 'card-img' :src="cocktail.src">
                            <div class = 'card-body'>
                                <h3 class = 'card-title'>{{cocktail.title}}</h3>
                                <div class = 'card-text'>{{cocktail.composition}}
                                    </div>
                                <div class = 'card-button'>
                                    <a class = 'card-link'>Try me</a>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>

                <div class = 'cards olds'>
                    <div class = 'cards-row'>
                        <div class = 'card' v-for="cocktail in olds" :key="cocktail.id">
                            <img class = 'card-img' :src="cocktail.src">
                            <div class = 'card-body'>
                                <h3 class = 'card-title'>{{cocktail.title}}</h3>
                                <div class = 'card-text'>{{cocktail.composition}}
                                    </div>
                                <div class = 'card-button'>
                                    <a class = 'card-link'>Try me</a>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>

                <div class = 'cards shots'>
                    <div class = 'cards-row'>
                        <div class = 'card' v-for="cocktail in shots" :key="cocktail.id">
                            <img class = 'card-img' :src="cocktail.src">
                            <div class = 'card-body'>
                                <h3 class = 'card-title'>{{cocktail.title}}</h3>
                                <div class = 'card-text'>{{cocktail.composition}}
                                    </div>
                                <div class = 'card-button'>
                                    <a class = 'card-link'>Try me</a>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>

            </div>
        </div>
</template>

<script>
import cocktails from '../store/cocktails.js';
/*eslint-disabled*/
export default {
    name: 'Cocktails',

    data: function () {
        return {
            cocktails,
            highballs: [],
            flutes: [],
            olds: [],
            shots: [],
        }
    },

    mounted() {
        for (let cocktail of cocktails) {
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
    }

};
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
    padding: 0 50px;
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

.highballs {    
    background-image: url('../img/homecocktail.jpg');   
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
    padding: 25px;
    margin-top: 25px;
    width: 25%;
    background: transparent;
    text-align: center;
}

.card-img{
    width: 440px;
    height: 265px;
    object-fit: cover;
    object-position: 50% 50%;
}

.card-title, .card-text{
    margin-bottom: 10px;
    color: whitesmoke;
}

.card-button{
    text-align: center;
    background: #2a090a;
    padding: 10px 70px;
    border-radius: 10px;
    cursor: pointer;
}

.card-link{
    text-decoration: none;
    color: white;
}

</style>
