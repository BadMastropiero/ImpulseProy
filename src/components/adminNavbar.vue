<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <button
      class="navbar-toggler ml-auto mb-2 bg-light"
      type="button"
      data-toggle="collapse"
      data-target="#myNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
      <div class="container-fluid">
        <div class="row">
          <sideNavbar />
          <topNavbar />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import sideNavbar from "./sideNavbar";
import topNavbar from "./topNavbar";
export default {
  components: {
    sideNavbar,
    topNavbar
  }
};
</script>

<style scoped lang="scss">
</style>