import{i as j,u as I,r as i,j as t}from"./main-579.js";import{e as S,_ as p}from"./bi.305.82.js";import{B as w}from"./bi.144.730.js";import{S as D}from"./bi.703.923.js";import{g as _,s as v}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import Z from"./bi.273.256.js";import{h as y,c as C,b as z}from"./bi.460.764.js";import{Z as F}from"./bi.344.765.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function U({formFields:l,setFlow:h,flow:g,allIntegURL:u}){const x=j(),{formID:r}=I(),[d,a]=i.useState(!1),[n,c]=i.useState(1),[k,s]=i.useState({show:!1}),[e,m]=i.useState({name:"Zoho Desk",type:"Zoho Desk",clientId:"",clientSecret:"",orgId:"",department:"",field_map:[{formField:"",zohoFormField:""}],actions:{}});i.useEffect(()=>{window.opener&&_("zohoDesk")},[]);const b=o=>{var f;if(o===3){if(!C(e)){s({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!((f=e.actions)!=null&&f.ticket_owner)){s({show:!0,msg:p("Please select a ticket owner","bit-integrations")});return}e.department!==""&&e.table!==""&&e.field_map.length>0&&c(o)}else c(o),o===2&&!e.department&&z(r,e,m,a,s)};return t.jsxs("div",{children:[t.jsx(S,{snack:k,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(D,{step:3,active:n})}),t.jsx(Z,{formID:r,deskConf:e,setDeskConf:m,step:n,setstep:c,isLoading:d,setIsLoading:a,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:n===2&&900,height:n===2&&"auto"},children:[t.jsx(F,{formID:r,formFields:l,handleInput:o=>y(o,e,m,r,a,s),deskConf:e,setDeskConf:m,isLoading:d,setIsLoading:a,setSnackbar:s}),t.jsxs("button",{onClick:()=>b(3),disabled:e.department===""||e.table===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[p("Next","bit-integrations"),t.jsx(w,{className:"ml-1 rev-icn"})]})]}),t.jsx(N,{step:n,saveConfig:()=>v({flow:g,setFlow:h,allIntegURL:u,navigate:x,conf:e,setIsLoading:a,setSnackbar:s})})]})}export{U as default};
//# sourceMappingURL=bi.385.384.js.map