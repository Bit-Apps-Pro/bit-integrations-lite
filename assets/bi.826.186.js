import{i as _,u as k,b as m,r as i,m as w,j as t}from"./main-579.js";import{$ as C,g as F,h as N,e as S,_ as r,af as l}from"./bi.305.82.js";import{E as v,a as y}from"./bi.557.685.js";import{c as f,s as E}from"./bi.199.686.js";import{I as A}from"./bi.463.687.js";import{h as g,c as p}from"./bi.315.866.js";import{A as P}from"./bi.844.867.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";function J({allIntegURL:u}){const x=_();k();const[s,L]=m(C),[e,n]=m(F),[h,$]=i.useState(!1),[j,c]=i.useState({}),[b,a]=i.useState({show:!1}),d=w(N),I=()=>{if(!p(e)){a({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="task"){if(!e.selectedProject){l.error("Please select a project");return}if(!e.selectedSections&&e.actionName==="task"){l.error("Please select a Section");return}}E({flow:s,allIntegURL:u,conf:e,navigate:x,edit:1,setLoading:c,setSnackbar:a})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:b,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>g(o,e,n),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(s.triggered_entity)&&t.jsx(v,{setSnackbar:a}),f(s.triggered_entity)&&t.jsx(y,{setSnackbar:a}),t.jsx(P,{formID:s.triggered_entity_id,formFields:d,handleInput:o=>g(o,e,n),asanaConf:e,setAsanaConf:n,loading:j,setLoading:c,setSnackbar:a}),t.jsx(A,{edit:!0,saveConfig:I,disabled:!p(e),isLoading:h,dataConf:e,setDataConf:n,formFields:d}),t.jsx("br",{})]})}export{J as default};
//# sourceMappingURL=bi.826.186.js.map
