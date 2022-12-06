<template>
  <!-- Choose -->
  <div>
    <div class="footer_section layout_padding">
      <div class="container">
        <div class="footer_main">
          <div class="footer_left">
            <h1 class="contact_taital">
              <span>Contact </span> <img src="../assets/images/icon-2.png" />
              <span>Us</span>
            </h1>
          </div>
          <div class="footer_left">
            <div class="location_text">
              <a href="#"
                ><img src="../assets/images/map-icon.png" /><span
                  class="padding_left_15"
                  >Locations</span
                ></a
              >
            </div>
          </div>
          <div class="footer_left">
            <div class="location_text">
              <a href="#"
                ><img src="../assets/images/call-icon.png" /><span
                  class="padding_left_15"
                  >+71 9876543210</span
                ></a
              >
            </div>
          </div>
          <div class="footer_left">
            <div class="location_text">
              <a href="#"
                ><img src="../assets/images/map-icon.png" /><span
                  class="padding_left_15"
                  >demo@gmail.com</span
                ></a
              >
            </div>
          </div>
        </div>
        <div class="contact_section">
          <div class="row">
            <div class="col-md-6">
              <div class="mail_section">
                <form>
                  <input
                    v-model="name"
                    type=""
                    class="email_text"
                    placeholder="Name"
                    name="Name"
                  />
                  <input
                    v-model="email"
                    type=""
                    class="email_text"
                    placeholder="Email"
                    name="Email"
                  />
                  <input
                    v-model="phone"
                    type=""
                    class="email_text"
                    placeholder="Phone Number"
                    name="Phone Number"
                  />
                  <textarea
                    v-model="message"
                    class="massage_text"
                    placeholder="Message"
                    rows="5"
                    id="comment"
                    name="Message"
                  ></textarea>
                  <div class="send_bt" v-on:click.prevent="submitForm">
                    <a href="#">send</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_main">
                <div class="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="280"
                    frameborder="0"
                    style="border: 0; width: 100%"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="social_icon">
                <ul>
                  <li>
                    <a href="#"><img src="../assets/images/fb-icon1.png" /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="../assets/images/twitter-icon1.png"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="../assets/images/linkden-icon1.png"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="../assets/images/instagram-icon1.png"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUsView",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    submitForm: function () {
      console.log(
        "Name=" + this.name,
        "\nEmail=" + this.email,
        "\nPhone=" + this.phone,
        "\nMessage=" + this.message
      );
    },
  },
};
</script>
