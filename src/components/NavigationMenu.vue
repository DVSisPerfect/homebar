<template>
    <div class = 'container'>
        <div class = 'header-row'>
          <div class = 'header-logo'>
            <img class = 'logo-img' src='../img/logo.png'>
          </div>
          <div class = 'header-menu'>
            <ul class = 'menu'>
              <li class = 'menu-item'><router-link to="/" exact class = 'menu-link'>Home</router-link></li>
              <li class = 'menu-item'><router-link to="/roulette" class = 'menu-link'>Russian Roulette</router-link></li>
              <li class = 'menu-item'><router-link to="/cocktails" class = 'menu-link'>Cocktails</router-link></li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
};
</script>

<style scoped>
*{
    scroll-behavior: smooth;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
    margin: 0 auto;
    background-color: black;
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
</style>
