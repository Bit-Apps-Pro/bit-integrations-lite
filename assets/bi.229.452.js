var B=Object.defineProperty;var q=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var C=(l,a,t)=>a in l?B(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,h=(l,a)=>{for(var t in a||(a={}))w.call(a,t)&&C(l,t,a[t]);if(q)for(var t of q(a))_.call(a,t)&&C(l,t,a[t]);return l};import{i as I,r,j as i}from"./main-579.js";import{e as L,_ as T,d as n}from"./bi.305.82.js";import{S as E}from"./bi.703.923.js";import{e as A}from"./bi.199.686.js";import{I as H}from"./bi.463.687.js";import G from"./bi.840.320.js";import{c as N}from"./bi.550.893.js";import{C as M}from"./bi.646.894.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function ee({formFields:l,setFlow:a,flow:t,allIntegURL:y}){const m=I(),[b,d]=r.useState(!1),[c,f]=r.useState({}),[s,k]=r.useState(1),[x,u]=r.useState({show:!1}),P=[{label:"First Name",key:"FirstName",required:!1},{label:"Last Name",key:"LastName",required:!0},{label:"Email Address",key:"Email",required:!1},{label:"Company",key:"Company",required:!1},{label:"Phone Number",key:"Phone",required:!1},{label:"Job Title",key:"Designation",required:!1},{label:"Description",key:"Description",required:!1},{label:"Source",key:"Source",required:!1},{label:"Next Follow Up Date",key:"NextFollowUpDate",required:!1},{label:"Twitter",key:"Twitter",required:!1},{label:"LinkedIn",key:"LinkedIn",required:!1},{label:"GooglePlus",key:"GooglePlus",required:!1},{label:"Facebook",key:"Facebook",required:!1},{label:"Skype",key:"Skype",required:!1},{label:"Street",key:"Street",required:!1},{label:"City",key:"City",required:!1},{label:"State",key:"State",required:!1},{label:"Country",key:"Country",required:!1},{label:"Postal Code",key:"PostalCode",required:!1},{label:"Postal Code",key:"PostalCode",required:!1}],v=[{label:"Company Name",key:"Name",required:!0},{label:"Website",key:"Website",required:!1},{label:"Phone Number",key:"Phone",required:!1},{label:"Description",key:"Description",required:!1},{label:"Billing Street",key:"BillingStreet",required:!1},{label:"Billing City",key:"BillingCity",required:!1},{label:"Billing State",key:"BillingState",required:!1},{label:"Billing Country",key:"BillingCountry",required:!1},{label:"Billing Postal Code",key:"BillingPostalCode",required:!1},{label:"Shipping Street",key:"ShippingStreet",required:!1},{label:"Shipping City",key:"ShippingCity",required:!1},{label:"Shipping State",key:"ShippingState",required:!1},{label:"Shipping Country",key:"ShippingCountry",required:!1},{label:"Shipping Postal Code",key:"ShippingPostalCode",required:!1}],j=[{label:"Deal Name",key:"Name",required:!0},{label:"Amount",key:"Amount",required:!1},{label:"Close Date",key:"CloseDate",required:!1}],[e,p]=r.useState({name:"CompanyHub",type:"CompanyHub",sub_domain:"",api_key:"",field_map:[{formField:"",companyHubFormField:""}],actionName:"",contactFields:P,companyFields:v,dealFields:j,actions:{}}),D=()=>{d(!0),A(t,a,y,e,m,"","",d).then(o=>{var S;o.success?(n.success((S=o.data)==null?void 0:S.msg),m(y)):n.error(o.data||o)})},F=g=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){n.error("Please map mandatory fields");return}if(e.actionName==="deal"&&!e.selectedStage){n.error("Please select a Deal Stage");return}e.field_map.length>0&&k(g)};return i.jsxs("div",{children:[i.jsx(L,{snack:x,setSnackbar:u}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:s})}),i.jsx(G,{companyHubConf:e,setCompanyHubConf:p,step:s,setStep:k,loading:c,setLoading:f,setSnackbar:u}),i.jsxs("div",{className:"btcd-stp-page",style:h({},s===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(M,{formFields:l,companyHubConf:e,setCompanyHubConf:p,loading:c,setLoading:f,isLoading:b,setIsLoading:d,setSnackbar:u}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>F(3),disabled:!N(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[T("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(H,{step:s,saveConfig:()=>D(),isLoading:b,dataConf:e,setDataConf:p,formFields:l})]})}export{ee as default};
//# sourceMappingURL=bi.229.452.js.map
