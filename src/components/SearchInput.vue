<template>
  <div style="width: 20rem;padding-right: 20px">
    <v-text-field
      :label="$t('search')"
      v-model="text"
      prepend-inner-icon="search"
      clearable
      single-line
      @keyup.enter="handleSearch"
    ></v-text-field>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        text: null
      }
    },
    methods: {
      ...mapActions(['changeSearchParams', 'searchBooks']),
      handleSearch: function() {
        this.changeSearchParams({searchText: this.text});
        this.searchBooks();
        this.$router.push({ path:'/books'});
      },
    }
  }
</script>

<style scoped>
</style>
