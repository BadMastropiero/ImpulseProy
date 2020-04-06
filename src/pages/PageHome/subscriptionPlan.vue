<template>
  <div class="about">
    <div class="container">
      <h1 class="plan">Our Plans</h1>
      <br />
      <div class="cta-btn">
        <div class="row d-flex justify-content-center align-items-center">
          <span class="monthly">Monthly</span>
          <ctaBtn />
          <span class="yearly">Yearly</span>
          <span class="save">20% save</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 crl1 about_grid">
          <div class="heading">
            <h2>Influencer</h2>
            <p>Best for small individuals</p>
          </div>
          <div class="body">
            <h2>$84</h2>
            <p>per month</p>
          </div>
          <shopBtn />
        </div>

        <div class="col-md-4 crl2 about_grid">
          <div class="heading">
            <h2>Agency</h2>
            <p>Best for growing teams</p>
          </div>
          <div class="body">
            <h2>$120</h2>
            <p>per month</p>
          </div>
          <shopBtn />
        </div>
        <div class="col-md-4 crl3 about_grid">
          <div class="heading">
            <h2>Enterprise</h2>
            <p>Best for large brands</p>
          </div>
          <div class="body">
            <h2>Lets talk</h2>
            <p>a lot of developers i speak to are interested in earning a side</p>
            <shopBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ctaBtn from "../../components/shared/ctaBtn";
import shopBtn from "../../components/shared/shopBtn";
export default {
  components: {
    ctaBtn,
    shopBtn
  }
};
</script>

<style scoped>
.cta-btn {
  text-align: center;
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
  margin-bottom: 100px;
}

.cta-btn .monthly {
  margin-right: 10px;
  margin-top: 20px;
  font-size: 15px;
  padding: 15px;
  font-weight: 700;
}

.cta-btn .yearly {
  margin-left: 10px;
  margin-top: 20px;
  font-size: 15px;
  padding: 15px;
  font-weight: 700;
}

.cta-btn .save {
  font-size: 12px;
  background: #e4ff1a;
  margin-top: 20px;
  border-radius: 50px;
  padding: 10px;
}

.about {
  text-align: center;
  margin-bottom: 80px;
}

.about .heading {
  margin-bottom: 50px;
}

.about .body {
  margin-bottom: 50px;
}

.about h1 p {
  text-align: center;
  color: #000;
}

.about h1 {
  border-top: 1px solid #000;
  letter-spacing: 5px;
  font-size: 55px;
  color: #000;
  padding: 10px;
  font-weight: 700;
}

.about h2 {
  font-style: bold;
  font-weight: 700;
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
  border-radius: 40px;
}

.about_grid h4 {
  margin-top: 25px;
}

.about_grid p {
  padding-bottom: 10px;
  color: #050801;
  margin-top: 15px;
  margin-bottom: 25px;
  border-bottom: 2px solid #050801;
}

.about_grid:hover {
  box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 15px 70px 2px rgba(0, 0, 0, 0.75);
}

@media only screen and (max-width: 432px) {
  .cta-btn .monthly {
    font-size: 10px;
    padding: 5px;
  }

  .cta-btn .yearly {
    font-size: 10px;
    padding: 5px;
  }

  .cta-btn .save {
    font-size: 10px;

    padding: 5px;
  }
}

@media only screen and (max-width: 333px) {
  .cta-btn .monthly {
    font-size: 10px;
    padding: 2px;
  }

  .cta-btn .yearly {
    font-size: 10px;
    padding: 2px;
  }

  .cta-btn .save {
    font-size: 10px;

    padding: 2px;
  }
}
</style>