import{r as m,j as e}from"./main-579.js";import{B as k}from"./bi.144.730.js";import{_ as a,L as g,c as y,E as w}from"./bi.305.82.js";import{T as u,t as L}from"./bi.511.747.js";function I({formID:z,giveWpConf:i,setGiveWpConf:h,step:o,setStep:d,isLoading:c,setIsLoading:r,setSnackbar:b}){const[n,x]=m.useState(!1),[f,j]=m.useState(!1),{giveWp:t}=L,p=()=>{r("auth"),y({},"giveWp_authorize").then(s=>{s!=null&&s.success&&(x(!0),b({show:!0,msg:a("Connected with GiveWp Successfully","bit-integrations")})),r(!1),j(!0)})},N=s=>{const l=w(i);l[s.target.name]=s.target.value,h(l)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(u,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(u,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:N,name:"name",value:i.name,type:"text",placeholder:a("Integration Name...","bit-integrations")}),c==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(g,{size:25,clr:"#022217",className:"mr-2"}),"Checking if GiveWp affiliate is active!!!"]}),f&&!n&&!c&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"GiveWp affiliate plugin must be activated to integrate with Bit Integrations."]}),!n&&e.jsx("button",{onClick:p,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:a("Connect","bit-integrations")}),n&&e.jsxs("button",{onClick:()=>d(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!n,children:[a("Next","bit-integrations"),e.jsx(k,{className:"ml-1 rev-icn"})]})]})}export{I as default};
//# sourceMappingURL=bi.302.298.js.map