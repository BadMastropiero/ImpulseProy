<template>
  <div class="footer-wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-6">
          <h3>Impulse</h3>
          <p>
            Integer ac lorem sit amet est rhoncus dapi bus don cad pede acus morbi elit nunc molestie at ultrices eu
            eleifen lorem ut dictum erat masa...
            <a
              href
            >Read More</a>
          </p>
        </div>
        <div class="category col-md-2 col-sm-6">
          <h3>Quick LInks</h3>
          <ul v-for="link in navLinks" :key="link.text" class="footer-links">
            <li>
              <router-link :to="link.path">{{ link.text }}</router-link>
            </li>
          </ul>
        </div>
        <div class="category col-md-3 col-sm-6">
          <h3>Services</h3>
          <ul v-for="category in serviceLinks" :key="category.text" class="footer-category">
            <li>
              <router-link :to="category.path">{{ category.text }}</router-link>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="category col-md-3 col-sm-6">
          <h3>Follow Us</h3>
          <ul v-for="category in followusLinks" :key="category.text" class="footer-category">
            <li>
              <router-link :to="category.path">{{ category.text }}</router-link>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="category col-md-2 col-sm-6">
          <h3>Support</h3>
          <div class="address">Lorem # 38, Ispum Hill, Lorem, WA 12345</div>
          <div class="info">
            <a href="#.">(777) 123 4567</a>
          </div>
          <div class="info">
            <a href="#.">(123) 456 7890</a>
          </div>
        </div>
      </div>
      <div class="copyright">Copyright © 2020 Classify - All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      {
        text: "About",
        path: "/about"
      },
      {
        text: "Pricing",
        path: "/Pricing"
      },
      {
        text: "FAQ",
        path: "/faq"
      },
      {
        text: "Contact",
        path: "/contact"
      }
    ],
    serviceLinks: [
      {
        text: "Service1",
        path: "/service1"
      },
      {
        text: "Service2",
        path: "/service1"
      },
      {
        text: "Service3",
        path: "/service1"
      },
      {
        text: "Service4",
        path: "/service4"
      },
      {
        text: "Service5",
        path: "/service5"
      }
    ],
    followusLinks: [
      {
        text: "Facebook",
        path: "/service1"
      },
      {
        text: "Twitter",
        path: "/service1"
      },
      {
        text: "Instagram",
        path: "/service1"
      },
      {
        text: "Youtube",
        path: "/service4"
      },
      {
        text: "Linkein",
        path: "/service5"
      }
    ]
  })
};
</script>

<style scoped >
.footer-wrap {
  background: #007bff;
  padding-top: 30px;
  background-size: cover;
  padding-top: 250px;
  text-align: center;
  padding: 160px;
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

.container .category li {
}

.footer-wrap h3 {
  color: #fbf5f3;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.footer-wrapp p {
  font-size: 14px;
  line-height: 24px;
  color: #fbf5f3;
  margin-top: 15px;
}

.footer-wrap a {
  color: #fff;
}

.footer-wrap li a {
  font-size: 14px;
  line-height: 26px;
  color: #fbf5f3;
  text-decoration: none;
}

.address {
  color: #fbf5f3;
  font-size: 14px;
  position: relative;
  padding-left: 30px;
  line-height: 30px;
}

.info a {
  color: #fbf5f3;
  font-size: 14px;
  line-height: 30px;
  font-weight: normal;
}

.info a {
  color: #fbf5f3;
  font-size: 14px;
  line-height: 30px;
  font-weight: normal;
}

.copyright {
  border-top: 1px solid #5f5f5f;
  font-size: 14px;
  color: #fbf5f3;
  margin-top: 25px;
  padding-top: 10px;
  text-align: center;
  padding-bottom: 10px;
}

ul {
  list-style: none;
}

.footer-category li a {
  font-size: 14px;
  line-height: 26px;
  color: #fbf5f3;
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  .footer-wrap {
    padding-top: 25px;
  }
}
</style>