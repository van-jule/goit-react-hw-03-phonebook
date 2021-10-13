(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__yCvBt",input:"Filter_input__300p6"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__cnu_9",label:"Form_label__2QGD8",input:"Form_input__1tfLV",button:"Form_button__lzcw8"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(19),n(14)),o=n(5),l=n(6),u=n(8),b=n(7),m=(n(20),n(3)),d=n.n(m),h=n(13),j=n(2),p=n.n(j),f=n(0),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.telInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:p.a.label,htmlFor:this.nameInputId,children:["Name",Object(f.jsx)("input",{className:p.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId})]}),Object(f.jsxs)("label",{className:p.a.label,htmlFor:this.telInputId,children:["Number",Object(f.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.telInputId})]}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=C,O=n(9),_=n.n(O),g=function(t){var e=t.contacts,n=t.onDeleteContact;return 0===e.length?Object(f.jsx)("div",{children:" No contacts "}):Object(f.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:_.a.item,children:[a,": ",c,Object(f.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};g.defaultProps={contacts:[]};var x=g,N=n(11),y=n.n(N),w=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})};w.defaultProps={value:""};var F=w,I=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:d.a.generate(),name:n,number:a};c.find((function(t){return r.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[r])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=(t.contacts,t.filter),n=this.getFilteredContacts();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onSubmit:this.addNewContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(F,{value:e,onChange:this.changeFilter}),Object(f.jsx)(x,{contacts:n,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),S=I;s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactsList_list__3oKgs",item:"ContactsList_item__36bAM",button:"ContactsList_button__3z_r-"}}},[[30,1,2]]]);
//# sourceMappingURL=main.1d19b0ee.chunk.js.map