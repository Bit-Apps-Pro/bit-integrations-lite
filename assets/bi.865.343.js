import{i as I,u as S,b as d,r as i,m as v,j as e}from"./main-579.js";import{$ as _,g as y,h as F,e as k,_ as c}from"./bi.305.82.js";import{S as C}from"./bi.703.923.js";import{g as N,s as Z}from"./bi.199.686.js";import{I as E}from"./bi.463.687.js";import{h as L}from"./bi.212.695.js";import{Z as P}from"./bi.399.696.js";import R from"./bi.498.233.js";import{B as T}from"./bi.144.730.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.277.697.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";import"./bi.511.747.js";function Y({allIntegURL:f}){const g=I(),{formID:r}=S(),[u,h]=d(_),[m,a]=i.useState(!1),[o,l]=i.useState(1),[x,s]=i.useState({show:!1}),[p,b]=i.useState(0),[t,n]=d(y),j=v(F);i.useEffect(()=>{window.opener&&N("zohoBigin"),n({name:"Zoho Bigin",type:"Zoho Bigin",clientId:"",clientSecret:"",module:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}})},[]);const w=()=>{if(!checkMappedFields(t)){s({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if(!(t!=null&&t.pLayout)){s({show:!0,msg:c("Please select a layout","bit-integrations")});return}setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t.module!==""&&t.field_map.length>0&&l(3)};return e.jsxs("div",{children:[e.jsx(k,{snack:x,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(C,{step:3,active:o})}),e.jsx(R,{formID:r,biginConf:t,setBiginConf:n,step:o,setstep:l,isLoading:m,setIsLoading:a,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"auto"},children:[e.jsx(P,{tab:p,settab:b,formID:r,handleInput:B=>L(B,p,t,n,r,a,s),isLoading:m,setIsLoading:a,setSnackbar:s}),e.jsxs("button",{onClick:()=>w(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[c("Next","bit-integrations"),e.jsx(T,{className:"ml-1 rev-icn"})]})]}),e.jsx(E,{step:o,saveConfig:()=>Z({flow:u,setFlow:h,allIntegURL:f,conf:t,navigate:g,setIsLoading:a,setSnackbar:s}),isLoading:m,dataConf:t,setDataConf:n,formFields:j})]})}export{Y as default};
//# sourceMappingURL=bi.865.343.js.map