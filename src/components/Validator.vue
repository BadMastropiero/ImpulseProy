<template>
  <ValidationProvider rules="minmax:3,15" v-slot="{ errors }">
    <slot />
  </ValidationProvider>
</template>

<script>
export default {
  props: ["value"],
  components: {
    ValidationProvider
  }
};
</script>

<style scoped>
</style>