<template>
	<div id="wrap">
		<header  class="home_header">
        <span class="serach"></span>
        <p class="address">黄浦区人民大道上海...</p>
        <a class="login" href="">登入</a>
    </header>

    <div class="swiper-container nav" >
        <div class="swiper-wrapper">
            <div class="swiper-slide " >
                <div  class="" v-for="item in navData" v-if="$index <= 7"><img src="https://fuss10.elemecdn.com{{ item.image_url }}" height="34" width="47" alt="" /><span>{{ item.title }}</span></div>
            </div>
           <div class="swiper-slide">
                <div v-for="item in navData" v-if="$index > 7"><img src="https://fuss10.elemecdn.com{{ item.image_url }}" height="34" width="47" alt="" /><span>{{ item.title }}</span></div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <div class="content-bar">
        <h2>附近商家</h2>
        <ul class="content" v-for="item in contentData">
            <li class="clearfix content-list">
                <div class="img-bar">
                    <!--image_path-->
                    <img src="https://fuss10.elemecdn.com/3/0d/90c91aafa37de8ec0488c731c2deejpeg.jpeg" width="60" height="60"/>
                </div>
                <div class="detial" >
                    <h3 class="pinpai-bar">
                        <a href="#/sellerHeader/sellerlist">
                            <span class="pinpai">品牌</span>
                            {{ (item.name).length > 10 ?  (item.name).substring(0,10) + "..." : (item.name)}}<span class="bao">保</span ><span class="piao">票</span>
                        </a>
                    </h3>

                    <p class="star-bar"><span class="star"  ><img src="../../img/star.png" height="19" width="20" alt="" /></span><span class="count"></span>月售{{item.recent_order_num}}单
                        <!--<span class="zhunshidao" ng-show="{{item.delivery_mode.is_solid}}">{{item.supports[1].name}}</span>-->
                        <span class="fengniao" ng-show="item.delivery_mode.is_solid">蜂鸟专送</span></p>

                    <p class="price">￥{{item.float_minimum_order_amount}}起送<span class="line">/</span><span >{{ (item.piecewise_agent_fee.description).length > 10 ?  (item.piecewise_agent_fee.description).substring(0,10) + "..." : (item.piecewise_agent_fee.description)}}</span><a href="javascript:;">{{item.distance}}m<span class="line">/</span><span class="timer">{{item.order_lead_time}}分钟</span></a></p>
                </div>
            </li>
        </ul>
    </div>
	</div>
</template>


<script>
export default{
	
	data : function(){
		return {
			"navData" : [],
	        "contentData" : [],
	        "self" : this.$http,
	        "count" : 0
		}
	},
    "methods" : {
        getCon : function(_this){
        //_this.$http.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.5363488&longitude=113.9407124&limit=20&extras[]=activities&offset="+ this.count,{})
            _this.$http.get("../static/content.json",{})
            .then(function(result){
                //console.log(result);
                this.contentData = this.contentData.concat(result.data);
                flag = true;
                this.count += 20;
            },function(error){
                console.log(error);
            });
        }
    },
    "ready" : function(){
        //获取接口的方法   写在这里的原因是  页面已加载就读取数据

        //获取分类的接口
        //this.$http.get("https://mainsite-restapi.ele.me/v2/index_entry?geohash=wtw3sjq6n6um&group_type=1&flags[]=F")
        this.$http.get("../static/nav.json")
            .then(function(result){
                //console.log(result);
                this.navData = result.data;
            },function(error){
                console.log(error);
            });
        //获取主要内容的接口
        this.getCon(this);

    }
}
//上拉刷新
var flag = true;
window.onscroll = function(){
    var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(document.body.clientHeight - document.documentElement.clientHeight <= scrTop){
        if(flag){
            flag = false;
            app.getCon(app);
        }
    }
}




</script>



