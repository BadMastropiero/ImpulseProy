<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="skew-section col-md-12 d-flex flex-row-reverse">
          <div class="btn col-md-4">
            <shopBtn />
          </div>
          <div class="cta col-md-6">
            <h5>So whats next??</h5>
            <h1>Are You Ready?? Let's work!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopBtn from "../../components/shared/shopBtn";
export default {
  components: {
    shopBtn
  }
};
</script>

<style scoped>
.container {
  align-items: center;
}

.container .skew-section {
}

.container .skew-section .cta {
  top: 40px;
}

.container .skew-section .btn {
  top: 50px;
}

.skew-section {
  height: 200px;
  position: relative;
  background-color: transparent;
  perspective: 2000px;
  transform: translateY(50%);
}

.skew-section:before {
  position: absolute;
  content: "";
  width: 120%;
  height: 120%;
  top: -30px;
  left: 0;
  background-color: #e9f1f7;
  transform: rotateY(45deg);
  z-index: -1;
  border-radius: 40px;
  box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
}

@media only screen and (max-width: 767px) {
  .skew-section:before {
    display: none;
  }

  .skew-section {
    transform: translateY(-50%);
    margin-top: 150px;
    border-top: 2px solid #050801;
  }
}
</style>