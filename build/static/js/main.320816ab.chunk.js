(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),l=a.n(c),r=(a(104),a(25)),i=a(26),s=a(31),u=a(29),m=a(177),h=a(181),w=a(182),p=a(146),b=a(74),g=a.n(b),d=a(36),E=g.a.parse(document.cookie),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).logout=function(){console.log("logging out"),document.cookie="loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(h.a,{position:"relative"},o.a.createElement(w.a,null,o.a.createElement(p.a,{className:"title",variant:"h6",style:{flexGrow:"1"}},"MoodMaker"),o.a.createElement("ul",{className:"nav-list"},o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{to:"/Dashboard"},"Dashboard "),E.loggedIn?o.a.createElement(d.b,{onClick:function(){document.cookie="loggedIn=",window.location.replace("/")}},"Logout"):o.a.createElement(d.b,{to:"/"},"Login"))))),o.a.createElement(m.a,null,E.loggedIn?o.a.createElement("h4",null,"Welcome, ",E.Username):null))}}]),a}(n.Component),f=(a(109),a(86)),y=a(8),S=a(24),N=a(183),O=a(193),_=a(187),I=a(188),C=a(28),U={SIGNUP_LOADING:"SIGNUP_LOADING",SIGNUP_SUCCESS:"SIGNUP_SUCCESS",SIGNUP_FAILURE:"SIGNUP_FAILURE",SIGNUP_ASYNC:"SIGNUP_ASYNC",LOGIN_LOADING:"LOGIN_LOADING",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGIN_ASYNC:"LOGIN_ASYNC"},L=a(56),j=a.n(L);var x=function(){return{type:U.SIGNUP_SUCCESS}},G=function(e){return{type:U.SIGNUP_FAILURE,err:e}},A=function(){return{type:U.LOGIN_LOADING}},k=function(e){return localStorage.setItem("token",e.data.token),{type:U.LOGIN_SUCCESS,msg:"login success"}},R=function(e){return{type:U.LOGIN_FAILURE,err:e}},F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleTextChange=function(t){var a=Object(S.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.login=function(t){t.preventDefault(),e.props.login(e.state)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.loginLoading&&!this.props.loginLoading&&this.props.msg&&this.props.history.push("/Dashboard")}},{key:"render",value:function(){return console.log("props",this.props),o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{maxWidth:"sm"},o.a.createElement("br",null),o.a.createElement(N.a,{container:!0,spacing:2,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("form",{className:"login-form",onSubmit:this.login},o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.email,name:"email",label:"Email",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"})),o.a.createElement(N.a,{item:!0},o.a.createElement("br",null),o.a.createElement(_.a,{type:"submit",className:"login-button",variant:"contained",fullWidth:!0,color:"default"}," ","Login"))))),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(I.a,null,o.a.createElement("a",{href:"/SignUp"},"Click Here to Sign Up"))))}}]),a}(n.Component),Y=Object(y.g)(Object(C.b)((function(e){return{loginLoading:e.login.loginLoading,msg:e.login.msg}}),(function(e){return{login:function(t){e(function(e){return function(t){t(A()),j.a.post("endpointURL".concat("/login"),{email:e.email,password:e.password}).then((function(e){t(k(e)),t(A())})).catch((function(e){t(R(e)),t(A())}))}}(t))}}}))(F)),B=a(85),D=a(189),M=a(190),T=a(191),H=a(195),P=a(196),W=a(186),z=a(192),Z=a(79),J=a.n(Z);var q=function(e){return o.a.createElement("div",{className:"player"},o.a.createElement(J.a,{className:"react-player",url:e.url}))},V={happy:["https://www.youtube.com/watch?v=FPBmVnsZaN8&ab_channel=Psych2Go","https://www.youtube.com/watch?v=DODLEX4zzLQ&ab_channel=TigerProductions","https://www.youtube.com/watch?v=Ai_8pJf5TSs&ab_channel=America%27sFunniestHomeVideos"],workout:["https://www.youtube.com/watch?v=EykWcFEtFqo&ab_channel=HowardFreemanMotivation","https://www.youtube.com/watch?v=Zy5c2k3W458","https://www.youtube.com/watch?v=nFBdDaK_6Ko&ab_channel=AlphaMotivation","https://www.youtube.com/watch?v=dkKTUIipQpw&ab_channel=BeInspired-WorkoutMotivation","https://www.youtube.com/watch?v=ESYYby1FuPc&ab_channel=MulliganBrothers"],motivated:["https://www.youtube.com/watch?v=PAFcHMidJj8&ab_channel=BurakDe%C4%9FerBi%C3%A7er","https://www.youtube.com/watch?v=TBuIGBCF9jc&ab_channel=MotivationHub"],calm:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"],golf:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"],fishing:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"],running:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"],surfing:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"]},K=Object(D.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},dropDown:{width:300}});function Q(){var e=K(),t=o.a.useState(""),a=Object(B.a)(t,2),n=a[0],c=a[1],l=function(e){c(e.target.value),console.log(e.target.value)};return o.a.createElement(M.a,{className:"card"},o.a.createElement(T.a,{className:"card-color"},o.a.createElement(p.a,{id:"text-color",gutterBottom:!0},o.a.createElement("h1",null,"DESIRED MOOD")),o.a.createElement(W.a,{variant:"filled",className:e.formControl},o.a.createElement(H.a,{id:"text-color"},"Select Mood"),o.a.createElement(z.a,{id:"text-color",className:e.dropDown,value:n,onChange:l},o.a.createElement(P.a,{className:"happy",value:"happy"},"Happy"),o.a.createElement(P.a,{value:"workout"},"Workout"),o.a.createElement(P.a,{value:"motivated"},"Motivated"),o.a.createElement(P.a,{value:"calm"},"Calm"))),o.a.createElement("br",null),o.a.createElement(p.a,{id:"text-color",gutterBottom:!0},o.a.createElement("h1",null,"HOBBIES")),o.a.createElement(W.a,{variant:"filled",className:e.formControl},o.a.createElement(H.a,{id:"text-color"},"Select Hobby"),o.a.createElement(z.a,{id:"text-color",className:e.dropDown,value:n,onChange:l},o.a.createElement(P.a,{className:"happy",value:"golf"},"Golf"),o.a.createElement(P.a,{value:"fishing"},"Fishing"),o.a.createElement(P.a,{value:"running"},"Running"),o.a.createElement(P.a,{value:"surfing"},"Surfing"))),n&&V[n].map((function(e){return o.a.createElement(q,{url:e})}))))}var X=a(80),$=a.n(X),ee=a(81),te=a.n(ee),ae=a(82),ne=a.n(ae),oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={notifications:[],isOnline:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"audioCard"},o.a.createElement(Q,null)),o.a.createElement("ul",{className:"dash-img"},o.a.createElement("li",null,o.a.createElement("img",{src:$.a,alt:""})),o.a.createElement("li",null,o.a.createElement("img",{src:te.a,alt:""})),o.a.createElement("li",null,o.a.createElement("img",{src:ne.a,alt:""}))))}}]),a}(n.Component),ce=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",firstName:"",lastName:""},e.handleTextChange=function(t){var a=Object(S.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.signup=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{maxWidth:"sm"},o.a.createElement("br",null),o.a.createElement(N.a,{container:!0,spacing:2,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("form",{className:"login-form",onSubmit:this.signup},o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.firstName,name:"firstName",label:"First Name",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.lastName,name:"lastName",label:"Last Name",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.email,name:"email",label:"Email",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(O.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"})),o.a.createElement(N.a,{item:!0},o.a.createElement("br",null),o.a.createElement(_.a,{type:"submit",className:"login-button",variant:"contained",fullWidth:!0,color:"default"}," ","Sign Up"))))))}}]),a}(n.Component),le=Object(C.b)(null,(function(e){return{signUp:function(t){e(function(e){return console.log("data:",e),function(t){j.a.post("endpointURL".concat("/signup"),{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password}).then((function(){return t(x())})).catch((function(e){t(G(e))}))}}(t))}}}))(ce),re=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return o.a.createElement(y.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?o.a.createElement(t,e):o.a.createElement(y.a,{to:"/LoginScreen"})}}))},ie=Object(C.b)((function(e){return console.log("state :",e),{loggedIn:e.login}}),null)((function(e){return o.a.createElement("div",null,o.a.createElement(y.d,null,o.a.createElement(y.b,{exact:!0,path:"/",component:Y}),o.a.createElement(re,{path:"/Dashboard",component:oe}),o.a.createElement(y.b,{exact:!0,path:"/SignUp",component:le})))})),se=a(27),ue=a(83),me={login:{msg:"",error:"",loginLoading:!1},user:{username:"",email:"",avatar:"",urls:[]}},he=Object(se.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.login,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action : ",t),t.type){case U.LOGIN_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{msg:t.msg});case U.LOGIN_LOADING:return Object(S.a)(Object(S.a)({},e),{},{loginLoading:!e.loginLoading});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me.user;return e}}),we=a(84),pe=Object(se.createStore)(he,me,Object(we.composeWithDevTools)(Object(se.applyMiddleware)(ue.a)));var be=function(){return o.a.createElement(C.a,{store:pe},o.a.createElement(d.a,null,o.a.createElement(v,null),o.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("Environment: ","production"),l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/Happy.c39c2da0.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/Motivated.bf5bf17f.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/WorkoutPic.966c83fd.webp"},99:function(e,t,a){e.exports=a(145)}},[[99,1,2]]]);
//# sourceMappingURL=main.320816ab.chunk.js.map