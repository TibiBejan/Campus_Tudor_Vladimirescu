(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{342:function(e,a,s){"use strict";s(2);var t=s(7),r=s(12),n=s(18),l=(s(350),s(1));a.a=function(){var e=Object(r.c)(n.o);return Object(l.jsxs)("ul",{className:"dashboard-main-nav",children:[Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/dashboard"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Dashboard"})})}),Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/enrollment"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Enrollment"})})}),Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/information"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Information"})})}),Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/kins"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Student Kins"})})}),Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/update-details"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Update account"})})}),Object(l.jsx)("li",{className:"dashboard-nav-list-item",children:Object(l.jsx)(t.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/update-password"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(l.jsx)("span",{className:"label-medium",children:"Update password"})})})]})}},350:function(e,a,s){},528:function(e,a,s){},529:function(e,a,s){},563:function(e,a,s){"use strict";s.r(a);var t=s(10),r=s(2),n=s(53),l=s(98),c=s(99),o=s(14),i=s(342),d=s(35),b=s(40),u=s(45),m=s(21),j=s.n(m),h=s(65),p=s(101),O=s(12),x=s(104),f=s(18),v=(s(528),s(1));var g=function(){var e=Object(O.b)(),a=Object(O.c)(f.o),s=Object(o.g)(),n=Object(r.useState)(""),l=Object(t.a)(n,2),c=l[0],m=l[1],g=Object(r.useRef)(null),N=Object(h.a)({initialValues:{username:"",dob:"",sex:"",nationality:"",phone_number:"",adress:"",city:"",state_province:"",country:"",zip_code:""},validateOnBlur:!0,onSubmit:function(t,r){var n=r.resetForm;window.scrollTo(0,g.current.offsetTop);e(Object(x.j)()),j.a.post("/api/v1/users/student-meta",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(t){if(200===t.status||201===t.status){var r=t.data.studentMeta;n(),m(""),e(Object(x.e)(r)),s.push("/".concat(a.user.first_name,".").concat(a.user.last_name,"/dashboard"))}else e(Object(x.a)("There is an error with creating your information, please try again")),m("There is an error with creating your information, please try again")})).catch((function(a){var s=a.response.data.errors?a.response.data.errors[0].msg:a.response.data.message;e(Object(x.a)(s)),m(s)}))},validationSchema:p.b});return Object(v.jsx)("section",{className:"dashboard-info-create",children:Object(v.jsxs)("div",{className:"dashboard-info-create-inner",children:[Object(v.jsx)(i.a,{}),Object(v.jsxs)("div",{className:"dashboard-form-block",ref:g,children:[Object(v.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(v.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Adauga informatiile personale"}),c?Object(v.jsx)(b.a,{children:c}):null]}),Object(v.jsxs)("form",{className:"dashboard-info-create-form",method:"POST",onSubmit:N.handleSubmit,children:[Object(v.jsxs)("div",{className:"form-block",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"username",className:"form-group-label label",children:"Numele de utilizator.*"}),Object(v.jsx)("input",{type:"text",id:"username",className:"form-group-input",name:"username",value:N.values.username,onChange:N.handleChange}),N.errors.username&&Object(v.jsx)(d.a,{children:N.errors.username})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"dob",className:"form-group-label label",children:"Data nasterii.*"}),Object(v.jsx)("input",{type:"date",id:"dob",className:"form-group-input",name:"dob",value:N.values.dob,onChange:N.handleChange}),N.errors.dob&&Object(v.jsx)(d.a,{children:N.errors.dob})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"sex",className:"form-group-label label",children:"Genul.*"}),Object(v.jsxs)("select",{id:"sex",className:"form-group-input form-group-select",name:"sex",value:N.values.sex,onChange:N.handleChange,children:[Object(v.jsx)("option",{value:"",label:"Selectati genul"}),Object(v.jsx)("option",{value:"Masculin",label:"Masculin"}),Object(v.jsx)("option",{value:"Feminin",label:"Feminin"})]}),N.errors.sex&&Object(v.jsx)(d.a,{children:N.errors.sex})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"nationality",className:"form-group-label label",children:"Nationalitatea*"}),Object(v.jsx)("input",{type:"text",id:"nationality",className:"form-group-input",name:"nationality",value:N.values.nationality,onChange:N.handleChange}),N.errors.nationality&&Object(v.jsx)(d.a,{children:N.errors.nationality})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"phone_number",className:"form-group-label label",children:"Numarul de telefon.*"}),Object(v.jsx)("input",{type:"text",id:"phone_number",className:"form-group-input",name:"phone_number",value:N.values.phone_number,onChange:N.handleChange}),N.errors.phone_number&&Object(v.jsx)(d.a,{children:N.errors.phone_number})]})]}),Object(v.jsxs)("div",{className:"form-block",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"adress",className:"form-group-label label",children:"Adresa.*"}),Object(v.jsx)("input",{type:"text",id:"adress",className:"form-group-input",name:"adress",value:N.values.adress,onChange:N.handleChange}),N.errors.adress&&Object(v.jsx)(d.a,{children:N.errors.adress})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"city",className:"form-group-label label",children:"Orasul.*"}),Object(v.jsx)("input",{type:"text",id:"city",className:"form-group-input",name:"city",value:N.values.city,onChange:N.handleChange}),N.errors.city&&Object(v.jsx)(d.a,{children:N.errors.city})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"state_province",className:"form-group-label label",children:"Statul sau provincia.*"}),Object(v.jsx)("input",{type:"text",id:"state_province",className:"form-group-input",name:"state_province",value:N.values.state_province,onChange:N.handleChange}),N.errors.state_province&&Object(v.jsx)(d.a,{children:N.errors.state_province})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"country",className:"form-group-label label",children:"Tara.*"}),Object(v.jsx)("input",{type:"text",id:"country",className:"form-group-input",name:"country",value:N.values.country,onChange:N.handleChange}),N.errors.country&&Object(v.jsx)(d.a,{children:N.errors.country})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"zip_code",className:"form-group-label label",children:"Codul ZIP.*"}),Object(v.jsx)("input",{type:"text",id:"zip_code",className:"form-group-input",name:"zip_code",value:N.values.zip_code,onChange:N.handleChange}),N.errors.zip_code&&Object(v.jsx)(d.a,{children:N.errors.zip_code})]})]}),Object(v.jsx)(u.a,{type:"submit",textLabel:"Creaza informatiile"})]})]})]})})};s(529);var N=function(e){var a=e.sectionData,s=Object(O.b)(),n=Object(O.c)(f.o),l=Object(r.useState)(""),c=Object(t.a)(l,2),m=c[0],g=c[1],N=Object(o.g)(),y=Object(r.useRef)(null),C=Object(h.a)({initialValues:{username:a?a.username:"",dob:a?a.dob:"",sex:a?a.sex:"",nationality:a?a.nationality:"",phone_number:a?a.phone_number:"",adress:a?a.adress:"",city:a?a.city:"",state_province:a?a.state_province:"",country:a?a.country:"",zip_code:a?a.zip_code:""},validateOnBlur:!0,enableReinitialize:!0,onSubmit:function(e){window.scrollTo(0,y.current.offsetTop);s(Object(x.n)()),j.a.patch("/api/v1/users/student-meta/".concat(a.uuid),e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){var a=e.data.studentMeta;g(""),s(Object(x.i)(a)),N.push("/".concat(n.user.first_name,".").concat(n.user.last_name,"/dashboard"))})).catch((function(e){var a=e.response.data.errors?e.response.data.errors[0].msg:e.response.data.message;s(Object(x.o)(a)),g(a)}))},validationSchema:p.b});return Object(v.jsx)("section",{className:"dashboard-info-update",children:Object(v.jsxs)("div",{className:"dashboard-info-update-inner",children:[Object(v.jsx)(i.a,{}),Object(v.jsxs)("div",{className:"dashboard-form-block",ref:y,children:[Object(v.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(v.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Actualizeaza-ti informatiile personale"}),m?Object(v.jsx)(b.a,{children:m}):null]}),Object(v.jsxs)("form",{className:"dashboard-info-update-form",method:"POST",onSubmit:C.handleSubmit,children:[Object(v.jsxs)("div",{className:"form-block",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"username",className:"form-group-label label",children:"Numele de utilizator.*"}),Object(v.jsx)("input",{type:"text",id:"username",className:"form-group-input",name:"username",value:C.values.username,onChange:C.handleChange}),C.errors.username&&Object(v.jsx)(d.a,{children:C.errors.username})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"dob",className:"form-group-label label",children:"Data nasterii.*"}),Object(v.jsx)("input",{type:"date",id:"dob",className:"form-group-input",name:"dob",value:C.values.dob,onChange:C.handleChange}),C.errors.dob&&Object(v.jsx)(d.a,{children:C.errors.dob})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"sex",className:"form-group-label label",children:"Genul.*"}),Object(v.jsxs)("select",{id:"sex",className:"form-group-input form-group-select",name:"sex",value:C.values.sex,onChange:C.handleChange,children:[Object(v.jsx)("option",{value:"",label:"Selectati genul"}),Object(v.jsx)("option",{value:"Masculin",label:"Masculin"}),Object(v.jsx)("option",{value:"Feminin",label:"Feminin"})]}),C.errors.sex&&Object(v.jsx)(d.a,{children:C.errors.sex})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"nationality",className:"form-group-label label",children:"Nationalitatea*"}),Object(v.jsx)("input",{type:"text",id:"nationality",className:"form-group-input",name:"nationality",value:C.values.nationality,onChange:C.handleChange}),C.errors.nationality&&Object(v.jsx)(d.a,{children:C.errors.nationality})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"phone_number",className:"form-group-label label",children:"Numarul de telefon.*"}),Object(v.jsx)("input",{type:"text",id:"phone_number",className:"form-group-input",name:"phone_number",value:C.values.phone_number,onChange:C.handleChange}),C.errors.phone_number&&Object(v.jsx)(d.a,{children:C.errors.phone_number})]})]}),Object(v.jsxs)("div",{className:"form-block",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"adress",className:"form-group-label label",children:"Adresa.*"}),Object(v.jsx)("input",{type:"text",id:"adress",className:"form-group-input",name:"adress",value:C.values.adress,onChange:C.handleChange}),C.errors.adress&&Object(v.jsx)(d.a,{children:C.errors.adress})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"city",className:"form-group-label label",children:"Orasul.*"}),Object(v.jsx)("input",{type:"text",id:"city",className:"form-group-input",name:"city",value:C.values.city,onChange:C.handleChange}),C.errors.city&&Object(v.jsx)(d.a,{children:C.errors.city})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"state_province",className:"form-group-label label",children:"Statul sau provincia.*"}),Object(v.jsx)("input",{type:"text",id:"state_province",className:"form-group-input",name:"state_province",value:C.values.state_province,onChange:C.handleChange}),C.errors.state_province&&Object(v.jsx)(d.a,{children:C.errors.state_province})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"country",className:"form-group-label label",children:"Tara.*"}),Object(v.jsx)("input",{type:"text",id:"country",className:"form-group-input",name:"country",value:C.values.country,onChange:C.handleChange}),C.errors.country&&Object(v.jsx)(d.a,{children:C.errors.country})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"zip_code",className:"form-group-label label",children:"Codul ZIP.*"}),Object(v.jsx)("input",{type:"text",id:"zip_code",className:"form-group-input",name:"zip_code",value:C.values.zip_code,onChange:C.handleChange}),C.errors.zip_code&&Object(v.jsx)(d.a,{children:C.errors.zip_code})]})]}),Object(v.jsx)(u.a,{type:"submit",textLabel:"Actualizeaza-ti informatiile"}),Object(v.jsx)(u.a,{type:"button",onClick:function(){s(Object(x.k)()),j.a.delete("/api/v1/users/student-meta/".concat(a.uuid),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){204===e.status?(s(Object(x.f)()),N.push("/".concat(n.user.first_name,".").concat(n.user.last_name,"/dashboard"))):(s(Object(x.b)("There is an error, your information can not be deleted. Please try again")),g("There is an error, your information can not be deleted. Please try again"))})).catch((function(e){s(Object(x.b)("There is an error, your information can not be deleted. Please try again")),g("There is an error, please try again")}))},textLabel:"Sterge informatiile"})]})]})]})})},y=s(96),C=s(97),_={isLink:null,subtitle:"Informatii generale"};a.default=function(){var e=Object(O.c)(x.p),a=Object(O.b)(),s=Object(r.useState)({}),o=Object(t.a)(s,2),i=o[0],d=o[1],b=Object(r.useState)(!0),u=Object(t.a)(b,2),m=u[0],h=u[1];return Object(r.useEffect)((function(){a(Object(x.l)()),j.a.get("/api/v1/users/student-meta",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){var s=e.data.studentMeta;a(Object(x.g)(s)),d(s),h(!1)})).catch((function(e){a(Object(x.c)("There is an error with your informations")),h(!1)}))}),[a]),m?Object(v.jsx)(n.a,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(n.a,{}),Object(v.jsx)(l.a,{}),Object(v.jsxs)("main",{className:"page-content",children:[Object(v.jsx)(c.a,{sectionData:_}),e.isMetaCreated?Object(v.jsx)(N,{sectionData:i}):Object(v.jsx)(g,{}),Object(v.jsx)(y.a,{})]}),Object(v.jsx)(C.a,{})]})}}}]);
//# sourceMappingURL=26.eee63ffe.chunk.js.map