(this["webpackJsonpblog-client"]=this["webpackJsonpblog-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a(84)},51:function(e,t,a){},52:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(51),a(52),a(9)),s=a(16),u=a(6),m=a(85),i=a(86),f=a(87),d=a(88),g=a(89),E=a(7),p=a.n(E),b=a(19),h=function(e){return{type:"LOGIN",payload:e}};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("path",{fill:"#ff6f00",d:"M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26 C42,39.761,39.761,42,37,42z"}),j=r.a.createElement("path",{fill:"#fff",d:"M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"}),N=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return r.a.createElement("svg",v({viewBox:"0 0 48 48",width:"36px",height:"36px",ref:t},n),a?r.a.createElement("title",null,a):null,y,j)},x=r.a.forwardRef((function(e,t){return r.a.createElement(N,v({svgRef:t},e))}));a.p;var S=Object(b.b)((function(e){return{isLoggedIn:e.isLoggedIn,user:e.user}}),{logoutAction:function(){return{type:"LOGOUT"}},loginAction:h})((function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],l=a[1],E=Object(o.f)();return Object(n.useEffect)((function(){p.a.get("user")?e.loginAction(JSON.parse(p.a.get("user"))):e.logoutAction()}),[]),r.a.createElement("div",null,r.a.createElement(m.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("div",{className:"row whiteDiv"},r.a.createElement(x,{className:"ml-2 my-auto"}),r.a.createElement("h3",{className:"d-inline my-auto ml-2"},"MERN Blog"))),r.a.createElement(i.a,{onClick:function(){return l(!c)}}),r.a.createElement(f.a,{isOpen:c,navbar:!0},function(){if(e.isLoggedIn)return r.a.createElement(d.a,{className:" ml-auto",navbar:!0},r.a.createElement(g.a,{className:"my-auto text-white mx-2"},r.a.createElement("h5",{className:"d-inline"},"Welcome ","".concat(p.a.get("username")),"!")),r.a.createElement(g.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/blogs/".concat(e.user._id)},r.a.createElement("h5",{className:"d-inline"},"Your Blogs"))),r.a.createElement(g.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/addBlog"},r.a.createElement("h5",{className:"d-inline"},"Add Blog"))),r.a.createElement(g.a,null,r.a.createElement("button",{className:"nav-link button-link",onClick:b},r.a.createElement("h5",{className:"d-inline"},"Logout"))));return r.a.createElement(d.a,{className:" ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/login"},r.a.createElement("h5",{className:"d-inline"},"Login"))),r.a.createElement(g.a,null,r.a.createElement(s.b,{className:"nav-link",to:"/signup"},r.a.createElement("h5",{className:"d-inline"},"Register"))))}())));function b(){p.a.remove("token"),p.a.remove("user"),p.a.remove("username"),e.logoutAction(),E.push("/")}})),w=a(91),k=a(92),C=a(93),z=a(94),B=a(95),_=a(90);function R(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],l=a[1];return""!==e.error?r.a.createElement("div",null,r.a.createElement(_.a,{color:"danger",isOpen:c,toggle:function(){return l(!1)}},e.error)):null}var M=a(21);var Y=Object(b.b)(null,{loginAction:h})((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],i=s[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),g=d[0],E=d[1],b=function(t){t.preventDefault(),M({method:"post",url:"/users/login",data:{username:c,password:m}}).then((function(t){p.a.set("token",t.data.token),p.a.set("user",JSON.stringify(t.data.user)),p.a.set("username",t.data.user.username),e.loginAction(t.data.user),E(""),e.history.push("/")})).catch((function(e){E(e.response.data)}))};return r.a.createElement("div",{className:"container w-50 my-5"},r.a.createElement("h1",{className:"text-center text-info"},"Login"),r.a.createElement(R,{error:g}),r.a.createElement(w.a,{onSubmit:b},r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Username"),r.a.createElement(z.a,{type:"text",onChange:function(e){return l(e.target.value)},value:c,placeholder:"username"})),r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Password"),r.a.createElement(z.a,{type:"password",onChange:function(e){return i(e.target.value)},value:m,placeholder:"don't tell!"})),r.a.createElement(B.a,{color:"success",onClick:b},"Sign-In")))})),P=a(96);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=r.a.createElement("path",{d:"m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0",fill:"#ff6243"}),D=r.a.createElement("path",{d:"m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0",fill:"#ff5023"}),J=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",A({height:"15pt",viewBox:"0 -20 464 464",width:"15pt",ref:t},n),a?r.a.createElement("title",null,a):null,I,D)},T=r.a.forwardRef((function(e,t){return r.a.createElement(J,A({svgRef:t},e))}));a.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var V=r.a.createElement("g",null,r.a.createElement("path",{d:"m6.306 39.363h115.387v82.331h-115.387z",fill:"#dfeef4"}),r.a.createElement("path",{d:"m6.306 15.838h115.387v23.525h-115.387z",fill:"#f45858"}),r.a.createElement("path",{d:"m60.269 6.306h7.462v19.062h-7.462z",fill:"#6d7a84"}),r.a.createElement("path",{d:"m90.052 6.306h7.462v19.062h-7.462z",fill:"#6d7a84"}),r.a.createElement("path",{d:"m30.486 6.306h7.462v19.062h-7.462z",fill:"#6d7a84"}),r.a.createElement("g",{fill:"#3ea2e5"},r.a.createElement("circle",{cx:27.661,cy:57.048,r:6.283}),r.a.createElement("circle",{cx:51.887,cy:57.048,r:6.283}),r.a.createElement("circle",{cx:76.113,cy:57.048,r:6.283}),r.a.createElement("circle",{cx:100.339,cy:57.048,r:6.283}),r.a.createElement("circle",{cx:27.661,cy:80.528,r:6.283}),r.a.createElement("circle",{cx:51.887,cy:80.528,r:6.283}),r.a.createElement("circle",{cx:76.113,cy:80.528,r:6.283}),r.a.createElement("circle",{cx:100.339,cy:80.528,r:6.283}),r.a.createElement("circle",{cx:27.661,cy:104.009,r:6.283}),r.a.createElement("circle",{cx:51.887,cy:104.009,r:6.283}),r.a.createElement("circle",{cx:76.113,cy:104.009,r:6.283}),r.a.createElement("circle",{cx:100.339,cy:104.009,r:6.283}))),F=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",U({height:20,viewBox:"0 0 128 128",width:20,ref:t},n),a?r.a.createElement("title",null,a):null,V)},X=r.a.forwardRef((function(e,t){return r.a.createElement(F,U({svgRef:t},e))})),q=(a.p,a(21)),H=a(27);var W=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){q({method:"get",url:"/blogs"}).then((function(e){c(e.data),i(!0)})).catch((function(e){console.log(e.response)}))}),[]),r.a.createElement("div",{className:"container-fluid"},0===a.length&&m?r.a.createElement("p",{className:"text-center"},"Currently no blogs"):a.length>0?r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"container border border-dark m-4 p-2",key:e._id},r.a.createElement(s.b,{to:"/blog/".concat(e._id)},r.a.createElement("h4",{className:"text-primary text-monospace font-weight-bold pointer"},e.title)),r.a.createElement("div",{className:"container row justify-content-between"},r.a.createElement("p",{style:{fontSize:"0.9rem"}},r.a.createElement(X,null)," -",H(e.date).format("Do MMMM, YYYY")),r.a.createElement("p",{style:{fontSize:"0.9rem"}},r.a.createElement(T,null)," ",e.likes.length)))}))):r.a.createElement("div",{className:"text-center spin"},r.a.createElement(P.a,{color:"primary"})))};function K(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],l=a[1];return""!==e.success?r.a.createElement("div",null,r.a.createElement(_.a,{color:"success",isOpen:c,toggle:function(){return l(!1)}},e.success)):null}var Q=a(21);var Z=Object(b.b)((function(e){return{user:e.user}}))((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],i=s[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),g=d[0],E=d[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],O=h[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center text-info"},"Create New Blog"),r.a.createElement(R,{error:g}),r.a.createElement(K,{success:v}),r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),function(){var e=JSON.parse(p.a.get("user"));Q({method:"post",url:"/blogs",data:{blogTitle:c,blogBody:m,user:e._id},headers:{Authorization:"Bearer "+p.a.get("token")}}).then((function(e){console.log(e.data),E(""),O("Blog Created!")})).catch((function(e){console.log("Errror",e.response),E(e.response.data),O("")}))}()}},r.a.createElement(k.a,{className:"w-50"},r.a.createElement(C.a,null,"Blog Title"),r.a.createElement(z.a,{type:"text",onChange:function(e){return l(e.target.value)}})),r.a.createElement(k.a,null,r.a.createElement(C.a,{for:"exampleText"},"Blog Body"),r.a.createElement(z.a,{type:"textarea",rows:"12",onChange:function(e){return i(e.target.value)}})),r.a.createElement(B.a,{color:"success"},"Submit")))})),$=a(21);function ee(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)(""),f=Object(u.a)(i,2),d=f[0],g=f[1],E=Object(n.useState)(""),p=Object(u.a)(E,2),b=p[0],h=p[1],v=Object(n.useState)(""),O=Object(u.a)(v,2),y=O[0],j=O[1],N=Object(n.useState)(""),x=Object(u.a)(N,2),S=x[0],_=x[1];return r.a.createElement("div",{className:"container w-50 my-5"},r.a.createElement("h1",{className:"text-center text-info"},"Register"),r.a.createElement(R,{error:y}),r.a.createElement(K,{success:S}),r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),$({method:"post",url:"/users",data:{username:a,password:s,name:d,email:b}}).then((function(e){j(""),_(e.data)})).catch((function(e){_(""),j(e.response.data)}))}},r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Name"),r.a.createElement(z.a,{type:"text",placeholder:"name",onChange:function(e){return g(e.target.value)},value:d})),r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Email"),r.a.createElement(z.a,{type:"email",placeholder:"email",onChange:function(e){return h(e.target.value)},value:b})),r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Username"),r.a.createElement(z.a,{type:"text",placeholder:"username",onChange:function(e){return c(e.target.value)},value:a})),r.a.createElement(k.a,null,r.a.createElement(C.a,{className:"mr-sm-2"},"Password"),r.a.createElement(z.a,{type:"password",onChange:function(e){return m(e.target.value)},value:s,placeholder:"don't tell!"})),r.a.createElement(B.a,{color:"success"},"Sign-Up")))}var te=a(101),ae=a(97),ne=a(98),re=a(21),ce=a(27);var le=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),m=s[0],i=s[1],f=Object(n.useState)([]),d=Object(u.a)(f,2),g=d[0],E=d[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),v=h[0],O=h[1],y=function(){return l(!c)},j=function(){re({method:"get",url:"/blogs/".concat(e.match.params.id),headers:{Authorization:"Bearer "+p.a.get("token")}}).then((function(e){E(e.data),O(!0)})).catch((function(e){console.log(e.response)}))};return Object(n.useEffect)((function(){j()}),[]),r.a.createElement("div",{className:"container"},0===g.length&&v?r.a.createElement("p",{className:"text-center"},"You have currently no blogs"):g.length>0?r.a.createElement("div",null,g.map((function(e){return r.a.createElement("div",{className:"container border border-dark m-2 p-2",key:e._id},r.a.createElement("h4",{className:"text-primary text-monospace font-weight-bold"},e.title),r.a.createElement("p",null,e.body),r.a.createElement("div",{className:"container row justify-content-between"},r.a.createElement("p",{className:"badge badge-dark"},ce(e.date).format("Do MMMM, YYYY")),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return t=e._id,i(t),void l(!c);var t}},"Delete")))}))):r.a.createElement("div",{className:"text-center spin"},r.a.createElement(P.a,{color:"primary"})),r.a.createElement(te.a,{isOpen:c,toggle:y},r.a.createElement(ae.a,{toggle:y},"Are You Sure?"),r.a.createElement(ne.a,null,r.a.createElement(B.a,{color:"danger",onClick:function(){l(!c),re({method:"delete",url:"/blogs/delete/".concat(m),headers:{Authorization:"Bearer "+p.a.get("token")}}).then((function(e){j()})).catch((function(e){console.log("Errror",e.response)}))}},"Yes"),r.a.createElement(B.a,{color:"secondary",onClick:y},"Cancel"))))};function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ue=r.a.createElement("path",{d:"m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0",fill:"#ff6243"}),me=r.a.createElement("path",{d:"m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0",fill:"#ff5023"}),ie=function(e){var t=e.svgRef,a=e.title,n=se(e,["svgRef","title"]);return r.a.createElement("svg",oe({height:"20pt",viewBox:"0 -20 464 464",width:"20pt",ref:t},n),a?r.a.createElement("title",null,a):null,ue,me)},fe=r.a.forwardRef((function(e,t){return r.a.createElement(ie,oe({svgRef:t},e))}));a.p;function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ee=r.a.createElement("path",{d:"m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"}),pe=function(e){var t=e.svgRef,a=e.title,n=ge(e,["svgRef","title"]);return r.a.createElement("svg",de({height:"20pt",viewBox:"0 -20 480 480",width:"20pt",ref:t},n),a?r.a.createElement("title",null,a):null,Ee)},be=r.a.forwardRef((function(e,t){return r.a.createElement(pe,de({svgRef:t},e))})),he=(a.p,a(99)),ve=a(100),Oe=a(27),ye=a(21);var je=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],i=s[1],f=Object(n.useState)([]),d=Object(u.a)(f,2),g=d[0],E=d[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],O=h[1],y=function(e){return O(e.target.value)},j=function(e){e.preventDefault(),ye({method:"post",url:"/blog/addComment/".concat(c._id),headers:{Authorization:"Bearer "+p.a.get("token")},data:{comment:v,user_name:JSON.parse(p.a.get("user")).username}}).then((function(e){i(e.data)})).catch((function(e){console.log(e.response.data)}))};Object(n.useEffect)((function(){ye({method:"get",url:"/blog/".concat(e.match.params.blog_id),headers:{Authorization:"Bearer "+p.a.get("token")}}).then((function(e){l(e.data),i(e.data.comments),E(e.data.likes)})).catch((function(e){console.log(e.response)}))}),[]);var N=function(){p.a.get("user")&&ye({method:"put",url:"/blog/like/".concat(c._id),headers:{Authorization:"Bearer "+p.a.get("token")},data:{user_id:JSON.parse(p.a.get("user"))._id}}).then((function(e){console.log(e.data),E(e.data)})).catch((function(e){console.log(e)}))},x=function(){p.a.get("user")&&ye({method:"put",url:"/blog/disLike/".concat(c._id),headers:{Authorization:"Bearer "+p.a.get("token")},data:{user_id:JSON.parse(p.a.get("user"))._id}}).then((function(e){console.log(e.data),E(e.data),S()})).catch((function(e){console.log(e)}))},S=function(){var e,t=null;return t=p.a.get("user")&&(e=JSON.parse(p.a.get("user"))._id,g.find((function(t){return t.user===e})))?r.a.createElement(fe,{className:"mr-2 pointer",onClick:x}):r.a.createElement(be,{className:"mr-2 pointer",onClick:N}),r.a.createElement("div",{className:" container my-2 row"},t,g.length)};return r.a.createElement("div",{className:"container-fluid p-3"},r.a.createElement("h3",{className:"text-center text-primary "},c.title),r.a.createElement("p",{className:"text-secondary",style:{fontSize:"0.9rem"}},"By"," ",c.user?r.a.createElement("strong",null,c.user.username):"",",",Oe(c.date).format(" Do MMMM, YYYY")," "),r.a.createElement("hr",null),r.a.createElement("p",{style:{fontSize:"1.1rem"}},c.body),p.a.get("user")?null:r.a.createElement("p",{className:"font-italic font-weight-bold mt-2"},"Login To Comment and Like!"),S(),function(){var e=m.map((function(e){return r.a.createElement(he.a,{className:"bg-light",key:e._id},e.comment,r.a.createElement("p",{style:{fontSize:"0.8rem"}},"By ",e.user,","," ",Oe(e.date).format(" Do MMMM, YYYY")," "))}));return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"text-info"},"Comments.."),r.a.createElement(ve.a,null,e)):r.a.createElement("p",null," No comments yet")}(),function(){if(p.a.get("user"))return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j},r.a.createElement(k.a,{className:"mb-2 mt-5 mr-sm-2 mb-sm-0"},r.a.createElement(C.a,{for:"exampleEmail",className:"mr-sm-2"},"Add Comment:"),r.a.createElement(z.a,{type:"textarea",onChange:y,name:"text",id:"exampleText",value:v,required:!0})),r.a.createElement(B.a,{type:"submit",color:"success",className:"btn-sm mt-1"},"Submit")))}())},Ne=(a(83),function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:W}),r.a.createElement(o.a,{path:"/signup",exact:!0,component:ee}),r.a.createElement(o.a,{path:"/login",exact:!0,component:Y}),r.a.createElement(o.a,{path:"/addBlog",exact:!0,component:Z}),r.a.createElement(o.a,{path:"/blogs/:id",exact:!0,component:le}),r.a.createElement(o.a,{path:"/blog/:blog_id",exact:!0,component:je}))});function xe(){return r.a.createElement(s.a,null,r.a.createElement(S,null),r.a.createElement(Ne,null))}var Se=a(22),we=a(24),ke={isLoggedIn:!1,user:null};var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":var a=t.payload;return Object(we.a)(Object(we.a)({},e),{},{isLoggedIn:!0,user:a});case"LOGOUT":return Object(we.a)(Object(we.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.c,Be=Object(Se.d)(Ce,ze(Object(Se.a)()));l.a.render(r.a.createElement(b.a,{store:Be},r.a.createElement(xe,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.713a78de.chunk.js.map