<template>
  <div id="recommendations-view">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <recommend-card v-bind="post"></recommend-card>
        </v-flex>
        <v-flex xs12>
          <div class="separate-line"></div>
        </v-flex>
        <v-flex xs12>
          <recommend-card v-bind="post"></recommend-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import RecommendCard from "../components/RecommendCard";

  export default {
    name: "recommendations",
    components: {RecommendCard},
    data: () => ({
      post: {
        cards: [
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages', //简介信息
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages',
            flex: 4
          },
          {
            points: 20,   //借阅所需积分
            hot: 8888.66,   //热度
            can_borrowed: true,  //是否可以借书
            isreviewd: false, //是否已经评星
            tag1: '0~1000字',   //标签1
            tag2: '网络',   //标签2
            tag3: '都市',   //标签3
            reviews: 413,  //评论人数
            value: 3,  //星级(开始为综合星级，评论后为评级的星级)
            images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', //图片位置信息
            title: '神TM斗破', //标题（书名作者名）
            author: 'Tom Simth',//作者名
            category: '玄幻武侠',//分类信息（可以为数组逐条显示）
            isfavourite: false, //是否为收藏的书籍、作家
            messages: 'This is test messages',
            flex: 4
          }
        ]
      }
    })
  }

</script>

<style scoped>

</style>
