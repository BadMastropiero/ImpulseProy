<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseSix"
      >
        <h4>Invite your staff</h4>
      </button>
    </div>
    <div class="collapse" id="collapseSix" data-parent="#accordion">
      <div class="card-body">
        <h2 class="text-primary text-left mb-3">Staff</h2>

        <p
          class="text-muted mb-3"
        >Whether you want to give them acces to all of Impulse Reputation or just need their help managing review, your can invite your staff to lend a hand</p>
        <button class="btn btn-primary mb-4">Invite Staff</button>

        <h2>Current Users</h2>
        <div class="panel col-md-8 col-sm-12 mt-3 mb-2">
          <div class="justify-content-around">
            <div class="add-user mt-3 mb-3">
              <button class="btn btn-primary">Add user...</button>
            </div>
            <div class="dropdown mt-3 mb-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Search by:</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Name</a>
                <a class="dropdown-item" href="#">Role</a>
                <a class="dropdown-item" href="#">Date</a>
              </div>
            </div>
            <div class="d-flex mt-3 mb-3">
              <input type="text" class="form-control search-input" placeholder="Search Usuer..." />
              <button type="button" class="btn btn-success search-button rounded-1 mb-3">
                <font-awesome-icon icon="search" />
              </button>
            </div>

            <div class="search-result mt-2">
              <p class="text-muted">Showing 3 results of 500</p>
            </div>
          </div>
        </div>
        <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
          <table class="table table-striped bg-light text-center">
            <thead>
              <tr class="text-muted">
                <th>No.</th>
                <th>Name</th>
                <th>Role</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created Sate</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>John Doe</td>
                <td>Admin</td>
                <td>Impulse</td>
                <td>doe@gmail.com</td>
                <td>+12345678890</td>
                <td>active</td>
                <td>1.2.021</td>
                <td>
                  <button class="btn btn-primary">Settings</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>John Doe</td>
                <td>Admin</td>
                <td>Impulse</td>
                <td>doe@gmail.com</td>
                <td>+12345678890</td>
                <td>active</td>
                <td>1.2.021</td>
                <td>
                  <button class="btn btn-primary">Settings</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>John Doe</td>
                <td>Admin</td>
                <td>Impulse</td>
                <td>doe@gmail.com</td>
                <td>+12345678890</td>
                <td>active</td>
                <td>1.2.021</td>
                <td>
                  <button class="btn btn-primary">Settings</button>
                </td>
              </tr>
            </tbody>
          </table>
        </vue-custom-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
export default {
  components: {
    vueCustomScrollbar
  }
};
</script>

<style scoped>
</style>