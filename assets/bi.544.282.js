var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var k=(n,i,a)=>i in n?P(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a,d=(n,i)=>{for(var a in i||(i={}))I.call(i,a)&&k(n,a,i[a]);if(x)for(var a of x(i))L.call(i,a)&&k(n,a,i[a]);return n};import{r as g,j as t}from"./main-579.js";import{_ as s,L as _,a8 as z}from"./bi.305.82.js";import{m as f}from"./bi.924.820.js";import{T as j,t as w}from"./bi.511.747.js";function R({mailBlusterConf:n,setMailBlusterConf:i,step:a,setStep:N,loading:o,setLoading:y,isInfo:r}){const[c,v]=g.useState(!1),[l,h]=g.useState({name:"",auth_token:""}),{mailBluster:e}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),n!=null&&n.default,N(2)},p=b=>{const u=d({},n),m=d({},l);m[b.target.name]="",u[b.target.name]=b.target.value,h(m),i(u)},T=`
    <h4> Step of generate API token:</h4>
    <ul>
      <li>Goto <a target="_blank" href="https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys">Generate API Token</a></li>
      <li>Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.</li>
      <li>Finally, click <b>Authorize</b> button.</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(j,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(j,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:n.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"auth_token",value:n.auth_token,type:"text",placeholder:s("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.mailbluster.com/vM7N8vG0Pp/settings/api-keys",target:"_blank",rel:"noreferrer",children:s("MailBluster API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>f(n,i,h,v,o,y,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||o.auth,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),o.auth&&t.jsx(_,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(z,{note:T})]})}export{R as default};
//# sourceMappingURL=bi.544.282.js.map
