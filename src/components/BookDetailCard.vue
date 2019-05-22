<template>
  <v-dialog v-model="bookDetailDialog" width="500">
    <v-card>
      <v-img
        :aspect-ratio="16/9"
        :src="images"
      ></v-img>
      <!--v-card-text>
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

      </v-card-text-->

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          flat
          @click="bookDetailDialog = false"
          v-if="can_borrowed"
        >
          借书
        </v-btn>
        <v-btn
          v-else
        >
          暂无库存
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "BookDetailCard",
    data () {
      return {
        can_borrowed: false,
        images: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
      }
    },
    computed: {
      bookDetailDialog: {
        get () {
          return this.$store.state.bookDetailDialog
        },
        set (value) {
          this.$store.commit('updateBookDetailDialog', value)
        }
      }
    },
  }
</script>

<style scoped>

</style>
