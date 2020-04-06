<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseEigth"
      >
        <h4>Business Information</h4>
      </button>
    </div>
    <div class="collapse" id="collapseEigth" data-parent="#accordion">
      <div class="card-body">
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
            <label for="zip">Zip Code</label>
            <input type="text" id="zip" class="zip" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" class="phone" />
          </div>
          <div class="form-group">
            <label for="website">Website</label>
            <input type="website" id="website" class="website" />
          </div>
          <div class="form-group">
            <label for="category">Business Category</label>
            <input type="text" id="category" class="category" />
          </div>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">Update</button>
            <button class="btn btn-danger">Cancel</button>
          </div>
        </form>
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