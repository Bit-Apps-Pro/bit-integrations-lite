import{r as l,j as g}from"./main-579.js";import{T as D}from"./bi.792.693.js";function R({label:m,onChange:v,value:s,disabled:I,type:u,textarea:b,className:O,formFields:c}){const f=c?c.filter(e=>e.label!==void 0).map(e=>({name:e.label,value:e.name})):[],p=l.useRef(null),t=l.useRef(null);l.useEffect(()=>{const e=p.current;e.value=s,e.setAttribute("value",s),t.current&&t.current.destroy(),t.current=new D(e,y),t.current.DOM.originalInput.value=s,t.current.on("input",x),t.current.on("add",h),t.current.on("remove",T)},[]);const a=e=>{const i=e.match(/(\${{.*?"value":".*?)"}}/g);let r=e;i&&i.forEach(n=>{const d=n.slice(2,-1),o=JSON.parse(d);r=r.replace(n,`\${${o.value}}`)}),v(r)},x=e=>{const{prefix:i,textContent:r}=e.detail,n=r.slice(-1),o=n==="#"?n:i;o&&(o==="#"&&(t.current.whitelist=f),t.current.dropdown.show()),setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},h=e=>{setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},T=e=>{setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},y={mixTagsInterpolator:["${","}"],mode:"mix",mixMode:{insertAfterTag:" "},pattern:/#/,placeholder:m,tagTextProp:"value",duplicates:!0,whitelist:f,enforceWhitelist:!0,trim:!0,editTags:!1,dropdown:{enabled:0,position:"text",mapValueTo:"value",highlightFirst:!0,searchKeys:["label","value"],closeOnSelect:!0,placeAbove:!1},callbacks:{add:()=>{a(t.current.DOM.originalInput.value)},remove:()=>{a(t.current.DOM.originalInput.value)}}};return g.jsx("div",{children:g.jsx("input",{name:"tagify-inp",type:u===void 0?"text":u,ref:p})})}export{R as T};
//# sourceMappingURL=bi.62.692.js.map
