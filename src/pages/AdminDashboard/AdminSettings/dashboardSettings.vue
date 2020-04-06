<template>
  <div>
    <!-- navbar -->
    <adminNavbar />
    <!-- tables -->
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div class="row align-items-center mb-5">
              <div class="col-xl-12">
                <h4 class="text-muted mb-4">Adjust Settings</h4>
                <div id="accordion">
                  <automatedReviews />
                  <autoReplay />
                  <reviewsSite />
                  <customersList />
                  <businessInformation />
                  <inviteStaff />
                  <subscriptionPlan />
                  <businessDatail />
                  <userProfile />
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
import adminNavbar from "../../../components/adminNavbar";
import automatedReviews from "./automatedReviews";
import autoReplay from "./autoReplay";
import reviewsSite from "./reviewsSite";
import customersList from "./customersList";
import businessInformation from "./businessInformation";
import inviteStaff from "./inviteStaff";
import subscriptionPlan from "./subscriptionPlan";
import businessDatail from "./businessDetail";
import userProfile from "./userProfile";

export default {
  components: {
    adminNavbar,
    automatedReviews,
    autoReplay,
    reviewsSite,
    customersList,
    businessInformation,
    inviteStaff,
    subscriptionPlan,
    businessDatail,
    userProfile
  }
};
</script>

<style scoped>
</style>