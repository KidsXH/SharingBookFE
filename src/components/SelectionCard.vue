<template>
  <v-card style="border-radius: 10px">
    <v-container pa-2>
      <v-layout align-center pa-1>
        <v-flex xs1 class="title text-sm-center">
          <v-btn dark color="blue accent-3">
            <v-icon left>tag_faces</v-icon>
            {{$t('categories')}}
          </v-btn>
        </v-flex>
        <v-chip mt-0 outline color="blue"
                v-for="item in categories"
                :key="item"
        >
          {{item}}
        </v-chip>
      </v-layout>
      <v-layout align-center pa-1>
        <v-flex xs1 class="title text-sm-center">
          <v-btn dark color="orange accent-3">
            <v-icon left>tag_faces</v-icon>
            {{$t('tags')}}
          </v-btn>
        </v-flex>
        <v-chip mt-0 outline color="orange"
                v-for="tag in tagList"
                :key="tag.tag_name"
        >
          {{tag.tag_name}}
        </v-chip>
      </v-layout>
      <v-layout pa-1>
        <v-flex xs12>
          <div style="border-bottom: 1px solid #E0E0E0"></div>
        </v-flex>
      </v-layout>
      <v-layout align-center pa-1>
        <v-chip mt-0 outline color="red"
                v-for="item in tags"
                :key="item"
        >
          {{item}}
        </v-chip>
        <v-spacer />
        <v-flex xs2>
          <v-select
            :items="tags"
            label="Default order"
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
  import { mapState, mapActions } from 'vuex'

  export default {
    name: "SelectionCard",
    data() {
      return {
        categories: [
          'C1',
          'C2',
          'C3',
        ],
        tags: ['ts']
      }
    },
    created() {
      this.getAllTags();
    },
    computed: {
      ...mapState(['tagList'])
    },
    methods: {
      ...mapActions(['getAllTags'])
    }
  }
</script>

<style scoped>

</style>
