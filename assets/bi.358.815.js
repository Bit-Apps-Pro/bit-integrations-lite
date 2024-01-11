var V=Object.defineProperty;var A=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var M=(a,n,l)=>n in a?V(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,h=(a,n)=>{for(var l in n||(n={}))R.call(n,l)&&M(a,l,n[l]);if(A)for(var l of A(n))$.call(n,l)&&M(a,l,n[l]);return a};import{r as F,j as t,L as p,m as P}from"./main-579.js";import{a6 as I,_ as e,f as _,a7 as r,B as L,a8 as q}from"./bi.305.82.js";import{h as G,a as m}from"./bi.199.686.js";import{p as E,g as H,a as O}from"./bi.990.816.js";import{S as B}from"./bi.251.691.js";import{T as U}from"./bi.62.692.js";function z({memberpressConf:a,setMemberpressConf:n,formFields:l}){var x,d,g;const[i,o]=F.useState(!1),[u,w]=F.useState({show:!1,action:()=>{}}),b=[{key:"complete",label:"Complete"},{key:"pending",label:"Pending"},{key:"failed",label:"Failed"},{key:"refunded",label:"Refunded"}],v=(s,y)=>{var S,k;const j=h({},a);y==="status"&&((S=s.target)!=null&&S.checked?(j.actions.status=!0,w({show:"status"})):(w({show:!1}),delete j.actions.status)),y==="gateway"&&((k=s.target)!=null&&k.checked?(j.actions.gateway=!0,w({show:"gateway"})):(w({show:!1}),delete j.actions.gateway)),n(h({},j))},N=()=>{w({show:!1})},c=(s,y)=>{const j=h({},a);y==="statusId"&&(s!==""?j[y]=s:delete j[y]),y==="gatewayId"&&(s!==""?j[y]=s:delete j[y]),n(h({},j))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(I,{checked:((x=a==null?void 0:a.actions)==null?void 0:x.status)||!1,onChange:s=>v(s,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:e("Add Status","bit-integrations"),subTitle:e("Add status of Membership","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:e("Ok","bit-integrations"),show:u.show==="status",close:N,action:N,title:e("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Status ","bit-integrations")}),i?t.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(r,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.statusId,options:b.map(s=>({label:s.label,value:s.key})),onChange:s=>c(s,"statusId"),singleSelect:!0})})]}),t.jsx(I,{checked:((d=a==null?void 0:a.actions)==null?void 0:d.gateway)||!1,onChange:s=>v(s,"gateway"),className:"wdt-200 mt-4 mr-2",value:"gateway",title:e("Add Type","bit-integrations"),subTitle:e("Add Type","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:e("Ok","bit-integrations"),show:u.show==="gateway",close:N,action:N,title:e("Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Gateway","bit-integrations")}),i?t.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(r,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.gatewayId,options:((g=a==null?void 0:a.default)==null?void 0:g.allPaymentMethods)&&a.default.allPaymentMethods.map(s=>({label:s.paymentTitle,value:s.paymentId})),onChange:s=>c(s,"gatewayId"),singleSelect:!0}),t.jsx("button",{onClick:()=>E(a,n,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Payment Gateway"'},type:"button",disabled:i,children:"↻"})]})]})]})}const D=(a,n,l)=>{const i=h({},n);i.field_map.splice(a,0,{}),l(h({},i))},J=(a,n,l)=>{const i=h({},n);i.field_map.length>1&&i.field_map.splice(a,1),l(h({},i))},T=(a,n,l,i)=>{const o=h({},l);o.field_map[n][a.target.name]=a.target.value,a.target.value==="custom"&&(o.field_map[n].customValue=""),i(h({},o))};function K({i:a,formFields:n,field:l,memberpressConf:i,setMemberpressConf:o}){var N;F.useEffect(()=>{var c;if(((c=i==null?void 0:i.field_map)==null?void 0:c.length)===1&&l.memberpressFormField===""){const x=h({},i),d=H(x);x.field_map=d,o(x)}},[]);const u=(i==null?void 0:i.memberpressFields.filter(c=>c.required===!0))||[],w=(i==null?void 0:i.memberpressFields.filter(c=>c.required===!1))||[],b=P(L),{isPro:v}=b;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:c=>T(c,a,i,o),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),t.jsx("optgroup",{label:"Form Fields",children:n==null?void 0:n.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),t.jsx("option",{value:"custom",children:e("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`General Smart Codes ${v?"":"(PRO)"}`,children:v&&((N=B)==null?void 0:N.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),l.formField==="custom"&&t.jsx(U,{onChange:c=>G(c,a,i,o),label:e("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:e("Custom Value","bit-integrations"),formFields:n}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<u.length,name:"memberpressFormField",value:a<u.length?u[a].key||"":l.memberpressFormField||"",onChange:c=>T(c,a,i,o),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),a<u.length?t.jsx("option",{value:u[a].key,children:u[a].label},u[a].key):w.map(({key:c,label:x})=>t.jsx("option",{value:c,children:x},c))]})]}),a>=u.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>D(a,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>J(a,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function tt({formFields:a,handleInput:n,memberpressConf:l,setMemberpressConf:i,isLoading:o,setIsLoading:u,setSnackbar:w,allIntegURL:b,isInfo:v,edit:N}){var x;const c=(d,g)=>{const s=h({},l);g==="selectedMembership"&&(d!==""?s[g]=d:delete s[g]),i(h({},s))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:e("Actions:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"mainAction",value:l==null?void 0:l.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:e("Select Actions","bit-integrations")}),(l==null?void 0:l.allActions)&&l.allActions.map(({key:d,label:g})=>t.jsx("option",{value:d,children:g},d))]}),t.jsx("br",{}),t.jsx("br",{}),["1","2"].includes(l==null?void 0:l.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Membership: ","bit-integrations")}),t.jsx(r,{className:"w-5",defaultValue:l==null?void 0:l.selectedMembership,options:((x=l==null?void 0:l.default)==null?void 0:x.allMemberShips)&&l.default.allMemberShips.map(d=>({label:d.membershipTitle,value:d.membershipId.toString()})),onChange:d=>c(d,"selectedMembership"),singleSelect:!0}),t.jsx("button",{onClick:()=>O(l,i,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${e("Fetch All Membership","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.jsx("br",{}),t.jsx("br",{}),o&&t.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[["1"].includes(l==null?void 0:l.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:e("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("Memberpress Fields","bit-integrations")})})]}),l.field_map.map((d,g)=>t.jsx(K,{i:g,field:d,memberpressConf:l,formFields:a,setMemberpressConf:i},`dash-m-${g+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>m(l.field_map.length,l,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("br",{}),t.jsx("br",{}),l.mainAction==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:e("Actions","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(z,{memberpressConf:l,setMemberpressConf:i,formFields:a})]})]}),t.jsx("br",{}),t.jsx(q,{note:"Some integrations will only work for logged-in users."})]})}export{tt as M};
//# sourceMappingURL=bi.358.815.js.map
