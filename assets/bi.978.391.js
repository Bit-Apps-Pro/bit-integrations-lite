var k=Object.defineProperty;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(a,t,e)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,f=(a,t)=>{for(var e in t||(t={}))C.call(t,e)&&b(a,e,t[e]);if(p)for(var e of p(t))N.call(t,e)&&b(a,e,t[e]);return a};import{i as _,u as w,r as c,j as s}from"./main-579.js";import{e as E,_ as F,a8 as L}from"./bi.305.82.js";import{S as T}from"./bi.703.923.js";import{s as D}from"./bi.199.686.js";import{I as M}from"./bi.463.687.js";import P from"./bi.259.263.js";import{h as q,c as h}from"./bi.458.780.js";import{A as z}from"./bi.784.779.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.144.730.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";import"./bi.904.720.js";function st({formFields:a,setFlow:t,flow:e,allIntegURL:g}){const x=_(),{formID:d}=w(),[l,n]=c.useState(!1),[r,u]=c.useState(1),[A,o]=c.useState({show:!1}),j=[{key:"1",label:"Add/Update Subscriber"},{key:"2",label:"Delete Subscriber"}],v=[{key:"email",label:"Email",required:!0}],[i,m]=c.useState({name:"Acumbamail",type:"Acumbamail",mainAction:"",listId:"",auth_token:"",field_map:[{formField:"",acumbamailFormField:"EMAIL"}],addSubsCriberFields:v,allActions:j,address_field:[],actions:{}}),I=`
  <h4>This integration can only be accessed by the payed users of Acumbamail</h4>`,S=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(i)){o({show:!0,msg:"Please map fields to continue."});return}i.listId!==""&&u(3)};return s.jsxs("div",{children:[s.jsx(E,{snack:A,setSnackbar:o}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(T,{step:3,active:r})}),s.jsx(P,{formID:d,acumbamailConf:i,setAcumbamailConf:m,step:r,setstep:u,isLoading:l,setIsLoading:n,setSnackbar:o}),s.jsxs("div",{className:"btcd-stp-page",style:f({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(z,{formFields:a,handleInput:y=>q(y,i,m,n,o,d),acumbamailConf:i,setAcumbamailConf:m,isLoading:l,setIsLoading:n,setSnackbar:o}),s.jsxs("button",{onClick:()=>S(),disabled:!i.mainAction||!h(i),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[F("Next","bit-integrations")," "," ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),s.jsx(M,{step:r,saveConfig:()=>D({flow:e,setFlow:t,allIntegURL:g,navigate:x,conf:i,setIsLoading:n,setSnackbar:o}),isLoading:l,dataConf:i,setDataConf:m,formFields:a}),s.jsx(L,{note:I})]})}export{st as default};
//# sourceMappingURL=bi.978.391.js.map
