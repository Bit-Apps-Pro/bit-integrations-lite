var y=Object.defineProperty,p=Object.defineProperties;var o=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var n=(e,i,t)=>i in e?y(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,s=(e,i)=>{for(var t in i||(i={}))A.call(i,t)&&n(e,t,i[t]);if(m)for(var t of m(i))b.call(i,t)&&n(e,t,i[t]);return e},u=(e,i)=>p(e,o(i));import{_ as c,c as h,d as F}from"./bi.305.82.js";const K=(e,i,t)=>{const a=s({},i),{name:r}=e.target;e.target.value!==""?a[r]=e.target.value:delete a[r],t(s({},a))},P=e=>{const i=(e==null?void 0:e.oneHashCRMFields)&&(e==null?void 0:e.oneHashCRMFields.filter(t=>t.required===!0&&t.key!=="owner"&&t.key!=="pipeline"));return i.length>0?i.map(t=>({formField:"",oneHashCRMFormField:t.key})):[{formField:"",oneHashCRMFormField:""}]},q=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.oneHashCRMFormField||t.formField==="custom"&&!t.customValue||t.oneHashCRMFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),v=(e,i,t,a,r,l)=>{if(!e.api_key||!e.api_secret||!e.domain){t({api_key:e.api_key?"":c("Api Key can't be empty","bit-integrations"),api_secret:e.api_secret?"":c("Api Secret can't be empty","bit-integrations"),domain:e.domain?"":c("Access API URL can't be empty","bit-integrations")});return}t({}),l(u(s({},r),{auth:!0}));const _={api_key:e.api_key,api_secret:e.api_secret,domain:e.domain};h(_,"onehashcrm_authentication").then(d=>{if(d&&d.success){a(!0),l(u(s({},r),{auth:!1})),F.success(c("Authorized successfully","bit-integrations"));return}l(u(s({},r),{auth:!1})),F.error(c("Authorized failed, Please enter valid API Key & Secret or Access Api URL","bit-integrations"))})};export{q as c,P as g,K as h,v as o};
//# sourceMappingURL=bi.881.905.js.map
