var k=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var b=(i,t,s)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,d=(i,t)=>{for(var s in t||(t={}))S.call(t,s)&&b(i,s,t[s]);if(f)for(var s of f(t))y.call(t,s)&&b(i,s,t[s]);return i};import{i as w,u as G,r,j as a}from"./main-579.js";import{e as _,_ as I}from"./bi.305.82.js";import{S as N}from"./bi.703.923.js";import{s as C}from"./bi.496.717.js";import{s as q}from"./bi.199.686.js";import{I as D}from"./bi.463.687.js";import L from"./bi.767.230.js";import{c as T}from"./bi.190.745.js";import{G as E}from"./bi.3.746.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";import"./bi.858.706.js";import"./bi.513.683.js";function $({formFields:i,setFlow:t,flow:s,allIntegURL:x}){const h=w(),{flowID:c}=G(),[m,p]=r.useState(!1),[o,u]=r.useState(1),[g,n]=r.useState({show:!1}),v=[{key:"start",label:"Start Date Time",required:!0},{key:"end",label:"End Date Time",required:!0},{key:"summary",label:"Title",required:!1},{key:"location",label:"Location",required:!1},{key:"description",label:"Description",required:!1}],[e,l]=r.useState({name:"Google Calendar",type:"Google Calendar",clientId:"",clientSecret:"",field_map:[{formField:"",googleCalendarFormField:""}],reminder_field_map:[{method:"popup",minutes:"30"}],default:v,calendarLists:[],actions:{}});r.useEffect(()=>{window.opener&&C("googleCalendar")},[]);const j=()=>{q({flow:s,setFlow:t,allIntegURL:x,conf:e,navigate:h,setIsLoading:p,setSnackbar:n})};return a.jsxs("div",{children:[a.jsx(_,{snack:g,setSnackbar:n}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(N,{step:3,active:o})}),a.jsx(L,{flowID:c,googleCalendarConf:e,setGoogleCalendarConf:l,step:o,setStep:u,isLoading:m,setIsLoading:p,setSnackbar:n}),a.jsx("div",{className:"btcd-stp-page",style:d({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsx(E,{flowID:c,formFields:i,googleCalendarConf:e,setGoogleCalendarConf:l})}),a.jsx(D,{step:o,saveConfig:()=>j(),isLoading:m,dataConf:e,setDataConf:l,formFields:i}),a.jsx("div",{className:"btcd-stp-page",style:d({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:a.jsxs("button",{onClick:()=>u(3),disabled:!(e!=null&&e.calendarId)||!(e!=null&&e.timeZone)||!T(e==null?void 0:e.field_map),className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",children:[I("Next","bit-integrations")," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}export{$ as default};
//# sourceMappingURL=bi.738.378.js.map
