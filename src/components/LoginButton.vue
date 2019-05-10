<template>
  <div>
    <v-btn flat icon @click.stop="$refs.loginModal.show()" >
      <v-icon>account_circle</v-icon>
    </v-btn>
    <login-modal ref="loginModal" @register="$emit('register')"/>
  </div>

</template>

<script>
  import LoginModal from "./LoginModal";
  export default {
    name: "LoginButton",
    components: {LoginModal},
    data() {
      return {
        dialog: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
