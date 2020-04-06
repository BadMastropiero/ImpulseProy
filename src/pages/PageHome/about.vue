<template>
  <div class="about">
    <div class="container">
      <h1>Features</h1>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum
        libero magni animi atque quos, ducimus totam optio mollitia ab eius enim voluptates similique amet repellendus.
      </p>
      <div class="row">
        <div class="col-md-4 crl1 about_grid">
          <img src="../../assets/card1.png" alt />
          <h4>Feature #1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>

        <div class="col-md-4 crl2 about_grid">
          <img src="../../assets/card1.png" alt />
          <h4>Feature #2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>

        <div class="col-md-4 crl3 about_grid">
          <img src="../../assets/card1.png" alt />
          <h4>Feature #3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  text-align: center;
}

.about h1 h3 p {
  text-align: center;
  color: #000;
}

.about h1 {
  letter-spacing: 5px;
  margin-bottom: 15px;
  font-size: 55px;
  color: #000;
  padding: 10px;
}

.about p {
  padding: 10px 0px;
}

.crl1 img {
  width: 70%;
  height: 30vh;
}

.crl2 img {
  width: 70%;
  height: 30vh;
}

.crl3 img {
  width: 70%;
  height: 30vh;
}

.about_grid {
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

.about_grid h4 {
  margin-top: 25px;
}

.about_grid p {
  padding: 0px;
  color: #000;
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>