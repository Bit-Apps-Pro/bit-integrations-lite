var T=Object.defineProperty;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(l,d,e)=>d in l?T(l,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[d]=e,p=(l,d)=>{for(var e in d||(d={}))k.call(d,e)&&y(l,e,d[e]);if(w)for(var e of w(d))A.call(d,e)&&y(l,e,d[e]);return l};import{j as s,m as $,L}from"./main-579.js";import{c as _,_ as r,a6 as q,B as M,a7 as F}from"./bi.305.82.js";import{h as R,a as V}from"./bi.199.686.js";import{T as O}from"./bi.718.684.js";import{S}from"./bi.251.691.js";import{T as B}from"./bi.62.692.js";const I=(l,d,e,t)=>{e(!0),_({},"autonami_lists_and_tags").then(a=>{if(a&&a.success){const n=p({},l);n.default||(n.default={}),a.data.autonamiList&&(n.default.autonamiList=a.data.autonamiList),a.data.autonamiTags&&(n.default.autonamiTags=a.data.autonamiTags),t({show:!0,msg:r("Autonami lists and tags refreshed","bit-integrations")}),d(p({},n))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?t({show:!0,msg:`${r("Autonami lists and tags refresh failed Cause:","bit-integrations")}${a.data.data||a.data}. ${r("please try again","bit-integrations")}`}):t({show:!0,msg:r("Autonami lists and tags refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},P=(l,d,e,t,a=!1)=>{_({},"autonami_fields").then(n=>{if(n&&n.success){const m=p({},l);if(m.default||(m.default={}),n.data.autonamiFields){if(m.default.fields=n.data.autonamiFields,!a){const{fields:x}=m.default;m.field_map=Object.values(x).filter(g=>g.required).map(g=>({formField:"",autonamiField:g.key,required:!0}))}t({show:!0,msg:r("Autonami fields refreshed","bit-integrations")})}else t({show:!0,msg:r("No Autonami fields found. Try changing the header row number or try again","bit-integrations")});d(p({},m))}else t({show:!0,msg:r("Autonami fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},W=(l,d,e)=>{const t=p({},d);t.name=l.target.value,e(p({},t))},X=l=>!((l!=null&&l.field_map?l.field_map.filter(e=>!e.formField&&e.autonamiField&&e.required):[]).length>0);function D({autonamiConf:l,setAutonamiConf:d}){var t;const e=(a,n)=>{const m=p({},l);n==="exists"&&(a.target.checked?m.actions.skip_if_exists=!0:delete m.actions.skip_if_exists),d(p({},m))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(q,{checked:((t=l.actions)==null?void 0:t.skip_if_exists)||!1,onChange:a=>e(a,"exists"),className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:r("Skip exist Contact","bit-integrations"),subTitle:r("Skip if contact already exist in Autonami","bit-integrations")})})}function E({i:l,formFields:d,field:e,autonamiConf:t,setAutonamiConf:a}){var h,f,N,v;const n=e.required,m=((h=t==null?void 0:t.default)==null?void 0:h.fields)&&Object.values((f=t==null?void 0:t.default)==null?void 0:f.fields).filter(i=>!i.required),x=$(M),{isPro:g}=x,o=i=>{const b=p({},t);b.field_map.splice(i,0,{}),a(b)},u=i=>{const b=p({},t);b.field_map.length>1&&b.field_map.splice(i,1),a(b)},c=(i,b)=>{const j=p({},t);j.field_map[b][i.target.name]=i.target.value,i.target.value==="custom"&&(j.field_map[b].customValue=""),a(j)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:i=>c(i,l),children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:d==null?void 0:d.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${g?"":"(PRO)"}`,children:g&&((N=S)==null?void 0:N.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),e.formField==="custom"&&s.jsx(B,{onChange:i=>R(i,l,t,a),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:d}),s.jsxs("select",{className:"btcd-paper-inp",name:"autonamiField",value:e.autonamiField,onChange:i=>c(i,l),disabled:n,children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),n?((v=t==null?void 0:t.default)==null?void 0:v.fields)&&Object.values(t.default.fields).map(i=>s.jsx("option",{value:i.key,children:i.label},`${i.key}-1`)):m&&m.map(i=>s.jsx("option",{value:i.key,children:i.label},`${i.key}-1`))]})]}),!n&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>o(l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>u(l),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(O,{})})]})]})}function Y({formID:l,formFields:d,autonamiConf:e,setAutonamiConf:t,isLoading:a,setIsLoading:n,setSnackbar:m}){var o,u;const x=c=>{const h=p({},e);h.tags=c?c.split(","):[],t(p({},h))},g=c=>{const h=p({},e);h.lists=c?c.split(","):[],t(p({},h))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Autonami Lists:","bit-integrations")}),s.jsx(F,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-5",options:((o=e==null?void 0:e.default)==null?void 0:o.autonamiList)&&Object.keys(e.default.autonamiList).map(c=>({label:e.default.autonamiList[c].title,value:e.default.autonamiList[c].id.toString()})),onChange:c=>g(c)}),s.jsx("button",{onClick:()=>I(e,t,n,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Autonami Lists And Tags","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),s.jsxs("div",{className:"flx mt-5",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Autonami Tags: ","bit-integrations")}),s.jsx(F,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-5",options:((u=e==null?void 0:e.default)==null?void 0:u.autonamiTags)&&Object.keys(e.default.autonamiTags).map(c=>({label:e.default.autonamiTags[c].title,value:e.default.autonamiTags[c].id.toString()})),onChange:c=>x(c)})]}),a&&s.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:r("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>P(e,t,n,m,!0),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Autonami Fields","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Autonami Fields","bit-integrations")})})]}),e.field_map.map((c,h)=>s.jsx(E,{i:h,field:c,autonamiConf:e,formFields:d,setAutonamiConf:t},`autonami-m-${h+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>V(e.field_map.length,e,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:r("Actions","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(D,{autonamiConf:e,setAutonamiConf:t})]})}export{Y as A,X as c,P as g,W as h};
//# sourceMappingURL=bi.357.740.js.map