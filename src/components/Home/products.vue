<template>
<div class="products">
    <div class="mainpro">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 parent" v-for="pro in result" :key="pro.id">
                    <div class="card img">
                        <img :src="pro.image" alt="pro" />
                    </div>
                    <div class="card-body info">
                        <h6 class="card-title"><span>Name: </span>"{{ pro.name.split(" ", 1)[0] }}"</h6>
                        <h6><span>Price:</span> {{ pro.price }} <span>$</span></h6>
                        <h6><span>Category:</span> "{{ pro.category }}"</h6>
                        <div>
                            <!-- send product id in url -->
                            <router-link :to="`/prodetails/${pro._id}`" class="details btn btn-border-orange" >More Details</router-link>
                            <router-link :to="`/cart/${pro._id}`" class="details btn btn-orange" @click="addCart(`${pro._id}`)">Add To Cart</router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
    name: "Home",
    components: {},
    data() {
        return {
            result: null,
        };
    },
    mounted() {
        axios
            .get("https://e-commerce-backend-2022.herokuapp.com/product")
            .then((response) => (this.result = response.data.slice(80, 84)));
    },
    methods: {
        addCart(proid){
            // console.log(proid);
            axios
            .get(`https://e-commerce-backend-2022.herokuapp.com/product/${proid}`)
            .then((response) => ( this.filterresult.push( response.data)));
            console.log(this.filterresult);
            for (let index = 0; index < this.filterresult.length; index++) {
                console.log(this.filterresult[index])
                
            }
           
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.mainpro {
    .container {
        .row {
            >div {
                margin-bottom: 30px;
                transition: 0.3s ease-in-out;
                box-shadow: 0px 0px 10px transparent;
                padding-top: 10px;

                &:hover {
                    box-shadow: 0px 0px 10px $pricolor;
                    border-radius: 20px;
                }
            }

            .img {
                width: 13rem !important;
                margin: auto;

                img {
                    width: 100% !important;
                    height: 150px !important;
                }
            }

            .info {
                text-align: left;
                width: 100% !important;
                line-height: 2;

                h6,
                p {
                    color: $seccolor;
                    font-size: 14px;

                    span {
                        color: $pricolor;
                        font-weight: bold;
                    }
                }

                p {
                    color: gray;
                }
                .details {
                    font-size: 12px;
                    margin: 7px 2px;
                }
            }
        }

        .all {
            margin: 15px auto;
            display: block;
            width: 200px;
        }
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    .products {
        .mainpro {
            .container {
                .row {
                    .parent {
                        padding: 0px !important;
                        width: 47% !important;
                        margin: 20px auto;

                        .img {
                            width: 8rem !important;

                            img {
                                width: 90% !important;
                                height: 150px !important;
                                margin-right: auto !important;
                            }
                        }

                        .info {

                            h6,
                            p {
                                color: $seccolor;
                                font-size: 11px;

                                span {
                                    color: $pricolor;
                                    font-weight: bold;
                                    font-size: 11px;
                                }
                            }

                            p {
                                color: gray;
                            }

                            .btn {
                                font-size: 11px !important;
                                padding: 5px !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
