<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseSeven"
      >
        <h4>Subscription Plan</h4>
      </button>
    </div>
    <div class="collapse" id="collapseSeven" data-parent="#accordion">
      <subcriptionPlan />
    </div>
  </div>
</template>

<script>
import subcriptionPlan from "./../../PageHome/subscriptionPlan";
export default {
  components: {
    subcriptionPlan
  }
};
</script>

<style scoped>
</style>