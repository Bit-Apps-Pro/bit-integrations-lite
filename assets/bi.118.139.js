import{i as I,u as _,b as g,m as v,r as c,j as t}from"./main-579.js";import{g as w,$ as C,h as E,e as k,_ as l}from"./bi.305.82.js";import{E as N,a as y}from"./bi.557.685.js";import{c as p,s as F}from"./bi.199.686.js";import{I as S}from"./bi.463.687.js";import{h as f}from"./bi.656.781.js";import{G}from"./bi.416.782.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.858.706.js";import"./bi.513.683.js";import"./bi.62.692.js";import"./bi.792.693.js";function K({allIntegURL:x}){var d;const h=I(),{formID:u}=_(),[s,o]=g(w),[a,$]=g(C),r=v(E),[n,m]=c.useState(!1),[b,e]=c.useState({show:!1}),j=!(s.mainAction==="2"&&s.addTagToUser!==void 0);return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:b,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,s,o),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!p(a.triggered_entity)&&t.jsx(N,{setSnackbar:e}),p(a.triggered_entity)&&t.jsx(y,{setSnackbar:e}),t.jsx(G,{formID:u,formFields:r,handleInput:i=>f(i,s,o),groundhoggConf:s,setGroundhoggConf:o,isLoading:n,setIsLoading:m,setSnackbar:e}),t.jsx(S,{edit:!0,saveConfig:()=>F({flow:a,allIntegURL:x,conf:s,navigate:h,edit:1,setIsLoading:m,setSnackbar:e}),disabled:(s.mainAction==="2"?j:!(((d=s.field_map)==null?void 0:d.length)>=1))||n,isLoading:n,dataConf:s,setDataConf:o,formFields:r}),t.jsx("br",{})]})}export{K as default};
//# sourceMappingURL=bi.118.139.js.map