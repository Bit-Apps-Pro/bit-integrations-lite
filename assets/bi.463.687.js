var S=Object.defineProperty;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(l,s,c)=>s in l?S(l,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[s]=c,m=(l,s)=>{for(var c in s||(s={}))E.call(s,c)&&_(l,c,s[c]);if(p)for(var c of p(s))I.call(s,c)&&_(l,c,s[c]);return l};import{r as z,j as e}from"./main-579.js";import{a6 as N,_ as r,L as d}from"./bi.305.82.js";import{C as k}from"./bi.333.690.js";function R({step:l,saveConfig:s,edit:c,disabled:w,isLoading:n,dataConf:i=null,setDataConf:o=null,formFields:b=[]}){var g,j,v,u;z.useEffect(()=>{if(i&&!(i!=null&&i.condition)){const t=m({},i);t.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},o(t)}},[i]);const x=(t,y)=>{const h=m({},i);y?h.condition.action_behavior=t:h.condition.action_behavior="",o(h)};return e.jsxs("div",{children:[(i==null?void 0:i.condition)&&c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx mt-2",children:e.jsx(N,{onChange:t=>x(t.target.value,t.target.checked),checked:((g=i==null?void 0:i.condition)==null?void 0:g.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:r("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((j=i==null?void 0:i.condition)==null?void 0:j.action_behavior)==="cond"&&e.jsx(k,{formFields:b,dataConf:i,setDataConf:o})]}),(i==null?void 0:i.condition)&&l===2&&!c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx pl-2",children:e.jsx(N,{onChange:t=>x(t.target.value,t.target.checked),checked:((v=i==null?void 0:i.condition)==null?void 0:v.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:r("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((u=i==null?void 0:i.condition)==null?void 0:u.action_behavior)==="cond"&&e.jsx(k,{formFields:b,dataConf:i,setDataConf:o})]}),c?e.jsx("div",{className:"txt-center w-9 mt-3",children:e.jsxs("button",{onClick:s,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n||w,children:[r("Update","bit-integrations"),n&&e.jsx(d,{size:20,clr:"#022217",className:"ml-2"})]})}):e.jsxs("div",{className:"btcd-stp-page txt-center",style:{width:l===3&&"100%",height:l===3&&"auto"},children:[e.jsx("h2",{className:"ml-3",children:r("Successfully Integrated","bit-integrations")}),e.jsxs("button",{onClick:s,className:"btn btcd-btn-lg green sh-sm",type:"button",disabled:n,children:[r("Finish & Save ","bit-integrations"),"✔",n&&e.jsx(d,{size:20,clr:"#022217",className:"ml-2"})]})]})]})}export{R as I};
//# sourceMappingURL=bi.463.687.js.map