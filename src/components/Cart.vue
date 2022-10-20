<template>
<div class="cart">
    <div class="container">
        <h3 class="shop"><span>Shopping</span> Cart</h3>
        <div class="img">
            <img src="@/assets/empty.gif" alt="emptyCart">
            <h3><span>Empty</span> Cart<span>..!</span></h3>
            <router-link to="/products" class="browse btn-orange">Browse Products</router-link>
        </div>
        <div class="content">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="param">
                        <td scope="row">{{result.name}}</td>
                        <td><img :src="result.image"></td>
                        <td>
                            <span class="increase" @click="manageValue(1)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                            </span>
                            <span class="number">{{this.quantity}}</span>
                            <span class="decrease" @click="manageValue(-1)" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi        bi-dash-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                                </svg>
                            </span>
                        </td>
                        <td>{{result.price}} <span>$</span></td>
                        <td>
                            <router-link to="" class="details btn btn-orange" @click="deleteCard(`${this.id}`)">Delete</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>Total : <span>{{this.calc}}</span> $</h4>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "Cart",
    data() {
        return {
            id:'',
            result:'',
            quantity:1,
            total:0,
            param:true,
        }
    },
    created(){
        this.id=this.$route.params.id;
        axios.get(`https://e-commerce-backend-2022.herokuapp.com/product/${this.id}`).then((res) => {
            this.result=res.data;
            console.log(res.data);   
        })
    },
    methods: {
        manageValue(x){
            if (this.quantity == 1 && x == -1) {
                this.quantity = 1
            }else{
                this.quantity = Number(this.quantity) + Number(x)
            }
        },
        deleteCard(proid){
            console.log(proid);
            this.param=false;
            this.result.price=0;
        }
    },
    computed:{
       calc(){

         return this.total +  (this.quantity * this.result.price)   
        
         
       }
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

.cart {
    .container {
        .shop {
            text-align: left;
        }

        h3 {
            color: $pricolor;
            font-family: cursive;
            font-weight: bold;
            margin-top: 120px;
            text-align: center;

            span {
                color: $seccolor;
            }

        }

        .img {
            display: none;
            width: 200px;
            margin: 0px auto;

            img {
                width: 100%
            }

            .browse {
                color: white;
                text-decoration: none;
                text-align: center;
                display: block;
                border-radius: 20px;
                padding: 10px 0px;
                font-family: cursive;
                margin-top: 10px
            }
        }
        .content{
            .table{
                img{
                    width: 100px;
                    height: 60px;
                }
                span{
                    color: $seccolor;
                }
                .number{
                    margin: 0px 10px;
                    color: $pricolor;
                }
                .increase,.decrease{
                    cursor: pointer;
                    background: $pricolor;
                    padding:4px 7px;
                    border-radius: 20px;
                }
                tr{
                    td{
                        font-weight: bold;
                    }
                }
                
                tbody tr td{
                    padding-top: 20px;
                }
            }
        }

    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    .img {
        margin-top: 70px !important;
    }
}
</style>
