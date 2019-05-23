<template>
  <v-card style="border-radius: 10px">
    <v-container pa-2>
      <v-layout align-center justify-start pa-1>
        <v-flex lg1 xs12 class="title text-sm-center">
          <v-btn dark color="blue accent-3">
            <v-icon left>category</v-icon>
            {{$t('categories')}}
          </v-btn>
        </v-flex>
        <v-flex>
          <span v-for="category in categoryList" :key="category.category_name">
          <v-chip mt-0 color="blue" dark
                  @click="clearCategory()"
                  v-if="category.category_name === searchParams.category"
          >
            {{category.category_name}}
          </v-chip>
          <v-chip mt-0 outline color="blue"
                  @click="chooseCategory(category)"
                  v-else
          >
            {{category.category_name}}
          </v-chip>
          </span>
        </v-flex>
      </v-layout>
      <v-layout align-center pa-1>
        <v-flex lg1 xs12 class="title text-sm-center">
          <v-btn dark color="orange accent-3">
            <v-icon left>label</v-icon>
            {{$t('tags')}}
          </v-btn>
        </v-flex>
        <span v-for="tag in tagList" :key="tag.tag_name">
          <v-chip mt-0 color="orange" dark
                  @click="clearTag(tag)"
                  v-if="isSelectedTag(tag)"
          >
            {{tag.tag_name}}
          </v-chip>
          <v-chip mt-0 outline color="orange"
                  @click="chooseTag(tag)"
                  v-else
          >
            {{tag.tag_name}}
          </v-chip>
          </span>
      </v-layout>
      <v-layout pa-1>
        <v-flex xs12>
          <div style="border-bottom: 1px solid #E0E0E0"></div>
        </v-flex>
      </v-layout>
      <v-layout align-center pa-1>
        <!-- Incomplete part -->
        <!--v-chip mt-0 outline color="red"
                v-for="tag in selectedTags"
                :key="tag"
        >
          {{tag}}
        </v-chip-->
        <v-spacer/>
        <v-flex xs2>
          <v-select
            :items="orderItems"
            label="Order By (default)"
            solo
            dense
            :menu-props="{transition:'slide-y-transition'}"
            hide-details
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import utils from '../utils/utils'

  export default {
    name: "SelectionCard",
    data() {
      return {
        orderItems: ['default', 'book_name', 'trending', 'rating', 'book_credit'],
      }
    },
    created() {
      this.getAllTags();
      this.getAllCategories();
    },
    computed: {
      ...mapState(['tagList', 'categoryList', 'searchParams']),
      ...mapGetters(['selectedTags']),
    },
    methods: {
      ...mapActions(['getAllTags', 'getAllCategories', "changeSearchParams", "searchBooks"]),
      chooseCategory(category) {
        this.changeSearchParams({category: category.category_name});
        this.searchBooks();
      },
      clearCategory() {
        this.changeSearchParams({category: null});
        this.searchBooks();
      },
      chooseTag(tag) {
        let list = this.searchParams.tags;
        let value = tag.tag_name;
        utils.insertIntoOrderedList(list, value);
        this.changeSearchParams({tags: list});
        this.searchBooks();
      },
      clearTag(tag) {
        let t = this.searchParams.tags;
        let id = utils.binarySearch(t, tag.tag_name);
        t.splice(id, 1);
        this.changeSearchParams({tags: t});
        this.searchBooks();
      },
      isSelectedTag(tag) {
        return utils.binarySearch(this.searchParams.tags, tag.tag_name) !== -1;
      }
    }
  }
</script>

<style scoped>
</style>
