var T=Object.defineProperty,z=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var A=(t,e,i)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,b=(t,e)=>{for(var i in e||(e={}))E.call(e,i)&&A(t,i,e[i]);if(k)for(var i of k(e))S.call(e,i)&&A(t,i,e[i]);return t},x=(t,e)=>z(t,L(e));var I=(t,e,i)=>new Promise((h,u)=>{var n=l=>{try{o(i.next(l))}catch(s){u(s)}},p=l=>{try{o(i.throw(l))}catch(s){u(s)}},o=l=>l.done?h(l.value):Promise.resolve(l.value).then(n,p);o((i=i.apply(t,e)).next())});import{r as g,j as r}from"./main-579.js";import{S as N,I as j,G as v,E as d,A as w}from"./bi.442.922.js";import{a8 as F}from"./bi.305.82.js";import{h as m,b as G,g as B}from"./bi.297.813.js";import{T as f,t as R}from"./bi.511.747.js";import"./bi.199.686.js";function V({moosendConf:t,setMoosendConf:e,step:i,setStep:h,loading:u,setLoading:n,isInfo:p}){const[o,l]=g.useState(!1),[s,y]=g.useState({name:"",authKey:""}),{moosend:a}=R,K=()=>I(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(2),n(x(b({},u),{page:!0})),(yield B(t,e))&&n(x(b({},u),{page:!1}))}),P=`
  <h4> Step of get API Key:</h4>
  <ul>
    <li>First login on account.</li>
    <li>Goto Settings and click on <b>API Key</b></li>
    <li>Copy the <b>API Key</b> and paste into <b>API Key</b> field of your authorization form.</li>
    <li>Finally, click <b>Authorize</b> button.</li>
</ul>
`;return r.jsxs(N,{step:i,stepNo:1,style:{width:900,height:"auto"},children:[(a==null?void 0:a.youTubeLink)&&r.jsx(f,{title:a==null?void 0:a.title,youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&r.jsx(f,{title:a==null?void 0:a.title,docLink:a==null?void 0:a.docLink}),r.jsxs("div",{className:"mt-2",children:[r.jsx(j,{label:"Integration Name",name:"name",placeholder:"Integration Name...",value:t.name,onchange:c=>m(c,t,e,s,y)}),r.jsx(j,{label:"API key",name:"authKey",placeholder:"API key...",value:t.authKey,onchange:c=>m(c,t,e,s,y)}),r.jsx(v,{url:"https://moosend.com/",info:"To get API key, please visit"}),r.jsx(d,{error:s.authKey}),!p&&r.jsx(w,{onclick:()=>G(t,y,l,u,n),nextPage:K,auth:o,loading:u.auth})]}),r.jsx(F,{note:P})]})}export{V as default};
//# sourceMappingURL=bi.775.279.js.map
