import{i as E,u as b,b as d,r as c,m as j,j as t}from"./main-579.js";import{$ as I,g as _,h as w,e as C,_ as n}from"./bi.305.82.js";import{E as F,a as k}from"./bi.557.685.js";import{c as f,s as v}from"./bi.199.686.js";import{I as y}from"./bi.463.687.js";import{h as p,c as N}from"./bi.736.752.js";import{E as S}from"./bi.787.753.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function H({allIntegURL:g}){const x=E();b();const[a,$]=d(I),[e,i]=d(_),[r,m]=c.useState(!1),[h,s]=c.useState({show:!1}),l=j(w),u=()=>{if(!N(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}v({flow:a,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>p(o,e,i),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(a.triggered_entity)&&t.jsx(F,{setSnackbar:s}),f(a.triggered_entity)&&t.jsx(k,{setSnackbar:s}),t.jsx(S,{formID:a.triggered_entity_id,formFields:l,handleInput:o=>p(o,e,i),elasticEmailConf:e,setElasticEmailConf:i,isLoading:r,setIsLoading:m,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:u,disabled:e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{H as default};
//# sourceMappingURL=bi.913.123.js.map
