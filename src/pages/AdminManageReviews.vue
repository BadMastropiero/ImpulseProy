<template>
  <div>
    <AdminNavbar />
    <reviewsPanel />
    <reviewsCard />
  </div>
</template>

<script>
import AdminNavbar from "../components/adminNavbar";
import reviewsPanel from "./AdminDashboard/AdminManageReviews/reviewsPanel";
import reviewsCard from "./AdminDashboard/AdminManageReviews/reviewsCard";

export default {
  components: {
    AdminNavbar,
    reviewsPanel,
    reviewsCard
  }
};
</script>

<style scoped>
</style>