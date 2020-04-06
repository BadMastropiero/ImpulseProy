<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-md-4 border-right">
        <div class="settings-tray">
          <img class="profile-image" src="../../../assets/cust4.jpeg" alt="Profile image" />
          <span class="settings-tray--right float-right">
            <font-awesome-icon icon="home" class="menu-chat-icon" />
            <font-awesome-icon icon="redo" class="menu-chat-icon" />
            <font-awesome-icon icon="comment-dots" class="menu-chat-icon" />
          </span>
          <div class="search-box">
            <div class="input-wrapper">
              <font-awesome-icon icon="search" class="menu-search-icon" />
              <input type="text" placeholder="search" />
            </div>
          </div>
        </div>
        <div class="friend-drawer friend-drawer--onhover">
          <img src="../../../assets/cust5.jpeg" alt="friend-photo" class="profile-image" />
          <div class="text">
            <h6>Genji</h6>
            <p class="text-muted">Whats up!!</p>
          </div>
          <span class="time text-muted small">4:25</span>
        </div>
        <hr />
        <div class="friend-drawer friend-drawer--onhover">
          <img src="../../../assets/cust6.jpeg" alt="friend-photo" class="profile-image" />
          <div class="text">
            <h6>Tamayo</h6>
            <p class="text-muted">You can missed!!</p>
          </div>
          <span class="time text-muted small">3:50</span>
        </div>
        <hr />
        <div class="friend-drawer friend-drawer--onhover">
          <img src="../../../assets/user1.png" alt="friend-photo" class="profile-image" />
          <div class="text">
            <h6>Himari</h6>
            <p class="text-muted">You miss me??</p>
          </div>
          <span class="time text-muted small">1:21</span>
        </div>
        <hr />
        <div class="friend-drawer friend-drawer--onhover">
          <img src="../../../assets/cust1.jpeg" alt="friend-photo" class="profile-image" />
          <div class="text">
            <h6>Todoroki</h6>
            <p class="text-muted">Im passing near by</p>
          </div>
          <span class="time text-muted small">11:47</span>
        </div>
        <hr />
      </div>
      <div class="col-md-8">
        <div class="settings-tray">
          <span class="settings-tray--right float-right mt-2">
            <font-awesome-icon icon="home" class="menu-chat-icon" />
            <font-awesome-icon icon="redo" class="menu-chat-icon" />
            <font-awesome-icon icon="comment-dots" class="menu-chat-icon" />
          </span>
          <div class="friend-drawer no-gutters friend-drawer--grey">
            <img src="../../../assets/cust3.jpeg" alt="friend-photo" class="profile-image" />
            <div class="text">
              <h6>Sakura</h6>
              <p class="text-muted">From the word summit</p>
            </div>
          </div>
        </div>
        <div class="chat-panel">
          <div class="row no-gutters">
            <div class="col-md-3">
              <div class="chat-bubble chat-bubble--left">Hello my best dude!!</div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-3 offset-md-9">
              <div class="chat-bubble chat-bubble--blue chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-3">
              <div class="chat-bubble chat-bubble--left">Hello my best dude!!</div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-3 offset-md-9">
              <div class="chat-bubble chat-bubble--blue chat-bubble--right">Hello dude!</div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-md-3">
              <div class="chat-bubble chat-bubble--left">Hello my best dude!!</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="chat-box-troy">
                <font-awesome-icon icon="pen-fancy" class="menu-panel-icon" />
                <input type="text" placeholder="type your message here" />
                <font-awesome-icon icon="microphone" class="menu-panel-icon" />
                <font-awesome-icon icon="rocket" class="menu-panel-icon" />
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

<style scoped lang="scss">
$blue: #74b9ff;

.container {
  margin: 60 auto;
  background: #fff;
  padding: 0;
  border-radius: 7px;
  .settings-tray {
    background: #eee;
    padding: 10px 15px;
    border-radius: 7px;
    :hover {
      color: $blue;
      cursor: pointer;
    }
  }
}
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.menu-chat-icon {
  margin-top: 13px;
  font-size: 25px;
  color: grey;
  margin-left: 14px;
  transition: 0.3s;
}

.search-box {
  background: #fafafa;
  padding: 10px 13px;
  margin-top: 10px;
}

.input-wrapper {
  background: #fff;
  border-radius: 40px;

  .menu-search-icon {
    color: grey;
    margin-left: 7px;
    vertical-align: middle;
  }
  input {
    border: none;
    border-radius: 30px;
    width: 80%;
    margin-left: 10px;

    &::placeholder {
      color: #e3e3e3;
      font-weight: 300;
      margin-left: 20px;
    }

    &:focus {
      outline: none;
    }
  }
}

.friend-drawer {
  padding: 10px 15px;
  display: flex;
  vertical-align: baseline;
  background: #fff;
  transition: 0.3s ease;

  &--grey {
    background: #eee;
  }

  .text {
    margin-left: 12px;
    width: 70%;

    h6 {
      margin-top: 6px;
      margin-bottom: 0;
    }

    p {
      margin: 0;
    }
  }

  .time {
    color: grey;
  }

  &--onhover:hover {
    background: $blue;
    cursor: pointer;

    p,
    h6,
    .time {
      color: #fff !important;
    }
  }
}

hr {
  margin: 5px auto;
  width: 60%;
}

.chat-bubble {
  padding: 10px 14px;
  background: #eee;
  margin: 10px 30px;
  border-radius: 9px;
  position: relative;
  animation: fadeIn 1s ease-in;

  &--blue {
    background: $blue;
    color: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom: 0;
    margin-top: -10px;
  }

  &--left {
    &:after {
      left: 0;
      border-right-color: #eee;
      border-left: 0;
      margin-left: -20px;
    }
  }

  &--right {
    &:after {
      right: 0;
      border-left-color: $blue;
      border-right: 0;
      margin-right: -20px;
    }
  }
}

.chat-box-troy {
  background: #eee;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  align-items: center;
  margin-top: 19px;
  bottom: 0;

  input {
    margin: 0 10px;
    padding: 6px 2px;
    width: 60%;
    margin-top: 7px;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
  }
}

.menu-panel-icon {
  color: grey;
  font-size: 30px;
  vertical-align: middle;
  margin: 10px 10px auto;
  vertical-align: middle;
  :hover {
    cursor: pointer;
    color: $blue;
  }
}
</style>