<template>
    <div class="shop-detial-bar">
        <img :src="dataList.image"  alt="参考图片" class="detial-logo"/>

        <div class="detial-name">
            <h1>{{dataList.name}}</h1>
            <p>月售{{dataList.sellCount}}份 <span>好频率{{dataList.rating}}%</span></p>
            <div><span class="newPrice">￥24</span><span class="oldPrice">￥28</span><a href="javascrpt:;">加入购物车</a></div>
        </div>

        <div class="shangpinjieshao-bar" v-if="dataList.info">
            <p class="shangpinjieshao">商品介绍</p>
            <p class="sp-content">
                {{dataList.info}}
            </p>
        </div>
        

        <div class="fenli">
            <div class="shangpinpingjia">商品评价</div>
            <div class="btn-bar">
                <button class="btnActive">全部<span>57</span></button>
                <button>满意<span>47</span></button>
                <button>不满意<span>17</span></button>
            </div>
            <div class="see">
            <span class="checkbox"></span> 只看有内容的评价
            </div>
        </div>

        <ul class="pinlunList">
            <li v-for="item in dataList.ratings">
                <a href="#">{{item.rateTime | timer}} <span>{{item.username}} <img :src="item.avatar" height="56" width="56" alt="" /></span></a>
                <p><img src="../../img/good.png" height="21" width="22" alt="" />{{item.text}}</p>
            </li>
        </ul>
    </div>
//底部为了实现购物车功能必须的每次都写
<div class="footer">
        <div class="shop" @click="show"><span class="shop_bar"></span></div>
        <span class="money">$0</span>
        <span class="pei">内需要配送费${{dataList.seller.deliveryPrice}}元</span>
        <span class="qisong">${{dataList.seller.minPrice}}元起送</span>
</div>

</template>
<script>
    export default{
        data(){
            return{
                dataList : "",
                //goodId,foodId为了获取页面详情而定
                goodId : 0,
                foodId : 0
            }
        },
        ready(){
            //console.log(this.$route.params.id);
            //alert(1);
            var arr = this.$route.params.id.split("+");
            this.goodId = arr[0];
            this.foodId = arr[1];
            console.log(this.goodId,this.foodId);

            this.$http.get("../static/data.json")
            .then(function(result){
               //console.log(result);
               this.dataList = result.body.goods[this.goodId].foods[this.foodId];
               //console.log(this.dataList);
            },function(error){
                console.log(error);
            });
        },
        filters:{
            timer : function(value){
                var date = new Date(1398250549490);
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds(); 
                return (Y+M+D+h+m+s);
            }
        }
    }
</script>
<style>
    .shop-detial-bar{
        position:absolute;
        left:0px;
        top:0px;
        right:0px;
        bottom:2.4rem;
        overflow-y:auto;
        background:#f4f5f7;
    }
    .detial-logo{
        width:100%;
        display: block;
    }
    .detial-name{
        height:5.4rem;
        padding:0.75rem 0.9rem;
        box-sizing:border-box;
        position:relative;
        background:#fff;
        border-bottom:1px solid #e5e6e8;
    }
    .detial-name h1{
        font-size:0.75rem;
        line-height:1.15rem;
        color:#111b25;
    }
    .detial-name p{
        font-size:0.45rem;
        line-height:0.8rem;
        color:#989ba4;
    }
    .detial-name p span{
        margin-left:0.5rem;
    }
    .detial-name div{
        position:absolute;
        left:0.9rem;
        right:0.9rem;
        bottom:0.75rem;
    }
    .detial-name div a{
        float:right;
        font-size:0.5rem;
        color:#fff;
        padding:0.4rem 0.6rem;
        background:#00a0dc;
        border-radius:20px;
    }
    .newPrice{
        font-size:0.55rem;
        color:#ef1313;
        margin-right:0.4rem;
    }
    .oldPrice{
        font-size:0.4rem;
        color:#999ca1;
        text-decoration:line-through;
    }

    .shangpinjieshao-bar{
        height:6.25rem;
        background:#fff;
        box-sizing:border-box;
        padding:.6rem 0 .8rem 0;
        margin:0.85rem 0 ;
        border-bottom:1px solid #e6e7e9;
        border-top:1px solid #e6e7e9;
    }
    .shangpinjieshao{
        font-size:0.75rem;
        color:#040e18;
        line-height:1.2rem;
        height:1.2rem;
        padding-left:0.9rem;
    }
    .sp-content{
        line-height:1.15rem;
        height:1.15rem;
        font-size:0.6rem;
        color:#4c5359;
        padding:0 1.35rem;
    }
    .shangpinpingjia{
        margin-top:0.85rem;
        padding-left:1rem;
        height:0.85rem;
        line-height:0.85rem;
        font-size:0.7rem;
    }


    .pinlunList{
        background:#fff;
    }
    .pinlunList li{
        margin:0 0.8rem;
        padding:0.75rem 0 0.4rem 0;
        border-bottom:1px solid #e8e8e8;
    }
    .pinlunList li a{
        display:block;
        font-size:0.45rem;
        color:#a5a9b4;
    }
    .pinlunList li a span{
        float:right;
    }
    .pinlunList li a span img{
        width:0.65rem;
        height:0.65rem;
        vertical-align: top;
        margin-left:0.35rem;
    }
    .pinlunList li p{
        height:1.35rem;
        line-height:1.35rem;
        font-size:0.8rem;
    }
    .pinlunList li p img{
        width:0.55rem;
        height:0.5rem;
        margin-right:5px;
    }
</style>