import{i as _,u as y,b as p,r as d,m as k,j as e}from"./main-579.js";import{g as v,$ as E,h as C,e as F,_ as a}from"./bi.305.82.js";import{E as N,a as S}from"./bi.557.685.js";import{c as g,s as L}from"./bi.199.686.js";import{I as $}from"./bi.463.687.js";import{h as f,c as B}from"./bi.212.695.js";import{Z as P}from"./bi.399.696.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.277.697.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function Q({allIntegURL:u}){const h=_(),{id:R,formID:c}=y(),[t,o]=p(v),[i,x]=p(E),[l,n]=d.useState(!1),[b,s]=d.useState({show:!1}),[r,j]=d.useState(0),I=k(C),w=()=>{if(!B(t)){s({show:!0,msg:a("Please map mandatory fields","bit-integrations")});return}if(!(t!=null&&t.pLayout)){s({show:!0,msg:a("Please select a layout","bit-integrations")});return}L({flow:i,setFlow:x,allIntegURL:u,conf:t,navigate:h,edit:1,setIsLoading:n,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(F,{snack:b,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:m=>f(m,r,t,o),name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!g(i.triggered_entity)&&e.jsx(N,{setSnackbar:s}),g(i.triggered_entity)&&e.jsx(S,{setSnackbar:s}),e.jsx(P,{tab:r,settab:j,formID:c,handleInput:m=>f(m,r,t,o,c,n,s),isLoading:l,setIsLoading:n,setSnackbar:s}),e.jsx($,{edit:!0,saveConfig:w,disabled:t.module===""||t.field_map.length<1,isLoading:l,dataConf:t,setDataConf:o,formFields:I}),e.jsx("br",{})]})}export{Q as default};
//# sourceMappingURL=bi.684.85.js.map
