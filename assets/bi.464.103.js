import{i as j,u,b as m,m as b,r as c,j as t}from"./main-579.js";import{g as I,$ as _,h as w,e as C,_ as d}from"./bi.305.82.js";import{E as v,a as E}from"./bi.557.685.js";import{c as l,s as k}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import{h as y}from"./bi.780.732.js";import{T as F}from"./bi.79.733.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.580.705.js";import"./bi.649.734.js";/* empty css        */function G({allIntegURL:g}){const f=j(),{formID:p}=u(),[e,a]=m(I),[o,S]=m(_),n=b(w),[i,r]=c.useState(!1),[x,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>y(h,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l(o.triggered_entity)&&t.jsx(v,{setSnackbar:s}),l(o.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(F,{formID:p,formFields:n,telegramConf:e,setTelegramConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>k({flow:o,allIntegURL:g,conf:e,navigate:f,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.chat_id===""||i,isLoading:i,dataConf:e,setDataConf:a,formFields:n}),t.jsx("br",{})]})}export{G as default};
//# sourceMappingURL=bi.464.103.js.map
