<template>
  <div>
    <div class="modal fade" id="message">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Messege</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="animated-form">
              <div class="form">
                <div class="form-group">
                  <label for="text">Text</label>
                  <input type="text" id="text" class="text" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-stay" data-dismiss="modal">Send</button>
            <button type="button" class="btn btn-exit" data-dismiss="modal">Cancel</button>
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
</style>