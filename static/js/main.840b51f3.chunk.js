(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),o=n.n(c),r=(n(15),n(9)),l=n(1),s=n(2),u=n(3);n(7);function d(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(null),l=Object(u.a)(r,2),s=l[0],d=l[1],b=function(){""!==c.trim()?(e.addTask(e.todoListId,c.trim()),o("")):d("Title is required")};return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.removeBloque(e.todoListId)},className:"button_edit"},"Edit"),i.a.createElement("h3",null,e.title),i.a.createElement("div",null,i.a.createElement("input",{value:c,onChange:function(e){o(e.currentTarget.value)},onKeyPress:function(e){d(null),13===e.charCode&&b()},className:s?"error":""}),i.a.createElement("button",{onClick:b},"+"),s&&i.a.createElement("div",{className:"error-message"},s)),i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement("input",{type:"checkbox",onChange:function(n){e.changeTaskStatus(e.todoListId,t.id,n.currentTarget.checked)},checked:t.isDone}),i.a.createElement("span",null,t.title),i.a.createElement("button",{onClick:function(){return e.removeTask(e.todoListId,t.id)}},"x"))}))),i.a.createElement("div",null,i.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListId,"all")}},"All"),i.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListId,"active")}},"Active"),i.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListId,"completed")}},"Completed")))}var b=n(18),m=Object(b.a)(),f=Object(b.a)();var j=function(){var e,t=Object(a.useState)([{id:m,title:"What to learn",filter:"all"},{id:f,title:"What to buy",filter:"completed"}]),n=Object(u.a)(t,2),c=n[0],o=n[1],j=Object(a.useState)((e={},Object(s.a)(e,m,[{id:Object(b.a)(),title:"HTML&CSS",isDone:!0},{id:Object(b.a)(),title:"JS",isDone:!0},{id:Object(b.a)(),title:"ReactJS",isDone:!1},{id:Object(b.a)(),title:"Rest API",isDone:!1},{id:Object(b.a)(),title:"GraphQL",isDone:!1}]),Object(s.a)(e,f,[{id:Object(b.a)(),title:"HTML&CSS",isDone:!0},{id:Object(b.a)(),title:"JS",isDone:!0},{id:Object(b.a)(),title:"ReactJS",isDone:!1},{id:Object(b.a)(),title:"Rest API",isDone:!1},{id:Object(b.a)(),title:"GraphQL",isDone:!1}]),e)),O=Object(u.a)(j,2),v=O[0],h=O[1],k=function(e){o(c.filter((function(t){return t.id!==e}))),delete v[e]};function p(e,t){h(Object(l.a)(Object(l.a)({},v),{},Object(s.a)({},e,v[e].filter((function(e){return e.id!==t})))))}function E(e,t){var n={id:Object(b.a)(),title:t,isDone:!1};h(Object(l.a)(Object(l.a)({},v),{},Object(s.a)({},e,[n].concat(Object(r.a)(v[e])))))}function g(e,t,n){h(Object(l.a)(Object(l.a)({},v),{},Object(s.a)({},e,v[e].map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{isDone:n}):e})))))}function D(e,t){o(c.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{filter:t}):n})))}return i.a.createElement("div",{className:"App"},c.map((function(e){var t=v[e.id];return"active"===e.filter&&(t=v[e.id].filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(t=v[e.id].filter((function(e){return!0===e.isDone}))),i.a.createElement(d,{key:e.id,todoListId:e.id,title:e.title,tasks:t,removeTask:p,changeFilter:D,addTask:E,changeTaskStatus:g,filter:e.filter,removeBloque:k})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.840b51f3.chunk.js.map