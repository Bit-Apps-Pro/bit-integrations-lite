var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var k=(a,t,s)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,v=(a,t)=>{for(var s in t||(t={}))N.call(t,s)&&k(a,s,t[s]);if(x)for(var s of x(t))w.call(t,s)&&k(a,s,t[s]);return a};import{i as F,r,j as i}from"./main-579.js";import{e as C,_ as E,d as u}from"./bi.305.82.js";import{S as L}from"./bi.703.923.js";import{e as T}from"./bi.199.686.js";import{I as z}from"./bi.463.687.js";import A from"./bi.888.283.js";import{h as B,c as P}from"./bi.261.822.js";import{M as R}from"./bi.50.823.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function te({formFields:a,setFlow:t,flow:s,allIntegURL:m}){const p=F(),[j,f]=r.useState(!1),[b,g]=r.useState({auth:!1,groups:!1,customFields:!1}),[o,y]=r.useState(1),[S,c]=r.useState({show:!1}),q=[{key:"email",label:"Email",required:!0},{key:"name",label:"Name",required:!1},{key:"address",label:"Address",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"country",label:"Country",required:!1},{key:"birthday",label:"Birthday",required:!1},{key:"website",label:"Website",required:!1},{key:"locale",label:"Locale",required:!1},{key:"time_zone",label:"Time Zone",required:!1}],[e,l]=r.useState({name:"MailRelay",type:"MailRelay",auth_token:"",domain:"",field_map:[{formField:"",mailRelayFormField:""}],staticFields:q,status:"",customFields:[],groups:[],selectedGroups:[],actions:{}}),M=()=>{f(!0),T(s,t,m,e,p,"","",f).then(d=>{var h;d.success?(u.success((h=d.data)==null?void 0:h.msg),p(m)):u.error(d.data||d)})},_=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!P(e)){u.error("Please map mandatory fields");return}e.field_map.length>0&&y(n)};return i.jsxs("div",{children:[i.jsx(C,{snack:S,setSnackbar:c}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:o})}),i.jsx(A,{mailRelayConf:e,setMailRelayConf:l,step:o,setStep:y,loading:b,setLoading:g,setSnackbar:c}),i.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(R,{formFields:a,handleInput:n=>B(n,e,l),mailRelayConf:e,setMailRelayConf:l,loading:b,setLoading:g,setSnackbar:c}),(e==null?void 0:e.status)&&i.jsxs("button",{onClick:()=>_(3),disabled:!(e!=null&&e.status),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.status)&&i.jsx(z,{step:o,saveConfig:()=>M(),isLoading:j,dataConf:e,setDataConf:l,formFields:a})]})}export{te as default};
//# sourceMappingURL=bi.895.414.js.map