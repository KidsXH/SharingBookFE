<template>
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex xs12 pa-2 v-if="title != null">
        <div class="headline">{{$t(title)}}</div>
      </v-flex>
      <v-flex
        v-for="card in cards"
        :key="card.title"
        xs12 sm6 md4 lg3
        pa-2
      >
        <book-card v-bind="card"/>
      </v-flex>
    </v-layout>
    <v-layout v-if="pagination === true" justify-end>
      <v-pagination
        v-model="page"
        :length="4"
      ></v-pagination>
    </v-layout>
  </v-container>
</template>

<script>
  import BookCard from "./BookCard";
  export default {
    name: "BookGridList",
    components: {BookCard},
    props: {
      cards: {
        type: Array,
        default: () => { return [
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isFavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
        ] }
      },
      title: {
        type: Array,
        default: null
      },
      sort: {
        type: Array,
        default: () => { return [] }
      },
      pagination: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>
