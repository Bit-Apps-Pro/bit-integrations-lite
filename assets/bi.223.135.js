import{i as u,u as j,b as d,m as I,r as c,j as e}from"./main-579.js";import{g as _,$ as w,h as C,e as k,_ as l}from"./bi.305.82.js";import{E as v,a as E}from"./bi.557.685.js";import{c as p,s as F}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import{Z as W}from"./bi.586.773.js";import{h as f,c as y}from"./bi.553.774.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function G({allIntegURL:g}){const x=u(),{formID:b}=j(),[t,a]=d(_),[o,S]=d(w),r=I(C),[n,m]=c.useState(!1),[h,s]=c.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(k,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!p(o.triggered_entity)&&e.jsx(v,{setSnackbar:s}),p(o.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(W,{formID:b,formFields:r,handleInput:i=>f(i,t,a),zoomWebinarConf:t,setZoomWebinarConf:a,isLoading:n,setIsLoading:m,setSnackbar:s}),e.jsx(N,{edit:!0,saveConfig:()=>F({flow:o,allIntegURL:g,conf:t,navigate:x,edit:1,setIsLoading:m,setSnackbar:s}),disabled:t.field_map.length<2||n||!t.id||!y(t)||t.selectedActions==null,isLoading:n,dataConf:t,setDataConf:a,formFields:r}),e.jsx("br",{})]})}export{G as default};
//# sourceMappingURL=bi.223.135.js.map
