import{i as j,u as b,r as i,j as e}from"./main-579.js";import{e as I,i as v}from"./bi.305.82.js";import{B as S}from"./bi.144.730.js";import{S as k}from"./bi.703.923.js";import{e as Z}from"./bi.199.686.js";import{I as _}from"./bi.463.687.js";import y from"./bi.529.334.js";import{c as M}from"./bi.989.920.js";import{Z as N}from"./bi.988.921.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function H({formFields:l,setFlow:p,flow:d,allIntegURL:g}){const f=j(),{formID:m}=b(),[o,n]=i.useState(!1),[s,c]=i.useState(1),[u,a]=i.useState({show:!1}),[t,r]=i.useState({name:"ZagoMail",type:"ZagoMail",api_public_key:"",field_map:[{formField:"",zagoMailField:""}],selectedList:"",actions:{},selectedTags:[]}),x=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h===3){if(!M(t)){a({show:!0,msg:"Please map all required fields to continue."});return}if(!(t!=null&&t.listId)){a({show:!0,msg:"Please select list to continue."});return}t.name!==""&&t.field_map.length>0&&c(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:u,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:s})}),e.jsx(y,{formID:m,zagoMailConf:t,setZagoMailConf:r,step:s,setstep:c,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(N,{formID:m,formFields:l,zagoMailConf:t,setZagoMailConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>x(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations")," "," ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(_,{step:s,saveConfig:()=>Z(d,p,g,t,f,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:l})]})}export{H as default};
//# sourceMappingURL=bi.101.476.js.map
