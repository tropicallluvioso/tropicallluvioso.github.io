/* empty css                                                */import{r as c,c as u,a as n,t as l,b as d,F as v,o as _}from"./vendor.fdf0b0c7.js";var i=(t,e)=>{const s=t.__vccOpts||t;for(const[o,r]of e)s[o]=r;return s};const f={setup(){const t=c(0);return{count:t,add:()=>t.value=t.value+1,subtract:()=>t.value=t.value-1}}},p={class:"counter"},b={class:"counter-message"};function m(t,e,s,o,r,g){return _(),u(v,null,[n("div",p,[n("button",{onClick:e[0]||(e[0]=a=>o.subtract())},"-"),n("pre",null,l(o.count),1),n("button",{onClick:e[1]||(e[1]=a=>o.add())},"+")]),n("div",b,[d(t.$slots,"default")])],64)}var C=i(f,[["render",m]]);export{C as default};
