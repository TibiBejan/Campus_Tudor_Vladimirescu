import React, { useEffect, useRef, lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Switch, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { AnimatePresence } from 'framer-motion';
import InitialTransition from './utils/InitialTransition/InitialTransition';
import axios from 'axios';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestCheckLogin, receiveCheckLogin, checkLoginError } from './redux/userSlice';
import { adminSelector } from './redux/adminSlice';

// UTILS
import ScrollToTop from './utils/ScrollToTop';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import AdminDashboardStudent from './pages/AdminDashboardStudent';

// LAZY ROUTES
const Index = lazy(()=> import('./pages/Index'));
const About = lazy(()=> import('./pages/About'));
const Contact = lazy(()=> import('./pages/Contact'));
const News = lazy(()=> import('./pages/News'));
const Organisations = lazy(()=> import('./pages/Organisations'));
const StudentServices = lazy(()=> import('./pages/StudentServices'));
const Cafetaria = lazy(()=> import('./pages/Cafetaria'));
const SportsBase = lazy(()=> import('./pages/SportsBase'));
const Tuiasi = lazy(()=> import('./pages/Tuiasi'));
const HealthSecurity = lazy(()=> import('./pages/HealthSecurity'));
const Police = lazy(()=> import('./pages/Police'));
const Dispensary = lazy(()=> import('./pages/Dispensary'));
const CounselingCenter = lazy(()=> import('./pages/CounselingCenter'));
const Accommodation = lazy(()=> import('./pages/Accommodation'));
const ResidenceHalls = lazy(()=> import('./pages/ResidenceHalls'));
const ResidenceHall = lazy(()=> import('./pages/ResidenceHall'));
const FAQ = lazy(()=> import('./pages/FAQ'));
const Post = lazy(()=> import('./pages/Post'));

const AdminDashboard = lazy(()=> import('./pages/AdminDashboard'));
const AdminDashboardAccountInfo = lazy(()=> import('./pages/AdminDashboardAccountInfo'));
const AdminDashboardPassword = lazy(()=> import('./pages/AdminDashboardPassword'));
const AdminDashboardCreateAcc = lazy(()=> import('./pages/AdminDashboardCreateAcc'));

const StudentDashboard = lazy(()=> import('./pages/StudentDashboard'));
const StudentDashboardPwdUpdate = lazy(()=> import('./pages/StudentDashboardPwdUpdate'));
const StudentDashboardAccountInfo = lazy(()=> import('./pages/StudentDashboardAccountInfo'));
const StudentDashboardEnrollment = lazy(()=> import('./pages/StudentDashboardEnrollment'));
const StudentDashboardEnrollmentConfirm = lazy(()=> import('./pages/StudentDashboardEnrollmentConfirm'));
const StudentDashboardInformation = lazy(()=> import('./pages/StudentDashboardInfromation'));
const StudentDashboardKin = lazy(()=> import('./pages/StudentDashboardKin'));
const StudentDashboardKinUpdate = lazy(()=> import('./pages/StudentDashboardKinUpdate'));

const Login = lazy(()=> import('./pages/Login'));
const Register = lazy(()=> import('./pages/Register'));
const ForgotPassword = lazy(()=> import('./pages/ForgotPassword'));
const ResetPassword = lazy(()=> import('./pages/ResetPassword'));

const Page404 = lazy(()=> import('./pages/Page404'));

