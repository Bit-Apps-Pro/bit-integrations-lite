var C=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,i,s)=>i in a?C(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,b=(a,i)=>{for(var s in i||(i={}))E.call(i,s)&&g(a,s,i[s]);if(y)for(var s of y(i))I.call(i,s)&&g(a,s,i[s]);return a};import{r as v,m as R,j as t}from"./main-579.js";import{B as _,_ as n,D as k,L as B}from"./bi.305.82.js";import{B as P}from"./bi.144.730.js";import{c as $,r as D}from"./bi.886.715.js";import{T as w,t as G}from"./bi.511.747.js";function J({formID:a,sheetConf:i,setSheetConf:s,step:p,setstep:z,isLoading:x,setIsLoading:u,setSnackbar:l,redirectLocation:T,isInfo:r}){const[c,L]=v.useState(!1),[d,j]=v.useState({clientId:"",clientSecret:""}),A=R(_),{googleSheet:e}=G,o=m=>{const h=b({},i),N=b({},d);N[m.target.name]="",h[m.target.name]=m.target.value,j(N),s(h)},f=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(2),D(a,i,s,u,l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(w,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(w,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),t.jsx(k,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(k,{value:T||`${A.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:l}),t.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:n("Google API Console","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:n("Client id...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:n("Client secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>$(i,s,j,L,u,l),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||x,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),x&&t.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>f(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),t.jsx(P,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
//# sourceMappingURL=bi.92.237.js.map
