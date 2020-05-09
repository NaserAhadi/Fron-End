<template>
  <v-app>
    <AppBar/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import AppBar from './components/AppBar.vue';
  import Footer from './components/Footer.vue';

  export default{
    name:'App',
    components:{
      AppBar,
      Footer
    }
  }
</script>
<style lang="scss">
  a{
    color:#fff;
    text-decoration: none;
  }
</style>
