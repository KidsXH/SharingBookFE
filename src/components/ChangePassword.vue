<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title style="border-bottom: 1px solid darkgrey">
                <span class="headline">{{$t('changePassword')}}</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="password" :label="$t('past_password')" prepend-inner-icon="account_box" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-modal="password" :label="$t('password')" prepend-inner-icon="lock" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-modal="password" :label="$t('confirmPassword')" prepend-inner-icon="lock" required></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions style="padding: 0 16px 16px 0;">
                <v-spacer/>
                <v-btn color="blue-grey" class="white--text" @click="$_ChangePassword_clickBtn('change')">{{$t('change')}}</v-btn>
                <v-btn color="info" @click="$_ChangePassword_clickBtn('cancel')">{{$t('cancel')}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ChangePassword",
        data() {
            return {
                dialog: false,
                past_password: '',
                password: '',
                password_again:''
            }
        },
        methods: {
            $_ChangePassword_clickBtn(action) {
                if (action === 'change') {
                    this.close();
                }
                if (action === 'cancel') {
                    this.close();
                }
            },
            $_LoginModal_try_to_login() {

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