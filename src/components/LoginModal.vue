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
              <v-text-field v-model="username" :label="$t('username')" prepend-inner-icon="account_box" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-modal="password" :label="$t('password')" prepend-inner-icon="lock" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions style="padding: 0 16px 16px 0;">
        <v-spacer/>
        <v-btn color="blue-grey" class="white--text" @click="$_LoginModal_clickBtn('register')">{{$t('register')}}</v-btn>
        <v-btn color="info" @click="$_LoginModal_clickBtn('login')">{{$t('login')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {login_by_username, popMessage} from '../utils'
  export default {
    name: "LoginModal",
    data() {
      return {
        dialog: false,
        username: '',
        password: ''
      }
    },
    methods: {
      $_LoginModal_clickBtn(action) {
        if (action === 'login') {
          if (this.$_LoginModal_try_to_login() === true) {
            this.close();
            this.$emit('loginSucceed');
          }
        }
        if (action === 'register') {
          this.close();
          this.$emit(action);
        }
      },
      $_LoginModal_try_to_login() {
        let data = login_by_username(this.username, this.password);
        if (data.status === '1') {
          popMessage(data.statement);
          return true;
        }
        else {
          popMessage(data.statement);
          return false;
        }
      },
      show() {
        this.dialog = true
      },
      close() {
        this.dialog = false
      }
    }
  }
</script>

<style scoped>

</style>
