var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))w.call(r,t)&&g(e,t,r[t]);if(x)for(var t of x(r))L.call(r,t)&&g(e,t,r[t]);return e};import{m as q,j as a}from"./main-579.js";import{c as F,d as v,_ as m,B}from"./bi.305.82.js";import{S as M}from"./bi.251.691.js";import{T as $}from"./bi.62.692.js";import{h as P}from"./bi.199.686.js";const D=(e,r,t,i,s,n,c,u)=>{const b=d({},r),{name:o}=e.target;e.target.value!==""?b[o]=e.target.value:delete b[o],t(d({},b))},V=(e,r,t,i)=>{t(!0);const s={api_key:e.api_key,sendy_url:e.sendy_url},n=F(s,"get_all_brands").then(c=>{if(c&&c.success){const u=d({},e);return u.default||(u.default={}),c.data&&(u.default.brandList=c.data),r(d({},u)),t(!1),"BrandList refreshed successfully"}else return t(!1),"BrandList refresh failed. please try again"});v.promise(n,{success:c=>c,error:m("Error Occurred","bit-integrations"),loading:m("Loading Brand...")})},j=(e,r,t,i)=>{t(!0);const s={api_key:e.api_key,sendy_url:e.sendy_url,brand_id:e.brand_id},n=F(s,"get_all_lists_from_sendy").then(c=>{if(c&&c.success){const u=d({},e);return u.default||(u.default={}),c.data&&(u.default.lists=c.data),r(d({},u)),t(!1),"Lists refreshed successfully"}else return t(!1),"Lists refresh failed. please try again"});v.promise(n,{success:c=>c,error:m("Error Occurred","bit-integrations"),loading:m("Loading Lists...")})},T=e=>{const r=e==null?void 0:e.subscriberFields.filter(t=>t.required===!0);return r.length>0?r.map(t=>({formField:"",sendyField:t.key})):[{formField:"",sendyField:""}]},H=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.sendyField||!t.formField==="custom"&&!t.customValue):[]).length>0),N=(e,r,t)=>{const i=d({},r);i.field_map.splice(e,0,{}),t(d({},i))},f=(e,r,t)=>{const i=d({},r);i.field_map.length>1&&i.field_map.splice(e,1),t(d({},i))},_=(e,r,t,i)=>{const s=d({},t);s.field_map[r][e.target.name]=e.target.value,e.target.value==="custom"&&(s.field_map[r].customValue=""),i(d({},s))};function A({i:e,formFields:r,field:t,sendyConf:i,setSendyConf:s}){var o,p;if(((o=i==null?void 0:i.field_map)==null?void 0:o.length)===1&&t.sendyField===""){const l=d({},i),h=T(l);l.field_map=h,s(l)}const n=(i==null?void 0:i.subscriberFields.filter(l=>l.required===!0))||[],c=(i==null?void 0:i.subscriberFields.filter(l=>l.required===!1))||[],u=q(B),{isPro:b}=u;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:l=>_(l,e,i,s),children:[a.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),a.jsx("optgroup",{label:"Form Fields",children:r==null?void 0:r.map(l=>a.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),a.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),a.jsx("optgroup",{label:`General Smart Codes ${b?"":"(PRO)"}`,children:b&&((p=M)==null?void 0:p.map(l=>a.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),t.formField==="custom"&&a.jsx($,{onChange:l=>P(l,e,i,s),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:m("Custom Value","bit-integrations"),formFields:r}),a.jsxs("select",{className:"btcd-paper-inp",disabled:e<n.length,name:"sendyField",value:e<n?n[e].label||"":t.sendyField||"",onChange:l=>_(l,e,i,s),children:[a.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),e<n.length?a.jsx("option",{value:n[e].key,children:n[e].label},n[e].key):c.map(({key:l,label:h})=>a.jsx("option",{value:l,children:h},l))]})]}),e>=n.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>N(e,i,s),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>f(e,i,s),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:e,handleInput:r,sendyConf:t,setSendyConf:i,isLoading:s,setIsLoading:n,setSnackbar:c}){var b,o;const u=p=>{const l=d({},t),{name:h}=p.target;p.target.value!==""?l[h]=p.target.value:delete l[h],h==="brand_id"&&j(l,i,n),i(d({},l))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:m("Brand:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"brand_id",value:t.brand_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:m("Select Brand","bit-integrations")}),((b=t==null?void 0:t.default)==null?void 0:b.brandList)&&t.default.brandList.map(({brandId:p,brandName:l})=>a.jsx("option",{value:p,children:l},p))]}),a.jsx("button",{onClick:()=>V(t,i,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All List","bit-integrations")}'`},type:"button",disabled:s,children:"↻"}),a.jsx("br",{}),a.jsx("br",{}),(t==null?void 0:t.brand_id)&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:m("List:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"list_id",value:t.list_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:m("Select List","bit-integrations")}),((o=t==null?void 0:t.default)==null?void 0:o.lists)&&t.default.lists.map(({listId:p,listName:l})=>a.jsx("option",{value:p,children:l},p))]}),a.jsx("button",{onClick:()=>j(t,i,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Fetch All List","bit-integrations")}'`},type:"button",disabled:s,children:"↻"})]}),a.jsx("br",{}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:m("Field Map","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:m("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:m("Sendy Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((p,l)=>a.jsx(A,{i:l,field:p,sendyConf:t,formFields:e,setSendyConf:i,setSnackbar:c},`rp-m-${l+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>N(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{})]})}export{J as S,H as c,D as h};
//# sourceMappingURL=bi.532.766.js.map
