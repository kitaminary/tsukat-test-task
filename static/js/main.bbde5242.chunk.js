(this["webpackJsonptsukat-test-task"]=this["webpackJsonptsukat-test-task"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c,s=n(0),r=n(12),i=n(3),a=n(10),o=n(7),u=n.n(o),d=n(5),l=n(8),b=n(4),j=(n(34),n(19)),f=n.n(j),O=n(15),p=n.n(O),m=n(9);!function(t){t.SET_TODOS="SET_TODOS",t.SET_USERS="SET_USERS"}(c||(c={}));var h=Object(m.b)(c.SET_TODOS),x=Object(m.b)(c.SET_USERS),_=function(t){return t.todos},v=function(t){return t.users},S=(n(35),n(1)),y=function(t){var e,n=t.todo,c=Object(i.c)(v),r=Object(i.c)(_),a=Object(i.b)(),o=Object(s.useState)(!1),u=Object(b.a)(o,2),l=u[0],j=u[1],f=Object(s.useState)(n.title),O=Object(b.a)(f,2),m=O[0],x=O[1],y=Object(s.useState)(n.completed),N=Object(b.a)(y,2),k=N[0],C=N[1],w=(new Date).toUTCString().toString();return Object(s.useEffect)((function(){}),[]),Object(S.jsxs)("li",{className:"todos__item column card-content m-2 box is-one-quarter",children:[Object(S.jsxs)("form",{className:p()("todos__form-edit",{"todos__form-edit--unactive":!1===l}),onSubmit:function(t){return function(t,e){t.preventDefault(),a(h(r.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},n),{},{title:m,date:w}):t})))),j(!1)}(t,n)},children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)("label",{htmlFor:"title",children:[Object(S.jsx)("p",{className:"p-2",children:"Change the title"}),Object(S.jsx)("input",{className:"input is-primary",id:"title",type:"text",value:m,onChange:function(t){return x(t.target.value)}})]}),Object(S.jsx)("button",{className:"todos__form-edit__submit button is-success is-light",type:"submit",children:"Submit"})]}),Object(S.jsx)("button",{onClick:function(){return j(!l)},className:"todos__form-edit__close",type:"button",children:"Close"})]}),Object(S.jsxs)("div",{className:"is-flex is-flex-direction-column is-justify-content-space-between",children:[Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:null===(e=c.find((function(t){return t.id===n.userId})))||void 0===e?void 0:e.name})}),Object(S.jsx)("p",{className:"todos__title pb-4",children:n.title}),Object(S.jsxs)("div",{children:[" ",Object(S.jsx)("input",{className:"checkbox",type:"checkbox",name:"completed",defaultChecked:k,id:"".concat(n.id),onClick:function(){var t;C(!k),t=n.id,a(h(r.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},n),{},{completed:k,date:w}):e}))))}}),Object(S.jsx)("label",{htmlFor:"".concat(n.id),children:" Completed"})]}),Object(S.jsx)("p",{className:"subtitle is-7",children:Object(S.jsx)("i",{children:n.date})})]}),Object(S.jsxs)("div",{className:"todos__button-box",children:[Object(S.jsx)("button",{className:"todos__edit",type:"button",onClick:function(){j(!0)},children:"Edit"}),Object(S.jsx)("button",{className:"todos__delete",type:"button",onClick:function(){return t=n.id,void a(h(r.filter((function(e){return e.id!==t}))));var t},children:"Delete"})]})]})},N=function(){var t=Object(i.c)(_);return Object(s.useEffect)((function(){}),[t]),Object(S.jsx)("ul",{className:"todos__list is-flex is-flex-wrap-wrap is-justify-content-center",children:t.map((function(t){return Object(S.jsx)(y,{todo:t},t.id)}))})},k="https://jsonplaceholder.typicode.com",C=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/todos"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.b)(),e=Object(i.c)(_),n=Object(i.c)(v),c=Object(s.useState)(""),r=Object(b.a)(c,2),o=r[0],j=r[1],O=Object(s.useState)(!1),m=Object(b.a)(O,2),y=m[0],k=m[1],g=Object(s.useState)(""),E=Object(b.a)(g,2),T=E[0],D=E[1],U=Object(s.useState)(!1),I=Object(b.a)(U,2),q=I[0],R=I[1],F=(new Date).toUTCString().toString(),J=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,t(h(n.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{date:F})}))));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t(x(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){J(),A()}),[]),Object(S.jsxs)("main",{className:"todos",children:[Object(S.jsxs)("div",{className:"is-flex is-four-fifths column is-justify-content-space-between is-align-content-space-between",children:[Object(S.jsx)("h1",{className:"title is-3 m-3",children:"Tsukat test task(todolist)"})," ",Object(S.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault();var s=(new Date).toUTCString().toString(),r=n.find((function(t){return t.name===o})),i={name:o,id:n.length+1};void 0!==r?t(h([].concat(Object(a.a)(e),[{title:T,userId:r.id,id:f()(),date:s,completed:y}]))):(t(x([].concat(Object(a.a)(n),[i]))),t(h([].concat(Object(a.a)(e),[{title:T,userId:i.id,id:f()(),date:s,completed:y}])))),k(!1),D(""),j(""),R(!1)}(c)},className:p()("todos__form-add",{"todos__form-add--unactive":!1===q}),children:[Object(S.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(S.jsx)("h2",{children:"Create new todo"})," ",Object(S.jsx)("button",{className:"todos__form-add__close",type:"button",onClick:function(){return R(!1)},children:"Close"})]}),Object(S.jsxs)("label",{children:[" ","Enter the name",Object(S.jsx)("input",{className:"input is-info",type:"text",placeholder:"Enter the name",value:o,onChange:function(t){return j(t.target.value)},required:!0})]}),Object(S.jsxs)("label",{children:[" ","Enter the todo",Object(S.jsx)("input",{className:"input is-info",type:"text",placeholder:"Enter the todo",value:T,onChange:function(t){return D(t.target.value)},required:!0})]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"checkbox",checked:y,onChange:function(){return k(!y)}})," ","Completed"]}),Object(S.jsx)("button",{className:"todos__form-add__submit button is-success is-light",type:"submit",children:"Submit"})]}),Object(S.jsxs)("div",{className:"todos__add-button__box m-3",children:[Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"Add todo \u21d2 "})}),Object(S.jsx)("button",{className:"todos__add m-1",type:"button",onClick:function(){return R(!q)},children:"add"})]})]}),Object(S.jsx)(N,{})]})},E=Object(m.c)({todos:[],users:[]},(function(t){t.addCase(h,(function(t,e){t.todos=e.payload})),t.addCase(x,(function(t,e){t.users=e.payload}))})),T=Object(m.a)({reducer:E});r.render(Object(S.jsx)(s.StrictMode,{children:Object(S.jsx)(i.a,{store:T,children:Object(S.jsx)(g,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bbde5242.chunk.js.map