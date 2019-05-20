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
                    <span class="headline">{{title}}</span>         <!-- 书名-->
                    <p> <span class="grey--text" >作者:{{author}}</span></p>
                    <div class="d-flex">
                        <v-on v-on:click="value_change">
                            <v-rating
                                    :value="value"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                            >                        <!-- 评星部分-->
                            </v-rating>
                        </v-on>
                        <div class="ml-2 grey--text text--darken-2">
                            <span >{{ value }}</span>              <!-- 星级和评星人数-->
                            <span>({{ reviews }})</span>
                        </div>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <button v-on:click="favourite_change">


                    <v-btn icon class="mr-0" v-if="isfavourite">
                        <v-icon color="pink">favorite</v-icon>  <!-- 图标样式-->
                    </v-btn>
                    <v-btn icon class="mr-0" v-else>
                        <v-icon >favorite</v-icon>
                    </v-btn>



                </button>
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
                            <p> 书名：{{title}}</p>
                            <p> 作者：{{author}}</p>
                            <p> 评分：{{value}}</p>
                            <p> 简介：{{messages}}</p>
                            <p>标签：{{tag1}},{{tag2}},{{tag3}}</p>
                            <p>
                                Hot：{{hot}}
                                <i class="material-icons">whatshot</i>
                            </p>
                            <p> 所需积分：{{points}}</p>

                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                    color="primary"
                                    flat
                                    @click="dialog = false"
                                    v-if="can_borrowed"
                            >
                                借书
                            </v-btn>
                            <v-btn
                                    disabled=true
                                    v-else
                            >
                                暂无库存
                            </v-btn>

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
        }),
        props:{
            points:{
                type:Number,
                default:5,
            },   //借阅所需积分
            hot:Number,   //热度
            can_borrowed:Boolean,  //是否可以借书
            isreviewd:Boolean, //是否已经评星
            tag1:String,   //标签1
            tag2:String,   //标签2
            tag3:String,   //标签3
            reviews:Number,  //评论人数
            value: Number,  //星级(开始为综合星级，评论后为评级的星级)
            images:String , //图片位置信息
            title:String, //标题（书名作者名）
            author:String ,//作者名
            category:String,//分类信息（可以为数组逐条显示）
            isfavourite:Boolean, //是否为收藏的书籍、作家
            messages:String //简介信息
        },
        methods: {
            favourite_change:function () {
                this.isfavourite=!this.isfavourite
            },
            set_reviews:function () {},    //改变评论人数
            value_change:function () {},  //评星改变时候进行评论人数增加处理
            set_images:function () {},  //改变图片位置
            set_title:function () {},    //改变书名
            set_author:function () {},   //改变作者名
            set_category:function () {}, //改变分类
            set_messages:function () {},  //改变详细信息
            set_hot:function () {},       //改变热度
            set_points:function () {},      //改变借阅所需的积分点
            borrow_book:function () {
                this.messages=' function:borrow_book'  //test
            },  //借书

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