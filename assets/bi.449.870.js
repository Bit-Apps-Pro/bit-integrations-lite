var g=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var o=(e,a,t)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&o(e,t,a[t]);if(d)for(var t of d(a))_.call(a,t)&&o(e,t,a[t]);return e};import{c as m,d as r,_ as c}from"./bi.305.82.js";const p=(e,a,t,f,s,n)=>{const l=i({},a),{name:u}=e.target;e.target.value!==""?l[u]=e.target.value:delete l[u],l[e.target.name]=e.target.value,t(i({},l))},y=(e,a,t,f)=>{t(!0),m(null,"fetch_all_mail_mint_list").then(s=>{if(s&&s.success){a(n=>{const l=i({},n);return l.default||(l.default={}),s.data&&(l.default.allLists=s.data),l}),t(!1),r.success(c("All list fetched successfully","bit-integrations"));return}t(!1),r.error(c("Mail mint list fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},M=(e,a,t,f)=>{t(!0),m(null,"fetch_all_mail_mint_tags").then(s=>{if(s&&s.success){a(n=>{const l=i({},n);return l.default||(l.default={}),s.data&&(l.default.allTags=s.data),l}),t(!1),r.success(c("All tags fetched successfully","bit-integrations"));return}t(!1),r.error(c("Mail Mint fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},k=e=>{const a=e==null?void 0:e.mailMintContactFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",mailMintFormField:t.key})):[{formField:"",mailMintFormField:""}]};export{y as a,M as b,k as g,p as h};
//# sourceMappingURL=bi.449.870.js.map
