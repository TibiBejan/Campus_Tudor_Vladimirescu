(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[24],{102:function(e,a,t){"use strict";t(0);var n=t(24),r=(t(103),t(2));a.a=function(e){var a=e.sectionData,t=e.title;return Object(r.jsx)("section",{className:"auth-banner",children:Object(r.jsxs)("div",{className:"auth-banner-content",children:[Object(r.jsx)("div",{className:"content-heading-wrapper",children:Object(r.jsx)("h1",{className:"content-heading-title heading-one",children:t||"Portalul utilizatorului"})}),Object(r.jsxs)("div",{className:"content-subtitle-wrapper",children:[Object(r.jsx)("h3",{className:"content-subtitle heading-three",children:a.subtitle}),a.isLink&&Object(r.jsx)(n.b,{to:a.path,className:"content-link-wrapper",children:Object(r.jsx)("span",{className:"content-link-label label-large",children:a.pathLabel})})]})]})})}},103:function(e,a,t){},104:function(e,a,t){"use strict";t(0),t(108);var n=t(2);a.a=function(e){var a=e.children,t=e.success;return Object(n.jsx)("div",{className:"general-error",children:Object(n.jsx)("div",{className:"general-error-inner",children:Object(n.jsxs)("span",{className:"link-label",children:[t?"Success:":"Error:",Object(n.jsx)("span",{className:"label",children:a})]})})})}},108:function(e,a,t){},109:function(e,a,t){"use strict";t.d(a,"e",(function(){return s})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return u}));var n=t(118),r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,l=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,s=n.c({password_confirm:n.e().required("You must enter a password").matches(r,"Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),password_new:n.e().required("You must enter a password").matches(r,"Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),password_new_confirm:n.e().required("You must enter a password confirm").when("password",{is:function(e){return!!(e&&e.length>0)},then:n.e().oneOf([n.d("password_new")],"Your confirm password does not match, please try again")})}),i=n.c({first_name:n.e().required("You must enter your first name").min(3,"Your first name should contain al least 3 characters"),last_name:n.e().required("You must enter your last name").min(3,"Your last name should contain al least 3 characters"),email:n.e().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress")}),c=n.c({first_name:n.e().required("You must enter your kin's first name").min(3,"Your kin first name should contain al least 3 characters"),last_name:n.e().required("You must enter your kin's last name").min(3,"Your kin last name should contain al least 3 characters"),email:n.e().required("You must enter your kin's e-mail adress").email("Please enter a valid e-mail adress of your kin"),relation:n.e().required("You must enter your kin relation").min(3,"Your relation should contain al least 3 characters"),adress:n.e().required("You must enter your kin' adress"),phone_number:n.e().required("You must enter your kin' phone number").matches(l,"Your kin's phone number is not valid")}),o=n.c({username:n.e().required("You must enter your username").min(3,"Your username should contain al least 3 characters"),dob:n.a().required("You must enter your date of birth"),sex:n.e().required("You must select your gender"),nationality:n.e().required("You must enter your nationality"),phone_number:n.e().required("You must enter your phone number").matches(l,"Your kin's phone number is not valid"),adress:n.e().required("You must enter your adress"),city:n.e().required("You must enter your city"),state_province:n.e().required("You must enter your state or province"),country:n.e().required("You must enter your country"),zip_code:n.e().required("You must enter your zip_code")}),u=n.c({university:n.e().required("You must select your university"),type_of_study:n.e().required("You must select your type of study"),year_of_study:n.b().required("You must select your year of study"),grade:n.b().required("You must enter your previous year grade"),financial_type:n.e().required("You must enter your financial type"),nationality:n.e().required("You must enter your nationality"),student_gender:n.e().required("You must enter select your gender")})},113:function(e,a,t){"use strict";t(0);var n=t(24),r=t(18),l=t(22),s=(t(125),t(2));a.a=function(){var e=Object(r.c)(l.l);return Object(s.jsxs)("ul",{className:"dashboard-main-nav",children:[Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/dashboard"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Dashboard"})})}),Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/enrollment"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Enrollment"})})}),Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/information"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Information"})})}),Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/kins"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Student Kins"})})}),Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/update-details"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Update account"})})}),Object(s.jsx)("li",{className:"dashboard-nav-list-item",children:Object(s.jsx)(n.c,{to:"/".concat(e.user.first_name,".").concat(e.user.last_name,"/update-password"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(s.jsx)("span",{className:"label-medium",children:"Update password"})})})]})}},125:function(e,a,t){},523:function(e,a,t){},524:function(e,a,t){},563:function(e,a,t){"use strict";t.r(a);var n=t(94),r=t(0),l=t(51),s=t.n(l),i=t(38),c=t(98),o=t(102),u=t(5),d=t(113),b=t(99),j=t(104),m=t(91),h=t(110),p=t(109),O=t(18),f=t(40),v=t(22),x=(t(523),t(2));var g=function(){var e=Object(O.b)(),a=Object(O.c)(v.l),t=Object(u.g)(),l=Object(r.useState)(""),i=Object(n.a)(l,2),c=i[0],o=i[1],g=Object(r.useState)(""),y=Object(n.a)(g,2),_=y[0],N=y[1],C=Object(r.useRef)(null),F=Object(h.a)({initialValues:{university:"",year_of_study:"",type_of_study:"",grade:"",financial_type:"",nationality:"",student_gender:""},validateOnBlur:!0,onSubmit:function(n,r){var l=r.resetForm;window.scrollTo(0,C.current.offsetTop);e(Object(f.g)()),s.a.post("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/enrollment",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(n){var r=n.data.enrollment;e(Object(f.d)(r)),l(),o(""),t.push("/".concat(a.user.first_name,".").concat(a.user.last_name,"/enrollment/success"))})).catch((function(a){var t=a.response.data.errors?a.response.data.errors[0].msg:a.response.data.message;e(Object(f.b)(t)),o(t)}))},validationSchema:p.c});return Object(x.jsx)("section",{className:"dashboard-create-enroll",children:Object(x.jsxs)("div",{className:"dashboard-create-enroll-inner",children:[Object(x.jsx)(d.a,{}),Object(x.jsxs)("div",{className:"dashboard-form-block",ref:C,children:[Object(x.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(x.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Adauga informatiile personale"}),c?Object(x.jsx)(j.a,{children:c}):null]}),Object(x.jsxs)("form",{className:"dashboard-create-enroll-form",method:"POST",onSubmit:F.handleSubmit,children:[Object(x.jsx)("div",{className:"form-block full-width",children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"university",className:"form-group-label label",children:"Universitatea dvs.*"}),Object(x.jsxs)("select",{id:"university",className:"form-group-input form-group-select",name:"university",value:F.values.university,onChange:F.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati universitatea"}),Object(x.jsx)("option",{value:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor",label:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor"}),Object(x.jsx)("option",{value:"Facultatea de Mecanic\u0103 Ia\u015fi",label:"Facultatea de Mecanic\u0103 Ia\u015fi"}),Object(x.jsx)("option",{value:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103",label:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103"}),Object(x.jsx)("option",{value:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d",label:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d"}),Object(x.jsx)("option",{value:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului",label:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului"}),Object(x.jsx)("option",{value:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei",label:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei"}),Object(x.jsx)("option",{value:"Facultatea de Design Industrial \u0219i Managementul Afacerilor",label:"Facultatea de Design Industrial \u0219i Managementul Afacerilor"}),Object(x.jsx)("option",{value:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii",label:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii"}),Object(x.jsx)("option",{value:"Facultatea de Automatic\u0103 \u0219i Calculatoare",label:"Facultatea de Automatic\u0103 \u0219i Calculatoare"}),Object(x.jsx)("option",{value:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d",label:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d"}),Object(x.jsx)("option",{value:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial",label:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial"})]}),F.errors.university&&Object(x.jsx)(b.a,{children:F.errors.university})]})}),Object(x.jsxs)("div",{className:"form-block",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"type_of_study",className:"form-group-label label",children:"Tipul de studiu.*"}),Object(x.jsxs)("select",{id:"type_of_study",className:"form-group-input form-group-select",name:"type_of_study",value:F.values.type_of_study,onChange:F.handleChange,onBlur:function(e){return N(e.target.value)},children:[Object(x.jsx)("option",{value:"",label:"Selectati tipul de studiu"}),Object(x.jsx)("option",{value:"Licenta",label:"Licenta"}),Object(x.jsx)("option",{value:"Master",label:"Master"}),Object(x.jsx)("option",{value:"Doctorat",label:"Doctorat"})]}),F.errors.type_of_study&&Object(x.jsx)(b.a,{children:F.errors.type_of_study})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"year_of_study",className:"form-group-label label",children:"Anul de studiu.*"}),Object(x.jsxs)("select",{id:"year_of_study",className:"form-group-input form-group-select",name:"year_of_study",value:F.values.year_of_study,onChange:F.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati anul de studiu"}),("Licenta"===_||""===_)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("option",{value:"1",label:"1"}),Object(x.jsx)("option",{value:"2",label:"2"}),Object(x.jsx)("option",{value:"3",label:"3"}),Object(x.jsx)("option",{value:"4",label:"4"}),Object(x.jsx)("option",{value:"5",label:"5"}),Object(x.jsx)("option",{value:"6",label:"6"})]}),("Master"===_||"Doctorat"===_)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("option",{value:"1",label:"1"}),Object(x.jsx)("option",{value:"2",label:"2"})]})]}),F.errors.year_of_study&&Object(x.jsx)(b.a,{children:F.errors.year_of_study})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"grade",className:"form-group-label label",children:"Media generala a anului trecut.*"}),Object(x.jsx)("input",{type:"number",min:"0",max:"10",step:"0.01",id:"grade",className:"form-group-input",name:"grade",value:F.values.grade,onChange:F.handleChange}),F.errors.grade&&Object(x.jsx)(b.a,{children:F.errors.grade})]})]}),Object(x.jsxs)("div",{className:"form-block",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"financial_type",className:"form-group-label label",children:"Tipul de studiu: buget / taxa.*"}),Object(x.jsxs)("select",{id:"financial_type",className:"form-group-input form-group-select",name:"financial_type",value:F.values.financial_type,onChange:F.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati tipul de studiu: buget / taxa"}),Object(x.jsx)("option",{value:"Buget",label:"Buget"}),Object(x.jsx)("option",{value:"Taxa",label:"Taxa"})]}),F.errors.financial_type&&Object(x.jsx)(b.a,{children:F.errors.financial_type})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"nationality",className:"form-group-label label",children:"Nationalitatea*"}),Object(x.jsx)("input",{type:"text",id:"nationality",className:"form-group-input",name:"nationality",value:F.values.nationality,onChange:F.handleChange}),F.errors.nationality&&Object(x.jsx)(b.a,{children:F.errors.nationality})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"student_gender",className:"form-group-label label",children:"Genul dvs.*"}),Object(x.jsxs)("select",{id:"student_gender",className:"form-group-input form-group-select",name:"student_gender",value:F.values.student_gender,onChange:F.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati genul dvs."}),Object(x.jsx)("option",{value:"Feminin",label:"Feminin"}),Object(x.jsx)("option",{value:"Masculin",label:"Masculin"})]}),F.errors.student_gender&&Object(x.jsx)(b.a,{children:F.errors.student_gender})]})]}),Object(x.jsx)(m.a,{type:"submit",textLabel:"Inroleaza-te"})]})]})]})})};t(524);var y=function(e){var a=e.sectionData,t=Object(O.b)(),l=Object(O.c)(v.l),i=Object(u.g)(),c=Object(r.useState)(""),o=Object(n.a)(c,2),g=o[0],y=o[1],_=Object(r.useState)(""),N=Object(n.a)(_,2),C=N[0],F=N[1],w=Object(r.useRef)(null),M=Object(h.a)({initialValues:{university:a.university,year_of_study:a.year_of_study,type_of_study:a.type_of_study,grade:a.grade,financial_type:a.financial_type,nationality:a.nationality,student_gender:a.student_gender},validateOnBlur:!0,onSubmit:function(e,n){var r=n.resetForm;window.scrollTo(0,w.current.offsetTop);t(Object(f.h)()),s.a.patch("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/enrollment/".concat(a.uuid),e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){if(200===e.status||201===e.status){var a=e.data.enrollment;t(Object(f.e)(a)),r(),y(""),i.push("/".concat(l.user.first_name,".").concat(l.user.last_name,"/enrollment/success"))}else t(Object(f.i)("There is an error with creating your information, please try again")),y("There is an error with creating your information, please try again")})).catch((function(e){var a=e.response.data.errors?e.response.data.errors[0].msg:e.response.data.message;y(a),t(Object(f.i)(a))}))},validationSchema:p.c});return Object(x.jsx)("section",{className:"dashboard-update-enroll",children:Object(x.jsxs)("div",{className:"dashboard-update-enroll-inner",children:[Object(x.jsx)(d.a,{}),Object(x.jsxs)("div",{className:"dashboard-form-block",ref:w,children:[Object(x.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(x.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Adauga informatiile personale"}),g?Object(x.jsx)(j.a,{children:g}):null]}),Object(x.jsxs)("form",{className:"dashboard-update-enroll-form",method:"POST",onSubmit:M.handleSubmit,children:[Object(x.jsx)("div",{className:"form-block full-width",children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"university",className:"form-group-label label",children:"Universitatea dvs.*"}),Object(x.jsxs)("select",{id:"university",className:"form-group-input form-group-select",name:"university",value:M.values.university,onChange:M.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati universitatea"}),Object(x.jsx)("option",{value:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor",label:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor"}),Object(x.jsx)("option",{value:"Facultatea de Mecanic\u0103 Ia\u015fi",label:"Facultatea de Mecanic\u0103 Ia\u015fi"}),Object(x.jsx)("option",{value:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103",label:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103"}),Object(x.jsx)("option",{value:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d",label:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d"}),Object(x.jsx)("option",{value:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului",label:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului"}),Object(x.jsx)("option",{value:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei",label:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei"}),Object(x.jsx)("option",{value:"Facultatea de Design Industrial \u0219i Managementul Afacerilor",label:"Facultatea de Design Industrial \u0219i Managementul Afacerilor"}),Object(x.jsx)("option",{value:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii",label:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii"}),Object(x.jsx)("option",{value:"Facultatea de Automatic\u0103 \u0219i Calculatoare",label:"Facultatea de Automatic\u0103 \u0219i Calculatoare"}),Object(x.jsx)("option",{value:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d",label:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d"}),Object(x.jsx)("option",{value:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial",label:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial"})]}),M.errors.university&&Object(x.jsx)(b.a,{children:M.errors.university})]})}),Object(x.jsxs)("div",{className:"form-block",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"type_of_study",className:"form-group-label label",children:"Tipul de studiu.*"}),Object(x.jsxs)("select",{id:"type_of_study",className:"form-group-input form-group-select",name:"type_of_study",value:M.values.type_of_study,onChange:M.handleChange,onBlur:function(e){return F(e.target.value)},children:[Object(x.jsx)("option",{value:"",label:"Selectati tipul de studiu"}),Object(x.jsx)("option",{value:"Licenta",label:"Licenta"}),Object(x.jsx)("option",{value:"Master",label:"Master"}),Object(x.jsx)("option",{value:"Doctorat",label:"Doctorat"})]}),M.errors.type_of_study&&Object(x.jsx)(b.a,{children:M.errors.type_of_study})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"year_of_study",className:"form-group-label label",children:"Anul de studiu.*"}),Object(x.jsxs)("select",{id:"year_of_study",className:"form-group-input form-group-select",name:"year_of_study",value:M.values.year_of_study,onChange:M.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati anul de studiu"}),("Licenta"===C||""===C)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("option",{value:"1",label:"1"}),Object(x.jsx)("option",{value:"2",label:"2"}),Object(x.jsx)("option",{value:"3",label:"3"}),Object(x.jsx)("option",{value:"4",label:"4"}),Object(x.jsx)("option",{value:"5",label:"5"}),Object(x.jsx)("option",{value:"6",label:"6"})]}),("Master"===C||"Doctorat"===C)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("option",{value:"1",label:"1"}),Object(x.jsx)("option",{value:"2",label:"2"})]})]}),M.errors.year_of_study&&Object(x.jsx)(b.a,{children:M.errors.year_of_study})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"grade",className:"form-group-label label",children:"Media generala a anului trecut.*"}),Object(x.jsx)("input",{type:"number",min:"0",max:"10",step:"0.01",id:"grade",className:"form-group-input",name:"grade",value:M.values.grade,onChange:M.handleChange}),M.errors.grade&&Object(x.jsx)(b.a,{children:M.errors.grade})]})]}),Object(x.jsxs)("div",{className:"form-block",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"financial_type",className:"form-group-label label",children:"Tipul de studiu: buget / taxa.*"}),Object(x.jsxs)("select",{id:"financial_type",className:"form-group-input form-group-select",name:"financial_type",value:M.values.financial_type,onChange:M.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati tipul de studiu: buget / taxa"}),Object(x.jsx)("option",{value:"Buget",label:"Buget"}),Object(x.jsx)("option",{value:"Taxa",label:"Taxa"})]}),M.errors.financial_type&&Object(x.jsx)(b.a,{children:M.errors.financial_type})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"nationality",className:"form-group-label label",children:"Nationalitatea*"}),Object(x.jsx)("input",{type:"text",id:"nationality",className:"form-group-input",name:"nationality",value:M.values.nationality,onChange:M.handleChange}),M.errors.nationality&&Object(x.jsx)(b.a,{children:M.errors.nationality})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"student_gender",className:"form-group-label label",children:"Genul dvs.*"}),Object(x.jsxs)("select",{id:"student_gender",className:"form-group-input form-group-select",name:"student_gender",value:M.values.student_gender,onChange:M.handleChange,children:[Object(x.jsx)("option",{value:"",label:"Selectati genul dvs."}),Object(x.jsx)("option",{value:"Feminin",label:"Feminin"}),Object(x.jsx)("option",{value:"Masculin",label:"Masculin"})]}),M.errors.student_gender&&Object(x.jsx)(b.a,{children:M.errors.student_gender})]})]}),Object(x.jsx)(m.a,{type:"submit",textLabel:"Actualizeaza inrolarea"}),Object(x.jsx)(m.a,{type:"button",onClick:function(){t(Object(f.f)()),s.a.delete("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/enrollment/".concat(a.uuid),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){204===e.status?(t(Object(f.c)()),i.push("/".concat(l.user.first_name,".").concat(l.user.last_name,"/kins"))):(t(Object(f.a)("There is an error, your enrollment can not be deleted. Please try again")),y("There is an error, your enrollment can not be deleted. Please try again"))})).catch((function(e){y("There is an error, please try again")}))},textLabel:"Sterge inrolarea"})]})]})]})})},_=t(96),N=t(97),C={isLink:null,subtitle:"Inrolarea studentilor"};a.default=function(){var e=Object(O.c)(f.j),a=Object(O.b)(),t=Object(r.useState)({}),l=Object(n.a)(t,2),u=l[0],d=l[1],b=Object(r.useState)(!0),j=Object(n.a)(b,2),m=j[0],h=j[1];return Object(r.useEffect)((function(){a(Object(f.g)()),s.a.get("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/enrollment",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){var t=e.data.enrollment;a(Object(f.d)(t)),d(t),h(!1)})).catch((function(e){a(Object(f.b)("There is an error with your informations")),h(!1)}))}),[a]),m?Object(x.jsx)(i.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(c.a,{}),Object(x.jsxs)("main",{className:"page-content",children:[Object(x.jsx)(o.a,{sectionData:C}),e.isEnrolled?Object(x.jsx)(y,{sectionData:u}):Object(x.jsx)(g,{}),Object(x.jsx)(_.a,{})]}),Object(x.jsx)(N.a,{})]})}},91:function(e,a,t){"use strict";t(0);var n=t(93),r=t(95),l=(t(92),t(2));a.a=function(e){var a=e.type,t=e.disabled,s=e.onClick,i=e.textLabel;return Object(l.jsxs)("button",{type:a,disabled:t,onClick:s,className:"button-primary",children:[Object(l.jsx)("span",{className:"button-primary-label label",children:i}),Object(l.jsx)(n.b.Provider,{value:{color:"#fafafa",size:"30px"},children:Object(l.jsx)(r.b,{})})]})}},92:function(e,a,t){},99:function(e,a,t){"use strict";var n,r,l=t(106),s=(t(0),t(107)),i=t(2),c=s.a.div(n||(n=Object(l.a)(["\n    width: 100%;\n    padding: 2.5rem 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: start;\n    transition: var(--hover-transition);\n"]))),o=s.a.p(r||(r=Object(l.a)(["\n    font-size: 1.6rem;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    color: #a50000;\n    transition: var(--hover-transition);\n"])));a.a=function(e){var a=e.children;return Object(i.jsx)(c,{children:Object(i.jsx)(o,{children:a})})}}}]);
//# sourceMappingURL=24.3c43935a.chunk.js.map