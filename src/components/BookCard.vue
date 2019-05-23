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
                :src="book.picture_path"
              />
            </v-flex>
            <v-flex xs7>
              <v-layout row wrap pl-3 align-center justify-start fill-height>
                <v-flex xs12 class="headline">
                  {{book.book_name}}
                </v-flex>
                <v-flex>
                  <v-rating
                    :value="book.rating"
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
                    <span>({{ book.rating }})</span>
                  </div>
                </v-flex>
                <v-flex xs12 class="grey--text" py-1>
                  {{book.category}} | {{book.author}}
                </v-flex>
                <v-layout align-center justify-start row>
                  <v-btn icon>
                    <v-icon color="pink" v-if="book.is_favourite">favorite</v-icon>
                    <v-icon v-else>favorite_border</v-icon>
                  </v-btn>
                  <v-spacer/>
                  <v-btn icon @click="clickBtnDetail">
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
  import { mapActions } from 'vuex'
  export default {
    components: {},
    props: {
      book: Object
    },
    methods: {
      ...mapActions(['changeModalStatus', 'changeBookDetail']),
      clickBtnDetail() {
        this.changeBookDetail({data: this.book}).then(
          () => {
            this.changeModalStatus({mode: 'bookDetail', visible: true})
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>
