var A=Object.defineProperty,P=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var K=(s,t,e)=>t in s?A(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,l=(s,t)=>{for(var e in t||(t={}))g.call(t,e)&&K(s,e,t[e]);if(_)for(var e of _(t))T.call(t,e)&&K(s,e,t[e]);return s},d=(s,t)=>P(s,q(t));var o=(s,t,e)=>new Promise((a,c)=>{var r=i=>{try{u(e.next(i))}catch(n){c(n)}},f=i=>{try{u(e.throw(i))}catch(n){c(n)}},u=i=>i.done?a(i.value):Promise.resolve(i.value).then(r,f);u((e=e.apply(s,t)).next())});import{_ as h,c as y,d as m}from"./bi.305.82.js";import{e as b,s as k}from"./bi.199.686.js";const C=(s,t,e,a,c)=>{const r=l({},t),f=l({},a);f[s.target.name]="",r[s.target.name]=s.target.value,c(f),e(r)},M=(s,t,e,a,c,r)=>{if(!s.authKey){e({authKey:s.authKey?"":h("API key can't be empty")});return}e({}),r(d(l({},c),{auth:!0}));const f={authKey:s.authKey};y(f,"selzy_handle_authorize").then(u=>{var i;if(u.success&&u.data){const n=l({},s);if(u.data){n.default||(n.default={});const w=(i=u.data.result)==null?void 0:i.map(F=>d(l({},F),{id:String(F.id)}));n.default.lists=w}z(n,t,c,r),t(n),a(!0),r(d(l({},c),{auth:!1})),m.success(h("Authorized successfully"));return}r(d(l({},c),{auth:!1})),m.error(h("Authorized failed"))})},S=(s,t,e,a)=>o(void 0,null,function*(){var f;a(d(l({},e),{list:!0}));const c={authKey:s.authKey},r=yield y(c,"selzy_handle_authorize");if(r.success){const u=(f=r.data.result)==null?void 0:f.map(n=>d(l({},n),{id:String(n.id)})),i=l({},s);if(u){i.default||(i.default={}),i.default.lists=u,t(i),a(d(l({},e),{list:!1})),m.success(h("List refresh successfully"));return}}a(d(l({},e),{list:!1})),m.success(h("List refresh failed"))}),B=(s,t,e,a)=>o(void 0,null,function*(){a&&a(d(l({},e),{tag:!0}));const c={authKey:s.authKey},r=yield y(c,"selzy_get_all_tags");if(r.success){const f=r.data.result,u=l({},s);return f&&(u.default||(u.default={}),u.default.tags=f,t(u),a&&(a(d(l({},e),{tag:!1})),m.success(h("Tag refresh successfully")))),!0}return a&&(a(d(l({},e),{tag:!1})),m.success(h("Tag refresh failed"))),!1}),z=(s,t,e,a)=>o(void 0,null,function*(){a&&a(d(l({},e),{customFields:!0}));const c={authKey:s.authKey},r=yield y(c,"selzy_get_all_custom_fields");if(r.success){const f=l({},s);return r.data&&(f.default||(f.default={}),f.default.customFields=r.data,t(f),a&&(a(d(l({},e),{customFields:!1})),m.success(h("Custom fileds fetched successfully")))),!0}return a&&(a(d(l({},e),{customFields:!1})),m.success(h("Custom fileds fetching failed"))),!1}),E=s=>{const t=s==null?void 0:s.selzyFields.filter(e=>e.required===!0);return t.length>0?t.map(e=>({formField:"",selzyFormField:e.key})):[{formField:"",selzyFormField:""}]},p=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField||!e.selzyFormField||!e.formField==="custom"&&!e.customValue):[]).length>0),V=(s,t,e)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!p(s)){m.error("Please map mandatory fields");return}s.field_map.length>0&&t(e)},Y=(s,t,e,a,c,r)=>{r(!0),b(s,t,e,a,c,"","",r).then(u=>{var i;u.success?(m.success((i=u.data)==null?void 0:i.msg),c(e)):m.error(u.data||u)})},j=(s,t,e,a,c,r)=>{if(!p(e)){m.error("Please map mandatory fields");return}if(p(e)==="required"){m.error("You must select email or phone in klaviyo fields");return}k({flow:s,allIntegURL:t,conf:e,navigate:a,edit:c,setIsLoading:r})};export{S as a,B as b,z as c,M as d,Y as e,E as g,C as h,V as n,j as s};
//# sourceMappingURL=bi.179.805.js.map
