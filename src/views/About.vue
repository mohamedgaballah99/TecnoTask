<template>
<div class="about">
    <div class="container">
        <h1><span>About</span> Us</h1>
    </div>
    <div class="container">
    <aboutt></aboutt>
    <contact></contact>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import aboutt from '@/components/About/aboutt';
import contact from '@/components/contact';
export default {
    name: "About",
    components: {
        aboutt,
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
    margin-top: 120px;
    
span{
    color: $seccolor;
}
    
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h1 {
    color: $pricolor;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 25px !important;
    text-align: center;
    margin-bottom: 25px;
}
}
</style>
