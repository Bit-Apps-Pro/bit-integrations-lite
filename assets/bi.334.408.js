var S=Object.defineProperty;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&h(i,t,e[t]);if(v)for(var t of v(e))C.call(e,t)&&h(i,t,e[t]);return i};import{i as F,u as I,r as o,j as a}from"./main-579.js";import{e as _,_ as p}from"./bi.305.82.js";import{S as w}from"./bi.703.923.js";import{s as y}from"./bi.199.686.js";import{I as A}from"./bi.463.687.js";import L from"./bi.160.277.js";import{h as E,c as T,a as z}from"./bi.17.809.js";import{P as M}from"./bi.626.810.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.133.704.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";function te({formFields:i,setFlow:e,flow:t,allIntegURL:x}){const D=F(),{formID:m}=I(),[u,n]=o.useState(!1),[d,f]=o.useState(1),[P,r]=o.useState({show:!1}),[g,j]=o.useState(0),[s,l]=o.useState({name:"PipeDrive",type:"PipeDrive",api_key:"",default:{modules:{Leads:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Deals:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Activities:{required:!0},Persons:{required:!0,requiredFields:["name"]},Products:{requiredFields:["name"]},Notes:{required:!0,requiredFields:["content"]}}},moduleData:{module:""},field_map:[{formField:"",pipeDriveFormField:""}],relatedlists:[],actions:{}}),q=()=>{y({flow:t,setFlow:e,allIntegURL:x,conf:s,navigate:D,setIsLoading:n,setSnackbar:r})},N=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!T(s)){r({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!z(s)){["Leads","Deals","Activities","Notes"].includes(s.moduleData.module)&&r({show:!0,msg:p("Please select a organization or a person","bit-integrations")});return}s.moduleData.module&&s.field_map.length>0&&f(c)};return a.jsxs("div",{children:[a.jsx(_,{snack:P,setSnackbar:r}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:d})}),a.jsx(L,{formID:m,pipeDriveConf:s,setPipeDriveConf:l,step:d,setstep:f,isLoading:u,setIsLoading:n,setSnackbar:r}),a.jsxs("div",{className:"btcd-stp-page",style:b({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{tab:g,settab:j,formID:m,formFields:i,handleInput:c=>E(c,g,s,l,m,n,r),pipeDriveConf:s,setPipeDriveConf:l,isLoading:u,setIsLoading:n,setSnackbar:r}),a.jsxs("button",{onClick:()=>N(3),disabled:s.moduleData.module===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[p("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(A,{step:d,saveConfig:()=>q(),isLoading:u,dataConf:s,setDataConf:l,formFields:i})]})}export{te as default};
//# sourceMappingURL=bi.334.408.js.map