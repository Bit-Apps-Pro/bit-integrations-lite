import{i as j,u as b,b as d,m as I,r as c,j as t}from"./main-579.js";import{g as _,$ as w,h as C,e as k,_ as l}from"./bi.305.82.js";import{E as v,a as E}from"./bi.557.685.js";import{c as p,s as F}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import{Z as y}from"./bi.178.771.js";import{h as f,c as S}from"./bi.764.772.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function G({allIntegURL:g}){const x=j(),{formID:h}=b(),[e,o]=d(_),[a,Z]=d(w),m=I(C),[n,i]=c.useState(!1),[u,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,e,o),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!p(a.triggered_entity)&&t.jsx(v,{setSnackbar:s}),p(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(y,{formID:h,formFields:m,handleInput:r=>f(r,e,o,i,s),zoomConf:e,setZoomConf:o,isLoading:n,setIsLoading:i,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>F({flow:a,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:i,setSnackbar:s}),disabled:e.field_map.length<2||n||!e.id||!S(e)||e.selectedActions==null,isLoading:n,dataConf:e,setDataConf:o,formFields:m}),t.jsx("br",{})]})}export{G as default};
//# sourceMappingURL=bi.420.134.js.map