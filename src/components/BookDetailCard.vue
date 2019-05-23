<template>
  <v-card>
    <v-img
      :aspect-ratio="16/9"
      :src="images"
    ></v-img>
    <v-card-text>
      <p> 书名：{{bookDetail.book_name}}</p>
      <p> 作者：{{bookDetail.author}}</p>
      <p> 评分：{{bookDetail.rating}}</p>
      <p> 简介：{{bookDetail.introduction}}</p>
      <p>标签：{{bookDetail.tags}}</p>
      <p>
        Hot：{{bookDetail.trending}}
        <i class="material-icons">whatshot</i>
      </p>
      <p> 所需积分：{{bookDetail.book_credit}}</p>

    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" flat v-if="false">
        借书
      </v-btn>
      <v-btn disabled v-else>
        暂无库存
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "BookDetailCard",
    data() {
      return {
        images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
      }
    },
    computed: {
      ...mapState(['bookDetail'])
    },
  }
</script>

<style scoped>

</style>
