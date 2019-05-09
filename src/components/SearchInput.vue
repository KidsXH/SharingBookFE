<template>
    <div style="width: 20rem">
    <v-text-field
            :placeholder="$t('search')"
            prepend-inner-icon="search"
            clearable
    ></v-text-field>
    </div>
</template>

<script>
  export default {
    name: "SearchInput"
  }
</script>

<style scoped>
</style>
