<template>
  <v-app id="app">
    <navigation-bar />
    <v-content>
      <router-view />
    </v-content>
    <v-footer />
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: 'App',
  components: {
    NavigationBar
  },
}
</script>

<style scoped>
  #app {
    font-family: sans-serif;
  }
  .fadeInUp-enter-active {
    animation: fadeInUp .8s;
  }
</style>
