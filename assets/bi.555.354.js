import{i as b,u as S,r as a,j as e}from"./main-579.js";import{e as v}from"./bi.305.82.js";import{S as h}from"./bi.703.923.js";import{e as T}from"./bi.199.686.js";import k from"./bi.290.243.js";import{W as y}from"./bi.654.729.js";import{T as i,t as H}from"./bi.511.747.js";import"./bi.133.704.js";import"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.956.731.js";function q({formFields:c,setFlow:m,flow:p,allIntegURL:n}){const u=b(),{formID:d}=S(),[s,f]=a.useState(1),[l,o]=a.useState({show:!1}),[x,g]=a.useState(!1),{zohoFlowLinks:t}=H,[r,j]=a.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return e.jsxs("div",{children:[e.jsx(v,{snack:l,setSnackbar:o}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(h,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(k,{formID:d,formFields:c,webHooks:r,setWebHooks:j,step:s,setStep:f,setSnackbar:o,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>T(p,m,n,r,u,"","",g),isLoading:x})})]})}export{q as default};
//# sourceMappingURL=bi.555.354.js.map
