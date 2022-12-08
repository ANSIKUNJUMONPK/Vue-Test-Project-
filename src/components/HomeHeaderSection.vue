<template>
  <!--Header  -->
  <div class="header_section">
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
    <!-- banner section-->
    <div class="banner_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <h1 class="banner_taital">Best YOUR</h1>
            <h1 class="banner_taital_1">house CLEAN</h1>
            <p class="banner_text">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim
            </p>
            <div class="contact_bt">
              <a href="contact"
                >CONTACT US<span class="contact_padding"
                  ><img src="../assets/images/contact-icon.png" /></span
              ></a>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="play_icon">
              <a href="#"><img src="../assets/images/play-icon.png" /></a>
            </div>
          </div>
          <div class="col-sm-5">
            <div><img src="../assets/images/img-1.png" class="image_1" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeaderSection",
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
