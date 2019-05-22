<template>
  <v-card>
    <v-btn @click="clickBtnLogout">Log out</v-btn>
  </v-card>
</template>

<script>
  import { mapActions } from 'vuex'
  import api from '../utils/axios'

  export default {
    name: "ProfileCard",
    methods: {
      ...mapActions(['clearProfile', 'changeModalStatus']),
      clickBtnLogout() {
        api.logout().then(
          res => {
            if (res.status === 200) {
              alert('OK');
              this.clearProfile();
              this.changeModalStatus({visible: false})
            }
            else {
              alert('Fail');
            }
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
