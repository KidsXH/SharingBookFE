<template>
  <v-card>
    <v-btn @click="clickBtnLogout">Log out</v-btn>
  </v-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import api from '../utils/axios'

  export default {
    name: "ProfileCard",
    methods: {
      ...mapActions(['clearProfile', 'changeModalStatus']),
      clickBtnLogout() {
        api.logout().then(
          () => {
            this.clearProfile();
            this.changeModalStatus({visible: false})
          },
          err => {
            alert(err)
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
