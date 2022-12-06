<template>
  <div>
    <HeaderSection />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>
