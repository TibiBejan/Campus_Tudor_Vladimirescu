(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{102:function(a,e,t){"use strict";t(0);var s=t(24),n=(t(103),t(2));e.a=function(a){var e=a.sectionData,t=a.title;return Object(n.jsx)("section",{className:"auth-banner",children:Object(n.jsxs)("div",{className:"auth-banner-content",children:[Object(n.jsx)("div",{className:"content-heading-wrapper",children:Object(n.jsx)("h1",{className:"content-heading-title heading-one",children:t||"Portalul utilizatorului"})}),Object(n.jsxs)("div",{className:"content-subtitle-wrapper",children:[Object(n.jsx)("h3",{className:"content-subtitle heading-three",children:e.subtitle}),e.isLink&&Object(n.jsx)(s.b,{to:e.path,className:"content-link-wrapper",children:Object(n.jsx)("span",{className:"content-link-label label-large",children:e.pathLabel})})]})]})})}},103:function(a,e,t){},113:function(a,e,t){"use strict";t(0);var s=t(24),n=t(18),c=t(22),i=(t(125),t(2));e.a=function(){var a=Object(n.c)(c.l);return Object(i.jsxs)("ul",{className:"dashboard-main-nav",children:[Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/dashboard"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Dashboard"})})}),Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/enrollment"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Enrollment"})})}),Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/information"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Information"})})}),Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/kins"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Student Kins"})})}),Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/update-details"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Update account"})})}),Object(i.jsx)("li",{className:"dashboard-nav-list-item",children:Object(i.jsx)(s.c,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/update-password"),activeClassName:"selected",className:"dashboard-nav-link",children:Object(i.jsx)("span",{className:"label-medium",children:"Update password"})})})]})}},120:function(a,e,t){},121:function(a,e,t){},125:function(a,e,t){},142:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/kin-illustration.643a4cc1.svg"},144:function(a,e,t){"use strict";var s=t(119),n=t(105);function c(){return(c=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a}).apply(this,arguments)}var i={toggleEl:function(a,e){a[e?"addClass":"removeClass"](this.params.navigation.disabledClass),a[0]&&"BUTTON"===a[0].tagName&&(a[0].disabled=e)},update:function(){var a=this,e=a.params.navigation,t=a.navigation.toggleEl;if(!a.params.loop){var s=a.navigation,n=s.$nextEl,c=s.$prevEl;c&&c.length>0&&(a.isBeginning?t(c,!0):t(c,!1),a.params.watchOverflow&&a.enabled&&c[a.isLocked?"addClass":"removeClass"](e.lockClass)),n&&n.length>0&&(a.isEnd?t(n,!0):t(n,!1),a.params.watchOverflow&&a.enabled&&n[a.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(a){var e=this;a.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()},onNextClick:function(a){var e=this;a.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()},init:function(){var a,e,t=this,c=t.params.navigation;(t.params.navigation=Object(n.b)(t.$el,t.params.navigation,t.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),c.nextEl||c.prevEl)&&(c.nextEl&&(a=Object(s.a)(c.nextEl),t.params.uniqueNavElements&&"string"===typeof c.nextEl&&a.length>1&&1===t.$el.find(c.nextEl).length&&(a=t.$el.find(c.nextEl))),c.prevEl&&(e=Object(s.a)(c.prevEl),t.params.uniqueNavElements&&"string"===typeof c.prevEl&&e.length>1&&1===t.$el.find(c.prevEl).length&&(e=t.$el.find(c.prevEl))),a&&a.length>0&&a.on("click",t.navigation.onNextClick),e&&e.length>0&&e.on("click",t.navigation.onPrevClick),Object(n.d)(t.navigation,{$nextEl:a,nextEl:a&&a[0],$prevEl:e,prevEl:e&&e[0]}),t.enabled||(a&&a.addClass(c.lockClass),e&&e.addClass(c.lockClass)))},destroy:function(){var a=this,e=a.navigation,t=e.$nextEl,s=e.$prevEl;t&&t.length&&(t.off("click",a.navigation.onNextClick),t.removeClass(a.params.navigation.disabledClass)),s&&s.length&&(s.off("click",a.navigation.onPrevClick),s.removeClass(a.params.navigation.disabledClass))}};e.a={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){Object(n.a)(this,{navigation:c({},i)})},on:{init:function(a){a.navigation.init(),a.navigation.update()},toEdge:function(a){a.navigation.update()},fromEdge:function(a){a.navigation.update()},destroy:function(a){a.navigation.destroy()},"enable disable":function(a){var e=a.navigation,t=e.$nextEl,s=e.$prevEl;t&&t[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),s&&s[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)},click:function(a,e){var t=a.navigation,n=t.$nextEl,c=t.$prevEl,i=e.target;if(a.params.navigation.hideOnClick&&!Object(s.a)(i).is(c)&&!Object(s.a)(i).is(n)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===i||a.pagination.el.contains(i)))return;var r;n?r=n.hasClass(a.params.navigation.hiddenClass):c&&(r=c.hasClass(a.params.navigation.hiddenClass)),!0===r?a.emit("navigationShow"):a.emit("navigationHide"),n&&n.toggleClass(a.params.navigation.hiddenClass),c&&c.toggleClass(a.params.navigation.hiddenClass)}}}}},145:function(a,e,t){"use strict";var s=t(105);function n(){return(n=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a}).apply(this,arguments)}var c={setTranslate:function(){for(var a=this,e=a.slides,t=0;t<e.length;t+=1){var s=a.slides.eq(t),n=-s[0].swiperSlideOffset;a.params.virtualTranslate||(n-=a.translate);var c=0;a.isHorizontal()||(c=n,n=0);var i=a.params.fadeEffect.crossFade?Math.max(1-Math.abs(s[0].progress),0):1+Math.min(Math.max(s[0].progress,-1),0);s.css({opacity:i}).transform("translate3d("+n+"px, "+c+"px, 0px)")}},setTransition:function(a){var e=this,t=e.slides,s=e.$wrapperEl;if(t.transition(a),e.params.virtualTranslate&&0!==a){var n=!1;t.transitionEnd((function(){if(!n&&e&&!e.destroyed){n=!0,e.animating=!1;for(var a=["webkitTransitionEnd","transitionend"],t=0;t<a.length;t+=1)s.trigger(a[t])}}))}}};e.a={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){Object(s.a)(this,{fadeEffect:n({},c)})},on:{beforeInit:function(a){if("fade"===a.params.effect){a.classNames.push(a.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};Object(s.d)(a.params,e),Object(s.d)(a.originalParams,e)}},setTranslate:function(a){"fade"===a.params.effect&&a.fadeEffect.setTranslate()},setTransition:function(a,e){"fade"===a.params.effect&&a.fadeEffect.setTransition(e)}}}},149:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-1.825b9699.jpg"},150:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-2.825b9699.jpg"},151:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-3.825b9699.jpg"},152:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-4.825b9699.jpg"},153:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-5.06c0f12c.jpg"},154:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-6.06c0f12c.jpg"},155:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-7.06c0f12c.jpg"},156:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-8.9c9e7011.jpg"},157:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-9.9a1dc547.jpg"},158:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-10.91396156.jpg"},159:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-11.ea9e0138.jpg"},160:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-12.a2f8099b.jpg"},161:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-13.9c9e7011.jpg"},162:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-14.a99fdfa7.jpg"},163:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-15.97f54713.jpg"},164:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-16.a99fdfa7.jpg"},165:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-17.3f5361e9.jpg"},166:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-18.9a1dc547.jpg"},167:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-19.9a1dc547.jpg"},168:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-20.9c9e7011.jpg"},169:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/campus-21.9c9e7011.jpg"},190:function(a,e,t){var s={"./campus-1.jpg":149,"./campus-10.jpg":158,"./campus-11.jpg":159,"./campus-12.jpg":160,"./campus-13.jpg":161,"./campus-14.jpg":162,"./campus-15.jpg":163,"./campus-16.jpg":164,"./campus-17.jpg":165,"./campus-18.jpg":166,"./campus-19.jpg":167,"./campus-2.jpg":150,"./campus-20.jpg":168,"./campus-21.jpg":169,"./campus-3.jpg":151,"./campus-4.jpg":152,"./campus-5.jpg":153,"./campus-6.jpg":154,"./campus-7.jpg":155,"./campus-8.jpg":156,"./campus-9.jpg":157};function n(a){var e=c(a);return t(e)}function c(a){if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}n.keys=function(){return Object.keys(s)},n.resolve=c,a.exports=n,n.id=190},272:function(a,e,t){"use strict";t(0),t(273);var s=t(2);e.a=function(a){var e=a.message,n=t(142);return Object(s.jsx)("div",{className:"person-card-empty",children:Object(s.jsxs)("div",{className:"person-card-empty-main",children:[Object(s.jsx)("div",{className:"profile-image",children:Object(s.jsx)("img",{src:n.default,alt:"Empty student card illustration",className:"background-image"})}),Object(s.jsx)("p",{className:"paragraph-showcase",children:e})]})})}},273:function(a,e,t){},274:function(a,e,t){"use strict";var s=t(94),n=t(0),c=t(91),i=(t(275),t(2));e.a=function(a){var e=a.cardData,r=a.disabledDetails,l=Object(n.useState)(!1),o=Object(s.a)(l,2),d=o[0],u=o[1],p=t(142),m=function(){u((function(a){return!a}))};return Object(i.jsxs)("div",{className:"person-card",children:[Object(i.jsxs)("div",{className:"person-card-main",children:[Object(i.jsx)("div",{className:"profile-image",children:Object(i.jsx)("img",{src:p.default,alt:"".concat(e.first_name," ").concat(e.last_name),className:"background-image"})}),Object(i.jsx)("h3",{className:"person-name heading-three",children:"".concat(e.first_name," ").concat(e.last_name)}),Object(i.jsx)("div",{className:"contact-group",children:Object(i.jsx)("a",{href:"mailto:".concat(e.email),className:"contact-group-link label-medium",children:e.email})}),Object(i.jsx)(c.a,{type:"button",onClick:r?null:m,textLabel:"Citeste mai mult"})]}),Object(i.jsx)("div",{className:d?"person-card-description active":"person-card-description",children:Object(i.jsxs)("div",{className:"person-card-description-inner",children:[Object(i.jsx)("p",{className:"paragraph description-center",children:e.Enrollment.university}),Object(i.jsxs)("div",{className:"description-group",children:[Object(i.jsx)("span",{className:"description-label label",children:"Tipul de studiu: "}),Object(i.jsx)("p",{className:"description-paragraph paragraph",children:e.Enrollment.type_of_study})]}),Object(i.jsxs)("div",{className:"description-group",children:[Object(i.jsx)("span",{className:"description-label label",children:"Anul de studiu: "}),Object(i.jsx)("p",{className:"description-paragraph paragraph",children:e.Enrollment.year_of_study})]}),Object(i.jsxs)("div",{className:"description-group",children:[Object(i.jsx)("span",{className:"description-label label",children:"Media generala: "}),Object(i.jsx)("p",{className:"description-paragraph paragraph",children:e.Enrollment.grade})]}),Object(i.jsxs)("div",{className:"description-group",children:[Object(i.jsx)("span",{className:"description-label label",children:"Finantare: "}),Object(i.jsx)("p",{className:"description-paragraph paragraph",children:e.Enrollment.financial_type})]}),Object(i.jsxs)("div",{className:"description-group",children:[Object(i.jsx)("span",{className:"description-label label",children:"Nationalitatea: "}),Object(i.jsx)("p",{className:"description-paragraph paragraph",children:e.Enrollment.nationality})]}),Object(i.jsx)(c.a,{type:"button",onClick:m,textLabel:"Citeste mai putin"})]})})]})}},275:function(a,e,t){},519:function(a,e,t){},520:function(a,e,t){},562:function(a,e,t){"use strict";t.r(e);var s=t(94),n=t(0),c=t(18),i=t(41),r=t(22),l=t(40),o=t(51),d=t.n(o),u=t(38),p=t(98),m=t(102),j=t(113),b=t(24),h=(t(519),t(2));var f=function(){var a=Object(c.c)(r.l);return Object(h.jsx)("section",{className:"dashboard-main",children:Object(h.jsxs)("div",{className:"dashboard-main-inner",children:[Object(h.jsx)(j.a,{}),Object(h.jsxs)("div",{className:"dashboard-information",children:[Object(h.jsxs)("h3",{className:"information-title heading-three",children:["Bine ai venit, ","".concat(a.user.last_name," ").concat(a.user.first_name)]}),Object(h.jsx)("p",{className:"information-description paragraph",children:"Pe aceast\u0103 pagin\u0103 se vor reg\u0103si informa\u021biile dumneavoastr\u0103 privind c\u0103minul \u0219i camera \xeen care a\u021bi fost repartizat din campusul nostru, precum \u0219i viitorii colegi de camer\u0103. De asemenea, utiliz\xe2nd link-urile de mai sus pute\u021bi s\u0103 v\u0103 actualiza\u021bi informa\u021biile generale , pute\u021bi s\u0103 adauga\u021bi persoane de contact sau pute\u021bi s\u0103 v\u0103 actualiza\u021bi parola. \xcen cazul \xeen care nu sunte\u021bi \xeenrolat, dar dori\u021bi s\u0103 fi\u021bi repartizat \xeen campusul Tudor Vladimirescu, v\u0103 rugam s\u0103 urma\u021bi pa\u0219ii de mai jos."}),Object(h.jsxs)("ol",{className:"information-accommodation-steps",children:[Object(h.jsx)("li",{className:"accommodation-step",children:Object(h.jsxs)("p",{className:"accommodation-step-label paragraph",children:["Primul pas din cadrul procesului de cazare consta in actualizarea informatiilor dumneavoastr\u0103 generale. Acestea pot fi completate accesand link-ul urmator:",Object(h.jsx)(b.b,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/information"),className:"step-link",children:Object(h.jsx)("span",{className:"step-link-label label",children:"Datele studentului"})})]})}),Object(h.jsx)("li",{className:"accommodation-step",children:Object(h.jsxs)("p",{className:"accommodation-step-label paragraph",children:["Al doilea pas din cadrul procesului de cazare consta in actualizarea persoanei/persoanelor de contact. Acestea pot fi adaugate accesand link-ul urmator:",Object(h.jsx)(b.b,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/kins"),className:"step-link",children:Object(h.jsx)("span",{className:"step-link-label label",children:"Persoane de contact"})})]})}),Object(h.jsx)("li",{className:"accommodation-step",children:Object(h.jsxs)("p",{className:"accommodation-step-label paragraph",children:["Ultimul pas din cadrul procesului de cazare consta in inrolarea propriu-zisa. Aceasta poate fi completata accesand link-ul urmator:",Object(h.jsx)(b.b,{to:"/".concat(a.user.first_name,".").concat(a.user.last_name,"/enrollment"),className:"step-link",children:Object(h.jsx)("span",{className:"step-link-label label",children:"Inrolare"})})]})})]})]})]})})},g=t(93),v=t(95),O=t(274),x=t(272),N=t(89),k=(t(90),t(520),t(543)),C=t(536),E=t(541),w=t(144),_=t(145);t(127),t(120),t(121);E.a.use([w.a,_.a]);var y=Object(N.trackWindowScroll)((function(a){var e=a.scrollPosition,r=Object(c.c)(i.b).accommodation,l=r.student,o=r.neighbors.filter((function(a){return a.email!==l.email})),d=Object(n.useState)(null),u=Object(s.a)(d,2),p=(u[0],u[1]),m=Object(n.useState)(1),f=Object(s.a)(m,2),E=(f[0],f[1]),w=Object(n.useState)({prevButton:!1,nextButton:!1}),_=Object(s.a)(w,2),y=_[0],z=_[1],P=Object(n.useRef)(null),T=Object(n.useRef)(null),B=t(190)("./campus-".concat(l.hallId,".jpg")).default;return Object(h.jsx)("section",{className:"dashboard-accommodate",children:Object(h.jsxs)("div",{className:"dashboard-accommodate-inner",children:[Object(h.jsx)(j.a,{}),Object(h.jsxs)("div",{className:"dashboard-accommodate-cards",children:[Object(h.jsxs)("div",{className:"showcase-card",children:[Object(h.jsxs)("h3",{className:"showcase-card-title heading-three",children:["Bine ai venit, ","".concat(l.last_name," ").concat(l.first_name)]}),Object(h.jsxs)("p",{className:"showcase-card-description paragraph",children:["Pe baza informatiilor furnizate in cele 3 formulare de inscriere, ai fost repartizat cu success in campusul Tudor Vladimirescu, in calitate de student al universitatii ",Object(h.jsx)("span",{className:"secondary-label",children:l.Enrollment.university.split(" ").slice(1).join(" ")}),". Ai fost cazat in caminul ",Object(h.jsxs)("span",{className:"secondary-label",children:["T",l.hallId]}),", in camera cu numarul ",Object(h.jsx)("span",{className:"secondary-label",children:l.HallRoom.room_number})," situata la ",Object(h.jsx)("span",{className:"secondary-label",children:0===l.HallRoom.room_floor?"parter":"etajul ".concat(l.HallRoom.room_floor)}),"."]}),Object(h.jsx)("p",{className:"showcase-card-description paragraph",children:"De asemenea, pe aceasta pagina poti vizualiza caminul in care ai fost repartizat, administratorul precum si presenditele caminului, dar si viitorii colegi de camera."})]}),Object(h.jsx)(b.b,{to:"/residence-halls/".concat(l.Hall.hall_name),className:"hall-card-wrapper",children:Object(h.jsxs)("div",{className:"hall-card",children:[Object(h.jsx)("div",{className:"hall-card-background",children:Object(h.jsx)(N.LazyLoadImage,{alt:"Camin T".concat(l.hallId),src:B,effect:"blur",scrollPosition:e,className:"background-image",height:"100%",width:"100%"})}),Object(h.jsxs)("div",{className:"hall-card-content",children:[Object(h.jsxs)("h4",{className:"hall-card-title heading-four",children:["Camin T",l.hallId]}),Object(h.jsxs)("div",{className:"hall-card-content-hovered",children:[Object(h.jsxs)("span",{className:"label",children:["Studenti: ",l.Hall.students_number]}),Object(h.jsxs)("span",{className:"label",children:["Numar de camere: ",l.Hall.rooms_number]}),Object(h.jsxs)("span",{className:"label",children:["Studenti in camera: ",l.Hall.student_per_room]}),Object(h.jsxs)("span",{className:"label",children:["Media necesara: ",l.Hall.min_grade]})]})]})]})})]}),Object(h.jsx)("h3",{className:"showcase-card-title heading-three",children:"Viitori colegi"}),Object(h.jsxs)(k.a,{slidesPerView:1,navigation:{prevEl:P.current,nextEl:T.current},breakpoints:{1366:{slidesPerView:2.5},1250:{slidesPerView:2},768:{slidesPerView:1.5},767:{slidesPerView:1}},grabCursor:!0,resistance:!0,resistanceRatio:.5,spaceBetween:50,speed:1e3,onInit:function(){p(o.length),E(1)},onSlideChange:function(a){E(a.activeIndex+1),0===a.activeIndex?z({prevButton:!0,nextButton:!1}):a.activeIndex>=o.length-1?z({prevButton:!1,nextButton:!0}):z({prevButton:!1,nextButton:!1})},className:"dashboard-accommodate-slider",children:[0===o.length&&Object(h.jsx)(C.a,{children:Object(h.jsx)(x.a,{message:"In acest moment, sunteti singurul student cazat in aceasta camera"})}),o.map((function(a){return Object(h.jsx)(C.a,{children:Object(h.jsx)(O.a,{cardData:a})},"person-card-".concat(a.email))})),Object(h.jsx)("button",{disabled:y.prevButton,className:"showcase-prev-button",ref:P,children:Object(h.jsx)(g.b.Provider,{value:{color:"#fafafa",size:"34px"},children:Object(h.jsx)(v.a,{})})}),Object(h.jsx)("button",{disabled:y.nextButton,className:"showcase-next-button",ref:T,children:Object(h.jsx)(g.b.Provider,{value:{color:"#fafafa",size:"34px"},children:Object(h.jsx)(v.b,{})})})]})]})})})),z=t(96),P=t(97),T={isLink:null,subtitle:"Informatii general si repartizare"};e.default=function(){var a=Object(c.c)(i.b),e=Object(c.c)(r.l),t=Object(c.c)(l.j),o=Object(c.b)(),j=Object(n.useState)(!0),b=Object(s.a)(j,2),g=b[0],v=b[1],O=Object(n.useState)({}),x=Object(s.a)(O,2),N=(x[0],x[1]);return Object(n.useEffect)((function(){return o(Object(i.e)()),d.a.get("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/accommodation/".concat(e.user.uuid),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",withCredentials:!0,credentials:"include"}}).then((function(a){var e=a.data.accommodatedUser;o(Object(i.d)(e)),N(e),v(!1)})).catch((function(a){o(Object(i.a)("There is an error with your informations, please try again later")),v(!1),N({})})),function(){N({})}}),[o,e.user.uuid,t]),g?Object(h.jsx)(u.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(p.a,{}),Object(h.jsxs)("main",{className:"page-content",children:[Object(h.jsx)(m.a,{sectionData:T}),a.isAccommodated?Object(h.jsx)(y,{}):Object(h.jsx)(f,{}),Object(h.jsx)(z.a,{})]}),Object(h.jsx)(P.a,{})]})}},91:function(a,e,t){"use strict";t(0);var s=t(93),n=t(95),c=(t(92),t(2));e.a=function(a){var e=a.type,t=a.disabled,i=a.onClick,r=a.textLabel;return Object(c.jsxs)("button",{type:e,disabled:t,onClick:i,className:"button-primary",children:[Object(c.jsx)("span",{className:"button-primary-label label",children:r}),Object(c.jsx)(s.b.Provider,{value:{color:"#fafafa",size:"30px"},children:Object(c.jsx)(n.b,{})})]})}},92:function(a,e,t){}}]);
//# sourceMappingURL=11.7358ebcf.chunk.js.map