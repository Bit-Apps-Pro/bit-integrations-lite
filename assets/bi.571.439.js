var j=Object.defineProperty;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,g=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&f(s,t,e[t]);if(u)for(var t of u(e))P.call(e,t)&&f(s,t,e[t]);return s};import{i as S,u as q,r as l,j as o}from"./main-579.js";import{e as N,_}from"./bi.305.82.js";import{S as F}from"./bi.703.923.js";import{s as w}from"./bi.199.686.js";import{I as A}from"./bi.463.687.js";import{P as B,h as E,c as M}from"./bi.569.868.js";import{B as D}from"./bi.144.730.js";import L from"./bi.880.307.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.97.804.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";import"./bi.511.747.js";function ee({formFields:s,setFlow:e,flow:t,allIntegURL:b}){const v=S(),{formID:x}=q(),[c,m]=l.useState(!1),[a,p]=l.useState(1),[y,i]=l.useState({show:!1}),C=[{key:"first_name",label:"First Name",required:!0},{key:"email",label:"Email",required:!0},{key:"org_name",label:"Org Name",required:!1},{key:"person_id",label:"Person Id ",required:!1},{key:"org_id",label:"Org Id",required:!1},{key:"budget",label:"Budget",required:!1},{key:"currency",label:"Currency",required:!1},{key:"desc",label:"Desc",required:!1},{key:"note",label:"Note",required:!1}],h=[{key:"1",label:"Create lead"}],[r,n]=l.useState({name:"Propovoice CRM",type:"Propovoice CRM",mainAction:"",field_map:[{formField:"",propovoiceCrmFormField:""}],leadFields:C,allActions:h,actions:{}}),k=d=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(3)};return o.jsxs("div",{children:[o.jsx(N,{snack:y,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(F,{step:3,active:a})}),o.jsx(L,{formID:x,propovoiceCrmConf:r,setPropovoiceCrmConf:n,step:a,setStep:p,isLoading:c,setIsLoading:m,setSnackbar:i}),o.jsxs("div",{className:"btcd-stp-page",style:g({},a===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(B,{formFields:s,handleInput:d=>E(d,r,n),propovoiceCrmConf:r,setPropovoiceCrmConf:n,isLoading:c,setIsLoading:m,setSnackbar:i}),o.jsxs("button",{onClick:()=>k(),disabled:!M(r),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[_("Next","bit-integrations"),o.jsx(D,{className:"ml-1 rev-icn"})]})]}),o.jsx(A,{step:a,saveConfig:()=>w({flow:t,setFlow:e,allIntegURL:b,conf:r,navigate:v,setIsLoading:m,setSnackbar:i}),isLoading:c,dataConf:r,setDataConf:n,formFields:s})]})}export{ee as default};
//# sourceMappingURL=bi.571.439.js.map
