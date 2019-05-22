<template>
  <v-card>
    <v-btn @click="clickBtnLogout">Log out</v-btn>
  </v-card>
</template>

<script>
  import api from '../utils/axios'

  export default {
    name: "ProfileCard",
    methods: {
      clickBtnLogout() {
        api.logout().then(
          res => {
            if (res.status === 200) {
              alert('OK')
            }
            else {
              alert('Fail')
            }
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
