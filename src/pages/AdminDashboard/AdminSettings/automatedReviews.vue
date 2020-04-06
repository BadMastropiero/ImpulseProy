<template>
  <div>
    <div class="card">
      <div class="card-header">
        <button
          class="btn btn-block bg-secondary text-light text-left"
          data-toggle="collapse"
          data-target="#collapseOne"
        >
          <h4>Automated Reviews Request</h4>
        </button>
      </div>
      <div class="collapse show" id="collapseOne" data-parent="#accordion">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="text-left">
              <ctaBtn />
            </div>
          </div>
        </div>
        <div class="card-footer text-secondary">
          <span>
            We'll automatically email some of your customers each day, asking them to share feedback that can help you improve the customer experience.
            And, if they give you a positive rating we'll encourage them to post a positive review online about your business
          </span>
        </div>
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