var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(i,e,r)=>e in i?_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,d=(i,e)=>{for(var r in e||(e={}))z.call(e,r)&&N(i,r,e[r]);if(p)for(var r of p(e))I.call(e,r)&&N(i,r,e[r]);return i};import{r as b,j as t}from"./main-579.js";import{_ as n,L,a8 as P}from"./bi.305.82.js";import{f as g,b as w}from"./bi.100.817.js";import{T as A,t as E}from"./bi.511.747.js";function D({getResponseConf:i,setGetResponseConf:e,step:r,setstep:T,loading:s,setLoading:u,setSnackbar:S,isInfo:o}){const[l,y]=b.useState(!1),[m,h]=b.useState({name:"",auth_token:""}),{getResponse:a}=E;b.useEffect(()=>{l&&g(i,e,u,"default")},[l]);const f=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,T(2)},x=c=>{const k=d({},i),j=d({},m);j[c.target.name]="",k[c.target.name]=c.target.value,h(j),e(k)},v=`
    <h4> Step of generate API token:</h4>
    <ul>
      <li>Goto <a target="_blank" href="https://app.getresponse.com/api">Generate API Token</a></li>
      <li>Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.</li>
      <li>Finally, click <b>Authorize</b> button.</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(A,{title:a==null?void 0:a.title,youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(A,{title:a==null?void 0:a.title,docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"auth_token",value:i.auth_token,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.getresponse.com/api",target:"_blank",rel:"noreferrer",children:n("GetResponse API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(i,e,h,y,s,u,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l||s.auth,children:[l?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),s.auth&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:f,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!l,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:v})]})}export{D as default};
//# sourceMappingURL=bi.823.281.js.map
