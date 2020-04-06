<template>
  <div>
    <TheNavbar />
    <div class="row col-lg-12">
      <div class="right-panel col-md-6">
        <h1>
          Log in
          <div class="register">
            <router-link :to="{name: 'RegisterPage'}" href="#" class="link">I don't have an account</router-link>
          </div>
        </h1>
        <form class="animated-form">
          <div class="form-group">
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
              <label for="email">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Your email"
                id="email"
                class="email"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider name="email" rules="required" v-slot="{ errors }">
              <label for="password">Password</label>
              <input
                v-model="form.password"
                type="password"
                placeholder="Your Password"
                id="password"
                class="password"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="lost-password mb-3">
            <a href="#" class="link">Forgot your password?</a>
          </div>

          <div class="lost-email mb-3">
            <a href="#" class="link">Forgot your email?</a>
          </div>

          <button @click.prevent="login" class="login-btn">
            <shopBtn />
          </button>
        </form>
      </div>
      <div class="left-panel col-md-6">
        <div class="illustration">
          <img src alt="Illustration" class="img-fluid" />
        </div>
        <h2>Comprar nunca ha sido tan fácil!!!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./../components/TheNavbar";
import shopBtn from "../components/shared/shopBtn";
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
extend("email", email);
extend("required", required);

export default {
  components: {
    shopBtn,
    TheNavbar,
    ValidationProvider
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("auth/loginWithEmailAndPassword", this.form)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => console.log(err));
      // .catch(errorMessage => {
      //   this.$toasted.error(errorMessage, { duration: 5000 });
      // });
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  display: flex;
  min-height: 50vh;
}

.left-panel {
  flex: 1 1 66.666%;
  background-image: linear-gradient(to bottom right, #13b3ff, #03e9f4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-panel .illustration {
  margin-top: 40px;
  margin-bottom: 50px;
}

.left-panel h5 {
  color: #050801;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
}

.right-panel {
  margin-top: 40px;
  flex: 1 1 33.333%;
  padding: 25px;
}

.right-panel h5 {
  color: #13b3ff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.right-panel h1 {
  color: #13b3ff;
  font-weight: 600;
  margin-bottom: 100px;
}

.right-panel h1 a {
  font-size: 18px;
}

.animated-form .form-group {
  position: relative;
  display: flex;
  margin-bottom: 45px;
}

.form-group.flex-end {
  justify-content: flex-end;
}

.animated-form .form-group label {
  position: relative;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group input {
  display: block;
  width: 100%;
  padding: 10px 0px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 3px solid #aaa;
  transition: 0.4s ease-out;
  color: #666;
  font-size: 20px;
}

.animated-form .form-group:focus-within label,
.animated-form .form-group.has-content label {
  top: 0px;
  transform: translateY(-100%);
  color: #181f1c;
}
.animated-form .form-group:focus-within input,
.animated-form .form-group.has-content input {
  border-bottom-color: #181f1c;
}
.animated-form .form-group.flex-end {
  margin-bottom: 25px;
}

.animated-form .lost-password a {
  margin-top: 30px;
  color: #13b3ff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}
.animated-form .lost-password a:hover {
  border-bottom-color: #13b3ff;
}

.animated-form .lost-email a {
  margin-top: 30px;
  color: #13b3ff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}
.animated-form .lost-email a:hover {
  border-bottom-color: #13b3ff;
}

.login-btn {
  border: none;
  -webkit-appearance: none;
  :focus-within {
    border: none;
    -webkit-appearance: none;
  }
}
</style>