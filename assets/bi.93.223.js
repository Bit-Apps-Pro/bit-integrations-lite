import{i as j,u,b as d,m as b,r as c,j as e}from"./main-579.js";import{g as I,$ as C,h as _,e as v,_ as m}from"./bi.305.82.js";import{E as w,a as E}from"./bi.557.685.js";import{c as l,s as k}from"./bi.199.686.js";import{I as D}from"./bi.463.687.js";import{D as N}from"./bi.801.918.js";import{h as S}from"./bi.543.919.js";import"./bi.333.690.js";import"./bi.718.684.js";/* empty css        */function z({allIntegURL:f}){const g=j(),{formID:p}=u(),[t,a]=d(I),[o,y]=d(C),i=b(_),[n,r]=c.useState(!1),[x,s]=c.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>S(h,t,a),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!l(o.triggered_entity)&&e.jsx(w,{setSnackbar:s}),l(o.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(N,{formID:p,formFields:i,discordConf:t,setDiscordConf:a,isLoading:n,setIsLoading:r,setSnackbar:s}),e.jsx(D,{edit:!0,saveConfig:()=>k({flow:o,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.selectedChannel===""||t.selectedServer===""||n,isLoading:n,dataConf:t,setDataConf:a,formFields:i}),e.jsx("br",{})]})}export{z as default};
//# sourceMappingURL=bi.93.223.js.map
