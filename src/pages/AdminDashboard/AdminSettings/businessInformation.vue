<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseFive"
      >
        <h4>Business information for emails</h4>
      </button>
    </div>
    <div class="collapse" id="collapseFive" data-parent="#accordion">
      <div class="card-body">
        <div class="justify-content-between">
          <div class="text-left">
            <span
              class="text-muted"
            >What information would you like to include at the top of your emails?</span>
          </div>
          <form class="animated-form mt-5">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" class="name" />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="Address" class="Address" />
            </div>
            <div class="form-group">
              <label for="City">City</label>
              <input type="text" id="City" class="City" />
            </div>
            <div class="form-group">
              <label for="State">State</label>
              <input type="text" id="State" class="State" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" class="password" />
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary">Save</button>
              <button class="btn btn-danger">Cancel</button>
            </div>
          </form>
          <div class="mt-5">
            <h2>Customize the text in the Review Request emails that are sent to your customers</h2>
          </div>
          <h3>Email Information</h3>
          <form class="animated-form mt-5">
            <div class="form-group">
              <label for="message">Message</label>
              <input type="message" id="message" class="message" />
            </div>
          </form>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">Save</button>
            <button class="btn btn-danger">Cancel</button>
          </div>

          <div class="card card-common mt-3">
            <div class="card-body">
              <h2>Email Preview</h2>
            </div>
            <div class="card-footer">
              <h3>Some cool heading</h3>
              <h5>Some info here</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, autem sit et vero eveniet perferendis
                reprehenderit incidunt a dolor sint quae ipsum blanditiis corporis dolorum quis nobis eum, magnam nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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