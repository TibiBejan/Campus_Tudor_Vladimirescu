(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{512:function(e,a,t){},514:function(e,a,t){},515:function(e,a,t){},517:function(e,a,t){},546:function(e,a,t){"use strict";t.r(a);var c=t(2),i=t(53),n=t(98),s=t(99),l=t(103),r=t(79),o=t.n(r),u=t(102),d=t(10),b=t(35),j=t(40),m=t(45),h=t(21),p=t.n(h),O=t(65),v=t(107),f=t(12),x=t(16),g=(t(512),t(1));var y=function(){var e=Object(f.b)(),a=Object(c.useState)(""),t=Object(d.a)(a,2),i=t[0],n=t[1],s=Object(c.useRef)(null);Object(c.useEffect)((function(){e(Object(x.h)()),p.a.get("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(a){var t=a.data.students;e(Object(x.e)(t)),n("")})).catch((function(a){var t=a.response.data.message?a.response.data.message:"Please type a querry or select something from the inputs below.";n(t),e(Object(x.k)(t))}))}),[e]);var l=function(){var a=Object(u.a)(o.a.mark((function a(t){var c,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:window.scrollTo(0,s.current.offsetTop),c={headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}},i=null,t.university&&t.searchQuerry?i="https://campus-tudor-vladimirescu.herokuapp.com/api/v1/search-users?".concat(t.university?"university=".concat(t.university):"","&").concat(t.searchQuerry?"searchQuerry=".concat(t.searchQuerry):""):!t.university||t.searchQuerry&&""!==t.searchQuerry?!t.searchQuerry||t.university&&""!==t.university?t.university&&""!==t.university||t.searchQuerry&&""!==t.searchQuerry||(i="https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/"):i="https://campus-tudor-vladimirescu.herokuapp.com/api/v1/search-users?searchQuerry=".concat(t.searchQuerry):i="https://campus-tudor-vladimirescu.herokuapp.com/api/v1/search-users?university=".concat(t.university),e(Object(x.h)()),p.a.get(i,c).then((function(a){var t=a.data.students;e(Object(x.e)(t)),n(""),t.rows&&0===t.rows.length?(e(Object(x.k)("Nu au fost gasiti studenti pe baza acestor criterii.")),n("Nu au fost gasiti studenti pe baza acestor criterii.")):0!==!t.length&&t||(e(Object(x.k)("Nu au fost gasiti studenti pe baza acestor criterii.")),n("Nu au fost gasiti studenti pe baza acestor criterii."))})).catch((function(a){var t;t=a.response.data.message?a.response.data.message:"Please type a querry or select something from the inputs below.",n(t),e(Object(x.k)(t))}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),r=Object(O.a)({initialValues:{university:"",searchQuerry:""},validateOnBlur:!0,enableReinitialize:!0,onSubmit:l,validationSchema:v.a});return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"dashboard-form-block",ref:s,children:[Object(g.jsxs)("div",{className:"dashboard-form-block-heading-wrapper",children:[Object(g.jsx)("h3",{className:"dashboard-form-title heading-three",children:"Cauta in baza de date."}),i?Object(g.jsx)(j.a,{children:i}):null]}),Object(g.jsxs)("form",{className:"dashboard-admin-search-form",method:"POST",onSubmit:r.handleSubmit,children:[Object(g.jsx)("div",{className:"form-block full-width",children:Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"searchQuerry",className:"form-group-label label",children:"Adresa de e-email, numele sau prenumele studentului*"}),Object(g.jsx)("input",{type:"text",id:"searchQuerry",className:"form-group-input",name:"searchQuerry",value:r.values.searchQuerry,onChange:r.handleChange}),r.errors.searchQuerry&&Object(g.jsx)(b.a,{children:r.errors.searchQuerry})]})}),Object(g.jsx)("div",{className:"form-block full-width",children:Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"university",className:"form-group-label label",children:"Universitatea"}),Object(g.jsxs)("select",{id:"university",className:"form-group-input form-group-select",name:"university",value:r.values.university,onChange:r.handleChange,children:[Object(g.jsx)("option",{value:"",label:"Selectati universitatea"}),Object(g.jsx)("option",{value:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor",label:"Facultatea de \u015etiin\u0163a \u015fi Ingineria Materialelor"}),Object(g.jsx)("option",{value:"Facultatea de Mecanic\u0103 Ia\u015fi",label:"Facultatea de Mecanic\u0103 Ia\u015fi"}),Object(g.jsx)("option",{value:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103",label:"Facultatea de Inginerie Electric\u0103, Energetic\u0103 \u015fi Informatic\u0103 Aplicat\u0103"}),Object(g.jsx)("option",{value:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d",label:"Facultatea de Inginerie Chimic\u0103 \u0219i Protec\u021bia Mediului \u201eCristofor Simionescu\u201d"}),Object(g.jsx)("option",{value:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului",label:"Facultatea de Hidrotehnic\u0103, Geodezie \u015fi Ingineria Mediului"}),Object(g.jsx)("option",{value:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei",label:"Facultatea de Electronic\u0103, Telecomunica\u0163ii \u015fi Tehnologia Informa\u0163iei"}),Object(g.jsx)("option",{value:"Facultatea de Design Industrial \u0219i Managementul Afacerilor",label:"Facultatea de Design Industrial \u0219i Managementul Afacerilor"}),Object(g.jsx)("option",{value:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii",label:"Facultatea de Construc\u0163ii \u015fi Instala\u0163ii"}),Object(g.jsx)("option",{value:"Facultatea de Automatic\u0103 \u0219i Calculatoare",label:"Facultatea de Automatic\u0103 \u0219i Calculatoare"}),Object(g.jsx)("option",{value:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d",label:"Facultatea de Arhitectur\u0103 \u201eG.M. Cantacuzino\u201d"}),Object(g.jsx)("option",{value:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial",label:"Facultatea Construc\u0163ii de Ma\u015fini \u0219i Management Industrial"})]}),r.errors.university&&Object(g.jsx)(b.a,{children:r.errors.university})]})}),Object(g.jsx)(m.a,{type:"submit",textLabel:"Cauta"})]})]})})},N=t(513),C=t.n(N),k=t(14),w=t(0),F=t(516),I=t(26),S=t.p+"static/media/delete-illustration.ecb8dbc3.svg";t(514);var A=function(e){var a=e.handleDelete,t=e.toggleModal,i=e.toggled;return Object(c.useEffect)((function(){return i?document.body.style.overflow="hidden":document.body.style.overflowY="scroll",function(){document.body.style.overflowY="scroll"}}),[i]),Object(g.jsx)("div",{className:i?"modal-wrapper open":"modal-wrapper",children:Object(g.jsx)("div",{className:"modal-box",children:Object(g.jsxs)("div",{className:"modal-box-inner",children:[Object(g.jsx)("h3",{className:"heading-three",children:"Sunteti sigur?"}),Object(g.jsx)("p",{className:"paragraph",children:"Aceasta actiune nu poate fi revocata!"}),Object(g.jsx)("div",{className:"delete-illustration",children:Object(g.jsx)("img",{src:S,alt:"",className:"background-image"})}),Object(g.jsxs)("div",{className:"modal-actions",children:[Object(g.jsx)("button",{type:"button",className:"modal-action-button",onClick:a,children:Object(g.jsx)("span",{className:"label",children:"Confirm\u0103"})}),Object(g.jsx)("button",{type:"button",className:"modal-action-button",onClick:t,children:Object(g.jsx)("span",{className:"label",children:"Intoarce-te"})})]})]})})})};t(515);var M=function(e){var a=e.studentsData,i=Object(f.b)(),n=Object(k.g)(),s=Object(c.useState)(0),l=Object(d.a)(s,2),r=l[0],o=l[1],u=Object(c.useState)(!1),b=Object(d.a)(u,2),m=b[0],h=b[1],O=Object(c.useState)(null),v=Object(d.a)(O,2),y=v[0],N=v[1],S=Object(c.useState)(""),M=Object(d.a)(S,2),Q=M[0],T=M[1],E=Object(c.useRef)(null),z=t(82).default,P=function(){return window.scrollTo(0,E.current.offsetTop)},D=function(e){!1===m?(h(!0),N(e)):!0===m&&(h(!1),N(null))};Object(c.useEffect)((function(){P()}),[r]);var L=a,G=10*r,R=Math.ceil(L.length/10),q=L.slice(G,G+10).map((function(e,a){var t="";return null===e.Enrollment||void 0===e.Enrollment?t="Autentificat":e.Enrollment&&null===e.hallId?t="Inrolat":e.Enrollment&&e.hallId&&(t="Cazat"),Object(g.jsxs)("div",{className:"student-block",children:[Object(g.jsx)("div",{className:"student-block-primary-color"}),Object(g.jsx)("div",{className:"student-block-uni-logo",children:Object(g.jsx)("img",{src:z,alt:"Student Tuiasi",className:"background-image"})}),Object(g.jsxs)("div",{className:"student-block-label-wrapper",children:[Object(g.jsx)("span",{className:"label",children:"Prenume"}),Object(g.jsx)("span",{className:"label-medium",children:e.first_name})]}),Object(g.jsxs)("div",{className:"student-block-label-wrapper",children:[Object(g.jsx)("span",{className:"label",children:"Nume"}),Object(g.jsx)("span",{className:"label-medium",children:e.last_name})]}),Object(g.jsxs)("div",{className:"student-block-label-wrapper",children:[Object(g.jsx)("span",{className:"label",children:"Status"}),Object(g.jsx)("span",{className:"label-medium",children:t})]}),Object(g.jsxs)("div",{className:"student-block-actions",children:[Object(g.jsx)("button",{type:"button",className:"button-action",onClick:function(){return function(e){var a=e;i(Object(x.g)()),p.a.get("/api/v1/users/".concat(a),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){var a=e.data.user;i(Object(x.d)(a)),n.push("/admin/".concat(a.uuid))})).catch((function(e){T("Student can not be selected, please try again later"),i(Object(x.i)("Student can not be selected, please try again later"))}))}(e.uuid)},children:Object(g.jsx)(w.b.Provider,{value:{size:"24px",color:"#fafafa"},children:Object(g.jsx)(F.a,{})})}),Object(g.jsx)("button",{type:"button",className:"button-action",onClick:function(){return D(e.uuid)},children:Object(g.jsx)(w.b.Provider,{value:{size:"24px",color:"#fafafa"},children:Object(g.jsx)(I.d,{className:"button-action-icon"})})})]})]},"student-".concat(e.uuid))}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{toggled:m,toggleModal:D,handleDelete:function(){P();i(Object(x.f)()),p.a.delete("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/".concat(y),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(e){h(!1),N(null),i(Object(x.c)(y))})).catch((function(e){h(!1),N(null),T("Student can not be deleted, please try again later"),i(Object(x.j)("Student can not be deleted, please try again later"))}))}}),Q?Object(g.jsx)(j.a,{children:Q}):null,Object(g.jsx)("div",{className:"pagination-content-blocks",ref:E,children:q}),Object(g.jsx)(C.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:R,onPageChange:function(e){var a=e.selected;o(a)},containerClassName:"pagination-buttons-wrapper",previousLinkClassName:"previous-button",nextLinkClassName:"next-button",disabledClassName:"pagination-disabled",activeClassName:"pagination-active"})]})};t(517);var Q=function(){var e=Object(f.c)(x.a);return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(g.jsx)("section",{className:"admin-dashboard-main",children:Object(g.jsxs)("div",{className:"admin-dashboard-main-inner",children:[Object(g.jsx)(l.a,{}),Object(g.jsx)(y,{}),0!==Object.keys(e.students).length&&Object(g.jsx)(M,{studentsData:e.students})]})})},T=t(96),E=t(97),z={isLink:null,subtitle:"Informatii generale"};a.default=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{}),Object(g.jsx)(n.a,{}),Object(g.jsxs)("main",{className:"page-content",children:[Object(g.jsx)(s.a,{sectionData:z,title:"Panoul administratorului"}),Object(g.jsx)(Q,{}),Object(g.jsx)(T.a,{})]}),Object(g.jsx)(E.a,{})]})}}}]);
//# sourceMappingURL=22.c6a4e8b5.chunk.js.map