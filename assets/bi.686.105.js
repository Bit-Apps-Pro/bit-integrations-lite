import{i as I,u as _,b as d,m as F,r as o,j as t}from"./main-579.js";import{g as w,$ as k,h as v,e as E,_ as l}from"./bi.305.82.js";import{E as N,a as S}from"./bi.557.685.js";import{c,s as y}from"./bi.199.686.js";import{I as L}from"./bi.463.687.js";import{h as $,F as R,c as D}from"./bi.18.737.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function O({allIntegURL:f}){const p=I(),{id:M,formID:g}=_(),[e,a]=d(w),[n,u]=d(k),i=F(v),[r,m]=o.useState(!1),[x,h]=o.useState({}),[j,s]=o.useState({show:!1}),b=()=>{if(!D(e)){s({show:!0,msg:"Please map all required fields to continue."});return}y({flow:n,setFlow:u,allIntegURL:f,conf:e,navigate:p,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(E,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:C=>$(C,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(n.triggered_entity)&&t.jsx(N,{setSnackbar:s}),c(n.triggered_entity)&&t.jsx(S,{setSnackbar:s}),t.jsx(R,{formID:g,formFields:i,fluentCrmConf:e,setFluentCrmConf:a,isLoading:r,step:2,setIsLoading:m,loading:x,setLoading:h,setSnackbar:s}),t.jsx(L,{edit:!0,saveConfig:b,disabled:e.list_id===""||e.field_map.length<1,isLoading:r,dataConf:e,setDataConf:a,formFields:i}),t.jsx("br",{})]})}export{O as default};
//# sourceMappingURL=bi.686.105.js.map
