<template>
    <div class="seller-bar">
        <div class="big-bar">
            <a href="#">
                <span class="s-title">{{dataList.name}}</span>
                <span class="sller-star">
                    <img src="../../img/star.png" alt="" />
                    <img src="../../img/star.png" alt="" />
                    <img src="../../img/star.png" alt="" />
                    <img src="../../img/star.png" alt="" />
                    <img src="../../img/star.png" alt="" />
                    <span>(661)</span>
                    月售690单
                </span>
            </a>
            <span class="love">
                <img src="../../img/love.png" alt="" />
                已收藏
            </span>
        </div>

        <div class="sller-qisong-bar">
            <a href="#">
                <span> 起送价</span>
                <i>{{dataList.minPrice}}</i>元
            </a>
             <a href="#">
                <span> 商家配送</span>
                <i>{{dataList.deliveryPrice}}</i>元
            </a>
             <a href="#">
                <span> 平均时间</span>
                <i>{{dataList.deliveryTime}}</i>分钟
            </a>
        </div>

        <div class="line"></div>

        <div class="gg">
            <h2>公告与活动</h2>
            <p>
                {{dataList.bulletin}}
            </p>
            <ul >
                <li v-for="val in dataList.supports"><img src="../../img/sub.png" height="24" width="24" alt="" />{{val.description}}</li>
            </ul>
        </div>

        <div class="line"></div>

        <div class="shangjia">
            <h1>商家实景</h1>
            <ul>
                <li v-for="val in dataList.pics"><img :src="val" height="182" width="240" alt="" /></li>
            </ul>
        </div>

        <div class="line"></div>

        <div class="shangjiaxinxi">
            <h1>商家信息</h1>
            <ul>
                <li v-for="val in dataList.infos"><a href="#">{{val}}</a></li>
            </ul>
        </div>
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
        return {
            dataList : ""
        }
    },
    ready(){
        this.$http.get("../static/data.json")
        .then(function(result){
            this.dataList = result.body.seller;
           console.log(this.dataList);
        },function(error){
            console.log(error);
        })
    }
}

</script>

<style>
.seller-bar{
    position:absolute;
    left:0px;
    right:0px;
    bottom:2.4rem;
    top:8.9rem;
    box-sizing:border-box;
    border-top:1px solid #e5e6e8;
    overflow:hidden;
    background:#fff;
    overflow-y: scroll;
}
.big-bar{
    margin:0 0.9rem;
    padding:0.9rem 0;
    border-bottom:1px solid #e5e6e8;
}
.big-bar a{
    width:13rem;
    display:inline-block;
}
.big-bar a .s-title,
.sller-star{
    display: block;

}
.s-title{
    font-size:0.7rem;
    color:#30353b;
    margin-bottom:0.3rem;
}
.sller-star{
    height:0.8rem;
    line-height:0.8rem;
    display:block;
    font-size:0.5rem;
}
.sller-star img{
    height:0.8rem;
    position:relative;
    top:0.2rem;
    margin-right:px;
}
.sller-star span{
    margin:0 0.3rem 0 0.1rem; 
}
.love{
    float:right;
    font-size:0.5rem;
    text-align:center;
}
.love img{
    width:1.05rem;
    height:0.9rem;
    display:block;
    position:relative;
    left:50%;
    transform:translate(-50%,0);
    margin-bottom:5px;
}
.sller-qisong-bar{
    display:flex;
    flex-flow: row wrap;
    padding:0.9rem 0;
    border-bottom:1px solid #e5e6e8;
}
.sller-qisong-bar a{
    display:block;
    width:33.33333%;
    box-sizing: border-box;
    font-size:0.45rem;
    color:#11161c;
    text-align: center;
}
.sller-qisong-bar a span{
    display:block;
    font-size:0.5rem;
    margin-bottom:0.1rem;
    color:#9a9fa3;
}
.sller-qisong-bar a i{
    font-style:normal;
    font-size:1rem;
    color:#11161c;

}

.line{
    height:0.85rem;
    background:#f4f5f7;
}
.gg{
    width:100%;
    padding-top:0.5rem;
}
.gg h2{
    height:1.5rem;
    line-height: 1.5rem;
    padding-left:0.9rem;
    font-weight: 100;
    font-size:0.75rem;
}
.gg p{
    line-height:1.2rem;
    font-size:0.6rem;
    margin:0 1.7rem 0 1.5rem;
    color:#eb6461;
    padding-bottom: 0.9rem;
}
.gg ul{
    margin:0 0.9rem;
}
.gg ul li{
    height:2.4rem;
    line-height: 2.4rem;
    border-top:1px solid #e8e8e8;
    font-size: 0.55rem;
    color:#6b7278;
}
.gg ul li img{
    width:1rem;
    height:1rem;
    position:relative;
    top:0.3rem;
    margin-right:5px;
}
.shangjia{
    border-top:1px solid #e6e7e9;
    padding-left:0.95rem;
    padding-bottom:0.9rem;
    overflow:hidden;
}
.shangjia h1{
    height:2.15rem;
    line-height: 2.15rem;
    font-size:0.7rem;
    color:#161a23;
    font-weight: 100;
}
.shangjia ul{
     width:25.5rem;
}
.shangjia ul li{

    float:left;
}
.shangjia ul li img{
    width:6rem;
    height:4.5rem;
    margin-right:0.3rem;
}
.shangjiaxinxi{
    border-top:1px solid #e6e7e9;
    padding-left:0.95rem;
    padding-bottom:0.9rem;
}
.shangjiaxinxi h1{
    height:2.15rem;
    line-height: 2.15rem;
    font-size:0.7rem;
    color:#161a23;
    font-weight: 100;
}
.shangjiaxinxi ul{
    margin: 0 0.9rem 0 0;
}
.shangjiaxinxi ul li{
    position:relative;
    padding:0.9rem 0.65rem;
    border-top: 1px solid #e6e7e9;
}
.shangjiaxinxi ul li a{
    font-size:0.6rem;
    color:#050714;
}
</style>