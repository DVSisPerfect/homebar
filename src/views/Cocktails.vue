<template>
        <div class = 'cards-section'>
            <div class = 'container' >
                <div class = 'cards-text'>
                    <h1 class = 'cards-title'>Best cocktails of all time</h1>
                    <div class = 'cards-description'>Don't know what to choose - use our <a href = '#' class = 'cards-description'>Russian roulette</a></div>
                </div>

                <div class = 'cards'>
                    <div class = 'cards-row'>
                        <div class = 'card' v-for="cocktail in cocktails" :key="cocktail.id">
                            <img class = 'card-img' :src="cocktail.src">
                            <div class = 'card-body'>
                                <h3 class = 'card-title'>{{cocktail.title}}</h3>
                                <div class = 'card-text'>{{cocktail.composition}}
                                    </div>
                                <div class = 'card-button'>
                                    <a class = 'card-link' href = '#'>View Details</a>
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
    max-width: 1140px;  
    padding: 0 15px;
    margin: 0 auto;
}

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
    cursor: pointer;
}

.card-title, .card-text{
    margin-bottom: 10px;
}

.cards-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
