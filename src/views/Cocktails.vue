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
import cocktails from '../store/cocktails';
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
a.router-link-active, li.router-link-active>a {
  font-weight: bold;
}
</style>
