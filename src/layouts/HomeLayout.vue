<template>
  <div>
    <HomeHeaderSection />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import HomeHeaderSection from "../components/HomeHeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "HomeLayout",
  components: {
    HomeHeaderSection,
    FooterSection,
  },
};
</script>
