import{i as j,u as b,r as i,j as e}from"./main-579.js";import{e as I,i as v}from"./bi.305.82.js";import{B as D}from"./bi.144.730.js";import{S}from"./bi.703.923.js";import{e as k}from"./bi.199.686.js";import{I as N}from"./bi.463.687.js";import _ from"./bi.133.312.js";import{c as w}from"./bi.776.877.js";import{D as y}from"./bi.220.878.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.511.747.js";import"./bi.251.691.js";function H({formFields:m,setFlow:l,flow:d,allIntegURL:f}){const g=j(),{formID:c}=b(),[o,n]=i.useState(!1),[s,p]=i.useState(1),[u,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Drip",type:"Drip",api_token:"",field_map:[{formField:"",dripField:""}],actions:{}}),x=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h===3){if(!w(t)){a({show:!0,msg:"Please map all required fields to continue."});return}if(!(t!=null&&t.campaignId)){a({show:!0,msg:"Please select campaign to continue."});return}t.name!==""&&t.field_map.length>0&&p(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:u,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(S,{step:3,active:s})}),e.jsx(_,{formID:c,dripConf:t,setDripConf:r,step:s,setstep:p,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(y,{formID:c,formFields:m,dripConf:t,setDripConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>x(3),disabled:!(t!=null&&t.campaignId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations")," "," ",e.jsx(D,{className:"ml-1 rev-icn"})]})]}),e.jsx(N,{step:s,saveConfig:()=>k(d,l,f,t,g,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:m})]})}export{H as default};
//# sourceMappingURL=bi.452.444.js.map