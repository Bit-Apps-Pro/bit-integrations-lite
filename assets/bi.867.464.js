import{i as h,u as j,r as o,j as e}from"./main-579.js";import{e as b}from"./bi.305.82.js";import{S}from"./bi.703.923.js";import{e as L}from"./bi.199.686.js";import I from"./bi.290.243.js";import{W as T}from"./bi.654.729.js";import{T as a,t as y}from"./bi.511.747.js";import"./bi.133.704.js";import"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.956.731.js";function O({formFields:i,setFlow:m,flow:c,allIntegURL:d}){const p=h(),{formID:u}=j(),[s,l]=o.useState(1),[g,n]=o.useState({show:!1}),[k,x]=o.useState(!1),[r,v]=o.useState({name:"AdvancedFormIntegration Web Hooks",type:"AdvancedFormIntegration",method:"POST",url:""}),{afi:t}=y;return e.jsxs("div",{children:[e.jsx(b,{snack:g,setSnackbar:n}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(S,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(a,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(a,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(I,{formID:u,formFields:i,webHooks:r,setWebHooks:v,step:s,setStep:l,setSnackbar:n,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(T,{step:s,saveConfig:()=>L(c,m,d,r,p,"","",x),isLoading:k})})]})}export{O as default};
//# sourceMappingURL=bi.867.464.js.map