<template>
  <v-app>
    <NavigationBar />

    <v-content>
      <router-view />
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
