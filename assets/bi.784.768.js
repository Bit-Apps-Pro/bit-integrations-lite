var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var j=(e,l,c)=>l in e?v(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,o=(e,l)=>{for(var c in l||(l={}))F.call(l,c)&&j(e,c,l[c]);if(p)for(var c of p(l))y.call(l,c)&&j(e,c,l[c]);return e};import{r as T,j as t,L as N,m as M}from"./main-579.js";import{a6 as I,_ as d,f as S,a7 as V,B as $}from"./bi.305.82.js";import{g as f,a as A}from"./bi.151.767.js";import{S as R}from"./bi.251.691.js";import{T as O}from"./bi.62.692.js";import{h as q}from"./bi.199.686.js";function L({keapConf:e,setKeapConf:l,loading:c,setLoading:a}){var h;const[n,s]=T.useState({show:!1,action:()=>{}}),m=(r,i)=>{var b;const u=o({},e);i==="tag"&&((b=r.target)!=null&&b.checked?(f(e,l,a),u.actions.tags=!0):(s({show:!1}),delete u.actions.tags),s({show:"tag"})),i==="update"&&(r.target.checked?u.actions.update=!0:delete u.actions.update),i==="doubleOptIn"&&(r.target.checked?u.actions.doubleOptIn=!0:delete u.actions.doubleOptIn),l(o({},u))},g=()=>{s({show:!1})},x=r=>{const i=o({},e);i.selectedTags=r,l(o({},i))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(I,{checked:(e==null?void 0:e.selectedTags)||!1,onChange:r=>m(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:d("Add Tags","bit - integrations"),subTitle:d("Add Tags")}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:d("Ok","bit-integrations"),show:n.show==="tag",close:g,action:g,title:d("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:d("Select tags","bit-integrations")}),c.tags?t.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(V,{options:(h=e==null?void 0:e.tags)==null?void 0:h.map(r=>({label:r.name,value:r.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTags,onChange:r=>x(r)}),t.jsx("button",{onClick:()=>f(e,l,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${d("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const Q=e=>{const l={},a=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");a&&a.forEach(n=>{const s=n.split("=");s[1]&&(l[s[0]]=s[1])}),localStorage.setItem(`__${e}`,JSON.stringify(l)),window.close()},w=(e,l,c,a,n)=>{const s=o({},l);n?a?s.relatedlists[n-1].upload_field_map.splice(e,0,{}):s.relatedlists[n-1].field_map.splice(e,0,{}):a?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),c(o({},s))},E=(e,l,c,a,n)=>{const s=o({},l);n?a?s.relatedlists[n-1].upload_field_map.length>1&&s.relatedlists[n-1].upload_field_map.splice(e,1):s.relatedlists[n-1].field_map.length>1&&s.relatedlists[n-1].field_map.splice(e,1):a?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),c(o({},s))},_=(e,l,c,a,n,s)=>{const m=o({},c);s?n?m.relatedlists[s-1].upload_field_map[l][e.target.name]=e.target.value:m.relatedlists[s-1].field_map[l][e.target.name]=e.target.value:n?m.upload_field_map[l][e.target.name]=e.target.value:m.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(s?m.relatedlists[s-1].field_map[l].customValue="":m.field_map[l].customValue=""),a(o({},m))};function P({i:e,formFields:l,field:c,keapConf:a,setKeapConf:n}){var h,r;if(((h=a==null?void 0:a.field_map)==null?void 0:h.length)===1&&c.keapField===""){const i=o({},a),u=A(i);i.field_map=u,n(i)}const s=(a==null?void 0:a.contactFields.filter(i=>i.required===!0))||[],m=(a==null?void 0:a.contactFields.filter(i=>i.required===!1))||[],g=M($),{isPro:x}=g;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:i=>_(i,e,a,n),children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),t.jsx("optgroup",{label:"Form Fields",children:l==null?void 0:l.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),t.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`General Smart Codes ${x?"":"(PRO)"}`,children:x&&((r=R)==null?void 0:r.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),c.formField==="custom"&&t.jsx(O,{onChange:i=>q(i,e,a,n),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:l}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<s.length,name:"keapField",value:e<s.length?s[e].key||"":c.keapField||"",onChange:i=>_(i,e,a,n),children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e<s.length?t.jsx("option",{value:s[e].key,children:s[e].label},s[e].key):m.map(({key:i,label:u})=>t.jsx("option",{value:i,children:u},i))]})]}),e>=s.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>w(e,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>E(e,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({formID:e,formFields:l,handleInput:c,keapConf:a,setKeapConf:n,isLoading:s,setIsLoading:m,setSnackbar:g,a:x}){return t.jsxs(t.Fragment,{children:[s&&t.jsx(N,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("Keap Fields","bit-integrations")})})]}),a.field_map.map((h,r)=>t.jsx(P,{i:r,field:h,keapConf:a,formFields:l,setKeapConf:n},`keap-m-${r+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>w(a.field_map.length,a,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:d("Actions","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(L,{keapConf:a,setKeapConf:n,formFields:l,loading:s,setLoading:m}),t.jsx("br",{}),t.jsx("br",{})]})]})}export{U as K,Q as s};
//# sourceMappingURL=bi.784.768.js.map
