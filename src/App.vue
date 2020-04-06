<template>
  <div id="App">
    <router-view></router-view>
    <usersChat class="userChat" />
  </div>
</template>

<script>
import usersChat from "./components/usersChat";
export default {
  components: {
    usersChat
  },
  name: "App"
};
</script>

<style scoped>
#App {
  font-family: "Cairo", sans-serif;
  color: #050801;
  background-color: #e9f1f7;
}
</style>