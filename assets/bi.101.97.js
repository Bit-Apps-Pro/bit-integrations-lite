import{i as b,u as I,b as m,m as _,r as l,j as t}from"./main-579.js";import{g as w,$ as C,h as k,e as v,_ as d}from"./bi.305.82.js";import{E,a as F}from"./bi.557.685.js";import{c,s as M}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import{h as P,M as y,c as S}from"./bi.515.723.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function H({allIntegURL:p}){const f=b(),{formID:g}=I(),[e,a]=m(w),[i,x]=m(C),o=_(k),[n,r]=l.useState(!1),[u,s]=l.useState({show:!1}),h=()=>{if(!S(e)){s({show:!0,msg:"Please map all required fields to continue."});return}M({flow:i,setFlow:x,allIntegURL:p,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-6",onChange:j=>P(j,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!c(i.triggered_entity)&&t.jsx(E,{setSnackbar:s}),c(i.triggered_entity)&&t.jsx(F,{setSnackbar:s}),t.jsx(y,{formID:g,formFields:o,mailPoetConf:e,setMailPoetConf:a,isLoading:n,step:2,setIsLoading:r,setSnackbar:s,edit:e.lists}),t.jsx(N,{edit:!0,saveConfig:h,disabled:e.lists===""||e.field_map.length<1,isLoading:n,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{H as default};
//# sourceMappingURL=bi.101.97.js.map
