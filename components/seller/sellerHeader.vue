<template>
	<div>
		<div class="head ">
        <div class="logo"><img :src="dataList.seller.avatar" alt="" /></div>
        <div class="head_detial">
            <h2><span class="pinpai">品牌</span>{{dataList.seller.name}}</h2>
            <p class="transport">{{dataList.seller.description}}/{{dataList.seller.deliveryTime}}分钟送达</p>    
            <p class="sub_bar"><span class="sub" >减</span>{{dataList.seller.supports[0].description}}
            <span class="num" @click="announcement">{{dataList.seller.supports.length}}个 ></span></p>
        </div>
        <p class="gonggao_bar" @click="announcement"><span class="gonggao">公告</span>{{dataList.seller.bulletin}}<span class="move" >></span></p>
    </div>

    <div class="nav">
        <ul>
            <li ><a href="#/sellerHeader/sellerlist" :class="{'active':arr.a}"  @click="arrClick" index="a">商品{{arr[0]}}</a></li>
            <li><a href="#/sellerHeader/assess" :class="{'active':arr.b}" @click="arrClick" index="b">评价</a></li>
            <li><a href="#/sellerHeader/seller" :class="{'active':arr.c}" @click="arrClick" index="c">商家</a></li>
        </ul>
    </div>
    
    <router-view></router-view>

    


    <v-announcement v-show="announcementIsShow" @to-parent="getData"></v-announcement>

    
    

	</div>
</template>

<script>
import announcement from "./announcement.vue";


export default{
    data: function(){
        return{
            isShowSub : false,
            announcementIsShow :false,
            classflag :true,
            dataList : "",
            arr1 : ["a","b","c"],
            arr : {
                "a" : 1,
                "b" : 0,
                "c": 0
            }
        }
    },
    components : {
        "v-announcement" : announcement
    },
    methods : {
        announcement(){
            this.announcementIsShow = true;
        },
        getData(data){
            this.announcementIsShow = data;
        },
        arrClick(evt){
            //console.log(evt.target.getAttribute("index"));
            for(var i = 0;i < this.arr1.length ;i++){
                if(evt.target.getAttribute("index") == this.arr1[i]){
                    this.arr[this.arr1[i]] = 1;
                }else{
                    this.arr[this.arr1[i]] = 0;
                }
            }
        }
    },
    ready : function(){
        this.$http.get("../static/data.json")
        .then(function(result){
           // console.log(result.body);
            this.dataList = result.body;
        },function(error){
            console.log(error);
        });
    }
}

</script>


<style>

html{
    font-size:125%;
}

.head{
    height:6.9rem;
    background:url("../../img/head-bg.png") no-repeat ;
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
    /*top:-2px;*/
    margin-right:5px;
    color:#ef7371;
    background:#fff;
}
.num{
    width:2.1rem;
    height:1.2rem;
    font-size:11px;
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
    padding-right:30px;
    position:absolute;
    bottom:0px;
    left:0px;
    right:0px;
    font-size:13px;
    background:#494b51;
    color:#fff;
    padding-left:40px;
    box-sizing: border-box;
    /*单行文本溢出*/
    white-space:nowrap; 
    text-overflow:ellipsis; 
    -o-text-overflow:ellipsis; 
    overflow:hidden;
}
.gonggao{
    display:inline-block;
    width:26px;
    height:14px;
    line-height: 14px;
    text-align: center;
    font-size:10px;
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



@media screen and (min-width:320px) and (max-width:359px){
   html{
    font-size:100%;
   }
}

</style>