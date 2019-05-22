<template>
  <v-card color="white" class="black--text">
    <v-layout row wrap pa-4>
      <v-flex sm4>
        <v-layout column wrap>
          <v-layout row wrap>
            <v-flex sm3>
              <v-img
                src='https://cdn.vuetifyjs.com/images/cards/house.jpg'
                height="150px"
                width="120px"
              ></v-img>
            </v-flex>
            <v-flex>
              <v-card-title primary-title>
                <div>
                  <div class="headline text-md-center">XFZ</div>
                  <v-btn flat @click.stop="$refs.ChangePassword.show()">
                    修改密码
                  </v-btn>
                  <ChangePassword ref="ChangePassword"/>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text>
            <v-layout row wrap>
              <v-flex sm7>
                <div class="text">
                  <div class="black--text">用户名：</div>
                  <div class="black--text">
                    邮箱：
                  </div>
                  <div class="black-text">手机号：{{year}}</div>
                  <div class="black-text">
                    喜欢的标签：{{year}}
                  </div>
                  <div class="black-text">
                    积分：{{year}}
                  </div>
                </div>
              </v-flex>
              <v-flex>
                <div>
                  <div>&nbsp;</div>
                  <div>
                    <v-btn flat @click.stop="$refs.ChangeEmail.show()">
                      修改邮箱
                    </v-btn>
                    <ChangeEmail ref="ChangeEmail"/>
                  </div>
                  <div>
                    <v-btn flat @click.stop="$refs.ChangePhone.show()">
                      修改手机
                    </v-btn>
                    <ChangePhone ref="ChangePhone"/>
                  </div>
                  <div class="black-text">
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn flat color="primary" left>修改邮箱</v-btn>
                      </template>

                      <v-card>
                        <v-card-title
                          class="headline grey lighten-2"
                          primary-title
                        >
                          确认
                        </v-card-title>

                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                          >
                            I accept
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-layout>
      </v-flex>
      <v-flex sm5>
        <div>
          <v-tabs
            color="cyan"
            dark
            grow
            icons-and-text
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="tab in tabs"
              :key=tab
              ripple
            >
              {{tab.name}}
              <v-icon>{{tab.icon}}</v-icon>
            </v-tab>
            <v-tab-item
              v-for="table in tables"
              :key=table
            >
              <Tables1 v-bind:isbutton=table.isbutton v-bind:headers=table.headers v-bind:books=table.books></Tables1>
            </v-tab-item>

          </v-tabs>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import Tables1 from "../components/Tables1";
  import ChangePassword from "../components/ChangePassword";
  import ChangeEmail from "../components/ChangeEmail";
  import ChangePhone from "../components/ChangePhone";

  export default {
    name: "BookList",
    components: {Tables1, ChangePhone, ChangeEmail, ChangePassword},
    data: () => ({
      tabs: [
        {
          icon: "favorite",
          name: "喜欢的书"
        },
        {
          icon: "book",
          name: "正在读的书"
        },
        {
          icon: "redeem",
          name: "捐过的书"
        },
        {
          icon: "history",
          name: "借过的书"
        }],
      tables: [
        {
          isbutton: false,
          headers: [
            {
              text: '书名',
              value: 'item1'
            },
            {text: '日期', value: 'item2'},

            {text: '状态', value: 'item3'},
            {text: '还书', value: "item4"},
          ],
          books: [{
            item1: "s1",
            item2: "001",
            item3: "003",
            item4: "ss"
          },
            {
              item1: "s2",
              item2: "001",
              item3: "003",
              item4: "ss"
            }
          ]
        },
        {
          isbutton: true,
          headers: [
            {
              text: '书名',
              value: 'item1'
            },
            {text: '日期', value: 'item2'},

            {text: '状态', value: 'item3'},
            {text: '还书', value: "item4"},
          ],
          books: [{
            item1: "s1",
            item2: "001",
            item3: "003",
            item4: "ss"
          },
            {
              item1: "s2",
              item2: "001",
              item3: "003",
              item4: "ss"
            }
          ]
        },
        {
          isbutton: false,
          headers: [
            {
              text: '书名',
              value: 'item1'
            },
            {text: '日期', value: 'item2'},

            {text: '状态', value: 'item3'},
            {text: '还书', value: "item4"},

          ],
          books: [{
            item1: "s1",
            item2: "001",
            item3: "003",
            item4: "sss"
          },
            {
              item1: "s2",
              item2: "001",
              item3: "003",
              item4: "sss"
            }
          ]
        },
        {
          isbutton: false,
          headers: [
            {
              text: '书名',
              value: 'item1'
            },
            {text: '日期', value: 'item2'},

            {text: '状态', value: 'item3'},
            {text: '还书', value: "item4"},
          ],
          books: [{
            item1: "s1",
            item2: "001",
            item3: "003",
            item4: "sss"
          },
            {
              item1: "s2",
              item2: "001",
              item3: "003",
              item4: "sss"
            }
          ]
        }
      ]

    })
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
    line-height: 2.5em;
  }
</style>
