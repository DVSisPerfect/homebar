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
a.router-link-active, li.router-link-active>a {
  font-weight: bold;
}
</style>
