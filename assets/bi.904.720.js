var r=Object.defineProperty;var p=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var _=(e,l,s)=>l in e?r(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,f=(e,l)=>{for(var s in l||(l={}))o.call(l,s)&&_(e,s,l[s]);if(p)for(var s of p(l))m.call(l,s)&&_(e,s,l[s]);return e};const n=(e,l,s,d,i)=>{const a=f({},l);i?d?a.relatedlists[i-1].upload_field_map.splice(e,0,{}):a.relatedlists[i-1].field_map.splice(e,0,{}):d?a.upload_field_map.splice(e,0,{}):a.field_map.splice(e,0,{}),s(f({},a))},g=(e,l,s,d,i)=>{const a=f({},l);i?d?a.relatedlists[i-1].upload_field_map.length>1&&a.relatedlists[i-1].upload_field_map.splice(e,1):a.relatedlists[i-1].field_map.length>1&&a.relatedlists[i-1].field_map.splice(e,1):d?a.upload_field_map.length>1&&a.upload_field_map.splice(e,1):a.field_map.length>1&&a.field_map.splice(e,1),s(f({},a))},u=(e,l,s,d,i,a)=>{const t=f({},s);a?i?t.relatedlists[a-1].upload_field_map[l][e.target.name]=e.target.value:t.relatedlists[a-1].field_map[l][e.target.name]=e.target.value:i?t.upload_field_map[l][e.target.name]=e.target.value:t.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(a?t.relatedlists[a-1].field_map[l].customValue="":t.field_map[l].customValue=""),d(f({},t))},h=(e,l,s,d,i,a)=>{const t=f({},s);t.address_field[l][e.target.name]=e.target.value,d(f({},t))},w=(e,l,s)=>{const d=f({},l);d.address_field||(d.address_field=[]),d.address_field.push({}),s(f({},d))},C=(e,l,s)=>{const d=f({},l);d.address_field&&d.address_field.length>1&&d.address_field.splice(e,1),s(f({},d))};export{u as a,n as b,g as c,C as d,w as e,h};
//# sourceMappingURL=bi.904.720.js.map
