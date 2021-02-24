<template>
  <div id="app">
    <div class="header">
      <navigation-menu/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu';

export default {
  name: 'App',
  components: {
    NavigationMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*{
    scroll-behavior: smooth;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin:0;
    padding: 0;
}

.container{
    max-width: 1140px;  
    padding: 0 15px;
    margin: 0 auto;
}

/* HEADER */

.logo-img{
    max-height: 200px;
}
.header{
    color: white;
    padding: 20px;
    background: #a55248;
}

.menu-item{
    list-style: none;
}

.menu-link{
    font-family: Courier New, monospace;
    font-size: 24px;
    color: #140c12;
    text-decoration: none;
}

.menu-link{
    text-transform: uppercase;
    font-weight: bold;
}

/* BANNER */

.banner-section{
    padding: 50px 0;
    background: #74250e;
    background-size: cover;
    background-position: center;
}

.banner-title{
    font-size: 48px;
}
.banner-title, .banner-description{
    text-align: center;
    color: #140c12;
}

/* CARDS */

.cards-section{
    padding: 50px 0px;
    background: #a55248;
}

.cards-title, .cards-description{
    color: #140c12;
    text-align: center;
}

.card{
    padding: 25px;
    margin-top: 25px;
    width: 25%;
    background: #a55248;
    box-shadow: 0px 2px 7px 0px #2a090a;
    text-align: center;
}

.card-img{
    width: 100%;
}

.card-link{
    text-decoration: none;
    color: white;
}

.card-button{
    text-align: center;
    background: #2a090a;
    padding: 10px 70px;
    border-radius: 10px;
}


.card-title, .card-text{
    margin-bottom: 10px;
}

.card-button{
    cursor: pointer;
}

/* FOOTER */

.footer{
    background: #74250e;
    background-size: cover;
    padding: 100px 0px;
}

.copyright{
    color: white;
}

/* FLEX */
/* HEADER */
.menu{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.header-row{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header-logo{
    display: flex;
    flex-direction: row;   
    align-items: center;
    flex-grow: 1;
}

.logo-img{
    margin-right: 40px;
}

.header-menu{
    flex-grow: 3;
}

/* CARDS */

.cards-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

/* FOOTER */

.footer-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.social-networks{
    display: flex;
    justify-content: flex-end;
}

.footer-logo{
    margin: 10px;
    width: 60px;
    height: 60px;
}

.footer-search{
    display: flex;
    justify-content: space-between;
    margin-top:30px;
    align-items: center;
}

.footer-search-input{
    height: 40px;
    flex-grow: 3;
    margin-right: 20px;
    border-radius: 10px;
    border: none;
}

.footer-search-button{
    height: 40px;
    flex-grow: 2;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
}

</style>
