import{j as i}from"./main-579.js";import{_ as x,a7 as O,b as N,E as a}from"./bi.305.82.js";import{T as R}from"./bi.718.684.js";function u({className:j,type:p,onClick:n,icn:v,children:h,style:m}){return i.jsx("button",{style:m,className:`${v?"icn-btn":"btn"}  ${j}`,type:p||"button",onClick:n,"aria-label":"btcd-button",children:h})}function E({className:j,onChange:p,value:n,label:v,children:h,style:m}){return i.jsxs("div",{className:`btcd-mt-sel ${j}`,style:m,children:[i.jsx("select",{onChange:p,value:n||"",children:h}),i.jsx("small",{children:v})]})}function T({label:j,onChange:p,value:n,disabled:v,type:h,textarea:m,className:k}){return i.jsxs("label",{className:`btcd-mt-inp ${k}`,children:[!m&&i.jsx("input",{type:h===void 0?"text":h,onChange:p,placeholder:" ",disabled:v,value:n}),m&&i.jsx("textarea",{type:h===void 0?"text":h,onChange:p,placeholder:" ",disabled:v,value:n}),i.jsx("span",{children:j})]})}function $({fieldVal:j,delLogic:p,lgcInd:n,subLgcInd:v,subSubLgcInd:h,value:m,changeLogic:k,logicValue:f,changeValue:w,changeFormField:G,formFields:d,setValue:z}){var s;const y=[];let _="",A="",l="";(s=d==null?void 0:d.find)==null||s.call(d,o=>{if(o.key===j)return o.type.match(/^(check|radio)$/)?_="text":_=o.type,A=o.type,l=o.key,!0});const e=()=>{var c,t,r;let o=[];return A==="select"?o=(c=y==null?void 0:y[l])==null?void 0:c.opt:o=(r=(t=y==null?void 0:y[l])==null?void 0:t.opt)==null?void 0:r.map(g=>({label:g.lbl,value:g.val||g.lbl})),o};return i.jsxs("div",{className:"flx pos-rel btcd-logic-blk",children:[i.jsx("span",{className:"btcd-logic-chip mr-2",children:"IF"}),i.jsxs(E,{label:"Form Fields",value:j||"",style:{width:620},onChange:o=>G(o.target.value,n,v,h),children:[i.jsx("option",{value:"",children:x("Select Form Field","bit-integrations")}),d==null?void 0:d.map(o=>!o.type.match(/^(file|recaptcha)$/)&&i.jsx("option",{value:o.name,children:o.label},`ff-lb-${o.name}`))]}),i.jsx("svg",{height:"35",width:"100",className:"mt-1",children:i.jsx("line",{x1:"0",y1:"20",x2:"40",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),i.jsxs(E,{label:"Logic",value:f||"",onChange:o=>k(o.target.value,n,v,h),className:"w-5",children:[i.jsx("option",{value:"",children:x("Select One","bit-integrations")}),i.jsx("option",{value:"equal",children:x("Equal","bit-integrations")}),i.jsx("option",{value:"not_equal",children:x("Not Equal","bit-integrations")}),i.jsx("option",{value:"null",children:x("Is Null","bit-integrations")}),i.jsx("option",{value:"not_null",children:x("Is Not Null","bit-integrations")}),i.jsx("option",{value:"contain",children:x("Contain","bit-integrations")}),i.jsx("option",{value:"not_contain",children:x("Not Contain","bit-integrations")}),i.jsx("option",{value:"greater",children:x("Greater Than (Number)","bit-integrations")}),i.jsx("option",{value:"less",children:x("Less Than (Number)","bit-integrations")}),i.jsx("option",{value:"greater_or_equal",children:x("Greater Than or Equal (Number)","bit-integrations")}),i.jsx("option",{value:"less_or_equal",children:x("Less Than or Equal (Number)","bit-integrations")}),i.jsx("option",{value:"start_with",children:x("Start With","bit-integrations")}),i.jsx("option",{value:"end_with",children:x("End With","bit-integrations")})]}),i.jsx("svg",{height:"35",width:"100",className:"mt-1",children:i.jsx("line",{x1:"0",y1:"20",x2:"40",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),A.match(/select|check|radio/g)?i.jsx(O,{className:"msl-wrp-options btcd-paper-drpdwn w-6",defaultValue:m||"",onChange:o=>w(o,n,v,h),options:e(),customValue:!0,fldType:A}):i.jsx(T,{label:"Value",type:_,disabled:f==="null"||f==="not_null",onChange:o=>w(o.target.value,n,v,h),value:m||""}),i.jsxs("div",{className:"btcd-li-side-btn",children:[i.jsx(u,{onClick:()=>p(n,v,h),icn:!0,className:"ml-2 white mr-2 sh-sm",children:i.jsx(R,{size:"16"})}),i.jsx(O,{options:d==null?void 0:d.map(o=>o.type!=="file"&&{label:o.label,value:`\${${o.name}}`}),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:o=>z(o,n,v,h)})]})]})}function q({logic:j,nested:p,onChange:n}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{height:p?5:10},children:i.jsx("svg",{height:"60",width:"50",children:i.jsx("line",{x1:"20",y1:p?6:10,x2:"20",y2:"0",style:{stroke:"#b9c5ff",strokeWidth:1}})})}),i.jsx("div",{children:i.jsxs("select",{value:j,onChange:n,className:`btcd-logic-chip ${p&&"scl-7 op-8"}`,children:[i.jsx("option",{value:"or",children:x("OR","bit-integrations")}),i.jsx("option",{value:"and",children:x("AND","bit-integrations")})]})}),i.jsx("div",{style:{height:p?5:10},children:i.jsx("svg",{height:"60",width:"50",children:i.jsx("line",{x1:"20",y1:p?6:10,x2:"20",y2:"0",style:{stroke:"#b9c5ff",strokeWidth:1}})})})]})}function M({formFields:j,dataConf:p,setDataConf:n}){var y,_,A;const v=(l,e,s,o)=>{n(o!==void 0?c=>{const t=a(c);return t.condition.logics[e][s][o]=l,t}:s!==void 0?c=>{const t=a(c);return t.condition.logics[e][s]=l,t}:c=>{const t=a(c);return t.condition.logics[e]=l,t})},h=(l,e,s,o)=>{n(o!==void 0?c=>{const t=a(c);return t.condition.logics[e][s][o].field=l,t.condition.logics[e][s][o].val="",t}:s!==void 0?c=>{const t=a(c);return t.condition.logics[e][s].field=l,t.condition.logics[e][s].val="",t}:c=>{const t=a(c);return t.condition.logics[e].field=l,t.condition.logics[e].val="",t})},m=(l,e,s,o)=>{n(o!==void 0?c=>{const t=a(c);return t.condition.logics[e][s][o].val=l,t}:s!==void 0?c=>{const t=a(c);return t.condition.logics[e][s].val=l,t}:c=>{const t=a(c);return t.condition.logics[e].val=l,t})},k=(l,e,s,o)=>{n(o!==void 0?c=>{const t=a(c);return l==="null"&&(t.condition.logics[e][s][o].val=""),t.condition.logics[e][s][o].logic=l,t}:s!==void 0?c=>{const t=a(c);return l==="null"&&(t.condition.logics[e][s].val=""),t.condition.logics[e][s].logic=l,t}:c=>{const t=a(c);return l==="null"&&(t.condition.logics[e].val=""),t.condition.logics[e].logic=l,t})},f=(l,e,s)=>{var o,c;((c=(o=p==null?void 0:p.condition)==null?void 0:o.logics)==null?void 0:c.length)>1&&n(s!==void 0?t=>{const r=a(t);if(r.condition.logics[l][e].length===s+1)if(r.condition.logics[l][e].length===3){const g=r.condition.logics[l][e][s-2];r.condition.logics[l].splice(e,1),r.condition.logics[l].push(g)}else r.condition.logics[l][e].splice(s-1,2);else if(r.condition.logics[l][e].length===3){const g=r.condition.logics[l][e][s+2];r.condition.logics[l].splice(e,1),r.condition.logics[l].push(g)}else r.condition.logics[l][e].splice(s,2);return r}:e!==void 0?t=>{const r=a(t);if(r.condition.logics[l].length===e+1)if(r.condition.logics[l].length===3){const g=r.condition.logics[l][e-2];r.condition.logics.splice(l,1),r.condition.logics.splice(l,0,g)}else r.condition.logics[l].splice(e-1,2);else if(r.condition.logics[l].length===3){const g=r.condition.logics[l][e+2];r.condition.logics.splice(l,1),r.condition.logics.splice(l,0,g)}else r.condition.logics[l].splice(e,2);return r}:t=>{const r=a(t);return l!==0?r.condition.logics.splice(l-1,2):r.condition.logics.splice(l,2),r})},w=l=>{l==="and"?n(e=>{const s=a(e);return s.condition.logics.push("and"),s.condition.logics.push({field:"",logic:"",val:""}),s}):l==="or"?n(e=>{const s=a(e);return s.condition.logics.push("or"),s.condition.logics.push({field:"",logic:"",val:""}),s}):l==="orGrp"?n(e=>{const s=a(e);return s.condition.logics.push("or"),s.condition.logics.push([{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]),s}):l==="andGrp"&&n(e=>{const s=a(e);return s.condition.logics.push("and"),s.condition.logics.push([{field:"",logic:"",val:""},"and",{field:"",logic:"",val:""}]),s})},G=(l,e)=>{l==="and"?n(s=>{const o=a(s);return o.condition.logics[e].push("and"),o.condition.logics[e].push({field:"",logic:"",val:""}),o}):l==="or"?n(s=>{const o=a(s);return o.condition.logics[e].push("or"),o.condition.logics[e].push({field:"",logic:"",val:""}),o}):l==="orGrp"?n(s=>{const o=a(s);return o.condition.logics[e].push("or"),o.condition.logics[e].push([{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]),o}):l==="andGrp"&&n(s=>{const o=a(s);return o.condition.logics[e].push("and"),o.condition.logics[e].push([{field:"",logic:"",val:""},"and",{field:"",logic:"",val:""}]),o})},d=(l,e,s)=>{l==="and"?n(o=>{const c=a(o);return c.condition.logics[e][s].push("and"),c.condition.logics[e][s].push({field:"",logic:"",val:""}),c}):l==="or"&&n(o=>{const c=a(o);return c.condition.logics[e][s].push("or"),c.condition.logics[e][s].push({field:"",logic:"",val:""}),c})},z=(l,e,s,o)=>{n(o!==void 0?c=>{const t=a(c);return t.condition.logics[e][s][o].val=l,t}:s!==void 0?c=>{const t=a(c);return t.condition.logics[e][s].val=l,t}:c=>{const t=a(c);return t.condition.logics[e].val=l,t})};return i.jsxs("div",{style:{width:900},children:[i.jsx("div",{children:((y=p==null?void 0:p.condition)==null?void 0:y.action_behavior)==="cond"&&((_=p==null?void 0:p.condition)==null?void 0:_.logics.map((l,e)=>i.jsxs("span",{children:[typeof l=="object"&&!Array.isArray(l)&&i.jsx($,{fieldVal:l.field,changeFormField:h,changeValue:m,logicValue:l.logic,changeLogic:k,delLogic:f,lgcInd:e,value:l.val,formFields:j,setValue:z}),typeof l=="string"&&i.jsx(q,{logic:l,onChange:s=>v(s.target.value,e)}),Array.isArray(l)&&i.jsxs("div",{className:"p-2 pl-6 br-10 btcd-logic-grp",children:[l.map((s,o)=>i.jsxs("span",{children:[typeof s=="object"&&!Array.isArray(s)&&i.jsx($,{fieldVal:s.field,changeFormField:h,changeValue:m,logicValue:s.logic,changeLogic:k,delLogic:f,lgcGrpInd:0,lgcInd:e,subLgcInd:o,value:s.val,formFields:j,setValue:z}),typeof s=="string"&&i.jsx(q,{logic:s,nested:!0,onChange:c=>v(c.target.value,e,o)}),Array.isArray(s)&&i.jsxs("div",{className:"p-2 pl-6 br-10 btcd-logic-grp",children:[s.map((c,t)=>i.jsxs("span",{children:[typeof c=="object"&&!Array.isArray(c)&&i.jsx($,{fieldVal:c.field,changeFormField:h,changeValue:m,logicValue:c.logic,changeLogic:k,delLogic:f,lgcInd:e,subLgcInd:o,subSubLgcInd:t,value:c.val,formFields:j,setValue:z}),typeof c=="string"&&i.jsx(q,{logic:c,nested:!0,onChange:r=>v(r.target.value,e,o,t)})]},`subsubLogic-${t+90}`)),i.jsx("div",{className:"btcd-workFlows-btns",children:i.jsxs("div",{className:"flx",children:[i.jsx(u,{icn:!0,className:"blue",children:i.jsx(N,{size:"14",className:"icn-rotate-45"})}),i.jsxs(u,{onClick:()=>d("and",e,o),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"," "]}),i.jsxs(u,{onClick:()=>d("or",e,o),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"," "]})]})})]})]},`subLogic-${o*7}`)),i.jsx("div",{className:" btcd-workFlows-btns",children:i.jsxs("div",{className:"flx",children:[i.jsx(u,{icn:!0,className:"blue sh-sm",children:i.jsx(N,{size:"14",className:"icn-rotate-45"})}),i.jsxs(u,{onClick:()=>G("and",e),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"]}),i.jsxs(u,{onClick:()=>G("or",e),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"]}),i.jsxs(u,{onClick:()=>G("orGrp",e),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"OR Group"]}),i.jsxs(u,{onClick:()=>G("andGrp",e),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"AND Group"]})]})})]})]},`logic-${e+44}`)))}),((A=p==null?void 0:p.condition)==null?void 0:A.action_behavior)==="cond"&&i.jsx("div",{className:"btcd-workFlows-btns",children:i.jsxs("div",{className:"flx",children:[i.jsxs(u,{onClick:()=>w("and"),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"]}),i.jsxs(u,{onClick:()=>w("or"),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"]}),i.jsxs(u,{onClick:()=>w("orGrp"),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"OR Group"]}),i.jsxs(u,{onClick:()=>w("andGrp"),className:"blue ml-2",children:[i.jsx(N,{size:"10",className:"icn-rotate-45 mr-1"}),"AND Group"]})]})})]})}export{u as B,M as C,T as M};
//# sourceMappingURL=bi.333.690.js.map