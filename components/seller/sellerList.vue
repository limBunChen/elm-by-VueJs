<template>
    <div class="Shopcontent" >

        <div class="content_nav" id="wrapper">
            <ul id="scroller">
                <li v-for="item in dataList.goods"><a href="javascript:;" @click="listClick($index)">{{item.name}}</a></li>
            </ul>
        </div>

        <div class="content_detial" >

            <div id="moveDiv">

                <div class="content_detial_bar" v-for="(index,item) in dataList.goods">

                    <h2 class="title" >{{item.name}}</h2>

                    <div class="detial_bar" v-for="food in item.foods">

                        <img :src="food.icon" alt="" />

                        <div class="detial">
                            <p class="small_title"><a href="#/sellerHeader/detial/{{index}}+{{$index}}">{{food.name}}</a>
                            </p>
                            <p class="xianzhou">{{food.description}}</p>
                            <p class="yueshou">
                                月售{{food.sellCount}}份&nbsp;好评率{{food.rating}}%
                            </p>
                            <p class="add_bar">
                                <span class="new">￥{{food.price}}</span>
                                <!--<span class="old">￥28</span>-->
                                <a href="javascript:;">
                                    <span class="sub1" v-show="food.num" @click="sub(food.gid,food.fid)"></span>
                                    <span class="text" v-show="food.num">{{food.num}}</span>
                                    <span class="add" @click="add(food.gid,food.fid)" id=
                                    "{{food.fid}}">
                                    
                                        <b :class='{"b":food.fly}'>
                                             <i :class='{"i":food.fly}'></i>
                                        </b>
                                    </span>
                                </a>
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <v-foot :money="money"></v-foot>

</template>





<script>
// import "../../funParabola.js";
import footer from "./footer.vue";

export default{
    data: function(){
        return{
            dataList : "",
            money : 0,
            saveArr : [],
            obj : {},
            getDdata : ""
        }
    },
    components : {
        "v-foot" :footer
    },
    methods : {
         listClick(index){
               var myHeight = 0;
               var length=document.getElementById("moveDiv").getElementsByClassName("content_detial_bar").length;

               for(var i = 0;i < length;i++){
                    if(i < index){
                        myHeight += parseInt(getStyle(document.getElementById("moveDiv").getElementsByClassName("content_detial_bar")[i],"height"));
                    }
               }
               document.getElementsByClassName("content_detial")[0].scrollTop = myHeight;
         },
         add(gid,fid){

               console.log(document.getElementById(fid).childNodes[1].childNodes[1]);
               /* 元素 */
               var element = document.getElementById(fid).childNodes[1],
                   box = document.getElementsByClassName("shop")[0];
                   // 点击运动元素时给变运动元素的背景色
                   element.style.backgroundColor = "#00a0dc";
               // 抛物线元素的的位置标记
               var parabola = funParabola(element, box).mark();

               // 抛物线运动的触发
                   parabola.init();

               
               
            for(var i = 0;i < this.dataList.goods[gid].foods.length;i++){
               this.dataList.goods[gid].foods[i].fly = false;
                if(fid == this.dataList.goods[gid].foods[i].fid){
                    this.dataList.goods[gid].foods[i].num++;
                    this.money += this.dataList.goods[gid].foods[i].price;

                     // this.dataList.goods[gid].foods[i].fly = true;
                    //存储数据开始
                    this.obj = {
                        "id" : this.dataList.goods[gid].foods[i].fid,
                        "name" : this.dataList.goods[gid].foods[i].name,
                        "num" : this.dataList.goods[gid].foods[i].num
                    };
                    var flag = true;
                    for(var j = 0;j<this.saveArr.length;j++){
                        if(this.saveArr[j].id == this.dataList.goods[gid].foods[i].fid){
                            this.saveArr[j].num ++;
                            flag =false;
                        }
                    }
                    if(flag){
                        this.saveArr.push(this.obj);
                    }
                    localStorage.setItem("arrData",JSON.stringify(this.saveArr));
                    localStorage.setItem("money",this.money);
                    //console.log(this.saveArr);
                    //存储数据完成
                }
            }
         },
        sub(gid,fid){
                for(var i = 0;i < this.dataList.goods[gid].foods.length;i++){
                    if(fid == this.dataList.goods[gid].foods[i].fid){
                        this.dataList.goods[gid].foods[i].num--;
                        this.money -= this.dataList.goods[gid].foods[i].price;
                        this.sum--;
                    }
                }
                 //存储数据开始
                // let arrData = JSON.parse(localStorage.getItem("arrData"));
                // console.log(arrData);
                for(var j = 0;j<this.saveArr.length;j++){
                    if(fid == this.saveArr[j].id){
                        this.saveArr[j].num --;
                        if(this.saveArr[j].num == 0){
                            this.saveArr.splice(j,1);
                        }
                    }
                }
                localStorage.setItem("arrData",JSON.stringify(this.saveArr));
                localStorage.setItem("money",this.money);
                //console.log(this.saveArr);
                //存储数据完成
         }
    },
    ready(){
        //总价重置为0,然后从本地存储中读取数据,这样做的目的是为了在我们切换页面的时候不影响,因为我们是页面一运行就请求数据的.如果不重置,会导致数据错乱
        var arrData = JSON.parse(localStorage.getItem("arrData"));

          if(arrData != null){
               this.saveArr = this.saveArr.concat(arrData);
          }
        // alert(localStorage.getItem("money"))
        this.money = localStorage.getItem("money")? parseInt(localStorage.getItem("money")):0;
        this.$http.get("../static/data.json")
        .then(function(result){
            //购物车的实现  先给我们的到的数据添加一个num(用来判断减号的状态,及数量),id(用来判断是哪个按钮点击);
            
            var gid = -1;//初始值为-1的原因是因为数组的下标是从零开始的,方便后面的计算
            var fid = 0;
            var arrData = JSON.parse(localStorage.getItem("arrData"));//刷新页面读取数据

            for(var i = 0,lenI = result.body.goods.length;i < lenI;i++){

                gid++;

                for(var j = 0,lenJ = result.body.goods[i].foods.length;j < lenJ;j++){
                    result.body.goods[i].foods[j]["num"] = 0;
                    result.body.goods[i].foods[j].gid = gid;
                    result.body.goods[i].foods[j].fid = fid++;

                    //刷新页面读取数据
                    if(arrData != null){
                         for(var n = 0,length = arrData.length;n < length;n++){
                              if(arrData[n].id == result.body.goods[i].foods[j].fid){
                                   result.body.goods[i].foods[j]["num"] = arrData[n].num;
                              }
                         }
                    }
                }
            }

            this.dataList = result.body;
        },function(error){
            console.log(error);
        })


    }
}
// 获取样式
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}


