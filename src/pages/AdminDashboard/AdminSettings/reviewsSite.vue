<template>
  <div class="card">
    <div class="card-header">
      <button
        class="btn btn-block bg-secondary text-light text-left"
        data-toggle="collapse"
        data-target="#collapseThree"
      >
        <h4>Reviews Site</h4>
      </button>
    </div>
    <div class="collapse" id="collapseThree" data-parent="#accordion">
      <div class="card-body">
        <h3 class="text-primary text-center mb-3"></h3>
        <p
          class="text-muted text-center mb-3"
        >Replay to all of you reviews in one place by simply adding your URL and login credentials for each review site below</p>
        <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
          <table class="table table-striped bg-light text-center">
            <thead>
              <tr class="text-muted">
                <th>Site</th>
                <th>Your URL</th>
                <th>Status</th>
                <th>Credentials</th>
                <th>Unlink</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                </th>
                <td>
                  <input type="text" class="form-control search-input" />
                </td>
                <td>Linked</td>
                <td>
                  <button type="button" class="btn btn-info btn-sm">Get it</button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm">Stop follow</button>
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
</script>

<style scoped>
</style>