var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,s,a)=>s in t?w(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,q=(t,s)=>{for(var a in s||(s={}))F.call(s,a)&&g(t,a,s[a]);if(h)for(var a of h(s))C.call(s,a)&&g(t,a,s[a]);return t};import{i as D,r as i,j as r}from"./main-579.js";import{e as E,_ as P,d as u}from"./bi.305.82.js";import{S as A}from"./bi.703.923.js";import{e as T}from"./bi.199.686.js";import{I as B}from"./bi.463.687.js";import M from"./bi.566.315.js";import{s as z,h as G,c as x}from"./bi.525.883.js";import{L as H}from"./bi.294.884.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function se({formFields:t,setFlow:s,flow:a,allIntegURL:f}){const b=D(),[m,l]=i.useState(!1),[_,S]=i.useState({}),[o,y]=i.useState(1),[v,p]=i.useState({show:!1}),N=[{key:"name",label:"Name",required:!0}],j=[{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"email",label:"Email",required:!0},{key:"mobile_phone",label:"Mobile Phone",required:!1},{key:"home_phone",label:"Home Phone",required:!1},{key:"office_phone",label:"Office Phone",required:!1},{key:"fax",label:"Fax",required:!1},{key:"company",label:"Company",required:!1},{key:"birthday",label:"Birthday",required:!1},{key:"anniversary",label:"Anniversary",required:!1},{key:"spouse_name",label:"Spouse Name",required:!1},{key:"spouse_email",label:"Spouse Email",required:!1},{key:"spouse_phone",label:"Spouse Phone",required:!1},{key:"spouse_birthday",label:"Spouse Birthday",required:!1},{key:"type",label:"Address type",required:!1},{key:"street_address_1",label:"Street Address 1",required:!1},{key:"street_address_2",label:"Street Address 2",required:!1},{key:"zip",label:"Zip",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1}],[e,n]=i.useState({name:"LionDesk",type:"LionDesk",clientId:"",clientSecret:"",field_map:[{formField:"",lionDeskFormField:""}],actionName:"",actionId:"",campaignFields:N,contactFields:j,actions:{}});i.useEffect(()=>{window.opener&&z("lionDesk")},[]);const L=()=>{l(!0),T(a,s,f,e,b,"","",l).then(c=>{var k;c.success?(u.success((k=c.data)==null?void 0:k.msg),b(f)):u.error(c.data||c)})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(e)){u.error("Please map mandatory fields");return}e.field_map.length>0&&y(d)};return r.jsxs("div",{children:[r.jsx(E,{snack:v,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(A,{step:3,active:o})}),r.jsx(M,{lionDeskConf:e,setLionDeskConf:n,step:o,setStep:y,setSnackbar:p,isLoading:m,setIsLoading:l}),r.jsxs("div",{className:"btcd-stp-page",style:q({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(H,{formFields:t,handleInput:d=>G(d,e,n),lionDeskConf:e,setLionDeskConf:n,loading:_,setLoading:S,isLoading:m,setIsLoading:l,setSnackbar:p}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>I(3),disabled:!x(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[P("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(B,{step:o,saveConfig:()=>L(),isLoading:m,dataConf:e,setDataConf:n,formFields:t})]})}export{se as default};
//# sourceMappingURL=bi.758.447.js.map
