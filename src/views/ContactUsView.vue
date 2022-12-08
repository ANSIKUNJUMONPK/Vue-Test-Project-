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
                <form @submit.prevent="submitForm">
                  <div>
                    <input
                      v-model="form.name"
                      type=""
                      class="email_text"
                      placeholder="Name"
                      name="Name"
                    />
                    <p v-if="!nameIsValid">The name field is required</p>
                  </div>
                  <div>
                    <input
                      v-model="form.email"
                      type="email"
                      class="email_text"
                      placeholder="Email"
                      name="Email"
                      pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    />
                    <p v-if="!emailIsValid">The email field is required</p>
                  </div>
                  <div>
                    <input
                      v-model.number="form.phone"
                      type=""
                      class="email_text"
                      placeholder="Phone Number"
                      name="Phone Number"
                      pattern="^(\+\d{1,3}[- ]?)?\d{10}$"
                    />
                  </div>
                  <p v-if="!phoneIsValid">The phone field is required</p>

                  <div>
                    <textarea
                      v-model="form.message"
                      class="massage_text"
                      placeholder="Message"
                      rows="5"
                      id="comment"
                      name="Message"
                    ></textarea>
                    <p v-if="!messageIsValid">The message field is required</p>
                  </div>
                  <div class="send_bt">
                    <button href="#">send</button>
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
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  computed: {
    nameIsValid() {
      return !!this.form.name;
    },
    emailIsValid() {
      return !!this.form.email;
    },
    phoneIsValid() {
      return typeof this.form.phone === "number";
    },
    messageIsValid() {
      return !!this.form.message;
    },
  },
  methods: {
    clearForm() {
      for (let field in this.form) {
        this.form[field] = "";
      }
    },
    submitForm: function () {
      const formIsValid =
        this.nameIsValid &&
        this.emailIsValid &&
        this.phoneIsValid &&
        this.messageIsValid;
      if (formIsValid) {
        console.log(
          "Name=" + this.form.name,
          "\nEmail=" + this.form.email,
          "\nPhone=" + this.form.phone,
          "\nMessage=" + this.form.message
        );
        this.clearForm();
      } else {
        console.log("Invalid Form");
      }
    },
  },
};
</script>
