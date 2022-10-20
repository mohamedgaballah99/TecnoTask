<template>
<div class="slider">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/slider/3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>E-Commerce</h5>
                    <p>Online WebSite Contain All products U Need.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/slider/2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>E-Commerce</h5>
                    <p>Online WebSite Contain All products U Need.</p>
                </div>
            </div>
            <div class="carousel-item">

                <img src="@/assets/slider/1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>E-Commerce</h5>
                    <p>Online WebSite Contain All products U Need.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.slider {
    margin-bottom: 70px;

    .carousel-item {

        img {
            height: 100vh !important;
            filter: saturate(0.8);
        }

        .carousel-caption {
            z-index: 3;
        }

        h5 {
            font-size: 58px !important;
            color: $seccolor;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-shadow: 3px 0px 5px $pricolor;

        }

        p {
            font-size: 38px !important;
            color: $pricolor;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-shadow: 3px 0px 5px white;
        }
    }

    .carousel-indicators {
        position: absolute;
        top: 25% !important;
        right: 0;
        bottom: 0;
        left: 75% !important;
        z-index: 3;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin-right: 15%;
        margin-bottom: 1rem;
        margin-left: 15%;
        list-style: none;
    }

    .carousel-indicators [data-bs-target] {
        background-color: $pricolor;
        border-radius: 50%;
        padding: 9px;
        width: 6px;
        opacity: 0.9;
    }

    .carousel-indicators .active {
        opacity: 1;
        background-color: $seccolor;
    }

    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        display: none !important;
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {

    .slider {
        margin-bottom: 50px;

        .carousel-item {
            img {
                height: 50vh !important;
            }

            h5 {
                font-size: 58px !important;
            }

            p {
                font-size: 38px !important;
            }
        }

        .carousel-indicators [data-bs-target] {
            padding: 5px;
            width: 5px;
        }
    }
}
</style>
