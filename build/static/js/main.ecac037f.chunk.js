(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),l=a.n(c),r=(a(104),a(25)),i=a(26),u=a(32),s=a(30),m=a(177),h=a(181),w=a(182),p=a(146),b=a(74),g=a.n(b),d=a(27),v=g.a.parse(document.cookie),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).logout=function(){console.log("logging out"),document.cookie="loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(h.a,{position:"relative"},o.a.createElement(w.a,null,o.a.createElement(p.a,{className:"title",variant:"h6",style:{flexGrow:"1"}},"MoodMaker"),o.a.createElement("ul",{className:"nav-list"},o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{to:"/Dashboard"},"Dashboard "),v.loggedIn?o.a.createElement(d.b,{onClick:function(){document.cookie="loggedIn=",window.location.replace("/")}},"Logout"):o.a.createElement(d.b,{to:"/"},"Login"))))),o.a.createElement(m.a,null,v.loggedIn?o.a.createElement("h4",null,"Welcome, ",v.Username):null))}}]),a}(n.Component),f=(a(109),a(86)),y=a(8),_=a(17),N=a(183),S=a(193),O=a(187),I=a(188),C=a(29),G={SIGNUP_LOADING:"SIGNUP_LOADING",SIGNUP_SUCCESS:"SIGNUP_SUCCESS",SIGNUP_FAILURE:"SIGNUP_FAILURE",SIGNUP_ASYNC:"SIGNUP_ASYNC",LOGIN_LOADING:"LOGIN_LOADING",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGIN_ASYNC:"LOGIN_ASYNC"},k=a(56),L=a.n(k),U=function(){return{type:G.SIGNUP_LOADING}},j=function(){return{type:G.SIGNUP_SUCCESS,msg:"signup success"}},x=function(e){return{type:G.SIGNUP_FAILURE,err:e}},M=function(){return{type:G.LOGIN_LOADING}},D=function(e){return localStorage.setItem("token",e.data.token),{type:G.LOGIN_SUCCESS,msg:"login success"}},F=function(e){return{type:G.LOGIN_FAILURE,err:e}},A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleTextChange=function(t){var a=Object(_.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.login=function(t){t.preventDefault(),e.props.login(e.state)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.loginLoading&&!this.props.loginLoading&&this.props.msg&&this.props.history.push("/Dashboard")}},{key:"render",value:function(){return console.log("props",this.props),o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{maxWidth:"sm"},o.a.createElement("br",null),o.a.createElement(N.a,{container:!0,spacing:2,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("form",{className:"login-form",onSubmit:this.login},o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.email,name:"email",label:"Email",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"})),o.a.createElement(N.a,{item:!0},o.a.createElement("br",null),o.a.createElement(O.a,{type:"submit",className:"login-button",variant:"contained",fullWidth:!0,color:"default"}," ","Login"))))),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(I.a,null,o.a.createElement("a",{href:"/SignUp"},"Click Here to Sign Up"))))}}]),a}(n.Component),T=Object(y.g)(Object(C.b)((function(e){return{loginLoading:e.login.loginLoading,msg:e.login.msg}}),(function(e){return{login:function(t){e(function(e){return function(t){t(M()),L.a.post("https://moodmaker-aca.herokuapp.com/auth/login",{email:e.email,password:e.password}).then((function(e){t(D(e)),t(M())})).catch((function(e){t(F(e)),t(M())}))}}(t))}}}))(A)),B=a(85),P=a(189),H=a(190),W=a(191),Y=a(195),R=a(196),z=a(186),q=a(192),J=a(79),Z=a.n(J);var K=function(e){return o.a.createElement("div",{className:"player"},o.a.createElement(Z.a,{className:"react-player",url:e.url}))},V={happy:["https://www.youtube.com/watch?v=FPBmVnsZaN8&ab_channel=Psych2Go","https://www.youtube.com/watch?v=DODLEX4zzLQ&ab_channel=TigerProductions","https://www.youtube.com/watch?v=Ai_8pJf5TSs&ab_channel=America%27sFunniestHomeVideos"],inspirational:["https://www.youtube.com/watch?v=mgmVOuLgFB0&ab_channel=MateuszM","https://www.youtube.com/watch?v=YAzTIOy0ID0&ab_channel=MotivationHub","https://www.youtube.com/watch?v=bq8eOm0zEIs&ab_channel=Daretodo.Motivation","https://www.youtube.com/watch?v=26U_seo0a1g&ab_channel=MateuszM"],motivated:["https://www.youtube.com/watch?v=PAFcHMidJj8&ab_channel=BurakDe%C4%9FerBi%C3%A7er","https://www.youtube.com/watch?v=TBuIGBCF9jc&ab_channel=MotivationHub","https://www.youtube.com/watch?v=wnHW6o8WMas&ab_channel=BenLionelScott"],calm:["https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic","https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation","https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss","https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"],workout:["https://www.youtube.com/watch?v=EykWcFEtFqo&ab_channel=HowardFreemanMotivation","https://www.youtube.com/watch?v=Zy5c2k3W458","https://www.youtube.com/watch?v=wnHW6o8WMas&ab_channel=BenLionelScott","https://www.youtube.com/watch?v=nFBdDaK_6Ko&ab_channel=AlphaMotivation","https://www.youtube.com/watch?v=dkKTUIipQpw&ab_channel=BeInspired-WorkoutMotivation","https://www.youtube.com/watch?v=ESYYby1FuPc&ab_channel=MulliganBrothers"],fishing:["https://www.youtube.com/watch?v=-P0OVbWvw7I&ab_channel=TakeMeFishing","https://www.youtube.com/watch?v=Mec3YcEi7dU&ab_channel=BlacktipH","https://www.youtube.com/watch?v=5k3RDm6SlgQ&ab_channel=TroutHuntingNZ","https://www.youtube.com/watch?v=KNsYDC-wFB4&ab_channel=RomoKayakFishing"],running:["https://www.youtube.com/watch?v=TVUXbF40lEQ&ab_channel=NickBare","https://www.youtube.com/watch?v=gF0rrpMH-Jo&ab_channel=HowardFreemanMotivation","https://www.youtube.com/watch?v=bvLvExUxlNE&ab_channel=NaturalSolution"],golf:["https://www.youtube.com/watch?v=HFCHz-0Hne8&ab_channel=MatthewMontgomeryGolf","https://www.youtube.com/watch?v=jFfkwKvSjzc&ab_channel=RandomGolfClubFilms","https://www.youtube.com/watch?v=YKMnOfDlFeE&ab_channel=GodofGolf","https://www.youtube.com/watch?v=n1PhCPqMK40&ab_channel=GolfFocus"],surfing:["https://www.youtube.com/watch?v=k_Vd9SYg4wI&ab_channel=BarefootSurf","https://www.youtube.com/watch?v=ecHp___bEdo&ab_channel=Inspired","https://www.youtube.com/watch?v=rj7xMBxd5iY&ab_channel=AbsolutelyFlawless","https://www.youtube.com/watch?v=DFko4-NMa2k&ab_channel=CharlieHook"],guitar:["https://www.youtube.com/watch?v=I-mcHk1Uu2k&ab_channel=GuitarGoddess","https://www.youtube.com/watch?v=X1qEFYiHufc&ab_channel=The-Art-of-Guitar","https://www.youtube.com/watch?v=a5Zwuodtemg&ab_channel=BenHigginsOfficial","https://www.youtube.com/watch?v=iareHkSf6WU&ab_channel=GoodGuitarist"],bass:["https://www.youtube.com/watch?v=dh07nFxnT-U&ab_channel=BassBuzz","https://www.youtube.com/watch?v=SR60xY3o8rs&ab_channel=OnlineBassGuitar","https://www.youtube.com/watch?v=4z-zuGsR5h4&ab_channel=JoeHubbardBass","https://www.youtube.com/watch?v=ONw0q2ZhEXg&ab_channel=ParanormalGuitarChannel"],piano:["https://www.youtube.com/watch?v=GaBkAvUme6Y&ab_channel=Pianote","https://www.youtube.com/watch?v=ppYnYCAghTw&ab_channel=Pianote","https://www.youtube.com/watch?v=T-cbdnP0Hyc&ab_channel=TEDxTalks","https://www.youtube.com/watch?v=S6DATlc2ayo&ab_channel=pianoTV"],drums:["https://www.youtube.com/watch?v=cFfsEdZyZEQ&ab_channel=StephenClark","https://www.youtube.com/watch?v=C_-oy9BDl1o&ab_channel=Drumeo","https://www.youtube.com/watch?v=Wy1xMgvlw9M&ab_channel=BenMinal","https://www.youtube.com/watch?v=1udHrr-bbTs&ab_channel=Drumeo"]},Q=Object(P.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},dropDown:{width:300}});function X(){var e=Q(),t=o.a.useState(""),a=Object(B.a)(t,2),n=a[0],c=a[1],l=function(e){c(e.target.value),console.log(e.target.value)};return o.a.createElement(H.a,{className:"card"},o.a.createElement(W.a,{className:"card-color"},o.a.createElement(p.a,{id:"text-color",gutterBottom:!0},o.a.createElement("h1",null,"DESIRED MOOD")),o.a.createElement(z.a,{variant:"filled",className:e.formControl},o.a.createElement(Y.a,{id:"text-color"},"Select Mood"),o.a.createElement(q.a,{id:"text-color",className:e.dropDown,value:n,onChange:l},o.a.createElement(R.a,{className:"happy",value:"happy"},"Happy"),o.a.createElement(R.a,{value:"inspirational"},"Inspirational"),o.a.createElement(R.a,{value:"motivated"},"Motivated"),o.a.createElement(R.a,{value:"calm"},"Calm"))),o.a.createElement("br",null),o.a.createElement(p.a,{id:"text-color",gutterBottom:!0},o.a.createElement("h1",null,"SPORTS")),o.a.createElement(z.a,{variant:"filled",className:e.formControl},o.a.createElement(Y.a,{id:"text-color"},"Select Sport"),o.a.createElement(q.a,{id:"text-color",className:e.dropDown,value:n,onChange:l},o.a.createElement(R.a,{className:"happy",value:"workout"},"Workout"),o.a.createElement(R.a,{value:"fishing"},"Fishing"),o.a.createElement(R.a,{value:"running"},"Running"),o.a.createElement(R.a,{value:"golf"},"Golf"))),o.a.createElement("br",null),o.a.createElement(p.a,{id:"text-color",gutterBottom:!0},o.a.createElement("h1",null,"INSTRUMENTS")),o.a.createElement(z.a,{variant:"filled",className:e.formControl},o.a.createElement(Y.a,{id:"text-color"},"Select Instrument"),o.a.createElement(q.a,{id:"text-color",className:e.dropDown,value:n,onChange:l},o.a.createElement(R.a,{className:"happy",value:"guitar"},"Guitar"),o.a.createElement(R.a,{value:"bass"},"Bass"),o.a.createElement(R.a,{value:"piano"},"Piano"),o.a.createElement(R.a,{value:"drums"},"Drums"))),n&&V[n].map((function(e){return o.a.createElement(K,{url:e})}))))}var $=a(80),ee=a.n($),te=a(81),ae=a.n(te),ne=a(82),oe=a.n(ne),ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={notifications:[],isOnline:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"Welcome to MoodMaker! ",o.a.createElement("br",null)," ",o.a.createElement("br",null),"Here at MoodMaker we supply all the motivation you need to start a new hobby, get back in the gym, learn a new instrument, or change your current mood. Simply select from the dropdown options and our curated videos will do the rest. Enjoy!"),o.a.createElement("div",{className:"audioCard"},o.a.createElement(X,null)),o.a.createElement("ul",{className:"dash-img"},o.a.createElement("li",null,o.a.createElement("img",{src:ee.a,alt:""})),o.a.createElement("li",null,o.a.createElement("img",{src:ae.a,alt:""})),o.a.createElement("li",null,o.a.createElement("img",{src:oe.a,alt:""}))))}}]),a}(n.Component),le=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",firstName:"",lastName:""},e.handleTextChange=function(t){var a=Object(_.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.signup=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.signupLoading&&!this.props.signupLoading&&this.props.msg&&this.props.history.push("/")}},{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{maxWidth:"sm"},o.a.createElement("br",null),o.a.createElement(N.a,{container:!0,spacing:2,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("form",{className:"login-form",onSubmit:this.signup},o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.firstName,name:"firstName",label:"First Name",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.lastName,name:"lastName",label:"Last Name",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.email,name:"email",label:"Email",type:"text"})),o.a.createElement(N.a,{item:!0},o.a.createElement(S.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"})),o.a.createElement(N.a,{item:!0},o.a.createElement("br",null),o.a.createElement(O.a,{type:"submit",className:"login-button",variant:"contained",fullWidth:!0,color:"default"}," ","Sign Up"))))))}}]),a}(n.Component),re=Object(y.g)(Object(C.b)((function(e){return{signupLoading:e.signup.signupLoading,msg:e.signup.msg}}),(function(e){return{signUp:function(t){e(function(e){return function(t){t(U()),L.a.post("https://moodmaker-aca.herokuapp.com/auth/signup",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password}).then((function(e){t(j(e)),t(U())})).catch((function(e){t(x(e)),t(U())}))}}(t))}}}))(le)),ie=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return o.a.createElement(y.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?o.a.createElement(t,e):o.a.createElement(y.a,{to:"/LoginScreen"})}}))},ue=Object(C.b)((function(e){return console.log("state :",e),{loggedIn:e.login}}),null)((function(e){return o.a.createElement("div",null,o.a.createElement(y.d,null,o.a.createElement(y.b,{exact:!0,path:"/",component:T}),o.a.createElement(ie,{path:"/Dashboard",component:ce}),o.a.createElement(y.b,{exact:!0,path:"/SignUp",component:re})))})),se=a(28),me=a(83),he={login:{msg:"",error:"",loginLoading:!1},signup:{msg:"",error:"",signupLoading:!1},user:{username:"",email:"",avatar:"",urls:[]}},we=Object(se.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.login,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action : ",t),t.type){case G.LOGIN_SUCCESS:return Object(_.a)(Object(_.a)({},e),{},{msg:t.msg});case G.LOGIN_LOADING:return Object(_.a)(Object(_.a)({},e),{},{loginLoading:!e.loginLoading});default:return e}},signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.signup,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.SIGNUP_SUCCESS:return Object(_.a)(Object(_.a)({},e),{},{msg:t.msg});case G.SIGNUP_LOADING:return Object(_.a)(Object(_.a)({},e),{},{signupLoading:!e.signupLoading});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.user;return e}}),pe=a(84),be=Object(se.createStore)(we,he,Object(pe.composeWithDevTools)(Object(se.applyMiddleware)(me.a)));var ge=function(){return o.a.createElement(C.a,{store:be},o.a.createElement(d.a,null,o.a.createElement(E,null),o.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/Happy.c39c2da0.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/Motivated.bf5bf17f.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/WorkoutPic.966c83fd.webp"},99:function(e,t,a){e.exports=a(145)}},[[99,1,2]]]);
//# sourceMappingURL=main.ecac037f.chunk.js.map