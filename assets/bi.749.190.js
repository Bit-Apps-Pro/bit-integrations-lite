import{i as C,u as I,b as l,r as o,m as _,j as e}from"./main-579.js";import{$ as w,g as F,h as P,e as k,_ as r,af as v}from"./bi.305.82.js";import{E as y,a as E}from"./bi.557.685.js";import{c as m,s as N}from"./bi.199.686.js";import{I as S}from"./bi.463.687.js";import{h as f,c as p}from"./bi.104.873.js";import{C as L}from"./bi.620.874.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";function J({allIntegURL:g}){const h=C();I();const[s,R]=l(w),[t,i]=l(F),[x,$]=o.useState(!1),[u,d]=o.useState({}),[b,a]=o.useState({show:!1}),c=_(P),j=()=>{if(!p(t)){a({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(t.actionName==="lead"&&!t.selectedCRMPipeline){v.error("Please select a pipeline");return}N({flow:s,allIntegURL:g,conf:t,navigate:h,edit:1,setLoading:d,setSnackbar:a})};return e.jsxs("div",{style:{width:900},children:[e.jsx(k,{snack:b,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,t,i),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!m(s.triggered_entity)&&e.jsx(y,{setSnackbar:a}),m(s.triggered_entity)&&e.jsx(E,{setSnackbar:a}),e.jsx(L,{formID:s.triggered_entity_id,formFields:c,handleInput:n=>f(n,t,i),clinchPadConf:t,setClinchPadConf:i,loading:u,setLoading:d,setSnackbar:a}),e.jsx(S,{edit:!0,saveConfig:j,disabled:!p(t),isLoading:x,dataConf:t,setDataConf:i,formFields:c}),e.jsx("br",{})]})}export{J as default};
//# sourceMappingURL=bi.749.190.js.map
