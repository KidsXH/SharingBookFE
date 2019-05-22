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
  import { mapState, mapActions } from 'vuex'
  import api from '../utils/axios'

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    computed: {
      ...mapState(['isAuth'])
    },
    methods: {
      ...mapActions(['changeModalStatus', 'getProfile']),
      $_LoginModal_handleRegister() {
        this.changeModalStatus({visible: false}).then(
          () => {
            this.changeModalStatus({mode: 'register', visible: true});
          }
        )
      },
      $_LoginModal_handleLogin() {
        api.login({
          username: this.username,
          password: this.password,
        }).then(res => {
          if (res.status === 201) {
            alert(res.data.message);
            this.getProfile();
            this.changeModalStatus({visible: false});
          } else {
            alert('Fail: ' + res.data.message);
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
