<template>
    <div class = 'container'>
        <header class = 'header-row'>
            <div class = 'header-logo' >
                <img class = 'logo-img' src='../img/logo.png' v-if="currentRoute == 'Home'">
                <div class = 'menu-item menu-link' v-else>Dobrosan</div>
            </div>
            <nav class = 'header-menu'>
                <ul class = 'menu'>
                    <li class = 'menu-item'><router-link to="/" exact class = 'menu-link'>Home</router-link></li>
                    <li class = 'menu-item'><router-link to="/roulette" class = 'menu-link'>Russian Roulette</router-link></li>
                    <li class = 'menu-item'><router-link to="/cocktails" class = 'menu-link'>Cocktails</router-link></li>
                    <li class = 'menu-item'><router-link to="/cart" class = 'menu-link'>Cart</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'NavigationMenu',
        
    data() {
        return {
        }
    },

    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
};
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}


.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    background-color: black;
    z-index: 99;
}

.header-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    
}

.logo-img {
    max-height: 200px;
    filter: invert(100%);
}

.menu {
    width: 100%;
    min-width: 600px;
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.menu-item {
    list-style: none;
}

.menu-link {
    font-family: Courier New, monospace;
    font-size: 24px;
    color: whitesmoke;
    text-decoration: none;    
    text-transform: uppercase;
    font-weight: bold;
}

a.router-link-active {
    color:rgb(134, 53, 29);
}
</style>
