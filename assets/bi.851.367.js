import{i as j,u as b,r as a,j as t}from"./main-579.js";import{e as E,_ as v}from"./bi.305.82.js";import{B as S}from"./bi.144.730.js";import{S as C}from"./bi.703.923.js";import{e as I}from"./bi.199.686.js";import{I as k}from"./bi.463.687.js";import _ from"./bi.916.246.js";import{c as y}from"./bi.938.738.js";import{E as N}from"./bi.404.739.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function K({formFields:o,setFlow:g,flow:l,allIntegURL:f}){const d=j(),{formID:r}=b(),[m,c]=a.useState(!1),[s,p]=a.useState(1),[h,n]=a.useState({show:!1}),[e,i]=a.useState({name:"Encharge",type:"Encharge",tags:"",api_key:"",field_map:[{formField:"",enChargeFields:""}],actions:{}}),u=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),x===3){if(!y(e)){n({show:!0,msg:"Please map all required fields to continue."});return}e.name!==""&&e.field_map.length>0&&p(3)}};return t.jsxs("div",{children:[t.jsx(E,{snack:h,setSnackbar:n}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(C,{step:3,active:s})}),t.jsx(_,{formID:r,enchargeConf:e,setEnchargeConf:i,step:s,setstep:p,isLoading:m,setIsLoading:c,setSnackbar:n}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,minHeight:s===2&&"200",height:s===2&&"auto"},children:[t.jsx(N,{formID:r,formFields:o,enchargeConf:e,setEnchargeConf:i}),t.jsxs("button",{onClick:()=>u(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations")," ",t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(k,{step:s,saveConfig:()=>I(l,g,f,e,d,"","",c),isLoading:m,dataConf:e,setDataConf:i,formFields:o})]})}export{K as default};
//# sourceMappingURL=bi.851.367.js.map
