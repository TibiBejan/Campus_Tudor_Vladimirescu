(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[35],{518:function(e,a,s){},569:function(e,a,s){"use strict";s.r(a);var t=s(2),l=s(53),r=s(98),n=s(99),c=s(10),i=s(103),o=s(35),m=s(40),u=s(45),d=s(21),j=s.n(d),b=s(65),h=s(101),p=s(12),O=s(18),f=(s(518),s(1));var x=function(){var e=Object(p.b)(),a=Object(p.c)(O.o),s=Object(t.useState)(""),l=Object(c.a)(s,2),r=l[0],n=l[1],d=Object(t.useRef)(null),x=Object(b.a)({initialValues:{first_name:a.user.first_name,last_name:a.user.last_name,email:a.user.email},validateOnBlur:!0,enableReinitialize:!0,onSubmit:function(a){window.scrollTo(0,d.current.offsetTop);e(Object(O.i)()),j.a.patch("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/updateMe",a,{headers:{"Content-Type":"application/json",withCredentials:!0,credentials:"include"}}).then((function(a){if(200===a.status||201===a.status){var s=a.data.user;e(Object(O.e)(s)),n("")}})).catch((function(a){var s=a.response.data.errors?a.response.data.errors[0].msg:a.response.data.message;e(Object(O.m)(s)),n(s)}))},validationSchema:h.d});return Object(f.jsx)("section",{className:"dashboard-account-update",children:Object(f.jsxs)("div",{className:"dashboard-account-update-inner",children:[Object(f.jsx)(i.a,{}),Object(f.jsxs)("div",{className:"dashboard-form-block",ref:d,children:[Object(f.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(f.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Actualizeaza-ti informatiile contului"}),r?Object(f.jsx)(m.a,{children:r}):null]}),Object(f.jsxs)("form",{className:"dashboard-account-update-form",method:"POST",onSubmit:x.handleSubmit,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"firstName",className:"form-group-label label",children:"Prenumele dvs.*"}),Object(f.jsx)("input",{type:"text",id:"firstName",className:"form-group-input",name:"first_name",value:x.values.first_name,onChange:x.handleChange}),x.errors.first_name&&Object(f.jsx)(o.a,{children:x.errors.first_name})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"lastName",className:"form-group-label label",children:"Numele dvs.*"}),Object(f.jsx)("input",{type:"text",id:"lastName",className:"form-group-input",name:"last_name",value:x.values.last_name,onChange:x.handleChange}),x.errors.last_name&&Object(f.jsx)(o.a,{children:x.errors.last_name})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"email",className:"form-group-label label",children:"Email-ul dvs.*"}),Object(f.jsx)("input",{type:"email",id:"email",className:"form-group-input",name:"email",value:x.values.email,onChange:x.handleChange}),x.errors.email&&Object(f.jsx)(o.a,{children:x.errors.email})]}),Object(f.jsx)(u.a,{type:"submit",textLabel:"Actualizeaza"})]})]})]})})},v=s(96),g=s(97),N={isLink:null,subtitle:"Contul meu"};a.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{}),Object(f.jsx)(r.a,{}),Object(f.jsxs)("main",{className:"page-content",children:[Object(f.jsx)(n.a,{sectionData:N,title:"Panoul administratorului"}),Object(f.jsx)(x,{}),Object(f.jsx)(v.a,{})]}),Object(f.jsx)(g.a,{})]})}}}]);
//# sourceMappingURL=35.e69abe9c.chunk.js.map