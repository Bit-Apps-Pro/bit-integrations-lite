var D=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?D(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,b=(s,t)=>{for(var a in t||(t={}))S.call(t,a)&&y(s,a,t[a]);if(N)for(var a of N(t))_.call(t,a)&&y(s,a,t[a]);return s};import{r as E,m as I,j as e}from"./main-579.js";import{B as P,_ as n,D as A,L as B}from"./bi.305.82.js";import{B as U}from"./bi.144.730.js";import{f as $}from"./bi.199.686.js";import{b as O}from"./bi.460.764.js";import{T,t as Z}from"./bi.511.747.js";function J({formID:s,deskConf:t,setDeskConf:a,step:h,setstep:w,isLoading:x,setIsLoading:p,setSnackbar:l,redirectLocation:R,isInfo:r}){const[d,C]=E.useState(!1),[c,u]=E.useState({dataCenter:"",clientId:"",clientSecret:""}),L="Desk.settings.READ,Desk.basic.READ,Desk.search.READ,Desk.contacts.READ,Desk.contacts.CREATE,Desk.contacts.UPDATE,Desk.tickets.CREATE,Desk.tickets.UPDATE",g=I(P),{zohoDesk:i}=Z,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),w(2),O(s,t,a,p,l)},o=m=>{const j=b({},t),v=b({},c);v[m.target.name]="",j[m.target.name]=m.target.value,u(v),a(j)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(T,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(T,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"wdt-200 d-in-b mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:o,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:n("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:c.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),e.jsx(A,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(A,{value:R||`${g.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:n("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:t.clientId,type:"text",placeholder:n("Client id...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:n("Client secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>$("zohoDesk","zbigin",L,t,a,u,C,p,l,g),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||x,children:[d?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),x&&e.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:z,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[n("Next","bit-integrations"),e.jsx(U,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
//# sourceMappingURL=bi.273.256.js.map
