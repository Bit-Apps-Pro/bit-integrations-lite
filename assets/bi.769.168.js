import{i as I,u as E,b as d,r as n,m as _,j as t}from"./main-579.js";import{$ as F,g as w,h as C,e as k,_ as r}from"./bi.305.82.js";import{E as v,a as y}from"./bi.557.685.js";import{c,s as N}from"./bi.199.686.js";import{I as S}from"./bi.463.687.js";import{h as f,c as p}from"./bi.401.834.js";import{E as O}from"./bi.819.835.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function J({allIntegURL:g}){const u=I();E();const[a,L]=d(F),[e,i]=d(w),[x,$]=n.useState(!1),[h,m]=n.useState({auth:!1,tags:!1,customFields:!1,lists:!1,emailOctopusFields:!0}),[b,s]=n.useState({show:!1}),l=_(C),j=()=>{if(!p(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:a,allIntegURL:g,conf:e,navigate:u,edit:1,setLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(v,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(y,{setSnackbar:s}),t.jsx(O,{formID:a.triggered_entity_id,formFields:l,handleInput:o=>f(o,e,i),emailOctopusConf:e,setEmailOctopusConf:i,loading:h,setLoading:m,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:j,disabled:!p(e),isLoading:x,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{J as default};
//# sourceMappingURL=bi.769.168.js.map