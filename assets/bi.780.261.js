var I=Object.defineProperty;var j=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var N=(n,i,s)=>i in n?I(n,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[i]=s,m=(n,i)=>{for(var s in i||(i={}))f.call(i,s)&&N(n,s,i[s]);if(j)for(var s of j(i))E.call(i,s)&&N(n,s,i[s]);return n};import{r as y,m as _,j as e}from"./main-579.js";import{B as O,_ as l,D as v,L as P,a8 as U}from"./bi.305.82.js";import{B as $}from"./bi.144.730.js";import{a as B,z as D}from"./bi.553.774.js";import{T as w,t as Z}from"./bi.511.747.js";function K({formID:n,zoomWebinarConf:i,setZoomWebinarConf:s,step:u,setStep:k,isLoading:A,setIsLoading:b,setSnackbar:r,redirectLocation:L,isInfo:a}){const[c,R]=y.useState(!1),[d,x]=y.useState({clientId:"",clientSecret:""}),S=_(O),{zoomWebinar:t}=Z,o=h=>{const p=m({},i),g=m({},d);g[h.target.name]="",p[h.target.name]=h.target.value,x(g),s(p)},C=()=>{D(n,i,s,b,r),k(2)},T=`<h4>Pro or higher plan only .</h4>
  <h4>Client Id and Client Secret generate with OAuth .</h4>
  <h4>Scope:</h4>
  <ul>
      <li>User:<b>'user:master, user:read:admin, user:write:admin'</b> </li>
      <li>Webinar:<b>'webinar:master, webinar:read:admin, webinar:write:admin'</b> </li>
  </ul>
  <h4>Redirect URIs add also in <b>'Add allow lists'</b></h4>
  <h4>Zoom Settings :</h4>
  <ul>
      <li>Registration:<b>Required</b> </li>
      <li>Participant:<b>On</b> </li>
  </ul>
  `;return e.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"100%"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(w,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(w,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:l("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Homepage URL:","bit-integrations")})}),e.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(v,{value:L||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:r}),e.jsxs("small",{className:"d-blk mt-5",children:[l("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://marketplace.zoom.us/develop/create",target:"_blank",rel:"noreferrer",children:l("Get Zoom client id and secret","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:l("Client id...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:l("Client secret...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>B(i,s,x,R,b,r),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c,children:[c?l("Authorized ✔","bit-integrations"):l("Authorize","bit-integrations"),A&&e.jsx(P,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>C(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[l("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]}),e.jsx(U,{note:T})]})}export{K as default};
//# sourceMappingURL=bi.780.261.js.map
