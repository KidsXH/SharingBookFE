<template>
  <v-app>
    <navigation-bar />
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
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