function App() {

  // HOOKS
  const dispatch = useDispatch();
  const adminState = useSelector(adminSelector);
  const location = useLocation();

  // REF"S
  const app = useRef(null);
  // FETCH AUTH USER ON RENDER
  useEffect(() => {
    const fetchUser = () => {
      // INIT REQ
      dispatch(requestCheckLogin);

      //"/api/v1/users/checkLogin"

      // fetch("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/checkLogin")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if(data.status === 200 || data.status === 201) {
      //       const { userData } = data.data;
      //       dispatch(receiveCheckLogin(userData));
      //       } else {
      //           dispatch(checkLoginError('There is an error, please try again'));
      //       }
      // }).catch(err => {
          
      //       const { message } = err.response.data;
      //       dispatch(checkLoginError(message ? message : ''));
      // });

      const reqConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            withCredentials: true,
            credentials: 'include'
        },
    }

      axios.get("https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/checkLogin", reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
              const { userData } = response.data;
              dispatch(receiveCheckLogin(userData));
            } else {
                dispatch(checkLoginError('There is an error, please try again'));
            }
        }).catch(err => {
            
            const { message } = err.response.data;
            dispatch(checkLoginError(message ? message : ''));
        });
    }

    fetchUser();
  }, [dispatch]);

  //EFFECT
  useEffect(() => {
    gsap.to(app.current, {duration: 0, visibility: 'visible'});
  }, []);

  return (
      <>
        <ScrollToTop />
        <div className="App" ref={app}>
        <AnimatePresence exitBeforeEnter>
          <Suspense fallback={<InitialTransition />}> 
            <Switch location={location} key={location.pathname}>
              {/* PRIVATE ADMIN ROUTES */}
              <PrivateRoute role="admin" component={AdminDashboard} exact path="/admin" />
              <PrivateRoute role="admin" component={AdminDashboardAccountInfo} exact path="/admin-details" />
              <PrivateRoute role="admin" component={AdminDashboardPassword} exact path="/admin-password" />
              {Object.keys(adminState.selectedUser).length !== 0 
                ? <PrivateRoute role="admin" component={AdminDashboardStudent} exact path="/admin/:id" /> 
                : null}
              <PrivateRoute role="admin" component={AdminDashboardCreateAcc} exact path="/admin-create" />
                
              {/* PRIVATE USER ROUTES */}
              <PrivateRoute  role="student" component={StudentDashboard} exact path="/:name/dashboard" />
              <PrivateRoute  role="student" component={StudentDashboardPwdUpdate} exact path="/:name/update-password" />
              <PrivateRoute  role="student" component={StudentDashboardAccountInfo} exact path="/:name/update-details" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollment} exact path="/:name/enrollment" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollmentConfirm} exact path="/:name/enrollment/success" />
              <PrivateRoute  role="student" component={StudentDashboardInformation} exact path="/:name/information" />
              <PrivateRoute  role="student" component={StudentDashboardKin} exact path="/:name/kins" />
              <PrivateRoute  role="student" component={StudentDashboardKinUpdate} exact path="/:name/kins/:id" />

              {/* USER AUTH ROUTES */}
              <PublicRoute component={Login} exact path="/login" />
              <PublicRoute component={ForgotPassword} exact path="/forgot-password" />
              <PublicRoute component={ResetPassword} exact path="/reset-password/:id" />
              <PublicRoute component={Register} exact path="/register" />
  
              {/* USER  ROUTES */}
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route path="/news/:post">
                <Post />
              </Route>
              <Route exact path="/health-security">
                <HealthSecurity />
              </Route>
              <Route path="/health-security/police">
                <Police />
              </Route>
              <Route path="/health-security/dispensary">
                <Dispensary />
              </Route>
              <Route path="/health-security/counseling-center">
                <CounselingCenter />
              </Route>
              <Route path="/organisations">
                <Organisations />
              </Route>
              <Route path="/dss">
                <StudentServices />
              </Route>
              <Route path="/cafeteria">
                <Cafetaria />
              </Route>
              <Route path="/sports-base">
                <SportsBase />
              </Route>
              <Route path="/tuiasi">
                <Tuiasi />
              </Route>
              <Route path="/accommodation">
                <Accommodation />
              </Route>
              <Route exact path="/residence-halls">
                <ResidenceHalls />
              </Route>
              <Route exact path="/residence-halls/:hallName">
                <ResidenceHall />
              </Route>
              <Route path="/questions">
                <FAQ />
              </Route>

              {/* 404 ROUT */}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </AnimatePresence>
        </div>
      </>
  );
}

export default App;
