import{i as b,u as S,r as o,j as e}from"./main-579.js";import{e as v}from"./bi.305.82.js";import{S as T}from"./bi.703.923.js";import{e as y}from"./bi.199.686.js";import k from"./bi.290.243.js";import{W as H}from"./bi.654.729.js";import{T as i,t as W}from"./bi.511.747.js";import"./bi.133.704.js";import"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.956.731.js";function z({formFields:m,setFlow:n,flow:p,allIntegURL:u}){const c=b(),{formID:d}=S(),[s,x]=o.useState(1),[g,a]=o.useState({show:!1}),[l,h]=o.useState(!1),{flowMatticLinks:t}=W,[r,j]=o.useState({name:"FlowMattic Web Hooks",type:"FlowMattic",method:"POST",url:""});return e.jsxs("div",{children:[e.jsx(v,{snack:g,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(T,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(k,{formID:d,formFields:m,webHooks:r,setWebHooks:j,step:s,setStep:x,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(H,{step:s,saveConfig:()=>y(p,n,u,r,c,"","",h),isLoading:l})})]})}export{z as default};
//# sourceMappingURL=bi.471.459.js.map