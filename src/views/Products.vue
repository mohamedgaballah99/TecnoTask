<template>
<div class="product">
    <div class="container">
        <h1> <span>All</span> Products</h1>
    </div>
    <div class="container">
    <allproducts></allproducts>
    </div>
</div>
</template>

<script>
import allproducts from '@/components/Products/allproducts';
export default {
    components: {
        allproducts,
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

h1 {
    color: $pricolor;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin-top: 150px;
}
span{
    color: $seccolor;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    h1 {
        color: $pricolor;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 27px !important;
        text-align: center;
        margin-bottom: 25px;
    }
}
</style>
