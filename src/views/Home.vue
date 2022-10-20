<template>
<div class="home">
    <slider></slider>
    <div class="container">
        <h1><span>New Arrival</span> Products</h1>
    </div>
    <div class="container">
    <products></products>
    </div>
    <div class="container">
        <hr>
    </div>
     <div class="container">
    <bestsell></bestsell>
</div>
    <div class="container">
        <hr>
    </div>
 <div class="container">
    <contact></contact>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

import products from '@/components/Home/products';
import slider from '@/components/Home/slider';
import bestsell from '@/components/Home/bestsell';
import contact from '@/components/contact';
export default {
    name: "Home",
    components: {
        products,
        slider,
        bestsell,
        contact,        

    },

};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

h1 {
    color: $pricolor;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    
}
span{
    color: $seccolor;
}
.container{
    hr{
        background-color: #ff8c00 !important;
        color: #ff8c00 !important;
        border: 2px solid #ff8c00 !important;
        border-radius: 20px;
    }
    
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h1 {
    color: $pricolor;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 20px !important;
    text-align: center;
    margin-bottom: 25px;
}
}
</style>
