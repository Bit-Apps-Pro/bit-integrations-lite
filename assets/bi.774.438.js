var w=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var k=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,v=(a,t)=>{for(var s in t||(t={}))P.call(t,s)&&k(a,s,t[s]);if(j)for(var s of j(t))q.call(t,s)&&k(a,s,t[s]);return a};import{i as C,r as n,j as i}from"./main-579.js";import{e as F,_ as D,d as o}from"./bi.305.82.js";import{S as E}from"./bi.703.923.js";import{e as L}from"./bi.199.686.js";import{I as T}from"./bi.463.687.js";import M from"./bi.948.306.js";import{h as z,c as N}from"./bi.315.866.js";import{A as B}from"./bi.844.867.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function U({formFields:a,setFlow:t,flow:s,allIntegURL:p}){const u=C(),[S,f]=n.useState(!1),[g,b]=n.useState({}),[r,h]=n.useState(1),[y,m]=n.useState({show:!1}),_=[{key:"name",label:"Name",required:!0},{key:"due_at",label:"Due At",required:!1},{key:"due_on",label:"Due On",required:!1},{key:"notes",label:"Notes",required:!1}],[e,c]=n.useState({name:"Asana",type:"Asana",api_key:"",field_map:[{formField:"",asanaFormField:""}],actionName:"",taskFields:_,actions:{}}),A=()=>{f(!0),L(s,t,p,e,u,"","",f).then(d=>{var x;d.success?(o.success((x=d.data)==null?void 0:x.msg),u(p)):o.error(d.data||d)})},I=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){o.error("Please map mandatory fields");return}if(e.actionName==="task"){if(!e.selectedProject){o.error("Please select a project");return}if(!e.selectedSections&&e.actionName==="task"){o.error("Please select a Section");return}}e.field_map.length>0&&h(l)};return i.jsxs("div",{children:[i.jsx(F,{snack:y,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:r})}),i.jsx(M,{asanaConf:e,setAsanaConf:c,step:r,setStep:h,loading:g,setLoading:b,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:v({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:l=>z(l,e,c),asanaConf:e,setAsanaConf:c,loading:g,setLoading:b,setSnackbar:m}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!N(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[D("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(T,{step:r,saveConfig:()=>A(),isLoading:S,dataConf:e,setDataConf:c,formFields:a})]})}export{U as default};
//# sourceMappingURL=bi.774.438.js.map
