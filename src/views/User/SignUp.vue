<template>
  <div class="contact">
    <div class="container">
      <h1><span>Sign</span>up</h1>
      <div class="text-center text-danger error" v-show="error">
        <h5>Please Fill all Data and Sure ConfirmPassword</h5>
      </div>
      <div class="row">
        <div class="com-sm-12 col-md-6 photo2">
          <div class="img">
            <img src="@/assets/signup.svg" alt="signup" />
          </div>
        </div>
        <div class="com-sm-12 col-md-6">
          <form @submit.prevent="sendData">
            <div class="mb-3">
              <label class="form-label">Full Name:</label>
              <input type="text" class="form-control" id="name" v-model="name"/>
            </div>
            <div class="mb-3">
              <label class="form-label">Email address:</label>
              <input type="email" class="form-control" id="email" v-model="email" />
              <div class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Password:</label>
              <input type="password" class="form-control" id="password"  v-model="password" />
            </div>
            <div class="mb-3">
              <label class="form-label">Confirm Password:</label>
              <input type="password" class="form-control" id="conpassword"  v-model="conpassword" />
            </div>
            <button class="btn btn-orange" id="signup">Sign Up</button>
          </form>
        </div>
        <div class="com-sm-12 col-md-6 photo1">
          <div class="img">
            <img src="@/assets/signup.svg" alt="signup" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      name:'',
      email:'',
      password:'',
      conpassword:'',
      error:false,
    };
  },
  methods: {
    sendData() {
      // Validate inputs not empty
      if (this.name != "" && this.email != "" && this.password != "" && this.conpassword != ""
           && this.password === this.conpassword)
        {
          // error Message 
          this.error=false;

          // store input data in object
          const data={
            name:this.name,
            email:this.email,
            password:this.password,
            conpassword:this.conpassword,
          }
          console.log(data);

          // store Data to localstorage
            localStorage.setItem("name", this.name);
            localStorage.setItem("email", this.email);
            localStorage.setItem("password", this.password);

            // redirecting to login page
          this.$router.push("/login");
      } else {
        this.error=true;
      }
    },
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
