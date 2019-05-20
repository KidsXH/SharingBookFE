<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.times }}</td>
      <td class="text-xs-right">{{ props.item.rank }}</td>
      <td class="text-xs-right">{{ props.item.times2 }}</td>
      <td class="text-xs-right">{{ props.item.collection }}</td>
      <td class="text-xs-right">{{ props.item.times3 }}</td>
      <td class="text-xs-right"><button @click="btn">{{props.item.btn }}</button></td>
    </template>
  </v-data-table>
</template>
<script type="text/javascript">

  export default {

    data () {
      return {
        headers: [
          {
            text: '书名',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '点击量榜单', value: 'times' },
          { text: '作者排行', value: 'rank' },
          { text: '推荐榜单', value: 'times2' },
          { text: '收藏榜', value: 'collection' },
          { text: '完本榜单', value: 'times3' },
          { text: '', value: 'btn',sortable:false}
        ],
        desserts: [
          {
            name: '000',
            times: 159,
            rank: 6.0,
            times2: 24,
            collection: 4.0,
            times3: '661',
            btn: '查看'

          },
          {
            name: '001',
            times: 237,
            rank: 9.0,
            times2: 37,
            collection: 4.3,
            times3: '1%',
            btn: '查看'
          },
          {
            name: '002',
            times: 262,
            rank: 16.0,
            times2: 23,
            collection: 6.0,
            times3: '7%',
            btn: '查看'
          },
          {
            name: '003',
            times: 305,
            rank: 3.7,
            times2: 67,
            collection: 4.3,
            times3: '8%',
            btn: '查看'
          },
          {
            name: '004',
            times: 356,
            rank: 16.0,
            times2: 49,
            collection: 3.9,
            times3: '16%',
            btn: '查看'
          },
          {
            name: '005',
            times: 375,
            rank: 0.0,
            times2: 94,
            collection: 0.0,
            times3: '0%',
            btn: '查看'
          },
          {
            name: '006',
            times: 392,
            rank: 0.2,
            times2: 98,
            collection: 0,
            times3: '2%',
            btn: '查看'
          },
          {
            name: '007',
            times: 408,
            rank: 3.2,
            times2: 87,
            collection: 6.5,
            times3: '45%',
            btn: '查看'
          },
          {
            name: '008',
            times: 452,
            rank: 25.0,
            times2: 51,
            collection: 4.9,
            times3: '22%',
            btn: '查看'
          },
          {
            name: '009',
            times: 518,
            rank: 26.0,
            times2: 65,
            collection: 7,
            times3: '6%',
            btn: '查看'
          },
          {
            name: '010',
            times: 518,
            rank: 26.0,
            times2: 65,
            collection: 7,
            times3: '6%',
            btn: '查看'
          },
          {
            name: '011',
            times: 518,
            rank: 26.0,
            times2: 65,
            collection: 7,
            times3: '6%',
            btn: '查看'
          }
        ]
      }
    },
    methods: {
      btn: function () {
        this.$router.push({ path:'/books'})
      }
    }
  }
</script>
