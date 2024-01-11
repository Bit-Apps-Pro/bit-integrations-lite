var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(c,d,o)=>d in c?z(c,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[d]=o,j=(c,d)=>{for(var o in d||(d={}))B.call(d,o)&&I(c,o,d[o]);if(w)for(var o of w(d))H.call(d,o)&&I(c,o,d[o]);return c};import{r,b as E,m as J,u as K,i as Q,j as e}from"./main-579.js";import{g as V,$ as X,h as Y,c as f,e as Z,i as n}from"./bi.305.82.js";import{c as $,s as ee}from"./bi.199.686.js";import{P as g,a as v,c as te,b as se}from"./bi.61.721.js";import{p as ie}from"./bi.684.722.js";import{I as ae}from"./bi.463.687.js";import{E as ne,a as le}from"./bi.557.685.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";import"./bi.333.690.js";function ve({allIntegURL:c}){var N,y,P;const[d,o]=r.useState([]),[M,T]=r.useState([]),[s,p]=E(V),[u,O]=E(X),h=J(Y);r.useState([]),K();const D=Q(),[A,_]=r.useState([]),[q,F]=r.useState([]),[L,m]=r.useState({show:!1}),[R,U]=r.useState(!1);r.useEffect(()=>{f({},"pods/list",null,"GET").then(t=>{var i,l;t!=null&&t.success&&t!==void 0&&(o(Object.values((i=t.data)==null?void 0:i.post_types)),T((l=t.data)==null?void 0:l.users))}),f({post_type:s==null?void 0:s.post_type},"pods/fields").then(t=>{var i,l;t!=null&&t.success&&t!==void 0&&(_(Object.values((i=t==null?void 0:t.data)==null?void 0:i.podFields)),F(Object.values((l=t==null?void 0:t.data)==null?void 0:l.podFiles)))})},[]);const x=(t,i,l)=>{const a=j({},s);l?a[t]=Number(i):a[t]=i,p(a)},W=(t,i)=>{const l=j({},s);l[t]=i,f({post_type:i},"pods/fields").then(a=>{var C,S,k;a!=null&&a.success&&a!==void 0&&(_(Object.values((C=a==null?void 0:a.data)==null?void 0:C.podFields)),F(Object.values((S=a==null?void 0:a.data)==null?void 0:S.podFiles)),a!=null&&a.data&&(l.pod_map=Object.values(a.data).filter(b=>b.required).map(b=>({formField:"",podField:b.key,required:b.required})),((k=l==null?void 0:l.pod_map)==null?void 0:k.length)<1&&(l.pod_map=[{}])),p(l))})},G=()=>{if(!te(s)){m({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(!se(s)){m({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}ee({flow:u,setFlow:O,allIntegURL:c,conf:s,navigate:D,edit:1,setIsLoading:U,setSnackbar:m})};return e.jsxs("div",{style:{width:900},children:[e.jsx(Z,{snack:L,setSnackbar:m}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name ","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>x(t.target.name,t.target.value),name:"name",value:s.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),e.jsx("br",{}),e.jsx("br",{}),!$(u.triggered_entity)&&e.jsx(ne,{setSnackbar:m,className:"d-blk"}),$(u.triggered_entity)&&e.jsx(le,{setSnackbar:m}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Post Type","bit-integrations")})}),e.jsxs("select",{name:"post_type",onChange:t=>W(t.target.name,t.target.value),value:s==null?void 0:s.post_type,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:"Select Type"}),d.map((t,i)=>e.jsx("option",{value:t.name,children:t.label},`pod-${i*2}`))]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Post Status","bit-integrations")})}),e.jsxs("select",{name:"post_status",onChange:t=>x(t.target.name,t.target.value),value:s==null?void 0:s.post_status,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:n("Select Status","bit-integrations")}),e.jsx("option",{value:"publish",children:"Publish"}),e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"inherit",children:"Inherit"}),e.jsx("option",{value:"auto-draft",children:"Auto-Draft"}),e.jsx("option",{value:"private ",children:"Private"}),e.jsx("option",{value:"pending",children:"Pending"})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Comment Status","bit-integrations")})}),e.jsxs("select",{name:"comment_status",onChange:t=>x(t.target.name,t.target.value),value:s==null?void 0:s.comment_status,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:n("Select Status","bit-integrations")}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Author","bit-integrations")})}),e.jsxs("select",{name:"post_author",onChange:t=>x(t.target.name,t.target.value),value:s==null?void 0:s.post_author,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:n("Select Author","bit-integrations")}),e.jsx("option",{value:"logged_in_user",children:"Logged In User"}),M.map((t,i)=>e.jsx("option",{value:t.ID,children:t.display_name},`pod-${i*2}`))]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:"Post Fields Mapping"})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Post Fields","bit-integrations")})})]})]}),(N=s==null?void 0:s.post_map)==null?void 0:N.map((t,i)=>e.jsx(g,{i,type:"post",field:t,formFields:h,podsConf:s,setPodsConf:p,podFields:ie,fieldType:"fields"},`analytics-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>v("post_map",s.post_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:"Pod Fields Mapping"})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Pod Fields","bit-integrations")})})]})]}),(y=s==null?void 0:s.pod_field_map)==null?void 0:y.map((t,i)=>e.jsx(g,{i,type:"pod",field:t,formFields:h,podsConf:s,setPodsConf:p,podFields:A,fieldType:"fields"},`analytics-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>v("pod_field_map",s.pod_field_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:"Pod File Upload Mapping"})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Pod Fields","bit-integrations")})})]})]}),(P=s==null?void 0:s.pod_file_map)==null?void 0:P.map((t,i)=>e.jsx(g,{i,type:"podFile",field:t,formFields:h,podsConf:s,setPodsConf:p,podFields:q,fieldType:"file"},`analytics-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>v("pod_file_map",s.pod_file_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx(ae,{edit:!0,saveConfig:G,isLoading:R,dataConf:s,setDataConf:p,formFields:h})]})}export{ve as default};
//# sourceMappingURL=bi.483.96.js.map
