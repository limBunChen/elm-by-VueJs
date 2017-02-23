<template>
    <div class="assess-bar">
        <div class="zhonghepingfen-bar">
            <div class="zhonghepingfen">
                <span class="count">{{dataList.seller.score}}</span>
                <span class="zhonghe">综合评分</span>
                <span class="baifenbi">高于周边商家{{dataList.seller.rankRate}}%</span>
            </div>
            <div class="fuwu">
                <p> 
                    <span>服务态度</span>
                    <img src="../../img/star.png" />
                    <img src="../../img/star.png" />
                    <img src="../../img/star.png" />
                    <a href="javascript:;">{{dataList.seller.foodScore}}</a>
                </p>
                <p> 
                    <span>服务态度</span>
                    <img src="../../img/star.png" />
                    <a href="javascript:;">{{dataList.seller.serviceScore}}</a>
                </p>
                <p> 
                    <span>送达时间</span>
                    {{dataList.seller.deliveryTime}}分钟
            </div>
        </div>

        <div class="fenli">
            <div class="btn-bar">
                <button class="btnActive">全部<span>57</span></button>
                <button>满意<span>47</span></button>
                <button>不满意<span>17</span></button>
            </div>
            <div class="see">
            <span class="checkbox"></span> 只看有内容的评价
            </div>
        </div>

        <div class="pDetial" v-for="item in dataList.ratings">
           <div class="border">
                <div class="headImg-bar">
                <span class="headimg"></span>
                <a href="javascript:;">
                    <span class="name">{{item.username}}</span>
                    <span class="starBar">
                        <img src="../../img/star.png"/>
                        <img src="../../img/star.png"/>
                        <img src="../../img/star.png"/>
                        {{(item.deliveryTime == "") || (item.deliveryTime == undefined) ? 5 : item.deliveryTime}}分钟到达
                    </span>  
                </a>
                <span class="timer">2016-07-13 20:33</span>
            </div>
            <p class="a_content">{{item.text}}</p>
            <div class="good-bar" v-if="item.recommend.length">
                <img src="../../img/good.png" class="good">
                <button class="first" v-for="val in item.recommend" v-if="$index <=2">{{val}}</button>
            </div>
           </div>
        </div>

        

    </div>


//底部为了实现购物车功能必须的每次都写
<div class="footer">
        <div class="shop" @click="show"><span class="shop_bar"></span></div>
        <span class="money">￥0</span>
        <span class="pei">内需要配送费￥{{dataList.seller.deliveryPrice}}元</span>
        <span class="qisong">￥{{dataList.seller.minPrice}}元起送</span>
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
            this.dataList = result.body;
           console.log(this.dataList);
        },function(error){
            console.log(error);
        })
    }
}

</script>

<style>
.pDetial{
    background:#fff;
    padding-top:0.9rem;
    position:relative;
}
.border{
    margin:0 0.9rem;
    border-bottom:1px solid #e8e8e8;
}
.headimg{
    width:1.65rem;
    height:1.65rem;
    border-radius:100%;
    display:inline-block;
    background:url("../../img/headImg.png");
    background-size:100%;
}
.headImg-bar a{
    display:inline-block;
    width:7rem;
    position:absolute;
    left:2.9rem;
}
.name{
    display:block;
    font-size:0.6rem;
    position:relative;
}
.starBar{
    height:0.6rem;
    display:block;
    font-size:0.6rem;
    position:relative;
    top:0.1rem;
}
.starBar img{
    height:0.6rem;
}
.timer{
    font-size:0.6rem;
    float:right;
    color:#969a9d;
}
.a_content{
    font-size:0.6rem;
    color:#424c55;
    padding:0.3rem 0rem  0.5rem 2rem;
    line-height:1.2rem;

}
.good-bar{
    padding-left:2rem;
    position:relative;
}
.good{
    width: 1rem;
    height: 1.1rem;
    /* position: absolute; */
    /* top: 50%; */
    /* -webkit-transform: translate(0,-100%); */
    /* transform: translate(0,-100%); */
    vertical-align: top;
    margin-top: 3px;
    margin-bottom: 1.1rem;
}
.good-bar button{
    width:3.6rem;
    outline:none;
    border:none;
    border:1px solid #e5e5e5;
    font-size:0.6rem;
    color:#94999f;
    padding:0.3rem 0;
    margin:0 .4rem 0rem .1rem;
    background:#fff;
    border-radius:5px;

}


.assess-bar{
    position:absolute;
    left:0px;
    right:0px;
    bottom: 2.4rem;
    overflow: scroll;
    top:8.9rem; 
    box-sizing:border-box;
    border-top:1px solid #e5e6e8;
}
.zhonghepingfen-bar{
    width:100%;
    height:3.5rem;
    padding:0.9rem 0;
    display:flex;
    flex-flow:row wrap;
    background:#fff;
    border-bottom:1px solid #e6e7e9;
}
.zhonghepingfen{
    width:6.4rem;
    border-right:1px solid #e6e6e6;
}
.count,
.zhonghe,
.baifenbi{
    display:block;
    text-align:center;
}
.count{
    font-size:0.9rem;
}
.zhonghe{
    font-size:0.6rem;
    padding:0.45rem 0 0.3rem 0;
    color:#101318;
}
.baifenbi{
    font-size:10px;
    color:#9699a0;
}
.fuwu{
    padding-left:1.2rem;
    flex:1;
}
.fuwu p{
    height:1.133rem;
    line-height:1.133rem;
    font-size:12px;
    color:#90979d;
}
.fuwu p span{
    margin-right:10px;
    color:#05111d;
}
.fuwu p a{
    float:right;
    margin-right:1.25rem;
    color:#f69e00;
    font-size:12px;
}
.fuwu p img{
    height:0.7rem;
}


.fenli{
    margin-top:0.8rem;
    border-top:1px solid #e5e6e8;
    border-bottom:1px solid #e5e6e8;
    background:#fff;
}
.btn-bar{
    padding:0.85rem 0;
    margin:0 0.9rem;
    border-bottom:1px solid #e8e8e8;
}
.btn-bar button{
    height:1.65rem;
    padding:0 0.6rem;
    font-size:12px;
    color:#4f5962;
    outline:none;
    border:none;
}
.btn-bar button span{
    font-size:10px;
    margin-left:2px;
}
.btn-bar button:first-child{
    background:#00a0dc;
}
.btn-bar button:nth-child(2){
    background:#ccecf7;
}
.btn-bar .btnActive{
    color:#fff;
}
.see{
    height:2.4rem;
    line-height:2.4rem;
    padding-left:1rem;
    font-size:0.6rem;
    color:#94999d;
}
.see .checkbox{
    width:1rem;
    height:1rem;
    display:inline-block;
    position:relative;
    top:0.25rem;
    border-radius:100%;
    background:#b7babf;
    margin-right:4px;
}
</style>