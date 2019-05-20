<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title style="border-bottom: 1px solid darkgrey">
                <span class="headline">{{$t('changeEmail')}}</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="email" :label="$t('email')" prepend-inner-icon="account_box" required></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions style="padding: 0 16px 16px 0;">
                <v-spacer/>
                <v-btn color="blue-grey" class="white--text" @click="$_ChangeEmail_clickBtn('change')">{{$t('change')}}</v-btn>
                <v-btn color="info" @click="$_ChangeEmail_clickBtn('cancel')">{{$t('cancel')}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ChangeEmail",
        data() {
            return {
                dialog: false,
                email:'',
            }
        },
        methods: {
            $_ChangeEmail_clickBtn(action) {
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