var L=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var j=(e,t,a)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&j(e,a,t[a]);if(y)for(var a of y(t))v.call(t,a)&&j(e,a,t[a]);return e},x=(e,t)=>R(e,z(t));var w=(e,t,a)=>new Promise((h,d)=>{var r=s=>{try{o(a.next(s))}catch(m){d(m)}},u=s=>{try{o(a.throw(s))}catch(m){d(m)}},o=s=>s.done?h(s.value):Promise.resolve(s.value).then(r,u);o((a=a.apply(e,t)).next())});import{m as D,r as S,j as l}from"./main-579.js";import{B as N,a8 as U}from"./bi.305.82.js";import{S as B,I as p,E as k,G as F,A as G}from"./bi.442.922.js";import{h as I,c as O,a as _}from"./bi.547.826.js";import{T as A,t as H}from"./bi.511.747.js";import"./bi.199.686.js";function V({notionConf:e,setNotionConf:t,step:a,setStep:h,isInfo:d,loading:r,setLoading:u}){const o=D(N),[s,m]=S.useState(!1),[c,b]=S.useState({clientId:"",clientSecret:""}),{notion:i}=H,T=()=>w(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(2),u(x(g({},r),{page:!0})),(yield _(e,t))&&u(x(g({},r),{page:!1}))}),f=`
  <h4> Step of get Client Id & Client Secret</h4>
  <ul>
    <li>Goto <a href="https://www.notion.so/my-integrations" target='_blank'>My integrations.</a></li>
    <li>Click new integration.</li>
    <li>Name to identify your integration to users.</li>
    <li><b>User Capabilities</b> always select read user information including email addresses</li>
    <li><b>Submit</b></li>
    <li>Select <b>Integration type</b> Public</li>
    <li>Fill up <b>OAuth Domain & URIs</b> information</li>
    <li>Homepage & Redirect URIs copy from Integration Settings</li>
    <li>Finally, click <b>Authorize</b> button.</li>
</ul>
`;return l.jsxs(B,{step:a,stepNo:1,style:{width:900,height:"auto"},children:[(i==null?void 0:i.youTubeLink)&&l.jsx(A,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&l.jsx(A,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),l.jsxs("div",{className:"mt-2",children:[l.jsx(p,{label:"Integration Name",name:"name",placeholder:"Integration Name...",value:e.name,onchange:n=>I(n,e,t,c,b)}),l.jsx(p,{label:"Homepage",copytext:window.location.origin,setToast:!0}),l.jsx(p,{label:"Redirect URIs",copytext:`${o.api.base}/redirect`,setToast:!0}),l.jsx(p,{label:"OAuth client ID",name:"clientId",placeholder:"client ID...",value:e.clientId,onchange:n=>I(n,e,t,c,b)}),l.jsx(k,{error:c.clientId}),l.jsx(p,{label:"OAuth client secret",name:"clientSecret",placeholder:"client secret...",value:e.clientSecret,onchange:n=>I(n,e,t,c,b)}),l.jsx(k,{error:c.clientSecret}),l.jsx(F,{url:"https://www.notion.so/my-integrations",info:"Notion My integrations, please visit"}),!d&&l.jsx(G,{onclick:()=>O(e,t,c,b,m,r,u),nextPage:T,auth:s,loading:r.auth})]}),l.jsx(U,{note:f})]})}export{V as default};
//# sourceMappingURL=bi.164.285.js.map