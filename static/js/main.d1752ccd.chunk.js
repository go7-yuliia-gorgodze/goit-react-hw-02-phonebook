(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contactList:"styles_contactList__2d6gx",contactCard:"styles_contactCard__hNN7Q",input:"styles_input__1EEe_",inputValue:"styles_inputValue__3_zkj",buttonAddContact:"styles_buttonAddContact__2avIV",form:"styles_form__2W9HU"}},27:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(11),s=n.n(r),o=(n(17),n(5)),i=n(12),u=n(6),l=n(7),b=n(9),j=n(8),h=n(3),d=n.n(h),p=n(1),m=n.n(p),f=n(0),C=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.inputChange=function(e){var n=e.currentTarget;t.setState(Object(o.a)({},n.name,n.value))},t.addContact=function(e){e.preventDefault(),t.props.formSabmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{class:m.a.form,onSubmit:this.addContact,children:[Object(f.jsxs)("label",{class:m.a.input,children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430: ",Object(f.jsx)("input",{class:m.a.inputValue,type:"text",name:"name",value:this.state.name,onChange:this.inputChange})]}),Object(f.jsxs)("label",{class:m.a.input,children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430: ",Object(f.jsx)("input",{class:m.a.inputValue,type:"text",name:"number",value:this.state.number,onChange:this.inputChange})]}),Object(f.jsx)("button",{class:m.a.buttonAddContact,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})}}]),n}(a.Component),O=function(t){var e=t.contacts,n=t.deleteCantact;return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{class:m.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{class:m.a.contactCard,children:[a," : ",c,Object(f.jsx)("button",{onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})})},v=function(t){var e=t.state,n=t.inputChange;return Object(f.jsxs)("label",{class:m.a.input,children:["\u041a\u043e\u0433\u043e \u0438\u0449\u0435\u043c?   ",Object(f.jsx)("input",{class:m.a.inputValue,type:"text",name:"filter",value:e,onChange:n})]})},x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.checkContact=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a};t.checkContact(n)?alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c !!!!"):(t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}})),console.log(t.state.contacts))},t.deleteCantact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.inputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.getVisibleContact=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(f.jsx)(C,{formSabmit:this.addContact}),Object(f.jsx)("h2",{children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "}),Object(f.jsx)(v,{inputChange:this.inputChange,state:this.state.filter}),Object(f.jsx)(O,{contacts:this.getVisibleContact(),deleteCantact:this.deleteCantact})]})}}]),n}(a.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d1752ccd.chunk.js.map