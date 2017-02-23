<template>
	<div>
		<div class="head ">
        <div class="logo"><img src="../img/logo.gif" alt="" /></div>
        <div class="head_detial">
            <h2><span class="pinpai">品牌</span>粥品香坊(大运村)</h2>
            <p class="transport">蜂鸟专送/38分钟送达</p>    
            <p class="sub_bar"><span class="sub" >减</span>在线支付满28减5,满50减10
            <span class="num">5个 ></span></p>
        </div>
        <p class="gonggao_bar"><span class="gonggao">公告</span>粥品香坊其要在枯夺陌生的覅能否 上的佛能否打开<span class="move">></span></p>
    </div>

    <div class="nav">
        <ul>
            <li><a href="" class="active">商品</a></li>
            <li><a href="">评价</a></li>
            <li><a href="">商家</a></li>
        </ul>
    </div>

    <div class="Shopcontent" >
        <div class="content_nav" id="wrapper">
            <ul id="scroller">
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                 <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
                <li>特色粥品</li>
            </ul>
        </div>
        <div class="content_detial" >
            <div class="content_detial_bar">
                <h2 class="title">单人特色套餐</h2>
                <div class="detial_bar">
                    <img src="../img/detial-bg.png" alt="" />
                    <div class="detial">
                        <p class="small_title">皮蛋瘦肉粥配包子套餐</p>
                        <p class="xianzhou">咸粥</p>
                        <p class="yueshou">
                            月售1132份&nbsp;好评率100%
                        </p>
                        <p class="add_bar">
                            <span class="new">￥24</span>
                            <span class="old">￥28</span>
                            <a href="javascript:;">
                                <span class="sub1" v-show="isShowSub" ></span>
                                <spna class="text">1</spna>
                                <span class="add"></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="content_detial_bar">
                <h2 class="title">单人特色套餐</h2>
                <div class="detial_bar">
                    <img src="../img/detial-bg.png" alt="" />
                    <div class="detial">
                        <p class="small_title">皮蛋瘦肉粥配包子套餐</p>
                        <p class="xianzhou">咸粥</p>
                        <p class="yueshou">
                            月售1132份&nbsp;好评率100%
                        </p>
                        <p class="add_bar">
                            <span class="new">￥24</span>
                            <span class="old">￥28</span>
                            <a href="javascript:;">
                                <span class="sub1" v-show="isShowSub" ></span>
                                <spna class="text">1</spna>
                                <span class="add"></span>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="detial_bar">
                    <img src="../img/detial-bg.png" alt="" />
                    <div class="detial">
                        <p class="small_title">皮蛋瘦肉粥配包子套餐</p>
                        <p class="xianzhou">咸粥</p>
                        <p class="yueshou">
                            月售1132份&nbsp;好评率100%
                        </p>
                        <p class="add_bar">
                            <span class="new">￥24</span>
                            <span class="old">￥28</span>
                            <a href="javascript:;">
                                <span class="sub1" v-show="isShowSub" ></span>
                                <spna class="text">1</spna>
                                <span class="add"></span>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="detial_bar">
                    <img src="../img/detial-bg.png" alt="" />
                    <div class="detial">
                        <p class="small_title">皮蛋瘦肉粥配包子套餐</p>
                        <p class="xianzhou">咸粥</p>
                        <p class="yueshou">
                            月售1132份&nbsp;好评率100%
                        </p>
                        <p class="add_bar">
                            <span class="new">￥24</span>
                            <span class="old">￥28</span>
                            <a href="javascript:;">
                                <span class="sub1" v-show="isShowSub" ></span>
                                <spna class="text">1</spna>
                                <span class="add"></span>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="detial_bar">
                    <img src="../img/detial-bg.png" alt="" />
                    <div class="detial">
                        <p class="small_title">皮蛋瘦肉粥配包子套餐</p>
                        <p class="xianzhou">咸粥</p>
                        <p class="yueshou">
                            月售1132份&nbsp;好评率100%
                        </p>
                        <p class="add_bar">
                            <span class="new">￥24</span>
                            <span class="old">￥28</span>
                            <a href="javascript:;">
                                <span class="sub1" v-show="isShowSub" ></span>
                                <spna class="text">1</spna>
                                <span class="add"></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="shop"><span class="shop_bar"></span></div>
        <span class="money">$0</span>
        <span class="pei">内需要配送费$4元</span>
        <span class="qisong">＄20元起送</span>
    </div>
	</div>
</template>

<script>

export default{
    data: function(){
        return{
            isShowSub : false
        }
    }
}

</script>


<style>

html{
    font-size:125%;
}

