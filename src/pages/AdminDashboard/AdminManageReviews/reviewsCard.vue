<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
          <div class="row pt-md-5 mt-md-3 mb-5">
            <div class="col-xl-3 col-sm-6 p-2">
              <div class="card card-common">
                <div class="d-flex justify-content-between card-header">
                  <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                  <p class="text-right text-muted">31 de marzo, 2020</p>
                  <img
                    src="../../../assets/cust4.jpeg"
                    width="50"
                    height="50"
                    class="rounded-circle ml-2 mr-1"
                  />
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div class="text-center justify-content-center">
                      <h5>Jane Doe</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis alias aperiam vero quos,
                        repudiandae rem sunt, reiciendis nam esse possimus, tempora fugiat suscipit debitis error numquam.
                        Deserunt, id tempora.
                      </p>
                      <star-rating :star-size="20" :increment="0.01"></star-rating>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-secondary">
                  <button class="btn btn-dark" data-toggle="modal" data-target="#message">Respond</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <reviewsModal />
  </section>
</template>

<script>
import StarRating from "vue-star-rating";
import reviewsModal from "./reviewsModal";

export default {
  components: {
    StarRating,
    reviewsModal
  }
};
</script>

<style scoped>
.rowoverlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  bottom: 0;
  right: 0;
  height: 100%;
  padding: 50px;
}

.card-common {
  box-shadow: 1px 2px 5px #999;
  transition: all 0.4s;
}

.card-common:hover {
  box-shadow: 2px 3px 15px #999;
  transform: translateY(-1px);
}
</style>