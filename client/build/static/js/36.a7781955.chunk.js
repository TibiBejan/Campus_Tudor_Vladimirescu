(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{520:function(e,a,s){},571:function(e,a,s){"use strict";s.r(a);var r=s(2),t=s(53),l=s(98),n=s(99),c=s(10),o=s(103),i=s(35),u=s(40),d=s(45),m=s(0),j=s(66),b=s(21),p=s.n(b),h=s(65),f=s(107),O=(s(520),s(1));var x=function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),s=a[0],t=a[1],l=Object(r.useState)(!1),n=Object(c.a)(l,2),b=n[0],x=n[1],g=Object(r.useState)(!1),v=Object(c.a)(g,2),N=v[0],w=v[1],_=Object(r.useRef)(null);Object(r.useEffect)((function(){t("")}),[]);var C=Object(h.a)({initialValues:{first_name:"",last_name:"",email:"",password:"",password_confirm:"",role:""},validateOnBlur:!0,enableReinitialize:!0,onSubmit:function(e,a){var s=a.resetForm;window.scrollTo(0,_.current.offsetTop);p.a.post("/api/v1/users/",e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){t("Student creat!"),s()})).catch((function(e){var a=e.response.data.errors?e.response.data.errors[0].msg:e.response.data.message;t(a)}))},validationSchema:f.b});return Object(O.jsx)("section",{className:"dashboard-account-create",children:Object(O.jsxs)("div",{className:"dashboard-account-create-inner",children:[Object(O.jsx)(o.a,{}),Object(O.jsxs)("div",{className:"dashboard-form-block",ref:_,children:[Object(O.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(O.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Adauga un student"}),s?Object(O.jsx)(u.a,{children:s}):null]}),Object(O.jsxs)("form",{className:"dashboard-account-create-form",method:"POST",onSubmit:C.handleSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"first_name",className:"form-group-label label",children:"Prenumele studentului.*"}),Object(O.jsx)("input",{type:"text",id:"first_name",className:"form-group-input",name:"first_name",value:C.values.first_name,onChange:C.handleChange}),C.errors.first_name&&Object(O.jsx)(i.a,{children:C.errors.first_name})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"last_name",className:"form-group-label label",children:"Numele studentului.*"}),Object(O.jsx)("input",{type:"text",id:"last_name",className:"form-group-input",name:"last_name",value:C.values.last_name,onChange:C.handleChange}),C.errors.last_name&&Object(O.jsx)(i.a,{children:C.errors.last_name})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",className:"form-group-label label",children:"Email-ul studentului.*"}),Object(O.jsx)("input",{type:"email",id:"email",className:"form-group-input",name:"email",value:C.values.email,onChange:C.handleChange}),C.errors.email&&Object(O.jsx)(i.a,{children:C.errors.email})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",className:"form-group-label label",children:"Parola studentului*"}),Object(O.jsxs)("div",{className:"input-wrapper",children:[Object(O.jsx)("input",{type:b?"text":"password",id:"password",className:"form-group-input",name:"password",value:C.values.password,onChange:C.handleChange}),Object(O.jsx)("button",{type:"button",onClick:function(){return x((function(e){return!e}))},className:"show-password-button",children:Object(O.jsx)(m.b.Provider,{value:{size:"30px",color:b?"#464646":"#fafafa"},children:Object(O.jsx)(j.a,{})})})]}),C.errors.password&&Object(O.jsx)(i.a,{children:C.errors.password})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password_confirm",className:"form-group-label label",children:"Confirma parola studentului*"}),Object(O.jsxs)("div",{className:"input-wrapper",children:[Object(O.jsx)("input",{type:N?"text":"password",id:"password_confirm",className:"form-group-input",name:"password_confirm",value:C.values.password_confirm,onChange:C.handleChange}),Object(O.jsx)("button",{type:"button",onClick:function(){return w((function(e){return!e}))},className:"show-password-button",children:Object(O.jsx)(m.b.Provider,{value:{size:"30px",color:N?"#464646":"#fafafa"},children:Object(O.jsx)(j.a,{})})})]}),C.errors.password_confirm&&Object(O.jsx)(i.a,{children:C.errors.password_confirm})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"role",className:"form-group-label label",children:"Rolul dorit.*"}),Object(O.jsx)("input",{type:"text",id:"role",className:"form-group-input",name:"role",value:C.values.role,onChange:C.handleChange}),C.errors.role&&Object(O.jsx)(i.a,{children:C.errors.role})]}),Object(O.jsx)(d.a,{type:"submit",textLabel:"Adauga un student"})]})]})]})})},g=s(96),v=s(97),N={isLink:null,subtitle:"Adauga studenti"};a.default=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(t.a,{}),Object(O.jsx)(l.a,{}),Object(O.jsxs)("main",{className:"page-content",children:[Object(O.jsx)(n.a,{sectionData:N,title:"Panoul administratorului"}),Object(O.jsx)(x,{}),Object(O.jsx)(g.a,{})]}),Object(O.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=36.a7781955.chunk.js.map