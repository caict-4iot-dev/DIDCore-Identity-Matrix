import{a as _,a3 as f,t as i,o as t,b as a,e as y,Z as r,F as g,ad as k,P as C,X as b}from"./vue.dd6c0a93.js";import{a as B}from"./index.39131854.js";const N={class:"title-header"},F={key:0,class:"title-list"},H=["onClick"],L=_({name:"titleHeader"}),S=_({...L,props:{name:{type:String},list:{type:Array}},emits:["chooseTab"],setup(m,{emit:u}){const d=u,e=m,c=f({active:0}),v=i(()=>e==null?void 0:e.name),n=i(()=>e==null?void 0:e.list),h=s=>{c.active=s,d("chooseTab",s)};return(s,T)=>{var l;return t(),a("div",N,[y("h2",null,r(v.value),1),(l=n.value)!=null&&l.length?(t(),a("ul",F,[(t(!0),a(g,null,k(n.value,(p,o)=>(t(),a("li",{key:o,onClick:V=>h(o),class:C({active:c.active===o})},r(p),11,H))),128))])):b("",!0)])}}});const A=B(S,[["__scopeId","data-v-7e5116df"]]);export{A as default};