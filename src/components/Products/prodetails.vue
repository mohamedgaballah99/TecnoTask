<template>
<div class="prodetails">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 img">
                <img :src="result.image" alt="image">
            </div>

            <div class="col-sm-12 col-md-6 info">
                <h6 class="card-title"><span>Name : </span>{{result.name}}</h6>
                <h6><span>Price : </span> {{result.price}} <span>$</span></h6>
                <h6><span>Category : </span> {{result.category}}</h6>
                <h6><span>SubCategory : </span>{{result.subcategory}}</h6>
                <h6><span>Quantity : </span>{{result.quantity}}</h6>
                <p><span>Description : </span>{{result.description.slice(0, 970)}}</p>
                <div>
                    <router-link to="/products" class="btn2 btn-orange m-2" >Products</router-link>
                    <router-link to="/" class="btn2 btn-orange" > Home Page</router-link>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id:'',
            result:'',
        }
    },
    created() {
        // take id from url 
        this.id=this.$route.params.id;
        // get product that match this id 
        axios.get(`https://e-commerce-backend-2022.herokuapp.com/product/${this.id}`).then((res) => {
            this.result=res.data;
            // console.log(res.data);
        })
        // console.log( this.id);
    },
}
</script>

<style lang="scss">
@import "@/sass/main.scss";

.prodetails {
    .container {
        margin-top: 170px;
        margin-bottom: 50px;
        .row {
            .img {
                margin: auto;

                img {
                    width: 70%;
                    margin: auto;
                }
            }

            .info {
                h6,p{
                    margin: 20px 0px;
                    span{
                        color: $seccolor;
                    }
                }

                p {
                    font-size: 13px;
                    color: black;
                    line-height: 1.8;
                    span{
                        color: $seccolor;
                    }
                }
                .btn2{
                    padding: 10px 14px;
                    text-decoration: none;
                    border-radius: 20px;
                }
            }
        }
    }
}
</style>
