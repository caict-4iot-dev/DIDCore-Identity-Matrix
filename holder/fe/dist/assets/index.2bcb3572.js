import{a as u,t as s,o as n,b as c,T as I,W as z,Q as l,e as _,P as i}from"./vue.2af5998e.js";const x=["src"],$=u({name:"svgIcon"}),b=u({...$,props:{name:{type:String},size:{type:Number,default:()=>14},color:{type:String},className:{type:String},imgClass:{type:String}},setup(m){const e=m,g=["https","http","/src","/assets","data:image","/"],o=s(()=>e==null?void 0:e.name),v=s(()=>{var t;return(t=e==null?void 0:e.name)==null?void 0:t.startsWith("ele-")}),y=s(()=>g.find(t=>{var a;return(a=e.name)==null?void 0:a.startsWith(t)})),r=s(()=>`font-size: ${e.size}px;color: ${e.color};`),h=s(()=>e==null?void 0:e.className),d=s(()=>e==null?void 0:e.imgClass),p=s(()=>`width: ${e.size}px;height: ${e.size}px;position:relative;display: inline-block;overflow: hidden;`),S=s(()=>{const t=[];return["-webkit","-ms","-o","-moz"].forEach(f=>t.push(`${f}-filter: drop-shadow(${e.color} 30px 0);`)),`width: ${e.size}px;height: ${e.size}px;position:absolute;top:0;left: 0px;${t.join("")}`});return(t,a)=>v.value?(n(),c("i",{key:0,class:"el-icon",style:l(r.value)},[(n(),I(z(o.value)))],4)):y.value?(n(),c("div",{key:1,class:i(h.value),style:l(p.value)},[_("img",{src:o.value,alt:"",class:i(d.value),style:l(S.value)},null,14,x)],6)):(n(),c("i",{key:2,class:i(o.value),style:l(r.value)},null,6))}});export{b as default};