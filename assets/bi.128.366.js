import{i as C,u as S,r as i,j as t}from"./main-579.js";import{e as F,_ as I}from"./bi.305.82.js";import{B as N}from"./bi.144.730.js";import{S as v}from"./bi.703.923.js";import{e as _}from"./bi.199.686.js";import{I as k}from"./bi.463.687.js";import w from"./bi.546.245.js";import{F as y,c as L}from"./bi.18.737.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function K({formFields:c,setFlow:d,flow:f,allIntegURL:g}){const x=C(),{formID:l}=S(),[n,o]=i.useState(!1),[h,j]=i.useState({}),[s,p]=i.useState(1),[b,a]=i.useState({show:!1}),[e,r]=i.useState({name:"Fluent CRM",type:"Fluent Crm",actionName:"",field_map:[{formField:"",fluentCRMField:""}],actions:{}}),u=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),m===3){if(!L(e)){a({show:!0,msg:"Please map all required fields to continue."});return}if((e==null?void 0:e.actionName)==="add-user"&&!e.list_id){a({show:!0,msg:"Please select list to continue."});return}e.name!==""&&e.field_map.length>0&&p(m)}else p(m)};return t.jsxs("div",{children:[t.jsx(F,{snack:b,setSnackbar:a}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(v,{step:3,active:s})}),t.jsx(w,{formID:l,fluentCrmConf:e,setFluentCrmConf:r,step:s,nextPage:u,isLoading:n,setIsLoading:o,setSnackbar:a}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto",minHeight:s===2&&"200px"},children:[t.jsx(y,{formID:l,formFields:c,fluentCrmConf:e,setFluentCrmConf:r,isLoading:n,setIsLoading:o,loading:h,setLoading:j,setSnackbar:a}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>u(3),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[I("Next","bit-integrations"),t.jsx(N,{className:"ml-1 rev-icn"})]})]}),t.jsx(k,{step:s,saveConfig:()=>_(f,d,g,e,x,"","",o),isLoading:n,dataConf:e,setDataConf:r,formFields:c})]})}export{K as default};
//# sourceMappingURL=bi.128.366.js.map