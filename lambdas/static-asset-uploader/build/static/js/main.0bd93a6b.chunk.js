(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1006:function(e,t){},1008:function(e,t){},1405:function(e,t,a){},1407:function(e,t,a){"use strict";a.r(t);var n,r,i,o,s=a(39),c=a(40),l=a(43),u=a(41),g=a(44),p=a(0),m=a.n(p),d=a(114),h=a.n(d),f=a(1427),b=a(1434),y=a(1431),E=(a(536),a(1416)),v=a(1433),w=a(1408),I=a(1429),O=a(1425),P=a(1417),A=a(221),j=a.n(A),k=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{vertical:!0,textAlign:"center",style:{color:"whitesmoke",backgroundColor:"slategray",padding:"40px 0px",margin:"0px !important"}},m.a.createElement(w.a,{centered:!0,size:"small",src:j.a}),m.a.createElement(I.a,{as:"h1",style:{color:"whitesmoke"}},"Developer Portal"),m.a.createElement("p",null,"Your gateway to the data."),m.a.createElement(E.a,{to:"/getting-started"},m.a.createElement(O.a,{positive:!0},"Get Started")),m.a.createElement(E.a,{to:"/apis",style:{padding:"0.78571429em 1.5em 0.78571429em",color:"white"}},"Our APIs")),m.a.createElement(v.a,{vertical:!0,style:{padding:"40px 0px",margin:"0 !important"}},m.a.createElement(P.a,{fluid:!0,text:!0,textAlign:"justified"},m.a.createElement(I.a,{size:"medium"},"EXPLORE AND BUILD"),m.a.createElement("p",null,"Read the Getting Started guide to learn how to hit the ground running to get an application up and running in no time."),m.a.createElement("p",null,"See what APIs we have to offer, including extensive documentation, and generated SDKs."),m.a.createElement("p",null,"Sign in to manage your subscriptions, see your current usage, get your API Key, and test against our live API."))))},S=a(129),C=a(115),x=a.n(C),D=a(170),L=a(29),M=a(223),K=a.n(M),T=window.config.region,R=window.config.region,N=window.config.userPoolId,U=window.config.identityPoolId,z=window.config.userPoolClientId;function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accessKeyId,a=e.secretAccessKey,r=e.sessionToken;n=window.apigClientFactory.newClient({accessKey:t,secretKey:a,sessionToken:r,region:T})}function J(){return n?Promise.resolve(n):new Promise(function(e){var t=setInterval(function(){n&&(clearInterval(t),e(n))},100)})}function Y(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Promise.all([B(e),G(e),function(e){var t=W.apiKey?W.apiKey:o;return!e&&t?Promise.resolve(t):J().then(function(e){return e.get("/apikey",{},{},{})}).then(function(e){var t=e.data;return W.apiKey=t.value})}(e)])}function B(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=W.catalog.length?W.catalog:r;return!e&&t?Promise.resolve(t):r=J().then(function(e){return e.get("/catalog",{},{},{})}).then(function(e){var t=e.data,a=void 0===t?[]:t;return W.catalog=a})}function G(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=W.subscriptions.length?W.subscriptions:i;return!e&&t?Promise.resolve(t):i=J().then(function(e){return e.get("/subscriptions",{},{},{})}).then(function(e){var t=e.data;return W.subscriptions=t})}function H(e,t){var a={};Object.keys(e.items).forEach(function(n){a[n]=function(e,t,a){var n=t.split("-"),r=n[0],i=n[1],o=n[2],s=new Date(r,i-1,o);s.setHours(0,0,0,0);var c="used"===a?0:1;e&&!Array.isArray(e[0])&&(e=[e]);return e.map(function(e){var t=s.setDate(s.getDate()),a=[t,e[c]];return s.setDate(s.getDate()+1),a})}(e.items[n],e.startDate,t)});var n={};return Object.keys(a).forEach(function(e,t){a[e].forEach(function(e){var t=e[0],a=e[1];n[t]||(n[t]=0),n[t]+=a})}),Object.keys(n).sort().map(function(e){return[e,n[e]]})}function V(e,t){if(e)return J().then(function(a){return a.put("/marketplace-subscriptions/"+e,{},{token:t})})}x.a.config.region=R;var W=Object(L.k)({api:void 0,apiList:void 0,set catalog(e){return void 0===e&&(e=[]),q.catalog=function(e){return e.map(function(e){return e.apis=e.apis.map(function(t){return t.usagePlan=K.a.cloneDeep(e),delete t.usagePlan.apis,t}),e})}(e),W.apiList=function(e){return e.reduce(function(e,t){return e.concat(t.apis)},[])}(q.catalog),_(),q.catalog},get catalog(){return q.catalog},set subscriptions(e){return void 0===e&&(e=[]),q.subscriptions=e,_(),q.subscriptions},get subscriptions(){return q.subscriptions}},{catalog:L.d,subscriptions:L.d}),q=Object(L.k)({catalog:[],subscriptions:[]});function _(){q.catalog&&q.catalog.forEach(function(e){var t,a=(t=e.id,!!W.subscriptions.find(function(e){return e.id===t}));e.subscribed=a,e.apis.forEach(function(e){return e.subscribed=a})})}var X,Z,Q={UserPoolId:N,ClientId:z};function $(){return X}function ee(){return"cognito-idp.".concat(R,".amazonaws.com/").concat(N)}function te(e,t){var a=new D.a({Username:e,Password:t});return X=new D.b({Username:e,Pool:new D.c(Q)}),new Promise(function(e,t){X.authenticateUser(a,{onSuccess:function(a){x.a.config.credentials=new x.a.CognitoIdentityCredentials({IdentityPoolId:U,Logins:Object(S.a)({},ee(),a.getIdToken().getJwtToken())}),x.a.config.credentials.refresh(function(a){a?console.error(a):(F(x.a.config.credentials),J().then(function(a){return a.post("/signin",{},{},{}).then(e).catch(t)}))})},onFailure:t})})}function ae(){X&&(X.signOut(),X=null,W.subscriptions=[],localStorage.clear())}var ne=function(e){var t=$();return m.a.createElement(P.a,{style:{padding:"40px"}},m.a.createElement(I.a,{as:"h2"},"Getting Started"),m.a.createElement(I.a,{as:"h3"},"Create an account and subscribe to APIs"),m.a.createElement("p",null,"To use any of our APIs you must have a developer account. A developer account gives you an API Key, access to use and test our APIs, and metrics on your usage. ",!t&&"Create or sign in using the buttons in the top right."),m.a.createElement("p",null,"When you first register, your new API Key won't be tied to any of our APIs. To activate it for an API, navigate to ",m.a.createElement(E.a,{to:"/apis"},"APIs"),", then find the API you want to use and click `subscribe`. Your API Key is now subscribed to the API and you can make calls to all methods on the API."),m.a.createElement("p",null,"Figuring out how to use APIs can be hard. Use the \u201cTry it out!\u201d feature to get examples of the request and response shapes of our APIs. The Developer Portal will make an API call to the backend service using your API key and shows a sample ",m.a.createElement("code",null,"curl")," request with all necessary input parameters and the real response."),m.a.createElement("p",null,"If you need your API Key for any reason, you can always find it on ",m.a.createElement(E.a,{to:"/dashboard"},"your dashboard")," after logging in."),m.a.createElement(I.a,{as:"h3"},"Monitor your usage"),m.a.createElement("p",null,"Typically each API has a usage limit set for each API Key. As you scale up your usage of the APIs, you can monitor your usage towards the limits on ",m.a.createElement(E.a,{to:"/dashboard"},"your dashboard"),"."))},re=a(1430),ie=a(1418),oe=a(1422),se=a(1428),ce=a(1419),le=a(1423),ue=a(500),ge=a.n(ue),pe=a(117);function me(e,t){var a,n,r,i;(a=e.id,n=new Date,r=new Date(n.getFullYear(),n.getMonth(),1).toJSON().split("T")[0],i=(new Date).toJSON().split("T")[0],J().then(function(e){return e.get("/subscriptions/"+a+"/usage",{start:r,end:i},{})})).then(function(a){var n=H(a.data,"used"),r=document.getElementById(t);JSON.stringify(K.a.get(e,"usage.data",{}))!==JSON.stringify(n)&&(e.usage={data:n});var i={type:"line",data:{labels:n.map(function(e){return new Date(parseInt(e[0],10)).toLocaleDateString()}),datasets:[{label:"Usage",data:n.map(function(e){return e[1]}),lineTension:0,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:2,pointRadius:4,pointHoverRadius:6}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}};new ge.a(r,i)}).catch(function(t){e.usage={error:t}})}var de=Object(pe.a)(function(){return m.a.createElement(re.a,{container:!0},m.a.createElement(re.a.Row,null,m.a.createElement(re.a.Column,{style:{paddingTop:"40px"}},m.a.createElement(I.a,{size:"medium"},"API Key"),m.a.createElement("code",{style:{background:"black",border:"1px solid gray",padding:"7px 8px",color:"lightgray",borderRadius:"5px"}},W.apiKey))),m.a.createElement(ie.a,null),m.a.createElement(re.a.Row,null,W.catalog.filter(function(e){return e.subscribed}).map(function(e,t){var a=e.apis[0].swagger.info.title,n=e.apis.length-1,r=e.apis.reduce(function(e,t){return e.concat(m.a.createElement(oe.a.Item,{key:t.id},t.swagger.info.title))},[]),i="api-usage-chart-container-".concat(e.id)+t;return me(e,i),m.a.createElement(re.a.Column,{width:16,widescreen:8,key:e.id,style:{marginBottom:"40px"}},m.a.createElement(I.a,{size:"medium"},"Usage for ",n?m.a.createElement(se.a,{trigger:m.a.createElement("a",{style:{cursor:"pointer"}},a," and ",n," more..."),content:m.a.createElement(oe.a,null," ",r," "),on:["hover","click"],position:"right center"}):a),e.usage?e.error?m.a.createElement(le.a,{error:!0,content:e.error.toString()}):null:m.a.createElement(ce.a,{active:!0}),m.a.createElement("canvas",{id:i}))})))}),he=a(502),fe=a.n(he),be=(a(1353),a(131)),ye=a(522),Ee=a(1424),ve=Object(pe.a)(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isActive=function(e,t){var n=a.props.path.params.apiId;return n?e===n:0===t},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.path,Object(ye.a)(t,["path"]));return m.a.createElement(Ee.a,Object.assign({inverted:!0,vertical:!0,attached:!0,style:{margin:0,borderRadius:0}},a),W.apiList?W.apiList&&(W.apiList.length?W.apiList.map(function(t,a){return m.a.createElement(Ee.a.Item,{key:t.id,as:E.a,to:"/apis/".concat(t.id),active:e.isActive(t.id,a)},t.swagger.info.title)}):m.a.createElement("p",{style:{padding:"13px 16px",color:"whitesmoke"}},"No APIs Published")):m.a.createElement(ce.a,{active:!0}))}}]),t}(m.a.Component)),we=function(e){var t=e.specSelectors,a=t.basePath(),n=t.host(),r=t.externalDocs();return m.a.createElement(P.a,{fluid:!0,textAlign:"left",className:"fixfloat",style:{padding:"40px 0px"}},m.a.createElement("div",{style:{display:"flex"}},m.a.createElement("div",{style:{flex:"0 0 auto",marginRight:"20px"}},m.a.createElement(w.a,{size:"small",src:W.api.image})),m.a.createElement("div",null,m.a.createElement(I.a,{as:"h1"},W.api.swagger.info.title),m.a.createElement("div",{style:{display:"flex"}},m.a.createElement("div",{style:{marginRight:"20px"}},m.a.createElement("p",{style:{fontWeight:"bold"}},"Version"),m.a.createElement("p",{style:{fontWeight:"bold"}},"Endpoint")),m.a.createElement("div",null,m.a.createElement("p",null,W.api.swagger.info.version),m.a.createElement("p",null,"https://",n,a))),m.a.createElement("p",null,r),m.a.createElement(Ie,null))))},Ie=Object(pe.a)(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=W.api;return e&&$()?e.subscribed?m.a.createElement(O.a,{onClick:function(){return t=e.usagePlan.id,J().then(function(e){return e.delete("/subscriptions/".concat(t),{},{})}).then(function(){return G(!0)});var t}},"Unsubscribe"):m.a.createElement(O.a,{onClick:function(){return t=e.usagePlan.id,J().then(function(e){return e.put("/subscriptions/"+t,{},{})}).then(function(){return G(!0)});var t}},"Subscribe"):null}}]),t}(m.a.Component)),Oe=function(){return{components:{InfoContainer:we}}},Pe=Object(pe.a)(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateApi=function(){(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return B().then(function(){var a;return W.apiList.length&&(a="ANY"===e||"FIRST"===e?W.apiList[0]:W.apiList.find(function(t){return t.id===e})),t&&(W.api=a),a})})(a.props.match.params.apiId||"ANY",!0).then(function(e){if(e){var t={dom_id:"#swagger-ui-container",plugins:[Oe],supportedSubmitMethods:[],spec:e.swagger,onComplete:function(){return a.preauthorizeApiKey("api_key",W.apiKey)}};$()&&delete t.supportedSubmitMethods;var a=fe()(t)}})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateApi()}},{key:"componentDidUpdate",value:function(){this.updateApi()}},{key:"render",value:function(){var e,t;return W.apiList&&0===W.apiList.length?(e="No APIs Published",t="Your administrator hasn't added any APIs to your account. Please contact them to publish an API."):!W.api&&W.apiList&&W.apiList.length&&(e="No Such API",t="The selected API doesn't exist."),m.a.createElement("div",{style:{display:"flex",flex:"1 1 auto",overflow:"hidden"}},m.a.createElement(ve,{path:this.props.match,style:{flex:"0 0 auto"}}),m.a.createElement("div",{className:"swagger-section",style:{flex:"1 1 auto",overflow:"auto"}},m.a.createElement("div",{className:"swagger-ui-wrap",id:"swagger-ui-container",style:{padding:"0 20px"}},e&&t&&m.a.createElement(m.a.Fragment,null,m.a.createElement(I.a,{as:"h2",icon:!0,textAlign:"center",style:{padding:"40px 0px"}},m.a.createElement(be.a,{name:"warning sign",circular:!0}),m.a.createElement(I.a.Content,null,e)),m.a.createElement(P.a,{text:!0,textAlign:"justified"},m.a.createElement("p",null,t))))))}}]),t}(m.a.Component)),Ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isVisible:!1,message:""},a.handleDismiss=function(){a.setState({isVisible:!1})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(le.a,{hidden:!this.state.isVisible,negative:!0,floating:!0,icon:"warning sign",onDismiss:this.handleDismiss,header:"Error",content:this.state.message})}}]),t}(m.a.Component),je=a(1421),ke=a(1420),Se=a(1426),Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isSubmitting:!1,signedIn:!1,errorMessage:"",isOpen:!1},a.open=function(){return a.setState({isSubmitting:!1,errorMessage:"",isOpen:!0})},a.close=function(){return a.setState({isOpen:!1})},a.handleChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(S.a)({},n,r))},a.handleLogin=function(e){e.preventDefault(),a.setState({isSubmitting:!0}),te(a.state.email,a.state.password).then(function(){a.setState({signedIn:!0,isSubmitting:!1,errorMessage:""});var e=a.props,t=e.usagePlanId,n=e.token;if(t&&n)return V(t,n)}).catch(function(e){return a.setState({errorMessage:e.message,isSubmitting:!1})})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isOpen;return this.state.signedIn?m.a.createElement(Se.a,{to:"/apis"}):m.a.createElement(je.a,{size:"small",open:e,onOpen:this.open,onClose:this.close,trigger:this.props.trigger},m.a.createElement(je.a.Header,null,"Sign in"),m.a.createElement(je.a.Content,null,m.a.createElement(ke.a,{onSubmit:this.handleLogin,error:!!this.state.errorMessage,loading:this.state.isSubmitting},m.a.createElement(ke.a.Input,{label:"Email",name:"email",onChange:this.handleChange}),m.a.createElement(ke.a.Input,{type:"password",label:"Password",name:"password",autoComplete:"false",onChange:this.handleChange}),m.a.createElement(le.a,{error:!0,content:this.state.errorMessage}),m.a.createElement(je.a.Actions,{style:{textAlign:"right"}},m.a.createElement(O.a,{type:"button",onClick:this.close},"Close"),m.a.createElement(O.a,{primary:!0,type:"submit"},"Sign In")))))}}]),t}(m.a.Component),xe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isSubmitting:!1,signedIn:!1,errorMessage:"",isOpen:!1},a.open=function(){return a.setState({isSubmitting:!1,errorMessage:"",isOpen:!0})},a.close=function(){return a.setState({isOpen:!1})},a.handleChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(S.a)({},n,r))},a.handleRegister=function(e){e.preventDefault(),a.setState({isSubmitting:!0}),function(e,t){localStorage.clear();var a=[];return new Promise(function(n,r){Z.signUp(e,t,a,null,function(a,i){a?r(a):n(te(e,t))})})}(a.state.email,a.state.password).then(function(){a.setState({signedIn:!0,isSubmitting:!1,errorMessage:""});var e=a.props,t=e.usagePlanId,n=e.token;if(t&&n)return V(t,n)}).catch(function(e){return a.setState({errorMessage:e.message,isSubmitting:!1})})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isOpen;return this.state.signedIn?m.a.createElement(Se.a,{to:"/apis"}):m.a.createElement(je.a,{size:"small",open:e,onOpen:this.open,onClose:this.close,trigger:this.props.trigger},m.a.createElement(je.a.Header,null,"Register"),m.a.createElement(je.a.Content,null,m.a.createElement(ke.a,{onSubmit:this.handleRegister,error:!!this.state.errorMessage,loading:this.state.isSubmitting},m.a.createElement(ke.a.Input,{label:"Email",name:"email",onChange:this.handleChange}),m.a.createElement(ke.a.Input,{type:"password",label:"Password",name:"password",autoComplete:"false",onChange:this.handleChange}),m.a.createElement(le.a,{error:!0,content:this.state.errorMessage}),m.a.createElement(je.a.Actions,{style:{textAlign:"right"}},m.a.createElement(O.a,{type:"button",onClick:this.close},"Close"),m.a.createElement(O.a,{primary:!0,type:"submit"},"Register")))))}}]),t}(m.a.Component),De=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){ae(),a.forceUpdate()},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return $()?m.a.cloneElement(this.props.trigger,{onClick:this.logout}):m.a.createElement(Se.a,{to:"/"})}}]),t}(m.a.Component),Le=function(){var e=$();return m.a.createElement(Ee.a,{inverted:!0,borderless:!0,attached:!0,style:{flex:"0 0 auto"}},m.a.createElement(Ee.a.Item,{as:E.a,to:"/"},m.a.createElement(w.a,{size:"mini",src:j.a}),"Developer Portal"),m.a.createElement(Ee.a.Item,{as:E.a,to:"/getting-started"},"Getting Started"),m.a.createElement(Ee.a.Item,{as:E.a,to:"/apis"},"APIs"),m.a.createElement(Ee.a.Menu,{position:"right"},e?m.a.createElement(m.a.Fragment,null,m.a.createElement(De,{trigger:m.a.createElement(Ee.a.Item,{as:"a",key:"logout"},"Sign Out")}),m.a.createElement(Ee.a.Item,{as:E.a,to:"/dashboard",key:"dashboard"},"My Dashboard")):m.a.createElement(m.a.Fragment,null,m.a.createElement(Ce,{trigger:m.a.createElement(Ee.a.Item,{as:"a",key:"login"},"Sign In")}),m.a.createElement(xe,{trigger:m.a.createElement(Ee.a.Item,{as:"a",key:"register"},"Register")}))))},Me=(a(1405),function(e){function t(){var e;Object(s.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this)),Z=new D.c(Q),null!==(X=Z.getCurrentUser())?X.getSession(function(e,t){if(e)return ae(),void console.error(e);var a={};a[ee()]=t.getIdToken().getJwtToken(),x.a.config.credentials=new x.a.CognitoIdentityCredentials({IdentityPoolId:U,Logins:a}),x.a.config.credentials.refresh(function(e){e?(ae(),console.error(e)):(F(x.a.config.credentials),Y())})}):F();var a=window.location.hash.substring(2);return window.history.pushState({},"home page",a),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(f.a,null,m.a.createElement(m.a.Fragment,null,m.a.createElement(Le,null),m.a.createElement(Ae,null),m.a.createElement(b.a,null,m.a.createElement(y.a,{exact:!0,path:"/",component:k}),m.a.createElement(y.a,{path:"/getting-started",component:ne}),m.a.createElement(y.a,{path:"/dashboard",component:de}),m.a.createElement(y.a,{exact:!0,path:"/apis",component:Pe}),m.a.createElement(y.a,{path:"/apis/:apiId",component:Pe}),m.a.createElement(y.a,{component:function(){return m.a.createElement("h2",null,"Page not found")}}))))}}]),t}(m.a.Component));h.a.render(m.a.createElement(Me,null),document.getElementById("root"))},221:function(e,t,a){e.exports=a.p+"static/media/logo.b950c5f7.png"},246:function(e,t){},531:function(e,t,a){e.exports=a(1407)}},[[531,2,1]]]);
//# sourceMappingURL=main.0bd93a6b.chunk.js.map