<template>
  <div id="book-card-component">
    <v-hover>
      <v-card
        :aspect-ratio="16/9"
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        min-width="240px"
      >
        <v-container pa-2>
          <v-layout row wrap>
            <v-flex xs5>
              <v-img
                :aspect-ratio="210/297"
                :src="images"
              />
            </v-flex>
            <v-flex xs7>
              <v-layout row wrap pl-3 align-center justify-start fill-height>
                <v-flex xs12 class="headline">
                  {{title}}
                </v-flex>
                <v-flex>
                  <v-rating
                    :value="rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="1rem"
                    background-color="grey lighten-1"
                    style="width: 90px"
                  />
                </v-flex>
                <v-flex xs2>
                  <div class="grey--text text--darken-2 caption">
                    <span>({{ rating }})</span>
                  </div>
                </v-flex>
                <v-flex xs12 class="grey--text" py-1>
                  {{category}} | {{author}}
                </v-flex>
                <v-layout align-center justify-start row>
                  <v-btn icon @click="favourite_change">
                    <v-icon color="pink" v-if="isFavourite">favorite</v-icon>
                    <v-icon v-else>favorite_border</v-icon>
                  </v-btn>
                  <v-spacer/>
                  <v-btn icon @click.stop="showBookDetail()">
                    <v-icon class="material-icons-outlined">book</v-icon>
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    components: {},
    data: () => ({
      dialog: false,
    }),
    props: {
      points: {
        type: Number,
        default: 5.0,
      },   //借阅所需积分
      hot: Number,   //热度
      can_borrowed: Boolean,  //是否可以借书
      tag1: String,   //标签1
      tag2: String,   //标签2
      tag3: String,   //标签3
      reviews: Number,  //评论人数
      rating: Number,  //星级(开始为综合星级，评论后为评级的星级)
      images: String, //图片位置信息
      title: String, //标题（书名作者名）
      author: String,//作者名
      category: String,//分类信息（可以为数组逐条显示）
      isFavourite: Boolean, //是否为收藏的书籍、作家
      messages: String //简介信息
    },
    methods: {
      ...mapMutations([
        'showBookDetail',
      ]),
      favourite_change: function () {
        this.isFavourite = !this.isFavourite
      },
      set_reviews: function () {
      },    //改变评论人数
      value_change: function () {
      },  //评星改变时候进行评论人数增加处理
      set_images: function () {
      },  //改变图片位置
      set_title: function () {
      },    //改变书名
      set_author: function () {
      },   //改变作者名
      set_category: function () {
      }, //改变分类
      set_messages: function () {
      },  //改变详细信息
      set_hot: function () {
      },       //改变热度
      set_points: function () {
      },      //改变借阅所需的积分点
      borrow_book: function () {
        this.messages = ' function:borrow_book'  //test
      },  //借书

      search_category: function () {
        this.messages = ' function:search_category'  //test
      }, //搜索该分类的相关书籍


    }
  }
</script>

<style scoped>
</style>
