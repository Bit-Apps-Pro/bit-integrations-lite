import{i as x,u as w,r as n,j as t}from"./main-579.js";import{e as j,_ as v}from"./bi.305.82.js";import{B as S}from"./bi.144.730.js";import{S as I}from"./bi.703.923.js";import C from"./bi.262.259.js";import{I as _}from"./bi.463.687.js";import{h as q,c as h}from"./bi.764.772.js";import{Z as N}from"./bi.178.771.js";import{s as Z}from"./bi.199.686.js";import"./bi.511.747.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";const z=i=>{const r={},l=window.location.href.replace(`${window.opener.location.href}`,"").split("&");l&&l.forEach(p=>{const o=p.split("=");o[1]&&(r[o[0]]=o[1])}),localStorage.setItem(`__${i}`,JSON.stringify(r)),window.close()};function K({formFields:i,setFlow:r,flow:u,allIntegURL:l}){const p=x(),{formID:o}=w(),[c,m]=n.useState(!1),[a,f]=n.useState(1),[g,s]=n.useState({show:!1}),y=[{key:"first_name",label:"First Name",required:!0},{key:"last_name",label:"Last Name",required:!0},{key:"email",label:"Email",required:!0},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1},{key:"phone",label:"Phone",required:!1},{key:"job_title",label:"Job Title",required:!1},{key:"zip",label:"Zip",required:!1}],[e,d]=n.useState({name:"Zoom",type:"Zoom",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomFields:y,allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});n.useEffect(()=>{window.opener&&z("zoom")},[]);const b=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(e)){s({show:!0,msg:"Please map fields to continue."});return}e.field_map.length>0&&f(3)};return t.jsxs("div",{children:[t.jsx(j,{snack:g,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(I,{step:3,active:a})}),t.jsx(C,{formID:o,zoomConf:e,setZoomConf:d,step:a,setStep:f,setSnackbar:s,isLoading:c,setIsLoading:m}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"100%"},children:[t.jsx(N,{formID:o,formFields:i,handleInput:k=>q(k,e,d,o,m,s),zoomConf:e,setZoomConf:d,isLoading:c,setIsLoading:m,setSnackbar:s}),t.jsxs("button",{onClick:()=>b(),disabled:e.field_map.length<2||c||!e.id||!h(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(_,{step:a,saveConfig:()=>Z({flow:u,setFlow:r,allIntegURL:l,navigate:p,conf:e,setIsLoading:m,setSnackbar:s}),isLoading:c,dataConf:e,setDataConf:d,formFields:i})]})}export{K as default};
//# sourceMappingURL=bi.507.387.js.map
