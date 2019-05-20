<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card>
        <div>
            <v-data-table
                    :headers="headers"
                    :items="books"
                    :search="search"
                    hide-actions
                    :pagination.sync="pagination"
                    class="elevation-1"
            >
                <template v-slot:items="props">
                    <td>{{ props.item.item1}}</td>
                    <td class="text-sm-left">{{ props.item.item2}}</td>
                    <td class="text-sm-left">{{ props.item.item3}}</td>
                    <td class="text-sm-left" v-if="isbutton"><v-btn color="info">还书</v-btn></td>
                    <td class="text-sm-left" v-else>{{ props.item.item4}}</td>

                </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
                <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "Tables1",
        data () {
            return {
                search: '',
                pagination: {},
                selected: []
            }
        },
        props:{
            isbutton:Boolean,
            headers:{
                text:String,
                values:{
                    type: String,
                    default: "1"
                }
            },
            books:{
                item1:String,
                item2:String,
                item3:String,
                item4:{
                    type:String,
                    default:"1"
                }
            }
        },
        computed: {
            pages () {
                if (this.pagination.rowsPerPage == null ||
                    this.pagination.totalItems == null
                ) return 0

                return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
            }
        }
    }
</script>

<style scoped>

</style>