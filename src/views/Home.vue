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
        
        <div class = "photos">
            <div v-for="photo in photos" :key="photo.id">
                <img class = "photo" :src="photo.src">
            </div>
        </div>        
        
        <div class = 'top-stock'>
            <div id="top-cock"></div>
            <div class = "stock-title" >Best cocktails of all time</div>
            <div class = "cocktails">
                <div class = "top-cock" v-for="cocktail in stock" :key="cocktail.id">
                    <img class = 'cock-img' :src="cocktail.src" alt="Здесь обязательно будет картинка :(">
                    <div class = 'cock-body'>
                        <h3 class = 'cock-title'>{{cocktail.title}}</h3>
                        <div class = 'cock-text' v-for="(prop, name) in cocktail.composition" :key="prop.id">
                            <div class = 'cock-text' v-if="name !== 'id'">{{name}}: {{prop}} мл</div>
                        </div>                             
                    </div>                            
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Home',
    data() {
        return {
            desc: `
                Добро пожаловать в домашний бар ваших друзей.
                Наслаждайтесь общением, вкусными напитками и закусками из нашего меню.
                Бар DobroSan – это сочетание добра и солнца на одной кухне.`,
            stock: [],
        
        }
    },

    computed: {
        ...mapState(['photos', 'cocktails'])
    },

    mounted() {
        let max1 = 0;
        let max1id = 0;
        let max2 = 0;
        let max2id = 1;
        let max3 = 0;
        let max3id = 2;
        for (let i=0; i<this.cocktails.length; i++) {                
            if (this.cocktails[i].likes > max1) {
                max3 = max2;
                max3id = max2id;
                max2 = max1;
                max2id = max1id;
                max1 = this.cocktails[i].likes;
                max1id = i;                
            } else if (this.cocktails[i].likes > max2) {
                max3 = max2;
                max3id = max2id;
                max2 = this.cocktails[i].likes;
                max2id = i;
            } else if (this.cocktails[i].likes > max3) {
                max3 = this.cocktails[i].likes;
                max3id = i;
            }                            
        }
        this.stock.push(this.cocktails[max1id], this.cocktails[max2id], this.cocktails[max3id]);
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
    padding: 50px 0px 20px;
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

.top-stock {
    position: relative;
}

#top-cock {
    position: absolute;
    top: -200px;
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
    text-align: center;
}

.cock-text {
    max-width: 300px;
    color: whitesmoke;
    text-align: center;
}

</style>