import{i as b,u as j,b as l,r as c,m as w,j as t}from"./main-579.js";import{$ as I,g as _,h as y,e as C,_ as r}from"./bi.305.82.js";import{E as v,a as E}from"./bi.557.685.js";import{c as f,s as F}from"./bi.199.686.js";import{I as k}from"./bi.463.687.js";import{h as g}from"./bi.915.709.js";import{T as N}from"./bi.487.710.js";import"./bi.333.690.js";import"./bi.718.684.js";function B({allIntegURL:p}){const x=b();j();const[i,T]=l(I),[e,o]=l(_),[a,d]=c.useState(!1),[u,s]=c.useState({show:!1}),m=w(y),h=()=>{if(e.to===""&&e.body===""){s({show:!0,msg:r("Please select To and Body field , it is required","bit-integrations")});return}F({flow:i,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>g(n,e,o),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(i.triggered_entity)&&t.jsx(v,{setSnackbar:s}),f(i.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(N,{formID:i.triggered_entity_id,formFields:m,handleInput:n=>g(n,e,o),twilioConf:e,setTwilioConf:o,isLoading:a,setIsLoading:d,setSnackbar:s}),t.jsx(k,{edit:!0,saveConfig:h,disabled:a||e.to===""&&e.body==="",isLoading:a,dataConf:e,setDataConf:o,formFields:m}),t.jsx("br",{})]})}export{B as default};
//# sourceMappingURL=bi.704.90.js.map