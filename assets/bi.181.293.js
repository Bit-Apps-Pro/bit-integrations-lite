var L=Object.defineProperty;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,n,r)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))T.call(n,r)&&j(e,r,n[r]);if(p)for(var r of p(n))_.call(n,r)&&j(e,r,n[r]);return e};import{r as k,j as t}from"./main-579.js";import{_ as a,L as z}from"./bi.305.82.js";import{k as w}from"./bi.431.841.js";import{T as N,t as E}from"./bi.511.747.js";function Y({agiledConf:e,setAgiledConf:n,step:r,setStep:v,loading:o,setLoading:A,isInfo:i}){const[c,y]=k.useState(!1),[l,u]=k.useState({auth_token:"",brand:""}),{agiled:s}=E,g=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,v(2)},b=m=>{const h=d({},e),x=d({},l);x[m.target.name]="",h[m.target.name]=m.target.value,u(x),n(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(N,{title:s==null?void 0:s.title,youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(N,{title:s==null?void 0:s.title,docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:i}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Brand (Your Account URL):","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"brand",value:e.brand,type:"text",placeholder:a("Your Account...","bit-integrations"),disabled:i}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.brand}),t.jsx("small",{className:"d-blk mt-3",children:a("Example: name.agiled.app","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:a("API Token...","bit-integrations"),disabled:i}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.auth_token}),e.brand&&t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${e.brand}/admin/settings/api-settings`,target:"_blank",rel:"noreferrer",children:a("Agiled API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!i&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,n,u,y,o,A),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||o.auth,children:[c?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),o.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:g,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{Y as default};
//# sourceMappingURL=bi.181.293.js.map
