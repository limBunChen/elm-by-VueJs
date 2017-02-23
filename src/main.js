import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import home from "../components/home/home.vue";
import sellerHeader from "../components/seller/sellerHeader.vue";
import sellerList from "../components/seller/sellerList.vue";
import assess from "../components/seller/assess.vue";
import seller from "../components/seller/seller.vue";
import shopDetial from "../components/seller/shop-detial.vue"

import "../static/base.css";
import "../static/swiper.min.css";
import "../static/swiper.min.js";
// import "../static/iscroll.js"

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

router.map({
	"home" : {
		component : home
	},
	"sellerHeader" : {
		component : sellerHeader,
        "subRoutes" : {
            "sellerlist" :{
                component : sellerList
            },
            "assess" : {
                component : assess
            },
            "seller" : {
                component : seller
            },
            "detial/:id" : {
                component : shopDetial
            }
        }
	}
    
})

router.redirect({
	"*" :　"/home"
})

router.start(App,"#app");


var swiper1 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
 });


//var myScroll;

// function loaded () {
    //myScroll = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });
// }