<template>
  <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
    <a
      href="#"
      class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border"
    >Impulse</a>
    <div class="bottom-border pb-3">
      <img src="images/admin.jpeg" width="50" class="rounded-circle mr-3" />
      <a v-if="user" href="#" class="text-white">Welcome {{ user.firstname }}</a>
    </div>

    <ul class="navbar-nav flex-column mt-4">
      <vue-custom-scrollbar class="scroll-area" :settings="settings">
        <li class="nav-item">
          <router-link
            :to="{name: 'AdminDashboard'}"
            href="#"
            class="nav-link text-white p-3 mb-2 current"
          >
            <font-awesome-icon icon="home" class="text-light fa-lg mr-3" />Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name: 'AdminManageReviews'}"
            href="#"
            class="nav-link text-white p-3 mb-2 sidebar-link"
          >
            <font-awesome-icon icon="table" class="text-light fa-lg mr-3" />Reviews
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
            <font-awesome-icon icon="envelope" class="text-light fa-lg mr-3" />Request Reviews
          </a>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name: 'ChatSystem'}"
            href="#"
            class="nav-link text-white p-3 mb-2 sidebar-link"
          >
            <font-awesome-icon icon="comment-alt" class="text-light fa-lg mr-3" />Chat
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
            <font-awesome-icon icon="chart-line" class="text-light fa-lg mr-3" />Analytics
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
            <font-awesome-icon icon="chart-bar" class="text-light fa-lg mr-3" />Charts
          </a>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'dashboardSettings' }"
            href="#"
            class="nav-link text-white p-3 mb-2 sidebar-link"
          >
            <font-awesome-icon icon="wrench" class="text-light fa-lg mr-3" />Settings
          </router-link>
        </li>

        <!--


        <li class="nav-item">
          <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
            <font-awesome-icon icon="shopping-cart" class="text-light fa-lg mr-3" />Sales
          </a>
        </li>




        <li class="nav-item">
          <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
            <font-awesome-icon icon="file-alt" class="text-light fa-lg mr-3" />Documentation
          </a>
        </li>
        -->
      </vue-custom-scrollbar>
    </ul>
  </div>

  <!-- end of sidebar -->
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import { mapGetters } from "vuex";
export default {
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser"
    })
  }
};
</script>

<style scoped>
.scroll-area {
  position: relative;
  margin: auto;
  height: 400px;
}

.sidebar {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 7px 25px #999;
}

.bottom-border {
  border-bottom: 1px groove #eee;
}

.sidebar-link {
  transition: all 0.4s;
}

.sidebar-link:hover {
  background-color: #444;
  border-radius: 5px;
}

.current {
  background-color: #f44336;
  border-radius: 7px;
  box-shadow: 2px 5px 10px #111;
  transition: all 0.3s;
}

.current:hover {
  background-color: #f66436;
  border-radius: 7px;
  box-shadow: 2px 5px 20px #111;
  transform: translateY(-1px);
}
.text-white {
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .sidebar {
    position: static;
    height: auto;
    width: 100%;
  }
}
</style>