"use strict";(self["webpackChunkcartoon"]=self["webpackChunkcartoon"]||[]).push([[667],{5667:function(t,a,e){e.r(a),e.d(a,{default:function(){return o}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"hotsearch"},[a("div",[a("form",{attrs:{action:"/"}},[a("van-search",{attrs:{"show-action":"",placeholder:t.title},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)]),a("div",{staticClass:"hint"},[t._v("热门搜索")]),a("div",{staticClass:"content-box"},t._l(t.HotsearchData,(function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:0!==s,expression:"hotIndex !== 0"}],key:s,staticClass:"content-item"},[a("div",{staticClass:"item"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.vertical_cover,alt:""}})]),a("div",{staticClass:"title-box"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"type"},[t._v(t._s(e.styles[0]))])])])])})),0)])},c=[],i=(e(7658),{name:"Hotsearch",data(){return{value:"",HotsearchData:[],title:null}},created(){this.getSearchRecommend()},methods:{getSearchRecommend(){this.axios({method:"get",url:"SearchRecommend",params:{num:7}}).then((t=>{this.HotsearchData=t.data.data,this.title=t.data.data[0].title})).catch((t=>{}))},onSearch(t){this.$router.push({name:"Search",params:{val:t}})},onCancel(){this.listData=[],this.$router.push({name:"Home"})}}}),n=i,r=e(1001),l=(0,r.Z)(n,s,c,!1,null,"599695a0",null),o=l.exports}}]);
//# sourceMappingURL=667.cbc69dfb.js.map