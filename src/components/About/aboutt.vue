<template>
<div class="about">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <div class="info">
                    <h3><span>E-</span> Commerce</h3>
                    <p>An online store that contains all your needs such as clothes, mobiles, watches, jewelry and other interests. We appreciate your visit to our site and we hope that you will find what you need at an appropriate price</p>
                    <div class="d-flex images">
                      <div>
                        <img src="../../assets/about/rate.gif" alt="gif" class="one">
                        <span>Top Rate</span>
                      </div>

                      <div class="divtwo">
                        <img src="../../assets/about/client.gif" alt="gif" class="two">
                        <span>customer satisfaction</span>
                      </div>
                       
                       <div>
                        <img src="../../assets/about/delivery.gif" alt="gif" class="three">
                        <span>Fast Deleviery</span>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="img">
                    <img src="../../assets/about/about2.gif" alt="about" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.about {
    .container {
        .row {

            .info {
                margin-top: 40px;

                h3 {
                    font-family: cursive;
                    margin-bottom: 20px;

                    span {
                        color: $seccolor;
                    }
                }

                p {
                    color: rgb(102, 102, 102);
                    line-height: 1.8;
                    font-family: cursive;
                }
                .images{
                  justify-content: space-between;
                  >div{
                    width: 150px;
                    img{
                      width: 100%;
                      height: 200px;
                    }
                    .two{
                      width: 80%;
                      height: 140px;
                    }
                    span{
                      font-size: 15px;
                      text-align: center;
                      display: block;
                      color: $seccolor;
                      font-family: cursive;
                      text-transform: capitalize;
                    }
                  }
                  .divtwo{
                    margin-top: 40px;
                  }
                }
            }

            .img {
                width: 75%;
                margin: auto;

                img {
                    width: 100%;
                }
            }
        }
    }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
.img{
  margin-top: 40px !important;
}

}

</style>
