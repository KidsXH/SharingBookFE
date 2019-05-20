<template>
  <v-toolbar app>
    <v-toolbar-title class="nav-title">
      <router-link to="home" tag="span" style="cursor: pointer">
        {{$t('hello')}}{{passValue}}
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
    <search-input
            @sendValueToParent = "getValueFromChild"
    />

    <login-button @register="showRegisterModal" />
    <register-modal ref="registerModal"/>
    <Books
        ref="myBooks"
        parentToChild= "passValue"
        v-show="false"
    >
    </Books>
  </v-toolbar>
</template>

<script>
  import SearchInput from "./SearchInput";
  import LoginButton from "./LoginButton";
  import RegisterModal from "./RegisterModal";
  import Books from "../views/Books";
  export default {
    name: "NavigationBar",
    components: {Books, RegisterModal, LoginButton, SearchInput},
    data() {
      return {
        passValue: "",
        items: [
          { title: 'recommendations', path: '/recommendations' },
          { title: 'rankLists', path: '/rankLists' },
          { title: 'books', path: '/books' },
          { title: 'authors', path: '/authors'}
        ]
      }
    },
    methods: {
      getValueFromChild(value) {
        this.passValue = value;
        //this.$refs.myBooks.test(this.passValue);
        this.$refs.myBooks.add(this.passValue);
      },
      showRegisterModal() {
        this.$refs.registerModal.show()
      },
    }
  }
</script>

<style scoped>
  .nav-title {
    padding-right: 24px;
  }
</style>
