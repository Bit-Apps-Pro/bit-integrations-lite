var z=Object.defineProperty;var M=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var T=(i,s,d)=>s in i?z(i,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[s]=d,t=(i,s)=>{for(var d in s||(s={}))B.call(s,d)&&T(i,d,s[d]);if(M)for(var d of M(s))E.call(s,d)&&T(i,d,s[d]);return i};import{j as e,m as W,r as G,L as q}from"./main-579.js";import{_ as h,B as D,a6 as k,f as A,a7 as V}from"./bi.305.82.js";import{M as R}from"./bi.333.690.js";import{T as J}from"./bi.718.684.js";import{S as K}from"./bi.251.691.js";import{g as Q,a as f,b as P}from"./bi.507.807.js";import{T as U}from"./bi.62.692.js";import{h as X}from"./bi.199.686.js";const I=(i,s,d,l,r)=>{const m=t({},s);r?l?m.relatedlists[r-1].upload_field_map.splice(i,0,{}):m.relatedlists[r-1].field_map.splice(i,0,{}):l?m.upload_field_map.splice(i,0,{}):m.field_map.splice(i,0,{}),d(t({},m))},Y=(i,s,d,l,r)=>{const m=t({},s);r?l?m.relatedlists[r-1].upload_field_map.length>1&&m.relatedlists[r-1].upload_field_map.splice(i,1):m.relatedlists[r-1].field_map.length>1&&m.relatedlists[r-1].field_map.splice(i,1):l?m.upload_field_map.length>1&&m.upload_field_map.splice(i,1):m.field_map.length>1&&m.field_map.splice(i,1),d(t({},m))},S=(i,s,d,l,r,m)=>{const b=t({},d);m?r?b.relatedlists[m-1].upload_field_map[s][i.target.name]=i.target.value:b.relatedlists[m-1].field_map[s][i.target.name]=i.target.value:r?b.upload_field_map[s][i.target.name]=i.target.value:b.field_map[s][i.target.name]=i.target.value,i.target.value==="custom"&&(m?b.relatedlists[m-1].field_map[s].customValue="":b.field_map[s].customValue=""),l(t({},b))},Z=(i,s,d,l)=>{const r=t({},d);r.address_field[s].customValue=i.target.value,l(t({},r))},L=(i,s,d,l)=>{const r=t({},d);r.phone_field[s].customValue=i.target.value,l(t({},r))},$=(i,s,d,l,r,m)=>{const b=t({},d);b.address_field[s][i.target.name]=i.target.value,l(t({},b))},O=(i,s,d,l)=>{const r=t({},d);r.phone_field[s][i.target.name]=i.target.value,l(t({},r))},H=(i,s,d)=>{const l=t({},s);l.phone_field||(l.address_field=[]),l.address_field.push({}),d(t({},l))},o=(i,s,d)=>{const l=t({},s);l.address_field&&l.address_field.length>1&&l.address_field.splice(i,1),d(t({},l))},n=(i,s,d)=>{const l=t({},s);l.phone_field&&l.phone_field.length>1&&l.phone_field.splice(i,1),d(t({},l))};function C({i,formFields:s,field:d,constantContactConf:l,setConstantContactConf:r,addressField:m}){const b=d.required,_=m.filter(a=>!a.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsx("div",{className:"pos-rel flx",children:e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:a=>$(a,i,l,r),children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),s.map(a=>a.type!=="file"&&e.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`)),e.jsx("option",{value:"custom",children:h("Custom...","bit-integrations")})]}),d.formField==="custom"&&e.jsx(R,{onChange:a=>Z(a,i,l,r),label:h("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:h("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"constantContactAddressField",value:d.constantContactAddressField||"",onChange:a=>$(a,i,l,r),disabled:b,children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),b?Object.values(m).map((a,g)=>e.jsx("option",{value:a.tag,children:a.name},`add-${g*2}`)):Object.values(_).map((a,g)=>e.jsx("option",{value:a.tag,children:a.name},`add-${g*2}`))]})]})}),!b&&e.jsxs(e.Fragment,{children:[(l==null?void 0:l.address_field.length)<5&&e.jsx("button",{onClick:()=>H(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>o(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})}function ee({i,formFields:s,field:d,constantContactConf:l,setConstantContactConf:r,phoneField:m}){const b=d.required,_=m.filter(a=>!a.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsx("div",{className:"pos-rel flx",children:e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:a=>O(a,i,l,r),children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),s.map(a=>a.type!=="file"&&e.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`)),e.jsx("option",{value:"custom",children:h("Custom...","bit-integrations")})]}),d.formField==="custom"&&e.jsx(R,{onChange:a=>L(a,i,l,r),label:h("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:h("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"constantContactPhoneField",value:d.constantContactPhoneField||"",onChange:a=>O(a,i,l,r),disabled:b,children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),b?Object.values(m).map((a,g)=>e.jsx("option",{value:a.tag,children:a.name},`add-${g*2}`)):Object.values(_).map((a,g)=>e.jsx("option",{value:a.tag,children:a.name},`add-${g*2}`))]})]})}),!b&&e.jsx("button",{onClick:()=>n(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(J,{})})]})}function le({i,formFields:s,field:d,constantContactConf:l,setConstantContactConf:r}){var g,c,F,w;if(((g=l==null?void 0:l.field_map)==null?void 0:g.length)===1&&d.constantContactFormField===""){const p=t({},l),v=Q(p);p.field_map=v,r(p)}const m=((c=l==null?void 0:l.default)==null?void 0:c.constantContactFields.filter(p=>p.required===!0))||[],b=((F=l==null?void 0:l.default)==null?void 0:F.constantContactFields.filter(p=>p.required===!1))||[],_=W(D),{isPro:a}=_;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:p=>S(p,i,l,r),children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))}),e.jsx("option",{value:"custom",children:h("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${a?"":"(PRO)"}`,children:a&&((w=K)==null?void 0:w.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`)))})]}),d.formField==="custom"&&e.jsx(U,{onChange:p=>X(p,i,l,r),label:h("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:h("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",disabled:i<m.length,name:"constantContactFormField",value:i<m?m[i].label||"":d.constantContactFormField||"",onChange:p=>S(p,i,l,r),children:[e.jsx("option",{value:"",children:h("Select Field","bit-integrations")}),i<m.length?e.jsx("option",{value:m[i].key,children:m[i].label},m[i].key):b.map(({key:p,label:v})=>e.jsx("option",{value:p,children:v},p))]})]}),i>=m.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>I(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Y(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function se({id:i,constantContactConf:s,setConstantContactConf:d,address:l,phone:r,isLoading:m,setIsLoading:b}){var v,N;const[_,a]=G.useState({show:!1,action:()=>{}}),g=(u,j)=>{const x=t({},s);j==="update"&&(u.target.checked?x.actions.update=!0:delete x.actions.update),j==="list_ids"&&(f(i,s,d,m,b),u.target.checked?x.actions.list=!0:delete x.actions.list,a({show:j})),j==="tag_ids"&&(P(i,s,d,m,b),u.target.checked?x.actions.tag=!0:delete x.actions.tag,a({show:j})),j==="address_type"&&(u.target.checked?(x.actions.address=!0,x.address_field=l.filter(y=>y.required).map(y=>({formField:"",constantContactAddressField:y.tag,required:!0}))):s.address_type===""&&(delete x.actions.address,x.address_field=""),a({show:j})),j==="phone_type"&&(u.target.checked?(x.actions.phone=!0,x.phone_field=r.filter(y=>y.required).map(y=>({formField:"",constantContactPhoneField:y.tag,required:!0}))):s.phone_type===""&&(delete x.actions.phone,x.phone_field=""),a({show:j})),d(t({},x))},c=()=>{a({show:!1})},F=(u,j)=>{const x=t({},s);j==="list_ids"&&u.length?(x.actions.list=!0,x.actions.update=!0):j==="list_ids"&&u.length<1&&delete x.actions.list,j==="address_type"&&u.length?x.actions.address=!0:j==="address_type"&&u.length<1&&(delete x.actions.address,x.address_field=[]),j==="phone_type"&&u.length?x.actions.phone=!0:j==="phone_type"&&u.length<1&&(delete x.actions.phone,x.phone_field=[]),x[j]=u,d(t({},x))},w=[{label:"Home",value:"home"},{label:"Work",value:"work"},{label:"Other",value:"other"}],p=[{label:"Home",value:"home"},{label:"Work",value:"work"},{label:"Mobile",value:"mobile"},{label:"Fax",value:"fax"},{label:"Other",value:"other"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(k,{checked:(s==null?void 0:s.address_type)||!1,onChange:u=>g(u,"address_type"),className:"wdt-200 mt-4 mr-2",value:"address",title:h("Add Address Field","bit-integrations"),subTitle:h("Add Address Field","bit-integrations")}),e.jsx(k,{checked:(s==null?void 0:s.phone_type)||!1,onChange:u=>g(u,"phone_type"),className:"wdt-200 mt-4 mr-2",value:"phone",title:h("Add Phone Field","bit-integrations"),subTitle:h("Add Phone Field","bit-integrations")}),e.jsx(k,{checked:s.tag_ids.length||!1,onChange:u=>g(u,"tag_ids"),className:"wdt-200 mt-4 mr-2",value:"tag_ids",title:h("Tags","bit-integrations"),subTitle:h("Add Tags","bit-integrations")}),e.jsx(k,{checked:(s==null?void 0:s.list_ids.length)||!1,onChange:u=>g(u,"list_ids"),className:"wdt-200 mt-4 mr-2",value:"list_ids",title:h("Lists","bit-integrations"),subTitle:h("Add Lists","bit-integrations")})]}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:h("Ok","bit-integrations"),show:_.show==="address_type",close:c,action:c,title:h("Address Type","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(V,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.address_type,options:w.map(u=>({label:u.label,value:u.value})),onChange:u=>F(u,"address_type"),customValue:!0,singleSelect:!0})})]}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:h("Ok","bit-integrations"),show:_.show==="phone_type",close:c,action:c,title:h("Phone Type","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(V,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.phone_type,options:p.map(u=>({label:u.label,value:u.value})),onChange:u=>F(u,"phone_type"),customValue:!0,singleSelect:!0})})]}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:h("Ok","bit-integrations"),show:_.show==="list_ids",close:c,action:c,title:h("Lists","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),m.list?e.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(V,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.list_ids,options:(v=s==null?void 0:s.lists)==null?void 0:v.map(u=>({label:u.listName,value:u.listId})),onChange:u=>F(u,"list_ids"),customValue:!0}),e.jsx("button",{onClick:()=>f(s,d,m,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${h("Refresh Lists ","bit-integrations")}'`},type:"button",disabled:m.list,children:"↻"})]})]})," ",e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:h("Ok","bit-integrations"),show:_.show==="tag_ids",close:c,action:c,title:h("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),m.tag?e.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(V,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.tag_ids,options:(N=s==null?void 0:s.tags)==null?void 0:N.map(u=>({label:u.tagName,value:u.tagId})),onChange:u=>F(u,"tag_ids"),customValue:!0}),e.jsx("button",{onClick:()=>P(s,d,m,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${h("Refresh Tags ","bit-integrations")}'`},type:"button",disabled:m.tag,children:"↻"})]})]})]})}function xe({id:i,formFields:s,handleInput:d,constantContactConf:l,setConstantContactConf:r,isLoading:m,setIsLoading:b,setSnackbar:_}){var c,F,w,p;const a=[{tag:"street",name:"Street",required:!1},{tag:"city",name:"City",required:!1},{tag:"state",name:"State",required:!1},{tag:"postal_code",name:"Postal Code",required:!1},{tag:"country",name:"Country",required:!1}],g=[{tag:"phone_number",name:"Phone Number",required:!0}];return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:h("Source:","bit-integrations")}),e.jsxs("select",{onChange:d,name:"source_type",value:l.source_type,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:h("Select Source","bit-integrations")}),e.jsx("option",{value:"Contact",children:"Contact"})," ",e.jsx("option",{value:"Account",children:"Account"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("ConstantContact Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((v,N)=>e.jsx(le,{i:N,field:v,constantContactConf:l,formFields:s,setConstantContactConf:r,setSnackbar:_},`rp-m-${N+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(l.field_map.length,l,r,!1),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&((c=l.actions)==null?void 0:c.address)&&l.address_type!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:h("Address Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("Form Address Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("Constant Contact Address Fields","bit-integrations")})})]}),(F=l==null?void 0:l.address_field)==null?void 0:F.map((v,N)=>e.jsx(C,{i:N,field:v,constantContactConf:l,formFields:s,setConstantContactConf:r,addressField:a},`sheet-m-${N+9}`)),(l==null?void 0:l.address_field.length)<5&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>H(l.address_field.length,l,r),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{})," ",(l==null?void 0:l.source_type)!==""&&((w=l.actions)==null?void 0:w.phone)&&l.phone_type!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:h("Phone Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("Form Phone Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:h("Constant Contact Phone Fields","bit-integrations")})})]}),(p=l==null?void 0:l.phone_field)==null?void 0:p.map((v,N)=>e.jsx(ee,{i:N,field:v,constantContactConf:l,formFields:s,setConstantContactConf:r,phoneField:g},`sheet-m-${N+9}`))]}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:h("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(se,{id:i,constantContactConf:l,setConstantContactConf:r,address:a,phone:g,isLoading:m,setIsLoading:b})]})]})}export{xe as C};
//# sourceMappingURL=bi.77.808.js.map