var y=Object.defineProperty;var i=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var s=(t,c,e)=>c in t?y(t,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[c]=e,u=(t,c)=>{for(var e in c||(c={}))S.call(c,e)&&s(t,e,c[e]);if(i)for(var e of i(c))A.call(c,e)&&s(t,e,c[e]);return t};import{m as $,j as a}from"./main-579.js";import{B as L,_ as n}from"./bi.305.82.js";import{g as k,a as N,b as F}from"./bi.659.755.js";import{S as V}from"./bi.251.691.js";import{T as q}from"./bi.62.692.js";import{h as R}from"./bi.199.686.js";const M=(t,c,e)=>{const l=u({},c);l.field_map.splice(t,0,{}),e(u({},l))},T=(t,c,e)=>{const l=u({},c);l.field_map.length>1&&l.field_map.splice(t,1),e(u({},l))},_=(t,c,e,l)=>{const b=u({},e);b.field_map[c][t.target.name]=t.target.value,t.target.value==="custom"&&(b.field_map[c].customValue=""),l(u({},b))};function P({i:t,formFields:c,field:e,wishlistConf:l,setWishlistConf:b}){var d,r;if(((d=l==null?void 0:l.field_map)==null?void 0:d.length)===1&&e.wishlistField===""){const m=u({},l),v=k(m);m.field_map=v,b(m)}const x=(l==null?void 0:l.actionName)==="level-member"?l==null?void 0:l.memberFields:(l==null?void 0:l.levelFields)||[],p=x.filter(m=>m.required===!0)||[],o=x.filter(m=>m.required===!1)||[],g=$(L),{isPro:j}=g;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:m=>_(m,t,l,b),children:[a.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a.jsx("optgroup",{label:"Form Fields",children:c==null?void 0:c.map(m=>a.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`))}),a.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),a.jsx("optgroup",{label:`General Smart Codes ${j?"":"(PRO)"}`,children:j&&((r=V)==null?void 0:r.map(m=>a.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`)))})]}),e.formField==="custom"&&a.jsx(q,{onChange:m=>R(m,t,l,b),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:c}),a.jsxs("select",{className:"btcd-paper-inp",disabled:t<p.length,name:"wishlistField",value:t<p?p[t].label||"":e.wishlistField||"",onChange:m=>_(m,t,l,b),children:[a.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t<p.length?a.jsx("option",{value:p[t].key,children:p[t].label},p[t].key):o.map(({key:m,label:v})=>a.jsx("option",{value:m,children:v},m))]})]}),t>=p.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>M(t,l,b),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>T(t,l,b),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:t,handleInput:c,wishlistConf:e,setWishlistConf:l,isLoading:b,setIsLoading:x,setSnackbar:p}){var g,j;const o=d=>{const r=u({},e),{name:m,value:v}=d.target;d.target.value!==""?(v==="level-member"?r==null||delete r.member_id:r==null||delete r.level_id,r[m]=d.target.value):delete r[m],setTimeout(()=>{r!=null&&r.field_map&&(r.field_map=[{formField:"",wishlistField:""}]),l(u({},r)),d.target.value==="level-member"?N(r,l,x):F(r,l,x)},10)};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:n("Action:","bit-integrations")}),a.jsxs("select",{onChange:o,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Action","bit-integrations")}),(e==null?void 0:e.actionLists)&&e.actionLists.map(({key:d,label:r})=>a.jsx("option",{value:d,children:r},d))]}),a.jsx("br",{}),a.jsx("br",{}),(e==null?void 0:e.actionName)&&e.actionName==="level-member"&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Levels:","bit-integrations")}),a.jsxs("select",{onChange:c,name:"level_id",value:e.level_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Level","bit-integrations")}),((g=e==null?void 0:e.default)==null?void 0:g.levellists)&&e.default.levellists.map(({id:d,name:r})=>a.jsx("option",{value:d,children:r},d))]}),a.jsx("button",{onClick:()=>N(e,l,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Level","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),(e==null?void 0:e.actionName)&&e.actionName==="member-level"&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Members:","bit-integrations")}),a.jsxs("select",{onChange:c,name:"member_id",value:e.member_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Member","bit-integrations")}),((j=e==null?void 0:e.default)==null?void 0:j.memberlists)&&e.default.memberlists.map(({id:d,name:r})=>a.jsx("option",{value:d,children:r},d))]}),a.jsx("button",{onClick:()=>F(e,l,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Members","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),a.jsx("br",{}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:n("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:n("Wish List Member Fields","bit-integrations")})})]}),((e==null?void 0:e.level_id)||(e==null?void 0:e.member_id))&&(e==null?void 0:e.field_map.map((d,r)=>a.jsx(P,{i:r,field:d,wishlistConf:e,formFields:t,setWishlistConf:l,setSnackbar:p},`rp-m-${r+9}`))),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>M(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{})]})}export{J as W};
//# sourceMappingURL=bi.810.756.js.map