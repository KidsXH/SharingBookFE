<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <selection-card/>
      </v-flex>
      <v-flex xs12 pa-2/>
      <v-flex xs12>
        <book-grid-list pagination/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SelectionCard from "../components/SelectionCard";
  import BookGridList from "../components/BookGridList";

  export default {
    components: {BookGridList, SelectionCard},
    props: ['parentToChild'],
    data() {
      return {
        active: 0,//当前分类页码
        page: 1,//当前分页页码
        isSame: false,
        classification: ["item1", "item2", "item3", "item4", "item5"],
        sortItems: ["按点击量排列", "按星级排列"],
        wordNum: ["0-100", "100-1000", "1000-1w"],
        inStock: ["有", "无"],
        newChip: {//新筛选框
          inText: "",
          yes: true,
        },
        curChips: [],//当前存在的筛选框
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      test: function (text) {
        alert(text);
      },
      add: function (fromParentText) {
        alert(fromParentText);
        this.newChip = {
          inText: fromParentText,
          yes: true,
        };
        this.curChips.push(this.newChip);
      },
      addChip: function (e) {
        this.newChip = {
          inText: e.target.innerText,
          type: "",
          yes: true,
        };
        for (let i = 0; i < this.curChips.length; i++) {
          if (this.curChips[i].inText == e.target.innerText) {
            this.isSame = true;
            this.curChips[i].yes = true;
          }
        }
        if (!this.isSame) {
          this.curChips.push(this.newChip);
        }
        this.isSame = false;
        this.newChip = {
          inText: "",
          type: "",
          yes: true,
        };
      },
      addChip_search: function (text) {
        this.newChip = {
          inText: "搜索结果:" + text,
          type: "",
          yes: true,
        };
        if (!this.isSame) {
          this.curChips.push(this.newChip);
        }
        this.isSame = false;
        this.newChip = {
          inText: "",
          type: "",
          yes: true,
        };
      },
      changePage: function () {
        alert(this.page);
      }
    }
  }
</script>

<style scoped>

</style>
