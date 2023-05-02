"use strict";(self["webpackChunkcartoon"]=self["webpackChunkcartoon"]||[]).push([[878],{8878:function(t,o,a){a.r(o),a.d(o,{default:function(){return c}});var i=function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowHtml,expression:"isShowHtml"}],staticClass:"indatail"},[o("div",[o("van-nav-bar",{attrs:{title:t.cartoonItemData.title,"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}})],1),o("div",{staticClass:"auto-img"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cartoonItemData.horizontal_cover,expression:"cartoonItemData.horizontal_cover"}]}),o("div",{staticClass:"title-box"},[o("div",{staticClass:"title"},[t._v(t._s(t.cartoonItemData.title))]),o("div",{staticClass:"text-box"},[t._l(t.cartoonItemData.author_name,(function(a,i){return o("span",{key:"auter"+i,staticClass:"auter"},[t._v(t._s(a)+"·")])})),t._l(t.cartoonItemData.styles,(function(a,i){return o("span",{key:i},[t._v(t._s(a))])}))],2)])]),o("div",[o("van-goods-action",[t.isCollect?o("van-goods-action-icon",{attrs:{color:"#ffe697",icon:"star-o",text:"追漫"},on:{click:t.addCartoon}}):o("van-goods-action-icon",{attrs:{color:"#ffe697",icon:"star",text:"已追"},on:{click:t.removeCartoon}}),null===this.lookIndex?o("van-goods-action-button",{attrs:{color:"#fb7299",type:"danger",text:"开始阅读'"},on:{click:t.onLook}}):o("van-goods-action-button",{attrs:{color:"#fb7299",type:"danger"},domProps:{textContent:t._s("续看"+t.LookHistoryData.short_title+"话")},on:{click:t.onLook}})],1)],1),o("div",{staticClass:"isFinish-box"},[1===t.cartoonItemData.is_finish?o("div",{staticClass:"isFinish"},[t._v("已完结")]):o("div",{staticClass:"isFinish"},[t._v("连载中")])]),o("div",{staticClass:"introduce-box"},[o("div",{staticClass:"introduce"},[t._v(t._s(t.cartoonItemData.classic_lines))])]),o("div",{staticClass:"chapter-box"},[o("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(o){t.activeName=o},expression:"activeName"}},[o("van-collapse-item",{attrs:{title:"全部章节("+this.cartoonItemData.last_ord+")",name:"1"}},[o("div",{staticClass:"isSort"},[t.isSort?o("span",{on:{click:t.listSort}},[o("van-icon",{attrs:{name:"ascending"}}),t._v("升序 ")],1):o("span",{on:{click:t.listSort}},[o("van-icon",{attrs:{name:"descending"}}),t._v("降序 ")],1)]),o("div",{staticClass:"epList-box"},t._l(t.cartoonItemData.ep_list,(function(a,i){return o("div",{key:i,staticClass:"list-item",attrs:{name:a.id},on:{click:function(o){return t.goLookCartoon(a.id,a.title)}}},[t._v(" "+t._s(a.short_title)+" "),o("div",{staticClass:"icon-box"},[o("van-icon",{attrs:{color:"#f9a018",name:!0===a.is_locked?"lock":""}})],1)])})),0)])],1)],1),o("div",{staticClass:"forum-box"},[o("div",{staticClass:"title"},[t._v(" 讨论区 "),o("span",[t._v("("+t._s(t.amount)+")")])]),o("div",{staticClass:"content-box"},t._l(t.forumData,(function(a,i){return o("div",{key:i,staticClass:"forum-item"},[o("div",{staticClass:"user"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.member.avatar,expression:"forumItem.member.avatar"}]}),o("span",[t._v(t._s(a.member.uname))])]),o("div",{staticClass:"text"},[t._v(t._s(a.content.message))])])})),0)]),o("div",{staticClass:"live-box"},[o("div",{staticClass:"title"},[t._v("猜你喜欢")]),o("div",{staticClass:"live-list"},t._l(t.liveData,(function(a,i){return o("div",{key:i,staticClass:"live-item",on:{click:function(o){return t.goCartoon(a.id)}}},[o("div",{staticClass:"auto-img"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.vertical_cover,expression:"liveItem.vertical_cover"}]})]),o("div",{staticClass:"content-text"},[o("div",{staticClass:"name"},[t._v(t._s(a.title))]),o("div",{staticClass:"update"},[1===a.is_finish?o("span",[t._v("[完结] 共")]):o("span",[t._v("更新至")]),t._v(" "+t._s(a.last_short_title)+"话 ")])])])})),0)])])},s=[],e=(a(7658),a(541),{name:"Indetail",data(){return{cartoonItemData:{},ComicDetail:[],activeName:["1"],isCollect:!0,isShowHtml:!1,isSort:!0,id:null,forumData:[],amount:"",liveData:[],LookHistoryData:[],lookIndex:null}},created(){let t=this.$route.params.id;this.$root.nowIndetailId=this.$route.params.id,this.id=Number(t),this.getCartoonItem(t),this.getForumList(t),this.getLiveList(t);let o=JSON.parse(localStorage.getItem("BookrackData"));this.$root.bookData=Array.from(new Set(o));let a=localStorage;if(-1!==this.$root.bookData.indexOf(this.id)&&this.switchover(),void 0===a.LookHistory)localStorage.setItem("LookHistory","[]");else{let o=JSON.parse(localStorage.getItem("LookHistory"));o.forEach((o=>{o.id===t&&(this.lookIndex=o.index)})),this.$root.LookHistory=Array.from(new Set(o))}},methods:{addCartoon(){this.isCollect=!this.isCollect,this.$root.bookData.push(this.id),localStorage.setItem("BookrackData",JSON.stringify(this.$root.bookData))},removeCartoon(){this.isCollect=!this.isCollect,this.$root.bookData.splice(this.$root.bookData.indexOf(this.id),1),localStorage.setItem("BookrackData",JSON.stringify(this.$root.bookData))},switchover(){this.isCollect=!1},goCartoon(t){this.$router.push({name:"Indetail",params:{id:t}}),this.$router.go(0)},goLookCartoon(t,o){let a=this.$root.ListIdData.findIndex((o=>o.id==t)),i={id:this.$root.nowIndetailId,index:a},s=this.$root.LookHistory.findIndex((t=>t.id==i.id));-1===s?(this.$root.LookHistory.push(i),localStorage.setItem("LookHistory",JSON.stringify(this.$root.LookHistory))):(this.$root.LookHistory.splice(s,1),this.$root.LookHistory.push(i),localStorage.setItem("LookHistory",JSON.stringify(this.$root.LookHistory))),this.$router.push({name:"Watch",params:{id:t,title:o,nowIndetailId:this.$root.nowIndetailId}})},onLook(){console.log(this.LookHistoryData),this.$router.push({name:"Watch",params:{id:this.LookHistoryData.id,title:this.LookHistoryData.title,nowIndetailId:this.$root.nowIndetailId}})},listSort(){this.isSort=!this.isSort,this.getCartoonItem(this.id)},getForumList(t){this.axios({method:"get",url:"/ReplyMain",params:{oid:t}}).then((t=>{this.forumData=t.data.data.replies,t.data.data.cursor.all_count>1e4?this.amount=(t.data.data.cursor.all_count/1e4).toFixed(1)+"W":t.data.data.cursor.all_count>1e3?this.amount=(t.data.data.cursor.all_count/1e3).toFixed(1)+"K":t.data.data.cursor.all_count>0?this.amount=t.data.data.cursor.all_count:this.amount="暂无"})).catch((t=>{}))},getCartoonItem(t){this.axios({method:"get",url:"/ComicDetail",params:{comicId:t}}).then((t=>{this.$root.ListIdData=[],this.LookHistoryData=[],this.cartoonItemData=t.data.data,this.$root.epListData=t.data.data.ep_list;let o=[];this.cartoonItemData.ep_list.forEach((t=>{o.unshift(t)})),null===this.lookIndex?this.LookHistoryData=o[0]:this.LookHistoryData=o[this.lookIndex],this.cartoonItemData.ep_list.forEach((t=>{this.$root.ListIdData.unshift({id:t.id,title:t.title})})),this.isShowHtml=!0,this.isSort?t.data.data.ep_list.reverse():t.data.data.ep_list})).catch((t=>{}))},getLiveList(t){this.axios({method:"get",url:"/MoreRecommend",params:{comicId:t}}).then((t=>{this.liveData=t.data.data.recommend_comics.slice(0,6)})).catch((t=>{}))},onClickLeft(){this.$router.push({name:"Home"})}}}),r=e,n=a(1001),l=(0,n.Z)(r,i,s,!1,null,"6f821eab",null),c=l.exports}}]);
//# sourceMappingURL=878.e4ae9dd9.js.map