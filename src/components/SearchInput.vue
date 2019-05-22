<template>
  <div style="width: 20rem;padding-right: 20px">
    <v-text-field
      :label="$t('search')"
      v-model="text"
      prepend-inner-icon="search"
      clearable
      single-line
    ></v-text-field>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        name: "SearchInput",
      }
    },
    computed: {
      text: {
        get() {
          return this.$store.state.searchText
        },
        set(value) {
          this.changeSearchText({text: value})
        }
      }
    },
    methods: {
      ...mapActions(['changeSearchText']),
      search: function(e) {
        this.$router.push({ path:'/books'});
        this.value = e.target.value;
        this.$emit('sendValueToParent',this.value);
      },
    }
  }
</script>

<style scoped>
</style>
