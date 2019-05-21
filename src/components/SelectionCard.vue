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
                v-for="item in tags"
                :key="item"
        >
          {{item}}
        </v-chip>
      </v-layout>
      <v-layout align-center pa-1>
        <v-flex xs1 class="title text-sm-center">
          <v-btn dark color="red accent-3">
            <v-icon left>tag_faces</v-icon>
            {{$t('tags')}}
          </v-btn>
        </v-flex>
        <v-chip mt-0 outline color="red"
                v-for="item in ['All', 'Show books']"
                :key="item"
        >
          {{item}}
        </v-chip>
      </v-layout>
      <v-layout align-center pa-1>
        <v-flex xs1 class="title text-sm-center">{{$t('selected')}}</v-flex>
        <v-chip mt-0 color="grey"
                v-for="item in ['All', 'Show books']"
                :key="item"
                close
        >
          {{item}}
        </v-chip>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: "SelectionCard",
    data() {
      return {
        categories: [
          'C1',
          'C2',
          'C3',
        ],
        tags: [
          'T1',
          'T2',
          'T3',
          'T4',
        ]
      }
    }
  }
</script>

<style scoped>

</style>
