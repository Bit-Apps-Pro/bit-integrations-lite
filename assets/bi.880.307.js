import{r as u,j as e}from"./main-579.js";import{B as k}from"./bi.144.730.js";import{_ as n,L as y,c as w,E as L}from"./bi.305.82.js";import{T as h,t as z}from"./bi.511.747.js";function p({formID:S,propovoiceCrmConf:i,setPropovoiceCrmConf:d,step:l,setStep:m,isLoading:c,setIsLoading:o,setSnackbar:b}){const[a,x]=u.useState(!1),[g,f]=u.useState(!1),{propovoiceCrm:t}=z,j=()=>{o("auth"),w({},"propovoice_authorize").then(s=>{s!=null&&s.success&&(x(!0),b({show:!0,msg:n("Connected with Propovoice CRM Successfully","bit-integrations")})),o(!1),f(!0)})},N=s=>{const r=L(i);r[s.target.name]=s.target.value,d(r)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:l===1&&900,height:l===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(h,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(h,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:N,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),c==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(y,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Propovoice CRM is active!!!"]}),g&&!a&&!c&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Propovoice CRM plugin must be activated to integrate with Bit Integrations."]}),!a&&e.jsx("button",{onClick:j,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:n("Connect","bit-integrations")}),a&&e.jsxs("button",{onClick:()=>m(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!a,children:[n("Next","bit-integrations"),e.jsx(k,{className:"ml-1 rev-icn"})]})]})}export{p as default};
//# sourceMappingURL=bi.880.307.js.map