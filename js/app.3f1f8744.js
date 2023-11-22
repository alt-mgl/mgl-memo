(function(){"use strict";var t={3959:function(t,e,a){var s=a(538),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"view-wrapper"},[e("router-view")],1),e("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"bottom"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#/index",active:"index"===t.activePage||""===t.activePage}},[e("b-icon-lightning-charge-fill"),t._v("   "),e("span",[t._v("背诵")])],1),e("b-nav-item",{attrs:{href:"#/word-base",active:"word-base"===t.activePage}},[e("b-icon-journal-bookmark-fill"),t._v("   "),e("span",[t._v("词库")])],1),e("b-nav-item",{attrs:{href:"#/about",active:"about"===t.activePage}},[e("b-icon-emoji-sunglasses-fill"),t._v("   "),e("span",[t._v("关于")])],1)],1)],1)],1)},i=[],r=(a(7658),a(8345)),n=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"light",variant:"warning"}},[e("b-navbar-nav",[e("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.setting-modal",modifiers:{"setting-modal":!0}}]},[e("b-icon-gear")],1),"无课程"!==t.lNo?e("b-nav-item",{staticClass:"nav-block"},[e("div",{staticClass:"nav-block-item",on:{click:t.handlePrev}},[e("b-icon-chevron-left")],1),e("div",{staticClass:"nav-block-item"},[t._v(" 第 "+t._s(t.lNo)+" 课 ")]),e("div",{staticClass:"nav-block-item",on:{click:t.handleNext}},[e("b-icon-chevron-right")],1)]):t._e(),e("b-nav-item",{on:{click:t.getBatchData}},[e("b-icon-arrow-clockwise")],1)],1)],1),e("b-container",[e("b-row",{staticClass:"mt-2 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("b-progress",{attrs:{value:t.lessonProgress,height:"12px",variant:"secondary",max:"100","show-progress":""}})],1)],1),e("b-row",{staticClass:"mt-4 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("b-card",[t.oldStyleMode&&"ugr"===t.oldType?e("b-row",[e("b-col",{staticClass:"old-mgl-text-wrapper",attrs:{cols:"4"}},[e("p",{staticClass:"old-mgl-text",staticStyle:{"font-family":"Onon Sonin MGL !important"}},[t._v(" "+t._s(t.oldWord)+" ")])]),e("b-col",{staticClass:"old-mgl-expl-wrapper",attrs:{cols:"8"}},[e("div",{staticClass:"expl-text"},[t._v(" "+t._s(t.expl)+" ")])])],1):t._e(),t.oldStyleMode&&"arb"===t.oldType?e("b-row",[e("b-col",{staticClass:"text-center"},[e("p",{staticClass:"main-text",staticStyle:{"font-family":"Noto Sans ARB !important"}},[t._v(" "+t._s(t.oldWord)+" ")]),e("div",{staticClass:"expl-text"},[t._v(" "+t._s(t.expl)+" ")])])],1):t._e(),t.oldStyleMode?t._e():e("b-row",[e("b-col",{staticClass:"text-center"},[e("p",{staticClass:"main-text"},[t._v(" "+t._s(t.newWord)+" ")]),e("div",{staticClass:"expl-text"},[t._v(" "+t._s(t.expl)+" ")])])],1)],1)],1)],1),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("audio",{attrs:{id:"player",src:t.audio,controls:"",autoplay:""}})])],1),e("div",{staticClass:"img-outer-wrapper"},[e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[t.imgUploaderStatus?t._e():e("div",{staticClass:"img-btn-wrapper",on:{click:t.handleUploaderSwitchClick}},[e("b-button",{attrs:{variant:"outline-success"}},[e("b-icon-card-image")],1)],1)])],1),t.imgData?e("b-row",{staticClass:"mt-2 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("div",{staticClass:"img-wrapper",style:`background-image: url('${t.imgData}')`})])],1):t._e(),t.imgUploaderStatus?e("b-row",{staticClass:"mt-2 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"3"}},[e("input",{ref:"uploader",staticClass:"uploader-anchor",attrs:{type:"file"},on:{change:t.handleUploaderChange}}),e("div",{staticClass:"img-uploader",on:{click:t.handleUploaderClick}},[e("div",{staticClass:"img-uploader-btn-wrapper"},[e("b-icon-card-image"),e("div",[t._v("点击上传图片")])],1)])]),e("b-col",{attrs:{col:"",lg:"3"}},[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"粘贴图片到此处（仅电脑端可用）","no-resize":""},on:{paste:t.handleTextDataPaste}})],1)],1):t._e()],1),e("b-row",{staticClass:"mt-4 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("b-progress",{attrs:{value:t.batchProgress,variant:100===t.batchProgress?"success":"primary",max:"100",animated:""}})],1)],1),e("b-row",{staticClass:"mt-2 justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"6"}},[e("b-button",{attrs:{variant:"primary",block:"",size:"lg"},on:{click:t.handleMemoClick}},[e("b-icon-lightning-charge-fill")],1)],1)],1),e("b-row",{staticClass:"mt-5 book-name"},[e("b-col",[t._v(" "+t._s(t.bookName)+" ")])],1)],1),e("b-modal",{attrs:{id:"setting-modal",title:"设置",centered:"","hide-footer":""}},[e("b-row",[e("b-col",[e("b-form-checkbox",{attrs:{switch:"",size:"lg",disabled:""===t.oldType},on:{change:t.handleTextStyleChange},model:{value:t.oldStyleMode,callback:function(e){t.oldStyleMode=e},expression:"oldStyleMode"}},[t._v(" 传统文字 ")])],1),e("b-col",[e("b-form-checkbox",{attrs:{switch:"",size:"lg"},on:{change:t.handleModeChange},model:{value:t.reviewMode,callback:function(e){t.reviewMode=e},expression:"reviewMode"}},[t._v(" 复习模式 ")])],1)],1),e("b-row",{staticClass:"mt-4"},[e("b-col",[e("b-input-group",{attrs:{prepend:"课号"}},[e("b-form-select",{attrs:{id:"lno-select",value:t.lNo,options:t.lList},on:{change:t.handleLNoChange}})],1)],1)],1)],1)],1)},l=[],c=a(6486),d=a.n(c),m=a(9483),h=a.n(m);const u=async()=>{const t=await h().getItem("cur_book"),e=await h().getItem("all_books"),a=await h().getItem("s_mode"),s=await h().getItem("s_text"),o=await h().getItem("s_ls"),i=await h().getItem("s_lno");null===t&&await h().setItem("cur_book",""),null===e&&await h().setItem("all_books",[]),null===a&&await h().setItem("s_mode","default"),null===s&&await h().setItem("s_text","new"),null===o&&await h().setItem("s_ls",["无课程"]),null===i&&await h().setItem("s_lno","无课程")},b=async t=>{const e=await h().getItem(`book_${t}_words`);return null!==e},g=async t=>{if(await u(),"id"in t){const e=`book_${t.id}`;let a={id:t.id};"name"in t?(await h().setItem(e+"_name",t.name),a["name"]=t.name):console.error("数据格式错误，缺少name"),"hasOld"in t&&t.hasOld&&"oldType"in t?(await h().setItem(e+"_otype",t.oldType),a["oldType"]=t.oldType):(await h().setItem(e+"_otype",""),a["oldType"]=""),"baseUrl"in t?(await h().setItem(e+"_burl",t.baseUrl),a["baseUrl"]=t.baseUrl):(await h().setItem(e+"_burl",""),a["baseUrl"]="");const s=await h().getItem(e+"_img_info");s||await h().setItem(e+"_img_info",{});const o=await h().getItem(e+"_words");if(o)if(a["progress"]=await h().getItem(e+"_progress"),"words"in t){const s={};o.forEach((t=>{s[t.id]=t}));const i=await h().getItem(e+"_count");t.words.forEach((t=>{s[t.id]=t,t.id in i||(i[t.id]=0)})),await h().setItem(e+"_count",i);const r=Object.values(s);await h().setItem(e+"_words",r),a["words"]=r}else a=null,console.error("数据格式错误，缺少words");else{"words"in t?(await h().setItem(e+"_words",t.words),a["words"]=t.words):(a=null,console.error("数据格式错误，缺少words")),await h().setItem(e+"_progress",0),a["progress"]=0;const s={};t.words.forEach((t=>{s[t.id]=0})),await h().setItem(e+"_count",s)}const i=await h().getItem("all_books");return i.push(t.id),await h().setItem("all_books",d().uniq(i)),a}return console.error("数据格式错误，缺少id"),!1},w=async()=>await h().getItem("cur_book"),p=async t=>{await h().setItem("cur_book",t);const e=await h().getItem(`book_${t}_words`),a=[];let s="";e.forEach((t=>{const e=t.lno;e!==s&&(a.push(e),s=e)})),await h().setItem("s_ls",a),await h().setItem("s_lno",a[0]),await h().setItem("s_mode","default"),await h().setItem("s_text","new")},v=async()=>{await u();const t=await h().getItem("s_ls"),e=await h().getItem("s_lno"),a=await h().getItem("s_text"),s=await h().getItem("s_mode"),o=await h().getItem("cur_book"),i=await h().getItem(`book_${o}_otype`),r=await h().getItem(`book_${o}_burl`),n=await h().getItem(`book_${o}_name`);return{lList:t,lNo:e,textStyle:a,mode:s,oldType:i,baseUrl:r,bookName:n}},f=async(t,e)=>{await h().setItem(t,e)},_=async t=>{const e=await h().getItem(`book_${t}_words`);return e},y=async(t,e,a)=>{const s=await h().getItem("cur_book"),o=await h().getItem(`book_${s}_words`),i=await h().getItem(`book_${s}_count`),r=a?o.filter((t=>parseInt(t.lno)<=parseInt(e))):o.filter((t=>t.lno==e)),n=r.sort(((t,e)=>i[t.id]-i[e.id])),l=n.slice(0,t);return l},k=async()=>{const t=await h().getItem("cur_book");return await h().getItem(`book_${t}_img_info`)},I=async(t,e)=>{const a=await h().getItem("cur_book"),s=await h().getItem(`book_${a}_img_info`);s[t]=e,await h().setItem(`book_${a}_img_info`,s)},C=async t=>{const e=await h().getItem("cur_book"),a=await h().getItem(`book_${e}_count`);a[t]=a[t]+1,await h().setItem(`book_${e}_count`,a);let s=0;Object.values(a).forEach((t=>{t>0&&(s+=1)}));const o=(s/Object.values(a).length*100).toFixed(2);return await h().setItem(`book_${e}_progress`,o),o},x=async(t,e)=>{const a=await h().getItem("cur_book"),s=await h().getItem(`book_${a}_words`),o=await h().getItem(`book_${a}_count`),i=e?s.filter((e=>parseInt(e.lno)<=parseInt(t))):s.filter((e=>e.lno==t));let r=0;i.forEach((t=>{o[t.id]>0&&(r+=1)}));const n=(r/i.length*100).toFixed(2);return n},M=(t,e)=>{const a=new FileReader;a.addEventListener("load",(()=>e(a.result))),a.readAsDataURL(t)},N=10,S="old",j="new",P="review",$="default";var T={name:"IndexPage",data:()=>({isOld:!1,lList:[],lNo:"",oldStyleMode:!1,reviewMode:!1,oldType:"",baseUrl:"",bookName:"",newWord:"",oldWord:"",expl:"",audio:"",batchProgress:0,lessonProgress:0,words:[],memoed:[],last:null,wordId:null,imgInfo:null,imgData:null,imgUploaderStatus:!1}),watch:{async lNo(t){await f("s_lno",t),this.getBatchData()},reviewMode(){this.getBatchData()}},async created(){const t=await this.initBasicInfo();t?await this.initData():this.$bvModal.msgBoxOk("请先选择单词书再进行背诵",{title:"提示",size:"sm",buttonSize:"sm",okTitle:"好的",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((()=>{this.jumpToWordBase()}))},methods:{async initBasicInfo(){const t=await v(),{lList:e,lNo:a,oldType:s,textStyle:o,mode:i,baseUrl:r,bookName:n}=t;return this.lList=e,this.lNo=a,this.oldStyleMode=o===S,this.reviewMode=i===P,this.oldType=s,this.baseUrl=r,this.bookName=n,"无课程"!==a},async initData(){await this.getBatchData(),await this.initWordImgData()},async initWordImgData(){this.imgInfo=await k()},async getBatchData(){if(""!==this.lNo&&"无课程"!==this.lNo){const{lNo:t,reviewMode:e}=this;this.words=await y(N,t,e),this.memoed=[],this.memo()}},async handleModeChange(t){t?await f("s_mode",P):await f("s_mode",$)},async handleTextStyleChange(t){t?await f("s_text",S):await f("s_text",j)},async handleLNoChange(t){this.lNo=t},handleUploaderSwitchClick(){this.imgUploaderStatus=!0,this.imgData=null},handleUploaderClick(){this.$refs.uploader.click()},handleUploaderChange(t){const e=t.target.files;if(e.length>0){const t=e[e.length-1];M(t,this.processImg)}},handleTextDataPaste(t){if(t.clipboardData&&t.clipboardData.items){const{items:e}=t.clipboardData;let a=!0;for(let t=0;a&&t<e.length;t+=1){const s=e[t];if("file"===s.kind){const t=s.getAsFile();M(t,this.processImg),a=!1}}}},handleMemoClick(){this.memo()},handlePrev(){const t=parseInt(this.lNo);t>1&&(this.lNo=""+(t-1))},handleNext(){const t=parseInt(this.lNo);t<this.lList.length&&(this.lNo=`${t+1}`)},async processImg(t){this.imgData=t,this.imgUploaderStatus=!1,await I(this.wordId,t),await this.initWordImgData()},memo(){const{words:t}=this;let e=Math.floor(Math.random()*N);while(t.length>0&&this.last===t[e].id)e=Math.floor(Math.random()*N);this.last=t[e].id;const{id:a,word:s,oldWord:o,expl:i,audio:r}=t[e];this.newWord=s,this.oldWord=o,this.expl=i,this.audio=this.baseUrl+r,this.wordId=a,this.imgData=this.imgInfo?this.imgInfo[a]:null,this.updateBookProgress(a),this.updateLessonProgress(),this.updateBatchProgress(a)},jumpToWordBase(){this.$router.push("/word-base")},async updateBookProgress(t){await C(t)},async updateLessonProgress(){const{lNo:t,reviewMode:e}=this;this.lessonProgress=await x(t,e)},updateBatchProgress(t){this.memoed.push(t),this.memoed=d().uniq(this.memoed);const e=this.words.length,a=this.memoed.length;this.batchProgress=a/e*100}}},L=T,D=a(1001),O=(0,D.Z)(L,n,l,!1,null,"412ad0d0",null),U=O.exports,B=function(){var t=this,e=t._self._c;return e("div",[e("b-overlay",{attrs:{show:t.loading,opacity:"0.7","spinner-variant":"primary"}},[e("b-container",{staticStyle:{"min-height":"100px"}},[e("b-row",{staticClass:"justify-content-md-center"},t._l(t.books,(function(a){return e("b-col",{key:a.name,staticClass:"mt-4",attrs:{cols:"6",md:"3",sm:"4"}},[e("b-card",{attrs:{"bg-variant":t.curId===a.id?"primary":"","text-variant":t.curId===a.id?"white":""}},[e("div",{staticClass:"text-center book-title"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"text-center word-count"},[t._v(" "+t._s(a.words.length)+" 词 ")]),e("b-progress",{staticClass:"mt-2",attrs:{value:a.progress,max:"100",height:"12px",variant:t.progressColor(a.id,a.progress)}}),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.word-modal",modifiers:{"word-modal":!0}}],staticClass:"mt-2",attrs:{variant:t.curId===a.id?"light":"outline-info",size:"sm",block:""},on:{click:function(e){return t.handleView(a)}}},[e("b-icon-search"),t._v(" 查看 ")],1),e("b-button",{staticClass:"mt-2",attrs:{variant:t.curId===a.id?"warning":"outline-primary",size:"sm",block:""},on:{click:function(e){return t.handleMemorize(a)}}},[e("b-icon-lightning-charge"),t._v(" 背诵 ")],1)],1)],1)})),1)],1)],1),e("b-modal",{attrs:{id:"word-modal",title:t.title,centered:"","hide-footer":"",visible:t.modalStatus}},[e("b-input-group",{staticClass:"mb-3",attrs:{prepend:"课号"}},[e("b-form-select",{attrs:{id:"lno-select",value:t.lNo,options:t.lList},on:{change:t.handleLNoChange}})],1),e("b-table",{attrs:{striped:"",hover:"","sticky-header":"500px",items:t.words.filter((e=>e.lno===t.lNo)),fields:t.fields}})],1)],1)},z=[],W=a(6154);const E=[{url:"./mn001.json"},{url:"./mn002.json"},{url:"./mn003.json"},{url:"./mn004.json"},{url:"./kz001.json"}],Z=async t=>{try{const e=await W.Z.get(t);return 200===e.status?e.data:null}catch(e){return console.error(e),null}};var q={name:"WordBasePage",data:()=>({loading:!1,modalStatus:!1,books:[],words:[],lList:[],lNo:"",curId:null,title:"",fields:[{key:"id",label:"id"},{key:"word",label:"单词"},{key:"oldWord",label:"传统拼写",thStyle:"min-width: 90px"},{key:"expl",label:"翻译"}]}),created(){this.initBookInfo()},methods:{async initBookInfo(){this.curId=await w(),this.loading=!0;for(let t=0;t<E.length;t+=1){const e=E[t],a=await Z(e.url);if(a){const t=await g(a);t?this.books.push(t):this.showMsg("错误","保存单词书数据失败")}else this.showMsg("错误","获取数据失败")}this.loading=!1},async handleMemorize(t){const e=await b(t.id);e?(await p(t.id),this.$router.push("/index")):this.showMsg("提示","单词书不存在，请刷新后重试")},async handleView(t){const e=await b(t.id);this.words=[],this.lList=[],e?(this.title=t.name,this.words=await _(t.id),this.words.forEach((t=>this.lList.push(t.lno))),this.lList=d().uniq(this.lList),this.lList.length>0?this.lNo=this.lList[0]:this.lNo=""):this.showMsg("提示","单词书不存在，请刷新后重试")},handleLNoChange(t){this.lNo=t},showMsg(t,e){this.$bvModal.msgBoxOk(e,{title:t,size:"sm",buttonSize:"sm",okTitle:"确定",okVariant:"secondary",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0})},progressColor(t,e){let a="primary";return a=this.curId===t?100==e?"info":"warning":100==e?"success":"primary",a}}},A=q,F=(0,D.Z)(A,B,z,!1,null,"73849286",null),V=F.exports,R=function(){var t=this,e=t._self._c;return e("div",[e("b-container",[e("b-row",{staticClass:"mt-3 justify-content-md-center"},[e("b-col",{staticClass:"text-right",attrs:{cols:"6",md:"4"}},[e("img",{staticStyle:{width:"80%"},attrs:{src:t.logo,alt:"logo"}})]),e("b-col",{staticClass:"info-wrapper",attrs:{cols:"6",md:"4"}},[e("div",[e("div",{staticClass:"cn-text"},[t._v("阿六敦蒙古语工具站")]),e("div",{staticClass:"mn-text"},[t._v("ᠠᠯᠲᠠᠨ ᠮᠣᠩᠭᠣᠯ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠰᠠᠶᠢᠲᠤ")])])])],1),e("b-row",{staticClass:"mt-3 justify-content-md-center"},[e("b-col",{staticClass:"card-wrapper left-wrapper",attrs:{cols:"6",md:"4"}},[e("b-card",{staticClass:"item-card",attrs:{"bg-variant":"warning","text-variant":"dark"},on:{click:t.handleIndex}},[e("div",{staticClass:"icon-wrapper"},[e("b-icon-house-fill")],1),e("div",[t._v(" 主页 ")])])],1),e("b-col",{staticClass:"card-wrapper right-wrapper",attrs:{cols:"6",md:"4"}},[e("b-card",{staticClass:"item-card",attrs:{"bg-variant":"warning","text-variant":"dark"},on:{click:t.handleComment}},[e("div",{staticClass:"icon-wrapper"},[e("b-icon-chat-left-text-fill")],1),e("div",[t._v(" 反馈 ")])])],1)],1),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{staticClass:"card-wrapper left-wrapper",attrs:{cols:"6",md:"4"}},[e("b-card",{staticClass:"item-card",attrs:{"bg-variant":"warning","text-variant":"dark"},on:{click:t.handleEMail}},[e("div",{staticClass:"icon-wrapper"},[e("b-icon-envelope-fill")],1),e("div",[t._v(" 联系 ")])])],1),e("b-col",{staticClass:"card-wrapper right-wrapper",attrs:{cols:"6",md:"4"}},[e("b-card",{directives:[{name:"b-modal",rawName:"v-b-modal.donate-modal",modifiers:{"donate-modal":!0}}],staticClass:"item-card",attrs:{"bg-variant":"warning","text-variant":"dark"}},[e("div",{staticClass:"icon-wrapper"},[e("b-icon-hand-thumbs-up-fill")],1),e("div",[t._v(" 打赏 ")])])],1)],1),e("b-row",{staticClass:"mt-5 text-center"},[e("b-col",[e("div",{staticClass:"version-info"},[t._v(" 阿六敦背单词 V2.5 "),e("b-link",{attrs:{href:"https://space.bilibili.com/13957052/"}},[t._v("@济北周南")])],1)])],1)],1),e("b-modal",{attrs:{id:"donate-modal",title:"微信赞赏码",centered:"","hide-footer":""}},[e("b-row",[e("b-col",[e("img",{attrs:{src:t.zsm,alt:"赞赏码",width:"100%"}})])],1)],1)],1)},G=[],X=a.p+"img/logo.2afc6906.png",H=a.p+"img/zsm.8a516013.jpg",J={name:"AboutPage",data(){return{logo:X,zsm:H}},methods:{handleIndex(){window.location.href="https://alt-mgl.github.io"},handleEMail(){window.location.href="mailto://joenahm@yeah.net"},handleComment(){window.location.href="https://support.qq.com/products/596716"}}},K=J,Q=(0,D.Z)(K,R,G,!1,null,"8a69fd42",null),Y=Q.exports;const tt=[{path:"/",component:U},{path:"/index",component:U},{path:"/word-base",component:V},{path:"/about",component:Y}];var et={name:"App",router:new r.ZP({routes:tt}),data:()=>({activePage:""}),watch:{$route(t){this.activePage=t.path.slice(1)}},mounted(){this.activePage=this.$router.history.current.path.slice(1)},methods:{handleTabChange(t){this.$router.push(`/${t}`)}}},at=et,st=(0,D.Z)(at,o,i,!1,null,"6af31aee",null),ot=st.exports,it=a(9657),rt=a(3017);a(7024);s["default"].use(r.ZP),s["default"].use(it.XG7),s["default"].use(rt.X),s["default"].config.productionTip=!1,new s["default"]({render:t=>t(ot)}).$mount("#app")}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,i){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],i=t[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,i<r&&(r=i));if(n){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,o,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/mgl-memo/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var d=l(a)}for(e&&e(s);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},s=self["webpackChunkmgl_memo"]=self["webpackChunkmgl_memo"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3959)}));s=a.O(s)})();
//# sourceMappingURL=app.3f1f8744.js.map