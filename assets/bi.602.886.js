var $=Object.defineProperty;var w=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(t,s,d)=>s in t?$(t,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[s]=d,n=(t,s)=>{for(var d in s||(s={}))q.call(s,d)&&y(t,d,s[d]);if(w)for(var d of w(s))S.call(s,d)&&y(t,d,s[d]);return t};import{j as e,m as V,L as g}from"./main-579.js";import{a6 as L,i as r,B as T}from"./bi.305.82.js";import{a as o}from"./bi.199.686.js";import{g as A,r as B,a as I}from"./bi.394.885.js";import{T as P}from"./bi.718.684.js";import{S as U}from"./bi.251.691.js";import{M as E}from"./bi.333.690.js";function G({campaignMonitorConf:t,setCampaignMonitorConf:s}){var i;const d=(c,m)=>{const a=n({},t);m==="update"&&(c.target.checked?a.actions.update=!0:delete a.actions.update),s(n({},a))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(L,{checked:((i=t.actions)==null?void 0:i.update)||!1,onChange:c=>d(c,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:r("Update CampaignMonitor","bit-integrations"),subTitle:r("Update Responses with CampaignMonitor existing email?","bit-integrations")})})}function H({i:t,formFields:s,field:d,campaignMonitorConf:i,setCampaignMonitorConf:c}){var v,_;let m=i.subscriberFields;const a=m.filter(l=>l.required===!0)||[],p=[...m.filter(l=>l.required===!1)||[],...(i==null?void 0:i.customFields)||[]],b=V(T),{isPro:h}=b;((v=i==null?void 0:i.field_map)==null?void 0:v.length)===1&&d.campaignMonitorField===""&&c(l=>(l.field_map=A(l),l));const j=l=>{const u=n({},i);u.field_map.splice(l,0,{}),c(u)},R=l=>{const u=n({},i);u.field_map.length>1&&u.field_map.splice(l,1),c(u)},N=(l,u)=>{const x=n({},i);x.field_map[u][l.target.name]=l.target.value,l.target.value==="custom"&&(x.field_map[u].customValue=""),c(x)},k=(l,u)=>{const x=n({},i);x.field_map[u].customValue=l.target.value,c(x)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:l=>N(l,t),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"List Fields",children:s==null?void 0:s.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((_=U)==null?void 0:_.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),d.formField==="custom"&&e.jsx(E,{onChange:l=>k(l,t),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:r("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"campaignMonitorField",value:t<a.length?a[t].key||"":d.campaignMonitorField||"",onChange:l=>N(l,t),disabled:t<a.length,children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),t<a.length?e.jsx("option",{value:a[t].key,children:a[t].label},a[t].key):p.map(({key:l,label:u})=>e.jsx("option",{value:l,children:u},l))]})]}),t>=a.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>j(t),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>R(t),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(P,{})})]})]})}function Y({formFields:t,campaignMonitorConf:s,setCampaignMonitorConf:d,isLoading:i,setIsLoading:c,setSnackbar:m}){var F,p;const a=b=>{const h=b.target.value,j=n({},s);h&&(j.listId=h),d(j),I(j,d,c,m)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Subscriber List:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:a,children:[e.jsx("option",{value:"",children:r("Select Subscriber List","bit-integrations")}),((F=s==null?void 0:s.default)==null?void 0:F.campaignMonitorLists)&&s.default.campaignMonitorLists.map(b=>e.jsx("option",{value:b.listId,children:b.listName},`${b.listId}`))]}),e.jsx("button",{onClick:()=>B(s,d,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CampaignMonitor campaign"'},type:"button",disabled:i,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),i&&e.jsx(g,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:r("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>I(s,d,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh CampaignMonitor Field","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),!i&&((s==null?void 0:s.listId)||((p=s==null?void 0:s.default)==null?void 0:p.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("CampaignMonitor Fields","bit-integrations")})})]}),s.field_map.map((b,h)=>e.jsx(H,{i:h,field:b,campaignMonitorConf:s,formFields:t,setCampaignMonitorConf:d},`CampaignMonitor-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o(s.field_map.length,s,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(G,{campaignMonitorConf:s,setCampaignMonitorConf:d})]})]})}export{Y as C};
//# sourceMappingURL=bi.602.886.js.map