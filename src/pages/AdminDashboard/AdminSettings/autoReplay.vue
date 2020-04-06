<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseTwo"
      >
        <h4>Auto Replay</h4>
      </button>
    </div>
    <div class="collapse" id="collapseTwo" data-parent="#accordion">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="text-left">
            <ctaBtn />
          </div>
        </div>
      </div>
      <div class="card-footer text-secondary">
        <span>Short on time? We'll replay to all of your review automatically! You still have the option to write your own replay if you want to give it a personal touch</span>
      </div>
    </div>
  </div>
</template>

<script>
import ctaBtn from "./../../../components/shared/ctaBtn";
export default {
  components: {
    ctaBtn
  }
};
</script>

<style scoped>
</style>