<template>
  <div id="home-view">
    <v-container text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 class="blank-row"/>
        <v-flex xs12>
          <h1 class="font-weight-light">{{$t('hello')}}</h1>
          <p class="font-weight-thin grey--text">{{$t('hello')}}</p>
        </v-flex>
        <v-flex xs12 class="blank-row"/>
        <v-flex xs12>
          <div class="separate-line"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #home-view {
    text-align: center;
    font-family: sans-serif;
    font-size: 3rem;
  }
</style>
