import{i as S,u as v,r as a,j as e}from"./main-579.js";import{e as T}from"./bi.305.82.js";import{S as h}from"./bi.703.923.js";import{e as y}from"./bi.199.686.js";import b from"./bi.290.243.js";import{W as H}from"./bi.654.729.js";import{T as i,t as I}from"./bi.511.747.js";import"./bi.133.704.js";import"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.956.731.js";function B({formFields:m,setFlow:c,flow:n,allIntegURL:p}){const u=S(),{formID:d}=v(),[s,l]=a.useState(1),[x,o]=a.useState({show:!1}),[f,g]=a.useState(!1),{wPWebhooksLinks:t}=I,[r,j]=a.useState({name:"WPWebhooks Web Hooks",type:"WPWebhooks",method:"POST",url:""});return e.jsxs("div",{children:[e.jsx(T,{snack:x,setSnackbar:o}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(h,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(b,{formID:d,formFields:m,webHooks:r,setWebHooks:j,step:s,setStep:l,setSnackbar:o,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(H,{step:s,saveConfig:()=>y(n,c,p,r,u,"","",g),isLoading:f})})]})}export{B as default};
//# sourceMappingURL=bi.244.463.js.map