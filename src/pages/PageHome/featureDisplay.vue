<template>
  <div class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-6 crl1 feature_grid">
          <h4>Some cool heading here</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero magni animi atque quos, ducimus totam optio mollitia ab eius enim voluptates similique amet repellendus.</p>
        </div>
        <div class="col-md-6 crl2 feature_grid">
          <img class="img-fluid thumbnail" src="@/assets/some1.png" alt />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 crl2 feature_grid">
          <img class="img-fluid thumbnail" src="@/assets/some2.png" alt />
        </div>
        <div class="col-md-6 crl1 feature_grid">
          <h4>Some cool heading here</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero magni animi atque quos, ducimus totam optio mollitia ab eius enim voluptates similique amet repellendus.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 crl1 feature_grid">
          <h4>Some cool heading here</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero magni animi atque quos, ducimus totam optio mollitia ab eius enim voluptates similique amet repellendus.</p>
        </div>
        <div class="col-md-6 crl2 feature_grid">
          <img class="img-fluid thumbnail" src="@/assets/some3.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.features {
  text-align: center;
}

.features h1 h3 p {
  text-align: center;
  color: #000;
}

.features h1 {
  letter-spacing: 5px;
  margin-bottom: 15px;
  font-size: 55px;
  color: #000;
  padding: 10px;
}

.features p {
  padding: 10px 0px;
}

.feature_grid {
  text-align: center;
  padding: 30px;
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

.feature_grid h4 {
  font-size: 45px;
  font-style: bold;
  margin-top: 25px;
}

.feature_grid p {
  padding: 0px;
  color: #000;
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 14px;
}
</style>