(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(2),c=t.n(s),l=(t(13),t(5)),o=t(3),m=t(4),i=t(7),u=t(6),h=function(e){var a=e.firstName,t=e.lastName,n=e.phone,s=e.gender;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"userInfo"},r.a.createElement("div",{className:"fullName"},r.a.createElement("div",{className:"firstName"},a),r.a.createElement("div",{className:"lastName"},t)),r.a.createElement("div",{className:"phone"},n),r.a.createElement("div",{className:"gender"},s)))},d=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666",gender:"unknown"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],f=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[].concat(d),search:""},e.handleSearchChange=function(a){e.setState({search:a.target.value}),e.setState({contacts:Object(l.a)(d.filter((function(e){return e.firstName.toLowerCase().includes(a.target.value.toLowerCase())||e.lastName.toLowerCase().includes(a.target.value.toLowerCase())||e.phone.includes(a.target.value)})))})},e}return Object(m.a)(t,[{key:"setGender",value:function(e){return"male"===e?"male":"female"===e?"female":"unknow"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fullInfo"},r.a.createElement("div",{className:"inputValue"},r.a.createElement("input",{type:"text",value:this.state.search,onChange:this.handleSearchChange,placeholder:"search",className:"searchInfo"})),r.a.createElement("div",{className:"allContacts"},this.state.contacts.map((function(a,t){return r.a.createElement(h,{firstName:a.firstName,lastName:a.lastName,phone:a.phone,gender:e.setGender(a.gender),key:t})}))))}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fcbf0c29.chunk.js.map