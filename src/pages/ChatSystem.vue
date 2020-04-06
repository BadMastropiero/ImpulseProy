<template>
  <div>
    <adminNavbar />

    <section class="mt-5">
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div class="row align-items-center">
              <div class="col-xl-4 col-12">
                <h3 class="text-muted text-center mb-3">Team Members</h3>
                <tables />
              </div>
              <div class="col-xl-12 col-12 mb-4 mb-xl-0">
                <div class="card chat">
                  <chatSystem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import adminNavbar from "../components/adminNavbar";
import tables from "./AdminDashboard/tables";
import chatSystem from "./AdminDashboard/ChatSystem/chatSystem";

export default {
  components: {
    adminNavbar,
    tables,
    chatSystem
  }
};
</script>

<style scoped>
</style>