<template>
<div class="shopCart-wrap" transition="opa">
   <div class="shopCart-bar" transition="shop">
       <div class="shopCart">
            购物车
            <span class="delet">清空</span>
       </div>
       <ul class="shopList">
            <li v-for="item in getdata">
                {{item.name}} 
                <a href="javascript:;">
                    <span class="s-sub" v-if="item.num"></span>
                    <span class="s-text" v-if="item.num">{{item.num}}</span>
                    <span class="s-add"></span>
                </a>
            </li>
        </ul>
   </div>
</div>
</template>

<script>

export default{
    props : ["getdata"],
    data(){
        return {

        }
    },
    ready : function(){
        console.log(this.getdata);
    }
}

</script>


<style>
.shopCart-wrap{
    position: absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:2.4rem;
    
    z-index:5;
}
.opa-transition{
    transition:all 1s;
    background:rgba(103,110,118,.5);
}
.opa-enter{
    background:rgba(103,110,118,0);
}
.opa-leave{
    background:rgba(103,110,118,0);
}
.shop-transition{
    transition:all 1s;
    transform:translate(0,0);
}
.shop-enter{
    transform:translate(0,100%);
}
.shop-leave{
    transform:translate(0,100%);
}

.shopCart-bar{
    position: absolute;
    bottom:0px;
    left:0px;
    right:0px;
    z-index:10;
    background:#fff;
}
.shopCart{
    height:1.95rem;
    line-height:1.95rem;
    font-size:13px;
    padding-left:0.9rem;
    border-bottom:2px solid #dddde0;
    background:#f4f5f7;
    color:#070e16;
}
.shopCart span{
    float:right;
    margin-right:0.95rem;
    color:#009cd0;
}

.shopList{
    padding:0px 0.9rem;
}
.shopList li{
    height:2.4rem;
    line-height:2.4rem;
    position:relative;
    font-size:0.7rem;
    color:#05111d;
    border-bottom:1px solid #e8e8e8;
}
.shopList li a{
    position:absolute;
    right:0;
    top:50%;
    transform:translate(0,-50%);
    overflow:hidden;
}
.shopList li a span{
    width:1rem;
    height:1rem;
    line-height:1rem;
    float:left;
}
.s-sub{
    background:url(../../img/sub-bg.png);
    background-size:100%;
}
.s-add{
    background:url(../../img/add-bg.png);
    background-size:100%;
}
.s-text{
    text-align:center;
    margin:0 5px;
}
</style>