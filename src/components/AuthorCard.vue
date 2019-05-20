<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <v-hover>

        <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                width="344"
        >
            <v-img
                    :aspect-ratio="16/9"
                    :src="images"
            >   <!-- 图片（书籍的作者的）-->



            </v-img>
            <v-card-title>
                <div>
                    <span class="headline">{{author}}</span>         <!-- 书名-->
                </div>
                <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="pink" v-on:click="search_category">{{category}}</v-btn>     <!-- 分类信息并点击其搜索该分类-->

                <v-spacer></v-spacer>

                <v-dialog
                        v-model="dialog"
                        width="500"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="red lighten-2"
                                dark
                                v-on="on"
                        >
                            详细信息
                        </v-btn>
                    </template>

                    <v-card>


                        <v-img
                                :aspect-ratio="16/9"
                                :src="images"
                        ></v-img>
                        <v-card-text>
                            <p> 作者名：{{author}}</p>
                            <p> 简介：{{messages}}</p>
                            <p>
                                Hot：{{hot}}
                            </p>

                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-card-actions>

        </v-card>
    </v-hover>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,

            hot:888.66,
            images:'https://cdn.vuetifyjs.com/images/cards/cooking.png' , //图片位置信息
            author:'Tom Simth' ,//作者名
            category:'玄幻武侠',//分类信息（可以为数组逐条显示）
            messages:'This is test messages' //简介信息
        }),
        methods: {

            set_author:function () {},   //改变作者名
            set_category:function () {}, //改变分类
            set_messages:function () {},  //改变详细信息
            search_category:function () {
                this.messages=' function:search_category'  //test
            }, //搜索该分类的相关书籍


        }
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;

        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>