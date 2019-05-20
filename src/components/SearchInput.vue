<template>
    <div style="width: 20rem">
    <v-text-field
            :placeholder="$t('search')"
            prepend-inner-icon="search"
            clearable
            v-on:keyup.enter="search"
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
