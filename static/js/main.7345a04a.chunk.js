(this["webpackJsonpgrokit-frontend"]=this["webpackJsonpgrokit-frontend"]||[]).push([[0],{289:function(e,t,a){e.exports=a.p+"static/media/the-forgetting-curve.1d0cb6a1.png"},290:function(e,t,a){e.exports=a.p+"static/media/combating-the-forgetting-curve.66044795.png"},304:function(e,t,a){e.exports=a.p+"static/media/ExampleGraphs.2ef3bb32.png"},313:function(e,t,a){e.exports=a(526)},318:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(58),o=a.n(l),c=(a(318),a(138)),i={REGION:"eu-west-2",USER_POOL_ID:"eu-west-2_kiqr3R2mb",APP_CLIENT_ID:"5dkf83sgld69f2nvedggntas11"},s=a(14),m=a.n(s),u=a(33),d=a(143),p=a(35),f=a(7),E=a(27),v=a.n(E),g=a(42),b=a.n(g),h=a(552),k=a(20),j=a(21),w=a(598),y=Object(n.createContext)(null);function S(){return Object(n.useContext)(y)}var N=a(602),O=a(600);var C=Object(j.f)((function(e){var t=e.history,a=Object(n.useState)(!1),l=Object(f.a)(a,2),o=l[0],c=l[1],i=S(),s=i.loggedIn,u=i.setLoggedIn;function d(){return(d=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.signOut();case 2:u(!1),t.push("/grokit-frontend/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(N.a,{className:"NavBar",expand:"sm",expanded:o},r.a.createElement(N.a.Brand,{className:"grokitLogo"},"GrokIt"),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return c(!o&&"expanded")}}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{onClick:function(){return c(!1)}},r.a.createElement(k.b,{className:"px-3",to:"/grokit-frontend/"},"Home"),s?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.b,{className:"px-3",to:"/grokit-frontend/projects"},"Projects"),r.a.createElement(k.b,{className:"px-3",to:"/grokit-frontend/charts"},"Charts")):""),r.a.createElement(O.a,{className:"ml-auto"},s?r.a.createElement("button",{type:"button",className:"secondaryButton",onClick:function(){return d.apply(this,arguments)}},"Sign Out"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"secondaryButton",onClick:function(){return t.push("/grokit-frontend/signin")}},"Sign In"),r.a.createElement("button",{type:"button",className:"primaryButton",onClick:function(){return t.push("/grokit-frontend/signup")}},"Sign up")))))})),P=a(76),x=a(23);var I=function(e){var t=e.title,a=void 0===t?"":t,l=e.status,o=void 0!==l&&l,c=e.handleClose,i=void 0===c?function(){}:c,s=e.onSave,m=void 0===s?function(){}:s,d=Object(n.useState)({}),p=Object(f.a)(d,2),E=p[0],v=p[1],g=E.name,b=void 0===g?"":g;return r.a.createElement(x.a,{size:"sm",show:o,onHide:i,"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{id:"example-modal-sizes-title-sm"},a)),r.a.createElement(x.a.Body,null,r.a.createElement("label",{className:"Modal__label"},r.a.createElement("input",{className:"Modal__input",type:"text",placeholder:"Enter project name",value:b,name:"name",onChange:function(e){var t=e.target,a=(t=void 0===t?{}:t).value,n=void 0===a?"":a,r=t.name,l=void 0===r?"":r;v(Object(u.a)(Object(u.a)({},E),{},Object(P.a)({},l,n)))}}))),r.a.createElement(x.a.Footer,null,r.a.createElement("button",{type:"button",className:"secondaryButton darker",onClick:i},"Cancel"),r.a.createElement("button",{type:"button",className:"primaryButton",onClick:function(){m(E)},disabled:!b},"Save")))};var z=function(e){var t=e.addProject,a=void 0===t?function(){}:t,l=Object(n.useState)(!1),o=Object(f.a)(l,2),c=o[0],i=o[1],s=function(){return i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"newProject",onClick:function(){return i(!0)}},r.a.createElement("button",{type:"button",className:"primaryButton"},"Add New Project +")),c?r.a.createElement(I,{title:"Create New Project",status:c,handleClose:s,onSave:function(e){a(e),s()}}):"")},T=a(550),G=a(288),_=a(604),B=a(281);var D=function(e){var t=e.projectId,a=e.addSkill,l=void 0===a?function(){}:a,o=Object(n.useState)(""),c=Object(f.a)(o,2),i=c[0],s=c[1],m=function(){l(t,i),s("")};return r.a.createElement("div",{className:"addSkill row"},r.a.createElement("input",{type:"text",placeholder:"Add New Skill...",value:i,onChange:function(e){var t=e.target,a=(t=void 0===t?{}:t).value;s(void 0===a?"":a)},onKeyPress:function(e){"Enter"===e.key&&i.length&&m()}}),r.a.createElement("p",{onClick:m},"+"))};var F=function(e){var t=e.skillId,a=e.name,n=e.editSkillName,l=void 0===n?function(){}:n,o=e.deleteSkill,c=void 0===o?function(){}:o;return r.a.createElement("div",{className:"skillItem"},r.a.createElement("input",{type:"text",defaultValue:a,onChange:function(e){var a=e.target,n=(a=void 0===a?{}:a).value;l(t,void 0===n?"":n)}}),r.a.createElement("p",{onClick:function(){window.confirm('Are you sure you wish to delete "'.concat(a,'"? This will delete your progress and ').concat(a,"'s chart data."))&&c(t)}},"\xd7"))};var L=function(e){var t=e.skillId,a=e.name,n=e.deleteSkill,l=void 0===n?function(){}:n,o=e.editSkillName,c=void 0===o?function(){}:o;return r.a.createElement(T.a,null,r.a.createElement(F,{skillId:t,name:a,editSkillName:c,deleteSkill:l}))};var A=function(e){var t=e.startValue,a=void 0===t?"":t,l=e.title,o=void 0===l?"":l,c=e.placeholder,i=void 0===c?"":c,s=e.status,m=void 0!==s&&s,u=e.handleClose,d=void 0===u?function(){}:u,p=e.onSave,E=void 0===p?function(){}:p,v=Object(n.useState)(a),g=Object(f.a)(v,2),b=g[0],h=g[1];return r.a.createElement(x.a,{size:"sm",show:m,onHide:d,"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{id:o},o)),r.a.createElement(x.a.Body,null,r.a.createElement("label",{className:"Modal__label"},r.a.createElement("input",{className:"Modal__input",type:"text",placeholder:i,value:b,onChange:function(e){return h(e.target.value)}}))),r.a.createElement(x.a.Footer,null,r.a.createElement("button",{type:"button",className:"secondaryButton darker",onClick:d},"Cancel"),r.a.createElement("button",{type:"button",className:"primaryButton",onClick:function(){E(b)},disabled:!b},"Save")))};var M=function(e){var t=e.project,a=(t=void 0===t?{}:t).projectId,l=t.name,o=t.skills,c=void 0===o?[]:o,i=e.open,s=void 0===i||i,m=e.addSkill,u=void 0===m?function(){}:m,d=e.deleteSkill,p=void 0===d?function(){}:d,E=e.deleteProject,v=void 0===E?function(){}:E,g=e.editSkillName,b=void 0===g?function(){}:g,h=e.editProjectName,k=void 0===h?function(){}:h,j=Object(n.useState)(!1),w=Object(f.a)(j,2),y=w[0],S=w[1],N=Object(n.useState)(!1),O=Object(f.a)(N,2),C=O[0],P=O[1],x=function(){return P(!1)};return r.a.createElement(G.a,{xs:12,md:6,xl:4},r.a.createElement(_.a,{className:"grokitCard projectItem",key:a},r.a.createElement(_.a.Header,{className:"h4"},r.a.createElement("div",{className:"projectItem__modifier"},r.a.createElement("h2",null,"\u270e"),r.a.createElement("h1",null,l),r.a.createElement("button",{type:"button",onClick:function(){return P(!0)}},"\u270e"),C?r.a.createElement(A,{title:"Rename project",placeholder:"Enter new project name",startValue:l,status:C,handleClose:x,onSave:function(e){k(a,e),x()}}):""),r.a.createElement("div",{onClick:function(){return S(!y)}},r.a.createElement("div",{className:"arrow ".concat(y?"open":""),"aria-controls":"task-item-contents","aria-expanded":s}))),r.a.createElement(B.a,{in:y},r.a.createElement(_.a.Body,null,r.a.createElement(D,{projectId:a,addSkill:u}),c.map((function(e){var t=e.skillId,a=e.name;return r.a.createElement(L,{key:t,skillId:t,name:a,deleteSkill:p,editSkillName:b})})),r.a.createElement("button",{type:"button",className:"secondaryButton",onClick:function(){window.confirm('Are you sure you wish to delete "'.concat(l,'"? This will delete all associated skills.'))&&v(a)}},"Delete Project")))))};var R=function(e){var t=e.projects,a=void 0===t?[]:t,n=e.addSkill,l=void 0===n?function(){}:n,o=e.deleteSkill,c=void 0===o?function(){}:o,i=e.deleteProject,s=void 0===i?function(){}:i,m=e.editSkillName,u=void 0===m?function(){}:m,d=e.editProjectName,p=void 0===d?function(){}:d;return r.a.createElement(T.a,{className:"cardContainer"},a.map((function(e){return r.a.createElement(M,{key:e.projectId,project:e,addSkill:l,deleteProject:s,deleteSkill:c,editSkillName:u,editProjectName:p})})))};var H=function(e){var t=e.projects,a=void 0===t?[]:t,n=e.addProject,l=void 0===n?function(){}:n,o=e.addSkill,c=void 0===o?function(){}:o,i=e.deleteSkill,s=void 0===i?function(){}:i,m=e.deleteProject,u=void 0===m?function(){}:m,d=e.editSkillName,p=void 0===d?function(){}:d,f=e.editProjectName,E=void 0===f?function(){}:f;return S().loadingProjects?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{addProject:l}),r.a.createElement(R,{projects:a,addSkill:c,deleteSkill:s,deleteProject:u,editSkillName:p,editProjectName:E}))},U={name:"Times tables",skills:[{name:"Two times tables"},{name:"Three times tables"},{name:"Four times tables"},{name:"Five times tables"},{name:"Six times tables"},{name:"Seven times tables"},{name:"Eight times tables"},{name:"Nine times tables"},{name:"Ten times tables"},{name:"Eleven times tables"},{name:"Twelve times tables"}]},W={name:"Javascript Array Methods",skills:[{name:"Map"},{name:"Reduce"},{name:"Filter"},{name:"ForEach"}]},Y={name:"Football Skills",skills:[{name:"Shooting"},{name:"Goalkeeping"},{name:"Dribbling"},{name:"Throw ins"}]};var V=function(e){var t=e.name;return r.a.createElement(T.a,null,r.a.createElement("p",{key:t},t))};var Z=function(e){var t=e.project,a=(t=void 0===t?{}:t).name,l=t.skills,o=void 0===l?[]:l,c=e.open,i=void 0===c||c,s=Object(n.useState)(!1),m=Object(f.a)(s,2),u=m[0],d=m[1];return r.a.createElement(_.a,{className:"grokitCard",key:a},r.a.createElement(_.a.Header,{className:"h4","aria-controls":"task-item-contents","aria-expanded":i,onClick:function(){return d(!u)}},r.a.createElement("h1",null,a),r.a.createElement("div",{className:"arrow ".concat(u?"open":"")})),r.a.createElement(B.a,{in:u},r.a.createElement(_.a.Body,null,o.map((function(e){var t=e.name;return r.a.createElement(V,{key:t,name:t})})))))};var q=function(e){var t=e.projects,a=void 0===t?[]:t,n=(e.open,e.updatePractisedSkill,e.addProject),l=void 0===n?function(){}:n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"NoProjects__description"},"Welcome to ",r.a.createElement("span",{className:"grokitLogo"},"GrokIt"),". Let's get started by adding some projects that you want to Grok. ",r.a.createElement("br",null),"Look at the the example projects below and then click"," ",r.a.createElement(k.b,{to:"/grokit-frontend/projects"},"here")," to start adding your own."),r.a.createElement(T.a,null,r.a.createElement(G.a,null,r.a.createElement(Z,{addProject:l,projects:a,project:U})),r.a.createElement(G.a,null,r.a.createElement(Z,{addProject:l,projects:a,project:W})),r.a.createElement(G.a,null,r.a.createElement(Z,{addProject:l,projects:a,project:Y}))))};var J=function(e){var t=e.projectName,a=void 0===t?"":t;return r.a.createElement(T.a,null,a,": Done for today")},$=a(551);var K=function(e){var t=e.title,a=void 0===t?"":t,n=e.status,l=void 0!==n&&n,o=e.handleClose,c=void 0===o?function(){}:o,i=e.onSave,s=void 0===i?function(){}:i,m=function(e){s(e)};return r.a.createElement(x.a,{size:"sm",show:l,onHide:c,"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{id:a},a)),r.a.createElement(x.a.Footer,null,r.a.createElement("button",{className:"primaryButton",onClick:function(){return m("easy")}},"Easy"),r.a.createElement("button",{className:"primaryButton",onClick:function(){return m("medium")}},"Normal"),r.a.createElement("button",{className:"primaryButton",onClick:function(){return m("hard")}},"Hard")))};var X=function(e){var t=e.skill,a=void 0===t?{}:t,l=e.updatePractisedSkill,o=void 0===l?function(){}:l,c=Object(n.useState)(!1),i=Object(f.a)(c,2),s=i[0],m=i[1],u=function(){return m(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{onClick:function(){return m(!0)}},"Done"),s?r.a.createElement(K,{title:"How did the practice feel?",status:s,handleClose:u,onSave:function(e){console.log(e),o(a,e),u()}}):"")};var Q=function(e){var t=e.projectName,a=void 0===t?"":t,n=e.skill,l=void 0===n?{}:n,o=e.updatePractisedSkill,c=void 0===o?function(){}:o;return r.a.createElement(T.a,null,r.a.createElement("p",null,a,": ",l.name),r.a.createElement(X,{updatePractisedSkill:c,skill:l}))};var ee=function(e){var t=e.projectName,a=void 0===t?"":t;return r.a.createElement(T.a,null,a,": No task today")};var te=function(e){var t=e.datePractised,a=void 0===t?"":t,n=e.projectName,l=void 0===n?"":n,o=e.skillToDo,c=e.skill,i=void 0===c?{}:c,s=e.updatePractisedSkill,m=void 0===s?function(){}:s;return b()(a).isSame(b()(),"day")?r.a.createElement(J,{projectName:l}):o?r.a.createElement(Q,{projectName:l,skill:i,updatePractisedSkill:m}):r.a.createElement(ee,{projectName:l})},ae=a(191);var ne=function(e){var t=e.duration,a=Object(n.useState)(!1),l=Object(f.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(1),s=Object(f.a)(i,2),m=s[0],u=s[1],d=t,p=Date.now()/1e3,E=p+d-p,v=function(e,t){return r.a.createElement("div",{className:"time-wrapper"},r.a.createElement("div",{className:"time"},t),r.a.createElement("div",null,e))},g={isPlaying:o,size:120,strokeWidth:8,colors:[["#193654"],["#6babff"]]};return r.a.createElement(h.a,null,r.a.createElement(T.a,{className:"timer",key:m},r.a.createElement(ae.CountdownCircleTimer,Object.assign({onComplete:function(){return window.alert("Time for a break")}},g,{duration:d,initialRemainingTime:E}),(function(e){var t=e.elapsedTime;return v("minutes",(d-t)/60|0)})),r.a.createElement(ae.CountdownCircleTimer,Object.assign({},g,{duration:60,initialRemainingTime:E%60,onComplete:function(e){return[E-e>0]}}),(function(e){var t=e.elapsedTime;return v("seconds",60-t|0)}))),r.a.createElement(T.a,null,r.a.createElement($.a,{onClick:function(){return c(!0)}},"Start"),r.a.createElement($.a,{onClick:function(){return c(!1)}},"Pause"),r.a.createElement($.a,{onClick:function(){u(m+1),c(!1)}},"Reset")))};var re=function(){var e=S().name;return r.a.createElement("div",{className:"message"},r.a.createElement("p",null,"Hello ",e," your skills to practise today are... "))},le=a(553);var oe=function(e){var t=e.name,a=void 0===t?"":t,l=e.projectId,o=void 0===l?"":l,c=e.datePractised,i=void 0===c?"":c,s=Object(n.useState)([]),m=Object(f.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(7),E=Object(f.a)(p,2),g=E[0],h=E[1],k=Object(n.useState)(7),j=Object(f.a)(k,2),w=j[0],y=j[1];return Object(n.useEffect)((function(){v.a.get("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/schedule/".concat(o,"/").concat(i,"?endDate=").concat(b()().add(w-1,"days"))).then((function(e){d(e.data.schedule)})).catch((function(e){console.log("Error fetching data",e)}))}),[o,w,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Choose number of days to show the predicted schedule for."),r.a.createElement("div",{className:"projectSchedule"},r.a.createElement("input",{type:"number",value:g,onChange:function(e){return h(e.target.value)}}),r.a.createElement("p",{className:"simpleButton",onClick:function(e){y(g)}},"\u2713")),r.a.createElement(le.a,{bordered:!0,size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},a))),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Skill"))),r.a.createElement("tbody",null,u.map((function(e){var t=e.date,a=e.skill;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,b()(t).format("DD MMM YYYY")),r.a.createElement("td",null,a))})))))};var ce=function(e){var t=e.projects,a=void 0===t?[]:t,l=e.open,o=void 0===l||l,c=e.updatePractisedSkill,i=void 0===c?function(){}:c,s=Object(n.useState)(!1),m=Object(f.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(),E=Object(f.a)(p,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{name:E}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"primaryButton",onClick:function(){return d(!1)}},"Close Pomodoro Timer"),r.a.createElement(ne,{duration:1500})):r.a.createElement("button",{type:"button",className:"primaryButton",onClick:function(){return d(!0)}},"Show Pomodoro Timer"),r.a.createElement(_.a,{style:{border:"2px solid black"}},r.a.createElement(_.a.Header,{className:"h4","aria-controls":"task-item-contents","aria-expanded":o},r.a.createElement("h1",null,"Skills to practise today")),r.a.createElement(_.a.Body,null,a&&a.map((function(e){var t=e.projectId,a=e.datePractised,n=e.name,l=e.skillToDo,o=e.skills,c=void 0===o?[]:o;if(!c.length)return null;var s=c.find((function(e){return e.skillId===l}))||{};return r.a.createElement(te,{key:t,datePractised:a,projectName:n,skill:s,skillToDo:l,updatePractisedSkill:i})})))),r.a.createElement(T.a,null,r.a.createElement(G.a,null,r.a.createElement("p",null,"Below you can see the predicted schedule for each of your projects.",r.a.createElement("br",null),"It is likely to change if you add or remove skills, or rate the difficulty of practise as easy or hard."))),r.a.createElement(T.a,null,a.map((function(e){var t=e.projectId,a=e.name,n=e.datePractised;return r.a.createElement(G.a,{xs:12,md:6,xl:3},r.a.createElement(oe,{key:t,projectId:t,name:a,datePractised:n}))}))))};var ie=function(e){var t=e.projects,a=void 0===t?[]:t,n=(e.open,e.updatePractisedSkill),l=void 0===n?function(){}:n,o=e.addProject,c=void 0===o?function(){}:o;return S().loadingProjects?null:0===a.length?r.a.createElement(q,{projects:a,addProject:c}):r.a.createElement(ce,{projects:a,updatePractisedSkill:l})},se=a(603),me=a(289),ue=a.n(me),de=a(290),pe=a.n(de);var fe=function(){return r.a.createElement(h.a,{className:"introPage"},r.a.createElement(T.a,{className:"introPage__introduction"},r.a.createElement(G.a,null,r.a.createElement("p",null,"Welcome, please click here to ",r.a.createElement("br",null),r.a.createElement(k.b,{to:"/grokit-frontend/signin"},"Sign in")," or ",r.a.createElement(k.b,{to:"/grokit-frontend/signup"},"Sign Up")," "))),r.a.createElement(T.a,null,r.a.createElement(G.a,null,r.a.createElement("h2",null,"Why ",r.a.createElement("span",{className:"grokitLogo"},"GrokIt"),"?"),r.a.createElement("h3",{className:"introPage__quotation"},r.a.createElement("i",null,"grok ",r.a.createElement("small",null,"(verb)"))),r.a.createElement("p",null,"to understand completely and intuitively "))),r.a.createElement(T.a,null,r.a.createElement(G.a,{xs:12,lg:6},r.a.createElement(se.a,null,r.a.createElement(se.a.Image,{src:ue.a,width:450,alt:"The Forgetting Curve",rounded:!0}),r.a.createElement(se.a.Caption,null,"The Forgetting Curve, image from ",r.a.createElement("a",{href:"https://www.growthengineering.co.uk/wp-content/uploads/2016/11/the-forgetting-curve.png"},"Growth Engineering")," ")),r.a.createElement("p",null,"Information is lost from our memory over time if no effort is made to retain it.")),r.a.createElement(G.a,{xs:12,lg:6},r.a.createElement(se.a,null,r.a.createElement(se.a.Image,{src:pe.a,width:450,alt:"Combating the Forgetting Curve",rounded:!0}),r.a.createElement(se.a.Caption,null,"Combating the Forgetting Curve, image from ",r.a.createElement("a",{href:"https://www.growthengineering.co.uk/wp-content/uploads/2016/09/combating-the-forgetting-curve.png"},"Growth Engineering")," ")),r.a.createElement("p",null,"The most effective time to practise a skill or rehearse knowledge is just before you forget it. We will remind you what to work on each day, until you"," ",r.a.createElement("strong",null,r.a.createElement("span",{className:"grokitLogo"},"GrokIt")),"."))))},Ee=a(292);function ve(e){var t=e.skillName,a=e.dateFirstPractised,n=e.practisedData,r=void 0===n?[]:n,l={id:t};return l.data=function(e,t){var a=e[0],n=1,r=e.flatMap((function(r,l){var o=[],c=r.day-a.day;0!==r.lastGap0&&0!==r.lastGap1&&(n=n*r.lastGap0/r.lastGap1);for(var i=1;i<=c;i++){var s=100*Math.exp(-i*n)|0;o.push(s)}if(o.push(100),a=r,l===e.length-1){var m=b()().diff(b()(t),"days")-a.day;0!==r.lastGap0&&0!==r.lastGap1&&(n=n*r.lastGap0/r.lastGap1);for(var u=1;u<=m;u++){var d=100*Math.exp(-u*n)|0;o.push(d)}}return o})),l=0;return r.map((function(e){return 100!==e&&l++,{x:l,y:e}}))}(r,a),[l]}var ge=function(e){var t=e.title,a=void 0===t?"":t,n=e.height,l=void 0===n?250:n,o=e.chartData,c=ve(void 0===o?[]:o);return r.a.createElement("div",{className:"linechart",style:{height:l}},r.a.createElement("h3",null," ",a),r.a.createElement(Ee.a,{className:"graph",data:c,margin:{top:10,right:30,bottom:50,left:60},xScale:{type:"linear",tickValues:1,min:0},yScale:{type:"linear",min:0},axisTop:null,axisRight:null,axisLeft:{legend:"Remembered",legendPosition:"middle",legendOffset:-50},axisBottom:{legend:"Days from first practice",legendPosition:"middle",legendOffset:40},theme:{fontSize:14,fontFamily:"Verdana, Arial, sans-serif",axis:{legend:{text:{fontSize:16}}}},curve:"linear",colors:{scheme:"accent"},lineWidth:3,pointSize:5,enableArea:!1,enableGridX:!0,enableGridY:!0,tooltip:function(e){var t=e.point.data,a=t.x,n=t.y;return r.a.createElement("div",{className:"linechart__tooltip"},"Day: ",a," ",r.a.createElement("br",null),100===n?"Practised":"Remembered: ".concat(0|n,"%"))},useMesh:!0,enableCrosshair:!1}))},be=a(291),he=a(304),ke=a.n(he);var je=function(){return r.a.createElement(T.a,null,r.a.createElement("h4",{className:"noChartsDisplay__title"},"As you start completing skills, charts will display to show your progress, like in the example below."),r.a.createElement(be.a,{src:ke.a}))};var we=function(){var e=S().userId,t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!0),i=Object(f.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){m(!0),v.a.get("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/linechart?userId=".concat(e)).then((function(e){o(e.data.linechartData),m(!1)})).catch((function(e){console.log("Error fetching data",e)}))}),[e]),s?null:r.a.createElement(h.a,{fluid:"lg"},0===l.length?r.a.createElement(je,null):l&&l.map((function(e){var t=e.projectName,a=e.skills,n=void 0===a?[]:a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{key:t},r.a.createElement("h3",null,t)),r.a.createElement(T.a,null,n.map((function(e){return r.a.createElement(G.a,{key:e.skillId},r.a.createElement(ge,{chartData:e,title:e.skillName,height:300}))}))))})))},ye=a(599);function Se(e){var t=Object(n.useState)(e),a=Object(f.a)(t,2),r=a[0],l=a[1];return[r,function(e){l(Object(u.a)(Object(u.a)({},r),{},Object(P.a)({},e.target.id,e.target.value)))}]}function Ne(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}var Oe=Object(j.f)((function(e){var t=e.history,a=S(),l=a.setLoggedIn,o=a.setUserId,c=a.setName,i=Object(n.useState)({email:{error:!1,message:"Please enter a valid email."},password:{error:!1,message:"Please enter a valid password."}}),s=Object(f.a)(i,2),u=s[0],d=s[1],E=Se({email:"",password:""}),v=Object(f.a)(E,2),g=v[0],b=v[1];function h(){var e=Object.assign({},u);e.email.error=!1,e.password.error=!1,d(e)}function j(){return(j=Object(p.a)(m.a.mark((function e(a){var n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),h(),0!==g.email.length&&/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(g.email)||((n=Object.assign({},u)).email.error=!0,d(n)),!(g.password.length<8)){e.next=9;break}(r=Object.assign({},u)).password.error=!0,d(r),e.next=24;break;case 9:return e.prev=9,e.next=12,w.a.signIn(g.email,g.password);case 12:return e.next=14,w.a.currentUserInfo();case 14:i=e.sent,l(!0),o(i.username),c(i.attributes.name),t.push("/grokit-frontend/"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),Ne(e.t0);case 24:case"end":return e.stop()}}),e,null,[[9,21]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"forms"},r.a.createElement(ye.a,{className:"border"},r.a.createElement("h2",null,"Please Sign in"),r.a.createElement(ye.a.Group,{controlId:"email"},r.a.createElement(ye.a.Label,{className:"size"},"Email address"),r.a.createElement(ye.a.Control,{type:"email",placeholder:"Enter email",value:g.email,onChange:b}),u.email.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.email.message)),r.a.createElement(ye.a.Group,{controlId:"password"},r.a.createElement(ye.a.Label,null,"Password"),r.a.createElement(ye.a.Control,{type:"password",placeholder:"Password",value:g.password,onChange:b}),u.password.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.password.message)),r.a.createElement("button",{type:"submit",className:"primaryButton",onClick:function(e){return j.apply(this,arguments)}},"Sign In"),r.a.createElement("div",null,r.a.createElement("small",null,"Forgot password?"," ",r.a.createElement(k.b,{to:"/grokit-frontend/resetpassword"},"Reset password"))),r.a.createElement("div",null,r.a.createElement("small",null,"No account? Create an"," ",r.a.createElement(k.b,{to:"/grokit-frontend/signup"},"account")))))})),Ce=a(305),Pe=new(a.n(Ce).a);Pe.is().min(8).has().uppercase().has().lowercase().has().digits().has().symbols();var xe=Object(j.f)((function(e){var t=e.history,a=Object(n.useState)(null),l=Object(f.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)({name:{error:!1,message:"Please enter a name."},email:{error:!1,message:"Please enter a valid email."},password:{error:!1,message:"Please enter a valid password. Required: 8 characters, lowercase, uppercase, special characters, numbers."},confirmPassword:{error:!1,message:"Passwords do not match."}}),s=Object(f.a)(i,2),u=s[0],d=s[1],E=S(),g=E.setLoggedIn,b=E.setUserId,h=E.setName,j=Se({newName:"",newEmail:"",newPassword:"",confirmPassword:"",confirmationCode:""}),y=Object(f.a)(j,2),N=y[0],O=y[1];function C(){var e=Object.assign({},u);e.name.error=!1,e.email.error=!1,e.password.error=!1,e.confirmPassword.error=!1,d(e)}function P(e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(m.a.mark((function e(t){var a,n,r,l,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(),0===N.newName.length&&((a=Object.assign({},u)).name.error=!0,d(a)),0!==N.newEmail.length&&/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(N.email)||((n=Object.assign({},u)).email.error=!0,d(n)),Pe.validate(N.newPassword)||((r=Object.assign({},u)).password.error=!0,d(r)),N.newPassword===N.confirmPassword){e.next=11;break}(l=Object.assign({},u)).confirmPassword.error=!0,d(l),e.next=21;break;case 11:return e.prev=11,e.next=14,w.a.signUp({username:N.newEmail,password:N.newPassword,attributes:{name:N.newName}});case 14:o=e.sent,c(o),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),Ne(e.t0);case 21:case"end":return e.stop()}}),e,null,[[11,18]])})))).apply(this,arguments)}function I(e){return z.apply(this,arguments)}function z(){return(z=Object(p.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.a.confirmSignUp(N.newEmail,N.confirmationCode);case 4:return e.next=6,w.a.signIn(N.newEmail,N.newPassword);case 6:return e.next=8,w.a.currentUserInfo();case 8:n=e.sent,r={userId:n.username,name:n.attributes.name},v.a.post("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/users",r).then((function(e){b(r.userId),h(r.name),g(!0),t.push("/grokit-frontend/")})).catch((function(e){console.log("Error fetching data",e)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),Ne(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return null===o?r.a.createElement("div",{className:"forms"},r.a.createElement(ye.a,{className:"border"},r.a.createElement("h2",null,"Create an account"),r.a.createElement(ye.a.Group,{controlId:"newName"},r.a.createElement(ye.a.Label,null," Name"),r.a.createElement(ye.a.Control,{type:"name",placeholder:"Enter name",value:N.newName,onChange:O}),u.name.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.name.message)),r.a.createElement(ye.a.Group,{controlId:"newEmail"},r.a.createElement(ye.a.Label,null,"Email address"),r.a.createElement(ye.a.Control,{type:"email",placeholder:"Enter email",value:N.newEmail,onChange:O}),u.email.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.email.message)),r.a.createElement(ye.a.Group,{controlId:"newPassword"},r.a.createElement(ye.a.Label,null,"Password"),r.a.createElement(ye.a.Control,{type:"password",placeholder:"Enter password",value:N.newPassword,onChange:O}),u.password.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.password.message)),r.a.createElement(ye.a.Group,{controlId:"confirmPassword"},r.a.createElement(ye.a.Label,null,"Confirm Password"),r.a.createElement(ye.a.Control,{type:"password",placeholder:"Confirm password",value:N.confirmPassword,onChange:O}),u.confirmPassword.error&&r.a.createElement(ye.a.Text,{style:{color:"red"}},u.confirmPassword.message)),r.a.createElement("button",{type:"submit",className:"primaryButton",onClick:P},"Sign up"),r.a.createElement("div",null,r.a.createElement("small",null,"Already have an account?"," ",r.a.createElement(k.b,{to:"/grokit-frontend/signin"},"Sign in"))))):r.a.createElement("div",{className:"forms"},r.a.createElement(ye.a,{onSubmit:I},r.a.createElement(ye.a.Group,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(ye.a.Label,{className:"forms__confirmationTitle"},"Confirmation Code"),r.a.createElement(ye.a.Text,{className:"forms__confirmationText"},"We have just sent you a confirmation code, please check your email"),r.a.createElement(ye.a.Control,{type:"tel",placeholder:"Confirmation Code",onChange:O,value:N.confirmationCode})),r.a.createElement($.a,{block:!0,type:"submit",bsSize:"large",className:"primaryButton"},"Verify")))}));var Ie=function(){var e=Se({code:"",email:"",password:"",confirmPassword:""}),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(f.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(!1),d=Object(f.a)(u,2),E=d[0],v=d[1];function g(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.forgotPassword(a.email);case 4:s(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),Ne(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function h(e){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.forgotPasswordSubmit(a.email,a.code,a.password);case 4:v(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),Ne(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"ResetPassword forms"},i?E?r.a.createElement("div",{className:"success"},r.a.createElement("p",null,"Your password has been reset."),r.a.createElement("p",null,"Click ",r.a.createElement(k.b,{to:"/signin"},"here "),"to sign in with your new password.")):r.a.createElement("div",{className:"border"},r.a.createElement(ye.a,{onSubmit:h},r.a.createElement(ye.a.Group,{bsSize:"large",controlId:"code"},r.a.createElement(ye.a.Label,null,"Confirmation Code"),r.a.createElement(ye.a.Control,{autoFocus:!0,type:"tel",value:a.code,onChange:l}),r.a.createElement("div",null,"Please check your email (",a.email,") for the confirmation code.")),r.a.createElement("hr",null),r.a.createElement(ye.a.Group,{bsSize:"large",controlId:"password"},r.a.createElement(ye.a.Label,null,"New Password"),r.a.createElement(ye.a.Control,{type:"password",value:a.password,onChange:l})),r.a.createElement(ye.a.Group,{bsSize:"large",controlId:"confirmPassword"},r.a.createElement(ye.a.Label,null,"Confirm Password"),r.a.createElement(ye.a.Control,{type:"password",value:a.confirmPassword,onChange:l})),r.a.createElement($.a,{block:!0,type:"submit",bsSize:"large",className:"primaryButton"},"Confirm"))):r.a.createElement("div",{className:"border"},r.a.createElement(ye.a,{onSubmit:g},r.a.createElement(ye.a.Group,{bsSize:"large",controlId:"email"},r.a.createElement(ye.a.Label,null,"Email"),r.a.createElement(ye.a.Control,{autoFocus:!0,type:"email",value:a.email,onChange:l})),r.a.createElement($.a,{block:!0,type:"submit",bsSize:"large",className:"primaryButton"},"Send Confirmation")),r.a.createElement("div",null,r.a.createElement("small",null,"Want to try to sign in? ",r.a.createElement(k.b,{to:"/grokit-frontend/signin"},"Sign In"))),r.a.createElement("div",null,r.a.createElement("small",null,"No account? Create an ",r.a.createElement(k.b,{to:"/grokit-frontend/signup"},"account")))))};var ze=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),c=Object(f.a)(o,2),i=c[0],s=c[1],E=Object(n.useState)(!0),g=Object(f.a)(E,2),S=g[0],N=g[1],O=Object(n.useState)(),P=Object(f.a)(O,2),x=P[0],I=P[1],z=Object(n.useState)([]),T=Object(f.a)(z,2),G=T[0],_=T[1],B=Object(n.useState)(!0),D=Object(f.a)(B,2),F=D[0],L=D[1];function A(){return(A=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.currentSession();case 3:return l(!0),e.next=6,w.a.currentUserInfo();case 6:t=e.sent,s(t.username),I(t.attributes.name),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:N(!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){A.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){i&&(L(!0),v.a.get("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects?userId=".concat(i)).then((function(e){_(e.data.projects),L(!1)})).catch((function(e){console.log("Error fetching data",e)})))}),[i]);var M=function(e){var t=e.name,a={name:void 0===t?"":t,userId:i,datePracticed:Date.now()};v.a.post("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects",a).then((function(e){var t=e.data,a=(t=void 0===t?{}:t).projects,n=void 0===a?[]:a;_([].concat(Object(d.a)(G),Object(d.a)(n)))})).catch((function(e){console.log("Error posting project",e)}))};return!S&&r.a.createElement(k.a,null,r.a.createElement(y.Provider,{value:{loggedIn:a,setLoggedIn:l,userId:i,setUserId:s,name:x,setName:I,loadingProjects:F}},r.a.createElement(C,null),r.a.createElement(h.a,{className:"App"},r.a.createElement(j.c,null,!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{exact:!0,path:"/grokit-frontend/"},r.a.createElement(fe,null)),r.a.createElement(j.a,{path:"/grokit-frontend/signup"},r.a.createElement(xe,null)),r.a.createElement(j.a,{path:"/grokit-frontend/signin"},r.a.createElement(Oe,null)),r.a.createElement(j.a,{path:"/grokit-frontend/resetpassword"},r.a.createElement(Ie,null))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{exact:!0,path:"/grokit-frontend/"},r.a.createElement(ie,{projects:G,updatePractisedSkill:function(e,t){var a=e.projectId,n=e.skillId;v.a.put("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/markAsPractised/".concat(t),e).then((function(e){var t=e.data.practisedSkill;window.alert("Great job. You'll see this skill again in about ".concat(t.lastGap1," day").concat(1===t.lastGap1?"":"s","."));var r=G.map((function(e){var r=e.skills,l=void 0===r?[]:r;return e.projectId===a&&(e.datePractised=b()().format("YYYY-MM-DD"),e.skillToDo=null,l.map((function(e){return e.skillId===n&&(e=t),e}))),e}));_(r)})).catch((function(e){console.log("Error fetching data",e)}))},addProject:M})),r.a.createElement(j.a,{path:"/grokit-frontend/projects"},r.a.createElement(H,{addProject:M,projects:G,addSkill:function(e,t){var a={name:t,projectId:e};v.a.post("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills",a).then((function(t){var a=G.map((function(a){var n=a.skills,r=void 0===n?[]:n;return a.projectId===e?a.skills?Object(u.a)(Object(u.a)({},a),{},{skills:[].concat(Object(d.a)(r),[t.data.skill])}):Object(u.a)(Object(u.a)({},a),{},{skillToDo:t.data.skill.skillId,skills:[t.data.skill]}):a}));_(a)})).catch((function(e){console.log("Error posting skill",e)}))},deleteSkill:function(e){v.a.delete("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/".concat(e)).then((function(t){var a=G.map((function(t){var a=t.skills,n=void 0===a?[]:a;return Object(u.a)(Object(u.a)({},t),{},{skills:n.filter((function(t){return t.skillId!==e}))})}));_(a)})).catch((function(e){console.log("Error deleting skill",e)}))},deleteProject:function(e){v.a.delete("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects/".concat(e)).then((function(t){var a=G.filter((function(t){return t.projectId!==e?t:null}));_(a)})).catch((function(e){console.log("Error deleting project")}))},editSkillName:function(e,t){v.a.put("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/".concat(e),{name:t}).then((function(a){var n=G.map((function(a){var n=a.skills;return(void 0===n?[]:n).map((function(a){return a.skillId===e&&(a.name=t),a})),a}));_(n)})).catch((function(e){console.log("Error updating skill",e)}))},editProjectName:function(e,t){v.a.put("https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/projects/".concat(e),{name:t}).then((function(a){var n=G.map((function(a){return a.projectId===e&&(a.name=t),a}));_(n)})).catch((function(e){console.log("Error updating skill",e)}))}})),r.a.createElement(j.a,{path:"/grokit-frontend/charts"},r.a.createElement(we,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.configure({Auth:{mandatorySignId:!0,region:i.REGION,userPoolId:i.USER_POOL_ID,userPoolWebClientId:i.APP_CLIENT_ID}}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[313,1,2]]]);
//# sourceMappingURL=main.7345a04a.chunk.js.map