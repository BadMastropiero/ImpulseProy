<template>
  <div class="container-fluid mt-5">
    <div class="row wrap">
      <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
        <div class="row align-items-center">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h4>Reviews Panel</h4>
              </div>
              <div class="card-body d-flex justify-content-between align-content-center">
                <button class="btn btn-primary">All Reveiws</button>
                <span class="mt-2">465 total</span>
                <div class="input-group col-xl-4">
                  <input type="text" class="form-control search-input" placeholder="Search Review" />
                  <button type="button" class="btn btn-white search-button">
                    <font-awesome-icon icon="search" />
                  </button>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Filters</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Latest</a>
                    <a class="dropdown-item" href="#">Day Before</a>
                    <a class="dropdown-item" href="#">Last week</a>
                  </div>
                </div>
              </div>
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
</style>