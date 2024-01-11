var X=Object.defineProperty;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var K=(t,n,s)=>n in t?X(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,h=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&K(t,s,n[s]);if(D)for(var s of D(n))L.call(n,s)&&K(t,s,n[s]);return t};import{r as f,j as e,L as S,m as g}from"./main-579.js";import{a6 as F,_ as c,f as y,a7 as w,B as C}from"./bi.305.82.js";import{g as U,a as q,b as E,d as G,e as H,f as ee,i as Y,j as z}from"./bi.431.841.js";import{S as te}from"./bi.251.691.js";import{M as se}from"./bi.333.690.js";function le({agiledConf:t,setAgiledConf:n,loading:s,setLoading:l}){var o,i,x,M,k,R,P,T;const[r,m]=f.useState({show:!1,action:()=>{}}),p=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],N=[{label:"New Business",value:"New Business"},{label:"Existing Business",value:"Existing Business"}],v=(a,d)=>{var _,O,V,$,I,A,B;const b=h({},t);d==="owner"?(_=a.target)!=null&&_.checked?(U(t,n,l),b.actions.owner=!0):(m({show:!1}),delete b.actions.owner):d==="account"?(O=a.target)!=null&&O.checked?(q(t,n,l),b.actions.account=!0):(m({show:!1}),delete b.actions.account):d==="source"?(V=a.target)!=null&&V.checked?(E(t,n,l),b.actions.source=!0):(m({show:!1}),delete b.actions.source):d==="status"?($=a.target)!=null&&$.checked?(G(t,n,l),b.actions.status=!0):(m({show:!1}),delete b.actions.status):d==="lifeCycleStage"?(I=a.target)!=null&&I.checked?(H(t,n,l),b.actions.lifeCycleStage=!0):(m({show:!1}),delete b.actions.lifeCycleStage):d==="followUp"?(A=a.target)!=null&&A.checked?b.actions.followUp=!0:(m({show:!1}),delete b.actions.followUp):d==="dealType"&&((B=a.target)!=null&&B.checked?b.actions.dealType=!0:(m({show:!1}),delete b.actions.dealType)),m({show:d}),n(h({},b))},u=()=>{m({show:!1})},j=(a,d)=>{const b=h({},t);b[d]=a,n(h({},b))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[t.actionName!=="deal"&&e.jsx(F,{checked:((o=t==null?void 0:t.selectedOwner)==null?void 0:o.length)||!1,onChange:a=>v(a,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:c("Add Owner","bit - integrations"),subTitle:c("Add an owner")}),t.actionName==="contact"&&e.jsx(F,{checked:((i=t==null?void 0:t.selectedAccount)==null?void 0:i.length)||!1,onChange:a=>v(a,"account"),className:"wdt-200 mt-4 mr-2",value:"account",title:c("Add Account","bit - integrations"),subTitle:c("Add an account")}),t.actionName==="deal"&&e.jsx(F,{checked:((x=t==null?void 0:t.selectedDealType)==null?void 0:x.length)||!1,onChange:a=>v(a,"dealType"),className:"wdt-200 mt-4 mr-2",value:"dealType",title:c("Add Deal Type","bit - integrations"),subTitle:c("Add a deal type")}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="owner",close:u,action:u,title:c("Owners","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Owner","bit-integrations")}),s.owners?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(M=t==null?void 0:t.owners)==null?void 0:M.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedOwner,onChange:a=>j(a,"selectedOwner"),singleSelect:!0}),e.jsx("button",{onClick:()=>U(t,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Owners","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="account",close:u,action:u,title:c("Accounts","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Account","bit-integrations")}),s.accounts?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(k=t==null?void 0:t.accounts)==null?void 0:k.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedAccount,onChange:a=>j(a,"selectedAccount"),singleSelect:!0}),e.jsx("button",{onClick:()=>q(t,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Accounts","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="source",close:u,action:u,title:c("Sources","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Source","bit-integrations")}),s.sources?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(R=t==null?void 0:t.sources)==null?void 0:R.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedSource,onChange:a=>j(a,"selectedSource"),singleSelect:!0}),e.jsx("button",{onClick:()=>E(t,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Sources","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="status",close:u,action:u,title:c("Statuses","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Status","bit-integrations")}),s.statuses?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(P=t==null?void 0:t.statuses)==null?void 0:P.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedStatus,onChange:a=>j(a,"selectedStatus"),singleSelect:!0}),e.jsx("button",{onClick:()=>G(t,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh statuses","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="followUp",close:u,action:u,title:c("Follow Up","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-center mt-2",children:e.jsx(w,{options:p==null?void 0:p.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedFollowUp,onChange:a=>j(a,"selectedFollowUp"),singleSelect:!0})})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="lifeCycleStage",close:u,action:u,title:c("Life cycle stages","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select life cycle stage","bit-integrations")}),s.lifeCycleStages?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(w,{options:(T=t==null?void 0:t.lifeCycleStages)==null?void 0:T.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedLifeCycleStage,onChange:a=>j(a,"selectedLifeCycleStage"),singleSelect:!0}),e.jsx("button",{onClick:()=>H(t,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh life cycle stages","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:r.show==="dealType",close:u,action:u,title:c("Deal types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-center mt-2",children:e.jsx(w,{options:N==null?void 0:N.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedDealType,onChange:a=>j(a,"selectedDealType"),singleSelect:!0})})]})]})}const W=(t,n,s)=>{const l=h({},n);l.field_map.splice(t,0,{}),s(h({},l))},ce=(t,n,s)=>{const l=h({},n);l.field_map.length>1&&l.field_map.splice(t,1),s(h({},l))},J=(t,n,s,l)=>{const r=h({},s);r.field_map[n][t.target.name]=t.target.value,t.target.value==="custom"&&(r.field_map[n].customValue=""),t.target.value==="customFieldKey"&&(r.field_map[n].customFieldKey=""),l(h({},r))},ae=(t,n,s,l,r)=>{const m=h({},s);m.field_map[n][r]=t.target.value,l(h({},m))};function Q({field:t,index:n,conf:s,setConf:l,fieldValue:r,fieldLabel:m,className:p}){return e.jsx(se,{onChange:N=>ae(N,n,s,l,r),label:c(m,"bit-integrations"),className:p,type:"text",value:t[r],placeholder:c(m,"bit-integrations")})}function ne({i:t,formFields:n,field:s,agiledConf:l,setAgiledConf:r}){var j,o;let m=[];l.actionName==="account"?m=l==null?void 0:l.accountFields:l.actionName==="contact"?m=l==null?void 0:l.contactFields:m=l==null?void 0:l.dealFields;const p=m.filter(i=>i.required===!0)||[],N=m.filter(i=>i.required===!1)||[];if(((j=l==null?void 0:l.field_map)==null?void 0:j.length)===1&&s.agiledFormField===""){const i=h({},l),x=ee(i);i.field_map=x,r(i)}const v=g(C),{isPro:u}=v;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>J(i,t,l,r),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:n==null?void 0:n.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((o=te)==null?void 0:o.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&e.jsx(Q,{field:s,index:t,conf:l,setConf:r,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<p.length,name:"agiledFormField",value:t<p?p[t].label||"":s.agiledFormField||"",onChange:i=>J(i,t,l,r),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t<p.length?e.jsx("option",{value:p[t].key,children:p[t].label},p[t].key):N.map(({key:i,label:x})=>e.jsx("option",{value:i,children:x},i)),(l.actionName==="account"||l.actionName==="contact")&&e.jsx("option",{value:"customFieldKey",children:c("Custom Field","bit-integrations")})]}),s.agiledFormField==="customFieldKey"&&e.jsx(Q,{field:s,index:t,conf:l,setConf:r,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),t>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>W(t,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ce(t,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function he({formFields:t,handleInput:n,agiledConf:s,setAgiledConf:l,loading:r,setLoading:m,setSnackbar:p}){var u,j;const N=o=>{const i=h({},s);i.field_map=[{formField:"",agiledFormField:""}];const{name:x}=o.target;o.target.value!==""?(i[x]=o.target.value,o.target.value==="deal"&&Y(i,l,m)):delete i[x],l(h({},i))},v=(o,i)=>{const x=h({},s);x[i]=o,i==="selectedCRMPipeline"&&o!==""&&(x.selectedCRMPipelineStages="",z(x,l,m)),l(h({},x))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:N,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:c("Select an action","bit-integrations")}),e.jsx("option",{value:"account",children:c("Create Account","bit-integrations")}),e.jsx("option",{value:"contact",children:c("Create Contact","bit-integrations")}),e.jsx("option",{value:"deal",children:c("Create Deal","bit-integrations")})]}),(r.CRMPipelines||r.CRMPipelineStages)&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName==="contact"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Role:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"contactRole",value:s.contactRole,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:c("Select a role","bit-integrations")}),e.jsx("option",{value:"Lead",children:c("Lead","bit-integrations")}),e.jsx("option",{value:"Client",children:c("Client","bit-integrations")}),e.jsx("option",{value:"Prospect",children:c("Prospect","bit-integrations")})]})]}),s.actionName==="deal"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Pipeline:","bit-integrations")}),e.jsx(w,{options:(u=s==null?void 0:s.CRMPipelines)==null?void 0:u.map(o=>({label:o.name,value:o.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMPipeline,onChange:o=>v(o,"selectedCRMPipeline"),disabled:r.CRMPipelines,singleSelect:!0}),e.jsx("button",{onClick:()=>Y(s,l,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh pipelines","bit-integrations")}'`},type:"button",disabled:r.CRMPipelines,children:"↻"})]})]}),s.actionName==="deal"&&s.selectedCRMPipeline&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Stage:","bit-integrations")}),e.jsx(w,{options:(j=s==null?void 0:s.CRMPipelineStages)==null?void 0:j.map(o=>({label:o.name,value:o.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMPipelineStages,onChange:o=>v(o,"selectedCRMPipelineStages"),disabled:r.CRMPipelineStages,singleSelect:!0}),e.jsx("button",{onClick:()=>z(s,l,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh pipeline stages","bit-integrations")}'`},type:"button",disabled:r.CRMPipelineStages,children:"↻"})]})]}),r.customFields&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Agiled Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((o,i)=>e.jsx(ne,{i,field:o,agiledConf:s,formFields:t,setAgiledConf:l,setSnackbar:p},`rp-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>W(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(le,{agiledConf:s,setAgiledConf:l,formFields:t,loading:r,setLoading:m})]})]})}export{he as A};
//# sourceMappingURL=bi.611.842.js.map
