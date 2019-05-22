<template>
  <v-card>
    <v-card-title style="border-bottom: 1px solid darkgrey">
      <span class="headline">{{$t('hello')}}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="username"
                          :label="$t('username')"
                          prepend-inner-icon="account_box"
                          required>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="password"
                          :label="$t('password')"
                          prepend-inner-icon="lock"
                          required>
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions style="padding: 0 16px 16px 0;">
      <v-spacer/>
      <v-btn color="blue-grey" class="white--text" @click="$_LoginModal_handleRegister">{{$t('register')}}
      </v-btn>
      <v-btn color="info" @click="$_LoginModal_handleLogin">{{$t('login')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import {popMessage} from '../utils'
  import utils from '../utils'

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      ...mapActions(['changeModalStatus']),
      $_LoginModal_handleRegister() {
        this.close();
        this.$emit('register');
      },
      $_LoginModal_handleLogin() {
        utils.login({
          username: this.username,
          password: this.password,
        }).then(res => {
          if (res.status === 201) {
            popMessage(res.data.message);
            this.changeModalStatus({visible: false});
          } else {
            popMessage('Fail: ' + res.data.message);
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
