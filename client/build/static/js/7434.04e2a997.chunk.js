"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[7434],{67434:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var s=a(27937),r=a(27565),n=a(96529),o=a(90403);const c={container:"styles_container__d5W9-",light:"styles_light__vMWVK",dark:"styles_dark__Eizam",field:"styles_field__xByiE"};var l=a(23163),i=a.n(l),d=a(21952),h=a(44260),u=a(51047),m=a(55370),f=a(85953),p=a(64824),x=a(13815),g=a(7477),j=a(780),y=a(80982),b=a(39442),v=a(27929);const w=e=>{let{matchId:t,index:a,variant:s="basic",selectedTournamentId:o}=e;const{width:l}=(0,j.A)(),{theme:w}=(0,g.q)(),N=[m,f,p,x],[C,S]=(0,r.useState)(),[k,T]=(0,r.useState)(),[M,A]=(0,r.useState)(),[_,E]=(0,r.useState)(),[F,D]=(0,r.useState)(),[I,R]=(0,r.useState)({day:null,month:null,year:null}),[L,G]=(0,r.useState)(""),[q,B]=(0,r.useState)(""),{handleSubmit:K,register:P,formState:{errors:U},control:H}=(0,b.mN)({defaultValues:{}});(0,r.useEffect)((()=>{o&&(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/getRefereesAndStadiumsForTournament/".concat(o));if(e.ok){const t=await e.json();T(t.Staduims),A(t.referees)}else u.oR.error("Failed to fetch  details")}catch{}})()}),[o]),(0,r.useEffect)((()=>{k&&M&&(async()=>{try{if(k&&k.length>0){const e=k.map((async e=>{const t=await fetch("http://localhost:3000/Stadium/getbyid/".concat(e));return t.ok||u.oR.error("Failed to fetch stadium details for ID ".concat(e)),t.json()})),t=await Promise.all(e);E(t)}if(M&&M.length>0){const e=M.map((async e=>{const t=await fetch("http://localhost:3000/User/getbyid/".concat(e));return t.ok||u.oR.error("Failed to fetch referee details for ID ".concat(e)),t.json()})),t=await Promise.all(e);D(t)}}catch(e){u.oR.error("Error fetching stadium and referee details:",e)}})()}),[k,M]);(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch("http://localhost:3000/Match/getbyid/".concat(t));if(!e.ok)throw new Error("Failed to fetch team details");const a=await e.json();S(a);const s=await fetch("http://localhost:3000/Team/getbyid/".concat(a.team1));if(!e.ok)throw new Error("Failed to fetch team details");const r=await s.json();z(r.name),Z(r.logo||W(r.logo));const n=await fetch("http://localhost:3000/Team/getbyid/".concat(a.team2));if(!n.ok)throw new Error("Failed to fetch team details");const o=await n.json();V(o.name),Q(o.logo||W(o.logo))}catch{}})()}),[t]);const W=e=>{let t=Math.floor(Math.random()*N.length);if(1===N.length)return N[0];for(;N[t]===e;)t=Math.floor(Math.random()*N.length);return N[t]},[Y,z]=(0,r.useState)(null),[O,V]=(0,r.useState)(null),[J,Q]=(0,r.useState)(null),[X,Z]=(0,r.useState)(null),[$,ee]=(0,r.useState)(!1),te=()=>{ee(!$)},[ae,se]=(0,r.useState)(null),[re,ne]=(0,r.useState)(null);return(0,v.jsxs)(n.A,{className:"".concat(c.container," ").concat(c[w]," h-100"),type:"slideUp",index:a,children:[Y&&O&&(0,v.jsxs)("div",{className:"card-padded d-flex flex-column g-20",style:{paddingBottom:"extended"!==s?"var(--card-padding)":10},children:[(0,v.jsxs)("div",{className:"d-flex align-items-center justify-content-between p-relative",children:[(0,v.jsx)("img",{className:"club-logo",src:X,alt:Y}),(0,v.jsxs)("button",{className:"btn",style:{backgroundColor:"#FDCA40",color:"black"},onClick:te,children:[" Match Details ",(0,v.jsx)("br",{}),(0,v.jsx)(d.vq8,{style:{marginLeft:"8px"},className:"icon"})]}),(0,v.jsx)("img",{className:"club-logo",src:J,alt:O})]}),l>=414&&(0,v.jsxs)("div",{className:"d-flex justify-content-between g-30",children:[(0,v.jsx)("div",{style:{minWidth:0},children:(0,v.jsx)("h3",{children:Y})}),(0,v.jsx)("div",{className:"text-right",style:{minWidth:0},children:(0,v.jsx)("h3",{children:O})})]}),(0,v.jsxs)(y.default,{open:$,onClose:te,children:[(0,v.jsx)("h2",{style:{margin:"22px",marginLeft:"70px"},children:"Match Details"}),(0,v.jsxs)("form",{onSubmit:K((e=>{(async e=>{try{(await fetch("http://localhost:3000/Match/update/".concat(C._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok||u.oR.error("Failed to update match details")}catch(t){u.oR.error("Error updating match details:",t)}})({startDay:parseInt(I.startDay),startMonth:parseInt(I.startMonth),startYear:parseInt(I.startYear),startHour:parseInt(L),startMinutes:parseInt(q),stadium:re,_ref:ae}),u.oR.success("Match Details Updated Successfully")})),children:[(0,v.jsxs)("div",{className:c.inputGroup,children:[(0,v.jsxs)("label",{children:["Referee:",(0,v.jsx)("select",{className:i()("field",{"field--error":U.referee}),style:{backgroundColor:"transparent",color:"#A1A3A6"},onChange:e=>se(e.target.value),children:F&&F.map((e=>(0,v.jsx)("option",{value:e._id,children:e.fullname},e._id)))})]}),U.referee&&(0,v.jsx)("span",{className:"error-message",children:"Referee is required"})]}),(0,v.jsxs)("div",{className:c.inputGroup,children:[(0,v.jsxs)("label",{children:["Stadium:",(0,v.jsx)("select",{className:i()("field",{"field--error":U.stadium}),style:{backgroundColor:"transparent",color:"#A1A3A6"},onChange:e=>ne(e.target.value),children:_&&_.map((e=>(0,v.jsx)("option",{value:e._id,children:e.name},e._id)))})]}),U.stadium&&(0,v.jsx)("span",{className:"error-message",children:"Stadium is required"})]}),(0,v.jsx)("div",{className:c.inputGroup,children:(0,v.jsxs)("label",{style:{margin:"2px"},children:["Match Day:",(0,v.jsx)("input",{type:"date",required:!0,className:i()("field",{"field--error":U.matchDay}),onChange:e=>{const t=new Date(e.target.value);R({startDay:t.getDate(),startMonth:t.getMonth()+1,startYear:t.getFullYear()})}}),U.matchDay&&(0,v.jsx)("span",{className:"error-message",children:"Match Day is required"})]})}),(0,v.jsxs)("div",{className:c.inputGroup,children:[(0,v.jsx)("label",{style:{margin:"2px"},children:"Match Start Hour:"}),(0,v.jsx)("input",{type:"number",required:!0,className:i()("field",{"field--error":U.matchStartHour}),min:"0",max:"23",value:L,onChange:e=>G(e.target.value)}),U.matchStartHour&&(0,v.jsx)("span",{className:"error-message",children:"Match Start Hour is required"})]}),(0,v.jsxs)("div",{className:c.inputGroup,children:[(0,v.jsx)("label",{style:{margin:"2px"},children:"Match Start Minute:"}),(0,v.jsx)("input",{type:"number",required:!0,className:i()("field",{"field--error":U.matchStartMinute}),min:"0",max:"59",value:q,onChange:e=>B(e.target.value)}),U.matchStartMinute&&(0,v.jsx)("span",{className:"error-message",children:"Match Start Minute is required"})]}),(0,v.jsx)("button",{style:{width:"100%",marginTop:"15px",backgroundColor:"#FDCA40",color:"black"},className:"btn",type:"submit",children:"Confirm"})]})]})]}),"extended"===s&&(0,v.jsx)("div",{className:"border-top",children:(0,v.jsx)(h.A,{wrapperClass:c.field,isCompact:!0})})]})},N=e=>{var t,a,s;let{selectedTournamentId:l}=e;const[i,d]=(0,r.useState)([]),[h,u]=(0,r.useState)(0),[m,f]=(0,r.useState)(),[p,x]=(0,r.useState)(),[g,j]=(0,r.useState)([]),[y,b]=(0,r.useState)([]);(0,r.useEffect)((()=>{l&&(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/getbyid/".concat(l));if(!e.ok)throw new Error("Failed to fetch Tournament");const t=await e.json();f(t),x(t.TournamentType)}catch(e){console.error("Error fetching tournament:",e)}})()}),[l]),(0,r.useEffect)((()=>{l&&p&&("League"===p?(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/fixtures/".concat(m._id));if(!e.ok)throw new Error("Failed to fetch matches for League");const t=await e.json();d(t.fixtures)}catch(e){console.error("Error fetching matches for type 1:",e)}})():"Knockout"===p?(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/getFixturesKnockout/".concat(m._id));if(!e.ok)throw new Error("Failed to fetch matches for Knockout");const t=await e.json();j(t.fixturesByRound)}catch(e){console.error("Error fetching matches for type 2:",e)}})():"Championship"===p&&(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/getMatchesFromGroupsWithMatches/".concat(m._id));if(!e.ok)throw new Error("Failed to fetch matches for Knockout");const t=await e.json();b(t.gamesByGroup)}catch(e){console.error("Error fetching matches for type 2:",e)}})())}),[p,l]);return(0,v.jsxs)(n.A,{className:"card d-flex flex-column card-padded",children:[(0,v.jsx)("div",{className:"d-flex flex-column g-24",style:{paddingBottom:24},children:(0,v.jsxs)("div",{className:"switch-buttons",children:[(0,v.jsx)("button",{style:{backgroundColor:"#FDCA40",color:"black"},className:"btn",onClick:()=>{"League"===p?u((e=>(e-1+i.length)%i.length)):"Knockout"===p?u((e=>(e-1+g.length)%g.length)):"Championship"===p&&u((e=>(e-1+y.length)%y.length))},children:"Previous"}),(0,v.jsx)("button",{style:{backgroundColor:"#FDCA40",color:"black",marginLeft:"950px"},className:"btn",onClick:()=>{"League"===p?u((e=>(e+1)%i.length)):"Knockout"===p?u((e=>(e+1)%g.length)):"Championship"===p&&u((e=>(e+1)%y.length))},children:"Next"})]})}),(0,v.jsx)("div",{className:"d-flex flex-column g-24",style:{paddingBottom:24},children:(0,v.jsx)("div",{className:c.grid,children:(0,v.jsx)("div",{className:"matchCardContainer-selector",children:(0,v.jsx)(o.A,{height:0,children:(0,v.jsx)("div",{className:"".concat(c.scroll_track," track d-flex flex-column g-20"),children:(0,v.jsxs)("div",{className:"game-container",children:["League"===p&&(0,v.jsx)(v.Fragment,{children:null===(t=i[h])||void 0===t?void 0:t.map(((e,t)=>(0,v.jsx)("div",{className:"matchCardContainer",children:(0,v.jsx)(w,{matchId:e,selectedTournamentId:l})},t)))}),"Knockout"===p&&(0,v.jsx)(v.Fragment,{children:g&&(null===(a=g[h])||void 0===a?void 0:a.map(((e,t)=>(0,v.jsx)("div",{className:"matchCardContainer",children:(0,v.jsx)(w,{matchId:e,selectedTournamentId:l})},t))))}),"Championship"===p&&(0,v.jsx)(v.Fragment,{children:y&&(null===(s=y[h])||void 0===s?void 0:s.map(((e,t)=>(0,v.jsx)("div",{className:"matchCardContainer",children:(0,v.jsx)(w,{matchId:e,selectedTournamentId:l})},t))))})]})})})})})})]})};var C=a(1588),S=a(52998),k=a(64053);const T=e=>{let{onTournamentSelect:t}=e;const[a,s]=(0,r.useState)([]),[o,c]=(0,r.useState)(!1),[l,i]=(0,r.useState)("");(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch("http://localhost:3000/Tournament/UserTournaments",{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});if(!e.ok)throw new Error("Failed to fetch tournaments");const t=await e.json();s(t.tournaments)}catch(e){console.error("Error fetching tournaments:",e)}})()}),[]);const h=(0,r.useRef)(null);(0,r.useEffect)((()=>{document.addEventListener("keydown",u,!0)}),[]);const u=e=>{"/"===e.key&&(e.preventDefault(),h.current.focus(),h.current.value="")};return(0,v.jsxs)(n.A,{className:"card d-flex flex-column g-16 card-padded",children:[(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o?(0,v.jsx)(S.A,{children:(0,v.jsx)(C.A,{className:"my-3",style:{paddingLeft:"30px"},children:(0,v.jsx)(S.A.Control,{ref:h,value:l,onChange:e=>{i(e.target.value)},onBlur:()=>c(!1),placeholder:"Search..",style:{padding:"8px",borderRadius:"5px",border:"1px solid #FDCA40",boxShadow:"none"}})})}):(0,v.jsx)("h2",{children:"Tournaments"}),(0,v.jsx)(C.A.Text,{onClick:()=>{c((e=>!e)),!o&&h.current&&h.current.focus()},style:{cursor:"pointer"},children:(0,v.jsx)(d.KSO,{style:{color:"#FBCB40"}})})]}),(0,v.jsx)("div",{className:"tournament-selector-container",children:a.filter((e=>""===l.toLowerCase()?e:e.title&&e.title.toLowerCase().includes(l))).map((e=>(0,v.jsx)("div",{className:"tournament-item",onClick:()=>t(e._id),children:(0,v.jsxs)("div",{className:"tournament-content",children:[(0,v.jsx)("img",{src:e.logo||k,alt:"Tournament Logo",className:"tournament-logo"}),(0,v.jsx)("p",{className:"tournament-title",children:e.title})]})},e._id)))})]})};var M=a(2643);const A=()=>{const[e,t]=(0,r.useState)(null),a={segment_chart:(0,v.jsx)(T,{onTournamentSelect:e=>{t(e)}}),month_matches:(0,v.jsx)(N,{selectedTournamentId:e})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.A,{title:"Manage Your Tournaments"}),(0,v.jsx)(M.A,{id:"championships",widgets:a})]})}},1588:(e,t,a)=>{a.d(t,{A:()=>f});var s=a(23163),r=a.n(s),n=a(27565),o=a(18430),c=a(79398);const l=n.createContext(null);l.displayName="InputGroupContext";const i=l;var d=a(27929);const h=n.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:n="span",...c}=e;return s=(0,o.oU)(s,"input-group-text"),(0,d.jsx)(n,{ref:t,className:r()(a,s),...c})}));h.displayName="InputGroupText";const u=h,m=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:s,hasValidation:c,className:l,as:h="div",...u}=e;a=(0,o.oU)(a,"input-group");const m=(0,n.useMemo)((()=>({})),[]);return(0,d.jsx)(i.Provider,{value:m,children:(0,d.jsx)(h,{ref:t,...u,className:r()(l,a,s&&"".concat(a,"-").concat(s),c&&"has-validation")})})}));m.displayName="InputGroup";const f=Object.assign(m,{Text:u,Radio:e=>(0,d.jsx)(u,{children:(0,d.jsx)(c.A,{type:"radio",...e})}),Checkbox:e=>(0,d.jsx)(u,{children:(0,d.jsx)(c.A,{type:"checkbox",...e})})})},55370:(e,t,a)=>{e.exports=a.p+"static/media/Def1.f733a85862457ed90892.png"},85953:(e,t,a)=>{e.exports=a.p+"static/media/Def2.4ae828d0b7d75243692e.png"},64824:(e,t,a)=>{e.exports=a.p+"static/media/Def3.d6e810e986466b7df008.png"},13815:(e,t,a)=>{e.exports=a.p+"static/media/Def4.8f10e11b899bc73bbaa9.png"},64053:(e,t,a)=>{e.exports=a.p+"static/media/uefa.48b07307d111ef73fb23.png"}}]);
//# sourceMappingURL=7434.04e2a997.chunk.js.map