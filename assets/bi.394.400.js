var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?v(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,m=(o,e)=>{for(var t in e||(e={}))j.call(e,t)&&b(o,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&b(o,t,e[t]);return o};import{i as S,u as q,r as n,j as a}from"./main-579.js";import{e as w,_ as G}from"./bi.305.82.js";import{S as I}from"./bi.703.923.js";import{s as _}from"./bi.496.717.js";import{s as A}from"./bi.199.686.js";import{I as F}from"./bi.463.687.js";import L from"./bi.54.270.js";import{c as z}from"./bi.980.795.js";import{G as E}from"./bi.640.796.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function Z({formFields:o,setFlow:e,flow:t,allIntegURL:g}){const k=S(),{flowID:d}=q(),[r,p]=n.useState(!1),[i,u]=n.useState(1),[y,l]=n.useState({show:!1}),h=[{key:"1",label:"Create a contact"},{key:"2",label:"Update a contact"}],x=[{key:"phoneNumber",label:"Phone Number",required:!0},{key:"name",label:"Name",required:!0},{key:"biographies",label:"Biographies",required:!1},{key:"nickname",label:"Nickname",required:!1},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1},{key:"locations",label:"Locations",required:!1},{key:"email",label:"email",required:!1},{key:"occupation",label:"Occupation",required:!1},{key:"organization",label:"Organization",required:!1}],[s,c]=n.useState({name:"Google Contacts",type:"Google Contacts",mainAction:"",clientId:"",clientSecret:"",field_map:[{formField:"",googleContactsFormField:""}],default:x,allActions:h,actions:{}});n.useEffect(()=>{window.opener&&_("googleContacts")},[]);const C=()=>{A({flow:t,setFlow:e,allIntegURL:g,conf:s,navigate:k,setIsLoading:p,setSnackbar:l})};return a.jsxs("div",{children:[a.jsx(w,{snack:y,setSnackbar:l}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(I,{step:3,active:i})}),a.jsx(L,{flowID:d,googleContactsConf:s,setGoogleContactsConf:c,step:i,setStep:u,isLoading:r,setIsLoading:p,setSnackbar:l}),a.jsx("div",{className:"btcd-stp-page",style:m({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsx(E,{flowID:d,formFields:o,googleContactsConf:s,setGoogleContactsConf:c})}),a.jsx(F,{step:i,saveConfig:()=>C(),isLoading:r,dataConf:s,setDataConf:c,formFields:o}),a.jsx("div",{className:"btcd-stp-page",style:m({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsxs("button",{onClick:()=>u(3),disabled:!z(s==null?void 0:s.field_map)||s.mainAction===""||r,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",children:[G("Next","bit-integrations"),a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}export{Z as default};
//# sourceMappingURL=bi.394.400.js.map