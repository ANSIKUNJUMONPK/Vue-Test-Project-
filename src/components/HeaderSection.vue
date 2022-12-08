<template>
  <!--Header -->
  <div class="header_section background_bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="logo">
            <a href=""><img src="../assets/images/logo.png" /></a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="menu_text">
            <ul>
              <div class="togle_3">
                <div class="menu_main">
                  <div class="padding_left0">
                    <a href="#">Register</a>
                    <span class="padding_left0"><a href="#">Login</a></span>
                  </div>
                </div>
                <div class="shoping_bag">
                  <img src="../assets/images/search-icon.png" />
                </div>
              </div>
              <div id="myNav" class="overlay">
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  @click="closeNav()"
                  >&times;</a
                >
                <div class="overlay-content">
                  <a href="/">Home</a>
                  <a href="services">Services</a>
                  <a href="about">About</a>
                  <a href="choose">Choose</a>
                  <a href="team">Team</a>
                  <a href="contact">Contact Us</a>
                </div>
              </div>
              <span class="navbar-toggler-icon"></span>
              <span @click="openNav()"
                ><img
                  src="../assets/images/toggle-icon.png"
                  class="toggle_menu"
              /></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
  },
};
</script>
