import{i as b,u as j,r as o,j as e}from"./main-579.js";import{e as S}from"./bi.305.82.js";import{S as v}from"./bi.703.923.js";import{e as T}from"./bi.199.686.js";import y from"./bi.290.243.js";import{W as k}from"./bi.654.729.js";import{T as i,t as w}from"./bi.511.747.js";import"./bi.133.704.js";import"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.956.731.js";function $({formFields:m,setFlow:c,flow:n,allIntegURL:p}){const u=b(),{formID:d}=j(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,h]=o.useState(!1),{zapierLinks:t}=w,[r,g]=o.useState({name:"Zapier Web Hooks",type:"Zapier",method:"POST",url:"",apiConsole:"https://zapier.com/app/dashboard"});return e.jsxs("div",{children:[e.jsx(S,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(y,{formID:d,formFields:m,webHooks:r,setWebHooks:g,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(k,{step:s,saveConfig:()=>T(n,c,p,r,u,"","",h),isLoading:f})})]})}export{$ as default};
//# sourceMappingURL=bi.525.355.js.map