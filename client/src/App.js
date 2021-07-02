import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import axios from 'axios';

// REDUX
import { useDispatch } from 'react-redux';
import { requestCheckLogin, receiveCheckLogin, checkLoginError } from './redux/userSlice';

// UTILS
import ScrollToTop from './utils/ScrollToTop';

// PAGE'S
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Organisations from './pages/Organisations';
import StudentServices from './pages/StudentServices';
import Cafetaria from './pages/Cafetaria';
import SportsBase from './pages/SportsBase';
import Tuiasi from './pages/Tuiasi';
import HealthSecurity from './pages/HealthSecurity';
import Police from './pages/Police';
import Dispensary from './pages/Dispensary';
import CounselingCenter from './pages/CounselingCenter';
import Accommodation from './pages/Accommodation';
import ResidenceHalls from './pages/ResidenceHalls';
import FAQ from './pages/FAQ';
import ResidenceHall from './pages/ResidenceHall';
import Post from './pages/Post';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import StudentDashboard from './pages/StudentDashboard';
import StudentDashboardPwdUpdate from './pages/StudentDashboardPwdUpdate';
import StudentDashboardAccountInfo from './pages/StudentDashboardAccountInfo';
import StudentDashboardEnrollment from './pages/StudentDashboardEnrollment';
import StudentDashboardEnrollmentConfirm from './pages/StudentDashboardEnrollmentConfirm';
import StudentDashboardInformation from './pages/StudentDashboardInfromation';
import StudentDashboardKin from './pages/StudentDashboardKin';
import StudentDashboardKinUpdate from './pages/StudentDashboardKinUpdate';

import AdminDashboard from './pages/AdminDashboard';
import AdminDashboardAccountInfo from './pages/AdminDashboardAccountInfo';
import AdminDashboardPassword from './pages/AdminDashboardPassword';

import Page404 from './pages/Page404';


// COMPONENTS
import Gradient from './components/LayoutComponents/PageGradient/Gradient';
import Header from './components/LayoutComponents/Header/Header';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {

  // HOOKS
  const dispatch = useDispatch();

  // REF"S
  const app = useRef(null);

  useEffect(() => {
    const fetchUser = () => {
      // INIT REQ
      dispatch(requestCheckLogin);

      axios.get("/api/v1/users/checkLogin").then((response) => {
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
      <Router>
        <ScrollToTop />
        <div className="App" ref={app}>
          <Gradient />
          <Header />
            <Switch>

              <PrivateRoute role="admin" component={AdminDashboard} exact path="/admin" />
              <PrivateRoute role="admin" component={AdminDashboardAccountInfo} exact path="/admin-details" />
              <PrivateRoute role="admin" component={AdminDashboardPassword} exact path="/admin-password" />

            
              <PublicRoute component={Login} exact path="/login" />
              <PublicRoute component={ForgotPassword} exact path="/forgot-password" />
              <PublicRoute component={ResetPassword} exact path="/reset-password/:id" />
              <PublicRoute component={Register} exact path="/register" />

              <PrivateRoute  role="student" component={StudentDashboard} exact path="/:name/dashboard" />
              <PrivateRoute  role="student" component={StudentDashboardPwdUpdate} exact path="/:name/update-password" />
              <PrivateRoute  role="student" component={StudentDashboardAccountInfo} exact path="/:name/update-details" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollment} exact path="/:name/enrollment" />
              <PrivateRoute  role="student" component={StudentDashboardEnrollmentConfirm} exact path="/:name/enrollment/success" />
              <PrivateRoute  role="student" component={StudentDashboardInformation} exact path="/:name/information" />
              <PrivateRoute  role="student" component={StudentDashboardKin} exact path="/:name/kins" />
              <PrivateRoute  role="student" component={StudentDashboardKinUpdate} exact path="/:name/kins/:id" />

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

              <Route component={Page404} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
