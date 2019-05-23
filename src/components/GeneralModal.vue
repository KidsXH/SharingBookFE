<template>
  <v-dialog v-model="modalVisible" width="500px">
    <component :is="modalStatus.mode"></component>
  </v-dialog>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import login from './Login'
  import register from './Register'
  import profile from './ProfileCard'
  import bookDetail from './BookDetailCard'

  export default {
    name: "GeneralModal",
    components: {
      login,
      register,
      profile,
      bookDetail,
    },
    computed: {
      ...mapState(['modalStatus']),
      modalVisible: {
        get () {
          return this.modalStatus.visible
        },
        set (value) {
          this.changeModalStatus({visible: value})
        }
      }
    },
    methods: {
      ...mapActions(['changeModalStatus']),
    }
  }
</script>

<style scoped>

</style>
