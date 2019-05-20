<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title style="border-bottom: 1px solid darkgrey">
                <span class="headline">{{$t('changePhone')}}</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="phone" :label="$t('phone')" prepend-inner-icon="account_box" required></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions style="padding: 0 16px 16px 0;">
                <v-spacer/>
                <v-btn color="blue-grey" class="white--text" @click="$_ChangePhone_clickBtn('change')">{{$t('change')}}</v-btn>
                <v-btn color="info" @click="$_ChangePhone_clickBtn('cancel')">{{$t('cancel')}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ChangePhone",
        data() {
            return {
                dialog: false,
                phone:'',
            }
        },
        methods: {
            $_ChangePhone_clickBtn(action) {
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