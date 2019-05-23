<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <selection-card/>
      </v-flex>
      <v-flex xs12 pa-2/>
      <v-flex xs12>
        <book-grid-list :books="books.bookList" pagination/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import SelectionCard from "../components/SelectionCard";
  import BookGridList from "../components/BookGridList";

  export default {
    components: {BookGridList, SelectionCard},
    data() {
      return {}
    },
    created() {
      this.searchBooks()
    },
    computed: {
      ...mapState(['books']),
    },
    methods: {
      ...mapActions(['searchBooks'])
    },
  }
</script>

<style scoped>

</style>
