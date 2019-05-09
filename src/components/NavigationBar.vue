<template>
  <v-toolbar app>
    <v-toolbar-title class="nav-title">
      <router-link to="home" tag="span" style="cursor: pointer">
        {{$t('hello')}}
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        class="nav-btn"
        flat
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        color="grey darken-1"
      >
        {{$t(item.title)}}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <SearchInput />
    <AccountButton />
  </v-toolbar>
</template>

<script>
  import SearchInput from "./SearchInput";
  import AccountButton from "./LoginButton";
  export default {
    name: "NavigationBar",
    components: {AccountButton, SearchInput},
    data() {
      return {
        items: [
          { title: 'recommendations', path: '/recommendations' },
          { title: 'bookLists', path: '/bookLists' },
          { title: 'rankLists', path: '/rankLists' },
          { title: 'books', path: '/books' },
          { title: 'authors', path: '/authors'}
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-title {
    padding-right: 24px;
  }
</style>
