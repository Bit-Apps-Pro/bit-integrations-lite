import{i as j,u as b,b as c,m as I,r as d,j as t}from"./main-579.js";import{g as v,$ as _,h as w,e as C,_ as p}from"./bi.305.82.js";import{E,a as k}from"./bi.557.685.js";import{c as l,s as N}from"./bi.199.686.js";import{I as W}from"./bi.463.687.js";import{h as f,G as y}from"./bi.458.851.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function z({allIntegURL:g}){const x=j(),{formID:h}=b(),[e,a]=c(v),[i,F]=c(_),r=I(w),[n,m]=d.useState(!1),[u,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l(i.triggered_entity)&&t.jsx(E,{setSnackbar:s}),l(i.triggered_entity)&&t.jsx(k,{setSnackbar:s}),t.jsx(y,{formID:h,formFields:r,handleInput:o=>f(o,e,a),giveWpConf:e,setGiveWpConf:a,isLoading:n,setIsLoading:m,setSnackbar:s}),t.jsx(W,{edit:!0,saveConfig:()=>N({flow:i,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:s}),disabled:!e.mainAction||n,isLoading:n,dataConf:e,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{z as default};
//# sourceMappingURL=bi.436.177.js.map