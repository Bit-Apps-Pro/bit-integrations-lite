var D=Object.defineProperty,m=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var w=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))z.call(t,s)&&w(e,s,t[s]);if(p)for(var s of p(t))q.call(t,s)&&w(e,s,t[s]);return e},F=(e,t)=>m(e,y(t));import{c as _,_ as n}from"./bi.305.82.js";const L=(e,t,s,d,i,l,a,o,r)=>{let f=c({},s);if(a){const h=c({},o);h[e.target.name]="",r(c({},h))}switch(f[e.target.name]=e.target.value,e.target.name){case"list":f=R(f,t,d,i,l);break}d(c({},f))},R=(e,t,s,d,i)=>{var a,o;const l=c({},e);return l.field_map=[{formField:"",zohoFormField:"Contact Email"}],(o=(a=l==null?void 0:l.default)==null?void 0:a.fields)!=null&&o[l.list]||$(t,l,s,d,i),l},P=(e,t,s,d,i)=>{d(!0);const l={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};_(l,"zmarketingHub_refresh_lists").then(a=>{if(a&&a.success){const o=c({},t);a.data.lists&&(o.default=F(c({},o.default),{lists:a.data.lists})),a.data.tokenDetails&&(o.tokenDetails=a.data.tokenDetails),i({show:!0,msg:n("Lists refreshed","bit-integrations")}),s(c({},o))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?i({show:!0,msg:`${n("Lists refresh failed Cause:")}${a.data.data||a.data}. ${n("please try again","bit-integrations")}`}):i({show:!0,msg:n("Lists refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},$=(e,t,s,d,i)=>{const{list:l}=t;if(!l)return;d(!0);const a={formID:e,list:l,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};_(a,"zmarketingHub_refresh_contact_fields").then(o=>{if(o&&o.success){const r=c({},t);o.data.fields?(r.default.fields||(r.default.fields={}),r.default.fields[l]=o.data,i({show:!0,msg:n("Contact Fields refreshed","bit-integrations")})):i({show:!0,msg:n("Zoho didn't provide fields names for this list","bit-integrations")}),o.data.tokenDetails&&(r.tokenDetails=o.data.tokenDetails),s(c({},r))}else i({show:!0,msg:n("Contact Fields refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},v=e=>!((e!=null&&e.field_map?e.field_map.filter(s=>{var d,i,l;return!s.formField&&s.zohoFormField&&((l=(i=(d=e==null?void 0:e.default)==null?void 0:d.fields)==null?void 0:i[e.list])==null?void 0:l.required.indexOf(s.zohoFormField))!==-1}):[]).length>0),x=()=>{const e={},s=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");s&&s.forEach(d=>{const i=d.split("=");i[1]&&(e[i[0]]=i[1])}),localStorage.setItem("__zohoMarkatingHub",JSON.stringify(e)),window.close()};export{$ as a,v as c,L as h,P as r,x as s};
//# sourceMappingURL=bi.13.711.js.map
