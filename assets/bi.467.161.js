import{i as j,u as I,b as m,r as n,m as _,j as t}from"./main-579.js";import{$ as w,g as F,h as k,e as v,_ as r}from"./bi.305.82.js";import{E as y,a as E}from"./bi.557.685.js";import{c,s as C}from"./bi.199.686.js";import{I as M}from"./bi.463.687.js";import{h as f,c as N}from"./bi.924.820.js";import{M as S}from"./bi.705.821.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function K({allIntegURL:g}){const p=j();I();const[a,L]=m(w),[e,i]=m(F),[u,$]=n.useState(!1),[x,d]=n.useState({list:!1,field:!1,auth:!1,tags:!1}),[h,s]=n.useState({show:!1}),l=_(k),b=()=>{if(!N(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}C({flow:a,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(y,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(S,{formID:a.triggered_entity_id,formFields:l,handleInput:o=>f(o,e,i),mailBlusterConf:e,setMailBlusterConf:i,loading:x,setLoading:d,setSnackbar:s}),t.jsx(M,{edit:!0,saveConfig:b,disabled:!(e!=null&&e.subscribed),isLoading:u,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{K as default};
//# sourceMappingURL=bi.467.161.js.map