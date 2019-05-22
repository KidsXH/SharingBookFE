<template>
  <v-dialog v-model="modalVisible" width="500px">
    <component :is="modalStatus.mode"></component>
  </v-dialog>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import login from './Login'
  export default {
    name: "GeneralModal",
    components: {
      login
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
      ...mapActions['changeModalStatus']
    }
  }
</script>

<style scoped>

</style>
