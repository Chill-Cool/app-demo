(function(t){function e(e){for(var n,i,c=e[0],u=e[1],o=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var u=a[c];0!==s[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"15fa":function(t,e,a){"use strict";var n=a("f13d"),s=a.n(n);s.a},"3c0d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"ui inverted segment navbar"},[a("div",{staticClass:"ui center aligned container"},[a("div",{staticClass:"ui large secondary inverted pointing menu compact"},[a("router-link",{staticClass:"item",attrs:{to:"/tasks",exact:""}},[a("i",{staticClass:"tasks icon"}),t._v(" Tasks ")]),a("router-link",{staticClass:"item",attrs:{to:"/tasks/new"}},[a("i",{staticClass:"plus circle icon"}),t._v(" New ")])],1)])]),a("div",{staticClass:"ui text container"},[a("div",{staticClass:"ui one column grid"},[a("div",{staticClass:"column"},[a("router-view")],1)])])])},r=[],i={name:"app"},c=i,u=(a("034f"),a("2877")),o=Object(u["a"])(c,s,r,!1,null,null,null),l=o.exports,d=(a("87ee"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("tasks")]),a("table",{staticClass:"ui celled compact table",attrs:{id:"tasks"}},[t._m(0),t._l(t.tasks,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.task1))]),a("td",[t._v(t._s(e.task2))]),a("td",{staticClass:"center aligned",attrs:{width:"75"}},[a("router-link",{attrs:{to:{name:"show",params:{id:e._id}}}},[t._v("Show")])],1),a("td",{staticClass:"center aligned",attrs:{width:"75"}},[a("router-link",{attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")])],1),a("td",{staticClass:"center aligned",attrs:{width:"75"},on:{click:function(a){return a.preventDefault(),t.onDestroy(e._id)}}},[a("a",{attrs:{href:"/tasks/"+e._id}},[t._v("Delete")])])])}))],2)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[a("i",{staticClass:"calendar plus icon"}),t._v("Task")]),a("th",[a("i",{staticClass:"info circle icon"}),t._v("Detail")]),a("th",[a("i",{staticClass:"lock open icon"})]),a("th",[a("i",{staticClass:"edit icon"})]),a("th",[a("i",{staticClass:"trash icon"})]),a("th",{attrs:{colspan:"3"}})])])}],h=(a("4de4"),a("d3b7"),a("96cf"),a("99af"),a("bc3a")),m=a.n(h),v=a("d00d"),k=a.n(v);a("f59c");n["a"].use(k.a,{messageOptions:{timeout:3e3,pauseOnInteract:!0}});var w=new n["a"],_="http://localhost:3000/tasks/",b=function(t){return function(){return t.apply(void 0,arguments).catch((function(t){w.flash("".concat(t.response.status,": ").concat(t.response.statusText),"error")}))}},g={gettask:b((function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(m.a.get(_+t));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))})),gettasks:b((function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(m.a.get(_));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}))})),deletetask:b((function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(m.a.delete(_+t));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))})),createtask:b((function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(m.a.post(_,t));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))})),updatetask:b((function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(m.a.put(_+t._id,t));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))}))},x={name:"tasks",data:function(){return{tasks:[]}},methods:{onDestroy:function(t){var e,a;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(e=window.confirm("Are you sure?"),e){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,regeneratorRuntime.awrap(g.deletetask(t));case 5:this.flash("task deleted sucessfully!","success"),a=this.tasks.filter((function(e){return e._id!==t})),this.tasks=a;case 8:case"end":return n.stop()}}),null,this)}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(g.gettasks());case 2:this.tasks=t.sent;case 3:case"end":return t.stop()}}),null,this)}},y=x,C=Object(u["a"])(y,p,f,!1,null,null,null),O=C.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("New task")]),a("task-form",{on:{createOrUpdate:t.createOrUpdate}})],1)},$=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.errorsPresent?a("p",{staticClass:"error"},[t._v("Please fill out both fields!")]):t._e(),a("div",{staticClass:"ui labeled input fluid"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.task1,expression:"task.task1"}],attrs:{type:"text",placeholder:"Enter task..."},domProps:{value:t.task.task1},on:{input:function(e){e.target.composing||t.$set(t.task,"task1",e.target.value)}}})]),a("div",{staticClass:"ui labeled input fluid"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.task2,expression:"task.task2"}],attrs:{type:"text",placeholder:"Enter Details"},domProps:{value:t.task.task2},on:{input:function(e){e.target.composing||t.$set(t.task,"task2",e.target.value)}}})]),a("button",{staticClass:"positive ui button"},[t._v("Submit")])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui label"},[a("i",{staticClass:"calendar plus icon"}),t._v("task ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui label"},[a("i",{staticClass:"info circle icon"}),t._v(" Details ")])}],P={name:"task-form",props:{task:{type:Object,required:!1,default:function(){return{task1:"",task2:""}}}},data:function(){return{errorsPresent:!1}},methods:{onSubmit:function(){""===this.task.task1||""===this.task.task2?this.errorsPresent=!0:this.$emit("createOrUpdate",this.task)}}},S=P,D=(a("15fa"),Object(u["a"])(S,j,E,!1,null,"2586034b",null)),U=D.exports,T={name:"new-task",components:{"task-form":U},methods:{createOrUpdate:function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(g.createtask(t));case 2:e=a.sent,this.flash("task created","success"),this.$router.push("/tasks/".concat(e._id));case 5:case"end":return a.stop()}}),null,this)}}},M=T,N=Object(u["a"])(M,R,$,!1,null,null,null),A=N.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Show task")]),a("div",{staticClass:"ui labeled input fluid"},[t._m(0),a("input",{attrs:{type:"text",readonly:""},domProps:{value:t.task.task1}})]),a("div",{staticClass:"ui labeled input fluid"},[t._m(1),a("input",{attrs:{type:"text",readonly:""},domProps:{value:t.task.task2}})]),a("div",{staticClass:"actions"},[a("router-link",{attrs:{to:{name:"edit",params:{id:this.$route.params.id}}}},[t._v(" Edit task ")])],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui label"},[a("i",{staticClass:"tasks icon"}),t._v(" Task ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui label"},[a("i",{staticClass:"info circle icon"}),t._v(" Details ")])}],I={name:"show",data:function(){return{task:""}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(g.gettask(this.$route.params.id));case 2:this.task=t.sent;case 3:case"end":return t.stop()}}),null,this)}},z=I,B=(a("b1de"),Object(u["a"])(z,J,q,!1,null,"99e6bfc0",null)),F=B.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Edit task")]),a("task-form",{attrs:{task:this.task},on:{createOrUpdate:t.createOrUpdate}})],1)},H=[],K={name:"edit",components:{"task-form":U},data:function(){return{task:{}}},methods:{createOrUpdate:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(g.updatetask(t));case 2:this.flash("task updated sucessfully!","success"),this.$router.push("/tasks/".concat(t._id));case 4:case"end":return e.stop()}}),null,this)}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(g.gettask(this.$route.params.id));case 2:this.task=t.sent;case 3:case"end":return t.stop()}}),null,this)}},L=K,Q=Object(u["a"])(L,G,H,!1,null,null,null),V=Q.exports;n["a"].use(d["a"]);var W=new d["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:[{path:"/",redirect:"/tasks"},{path:"/tasks",name:"tasks",component:O},{path:"/tasks/new",name:"new-task",component:A},{path:"/tasks/:id",name:"show",component:F},{path:"/tasks/:id/edit",name:"edit",component:V}]});new n["a"]({router:W,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},b1de:function(t,e,a){"use strict";var n=a("3c0d"),s=a.n(n);s.a},f13d:function(t,e,a){}});
//# sourceMappingURL=app.961edf1e.js.map