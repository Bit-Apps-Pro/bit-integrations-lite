var y=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,t,i)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))S.call(t,i)&&f(e,i,t[i]);if(b)for(var i of b(t))$.call(t,i)&&f(e,i,t[i]);return e};import{_ as n,d,c as v}from"./bi.305.82.js";const w=(e,t,i)=>{const a=l({},t),{name:s}=e.target;e.target.value!==""?a[s]=e.target.value:delete a[s],i(l({},a))},k=(e,t,i)=>{const a={flowID:e!=null?e:null,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},s=v(a,"googleDrive_get_all_folders").then(r=>{if(r&&r.success){const o=l({},t);return r.data.googleDriveFoldersList&&(o.foldersList=r.data.googleDriveFoldersList,o.tokenDetails=r.data.tokenDetails),i(o),"GoogleDrive Folders List refreshed successfully"}else return"GoogleDrive Folders List refresh failed. please try again"});d.promise(s,{success:r=>r,error:n("Error Occurred","bit-integrations"),loading:n("Loading GoogleDrive Folders List...","bit-integrations")})},C=(e,t,i,a,s)=>{if(!e.clientId||!e.clientSecret){s({clientId:e.clientId?"":n("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":n("Client Secret can't be empty","bit-integrations")});return}a(!0);const o=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${e.clientId}`,g=window.open(o,"googleDrive","width=400,height=609,toolbar=off"),_=setInterval(()=>{if(g.closed){clearInterval(_);let c={},u=!1;const h=localStorage.getItem("__googleDrive");if(h&&(u=!0,c=JSON.parse(h),localStorage.removeItem("__googleDrive")),!c.code||c.error||!c||!u){const p=c.error?`Cause: ${c.error}`:"";d.error(`${n("Authorization failed","bit-integrations")} ${p}. ${n("please try again","bit-integrations")}`),a(!1)}else{const p=l({},e);p.accountServer=c["accounts-server"],I(c,p,t,i,a)}}},500)},I=(e,t,i,a,s)=>{const r=l({},e);r.clientId=t.clientId,r.clientSecret=t.clientSecret,r.redirectURI=`${btcbi.api.base}/redirect`,v(r,"googleDrive_authorization").then(o=>{if(o&&o.success){const g=l({},t);g.tokenDetails=o.data,i(g),a(!0),d.success(n("Authorized Successfully","bit-integrations"))}else o&&o.data&&o.data.data||!o.success&&typeof o.data=="string"?d.error(`${n("Authorization failed Cause:","bit-integrations")}${o.data.data||o.data}. ${n("please try again","bit-integrations")}`):d.error(n("Authorization failed. please try again","bit-integrations"));s(!1)})};export{C as a,k as g,w as h};
//# sourceMappingURL=bi.386.743.js.map
