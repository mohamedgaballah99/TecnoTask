<template>
  <div class="contact">
    <div class="container">
      <h1><span>Log</span>in</h1>
      <div class="text-center text-danger error" id="error" v-show="error">
        <h5>Please Fill all Data and Sure Email OR Password</h5>
      </div>
      <div class="row">
        <div class="com-sm-12 col-md-6 photo2">
          <div class="img">
            <img src="@/assets/login.svg" alt="login" />
          </div>
        </div>
        <div class="com-sm-12 col-md-6">
          <form @submit.prevent="getData">
            <div class="mb-3">
              <label class="form-label">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
              />
              <div class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Password:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
              />
            </div>
            <button class="btn btn-orange" >Login</button>
          </form>
        </div>
        <div class="com-sm-12 col-md-6 photo1">
          <div class="img">
            <img src="@/assets/login.svg" alt="login" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    getData() {
      // Validate inputs not empty
      if (this.email != "" && this.password != "") {
        // error Message
        this.error = false;
        // get input data and check
        if (
          this.email == localStorage.getItem("email") &&
          this.password == localStorage.getItem("password")
        ) {
          // redirecting
          this.redirectReload()

        } else {
          this.error = true;
        }
      } else {
        this.error = true;
      }
    },
    // redirecting function
    redirectReload() {
        this.$router
          .push({ path: '/' })
          .then(() => { this.$router.go() })
      }
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

.contact {
  .container {
    h1 {
      color: $pricolor;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      margin-top: 150px;
    }

    span {
      color: $seccolor;
    }

    .row {
      .photo2 {
        display: none;
      }

      > div {
        margin: auto;

        form {
          width: 100% !important;
          margin: 20px auto;
          font-family: cursive;
        }

        .img {
          width: 50% !important;
          margin: auto;

          img {
            width: 100%;
            animation: up 2s infinite;
          }
        }
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
  h1 {
    color: $pricolor;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 27px !important;
    text-align: center;
    margin-bottom: 25px;
  }

  .container {
    .row {
      .photo2 {
        display: block !important;
      }

      .photo1 {
        display: none;
      }

      > div {
        margin: auto;

        form {
          width: 90% !important;
          margin: 20px auto;
          font-family: cursive;
        }

        .img {
          width: 65% !important;
          margin: 30px auto;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
