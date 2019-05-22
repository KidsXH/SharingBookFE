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
    data() {
      return {
        page: 1,//当前分页页码
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
