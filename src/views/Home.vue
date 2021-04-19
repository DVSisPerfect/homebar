<template>
    <div class = 'container'>
        
        <div class = 'welcome'>
            <div class = 'welcome-block'>
                <div class = 'welcome-title'>Your friend's home bar</div>
                <a href="#top-cock" class = 'welcome-link'>Choose top cocktails</a>
            </div>
        </div>
        
        <div class = 'about'>
            <div class = 'about-title'>
                О баре DobroSan
            </div>
            <div class = 'about-description'>
                {{desc}}
            </div>
        </div>
        
        <div class = "photos" id="top-cock">
            <div v-for="photo in photos" :key="photo.id">
                <img class = "photo" :src="photo.src">
            </div>
        </div>
        
        <div class = 'top-stock'>
            <div class = "stock-title" >Best cocktails of all time</div>
            <div class = "cocktails">
                <div class = "top-cock" v-for="cocktail in stock" :key="cocktail.id">
                    <img class = 'cock-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                    <div class = 'cock-body'>
                        <h3 class = 'cock-title'>{{cocktail.title}}</h3>
                        <div class = 'cock-text'>{{cocktail.composition}}</div>                            
                    </div>                            
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import photos from "../store/main-photos.js";
import cocktails from '../store/cocktails.js';
export default {
    name: 'Home',
    data() {
        return {
            photos,
            cocktails,
            desc: `
                Добро пожаловать в домашний бар ваших друзей.
                Наслаждайтесь общением, вкусными напитками и закусками из нашего меню.
                Бар DobroSan – это сочетание добра и солнца на одной кухне.`,
            stock: [],
        
        }
    },

    mounted() {
        for (let cocktail of cocktails) {
            switch(cocktail.title) {
                case '«Том Коллинз»': 
                this.stock.push(cocktail);
                break;
                case '«Зомби»':
                this.stock.push(cocktail);
                break;
                case '«Базиликовый Смэш»':
                this.stock.push(cocktail);
                break;
            }
        }
    }
}
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Courier New, monospace, Verdana, Geneva, Tahoma, sans-serif;
}

.container {
    width: 100vw;
    margin-top: 200px;
    background-color: black;
}

.welcome {
    min-height: 600px;
    height: 1px;
    background-image: url('../img/home.jpg');    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
    background-size: cover;
}

.welcome-block {    
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
}

.welcome-title {
    color: whitesmoke;    
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
}

.welcome-link {
    color: whitesmoke;
    font-size: 24px;
}

.about {
    padding: 20px 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
}

.about-title {
    font-size: 40px;
    color: whitesmoke;
}

.about-description {
    max-width: 600px;
    font-size: 24px;
    color: whitesmoke;
}

.photos {
    padding: 80px;
    display: flex;
    justify-content: space-evenly;
}

.photo {
    height: 350px;
    object-fit: cover;
    object-position: 50% 50%;
}

.stock-title {
    color: whitesmoke;
    font-size: 30px;
    text-align: center;
}

.cocktails {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 100px;
}

.top-cock {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
}

.cock-img {
    width: 440px;
    height: 265px;
    object-fit: cover;
    object-position: 50% 50%;
    color: whitesmoke;
}

.cock-title {
    color: whitesmoke;
}

.cock-text {
    max-width: 300px;
    color: whitesmoke;
}
</style>