<style>
html{
     font-size:  125%;
}
body{
    background:#f4f4f4;
}
/*头部*/
.home_header {
    width:100%;
    height:2.15rem;
    display:flex;
    position:fixed;
    left:0px;
    top:0px;
    color:#fff;
    background:#3190e8;
    z-index:11;
}
.home_header .serach{
    width:15px;
    height:17px;
    margin:0.75rem 0 0 0.75rem;
    background:url("../../img/serach.png");
}
.home_header .address{
    height:2.15rem;
    line-height:2.15rem;
    font-size:0.8rem;
    flex:1;
    text-align:center;
}
.home_header .login{
    height:2.1rem;
    line-height:2.1rem;
    font-size:0.8rem;
    display:block;
    color:#fff;
    margin-right:0.75rem;
}

.swiper-container{
    padding-bottom:15px;
    margin-top:2.15rem !important;
    border-bottom:1px solid #dddddd;
    background:#fff;
}
.swiper-wrapper{
    width:100%;
    height:8.8rem;
}
.swiper-slide{
    width:50%;
    float:left;
}
.swiper-slide{
    display:flex;
    flex-flow:row wrap;
    min-height: 160px !important;
}
.swiper-slide div{
    width:25%;
    padding-top:18px;
}
.swiper-slide div img{
    margin:0 auto 12px auto;
    display:block;
}
.swiper-slide div span{
    display:block;
    font-size:0.6rem;
    text-align:center;
}
.swiper-pagination {
    bottom: 4px !important;
}


.content-bar{
    background:#fff;
    margin-top:10px;
}
.content-bar h2{
    font-size:0.65rem;
    font-weight: normal;
    padding:11px 0 11px 38px;
    color:#a1999b;
    background:url("../../img/h2-bg.png") no-repeat 15px center;
}
.content-bar .content .content-list{
    border-top:1px solid #dddddd;
    padding: 15px 0px 15px 10px;
    display:flex;
    flex-flow:row wrap;
}
.content-list .img-bar{
    width:3rem;
    height:3rem;
}
.content-list .img-bar img{
    width:3rem;
    height:3rem;
    border-radius:50%;
}
.content-list .detial{
    flex:1;
    margin-left:10px;
}
.detial .pinpai-bar{
    font-size:0.7rem;
    color:#333333;
}
.pinpai-bar .pinpai{
    width:1.4rem;
    height:0.75rem;
    line-height:0.75rem;
    font-size:0.6rem;
    background:#ffd930;
    position:relative;
    top:-3px;
    margin-right: 5px;
}
.pinpai-bar .bao,
.pinpai-bar .piao{
    width:15px;
    height:10px;
    float:right;
    font-size:11px;
    color:#b29c99;
    margin-left:3px;
    text-align:center;
    font-weight: normal;
    border:1px solid #dddddd;
}
.detial .star-bar{
    font-size:0.6rem;
    color:#666666;
    margin: 3px 0 6px 0px;
}
.star-bar .star{
    margin-right:5px;
}
.star-bar .star img{
    width:0.5rem;
    height:0.5rem;
}
.star-bar .count{
    color:#ff6000;
    margin-right:5px;
}
.star-bar .fengniao,
.star-bar .zhunshidao{
    float:right;
    border:1px solid #44a5ff;
    border-radius:5px;
    padding:0px 3px;
}
.star-bar .fengniao{
    background:#44a5ff;
    margin-right:3px;
}
.price{
    color:#826f6f;
    font-size:0.6rem;
}
.price .line{
    color:#f0e5de;
    margin:0 2px;
    background:none;
}
.price a{
    float:right;
    color:#989daa;
}
.price .timer{
    color:#759bff;
}

@media screen and (min-width:320px) and (max-width:359px){
   html{
    font-size:116%;
   }
}

@media screen and (min-width:375px) and (max-width:413px){
   html{
    font-size:134%;
   }
}


@media screen and (min-width:414px) and (max-width:767px){
   html{
    font-size:148%;
   }
}

@media screen and (min-width:768px) and (max-width:1024px){
   html{
    font-size:187.5%;
   }
}


@media screen and (min-width:1025px) {
   html{
    font-size:200%;
   }
}

</style>