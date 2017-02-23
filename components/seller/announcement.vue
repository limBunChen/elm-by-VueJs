<template>
    <div class="announcement" transition="aMove">
        <h1 class="a_title">{{dataList.seller.name}}</h1>
        <p class="a_star">
            <img src= "../../img/star.png"/>
            <img src= "../../img/star.png"/>
            <img src= "../../img/star.png"/>
            <img src= "../../img/star.png"/>
            <img src= "../../img/gray_star.png"/>
        </p>
        <div class="favourable">
            <span>优惠信息</span>
        </div>
        <ul class="fav_list">
            <li v-for="item in dataList.seller.supports"><span></span>{{
            item.description}}</li>
        </ul>
        <div class="seller_ann">
            <span>优惠信息</span>
        </div>
        <p class="seller_content">
            {{dataList.seller.bulletin}}
        </p>
        <span class="close" @click="close"></span>
    </div>
</template>

<script>

export default{
    data(){
        return {
            isClose : "",
            dataList : ""
        }
    },
    methods : {
        close(){
            this.isClose = false;
            this.$emit("to-parent",this.isClose);
        }
    },
    ready(){
        this.$http.get("../static/data.json")
        .then(function(result){
            //console.log(result);
            this.dataList = result.body;
        },function(error){
            console.log(error);
        })
    }
}

</script>

<style>
.announcement{
    position:absolute;
    left:0px;
    top:0px;
    right:0px;
    bottom:0px;
    color:#fff;
    padding:2.25rem 1.8rem 2rem 1.8rem;
}
.aMove-transition{
    transition:all 1s;
    background:rgba(57,66,73,1);   
    z-index: 20;
}
.aMove-enter{
    background:rgba(57,66,73,0);
}
.aMove-leave{
    background:rgba(57,66,73,0);
    opacity:0;
}
.a_title{
    height:2.7rem;
    line-height:2.7rem;
    text-align:center;
    font-size:0.8rem;
}
.a_star{
    height:1rem;
    text-align:center;
}
.a_star img{
    height:1rem;
    margin-right:1rem;
}

.favourable,
.seller_ann{
    height:1.9rem;
    margin-bottom:0.9rem;
    position:relative;
    border-bottom:1px solid #62666f;
}
.favourable span,
.seller_ann span{
    height:0.7rem;
    line-height:0.7rem;
    padding:0 12px;
    font-size:0.7rem;
    position:absolute;
    bottom:-0.35rem;
    left:50%;
    transform:translate(-50%,0);
    background:rgba(57,66,73,1);
}

.fav_list{
    padding-left:0.6rem; 
}
.fav_list li{
    height:1.4rem;
    line-heigt:1.4rem;
    font-size:12px;
}
.fav_list li span{
    width:0.8rem;
    height:0.825rem;
    margin-right:6px;
    display:inline-block;
    background:url("../../img/sub.png");
    background-size:100%;
    position:relative;
    top:15%;
}

.seller_ann{
    height:1.2rem;
    margin-bottom:1.5rem;
}
.seller_content{
    height:1.2rem;
    line-height:1.2rem;
    font-size:0.6rem;
    padding-left:0.65rem;
}

.close{
    width:0.95rem;
    height:1rem;
    position:absolute;
    left:50%;
    bottom:2rem;
    transform:translate(-50%,0);
    background:url("../../img/close.png");
    background-size:100%;
}
</style>