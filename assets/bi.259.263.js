var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var m=(i,n,s)=>n in i?T(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,d=(i,n)=>{for(var s in n||(n={}))v.call(n,s)&&m(i,s,n[s]);if(j)for(var s of j(n))z.call(n,s)&&m(i,s,n[s]);return i};import{r as N,j as t}from"./main-579.js";import{B as _}from"./bi.144.730.js";import{_ as r,L as w}from"./bi.305.82.js";import{a as E,f as S}from"./bi.458.780.js";import{T as f,t as I}from"./bi.511.747.js";function q({formID:i,acumbamailConf:n,setAcumbamailConf:s,step:c,setstep:y,isLoading:h,setIsLoading:p,setSnackbar:B,redirectLocation:P,isInfo:o}){const{acumbamail:e}=I,[l,A]=N.useState(!1),[x,g]=N.useState({dataCenter:"",clientId:""}),L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2),S(n,s,p)},u=a=>{const b=d({},n),k=d({},x);k[a.target.name]="",b[a.target.name]=a.target.value,g(k),s(b)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:c===1&&900,height:c===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(f,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(f,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:n.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get Client Auth token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://acumbamail.com/en/apidoc/",target:"_blank",rel:"noreferrer",children:r("Acumbamail doc","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Auth Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"auth_token",value:n.auth_token,type:"text",placeholder:r("Auth Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:x.auth_token}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E(n,s,g,A,p),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l||h,children:[l?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),h&&t.jsx(w,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!l,children:[r("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]})]})}export{q as default};
//# sourceMappingURL=bi.259.263.js.map
