import{p as e,a as t,o,c as n,b as a,t as s,F as l,r,w as i,d as c,e as d,f as m}from"./vendor.011a1da2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const l=new URL(e,n);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[l]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const p={name:"Home",mounted(){this.init()},data:()=>({h1:"hello.",p:[{url:"https://github.com/yalin28",title:"Github",text:"Github"},{url:"https://juejin.cn/user/599e5cacf265da247f1c5d05",title:"Blog",text:"Blog"}]}),methods:{init(){this.consoleWord(),this.stopLoading()},consoleWord(){console.log("%c Welcome to my homepage !"," color: #f60")},stopLoading(){document.getElementById("spinner").classList.add("stop")}}},u=i("data-v-5ace41b6");e("data-v-5ace41b6");const h={id:"home"},f=a("h2",null,"I am Yalin.",-1),b=a("p",null,"Thank you for coming, everyone who works hard for their dreams deserves to be praised!",-1),g=a("p",null,"You can find me in these places:",-1);t();const y=u(((e,t,i,d,m,p)=>(o(),n("section",h,[a("h1",{title:m.h1},s(m.h1),9,["title"]),f,b,g,a("p",null,[(o(!0),n(l,null,r(m.p,((e,t)=>(o(),n("b",null,[(o(),n("a",{href:e.url,title:e.title,target:"_blank",key:"a"+t},s(e.text),9,["href","title"])),t<m.p.length-1?(o(),n("i",{key:"i"+t},"·")):c("",!0)])))),256))])]))));p.render=y,p.__scopeId="data-v-5ace41b6";const v={name:"App",components:{Home:p}};v.render=function(e,t,a,s,l,r){const i=d("Home");return o(),n(i)};m(v).mount("#app");
