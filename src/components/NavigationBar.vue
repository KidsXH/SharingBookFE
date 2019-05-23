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

    <search-input/>

    <v-btn flat outline @click.stop="clickBtnProfile" color="primary" v-if="isAuth">
      <v-icon left>account_circle</v-icon>
      {{$t('profile')}}
    </v-btn>
    <v-btn flat outline @click.stop="clickBtnLogin" v-else>
      <v-icon left>account_circle</v-icon>
      {{$t('login')}}
    </v-btn>

    <general-modal />
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SearchInput from "./SearchInput";
  import GeneralModal from "./GeneralModal";

  export default {
    name: "NavigationBar",
    components: {GeneralModal, SearchInput},
    data() {
      return {
        items: [
          { title: 'recommendations', path: '/recommendations' },
          { title: 'rankLists', path: '/rankLists' },
          { title: 'books', path: '/books' },
          // { title: 'authors', path: '/authors'}, Incomplete part
        ]
      }
    },
    computed: {
      ...mapGetters(['isAuth'])
    },
    methods: {
      ...mapActions(['changeModalStatus']),
      clickBtnLogin() {
        this.changeModalStatus({mode: 'login', visible: true});
      },
      clickBtnProfile() {
        this.changeModalStatus({mode: 'profile', visible: true});
      },
    }
  }
</script>

<style scoped>
  .nav-title {
    padding-right: 24px;
  }
</style>