var funParabola = function(element, target, options) {
    /*
     * 网页模拟现实需要一个比例尺
     * 如果按照1像素就是1米来算，显然不合适，因为页面动不动就几百像素
     * 页面上，我们放两个物体，200~800像素之间，我们可以映射为现实世界的2米到8米，也就是100:1
     * 不过，本方法没有对此有所体现，因此不必在意
    */
    
    var defaults = {
        speed: 166.67, // 每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒
        curvature: 0.001,  // 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
        progress: function() {},
        complete: function() {}
    };
    
    var params = {}; options = options || {};
    
    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }
    
    var exports = {
        mark: function() { return this; },
        position: function() { return this; },
        move: function() { return this; },
        init: function() { return this; }
    };
    
    /* 确定移动的方式 
     * IE6-IE8 是margin位移
     * IE9+使用transform
    */
    var moveStyle = "margin", testDiv = document.createElement("div");
    if ("oninput" in testDiv) {
        ["", "ms", "webkit"].forEach(function(prefix) {
            var transform = prefix + (prefix? "T": "t") + "ransform";
            if (transform in testDiv.style) {
                moveStyle = transform;
            }
        });     
    }
    
    // 根据两点坐标以及曲率确定运动曲线函数（也就是确定a, b的值）
    /* 公式： y = a*x*x + b*x + c;
    */
    var a = params.curvature, b = 0, c = 0;
    
    // 是否执行运动的标志量
    var flagMove = true;
    
    if (element && target && element.nodeType == 1 && target.nodeType == 1) {
        var rectElement = {}, rectTarget = {};
        
        // 移动元素的中心点位置，目标元素的中心点位置
        var centerElement = {}, centerTarget = {};
        
        // 目标元素的坐标位置
        var coordElement = {}, coordTarget = {};
        
        // 标注当前元素的坐标
        exports.mark = function() {
            if (flagMove == false) return this;
            if (typeof coordElement.x == "undefined") this.position();
            element.setAttribute("data-center", [coordElement.x, coordElement.y].join());
            target.setAttribute("data-center", [coordTarget.x, coordTarget.y].join());
            return this;
        }
        
        exports.position = function() {
            if (flagMove == false) return this;
            
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            // 初始位置
            if (moveStyle == "margin") {
                element.style.marginLeft = element.style.marginTop = "0px";
            } else {
                element.style[moveStyle] = "translate(0, 0)";
            }
            
            // 四边缘的坐标
            rectElement = element.getBoundingClientRect();
            rectTarget = target.getBoundingClientRect();
            
            // 移动元素的中心点坐标
            centerElement = {
                x: rectElement.left + (rectElement.right - rectElement.left) / 2 + scrollLeft,
                y: rectElement.top + (rectElement.bottom - rectElement.top) / 2 + scrollTop
            };
            
            // 目标元素的中心点位置
            centerTarget = {
                x: rectTarget.left + (rectTarget.right - rectTarget.left) / 2 + scrollLeft,
                y: rectTarget.top + (rectTarget.bottom - rectTarget.top) / 2 + scrollTop        
            };
            
            // 转换成相对坐标位置
            coordElement = {
                x: 0,
                y: 0    
            };
            coordTarget = {
                x: -1 * (centerElement.x - centerTarget.x),
                y:  -1 * (centerElement.y - centerTarget.y) 
            };
            
            /*
             * 因为经过(0, 0), 因此c = 0
             * 于是：
             * y = a * x*x + b*x;
             * y1 = a * x1*x1 + b*x1;
             * y2 = a * x2*x2 + b*x2;
             * 利用第二个坐标：
             * b = (y2+ a*x2*x2) / x2
            */
            // 于是
            b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x;    
            
            return this;
        };      
        
        // 按照这个曲线运动
        exports.move = function() {
            // 如果曲线运动还没有结束，不再执行新的运动
            if (flagMove == false) return this;
            
            var startx = 0, rate = coordTarget.x > 0? 1: -1;

            var step = function() {
                // 切线 y'=2ax+b
                var tangent = 2 * a * startx + b; // = y / x
                // y*y + x*x = speed
                // (tangent * x)^2 + x*x = speed
                // x = Math.sqr(speed / (tangent * tangent + 1));
                startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent + 1));
                
                // 防止过界
                if ((rate == 1 && startx > coordTarget.x) || (rate == -1 && startx < coordTarget.x)) {
                    startx = coordTarget.x;
                }
                var x = startx, y = a * x * x + b * x;
                
                // 标记当前位置，这里有测试使用的嫌疑，实际使用可以将这一行注释
                element.setAttribute("data-center", [Math.round(x), Math.round(y)].join());
                
                // x, y目前是坐标，需要转换成定位的像素值
                if (moveStyle == "margin") {
                    element.style.marginLeft = x + "px";
                    element.style.marginTop = y + "px";
                } else {
                    element.style[moveStyle] = "translate("+ [x + "px", y + "px"].join() +")";
                }
                
                if (startx !== coordTarget.x) {
                    params.progress(x, y);
                    window.requestAnimationFrame(step); 
                } else {
                    // 运动结束，回调执行
                    params.complete();
                    flagMove = true;    
                }
            };
            window.requestAnimationFrame(step);
            flagMove = false;
            
            return this;
        };
        
        // 初始化方法
        exports.init = function() {
            this.position().mark().move();
        };
    }
    
    return exports;
};
</script>





