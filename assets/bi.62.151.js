import{i as S,b as m,r as p,m as v,j as e}from"./main-579.js";import{$ as y,g as N,h as _,e as F,_ as l,d as k}from"./bi.305.82.js";import{E as w,a as E}from"./bi.557.685.js";import{c as g,s as $}from"./bi.199.686.js";import{I as L}from"./bi.463.687.js";import{h as u,c as M}from"./bi.467.800.js";import{S as R}from"./bi.396.801.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function O({allIntegURL:x}){const f=S(),[s,A]=m(y),[t,n]=m(N),[o,r]=p.useState(!1),[h,i]=p.useState({show:!1}),c=v(_),b=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(t==null?void 0:t.actionName),j=()=>{if(b&&!M(t)){k.error("Please map mandatory fields !");return}$({flow:s,allIntegURL:x,conf:t,navigate:f,edit:1,setIsLoading:r,setSnackbar:i})},I=()=>{var a,d;if((t==null?void 0:t.actionName)==="opportunity-create")return!((a=t.actions)!=null&&a.opportunityStageId);if((t==null?void 0:t.actionName)==="event-create")return!((d=t.actions)!=null&&d.eventSubjectId);if((t==null?void 0:t.actionName)==="add-campaign-member")return!t.campaignId};return e.jsxs("div",{style:{width:900},children:[e.jsx(F,{snack:h,setSnackbar:i}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:a=>u(a,t,n),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!g(s.triggered_entity)&&e.jsx(w,{setSnackbar:i}),g(s.triggered_entity)&&e.jsx(E,{setSnackbar:i}),e.jsx(R,{formFields:c,handleInput:a=>u(a,t,n),salesforceConf:t,setSalesforceConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),e.jsx(L,{edit:!0,saveConfig:j,disabled:I()||o,isLoading:o,dataConf:t,setDataConf:n,formFields:c}),e.jsx("br",{})]})}export{O as default};
//# sourceMappingURL=bi.62.151.js.map
