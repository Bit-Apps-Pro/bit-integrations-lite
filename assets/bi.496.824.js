var F=Object.defineProperty;var g=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(s,r,t)=>r in s?F(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t,d=(s,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(s,t,r[t]);if(g)for(var t of g(r))w.call(r,t)&&p(s,t,r[t]);return s};import{j as e,m as y,r as _,L as I}from"./main-579.js";import{a6 as k,_ as i,B as $,ad as A}from"./bi.305.82.js";import{h as O,a as G}from"./bi.199.686.js";import{g as S,f as v,a as T}from"./bi.63.825.js";import{S as V}from"./bi.251.691.js";import{T as q}from"./bi.62.692.js";function L({mailupConf:s,setMailupConf:r}){var l;const t=a=>{const n=d({},s);a.target.checked?n.actions.doubleOptIn=!0:delete n.actions.doubleOptIn,r(d({},n))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(k,{checked:((l=s.actions)==null?void 0:l.doubleOptIn)||!1,onChange:a=>t(a),className:"wdt-200 mt-4 mr-2",value:"doubleOptIn",title:i("Double Opt-in","bit-integrations"),subTitle:i("Add Double Opt-in","bit-integrations")})})}const R=(s,r,t)=>{const l=d({},r);l.field_map.splice(s,0,{}),t(d({},l))},E=(s,r,t)=>{const l=d({},r);l.field_map.length>1&&l.field_map.splice(s,1),t(d({},l))},N=(s,r,t,l)=>{const a=d({},t);a.field_map[r][s.target.name]=s.target.value,s.target.value==="custom"&&(a.field_map[r].customValue=""),l(d({},a))};function B({i:s,formFields:r,field:t,mailupConf:l,setMailupConf:a}){var j,m;if(((j=l==null?void 0:l.field_map)==null?void 0:j.length)===1&&t.mailupFormField===""){const c=d({},l),x=S(c);c.field_map=x,a(c)}const n=(l==null?void 0:l.staticFields.filter(c=>c.required===!0))||[],h=(l==null?void 0:l.staticFields.filter(c=>c.required===!1))||[],b=y($),{isPro:o}=b;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:c=>N(c,s,l,a),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:r==null?void 0:r.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${o?"":"(PRO)"}`,children:o&&((m=V)==null?void 0:m.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),t.formField==="custom"&&e.jsx(q,{onChange:c=>O(c,s,l,a),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<n.length,name:"mailupFormField",value:s<n.length?n[s].key||"":t.mailupFormField||"",onChange:c=>N(c,s,l,a),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),s<n.length?e.jsx("option",{value:n[s].key,children:n[s].label},n[s].key):h.map(({key:c,label:x})=>e.jsx("option",{value:c,children:x},c))]})]}),s>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>R(s,l,a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>E(s,l,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({formFields:s,handleInput:r,mailupConf:t,setMailupConf:l,isLoading:a,setIsLoading:n,setSnackbar:h}){return _.useEffect(()=>{t!=null&&t.listId&&v(t,l,n,h)},[t==null?void 0:t.listId]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select List:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select List","bit-integrations")}),(t==null?void 0:t.allList)&&t.allList.map(({idList:b,name:o})=>e.jsx("option",{value:b,children:o},b))]}),e.jsx("button",{onClick:()=>T(t,l,n,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All List","bit-integrations")}'`},type:"button",disabled:a,children:"↻"}),e.jsx("br",{}),a&&e.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listId)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("b",{className:"wdt-200 d-in-b",children:[i("Groups:","bit-integrations"),e.jsx(A,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["If you want to assign a subscriber to a group then select a group otherwise leave it blank.",e.jsx("br",{})]})})]}),e.jsxs("select",{onChange:r,name:"groupId",value:t.groupId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select Group","bit-integrations")}),(t==null?void 0:t.allGroup)&&t.allGroup.map(({idGroup:b,name:o})=>e.jsx("option",{value:b,children:o},b))]}),e.jsx("button",{onClick:()=>v(t,l,n,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All Groups","bit-integrations")}'`},type:"button",disabled:a,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Mailup Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((b,o)=>e.jsx(B,{i:o,field:b,mailupConf:t,formFields:s,setMailupConf:l,setSnackbar:h},`rp-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>G(t.field_map.length,t,l,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(L,{mailupConf:t,setMailupConf:l,formFields:s})]})]})}export{Q as M};
//# sourceMappingURL=bi.496.824.js.map
