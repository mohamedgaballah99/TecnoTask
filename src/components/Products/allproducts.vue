<template>
<div class="products">
    <div class="mainpro">
        <div class="container">
            <h5><span>Select</span> A Category</h5>
            <select class="form-select" v-model="select">
                <option value="Select Category">Select Category</option>
                <option :value="cat" v-for="cat in optionvalue" :key="cat.id">
                    {{ cat }}
                </option>
            </select>

            <div class="row">
                <div class="col-lg-3 parent" v-for="pro in result" :key="pro.id" v-show="pro.category == this.select">
                    <div class="card img">
                        <img :src="pro.image" alt="pro" />
                    </div>
                    <div class="card-body info">
                        <h6 class="card-title">
                            <span>Name: </span>"{{ pro.name.split(" ", 1)[0] }}"
                        </h6>
                        <h6><span>Price:</span> {{ pro.price }} <span>$</span></h6>
                        <h6><span>Category:</span> "{{ pro.category }}"</h6>
                        <div>
                            <!-- send product id in url -->
                            <router-link :to="`/prodetails/${pro._id}`" class="details btn btn-border-orange">More Details</router-link>
                            <router-link to="#" class="details btn btn-orange">Add To Cart</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 parent" v-for="pro in result" :key="pro.id" v-show="this.select == 'Select Category'">
                    <div class="card img">
                        <img :src="pro.image" alt="pro" />
                    </div>
                    <div class="card-body info">
                        <h6 class="card-title">
                            <span>Name: </span>"{{ pro.name.split(" ", 1)[0] }}"
                        </h6>
                        <h6><span>Price:</span> {{ pro.price }} <span>$</span></h6>
                        <h6><span>Category:</span> "{{ pro.category }}"</h6>
                        <div>
                            <!-- send product id in url -->
                            <router-link :to="`/prodetails/${pro._id}`" class="details btn btn-border-orange">More Details</router-link>
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
            select: "Select Category",
            optionvalue: [
                "Accessories",
                "Health&GYM",
                "Jewellery",
                "Food",
                "Shoes",
                "Fashion",
                "TV",
                "Home",
                "Smartphone",
                "Camera",
                "Motors",
                "Electronics",
                "Laptop",
                "Bags",
            ],
            filterresult:[],
        };
    },
    mounted() {
        axios
            .get("https://e-commerce-backend-2022.herokuapp.com/product")
            .then((response) => (this.result = response.data));
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
        h5 {
            margin-top: 30px;
            font-size: 17px;

            span {
                color: $seccolor;
                font-weight: bold;
            }
        }

        .form-select {
            width: 500px;
            margin: 20px auto 30px 0px;
        }

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
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    .products {
        .mainpro {
            .container {
                .form-select {
                    width: 250px;
                    margin: 20px auto 30px 0px;
                }

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
                                font-size: 12px;

                                span {
                                    color: $pricolor;
                                    font-weight: bold;
                                    font-size: 11px;
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
                }
            }
        }
    }
}
</style>
