<template>
  <div>
    <br/>
    <div>
      <v-layout align="left">
              <span v-for="n in 10"
                    :key="n">
                &nbsp;
              </span>
        <span style="font-size: 18px;">temp0: &nbsp; &nbsp;</span>
        <v-chip style="margin-top: 0px" outline color="green"
                @click="addChip"
                v-for="item in classification"
                :key="item"
        >
          {{item}}
        </v-chip>

      </v-layout>
    </div>
    <br/>
        <div>
          <v-layout align="left">
              <span v-for="n in 10"
                    :key="n">
                &nbsp;
              </span>
              <span style="font-size: 18px;">temp1: &nbsp; &nbsp;</span>
              <v-chip style="margin-top: 0px" outline color="primary"
                      @click="addChip"
                      v-for="word in wordNum"
                      :key="word"
              >
                {{word}}
              </v-chip>

          </v-layout>
        </div>
        <br/>
        <div>
          <v-layout row wrap align="left">
              <span v-for="n in 10"
                    :key="n">
                &nbsp;
              </span>
            <span style="font-size: 18px;">temp2: &nbsp; &nbsp;</span>
            <v-chip style="margin-top: 0px" outline color="red"
                    @click="addChip"
                    v-for="stock in inStock"
                    :key="stock">
              {{stock}}
            </v-chip>
          </v-layout>
        </div>
        <br/>
        <div>
          <v-layout row wrap>
            <span v-for="n in 10"
                  :key="n">
                &nbsp;
            </span>
            <span style="font-size: 10px;">
              已选择的标签：
            </span>

            <span style="font-size: 10px;"
                  v-if="curChips.length==0"
            >
              暂无选择的标签
            </span>
            <v-chip style="margin-top: -5px"
                    close
                    v-for = "chip in curChips"
                    v-model = "chip.yes"
                    :key="chip.inText"
            >
              {{chip.inText}}

            </v-chip>

          </v-layout>
          <v-select
                  style="margin: -40px 30px -34px 1600px;"
                  :items="sortItems"
                  label="排序方式"
                  solo
          >
          </v-select>
        </div>
        <br/>
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-layout wrap row>
              <v-flex
                      v-for="n in 6"
                      :key="n"
                      style="margin-bottom: 25px"
              >
                <BookCard></BookCard>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
    <br/>
    <div class="text-xs-right">
      <v-pagination

              v-model="page"
              :length="4"
      ></v-pagination>
      <br/>
      <span> &nbsp;</span>
    </div>
  </div>
</template>

<script>
  import BookCard from "../components/BookCard";
  export default {
    components: {BookCard},
    props: ['parentToChild'],
    data () {
      return {
        active: 0,//当前分类页码
        page: 1,//当前分页页码
        isSame: false,
        classification: ["item1","item2","item3","item4","item5"],
        sortItems: ["按点击量排列","按星级排列"],
        wordNum:["0-100","100-1000","1000-1w"],
        inStock:["有","无"],
        newChip:{//新筛选框
          inText: "",
          yes:true,
        },
        curChips:[],//当前存在的筛选框
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      test:function(text){
        alert(text);
      },
      add: function(fromParentText){
        alert(fromParentText);
        this.newChip={
          inText: fromParentText,
          yes:true,
        };
        this.curChips.push(this.newChip);
      },
      addChip: function(e) {
        this.newChip={
          inText: e.target.innerText,
          type:"",
          yes:true,
        };
        for(let i = 0;i<this.curChips.length;i++){
          if(this.curChips[i].inText == e.target.innerText){
            this.isSame = true;
            this.curChips[i].yes = true;
          }
        }
        if(!this.isSame){
          this.curChips.push(this.newChip);
        }
        this.isSame = false;
        this.newChip={
          inText: "",
          type: "",
          yes:true,
        };
      },
      addChip_search: function(text){
        this.newChip={
          inText: "搜索结果:"+text,
          type:"",
          yes:true,
        };
        if(!this.isSame){
          this.curChips.push(this.newChip);
        }
        this.isSame = false;
        this.newChip={
          inText: "",
          type: "",
          yes:true,
        };
      },
      changePage:function () {
        alert(this.page);
      }
    }
  }
</script>

<style scoped>

</style>
