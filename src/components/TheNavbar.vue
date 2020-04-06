<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link :to="{name: 'PageHome'}" class="navbar-brand" href="#">IMPULSE</router-link>
        <button
          class="navbar-toggler mr-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'PageHome'}">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'CategoryPage'}">Pricing</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link mr-2" :to="{name: 'RegisterPage'}" href="#">
                <span>Register</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mr-2" :to="{name: 'LoginPage'}" href="#">
                <span>Login</span>
              </router-link>
            </li>
            <button class="btn btn-succes">Request Demo</button>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navbar {
  background: #e9f1f7;
  padding: 10px 5px auto;

  a {
    font-size: 15px;
    padding: 0.2rem 1rem;
  }
  li {
    margin-top: 7px;
  }
}

.navbar-brand {
  margin-left: 5.5rem;
}

.navbar .form-control {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #007bff;
  background: none;
  outline: none;
}

.btn {
  border: 2px solid #007bff;
  color: #007bff;
}

.navbar .navbar-brand {
  color: #007bff;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  :hover {
    color: #050801;
  }
}

.navbar-light .navbar-nav .nav-link {
  color: #090c9b;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;
  :hover {
    color: #050801;
  }
}

@media only screen and (max-width: 767px) {
  .navbar-nav.ml-auto {
    background: rgb(24, 31, 28);
  }
  .navbar-nav {
    background: rgb(24, 31, 28);
  }
  .btn {
    width: 40%;
    margin-left: 30px;
    margin-bottom: 10px;
  }
  .navbar-toggler {
    padding: 1px 5px;
    font-size: 18px;
    line-height: 0.3;
    background: #007bff;
  }
}
</style>