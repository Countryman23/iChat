(this.webpackJsonpichat=this.webpackJsonpichat||[]).push([[0],{129:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(40),c=n(3),i="mess/ADD_MESSAGE_BUTTON_BLL",a={MesDataName:[{id:1,name:"name1"},{id:2,name:"name2"},{id:3,name:"name3"},{id:4,name:"name4"}],MesDataItem:[{id:1,item:"item1"},{id:2,item:"item2"},{id:3,item:"item3"},{id:4,item:"item4"}]},o=function(t){return{type:i,newTextMessage:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var n=e.newTextMessage;return Object(c.a)(Object(c.a)({},t),{},{MesDataItem:[].concat(Object(r.a)(t.MesDataItem),[{id:5,item:n}])});default:return t}}},15:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"j",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"g",(function(){return j})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return b}));var r=n(134),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b945a48b-e23b-46ca-a66f-5493b89d60ce"}}),i=function(t,e){return c.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},a=function(t){return c.get("profile/"+t).then((function(t){return t.data}))},o=function(){return c.get("auth/me").then((function(t){return t.data}))},s=function(t){return c.post("follow/".concat(t),{}).then((function(t){return t.data}))},u=function(t){return c.delete("follow/".concat(t)).then((function(t){return t.data}))},j=function(t){return c.get("profile/status/"+t).then((function(t){return t.data}))},l=function(t){return c.put("profile/status/",{status:t}).then((function(t){return t.data}))},d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login/",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}))},f=function(){return c.delete("auth/login/").then((function(t){return t.data}))},b=function(t){var e=new FormData;return e.append("image",t),c.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))}},166:function(t,e,n){},20:function(t,e,n){t.exports={main:"Navigation_main__fLMFe",item:"Navigation_item__3P5ze",activeLink:"Navigation_activeLink__2EDob"}},290:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(69),a=n.n(i),o=(n(166),n(28)),s=n(29),u=n(30),j=n(31),l=n(20),d=n.n(l),f=n.p+"static/media/logo.38dd95ae.png",b=n(22),p=n(0),h=function(){return Object(p.jsxs)("div",{className:d.a.main,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{src:f,alt:"Logo"}),Object(p.jsx)("h1",{children:" \u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u0443\u043c\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/Authorization",activeClassName:d.a.activeLink,children:"Authorization"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/ProfileInfoContainer",activeClassName:d.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/Users",activeClassName:d.a.activeLink,children:"Users"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/Messages",activeClassName:d.a.activeLink,children:"Messages"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/Settings",activeClassName:d.a.activeLink,children:"Settings"})})]})]})},O=n(3),m=n(97),x=n.n(m),v=n(12),g=n(10),_=n.n(g),I=n(19),y=n(15),P=n(34),k="auth/SET_AUTH_USER_DATA",w={userId:null,login:null,email:null,isAuth:!1},S=function(t,e,n,r){return{type:k,data:{userId:t,login:e,email:n,isAuth:r}}},A=function(){return function(){var t=Object(I.a)(_.a.mark((function t(e){var n,r,c,i,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)();case 2:0===(n=t.sent).resultCode&&(r=n.data,c=r.id,i=r.login,a=r.email,e(S(c,i,a,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(O.a)(Object(O.a)({},t),e.data);default:return t}},T=n(130),N=n(131),C=n(39),E=n(49),D=n(54),M=n.n(D),U=Object(C.a)(20),F=Object(N.a)({form:"login"})((function(t){var e=t.handleSubmit,n=t.error;return Object(p.jsxs)("form",{onSubmit:e,children:[Object(p.jsx)("div",{children:Object(p.jsx)(T.a,{name:"email",placeholder:"Email",component:E.a,validate:[C.b,U]})}),Object(p.jsx)("div",{children:Object(p.jsx)(T.a,{name:"password",placeholder:"Password",component:E.a,validate:[C.b,U]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{name:"rememberMe",type:"checkbox",component:"input"})," Remember"]}),n&&Object(p.jsx)("div",{className:M.a.loginFormError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:" OK "})})]})})),z=n(8),R=Object(v.b)((function(t){return{isAuth:t.auth.isAuth}}),{LoginThunkCreator:function(t,e,n){return function(){var r=Object(I.a)(_.a.mark((function r(c){var i,a;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(y.d)(t,e,n);case 2:0===(i=r.sent).resultCode?c(A()):(a=i.messages.length>0?i.messages[0]:"Some error",c(Object(P.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}})((function(t){return t.isAuth?Object(p.jsx)(z.a,{to:"/ProfileInfoContainer"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"LOGIN"}),Object(p.jsx)(F,{onSubmit:function(e){t.LoginThunkCreator(e.email,e.password,e.rememberMe)}})]})})),J=function(t){return Object(p.jsx)("div",{children:t.isAuth?Object(p.jsxs)("div",{children:[t.login," ",Object(p.jsx)("button",{onClick:t.LogoutThunkCreator,children:"Log out"})," "]}):Object(p.jsxs)(b.b,{to:"/login",children:[" ",Object(p.jsx)(R,{})," "]})})},B=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"".concat(x.a.item," ").concat(x.a.active),children:Object(p.jsx)(J,Object(O.a)({},this.props))})}}]),n}(c.a.Component),G=Object(v.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{LogoutThunkCreator:function(){return function(){var t=Object(I.a)(_.a.mark((function t(e){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.e)();case 2:0===t.sent.resultCode&&e(S(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(B),W=n(40),X="post/ADD_POST_BLL",K={postData:[{id:1,text:"text1",like:10},{id:2,text:"text2",like:20},{id:3,text:"Bi",like:30},{id:4,text:"Mi",like:40}]},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case X:var n={id:5,text:e.newTextPost,like:50};return Object(O.a)(Object(O.a)({},t),{},{postData:[].concat(Object(W.a)(t.postData),[n])});default:return t}},q=n(58),H=n.n(q),Q=function(t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:H.a.item,children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"}),"".concat(t.text," ").concat(t.like),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Like"})})]})})},Z=n(67),Y=Object(C.a)(10),$=Object(N.a)({form:"post"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(T.a,{name:"newTextPost",placeholder:"add your text post",component:E.b,validate:[C.b,Y]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:" Add post "})})]})})),tt=Object(Z.a)((function(t){var e=t.postData.map((function(t){return Object(p.jsx)(Q,{text:t.text,like:t.like},t.id)}));return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:H.a.item,children:[Object(p.jsx)("div",{className:H.a.header,children:Object(p.jsx)("h3",{children:"My posts"})}),Object(p.jsx)("div",{children:Object(p.jsx)($,{onSubmit:function(e){t.addPostBLL(e.newTextPost)}})})]}),e]})})),et=Object(v.b)((function(t){return{postData:t.myPostsPage.postData,newPostData:t.myPostsPage.newPostData}}),(function(t){return{addPostBLL:function(e){t(function(t){return{type:X,newTextPost:t}}(e))}}}))(tt),nt=n(52),rt=n(68),ct=n.n(rt),it=function(t){var e=Object(r.useState)(!1),n=Object(nt.a)(e,2),c=n[0],i=n[1],a=Object(r.useState)(t.status),o=Object(nt.a)(a,2),s=o[0],u=o[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status"}),": ",Object(p.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[t.status||"---"," "]})]}),c&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),t.getUpdateStatusInfoThunk(s)},onChange:function(t){u(t.currentTarget.value)},value:s})})]})},at=n.p+"static/media/userPhoto.c22a77fb.png",ot=function(t,e,n,r){return Object(p.jsx)("div",{children:Object(p.jsx)(T.a,{placeholder:t,name:e,validators:n,component:r})})},st=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("input",{})})},ut=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"checkbox"})})},jt=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{})})},lt=Object(N.a)({form:"edit-form"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:" save "})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",ot("Full name","fullName",[],st)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",ot("","lookingForAJob",[],ut)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My skylls"}),": ",ot("My skylls","mySkylls",[],jt)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",ot("About me","amoutMe",[],jt)]})]})})),dt=function(t){return Object(p.jsxs)("div",{children:[t.isOwner&&Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("button",{onClick:t.editMode,children:"edit"})," "]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",t.profileInfo.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",t.profileInfo.lookingForAJob?"yes":"no"]}),t.profileInfo.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My skylls"}),": ",t.profileInfo.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",t.profileInfo.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.profileInfo.contacts).map((function(e){return Object(p.jsx)(ft,{contactTitle:e,contactValue:t.profileInfo.contacts[e]},e)}))]})]})},ft=function(t){var e=t.contactTitle,n=t.contactValue;return Object(p.jsxs)("div",{className:ct.a.Contact,children:[Object(p.jsx)("b",{children:e}),": ",Object(p.jsx)("b",{children:n})]})},bt=Object(Z.a)((function(t){var e=Object(r.useState)(!1),n=Object(nt.a)(e,2),c=n[0],i=n[1];return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:ct.a.userPhoto,children:[Object(p.jsx)("img",{src:t.profileInfo.photos.large||at}),Object(p.jsx)("div",{children:t.isOwner&&Object(p.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}})})]}),Object(p.jsx)(it,{status:t.status,getUpdateStatusInfoThunk:t.getUpdateStatusInfoThunk}),c?Object(p.jsx)(lt,{profileInfo:t.profileInfo,onSubmit:function(t){console.log(t)}}):Object(p.jsx)(dt,{profileInfo:t.profileInfo,isOwner:t.isOwner,editMode:function(){i(!0)}}),Object(p.jsx)(et,{})]})})})),pt=n(38),ht=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"reloadProfile",value:function(){var t=this.props.match.params.userId;t||(t=17232),this.props.getProfileInfoThunk(t),this.props.getStatusInfoThunk(t)}},{key:"componentDidMount",value:function(){this.reloadProfile()}},{key:"componentDidUpdate",value:function(t,e,n){this.props.match.params.userId!=t.match.params.userId&&this.reloadProfile()}},{key:"render",value:function(){return this.props.profileInfo?Object(p.jsx)("div",{children:Object(p.jsx)(bt,Object(O.a)(Object(O.a)({},this.props),{},{profileInfo:this.props.profileInfo,status:this.props.status,getUpdateStatusInfoThunk:this.props.getUpdateStatusInfoThunk,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}):Object(p.jsx)(z.a,{to:"/profile"})}}]),n}(c.a.Component),Ot=Object(z.f)(ht),mt=Object(v.b)((function(t){return{profileInfo:t.profilePage.profileInfo,status:t.profilePage.status,authorizeUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfileInfoThunk:pt.c,getStatusInfoThunk:pt.d,getUpdateStatusInfoThunk:pt.e,savePhoto:pt.g})(Ot),xt=function(){return Object(p.jsx)("div",{children:"Settings"})},vt=n(78),gt=n.n(vt),_t="app/SET_INITIALIZED",It={initialized:!1},yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _t:return Object(O.a)(Object(O.a)({},t),{},{initialized:!0});default:return t}},Pt=n(72),kt=function(t){return function(e){return Object(p.jsx)(c.a.Suspense,{fallback:Object(p.jsx)(Pt.a,{}),children:Object(p.jsx)(t,Object(O.a)({},e))})}},wt=c.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),St=c.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),At=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializApp()}},{key:"render",value:function(){var t=this;return this.props.initialized?Object(p.jsxs)("div",{className:gt.a.appWrapper,children:[Object(p.jsx)("div",{className:gt.a.nav,children:Object(p.jsx)(h,{})}),Object(p.jsxs)("div",{className:gt.a.content,children:[Object(p.jsx)(z.b,{path:"/Authorization",render:function(){return Object(p.jsx)(G,{})}}),Object(p.jsx)(z.b,{path:"/Profile",render:function(){return Object(p.jsx)(et,{newState:t.props.store})}}),Object(p.jsx)(z.b,{path:"/Users",render:kt(St)}),Object(p.jsx)(z.b,{path:"/ProfileInfoContainer/:userId?",render:function(){return Object(p.jsx)(mt,{})}}),Object(p.jsx)(z.b,{path:"/Messages",render:kt(wt)}),Object(p.jsx)(z.b,{path:"/login",render:function(){return Object(p.jsx)(R,{})}}),Object(p.jsx)(z.b,{path:"/Settings",render:xt})]})]}):Object(p.jsx)(Pt.a,{})}}]),n}(c.a.Component),Lt=Object(v.b)((function(t){return{initialized:t.app.initialized}}),{initializApp:function(){return function(t){var e=t(A());Promise.all([e]).then((function(){t({type:_t})}))}}})(At),Tt=function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))},Nt=n(11),Ct=n(129),Et=n(136),Dt=n(132),Mt=Object(Nt.c)({myPostsPage:V,messagesPage:Ct.b,profilePage:pt.a,auth:L,form:Dt.a,app:yt}),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Nt.d,Ft=Object(Nt.e)(Mt,Ut(Object(Nt.a)(Et.a)));window.__store__=Ft;var zt=Ft;a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(v.a,{store:zt,children:Object(p.jsx)(Lt,{})})})}),document.getElementById("root")),Tt()},38:function(t,e,n){"use strict";n.d(e,"h",(function(){return I})),n.d(e,"i",(function(){return P})),n.d(e,"f",(function(){return w})),n.d(e,"b",(function(){return A})),n.d(e,"j",(function(){return L})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return N})),n.d(e,"e",(function(){return C})),n.d(e,"g",(function(){return E}));var r=n(10),c=n.n(r),i=n(19),a=n(40),o=n(3),s=n(15),u="profile/FOLLOW",j="profile/UNFOLLOW",l="profile/SET_USERS",d="profile/SET_CARRENT_PAGE",f="profile/SET_USER_COUNT",b="profile/TOGGLE_IS_LOADING",p="profile/SET_PROFILE_INFO",h="profile/TOGGLE_IS_FOLLOWING",O="profile/SET_STATUS",m="profile/SAVE_PHOTO",x={users:[],pageSize:10,totalUsersCount:0,carrentPage:1,isLoading:!1,profileInfo:null,followingInProcess:[],status:""},v=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(o.a)(Object(o.a)({},t),r):t}))},g=function(t){return{type:u,userId:t}},_=function(t){return{type:j,userId:t}},I=function(t){return{type:d,carrentPage:t}},y=function(t){return{type:b,isLoading:t}},P=function(t,e){return{type:h,isLoading:t,userId:e}},k=function(t){return{type:O,status:t}},w=function(t,e){return function(){var n=Object(i.a)(c.a.mark((function n(r){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),n.next=3,Object(s.c)(t,e);case 3:i=n.sent,r(y(!1)),r((a=i.items,{type:l,users:a})),r((c=i.totalCount,{type:f,count:c}));case 7:case"end":return n.stop()}var c,a}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(){var t=Object(i.a)(c.a.mark((function t(e,n,r,i){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(P(!0,n)),t.next=3,r(n);case 3:0==t.sent.resultCode&&e(i(n)),e(P(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,c){return t.apply(this,arguments)}}(),A=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=s.b.bind(s.b),S(n,t,r,g);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(n,t,s.h.bind(s.h),_);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.j)(t);case 2:r=e.sent,n({type:p,profileInfo:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.g)(t);case 2:r=e.sent,n(k(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.i)(t);case 2:0===e.sent.resultCode&&n(k(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)(t);case 2:0===(r=e.sent).resultCode&&n((c=r.data.photos,{type:m,photos:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(o.a)(Object(o.a)({},t),{},{users:v(t.users,e.userId,"id",{followed:!0})});case j:return Object(o.a)(Object(o.a)({},t),{},{users:v(t.users,e.userId,"id",{followed:!1})});case l:return Object(o.a)(Object(o.a)({},t),{},{users:Object(a.a)(e.users)});case d:return Object(o.a)(Object(o.a)({},t),{},{carrentPage:e.carrentPage});case f:return Object(o.a)(Object(o.a)({},t),{},{totalUsersCount:e.count});case b:return Object(o.a)(Object(o.a)({},t),{},{isLoading:e.isLoading});case p:return Object(o.a)(Object(o.a)({},t),{},{profileInfo:e.profileInfo});case h:return Object(o.a)(Object(o.a)({},t),{},{followingInProcess:e.isLoading?[].concat(Object(a.a)(t.followingInProcess),[e.userId]):t.followingInProcess.filter((function(t){return t!=e.userId}))});case O:return Object(o.a)(Object(o.a)({},t),{},{status:e.status});case m:return Object(o.a)(Object(o.a)({},t),{},{profile:Object(o.a)(Object(o.a)({},t.profile),{},{photos:e.photos})});default:return t}}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var r=function(t){if(!t)return"field is requred"},c=function(t){return function(e){if(e.length>t)return"max length is ".concat(t," symbols")}}},49:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(3),c=n(70),i=(n(1),n(54)),a=n.n(i),o=n(0),s=["input","meta","child"],u=["input","meta","child"],j=["input","meta","child"],l=function(t){t.input;var e=t.meta,n=(t.child,Object(c.a)(t,s)),r=e.touched&&e.error;return Object(o.jsxs)("div",{className:a.a.form+" "+(r?a.a.error:" "),children:[n.children,Object(o.jsx)("div",{children:r&&Object(o.jsx)("span",{children:e.error})})]})},d=function(t){var e=t.input,n=(t.meta,t.child,Object(c.a)(t,u));return Object(o.jsxs)(l,Object(r.a)(Object(r.a)({},t),{},{children:[" ",Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))," "]}))},f=function(t){var e=t.input,n=(t.meta,t.child,Object(c.a)(t,j));return Object(o.jsxs)(l,Object(r.a)(Object(r.a)({},t),{},{children:[" ",Object(o.jsx)("input",Object(r.a)(Object(r.a)({},e),n))," "]}))}},54:function(t,e,n){t.exports={form:"formStyle_form__1PX4e",error:"formStyle_error__2vPOB",loginFormError:"formStyle_loginFormError__1_f_C"}},58:function(t,e,n){t.exports={item:"MyPosts_item__2r3MX"}},67:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(3),c=n(28),i=n(29),a=n(30),o=n(31),s=n(1),u=n.n(s),j=n(8),l=n(12),d=n(0),f=function(t){return{isAuth:t.auth.isAuth}},b=function(t){var e=function(e){Object(a.a)(s,e);var n=Object(o.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(r.a)({},this.props)):Object(d.jsx)(j.a,{to:"/login"})}}]),s}(u.a.Component);return Object(l.b)(f)(e)}},68:function(t,e,n){t.exports={profile:"Profile_profile__14D5D",subscribeWrapper:"Profile_subscribeWrapper__1_Ct0",subscribeImg:"Profile_subscribeImg__-e09O",content:"Profile_content__2Rypp",Selected:"Profile_Selected__kJA-S",listNamberSelected:"Profile_listNamberSelected__NIPAn",status:"Profile_status__1gaEf",paginator:"Profile_paginator__1Xl6S",pageNumber:"Profile_pageNumber__2IUNh",selectedPage:"Profile_selectedPage__J-H3D",userPhoto:"Profile_userPhoto__1zXAx",Contact:"Profile_Contact__3mXd5"}},72:function(t,e,n){"use strict";n(1);var r=n.p+"static/media/isLoading.73cfc5f4.gif",c=n(0);e.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r})})}},78:function(t,e,n){t.exports={appWrapper:"App_appWrapper__3aRJh",nav:"App_nav__bdmEA",content:"App_content__ogXEc"}},97:function(t,e,n){t.exports={item:"Authorization_item__3dXWj",active:"Authorization_active__1bQlJ"}}},[[290,1,2]]]);
//# sourceMappingURL=main.b2568c13.chunk.js.map