.head{
    height:6.9rem;
    background:url("../img/head-bg.png") no-repeat ;
    background-size:100% 100%;
    padding:1.2rem 0.6rem  0 1.2rem;
    box-sizing: border-box;
    display:flex;
    flex-flow: row wrap;
    position:relative;
}
.logo{
    width:3.2rem;
    height:3.2rem;
}
.logo img{
    width:3.2rem;
    height:3.2rem;
}
.head_detial{
    flex:1;
    margin-left:0.9rem;
    color:#fff;
}
.head_detial h2{
    font-size:0.8rem;
}
.pinpai{
    width:1.6rem;
    height:1rem;
    display: inline-block;
    position:relative;
    top:-3px;
    line-height:1rem;
    text-align:center;
    font-size:0.6rem;
    margin-right:6px;
    background:#f41214;
}
.head_detial .transport{
    font-size:0.6rem;
    margin:0.45rem 0 0.5rem 0 ;
}
.head_detial .sub_bar{
    font-size:14px;
    position:relative;
}
.sub{
    width:14px;
    height:14px;
    line-height: 14px;
    display:inline-block;
    text-align:center;
    font-size:12px;
    position:relative;
    top:-2px;
    margin-right:5px;
    color:#ef7371;
    background:#fff;
}
.num{
    width:2.1rem;
    height:1.2rem;
    font-size:12px;
    line-height: 1.2rem;
    text-align: center;
    position:absolute;
    right:-5px;
    top:-30%;
    background:#393738;
    border-radius: 20px;
}
.gonggao_bar{
    height:1.4rem;
    line-height:1.4rem;
    position:absolute;
    bottom:0px;
    left:0px;
    right:0px;
    font-size:13px;
    background:#494b51;
    /*text-align:center;*/
    color:#fff;
    padding-left:2rem;
    box-sizing: border-box;
}
.gonggao{
    display:inline-block;
    width:26px;
    height:14px;
    line-height: 14px;
    text-align: center;
    font-size:12px;
    margin-right:5px;
    color:#585f65;
    background:#fff;
    position:absolute;
    left:10px;
    top:50%;
    transform:translate(0,-50%);
}
.move{
    position:absolute;
    right:15px;
}


.nav ul{
    display:flex;
    flex-flow:row wrap;
    background: #fff;
}
.nav ul li{
    height:2rem;
    line-height:2rem;
    flex:1;
    text-align:center;
}
.nav ul li a{
    font-size:0.7rem;
    color:#525659;
}
.nav ul li .active{
    color:#ff1128;
}

.Shopcontent{
    position:absolute;
    left:0px;
    right:0px;
    bottom:2.4rem;
    top:8.9rem;
    display:flex;
    flex-flow:row wrap;
    box-sizing:border-box;
    border-top:2px solid #e5e6e8;
    overflow:hidden;
}
.content_nav{
    width:80px;
    position: absolute;
    /*transform: translateZ(0);*/
    overflow:auto;
    background:#f4f5f7;

    left: 0px;
    top: 0px;
    bottom: 0px;
}
.content_nav ul {
    padding:0 12px;
    background:#f4f5f7;
    transform: translateZ(0);
    position:absolute;
    /*z-index:111;*/
}
.content_nav ul li{
    height:53px;
    border-bottom:1px solid #dddee0;
    font-size:12px;
    line-height: 53px;
    text-align: center;
    color:#555861;
}

.content_detial{
    flex:1;
    margin-left:80px;
    /*position:relative;*/
    overflow:auto;
    background: #fff;
}
.content_detial h2{
    height:1.3rem;
    line-height:1.3rem;
    font-size:12px;
    color:#94999d;
    font-weight: normal;
    padding-left:17px;
    border-left:5px solid #d9dce1;
    background:#f4f5f7;
}
.detial_bar{
    display: flex;
    flex-flow: row wrap;
    margin: 0 0.8rem 0 0.9rem;
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid #dcdddf;     
}
.detial_bar img{
    width:2.85rem;
    height:2.85rem;
    float:left;
}
.detial_bar .detial{
    flex:1;
    float:left;
    margin-left:20px;
}
.detial .small_title{
    font-size:0.75rem;
    color: #484646;
}
.detial .xianzhou,
.detial .yueshou,
.detial .add_bar{
    font-size:12px;
    color:#a6aaad;
}
/*.add_bar{
    position:relative;
    top:5px;
}*/
.content_detial_bar div:last-child{
    border:none;
}
.detial .yueshou{
    margin-bottom:8px;
}
.detial .xianzhou{
    margin:0.2rem 0;
}
.new{
    color:#f81a15;
}
.old{
    text-decoration: line-through;
}
.add_bar a{
    float:right;
    position: relative;
    top: -3px;
}
.sub1{
    width:1rem;
    height:1rem;
    display:inline-block;
    background:url("../img/sub-bg.png") no-repeat;
    background-size:100%;
}
.add{
    width:1rem;
    height:1rem;
    display:inline-block;
    background:url("../img/add-bg.png") no-repeat;
    background-size:100%;
}
.text{
    position:relative;
    top:-5px;
}

.footer{
    height:2.4rem;
    position:absolute;
    left:0px;
    bottom:0px;
    right:0px;
    background:#131d26;
}
.shop{
    width:2.7rem;
    height:2.7rem;
    position:absolute;
    left:12px;
    bottom:4px;
    /*background: url("../img/shop_bg.jpg") no-repeat  center center #131d26;*/
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
    background: url("../img/shop_bg.png") no-repeat  center center #2b343b;
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


@media screen and (min-width:320px) and (max-width:359px){
   html{
    font-size:100%;
   }
}

</style>