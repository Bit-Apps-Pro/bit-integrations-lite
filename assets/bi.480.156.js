var C=Object.defineProperty,E=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))y.call(e,t)&&g(a,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&g(a,t,e[t]);return a},x=(a,e)=>E(a,w(e));import{i as k,r as m,m as h,b as S,j as s}from"./main-579.js";import{$ as M,g as F,h as L,e as $,_ as j}from"./bi.305.82.js";import{E as R,a as U}from"./bi.557.685.js";import{c as b}from"./bi.199.686.js";import{I as W}from"./bi.463.687.js";import{h as D,s as K}from"./bi.129.811.js";import{M as T}from"./bi.957.812.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.97.804.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function ee({allIntegURL:a}){const e=k(),[t,i]=m.useState({show:!1}),n=h(M),[o,r]=S(F),[_,I]=m.useState({name:"",authKey:""}),c=h(L),[d,p]=m.useState({auth:!1,list:!1,page:!1,update:!1}),v=l=>{p(x(u({},d),{update:l}))};return s.jsxs("div",{style:{width:900},children:[s.jsx($,{snack:t,setSnackbar:i}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:l=>D(l,o,r,_,I),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsxs("div",{className:"my-3",children:[!b(n.triggered_entity)&&s.jsx(R,{setSnackbar:i}),b(n.triggered_entity)&&s.jsx(U,{setSnackbar:i})]}),s.jsx(T,{mailercloudConf:o,setMailercloudConf:r,formFields:c,loading:d,setLoading:p}),s.jsx(W,{edit:!0,saveConfig:()=>{K(n,a,o,e,{edit:1},v)},isLoading:d.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:r,formFields:c})]})}export{ee as default};
//# sourceMappingURL=bi.480.156.js.map