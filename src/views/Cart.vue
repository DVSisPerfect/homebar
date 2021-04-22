<template>
    <div class = 'container'>
        <div class = 'cart-title'>Корзина</div>

        <div class = 'cart' v-if="cart.length !== 0">
            <div class = 'cart-item' >
                <h3 class = 'img-header'>Здесь будет картинка коктейля</h3>    
                <h3 class = 'title-header'>Название коктейля</h3>
                <h3 class = 'title-header'>Количество</h3>
                <h3 class = 'title-header'></h3>
            </div>
            <div class = 'cart-item' v-for="(item, index) in cart" :key="item.id">
                <img class = 'item-img' :src="item.src" alt="Здесь обязательно будет картинка :(">                    
                <h3 class = 'item-title'>{{item.title}}</h3>
                <div class = 'item-counter'>
                    <button class = 'counter' @click="plusCounter(item.id)">+</button>
                    <h3 class = 'item-count'>{{item.count}}</h3>
                    <button class = 'counter' @click="minusCounter(item.id)">-</button>
                </div>
                <button class = 'item-delete' @click="deleteItem(index)">Удалить</button>
            </div>
            <button class = 'cart-buy' @click="buy()">Купить</button>
        </div>

        <div class = 'cart-title' v-else>Здесь будет ваша корзина, только закажите :)</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Cart',

    data() {
        return {
            
        }
    },

    computed: {
        ...mapState(['cocktails', 'cart']),
    },

    methods: {
        ...mapActions(['deleteItem', 'plusCounter', 'minusCounter', 'buy']),
    }
}
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Courier New, monospace, Verdana, Geneva, Tahoma, sans-serif;
}

.container{
    width: 100vw;
    min-height: 100vh;
    margin-top: 55px;    
    background-color: black;
}

.cart-title {
    padding-top: 30px;
    color: whitesmoke;
    font-size: 30px;
    text-align: center;
}

.cart {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart-item {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;   
}

.img-header, .title-header {
    color: whitesmoke;
    text-align: center;
}

.img-header {
    width: 440px;
}

.title-header {    
    min-width: 300px;
}

.item-img {
    width: 440px;
    height: 265px;
    object-fit: cover;
    object-position: 50% 50%;
    color: whitesmoke;
}

.item-title {
    min-width: 300px;
    color: whitesmoke;
    text-align: center;
}

.item-counter {
    min-width: 300px;
    display: flex;
    justify-content: space-evenly;
}

.item-count {
    color: whitesmoke;
    text-align: center;
}

.counter {
    background-color: black;
    color: whitesmoke;
}

.item-delete {
    min-width: 300px;
    background-color: black;
    border-color:black;
    color: whitesmoke;
}

.cart-buy {
    max-width: 300px;
    margin-top: 30px;
    padding: 10px 70px;
    background: rgb(134, 53, 29);
    color: whitesmoke;
    text-align: center;
    font-size: 24px;
}

</style>