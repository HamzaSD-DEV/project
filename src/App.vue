<template>
  <div id="app">
    <div class="appliview">
      <NavbarView></NavbarView>
    </div> 
  </div>
</template>

<script>
import NavbarView from './views/NavbarView.vue';

export default {
    name: "App",
    components: {
        NavbarView,
    }
}
</script>

<style>
.appliview {
  background-image: url(./assets/back1.jpg);
    background-size: cover;
    background-position: center;
}
</style>
