import{i as _,u as C,b as m,r as o,m as w,j as t}from"./main-579.js";import{$ as F,g as k,h as v,e as y,_ as r,af as c}from"./bi.305.82.js";import{E,a as N}from"./bi.557.685.js";import{c as g,s as S}from"./bi.199.686.js";import{I as P}from"./bi.463.687.js";import{h as f,c as p}from"./bi.431.841.js";import{A}from"./bi.611.842.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";function J({allIntegURL:u}){const x=_();C();const[a,R]=m(F),[e,i]=m(k),[h,L]=o.useState(!1),[b,d]=o.useState({}),[j,s]=o.useState({show:!1}),l=w(v),I=()=>{if(!p(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="deal"){if(!e.selectedCRMPipeline){c.error("Please select a pipeline");return}if(!e.selectedCRMPipelineStages){c.error("Please select a pipeline stage");return}}S({flow:a,allIntegURL:u,conf:e,navigate:x,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(y,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,i),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!g(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),g(a.triggered_entity)&&t.jsx(N,{setSnackbar:s}),t.jsx(A,{formID:a.triggered_entity_id,formFields:l,handleInput:n=>f(n,e,i),agiledConf:e,setAgiledConf:i,loading:b,setLoading:d,setSnackbar:s}),t.jsx(P,{edit:!0,saveConfig:I,disabled:!p(e),isLoading:h,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{J as default};
//# sourceMappingURL=bi.77.172.js.map
