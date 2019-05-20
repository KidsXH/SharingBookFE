<template>
    <v-container pa-0 fluid>
      <v-layout row wrap>
        <v-flex xs12 pb-4 pl-2>
          <div class="headline">{{$t('hello')}}</div>
        </v-flex>
        <v-flex
          v-for="card in cards"
          :key="card.title"
          xs12 sm6 md4 lg3
          pa-2
        >
          <book-card v-bind:points="card.points" v-bind:hot="card.hot" v-bind:can_borrowed="card.can_borrowed"
                     v-bind:isreviewd="card.isreviewd"
                     v-bind:tag1="card.tag1" v-bind:tag2="card.tag2" v-bind:tag3="card.tag3"
                     v-bind:reviews="card.reviews"
                     v-bind:title="card.title" v-bind:value="card.value" v-bind:category="card.category"
                     v-bind:isfavourite="card.isfavourite"
                     v-bind:author="card.author" v-bind:images="card.images"
                     v-bind:messages="card.messages"/>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import BookCard from "../components/BookCard";

  export default {
    name: "RecommendationCard",
    components: {BookCard},
    props: {
      cards: {
        points: String,   //借阅所需积分
        hot: Number,   //热度
        can_borrowed: Boolean,  //是否可以借书
        isreviewd: Boolean, //是否已经评星
        tag1: String,   //标签1
        tag2: String,   //标签2
        tag3: String,   //标签3
        reviews: Number,  //评论人数
        value: Number,  //星级(开始为综合星级，评论后为评级的星级)
        images: String, //图片位置信息
        title: String, //标题（书名作者名）
        author: String,//作者名
        category: String,//分类信息（可以为数组逐条显示）
        isfavourite: Boolean, //是否为收藏的书籍、作家
        messages: String, //简介信息
        flex: Number
      }
    }
  }
</script>

<style scoped>
</style>
