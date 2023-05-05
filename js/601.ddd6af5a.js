"use strict";(self["webpackChunkcartoon"]=self["webpackChunkcartoon"]||[]).push([[601],{1601:function(t,a,o){o.r(a),o.d(a,{default:function(){return c}});var i=function(){var t=this,a=t._self._c;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowHtml,expression:"isShowHtml"}],staticClass:"indatail"},[a("div",[a("van-nav-bar",{attrs:{title:t.cartoonItemData.title,"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}})],1),a("div",{staticClass:"auto-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cartoonItemData.horizontal_cover,expression:"cartoonItemData.horizontal_cover"}]}),a("div",{staticClass:"title-box"},[a("div",{staticClass:"title"},[t._v(t._s(t.cartoonItemData.title))]),a("div",{staticClass:"text-box"},[t._l(t.cartoonItemData.author_name,(function(o,i){return a("span",{key:"auter"+i,staticClass:"auter"},[t._v(t._s(o)+"·")])})),t._l(t.cartoonItemData.styles,(function(o,i){return a("span",{key:i},[t._v(t._s(o))])}))],2)])]),a("div",[a("van-goods-action",[t.isCollect?a("van-goods-action-icon",{attrs:{color:"#ffe697",icon:"star-o",text:"追漫"},on:{click:t.addCartoon}}):a("van-goods-action-icon",{attrs:{color:"#ffe697",icon:"star",text:"已追"},on:{click:t.removeCartoon}}),null===this.lookIndex?a("van-goods-action-button",{attrs:{color:"#fb7299",type:"danger",text:"开始阅读'"},on:{click:t.onLook}}):a("van-goods-action-button",{attrs:{color:"#fb7299",type:"danger"},domProps:{textContent:t._s("续看"+t.LookHistoryData.short_title+"话")},on:{click:t.onLook}})],1)],1),a("div",{staticClass:"isFinish-box"},[1===t.cartoonItemData.is_finish?a("div",{staticClass:"isFinish"},[t._v("已完结")]):a("div",{staticClass:"isFinish"},[t._v("连载中")])]),a("div",{staticClass:"introduce-box"},[a("div",{staticClass:"introduce"},[t._v(t._s(t.cartoonItemData.classic_lines))])]),a("div",{staticClass:"chapter-box"},[a("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[a("van-collapse-item",{attrs:{title:"全部章节("+this.cartoonItemData.last_ord+")",name:"1"}},[a("div",{staticClass:"isSort"},[t.isSort?a("span",{on:{click:t.listSort}},[a("van-icon",{attrs:{name:"ascending"}}),t._v("升序 ")],1):a("span",{on:{click:t.listSort}},[a("van-icon",{attrs:{name:"descending"}}),t._v("降序 ")],1)]),a("div",{staticClass:"epList-box"},t._l(t.cartoonItemData.ep_list,(function(o,i){return a("div",{key:i,staticClass:"list-item",attrs:{name:o.id},on:{click:function(a){return t.goLookCartoon(o.id,o.title)}}},[t._v(" "+t._s(o.short_title)+" "),a("div",{staticClass:"icon-box"},[a("van-icon",{attrs:{color:"#f9a018",name:!0===o.is_locked?"lock":""}})],1)])})),0)])],1)],1),a("div",{staticClass:"forum-box"},[a("div",{staticClass:"title"},[t._v(" 讨论区 "),a("span",[t._v("("+t._s(t.amount)+")")])]),a("div",{staticClass:"content-box"},t._l(t.forumData,(function(o,i){return a("div",{key:i,staticClass:"forum-item"},[a("div",{staticClass:"user"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.member.avatar,expression:"forumItem.member.avatar"}]}),a("span",[t._v(t._s(o.member.uname))])]),a("div",{staticClass:"text"},[t._v(t._s(o.content.message))])])})),0)]),a("div",{staticClass:"live-box"},[a("div",{staticClass:"title"},[t._v("猜你喜欢")]),a("div",{staticClass:"live-list"},t._l(t.liveData,(function(o,i){return a("div",{key:i,staticClass:"live-item",on:{click:function(a){return t.goCartoon(o.id)}}},[a("div",{staticClass:"auto-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.vertical_cover,expression:"liveItem.vertical_cover"}]})]),a("div",{staticClass:"content-text"},[a("div",{staticClass:"name"},[t._v(t._s(o.title))]),a("div",{staticClass:"update"},[1===o.is_finish?a("span",[t._v("[完结] 共")]):a("span",[t._v("更新至")]),t._v(" "+t._s(o.last_short_title)+"话 ")])])])})),0)])])},s=[],e=(o(7658),o(541),{name:"Indetail",data(){return{cartoonItemData:{},ComicDetail:[],activeName:["1"],isCollect:!0,isShowHtml:!1,isSort:!0,id:null,forumData:[],amount:"",liveData:[],LookHistoryData:[],lookIndex:null}},created(){let t=this.$route.params.id;this.$root.nowIndetailId=this.$route.params.id,this.id=Number(t),this.getCartoonItem(t),this.getForumList(t),this.getLiveList(t);let a=JSON.parse(localStorage.getItem("BookrackData"));this.$root.bookData=Array.from(new Set(a));let o=localStorage;if(-1!==this.$root.bookData.indexOf(this.id)&&this.switchover(),void 0===o.LookHistory)localStorage.setItem("LookHistory","[]");else{let a=JSON.parse(localStorage.getItem("LookHistory"));a.forEach((a=>{a.id===t&&(this.lookIndex=a.index)})),this.$root.LookHistory=Array.from(new Set(a))}},methods:{addCartoon(){this.isCollect=!this.isCollect,this.$root.bookData.push(this.id),localStorage.setItem("BookrackData",JSON.stringify(this.$root.bookData))},removeCartoon(){this.isCollect=!this.isCollect,this.$root.bookData.splice(this.$root.bookData.indexOf(this.id),1),localStorage.setItem("BookrackData",JSON.stringify(this.$root.bookData))},switchover(){this.isCollect=!1},goCartoon(t){this.$router.push({name:"Indetail",params:{id:t}}),this.$router.go(0)},goLookCartoon(t,a){let o=this.$root.ListIdData.findIndex((a=>a.id==t)),i={id:this.$root.nowIndetailId,index:o},s=this.$root.LookHistory.findIndex((t=>t.id==i.id));-1===s?(this.$root.LookHistory.push(i),localStorage.setItem("LookHistory",JSON.stringify(this.$root.LookHistory))):(this.$root.LookHistory.splice(s,1),this.$root.LookHistory.push(i),localStorage.setItem("LookHistory",JSON.stringify(this.$root.LookHistory))),this.$router.push({name:"Watch",params:{id:t,title:a,nowIndetailId:this.$root.nowIndetailId}})},onLook(){this.$router.push({name:"Watch",params:{id:this.LookHistoryData.id,title:this.LookHistoryData.title,nowIndetailId:this.$root.nowIndetailId}})},listSort(){this.isSort=!this.isSort,this.getCartoonItem(this.id)},getForumList(t){this.axios({method:"get",url:"/ReplyMain",params:{oid:t}}).then((t=>{this.forumData=t.data.data.replies,t.data.data.cursor.all_count>1e4?this.amount=(t.data.data.cursor.all_count/1e4).toFixed(1)+"W":t.data.data.cursor.all_count>1e3?this.amount=(t.data.data.cursor.all_count/1e3).toFixed(1)+"K":t.data.data.cursor.all_count>0?this.amount=t.data.data.cursor.all_count:this.amount="暂无"})).catch((t=>{}))},getCartoonItem(t){this.axios({method:"get",url:"/ComicDetail",params:{comicId:t}}).then((t=>{this.$root.ListIdData=[],this.LookHistoryData=[],this.cartoonItemData=t.data.data,this.$root.epListData=t.data.data.ep_list;let a=[];this.cartoonItemData.ep_list.forEach((t=>{a.unshift(t)})),null===this.lookIndex?this.LookHistoryData=a[0]:this.LookHistoryData=a[this.lookIndex],this.cartoonItemData.ep_list.forEach((t=>{this.$root.ListIdData.unshift({id:t.id,title:t.title})})),this.isShowHtml=!0,this.isSort?t.data.data.ep_list.reverse():t.data.data.ep_list})).catch((t=>{}))},getLiveList(t){this.axios({method:"get",url:"/MoreRecommend",params:{comicId:t}}).then((t=>{this.liveData=t.data.data.recommend_comics.slice(0,6)})).catch((t=>{}))},onClickLeft(){this.$router.push({name:"Home"})}}}),r=e,n=o(1001),l=(0,n.Z)(r,i,s,!1,null,"07ea8645",null),c=l.exports}}]);
//# sourceMappingURL=601.ddd6af5a.js.map