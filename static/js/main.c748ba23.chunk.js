(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(6),c=a(2),l=a(1),o=(a(14),[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}]),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(8),m=a.n(u),j=a(0),b=function(e){var t=e.user,a=t.name,n=t.email;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},h=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user;return Object(j.jsxs)("article",{className:m()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(j.jsx)(b,{user:i})]})},O=function(e){var t=e.todos,a=void 0===t?[]:t;return Object(j.jsx)("section",{className:"TodoList",children:a.map((function(e){return Object(j.jsx)(h,{todo:e,"data-id":e.id},e.id)}))})};function f(e){return d.find((function(t){return t.id===e}))||null}var p=function(){var e=Object(l.useState)(o.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})}))),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),u=Object(c.a)(i,2),m=u[0],b=u[1],h=Object(l.useState)(0),p=Object(c.a)(h,2),x=p[0],v=p[1],S=Object(l.useState)(""),y=Object(c.a)(S,2),I=y[0],N=y[1],g=Object(l.useState)(""),C=Object(c.a)(g,2),_=C[0],k=C[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!x||!m.trim())return x||k("Please choose a user"),void(m.trim()||N("Please enter a title"));var t={id:a.length>0?a[a.length-1].id+1:1,title:m.trim(),userId:x,completed:!1,user:f(x)};n([].concat(Object(r.a)(a),[t])),b(""),v(0)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(j.jsx)("input",{id:"titleInput",type:"text",value:m,onChange:function(e){b(e.target.value),N("")},"data-cy":"titleInput",placeholder:"Enter a title"}),I&&Object(j.jsx)("span",{className:"error",children:I})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(j.jsxs)("select",{id:"userSelect",value:x,onChange:function(e){v(+e.target.value),k("")},"data-cy":"userSelect",placeholder:"Choose a user",children:[Object(j.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),_&&Object(j.jsx)("span",{className:"error",children:_})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:a})]})};i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c748ba23.chunk.js.map