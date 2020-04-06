<template>
  <div class="section-1">
    <div class="row col-lg-12">
      <div class="col-md-8 promo justify-content-center align-content-center">
        <img class="img-fluid mt-5" height="100" width="100" src="../../assets/google.png" alt />
        <h1>Increase your reputation online</h1>
        <shopBtn />
      </div>
      <div class="col-md-4 promo-img">
        <img class="img-fluid mt-5" src="../../assets/promo1.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-1 {
  margin-bottom: 60px;

  height: 60vh;
}

.section-1 .promo {
  text-align: center;
  padding: 10px;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.section-1 .promo img {
  margin-bottom: 20px;
}

.section-1 .promo h1 {
  font-size: 45px;
  font-weight: 700;
  font-style: bold;
  margin-bottom: 50px;
}

@media only screen and (max-width: 767px) {
  .section-1 .promo {
    position: relative;
  }
  .promo-img {
    display: none;
  }
}
</style>