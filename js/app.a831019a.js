(function(e){function t(t){for(var c,o,l=t[0],s=t[1],r=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(c=!1)}c&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},o={app:0},a={app:0},i=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0baf5724"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"0a685f02"}[e]+".css",a=s.p+c,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var r=i[l],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===c||u===a))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){r=b[l],u=r.getAttribute("data-href");if(u===c||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var i=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=i);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var b=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",b.name="ChunkLoadError",b.type=c,b.request=o,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/",s.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var b=0;b<r.length;b++)t(r[b]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0148":function(e,t,n){"use strict";n("626b")},"0372":function(e,t,n){e.exports=n.p+"img/e-mail_blue.f3de4273.svg"},"11c8":function(e,t,n){"use strict";n("269f")},1868:function(e,t,n){"use strict";n("f177")},"23f7":function(e,t,n){e.exports=n.p+"img/e-mail_orange.a574c6ca.svg"},"269f":function(e,t,n){},"2bcf":function(e,t,n){e.exports=n.p+"img/github_blue.d19d4cdf.svg"},"30f5":function(e,t,n){e.exports=n.p+"img/github_orange.d779bfe9.svg"},"3ae6":function(e,t,n){"use strict";n("dbbf")},"4ec3":function(e,t,n){"use strict";n("ee0d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"app"};function a(e,t){var n=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])(n)])}n("11c8");const i={};i.render=a;var l=i,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),r=n("7d0c"),u=n.n(r),b=n("6e87"),d=n.n(b),g=n("a271"),p=n.n(g),m=n("e08b"),f=n.n(m),h=n("5852"),v=n.n(h),j={class:"home"},O={class:"header"},_={href:"/"},y=Object(c["g"])("img",{src:d.a,alt:"",class:"background-logo"},null,-1),k=Object(c["g"])("h1",{class:"h1"},"Iliass Kouhhiz",-1),x=Object(c["g"])("p",{class:"p1"},[Object(c["f"])(" an architect turned into a "),Object(c["g"])("strong",null,"web developer"),Object(c["f"])(". I love to reinvent myself and face new challenges. I'm fascinated by everything related to web design, from the "),Object(c["g"])("strong",null,"research"),Object(c["f"])(" and "),Object(c["g"])("strong",null,"design"),Object(c["f"])(" part, to the "),Object(c["g"])("strong",null,"development"),Object(c["f"])(" aspect. I love to see my ideas come to life and become realities that can "),Object(c["g"])("strong",null,"help others"),Object(c["f"])(". ")],-1),w=Object(c["g"])("div",{class:"arrow-cont"},[Object(c["g"])("img",{src:p.a,alt:"arrow",class:"arrow"})],-1),C=Object(c["g"])("section",{class:"circle"},[Object(c["g"])("h2",{class:"h2"},"Skills")],-1),E=Object(c["g"])("div",{class:"skills-cont"},[Object(c["g"])("ul",{class:"skills"},[Object(c["g"])("p",null,"Html5"),Object(c["g"])("p",null,"Css"),Object(c["g"])("p",null,"Sass"),Object(c["g"])("p",null,"Javascript"),Object(c["g"])("p",null,"VueJs"),Object(c["g"])("p",null,"Adobe Xd"),Object(c["g"])("p",null,"Photoshop"),Object(c["g"])("p",null,"Illustrator"),Object(c["g"])("p",null,"After Effects"),Object(c["g"])("p",null,"InDesign"),Object(c["g"])("p",null,"Google Analytics")])],-1),S=Object(c["g"])("section",{class:"circle",id:"projects"},[Object(c["g"])("h2",{class:"h2"},"Projects")],-1),I=Object(c["g"])("div",{class:"weather"},[Object(c["g"])("h3",{class:"h3"},"Weather Now"),Object(c["g"])("div",{class:"img-cont"},[Object(c["g"])("img",{src:f.a,alt:"weather logo"})]),Object(c["g"])("p",{class:"description"}," A simple weather forecast web application, developed using vue.js "),Object(c["g"])("div",{class:"link-cont"},[Object(c["g"])("p",null,"Design & Development"),Object(c["g"])("a",{href:"https://iliasskouhhiz.github.io/weather-now/#/",class:"link",target:"blank"},"Visit the website >")])],-1),L=Object(c["g"])("div",{class:"portfolio"},[Object(c["g"])("h3",{class:"h3"},"Portfolio"),Object(c["g"])("div",{class:"img-cont"},[Object(c["g"])("img",{src:v.a,alt:"portfolio logo"})]),Object(c["g"])("p",{class:"description"},"Personal website, developed using vue.js"),Object(c["g"])("div",{class:"link-cont"},[Object(c["g"])("p",null,"Design & Development")])],-1),A=Object(c["g"])("section",{class:"coming-soon"},[Object(c["g"])("div",{class:"circle"},[Object(c["g"])("h2",{class:"h2"},"Coming soon")]),Object(c["g"])("h3",{class:"h3"},"Air pollution"),Object(c["g"])("p",null," A React application that shows info about cities air quality and pollution. "),Object(c["g"])("h3",{class:"h3"},"E-commerce website"),Object(c["g"])("p",null,"An e-commerce website using Angular, with a database.")],-1),q=Object(c["g"])("div",{class:"circle-s"},null,-1),P=Object(c["g"])("div",{class:"circle-xs"},null,-1),T=Object(c["g"])("section",{class:"f-msg"},[Object(c["g"])("h2",{class:"h2"}," I'm always interested in new challenges. Let's create something amazing together! ")],-1);function B(e,t,n,o,a,i){var l=Object(c["w"])("backgroundParticles"),s=Object(c["w"])("nav-bar"),r=Object(c["w"])("links-bar"),b=Object(c["w"])("footer-item");return Object(c["p"])(),Object(c["d"])("div",j,[Object(c["g"])(l,{backColor:"orange"}),Object(c["g"])("header",O,[Object(c["g"])("a",_,[Object(c["g"])("img",{src:u.a,alt:"Logo",class:"logo",onClick:t[1]||(t[1]=function(e){return i.home()})})]),Object(c["g"])(s,{"nav-color":"orange",pageId:a.id},null,8,["pageId"])]),y,k,x,Object(c["g"])(r,{"links-color":"orange"}),w,C,E,S,I,L,A,q,P,T,Object(c["g"])(b,{"links-color":"blue","back-color":"orange"})])}var N=n("d000"),z=(n("b0c0"),Object(c["B"])("data-v-fc06b1b8"));Object(c["s"])("data-v-fc06b1b8");var D={class:"linksBar"},H=Object(c["g"])("div",{class:"cont_hidden"},null,-1);Object(c["q"])();var J=z((function(e,t,n,o,a,i){return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",D,[Object(c["g"])("section",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.socials,(function(e){return Object(c["p"])(),Object(c["d"])("a",{href:e.url,target:"_blank",key:e.index,id:e.name},["orange"===n.linksColor?(Object(c["p"])(),Object(c["d"])("img",{key:0,src:e.img_orange,alt:e.name,class:"img"},null,8,["src","alt"])):Object(c["e"])("",!0),"blue"===n.linksColor?(Object(c["p"])(),Object(c["d"])("img",{key:1,src:e.img_blue,alt:e.name,class:"img"},null,8,["src","alt"])):Object(c["e"])("",!0)],8,["href","id"])})),128))])]),H],64)})),G=(n("ac1f"),n("5319"),{name:"LinksBar",data:function(){return{socials:[{img_orange:n("23f7"),img_blue:n("0372"),name:"e-mail",id:"e-mail"},{img_orange:n("b710"),img_blue:n("b367"),name:"linkedin",url:"https://it.linkedin.com/in/iliass-kouhhiz"},{img_orange:n("30f5"),img_blue:n("2bcf"),name:"github",url:"https://github.com/IliassKouhhiz"},{img_orange:n("b603"),img_blue:n("9493"),name:"behance",url:"https://www.behance.net/iliasskouhdd8b/moodboards"}],email:"iliass.kouhhiz@gmail.com"}},props:["linksColor"],methods:{notification:function(){var e=document.querySelector(".cont_hidden"),t=document.createElement("p");t.textContent="Email address copied to clipboard",e.appendChild(t),console.log("notification"),e.classList.replace("cont_hidden","cont_visible"),t.style.cssText='\n        text-align: center;\n        font: 20px "Gilroy light";\n        color: #0e3b50;\n      ',setTimeout((function(){e.removeChild(t),e.classList.replace("cont_visible","cont_hidden")}),3e3)},copyEmail:function(){var e=this,t=document.querySelector("#e-mail");t.style.cursor="pointer",t.addEventListener("click",(function(){var t=document.body.appendChild(document.createElement("input"));t.style.cssText="\n          width: 0px;\n          height: 0px;\n          position: absolute;\n          top: 0px;\n          left: 0px;\n        ",t.value=e.email,t.focus(),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t),e.notification(),e.openNotification(null,null,"<i class='bx bxs-time'></i>")}))}},mounted:function(){this.copyEmail()}});n("3ae6");G.render=J,G.__scopeId="data-v-fc06b1b8";var K=G,M=n("9644"),V=n("9513"),F={name:"Home",components:{NavBar:N["a"],LinksBar:K,FooterItem:M["a"],BackgroundParticles:V["a"]},data:function(){return{id:"homepage"}},methods:{home:function(){this.$router.push({path:"/"})}}};n("89a4");F.render=B;var R=F,X=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],U=Object(s["a"])({history:Object(s["b"])(),routes:X}),W=U;Object(c["c"])(l).use(W).mount("#app")},5852:function(e,t,n){e.exports=n.p+"img/logo_blue_S.ff863627.svg"},"626b":function(e,t,n){},"666e":function(e,t,n){},"6e87":function(e,t,n){e.exports=n.p+"img/logo_yellow_S.fd37f6b5.svg"},"7d0c":function(e,t,n){e.exports=n.p+"img/logo_orange_S.dd874fac.svg"},"89a4":function(e,t,n){"use strict";n("666e")},9493:function(e,t,n){e.exports=n.p+"img/behance_blue.d16e803d.svg"},9513:function(e,t,n){"use strict";var c=n("7a23"),o={id:"backgroundParticles"},a=Object(c["g"])("div",{id:"particles-js"},null,-1);function i(e,t,n,i,l,s){return Object(c["p"])(),Object(c["d"])("div",o,[a])}n("572f");var l={name:"backgroundParticles",props:["backColor"],computed:{color:{get:function(){return"orange"===this.backColor?"#f27649":"#f2b950"}}},mounted:function(){console.log("mounted"),particlesJS("backgroundParticles",{particles:{number:{value:12,density:{enable:!1,value_area:800}},color:{value:this.color},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1.5,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}};n("1868");l.render=i;t["a"]=l},9644:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),o=Object(c["B"])("data-v-9ae987ea");Object(c["s"])("data-v-9ae987ea");var a={class:"footerItem"},i=Object(c["g"])("h3",{class:"h3"},"LET'S HAVE A CHAT",-1),l=Object(c["g"])("div",{class:"cont2_hidden"},null,-1);Object(c["q"])();var s=o((function(e,t,n,o,s,r){return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",a,[i,Object(c["g"])("section",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.socials,(function(e){return Object(c["p"])(),Object(c["d"])("a",{href:e.url,target:"_blank",key:e.index,id:e.id},["orange"===n.linksColor?(Object(c["p"])(),Object(c["d"])("img",{key:0,src:e.img_orange,alt:e.name,class:"img"},null,8,["src","alt"])):Object(c["e"])("",!0),"blue"===n.linksColor?(Object(c["p"])(),Object(c["d"])("img",{key:1,src:e.img_blue,alt:e.name,class:"img"},null,8,["src","alt"])):Object(c["e"])("",!0)],8,["href","id"])})),128))])]),l],64)})),r=(n("ac1f"),n("5319"),{name:"FooterItem",data:function(){return{socials:[{img_orange:n("23f7"),img_blue:n("0372"),name:"e-mail",id:"e-mail-footer"},{img_orange:n("b710"),img_blue:n("b367"),name:"linkedin",url:"https://it.linkedin.com/in/iliass-kouhhiz"},{img_orange:n("30f5"),img_blue:n("2bcf"),name:"github",url:"https://github.com/IliassKouhhiz"},{img_orange:n("b603"),img_blue:n("9493"),name:"behance",url:"https://www.behance.net/iliasskouhdd8b/moodboards"}],email:"iliass.kouhhiz@gmail.com"}},props:["linksColor","backColor"],methods:{changecolor:function(){var e=document.querySelector(".footerItem");"yellow"===this.backColor&&(e.style.backgroundColor="#f2b950")},notification:function(){var e=document.querySelector(".cont2_hidden"),t=document.createElement("p");t.textContent="Email address copied to clipboard",e.appendChild(t),console.log("notification"),e.classList.replace("cont2_hidden","cont2_visible"),t.style.cssText='\n        text-align: center;\n        font: 20px "Gilroy light";\n        color: #eeeeea;\n      ',setTimeout((function(){e.removeChild(t),e.classList.replace("cont2_visible","cont2_hidden")}),3e3)},copyEmail:function(){var e=this,t=document.querySelector("#e-mail-footer");t.style.cursor="pointer",t.addEventListener("click",(function(){var t=document.body.appendChild(document.createElement("input"));t.style.cssText="\n          width: 0px;\n          height: 0px;\n          position: absolute;\n          top: 1000%;\n          left: 0px;\n        ",t.value=e.email,t.focus(),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t),e.notification()}))}},mounted:function(){this.changecolor(),this.copyEmail()}});n("4ec3");r.render=s,r.__scopeId="data-v-9ae987ea";t["a"]=r},a271:function(e,t,n){e.exports=n.p+"img/arrow-down.db79d3c2.svg"},b367:function(e,t,n){e.exports=n.p+"img/linkedin_blue.81a864ba.svg"},b603:function(e,t,n){e.exports=n.p+"img/behance_orange.e9b33980.svg"},b710:function(e,t,n){e.exports=n.p+"img/linkedin_orange.cdbaee9b.svg"},d000:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["B"])("data-v-4e4fd411");Object(c["s"])("data-v-4e4fd411");var a={class:"navBar"},i={class:"small_screen"},l=Object(c["g"])("div",{class:"hamburger"},[Object(c["g"])("div",{class:"line"}),Object(c["g"])("div",{class:"line mid"}),Object(c["g"])("div",{class:"line"})],-1),s={class:"nav_menu_s"},r={class:"nav_menu_s_item"},u=Object(c["g"])("li",{class:"nav_menu_s_item"},[Object(c["g"])("a",{href:"#/about"},"About")],-1),b={class:"nav_menu_s_item"},d={class:"large_screen"},g={class:"nav_menu_l"},p={class:"circle_nav circle_home"},m={class:"nav_menu_l_item"},f=Object(c["g"])("div",{class:"circle_nav circle_home"},[Object(c["g"])("li",{class:"nav_menu_l_item"},[Object(c["g"])("a",{href:"#/about"},"About")])],-1),h={class:"circle_nav circle_home"},v={class:"nav_menu_l_item"};Object(c["q"])();var j=o((function(e,t,n,o,j,O){return Object(c["p"])(),Object(c["d"])("div",a,[Object(c["g"])("div",i,[Object(c["g"])("button",{class:"nav_button nav_button_orange",type:"button",onClick:t[1]||(t[1]=function(e){return O.changeState()})},[l]),Object(c["g"])("nav",{class:"nav_s nav_s_orange","data-active":j.nav_button_status},[Object(c["g"])("ul",s,[Object(c["g"])("li",r,[Object(c["g"])("a",{onClick:t[2]||(t[2]=function(e){return O.projects()}),id:"projects_s"},Object(c["y"])(O.changeNav),1)]),u,Object(c["g"])("li",b,[Object(c["g"])("p",{onClick:t[3]||(t[3]=function(e){return O.featureErr("s")})},"Resume")])])],8,["data-active"])]),Object(c["g"])("div",d,[Object(c["g"])("ul",g,[Object(c["g"])("div",p,[Object(c["g"])("li",m,[Object(c["g"])("a",{onClick:t[4]||(t[4]=function(e){return O.projects()}),id:"projects_l"},Object(c["y"])(O.changeNav),1)])]),f,Object(c["g"])("div",h,[Object(c["g"])("li",v,[Object(c["g"])("p",{onClick:t[5]||(t[5]=function(e){return O.featureErr("l")})},"Resume")])])])])])})),O=(n("ac1f"),n("5319"),{name:"NavBar",data:function(){return{nav_button_status:"false",resume:!1}},props:["navColor","pageId"],computed:{changeNav:{get:function(){return"homepage"===this.pageId?"Projects":"Home"}}},methods:{changeState:function(){var e=document.querySelector(".line:first-child"),t=document.querySelector(".line:last-child");"false"===this.nav_button_status?(this.nav_button_status="true",e.style.visibility="hidden",e.style.transition="all 0.5s ease-in-out",t.style.visibility="hidden",t.style.transition="all 0.5s ease-in-out"):"true"===this.nav_button_status&&(this.nav_button_status="false",e.style.visibility="visible",t.style.visibility="visible"),console.log(this.nav_button_status)},changeColor:function(){var e=document.querySelector(".nav_s"),t=document.querySelector(".nav_button"),n=document.querySelector(".circle_nav:first-child"),c=document.querySelector(".circle_nav:nth-child(2)"),o=document.querySelector(".circle_nav:last-child");"yellow"===this.navColor&&(e.classList.remove("nav_s_orange"),e.classList.add("nav_s_yellow"),t.classList.remove("nav_button_orange"),t.classList.add("nav_button_yellow"),n.classList.replace("circle_home","circle_about"),c.classList.replace("circle_home","circle_about"),o.classList.replace("circle_home","circle_about"))},featureErr:function(e){function t(t){return"s"===e&&1===t?".nav_s":"s"===e&&2===t?".nav_menu_s":"l"===e&&1===t?".large_screen":"l"===e&&2===t?".nav_menu_l":void 0}var n=document.querySelector(t(1)),c=document.querySelector(t(2)),o=document.createElement("div"),a=document.createElement("p");function i(){"s"===e?(o.style.cssText="\n            width: 260px;\n            height: 80px;\n            position: absolute;\n            top: 75%;\n            left: calc(50% - 130px);\n            background-color: #f2b950;\n            border-radius: 0px 20px 20px 20px;\n            display: flex;\n            align-items: center;\n            box-shadow: 1px 1px 20px #636161;\n          ","yellow"===this.navColor&&(o.style.backgroundColor="#f27649")):"l"===e&&(o.style.cssText="\n            width: 260px;\n            height: 80px;\n            position: absolute;\n            top: 135px;\n            left: calc(50% + 221.4px);\n            background-color: #f2b950;\n            border-radius: 20px 0px 20px 20px;\n            display: flex;\n            align-items: center;\n            box-shadow: 1px 1px 20px #636161;\n          ")}c.after(o),o.appendChild(a),a.textContent="This feature will be available soon",i(),a.style.cssText=' \n        font: 25px "Gilroy light";\n        color: #0e3b50;\n        text-align: center; \n      ',setTimeout((function(){o.removeChild(a),n.removeChild(o)}),2400)},projects:function(){var e=document.getElementById("projects_s"),t=document.getElementById("projects_l"),n=document.getElementById("projects");"homepage"===this.pageId?n.scrollIntoView():(e.setAttribute("href","/"),t.setAttribute("href","/"))}},mounted:function(){this.changeColor(),console.log(this.pageId)},watch:{}});n("0148");O.render=j,O.__scopeId="data-v-4e4fd411";t["a"]=O},dbbf:function(e,t,n){},e08b:function(e,t,n){e.exports=n.p+"img/weather_logo.b81f0e0e.svg"},ee0d:function(e,t,n){},f177:function(e,t,n){}});
//# sourceMappingURL=app.a831019a.js.map