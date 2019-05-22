<template>
  <v-card>
    <v-card-title style="border-bottom: 1px solid darkgrey">
      <span class="headline">{{$t('hello')}}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="user.username" :label="$t('username')" prepend-inner-icon="account_box"
                          required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="user.password" :label="$t('password')" prepend-inner-icon="lock"
                          required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="user.confirmPassword" :label="$t('confirmPassword')" prepend-inner-icon="lock"
                          required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="user.email" :label="$t('email')" prepend-inner-icon="mail" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions style="padding: 0 16px 16px 0;">
      <v-spacer/>
      <v-btn color="blue-grey" class="white--text" @click="clickBtnCancel">{{$t('cancel')}}</v-btn>
      <v-btn color="info" @click="clickBtnSubmit">{{$t('submit')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapActions } from 'vuex'
  import utils from '../utils/axios'

  export default {
    name: "Register",
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
      ...mapActions(['changeModalStatus']),
      clickBtnSubmit() {
        utils.register({
          username: this.user.username,
          password: this.user.password,
          email: this.user.email,
        }).then(res => {
            if (res.status === 201) {
              alert(res.data.message);
              this.changeModalStatus({visible: false})
            }
            else {
              alert('Fail: ' + res.data.message)
            }
          }
        );
      },
      clickBtnCancel() {
        this.changeModalStatus({visible: false})
      }
    }
  }
</script>

<style scoped>

</style>