<style>
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
    width:100%;
    box-sizing:border-box;
    padding:0 12px;
    background:#f4f5f7;
    transform: translateZ(0);
    position:absolute;
}
.content_nav ul li{
    height:53px;
    border-bottom:1px solid #dddee0;
    position:relative;
}
/*这里的布局方便里面的内容可能有换行的情况就可以很好的适应*/
.content_nav ul li a{
    width:100%;
    font-size:12px;
    color:#555861;
    /*text-align: center;*/
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}

.content_detial{
    flex:1;
    margin-left:80px;
    /*position:relative;*/
    overflow:auto;
    background: #fff;
}
#moveDiv{
    position:relative;

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
    margin: 0 0rem 0 0.9rem;
    padding: 1rem 0.8rem 1rem 0;
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
.content_detial_bar div:last-child{
    border:none;
}
.detial .yueshou{
    margin-bottom:8px;
}
.detial .xianzhou{
    margin:0.2rem 0;
}
.xianzhou{
    width:9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
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
    background:url("../../img/sub-bg.png") no-repeat;
    background-size:100%;
}
.add{
    width:1rem;
    height:1rem;
    display:inline-block;
    background:url("../../img/add-bg.png") no-repeat;
    background-size:100%;
    position:relative;
    z-index:5;
}
.add b{
    position:absolute;
    width:1rem;
    height:1rem;
    z-index:5;
    /*background:red;*/
     border-radius:100%;
     /*transition: all 3s cubic-bezier(.42,-1.17,.83,.67);*/
}

.add b i{
     position:absolute;
     width:1rem;
     height:1rem;
     border-radius:100%;
     /*background:#f00;*/
/*//     transition: all 3s;
//      opacity:0;*/
 }
/*// .b{
                
//     -webkit-transform: translate(0px,300px);                   
//             transform: translate(0px,300px);
// }
// .i{
    
//     -webkit-transform: translate(-300px,0px);                  
//             transform: translate(-300px,0px);
//     opacity:1 !important;
// }*/


.text{
    position:relative;
    top:-5px;
}


</style>