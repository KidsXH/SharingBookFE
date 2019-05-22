<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title style="border-bottom: 1px solid darkgrey">
        <span class="headline">{{$t('hello')}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="user.username" :label="$t('username')" prepend-inner-icon="account_box" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="user.password" :label="$t('password')" prepend-inner-icon="lock" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="user.confirmPassword" :label="$t('confirmPassword')" prepend-inner-icon="lock" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="user.email" :label="$t('email')" prepend-inner-icon="lock" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions style="padding: 0 16px 16px 0;">
        <v-spacer/>
        <v-btn color="blue-grey" class="white--text" @click="dialog = false">{{$t('cancel')}}</v-btn>
        <v-btn color="info" @click="dialog = false">{{$t('submit')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "RegisterModal",
    data() {
      return {
        dialog: false,
        user: {
          username: '',
          password: '',
          confirmPassword: '',
          email: ''
        }
      }
    },
    methods: {
      show() {
        this.dialog = true
      }
    }
  }
</script>

<style scoped>

</style>
