import{i as j,u as b,r,j as t}from"./main-579.js";import{e as P,_ as M}from"./bi.305.82.js";import{B as I}from"./bi.144.730.js";import{e as S}from"./bi.199.686.js";import{I as C}from"./bi.463.687.js";import N from"./bi.96.239.js";import{M as k,c as _,r as v}from"./bi.515.723.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function $({formFields:l,setFlow:d,flow:g,allIntegURL:u}){const x=j(),{formID:m}=b(),[c,i]=r.useState(!1),[s,p]=r.useState(1),[h,a]=r.useState({show:!1}),[e,o]=r.useState({name:"Mail Poet",type:"Mail Poet",field_map:[{formField:"",mailPoetField:""}],actions:{}}),f=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n===3){if(!_(e)){a({show:!0,msg:"Please map all required fields to continue."});return}e.name!==""&&e.field_map.length>0&&p(n)}else p(n),n===2&&e.name&&v(m,e,o,i,a)};return t.jsxs("div",{children:[t.jsx(P,{snack:h,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2"}),t.jsx(N,{formID:m,mailPoetConf:e,setMailPoetConf:o,step:s,nextPage:f,isLoading:c,setIsLoading:i,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(k,{formID:m,formFields:l,mailPoetConf:e,setMailPoetConf:o,setSnackbar:a,setIsLoading:i}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>f(3),disabled:e.lists===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[M("Next","bit-integrations"),t.jsx(I,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{step:s,saveConfig:()=>S(g,d,u,e,x,"","",i),isLoading:c,dataConf:e,setDataConf:o,formFields:l})]})}export{$ as default};
//# sourceMappingURL=bi.325.349.js.map
