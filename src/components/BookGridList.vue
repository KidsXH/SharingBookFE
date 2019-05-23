<template>
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex xs12 pa-2 v-if="title != null">
        <div class="headline">{{$t(title)}}</div>
      </v-flex>
      <v-flex
        v-for="book in books"
        :key="book.book_name"
        xs12 sm6 md4 lg3
        pa-2
      >
        <book-card :book="book"/>
      </v-flex>
    </v-layout>
    <v-layout v-if="pagination === true" justify-end>
      <v-pagination
        v-model="page"
        :length="4"
      ></v-pagination>
    </v-layout>
  </v-container>
</template>

<script>
  import BookCard from "./BookCard";
  export default {
    name: "BookGridList",
    components: {BookCard},
    props: {
      books: Array,
      title: {
        type: Array,
        default: null
      },
      pagination: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>

</style>
