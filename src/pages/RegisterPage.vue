
<template>
  <div>
    <TheNavbar />
    <div class="row col-lg-12">
      <div class="right-panel col-md-6">
        <h1>
          Getting Started
          <h5>Already have an account??</h5>
        </h1>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" class="animated-form">
            <div class="form-group">
              <ValidationProvider rules="required|min:5|max:15|alpha" v-slot="{ errors }">
                <label for="name">First Name</label>
                <input
                  v-model="form.firstname"
                  type="text"
                  placeholder="First Name"
                  id="First Name"
                  class="name"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="required|min:5|max:15|alpha" v-slot="{ errors }">
                <label for="name">Last Name</label>
                <input
                  v-model="form.lastname"
                  type="text"
                  placeholder="Last Name"
                  id="Last Name"
                  class="name"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                <label for="email">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Your Email"
                  id="Email"
                  class="email"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="required|integer" v-slot="{ errors }">
                <label for="phone">Phone</label>
                <input
                  v-model="form.phonenumber"
                  type="phone"
                  placeholder="Your Phone"
                  id="Phone"
                  class="phone"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <ValidationObserver>
              <div class="form-group">
                <ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
                  <label for="password">Password</label>
                  <input
                    v-model="form.password"
                    type="password"
                    placeholder="Your Password"
                    id="Password"
                    class="password"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <br />
              <div class="form-group">
                <ValidationProvider v-slot="{ errors }" vid="confirmation">
                  <label for="password">Confirm Password</label>
                  <input
                    v-model="form.confirmpassword"
                    type="password"
                    placeholder="Confirm your password"
                    id="confirmpassword"
                    class="confirmpassword"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </ValidationObserver>

            <ctaBtn class="mb-3" />
            <p>Enable text notifications</p>
            <ctaBtn class="mb-3" />
            <p>Enable emails</p>
            <button @click="register" type="submit" class="btn btn-primary">
              <span>Register</span>
            </button>
            <p class="term">
              By signing up you agree to Impulse Retutation
              <a href>Terms and Conditions</a> and
              <a href>Privacy Policy</a>
            </p>
          </form>
        </ValidationObserver>
      </div>
      <div class="left-panel col-md-6">
        <div class="illustration">
          <img src alt="Ilustration" class="img-fluid" />
        </div>
        <h2>Comprar nunca ha sido tan fácil!!!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./../components/TheNavbar";
// import shopBtn from "../components/shared/shopBtn";
import ctaBtn from "../components/shared/ctaBtn";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  alpha,
  integer
} from "vee-validate/dist/rules";
extend("required", required);
extend("email", email);
extend("min", min);
extend("max", max);
extend("alpha", alpha);
extend("integer", integer);

export default {
  name: "Register",
  components: {
    // shopBtn,
    TheNavbar,
    ctaBtn,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        phonenumber: null
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("auth/registerUser", this.form).then(() => {
        this.$router.push("/login");
      });
      // .catch(errorMessage => {
      //   this.$toasted.error(errorMessage, { duration: 5000 });
      // });
    },
    onSubmit() {
      alert("Form has been submitted!");
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

.term {
  margin-top: 100px;
}

.register-btn {
  border: none;
  -webkit-appearance: none;
  :focus-within {
    border: none;
    -webkit-appearance: none;
  }
}

@media only screen and (max-width: 767px) {
  .left-panel {
    display: none;
  }

  .right-panel {
    padding: 15px;
  }
}
</style>