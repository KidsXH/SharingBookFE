<template>
    <div style="width: 20rem;padding-right: 20px">
        <v-text-field
          :label="$t('search')"
          prepend-inner-icon="search"
          clearable
          single-line
        ></v-text-field>
    </div>
</template>

<script>
  export default {
      data () {
          return {
              name: "SearchInput",
              value: "",
          }
      },
      methods: {
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
