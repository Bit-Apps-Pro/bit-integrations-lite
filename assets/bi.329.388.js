import{i as x,u as w,r as n,j as t}from"./main-579.js";import{e as j,_ as v}from"./bi.305.82.js";import{B as S}from"./bi.144.730.js";import{S as I}from"./bi.703.923.js";import C from"./bi.780.261.js";import{I as _}from"./bi.463.687.js";import{h as W,c as b}from"./bi.553.774.js";import{s as q}from"./bi.199.686.js";import{Z as N}from"./bi.586.773.js";import"./bi.511.747.js";import"./bi.333.690.js";import"./bi.718.684.js";import"./bi.251.691.js";import"./bi.62.692.js";import"./bi.792.693.js";const Z=i=>{const r={},l=window.location.href.replace(`${window.opener.location.href}`,"").split("&");l&&l.forEach(d=>{const o=d.split("=");o[1]&&(r[o[0]]=o[1])}),localStorage.setItem(`__${i}`,JSON.stringify(r)),window.close()};function K({formFields:i,setFlow:r,flow:u,allIntegURL:l}){const d=x(),{formID:o}=w(),[c,p]=n.useState(!1),[s,f]=n.useState(1),[h,a]=n.useState({show:!1}),g=[{key:"first_name",label:"First Name",required:!0},{key:"last_name",label:"Last Name",required:!0},{key:"email",label:"Email",required:!0},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1},{key:"phone",label:"Phone",required:!1},{key:"job_title",label:"Job Title",required:!1},{key:"zip",label:"Zip",required:!1}],[e,m]=n.useState({name:"Zoom Webinar",type:"Zoom Webinar",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomWebinarFields:g,allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});n.useEffect(()=>{window.opener&&Z("zoom")},[]);const y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!b(e)){a({show:!0,msg:"Please map fields to continue."});return}e.field_map.length>0&&f(3)};return t.jsxs("div",{children:[t.jsx(j,{snack:h,setSnackbar:a}),t.jsx("div",{className:"txt-center w-9 mt-2",children:t.jsx(I,{step:3,active:s})}),t.jsx(C,{formID:o,zoomWebinarConf:e,setZoomWebinarConf:m,step:s,setStep:f,setSnackbar:a,isLoading:c,setIsLoading:p}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(N,{formID:o,formFields:i,handleInput:k=>W(k,e,m),zoomWebinarConf:e,setZoomWebinarConf:m,isLoading:c,setIsLoading:p,setSnackbar:a}),t.jsxs("button",{onClick:()=>y(),disabled:e.field_map.length<2||c||!e.id||!b(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]}),t.jsx(_,{step:s,saveConfig:()=>q({flow:u,setFlow:r,allIntegURL:l,navigate:d,conf:e,setIsLoading:p,setSnackbar:a}),isLoading:c,dataConf:e,setDataConf:m,formFields:i})]})}export{K as default};
//# sourceMappingURL=bi.329.388.js.map