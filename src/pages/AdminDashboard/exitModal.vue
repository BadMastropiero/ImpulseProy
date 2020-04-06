<template>
  <div class="modal fade" id="sign-out">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Want to leave?</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">Press logout to leave</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-stay" data-dismiss="modal">Stay Here</button>
          <button type="button" class="btn btn-exit" data-dismiss="modal">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-stay {
  background: #090c9b;
  color: #e9f1f7;
}
.btn-exit {
  background: #f44336;
  color: #e9f1f7;
}
</style>