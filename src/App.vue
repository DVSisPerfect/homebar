<template>
  <div>    
      <navigation-menu/>
      <router-view/>
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
body {
  margin: 0px;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
