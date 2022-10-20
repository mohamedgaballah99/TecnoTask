<template>
  <div class="navbarr">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style="border-bottom: 2px solid #f89113"
    >
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><span class="logo">E-</span>Commerce</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/products"
                >Products</router-link
              >
            </li>

            <li class="nav-item" id="login" v-show="user">
              <router-link class="nav-link active " to="/login"
                >Login</router-link
              >
            </li>
            <li class="nav-item" id="signup" v-show="user">
              <router-link class="nav-link active " to="/signup"
                >SignUp</router-link
              >
            </li>
            
            <li class="nav-item" id="logout" @click="logOut()" v-show="logout_cart">
              <router-link class="nav-link active " to="/"
                >Logout</router-link
              >
            </li>
            <li class="nav-item cart-appear" id="cart-apper" v-show="logout_cart">
              <router-link class="nav-link active cart" to="/cart"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="24"
                  fill="currentColor"
                  class="bi bi-bag-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                  /></svg
              ></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active " href="#" id="username" v-show="username">{{username}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    data() {
      return {
        user:!localStorage.getItem('email'),
        logout_cart:localStorage.getItem('email'),
        username:localStorage.getItem('name').split(" ", 1)[0],
      }
    },
    methods: {

      logOut(){
        this.user=true;
        this.logout_cart=false;
        this.username=false;
        this.$router.push('/login')
      },
      
    },
}

</script>
<style lang="scss" scoped>
@import "@/sass/main.scss";

.bg-dark {
  background-color: $pricolor !important;
}

.container {
  padding: 12px 0px;
#username{
  font-size: 16px;
}
  // font-weight: bold;
  .logo {
    color: $seccolor;
    font-weight: bold;
    font-size: 26px;
    font-family: cursive;
  }

  .nav-item {
    padding: 0px 40px;
  }

  .nav-link {
    font-family: cursive;
    // font-weight: bold;
    color: white !important;
    background-color: $seccolor !important;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    border: 1px solid $pricolor;

    &:hover {
      border: 1px solid $pricolor;
      color: $seccolor !important;
      background-color: white !important;
    }
  }

  .cart {
    color: $seccolor !important;
    background-color: white !important;
    border: 1px solid $seccolor;
    svg {
      animation: up 1s infinite;
    }

    &:hover {
      border: 1px solid $pricolor;
      color: white !important;
      background-color: $seccolor !important;
      border: 1px solid white;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
  .container {
    width: 90% !important;
    margin: auto !important;

    ul {
      margin-top: 15px;

      li {
        padding: 0px !important;
        width: 100px !important;
        text-align: center;
        margin: 5px 0px !important;

        .nav-link {
          padding: 4px !important;
        }
      }
    }
  }
}
</style>
