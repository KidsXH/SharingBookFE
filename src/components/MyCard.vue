<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card color="white" class="black--text">
        <v-layout>
            <v-flex xs5>
                <v-img
                        :src=src
                        height="150px"
                        contain
                ></v-img>
            </v-flex>
            <v-flex xs7>
                <v-card-title primary-title>
                    <div>
                        <div class="headline black--text" >{{title}}</div>
                        <div class="black--text" >{{author}}</div>
                        <div class="black-text" >{{year}}</div>
                    </div>
                </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <button v-on:click="favourite_change">

                <v-btn icon class="mr-0" v-if="isfavourite">
                    <v-icon color="pink">favorite</v-icon>  <!-- 图标样式-->
                </v-btn>
                <v-btn icon class="mr-0" v-else>
                    <v-icon >favorite</v-icon>
                </v-btn>
            </button>
                <Book></Book>
        </v-card-actions>
    </v-card>
</template>

<script>
    import Book from "./Book";

    export default {
        data () {
            return {
                dialog: false,
                isfavourite:false
            }
        },
        name: "MyCard",
        components: {Book},
        props:{
            title:{
                type:String,
                default:""
            },
            src:{
                type: String,
                default: ""
            },
            author:{
                type:String,
                default:""
            },
            year:{
                type:Number,
                default:2000
            }
        },
        methods: {
            favourite_change:function () {
                this.isfavourite=!this.isfavourite
            }

        }
    }
</script>

<style scoped>

</style>