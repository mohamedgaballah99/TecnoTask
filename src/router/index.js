import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Cart from "../components/Cart.vue";
import About from "../views/About.vue";
import Login from "../views/User/Login.vue";
import SignUp from "../views/User/SignUp.vue";
import prodetails from "../components/Products/prodetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/cart/:id",
    name: "Cart",
    component: Cart,
  },
  {
    path:'/prodetails/:id',
    component:prodetails,
  },
  
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
