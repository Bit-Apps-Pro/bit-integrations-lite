var m=Object.defineProperty,_=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(t,a,e)=>a in t?m(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,r=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&y(t,e,a[e]);if(d)for(var e of d(a))k.call(a,e)&&y(t,e,a[e]);return t},c=(t,a)=>_(t,F(a));import{_ as n,c as f,d as u}from"./bi.305.82.js";const A=(t,a,e)=>{const l=r({},a),{name:s}=t.target;t.target.value!==""?l[s]=t.target.value:delete l[s],e(r({},l))},P=t=>{const a=t==null?void 0:t.filter(e=>e.required===!0);return(a==null?void 0:a.length)>0?a==null?void 0:a.map(e=>({formField:"",nimbleFormField:e.key})):[{formField:"",nimbleFormField:""}]},K=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.nimbleFormField||e.formField==="custom"&&!e.customValue||e.nimbleFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),S=(t,a,e,l,s,i)=>{if(!t.api_key){e({api_key:t.api_key?"":n("API Key can't be empty","bit-integrations")});return}e({}),i(c(r({},s),{auth:!0}));const h={api_key:t.api_key};f(h,"nimble_authentication").then(o=>{if(o&&o.success){l(!0),i(c(r({},s),{auth:!1})),u.success(n("Authorized successfully","bit-integrations"));return}i(c(r({},s),{auth:!1})),u.error(n("Authorized failed, Please enter valid API Key","bit-integrations"))})},x=(t,a,e)=>{e(c(r({},e),{allFields:!0}));const l={api_key:t.api_key};f(l,"nimble_fetch_all_fields").then(s=>{if(s&&s.success){if(s.data){a(i=>(i.peopleFields=s.data.person,i.companyFields=s.data.company,i.xofEmployees=s.data.xofEmployees,i.ratings=s.data.ratings,i.leadStatus=s.data.leadStatus,i.leadSource=s.data.leadSource,i.leadTypes=s.data.leadTypes,i)),e(c(r({},e),{event:!1})),u.success(n("Fields fetched successfully","bit-integrations"));return}e(c(r({},e),{event:!1})),u.error(n("Fields Not Found!","bit-integrations"));return}e(c(r({},e),{event:!1})),u.error(n("Fields fetching failed","bit-integrations"))})};export{P as a,K as c,x as g,A as h,S as n};
//# sourceMappingURL=bi.151.901.js.map
