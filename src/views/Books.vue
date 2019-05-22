<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <selection-card/>
      </v-flex>
      <v-flex xs12 pa-2/>
      <v-flex xs12>
        <book-grid-list :books="bookList" pagination/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  import SelectionCard from "../components/SelectionCard";
  import BookGridList from "../components/BookGridList";

  export default {
    components: {BookGridList, SelectionCard},
    data() {
      return {}
    },
    computed: {
      ...mapState(['bookList']),
    },
  }
</script>

<style scoped>

</style>
