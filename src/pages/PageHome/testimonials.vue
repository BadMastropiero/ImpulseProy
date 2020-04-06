<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 crl1 feature_grid">
        <h4>Our customers</h4>
        <h1>Range from Fortune 500 companies</h1>
      </div>
      <div class="col-md-9 crl2 feature_grid_">
        <div class="row justify-content-around">
          <div class="col-md-3 box">
            <div class="imgBx">
              <img src="../../assets/user1.png" class="img-fluid" alt />
            </div>
            <h4>
              Some cool heading here
              <br />
              <span>Another cool say</span>
            </h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero</p>
          </div>
          <div class="col-md-3 box">
            <div class="imgBx">
              <img src="../../assets/user1.png" class="img-fluid" alt />
            </div>
            <h4>
              Some cool heading here
              <br />
              <span>Another cool say</span>
            </h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero</p>
          </div>
          <div class="col-md-3 box">
            <div class="imgBx">
              <img src="../../assets/user1.png" class="img-fluid" alt />
            </div>
            <h4>
              Some cool heading here
              <br />
              <span>Another cool say</span>
            </h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi eaque eligendi aliquid cum libero</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container .feature_grid h1 {
  font-weight: 600;
  font-style: bold;
  font-size: 2rem;
  margin-bottom: 100px;
}

.container .feature_grid h4 {
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.container .box {
  position: relative;
  padding: 30px 10px 10px;
  transition: 0.5s;
  text-align: center;
  background: #fff;
  border-radius: 20px;
}

.container .box:hover {
  background: #0e103d;
}

.container .box h4 {
  margin: 10px 0 0;
  padding: 0;
  transition: 0.5s;
  font-size: 18px;
  color: #0e103d;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}

.container .box h4 span {
  font-weight: 600;
  font-size: 14px;
  color: #c5c5c5;
  transition: 0.5s;
}

.container .box:hover p,
.container .box:hover h4,
.container .box:hover h4 span {
  color: #fff;
}

.container .box .imgBx {
  position: absolute;
  top: -50px;
  left: 40px;
  transform: translate(-50%);
  width: 100px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}
.container .box:before {
  content: "";
  position: absolute;
  top: 20px;
  right: 40px;
  width: 80px;
  height: 80px;
  background: url(../../assets/quotes.png);
  background-size: cover;
  opacity: 0.05;
  pointer-events: none;
  transition: 0.5s;
}

.container .box:before:before {
  transform: translateY(-60px);
  opacity: 1;
}
</style>