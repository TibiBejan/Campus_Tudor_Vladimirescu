import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { AnimatePresence } from 'framer-motion';
import InitialTransition from './utils/InitialTransition/InitialTransition';
import axios from 'axios';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestCheckLogin, receiveCheckLogin, checkLoginError, userSelector } from './redux/userSlice';
import { adminSelector } from './redux/adminSlice';

// UTILS
import ScrollToTop from './utils/ScrollToTop';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import { campusRoutes, publicRoutes, studentRoutes, adminRoutes } from './utils/Routes';

const Page404 = lazy(()=> import('./pages/Page404'));

function App() {

  // HOOKS
  const dispatch = useDispatch();
  const userState = useSelector(userSelector);
  const location = useLocation();

  // REF"S
  const app = useRef(null);
  // FETCH AUTH USER ON RENDER
  useEffect(() => {
    const fetchUser = () => {
      // INIT REQ
      dispatch(requestCheckLogin);

      const reqConfig = {
        headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
            credentials: 'include'
        },
        mode: 'cors'
      }
  
      axios.get("/api/v1/users/checkLogin", reqConfig).then((response) => {
          if(response.status === 200 || response.status === 201) {
            const { userData } = response.data;
            dispatch(receiveCheckLogin(userData));
          } else {
            dispatch(checkLoginError('There is an error, please try again'));
          }
      }).catch(err => {
        console.log(err)
        let message;
        err.response ? message = err.response.data.message : message = 'There is an error, please log in or register';
        dispatch(checkLoginError(message));
      })
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
              { adminRoutes.map(route => (
                  <PrivateRoute key={ route.path } role={ route.role } component={ route.component } exact={ route.exact } path={ route.path } />
              )) }

              {/* PRIVATE STUDENT ROUTES */}
              { studentRoutes.map(route => (
                  <PrivateRoute key={ route.path } role={ route.role } component={ route.component } exact={ route.exact } path={ route.path } />
              )) }

              {/* PUBLIC AUTH ROUTES */}
              { publicRoutes.map(route => (
                  <PublicRoute key={ route.path } component={ route.component } exact={ route.exact } path={ route.path } />
              )) }

              {/* USER  ROUTES */}
              { campusRoutes.map(route=>(
                 <Route key={ route.path }  exact={ route.exact } path={ route.path } component={ route.component } />
              )) }

              {/* 404 ROUT */}
              <Route component={Page404} />

              {/* <PrivateRoute role="admin" component={AdminDashboard} exact path="/admin" />
              <PrivateRoute role="admin" component={AdminDashboardAccountInfo} exact path="/admin-details" />
              <PrivateRoute role="admin" component={AdminDashboardPassword} exact path="/admin-password" /> */}
              {/* {Object.keys(adminState.selectedUser).length !== 0 
                ? <PrivateRoute role="admin" component={AdminDashboardStudent} exact path="/admin/:id" /> 
                : null}
              <PrivateRoute role="admin" component={AdminDashboardCreateAcc} exact path="/admin-create" /> */}
                
              {/* PRIVATE USER ROUTES */}
              {/* <PrivateRoute  role="student" component={StudentDashboard} exact path="/:name/dashboard" />
              <PrivateRoute  role="student" component={StudentDashboardPwdUpdate} exact path="/:name/update-password" />
              <PrivateRoute  role="student" component={StudentDashboardAccountInfo} exact path="/:name/update-details" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollment} exact path="/:name/enrollment" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollmentConfirm} exact path="/:name/enrollment/success" />
              <PrivateRoute  role="student" component={StudentDashboardInformation} exact path="/:name/information" />
              <PrivateRoute  role="student" component={StudentDashboardKin} exact path="/:name/kins" />
              <PrivateRoute  role="student" component={StudentDashboardKinUpdate} exact path="/:name/kins/:id" /> */}

              {/* USER AUTH ROUTES */}
              {/* <PublicRoute component={Login} exact path="/login" />
              <PublicRoute component={ForgotPassword} exact path="/forgot-password" />
              <PublicRoute component={ResetPassword} exact path="/reset-password/:id" />
              <PublicRoute component={Register} exact path="/register" /> */}
  
              {/* <Route exact path="/">
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
              </Route> */}

            </Switch>
          </Suspense>
        </AnimatePresence>
        </div>
      </>
  );
}

export default App;
