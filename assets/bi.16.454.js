var I=Object.defineProperty;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var S=(a,t,s)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,j=(a,t)=>{for(var s in t||(t={}))k.call(t,s)&&S(a,s,t[s]);if(v)for(var s of v(t))P.call(t,s)&&S(a,s,t[s]);return a};import{i as T,r as n,j as o}from"./main-579.js";import{e as C,_ as A,d as i}from"./bi.305.82.js";import{S as E}from"./bi.703.923.js";import{e as L}from"./bi.199.686.js";import{I as O}from"./bi.463.687.js";import M from"./bi.25.322.js";import{h as z,c as F}from"./bi.343.897.js";import{F as B}from"./bi.486.898.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function $({formFields:a,setFlow:t,flow:s,allIntegURL:u}){const f=T(),[g,m]=n.useState(!1),[h,x]=n.useState({}),[r,b]=n.useState(1),[N,d]=n.useState({show:!1}),[e,c]=n.useState({name:"Flowlu",type:"Flowlu",api_key:"",company_name:"",field_map:[{formField:"",flowluFormField:""}],actionName:"",actionId:"",flowluFields:[],actions:{}}),w=()=>{m(!0),L(s,t,u,e,f,"","",m).then(p=>{var y;p.success?(i.success((y=p.data)==null?void 0:y.msg),f(u)):i.error(p.data||p)})},_=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!F(e)){i.error("Please map mandatory fields");return}if(e.actionName==="account"&&!e.selectedAccountType){i.error("Please select an Account Type");return}if(e.actionName==="opportunity"){if(!e.selectedPipeline){i.error("Please select a Opportunity Pipeline");return}if(!e.selectedOpportunityStage){i.error("Please select a Opportunity Stage");return}}e.field_map.length>0&&b(l)};return o.jsxs("div",{children:[o.jsx(C,{snack:N,setSnackbar:d}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(E,{step:3,active:r})}),o.jsx(M,{flowluConf:e,setFlowluConf:c,step:r,setStep:b,loading:h,setLoading:x,setSnackbar:d}),o.jsxs("div",{className:"btcd-stp-page",style:j({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(B,{formFields:a,handleInput:l=>z(l,e,c),flowluConf:e,setFlowluConf:c,loading:h,setLoading:x,isLoading:g,setIsLoading:m,setSnackbar:d}),(e==null?void 0:e.actionName)&&o.jsxs("button",{onClick:()=>_(3),disabled:!F(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[A("Next","bit-integrations")," "," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&o.jsx(O,{step:r,saveConfig:()=>w(),isLoading:g,dataConf:e,setDataConf:c,formFields:a})]})}export{$ as default};
//# sourceMappingURL=bi.16.454.js.map