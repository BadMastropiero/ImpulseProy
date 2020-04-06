<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseNine"
      >
        <h4>User Profile</h4>
      </button>
    </div>
    <div class="collapse" id="collapseNine" data-parent="#accordion">
      <div class="card-body">
        <form class="animated-form mt-5">
          <div class="justify-content-between mt-5 mb-5">
            <h4 class="text-primary">User Data</h4>
            <h5 class="text-muted">All fields are required</h5>
          </div>
          <div class="form-group">
            <label for="name">First Name</label>
            <input type="text" id="name" class="name" />
          </div>
          <div class="form-group">
            <label for="name">Last Name</label>
            <input type="text" id="name" class="name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="email" />
          </div>
          <button class="btn btn-primary">Valdiate emial</button>
          <div class="justify-content-between mt-5 mb-5">
            <h4 class="text-primary">Change password</h4>
            <h5 class="text-muted">Your password must have at least 6 characters</h5>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" id="password" class="password" />
          </div>
          <div class="form-group">
            <label for="password">Confirm password</label>
            <input type="text" id="password" class="password" />
          </div>
          <div class="form-group">
            <label for="password">New Password</label>
            <input type="text" id="password" class="password" />
          </div>
          <div class="form-group">
            <label for="password">Security Phrase</label>
            <input type="text" id="password" class="password" />
          </div>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">Update</button>
            <button class="btn btn-danger">Cancel</button>
          </div>
          <div class="justify-content-between mt-5 mb-5">
            <h4 class="text-primary">Notification Settings</h4>
            <h5 class="text-muted">Choose at least one</h5>
            <div class="d-flex flex-column justify-content-between">
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Weekly Business Summaries</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Monthly Business Summaries</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Monthly Transactions Summaries</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Reputation Alerts (most popular)</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Claim Status Alert</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Domain Expiration Alerts</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Revenue vs Category Alerts</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Key Metrics Summaries</p>
              </div>
              <div class="container">
                <ctaBtn class="mb-3" />
                <p>Funding Offers</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ctaBtn from "./../../../components/shared/ctaBtn";
export default {
  components: {
    ctaBtn
  }
};
</script>

<style scoped>
.animated-form .form-group {
  position: relative;
  display: flex;
  margin-bottom: 45px;
}

.form-group.flex-end {
  justify-content: flex-end;
}

.animated-form .form-group label {
  position: absolute;
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

.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
}
</style>