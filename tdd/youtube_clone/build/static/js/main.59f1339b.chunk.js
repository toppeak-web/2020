(this.webpackJsonpyoutube_project=this.webpackJsonpyoutube_project||[]).push([[0],{10:function(e,t,a){e.exports={ytb_ui:"Video_ltem_ytb_ui__wwMKA",ui_thumb:"Video_ltem_ui_thumb__30mYn",load:"Video_ltem_load__1eUR9",thumb_img:"Video_ltem_thumb_img__EmcI6",ui_content:"Video_ltem_ui_content__3wqy_",content_title:"Video_ltem_content_title__2SJEv",content_channel:"Video_ltem_content_channel__2Z0Wg",content_description:"Video_ltem_content_description__PhrCQ"}},37:function(e,t,a){e.exports={header:"Search_header_header__WymcW",logo:"Search_header_logo__D0URu",input:"Search_header_input__18glB",btn:"Search_header_btn__29B8G",img:"Search_header_img__B42Ea"}},40:function(e,t,a){},47:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},53:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),o=(a(52),a(26)),l=(a(53),a(10)),s=a.n(l);var u=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,r=a.publishedAt;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"sub"}),c.a.createElement("div",{className:"".concat(s.a.ytb_ui),onClick:function(){return n(t)}},c.a.createElement("div",{className:s.a.ui_thumb},c.a.createElement("img",{src:a.thumbnails.medium.url,alt:a.title,className:s.a.thumb_img})),c.a.createElement("div",{className:s.a.ui_content},c.a.createElement("div",{className:s.a.content_title},"Title: ","".concat(a.title.length>45?a.title.slice(0,45)+"...":a.title)),c.a.createElement("div",{className:s.a.content_channel},c.a.createElement("span",{className:s.a.channel_name},"Channel: ","".concat(a.channelTitle.length>50?a.channelTitle.substr(0,50)+"...":a.channelTitle)," "),c.a.createElement("span",{className:s.a.content_description,title:a.description},"description: ","".concat(a.description.length>50?a.description.substr(0,50)+"...":a.description)),c.a.createElement("span",{className:s.a.channel_video_create_time},function(e){var t=new Date,a=new Date(e),n=Math.floor((t.getTime()-a.getTime())/1e3/60);if(n<1)return"\ubc29\uae08\uc804";if(n<60)return"".concat(n,"\ubd84\uc804");var c=Math.floor(n/60);if(c<24)return"".concat(c,"\uc2dc\uac04\uc804");var r=Math.floor(n/60/24);return r<365?"".concat(r,"\uc77c\uc804"):"".concat(Math.floor(r/365),"\ub144\uc804")}(r))))))})),m=function(e){var t=e.videos,a=e.onVideoClick;return c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(u,{key:e.id,video:e,onVideoClick:a})})))},p=a(16),d=a(37),h=a.n(d),_=a(106),b=a(102),f=a(104),v=a(103),g=a(105),E=a(100),y=a(11),w=a(39),j=a.n(w),N=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var O=Object(n.memo)((function(e){var t=e.onSearch,a=N(),r=Object(n.useRef)();return console.log("head"),c.a.createElement("div",{className:a.root},c.a.createElement(_.a,{position:"static"},c.a.createElement(b.a,null,c.a.createElement(f.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer"},c.a.createElement("img",{className:h.a.img,src:"/images/logo.png",alt:"logo"})),c.a.createElement(v.a,{className:a.title,variant:"h6",noWrap:!0},"Youtube"),c.a.createElement("div",{className:a.search},c.a.createElement("div",{className:a.searchIcon},c.a.createElement(j.a,null)),c.a.createElement(g.a,{ref:r,onKeyPress:function(e){console.log("onKeyPress"),function(e){var a=e.target.value;t(a)}(e)},type:"search",placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})))))})),k=a(40),x=a.n(k),S=function(e){var t=e.video,a=e.video.snippet;return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:x.a.detail},c.a.createElement("iframe",{id:"ytplayer",title:"youtube video player",type:"text/html",width:"1080",height:"607.5",src:"https://www.youtube.com./embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),console.log(t),c.a.createElement("h2",null,a.title),c.a.createElement("h3",null,a.channelTitle),c.a.createElement("pre",null,a.description)))};var V=function(e){var t=e.yp,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],l=r[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),p=u[0],d=u[1],h=Object(n.useCallback)((function(e){d(null),t.search(e).then((function(e){return l(e)}))}),[]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return l(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(O,{onSearch:h}),c.a.createElement("section",{className:"content"},p&&c.a.createElement("div",{className:"detail"},p&&c.a.createElement(S,{video:p})),c.a.createElement("div",{className:"list"},c.a.createElement(m,{videos:i,onVideoClick:function(e){d(e)}}))))},C=a(24),R=a(21),B=a.n(R),I=a(25),P=a(41),T=a(42),M=a(43),A=a.n(M),L=new(function(){function e(t){Object(P.a)(this,e),this.youtube=A.a.create({baseURL:"https://www.googleapis.com//youtube/v3",params:{key:t}})}return Object(T.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyB4FfyoH7pqexVLafezqj0B_1Q9A0Nytj4");i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,{yp:L})),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.59f1339b.chunk.js.map