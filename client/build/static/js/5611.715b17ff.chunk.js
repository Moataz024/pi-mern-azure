"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[5611],{4056:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(53727),l=a(23163),n=a.n(l),r=a(27929);const i=e=>{let{avatar:s,number:a,title:l,subtitle:i,wrapperClass:c,style:d={}}=e;return(0,r.jsxs)("div",{className:n()(c,{"d-flex justify-content-between align-items-center":s}),style:{...d},children:[(0,r.jsxs)("div",{className:"d-flex align-items-center g-12",children:[s?(0,r.jsx)(t.A,{className:"square-avatar",src:s,alt:l}):(0,r.jsx)("span",{className:"player-number",children:a}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("h3",{children:l}),(0,r.jsx)("span",{className:"text-12",children:i})]})]}),s&&(0,r.jsx)("span",{className:"player-number",children:a})]})}},64511:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(16159),l=a(27929);const n=e=>{let{title:s,value:a,barColor:n,trackColor:r}=e;return(0,l.jsxs)("div",{className:"d-flex flex-column g-10",children:[(0,l.jsx)("h6",{className:"label lh-1",children:s}),(0,l.jsx)("div",{className:"progress-item__progress",children:(0,l.jsx)(t.A,{value:a,barColor:n,trackColor:r})})]})}},84157:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(89105),l=a(47600),n=a(65493),r=a(10103),i=a(27929);const c=e=>{let{id:s,value:a}=e;const[c,{width:d}]=(0,n.A)(),o=(0,r.$_)(s);return(0,i.jsxs)("div",{className:"card h-1 d-flex flex-column border-color-bottom",style:{borderColor:"var(--".concat(o.color,")")},children:[(0,i.jsxs)("div",{className:"d-flex flex-column align-items-start flex-1 g-14",ref:c,style:{padding:"30px 30px 22px"},children:[(0,i.jsx)("img",{className:"club-logo club-logo--md",src:o.logo,alt:o.name}),(0,i.jsx)("h3",{children:(0,i.jsx)(t.A,{text:o.shortName,width:d})})]}),(0,i.jsx)("div",{className:"card_footer--sm",children:(0,i.jsx)(l.A,{goals:a})})]})}},10398:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(27565);const l=e=>{const[s,a]=(0,t.useState)(0);return{index:s,setIndex:a,navigate:t=>{const{direction:l}=t.currentTarget.dataset;"next"===l?s+1===e.length?a(0):a(s+1):"prev"===l&&a(s-1<0?e.length-1:s-1)}}}},35611:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(27937),l=a(2643),n=a(66456),r=a(29734),i=a(84157),c=a(17664),d=a(10436),o=a(19557),x=a(27991),m=a(49224),h=a(22786),u=a(27929);const j={league_rating:(0,u.jsx)(n.A,{}),matches_overview:(0,u.jsx)(r.A,{}),team_stats:(0,u.jsxs)(h.A,{children:[(0,u.jsx)(i.A,{id:"manunited",value:14}),(0,u.jsx)(i.A,{id:"chelsea",value:12})]}),team_pulse:(0,u.jsx)(c.A,{}),calendar:(0,u.jsx)(d.A,{}),standings:(0,u.jsx)(o.A,{}),ball_possession:(0,u.jsx)(x.A,{}),dots_chart:(0,u.jsx)(m.A,{})},b=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.A,{title:"English Premier League"}),(0,u.jsx)(l.A,{id:"league_overview",widgets:j})]})},47600:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(27929);const l=e=>{let{goals:s=0}=e;return(0,t.jsxs)("div",{className:"d-flex align-items-center g-8",children:[(0,t.jsx)("i",{className:"icon icon-ball text-12 text-header"}),(0,t.jsxs)("span",{className:"h6 text-uppercase",style:{letterSpacing:"0.45px"},children:[s," goals"]})]})}},27991:(e,s,a)=>{a.d(s,{A:()=>C});const t="styles_header__eSkGJ",l="styles_header_navigator__Nd3jx";var n=a(96529),r=a(51695),i=a(26174),c=a(43243),d=a(16644),o=a(51143),x=a(89280),m=a(52097),h=a(61576);const u="styles_container__EgU6j",j="styles_label__k5hZq",b="styles_button__5Li4P",p="styles_disabled__fTIeO";var g=a(23163),v=a.n(g),f=a(27929);const A=e=>{let{text:s,handler:a,prevDisabled:t,nextDisabled:l,className:n,...r}=e;return(0,f.jsxs)("div",{className:"".concat(u," ").concat(n||""," navigator"),...r,children:[(0,f.jsx)("button",{className:v()(b,{[p]:t}),onClick:a,"data-direction":"prev","aria-label":"Previous",children:(0,f.jsx)("i",{className:"icon icon-chevron-left"})}),(0,f.jsx)("span",{className:"".concat(j," text-12"),children:s}),(0,f.jsx)("button",{className:v()(b,{[p]:l}),onClick:a,"data-direction":"next","aria-label":"Next",children:(0,f.jsx)("i",{className:"icon icon-chevron-right"})})]})};var N=a(10398),y=a(7477);const _=[{id:"juventus",label:"Juventus (ITA)",data:[{a:12,b:25},{a:18,b:13},{a:8,b:31},{a:40,b:18},{a:12,b:36},{a:35,b:10},{a:10,b:38},{a:34,b:12}]},{id:"barcelona",label:"Barcelona (ESP)",data:[{a:17,b:50},{a:29,b:17},{a:36,b:22},{a:24,b:12},{a:44,b:52},{a:12,b:19},{a:37,b:21},{a:12,b:44}]},{id:"real_madrid",label:"Real Madrid (ESP)",data:[{a:15,b:28},{a:33,b:25},{a:44,b:12},{a:20,b:46},{a:8,b:50},{a:52,b:25},{a:28,b:12},{a:50,b:14}]},{id:"bayern",label:"Bayern (GER)",data:[{a:17,b:50},{a:29,b:17},{a:36,b:22},{a:24,b:12},{a:44,b:52},{a:12,b:19},{a:37,b:21},{a:12,b:44}]}],C=()=>{const{direction:e}=(0,y.q)(),{index:s,navigate:a}=(0,N.A)(_),u="rtl"===e,j={type:"monotone",strokeWidth:3,activeDot:{stroke:"var(--widget)"}};return(0,f.jsxs)(n.A,{className:"card h-1 d-flex flex-column g-10",children:[(0,f.jsxs)("div",{className:"".concat(t," card_header"),children:[(0,f.jsx)(r.A,{id:"realmadrid",title:"Ball possession",subtitle:"Inter, Milan"}),(0,f.jsx)(A,{className:l,text:_[s].label,handler:a})]}),(0,f.jsx)(i.u,{className:"flex-1",width:"100%",height:"100%",children:(0,f.jsxs)(c.Q,{data:_[s].data,margin:{top:4,right:0,left:0,bottom:0},children:[(0,f.jsx)(d.m,{cursor:!1,content:(0,f.jsx)(h.A,{multi:!0})}),(0,f.jsx)(o.W,{reversed:u,hide:!0}),(0,f.jsx)(x.h,{orientation:u?"right":"left",hide:!0}),(0,f.jsx)(m.G,{dataKey:"a",stroke:"var(--purple)",fill:"var(--purple)",fillOpacity:.8,...j}),(0,f.jsx)(m.G,{dataKey:"b",stroke:"var(--accent)",fill:"var(--accent)",fillOpacity:0,...j})]})})]})}},66456:(e,s,a)=>{a.d(s,{A:()=>o});var t=a(96529),l=a(67212),n=a(64511),r=a(3943),i=a(7477),c=a(91411),d=a(27929);const o=()=>{const{theme:e}=(0,i.q)(),s={"5 stars":400,"4 stars":210,"3 stars":300,"2 stars":56,"1 star":150},a=e=>{let s=0;for(const t in e)s+=e[t];const a={};for(const t in e)a[t]=e[t]/s*200;return a};return(0,d.jsxs)(t.A,{className:"card d-flex flex-column justify-content-between g-20 card-padded",children:[(0,d.jsx)(l.A,{img:c,title:"English Premier League",subtitle:"Regular Championship"}),(0,d.jsx)(r.A,{className:"h1 large",count:4.2,decimals:1}),(0,d.jsx)("div",{className:"d-flex flex-column g-24",children:Object.keys(s).map(((t,l)=>(0,d.jsx)(n.A,{title:t,value:a(s)[t],barColor:"accent",trackColor:"light"===e?"body":"border"},l)))})]})}},49224:(e,s,a)=>{a.d(s,{A:()=>u});var t=a(96529),l=a(4056),n=a(26174),r=a(22244),i=a(8730),c=a(23131),d=a(16644),o=a(61576),x=a(7477),m=a(27929);const h=e=>{let{cx:s,cy:a,fill:t,...l}=e;return(0,m.jsxs)("svg",{width:"10",height:"222",viewBox:"0 0 10 222",x:s,y:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{opacity:"0.5",d:"M5 28.3799V220.38",stroke:"url(#line_dots-".concat(l.theme,")"),strokeWidth:"2",strokeLinecap:"round"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:t}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"line_dots-light",x1:"1.5",y1:"77.0002",x2:"1.5",y2:"1.77246",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#D1E2EA"})]}),(0,m.jsxs)("linearGradient",{id:"line_dots-dark",x1:"1.5",y1:"59",x2:"1.5",y2:"1.37988",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"var(--neon-green)",stopOpacity:"0.2"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--neon-green)"})]})]})]})},u=()=>{const{theme:e}=(0,x.q)(),s=[{minutes:78},{minutes:49},{minutes:94},{minutes:125},{minutes:43},{minutes:100},{minutes:82},{minutes:69},{minutes:88},{minutes:105},{minutes:84},{minutes:52},{minutes:97}];return(0,m.jsxs)(t.A,{className:"card h-1 d-flex flex-column g-10 card-padded pb-0",children:[(0,m.jsx)(l.A,{number:7,title:"Jo\xe3o F\xe9lix",subtitle:"Minutes played"}),(0,m.jsx)(n.u,{className:"flex-1",width:"100%",height:"100%",children:(0,m.jsxs)(r.t,{margin:{top:0,right:5,bottom:0,left:5},data:s,children:[(0,m.jsx)(i.X,{dataKey:"minutes",shape:h,children:s.map(((s,a)=>(0,m.jsx)(c.f,{fill:"var(--neon-green)",theme:e,dataKey:"minutes"},"cell-".concat(a))))}),(0,m.jsx)(d.m,{cursor:!1,content:(0,m.jsx)(o.A,{})})]})})]})}},19557:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(96529),l=a(19902),n=a(27929);const r=()=>(0,n.jsxs)(t.A,{className:"card d-flex flex-column g-16 card-padded",children:[(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h3",{children:"Group E"}),(0,n.jsx)("p",{className:"text-12",children:"Standing after group stage"})]}),(0,n.jsx)("div",{className:"d-flex flex-column g-2",children:[{name:"Club Atl\xe9tico de Madrid",color:"red",score:9},{name:"FC Internazionale Milano",color:"blue",score:6},{name:"Celtic FC",color:"green",score:6},{name:"Liverpool FC",color:"orange",score:0}].map(((e,s)=>(0,n.jsx)(l.A,{data:e,index:s},s)))})]})},17664:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(96529),l=a(51695),n=a(76284),r=a(35637),i=a(27929);const c=()=>(0,i.jsxs)(t.A,{className:"card h-1 d-flex flex-column justify-content-between card-padded",children:[(0,i.jsx)(l.A,{id:"chelsea",title:"FC Chelsea",subtitle:"London, UK"}),(0,i.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,i.jsxs)("div",{className:"d-flex flex-column g-4",children:[(0,i.jsx)("h3",{children:"34 pts"}),(0,i.jsx)(n.A,{progress:2,text:"positions"})]}),(0,i.jsx)("div",{className:"flex-1",style:{maxWidth:140},children:(0,i.jsx)(r.A,{data:[{points:30},{points:120},{points:12},{points:168},{points:40},{points:200}],dataKey:"points"})})]})]})}}]);
//# sourceMappingURL=5611.715b17ff.chunk.js.map