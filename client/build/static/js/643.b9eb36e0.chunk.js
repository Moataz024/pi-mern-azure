"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[643],{40643:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(27937),l=a(2643),i=a(27565);const n="styles_tabs_list__BPDGR",c="styles_row__s7D48",o="styles_footer__Um0Af";var r=a(3676),d=a(61040),m=a(96529),u=a(99236),p=a(23163),x=a.n(p),h=a(54556),f=a(780),j=a(51047),g=a(79419),C=a(27929);const b=()=>{const[e,t]=(0,i.useState)("Complaint"),[a,s]=(0,i.useState)(""),[l,p]=(0,i.useState)(""),[b,v]=(0,i.useState)(""),[y,N]=(0,i.useState)(""),{USER:_}=(0,g.Z)(),{width:w}=(0,f.A)();return(0,C.jsx)(m.A,{className:"card d-flex flex-column card-padded",children:(0,C.jsx)("div",{className:"d-flex flex-column justify-content-between flex-1",children:(0,C.jsxs)(r.t,{value:e,children:[(0,C.jsx)(d.j,{className:"".concat(n," tab-nav "),children:(0,C.jsx)(h.A,{title:w>=375?" Complaint":"Complaint",onClick:()=>t("Complaint"),active:"Complaint"===e})}),(0,C.jsxs)("form",{className:"d-flex flex-column ",children:[(0,C.jsxs)("div",{className:c,children:[(0,C.jsx)("input",{className:x()("field text-700"),type:"text",placeholder:"Name",disabled:!0,value:_.fullname,onChange:e=>v(e.target.value)}),(0,C.jsx)("input",{className:x()("field text-700"),type:"email",placeholder:"Email",disabled:!0,value:_.email,onChange:e=>N(e.target.value)})]}),(0,C.jsx)("div",{className:c,children:(0,C.jsx)("input",{className:x()("field"),type:"text",placeholder:"Complaint Title",value:a,onChange:e=>s(e.target.value)})}),(0,C.jsx)("textarea",{className:x()("field"),placeholder:"Complaint Description",value:l,onChange:e=>p(e.target.value)}),(0,C.jsxs)("div",{className:o,children:[(0,C.jsx)("button",{className:"btn",type:"button",onClick:async()=>{try{const e=(await u.A.get("https://link-up-tournament.azurewebsites.net/User/getbyemail?email=".concat(_.email))).data._id,t=await u.A.post("https://link-up-tournament.azurewebsites.net/api/complaints",{userId:e,title:a,description:l});console.log("Complaint submitted successfully:",t.data),s(""),p(""),j.oR.success("Complaint submitted successfully")}catch(e){console.error("Error submitting complaint:",e.message),j.oR.error("Error submitting complaint")}},children:"Submit Complaint"}),(0,C.jsx)("button",{className:"btn btn--outlined",type:"reset",children:"Cancel"})]})]})]})})})},v={settings:(0,C.jsx)(b,{})},y=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s.A,{title:"Complaint"}),(0,C.jsx)(l.A,{id:"settings",widgets:v})]})}}]);
//# sourceMappingURL=643.b9eb36e0.chunk.js.map