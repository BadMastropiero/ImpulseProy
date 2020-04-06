<template>
  <div>
    <!-- top-nav -->
    <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
      <div class="row align-items-center">
        <div class="col-md-4 d-flex">
          <h4 class="text-light text-uppercase mb-0">Dashboard</h4>
        </div>
        <div class="col-md-5">
          <form>
            <div class="input-group">
              <input type="text" class="form-control search-input" />
              <button type="button" class="btn btn-white search-button">
                <font-awesome-icon icon="search" />
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-3">
          <ul class="navbar-nav">
            <li class="nav-item icon-parent">
              <a href="#" class="nav-link icon-bullet">
                <font-awesome-icon icon="comments" />
              </a>
            </li>
            <li class="nav-item icon-parent">
              <a href="#" class="nav-link icon-bullet">
                <font-awesome-icon icon="bell" />
              </a>
            </li>
            <li class="nav-item ml-md-auto">
              <a href="#" class="nav-link" data-toggle="modal" data-target="#sign-out">
                <font-awesome-icon icon="sign-out-alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end of top-nav -->
    <exitModal id="sign-out" />
  </div>
</template>

<script>
import exitModal from "../pages/AdminDashboard/exitModal";

export default {
  components: {
    exitModal
  }
};
</script>

<style scoped>
.top-navbar {
  width: 100%;
  background: linear-gradient(45deg, #090c9b, #13b3ff);
}

.search-input {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #e9f1f7;
  transition: all 0.4s;
}

.search-input:focus {
  background: transparent;
  box-shadow: none;
  border-bottom: 2px solid #050801;
}

.search-button {
  border-radius: 50%;
  padding: 10px 16px;
  transition: all 0.4s;
}

.search-button:hover {
  background-color: #e9f1f7;
  transform: translateY(-1px);
}

.icon-parent {
  position: relative;
}

.icon-bullet::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 15px;
  height: 8px;
  width: 8px;
  background-color: #f44336;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .top-navbar {
    position: static;
  }
}
</style>