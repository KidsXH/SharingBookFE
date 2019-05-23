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
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  created() {
    this.getProfile()
  },
  methods: {
    ...mapActions(['getProfile'])
  }
}
</script>

<style scoped>
  #app {
    font-family: sans-serif;
  }
</style>
