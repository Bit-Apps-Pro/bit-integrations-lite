var N=Object.defineProperty;var S=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var k=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,x=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&k(s,t,e[t]);if(S)for(var t of S(e))O.call(e,t)&&k(s,t,e[t]);return s};import{i as w,r as i,j as a}from"./main-579.js";import{e as F,_ as E,d as c}from"./bi.305.82.js";import{S as L}from"./bi.703.923.js";import{e as P}from"./bi.199.686.js";import{I as T}from"./bi.463.687.js";import A from"./bi.37.276.js";import{h as B,c as D}from"./bi.852.688.js";import{O as M}from"./bi.345.689.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function te({formFields:s,setFlow:e,flow:t,allIntegURL:f}){const u=w(),[C,p]=i.useState(!1),[b,h]=i.useState({channel:!1,field:!1,auth:!1}),[r,y]=i.useState(1),[v,m]=i.useState({show:!1}),_=[{key:"email",label:"Email",required:!1},{key:"phone_number",label:"Phone Number",required:!1},{key:"firstName",label:"First Name",required:!1},{key:"lastName",label:"Last Name",required:!1},{key:"country",label:"Country",required:!1},{key:"countryCode",label:"Country Code",required:!1},{key:"state",label:"State",required:!1},{key:"city",label:"City",required:!1},{key:"address",label:"Address",required:!1},{key:"postalCode",label:"Postal Code",required:!1},{key:"gender",label:"Gender",required:!1},{key:"birthdate",label:"Birth Date",required:!1}],[n,o]=i.useState({name:"OmniSend",type:"OmniSend",api_key:"",field_map:[{formField:"",omniSendFormField:""}],channels:"",channel_types:[],email_status:"",sms_status:"",omniSend_fields:_,actions:{}}),j=()=>{p(!0),P(t,e,f,n,u,"","",p).then(d=>{var g;d.success?(c.success((g=d.data)==null?void 0:g.msg),u(f)):c.error(d.data||d)})},q=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!D(n)){c.error("Please map mandatory fields");return}n.field_map.length>0&&y(l)};return a.jsxs("div",{children:[a.jsx(F,{snack:v,setSnackbar:m}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(L,{step:3,active:r})}),a.jsx(A,{omniSendConf:n,setOmniSendConf:o,step:r,setstep:y,loading:b,setLoading:h,setSnackbar:m}),a.jsxs("div",{className:"btcd-stp-page",style:x({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{formFields:s,handleInput:l=>B(l,n,o),omniSendConf:n,setOmniSendConf:o,loading:b,setLoading:h,setSnackbar:m}),a.jsxs("button",{onClick:()=>q(3),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(T,{step:r,saveConfig:()=>j(),isLoading:C,dataConf:n,setDataConf:o,formFields:s})]})}export{te as default};
//# sourceMappingURL=bi.751.407.js.map
