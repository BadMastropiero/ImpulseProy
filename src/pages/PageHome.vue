<template>
  <div>
    <TheNavbar />
    <heroSection />
    <about />
    <featureDisplay />
    <subscriptionPlan />
    <testimonials />
    <skewSection />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";
import heroSection from "./PageHome/heroSection";
import about from "./PageHome/about";
import featureDisplay from "./PageHome/featureDisplay";
import subscriptionPlan from "./PageHome/subscriptionPlan";
import testimonials from "./PageHome/testimonials";
import skewSection from "./PageHome/skewSection";

export default {
  components: {
    TheNavbar,
    TheFooter,
    heroSection,
    about,
    featureDisplay,
    subscriptionPlan,
    testimonials,
    skewSection
  }
};
</script>

<style scoped>
</style>