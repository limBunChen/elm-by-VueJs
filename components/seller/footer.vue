<template>
<div class="footer">
        <div class="shop" @click="showShopCart"><span :class="{'shop_bar':true,'footerActive':footerIsShow}"></span></div>
        <span class="money">￥{{money}}</span>
        <span class="pei">内需要配送费￥{{dataList.deliveryPrice}}元</span>
        <span class="qisong">￥{{dataList.minPrice}}元起送</span>
</div>
<v-shopcart v-if="isShopcartShow" :getdata="getData"></v-shopcart>
</template>

<script>

import shopCart from "./shopCart.vue";

export default{
    props : ["money"],
    data: function(){
        return{
            money : 0,
            dataList : "",
            isShopcartShow : false,
            footerIsShow : false,
            shop_barIsShow : true,
            isShopcartShow:false,
            getData : ""
        }
    },
    components : {
        "v-shopcart" : shopCart
    },
    methods : {
        showShopCart(){
            this.footerIsShow = !this.footerIsShow;
            this.isShopcartShow = !this.isShopcartShow;
            //读取数据开始
            this.getData = JSON.parse(localStorage.getItem("arrData"));
            console.log(this.getData);
            //读取数据结束
        }
    },
    ready : function(){
        this.$http.get("../static/data.json")
        .then(function(result){
            console.log(result.body.seller);
            this.dataList = result.body.seller;
        },function(error){
            console.log(error);
        });
    }
}

</script>


<style>
.shop_bar.footerActive{
    background: url("../../img/shop_bg.png") no-repeat  center center #00a0dc;
    background-size: 50%;
}

.footer{
    height:2.4rem;
    position:absolute;
    left:0px;
    bottom:0px;
    right:0px;
    background:#131d26;
    z-index:10;
}
.shop{
    width:3rem;
    height:3rem;
    position:absolute;
    left:12px;
    bottom:4px;
    /*background: url("../../img/shop_bg.jpg") no-repeat  center center #131d26;*/
   /* border-radius:100%;
    background-size:80%;*/
    background:#131d26;
    border-radius:100%;
}
.shop_bar{
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 100%;
    background: url("../../img/shop_bg.png") no-repeat  center center #2b343b;
    background-size:50%;
}
.money{
    display:inline-block;
    font-size:0.8rem;
    color:rgba(255,255,255,0.4);
    font-weight:700;
    line-height:1.2rem;
    border-right:1px solid rgba(255,255,255,0.1);
    margin:12px 0 0 4rem;
    padding-right:0.6rem;
}
.pei{
    font-size:12px;
    font-weight: 700;
    line-height: 1.2rem;
    color:rgba(255,255,255,0.4);
    margin-left:12px;
    display:inline-block;
    position:relative;
    top:-1px;
}
.qisong{
    width:5.25rem;
    height:2.4rem;
    text-align:center;
    color:#979b9e;
    font-size:12px;
    font-weight: 700;
    line-height:2.4rem;
    position:absolute;
    right:0px;
    background:#2b343b;
}
</style>
