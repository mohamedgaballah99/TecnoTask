<template>
<div class="contact">
    <div class="container">
        <h1><span>Contact</span> Us</h1>
        <div class="row">
          <div class="com-sm-12 col-md-6 photo2">
                <div class="img">
                    <img src="@/assets/contact.svg" alt="contact">
                </div>
            </div>
            <div class="com-sm-12 col-md-6 ">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Full Name:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email address:</label>
                        <input type="email" class="form-control">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message: </label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-orange">SEND</button>
                </form>
            </div>
            <div class="com-sm-12 col-md-6 photo1">
                <div class="img">
                    <img src="@/assets/contact.svg" alt="contact">
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

.contact {
    .container {
        h1 {
            color: $pricolor;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            margin-top: 100px;
        }
span{
    color: $seccolor;
}
        .row {
          .photo2{
            display: none;
          }
          
            >div {
                margin: auto;

                form {
                    width: 100% !important;
                    margin: 20px auto;
                    font-family: cursive;
                }

                .img {
                    width: 100% !important;
                    margin: auto;

                    img {
                        width: 100%;
                        animation: up 2s infinite;
                    }
                }
            }
        }
    }
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
    .container{
      .row {
          .photo2{
            display: block !important;
          }.photo1{
            display: none;
          }
            >div {
                margin: auto;

                 form {
                    width: 90% !important;
                    margin: 20px auto;
                    font-family: cursive;
                }

                .img {
                    width: 75% !important;
                    margin:30px auto;

                    img {
                        width: 100%;
                        
                    }
                }
            }
        }
    }
}
</style>
