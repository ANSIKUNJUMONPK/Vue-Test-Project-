<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import HomeLayout from "./layouts/HomeLayout.vue";

export default {
  components: {
    DefaultLayout,
    HomeLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout === "HomeLayout"
        ? "HomeLayout"
        : "DefaultLayout";
    },
  },
};
</script>
<style></style>
