import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';

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

// COMPONENTS
import Gradient from './components/LayoutComponents/PageGradient/Gradient';
import Header from './components/LayoutComponents/Header/Header';
import SmoothScroll from './components/LayoutComponents/SmoothScrollContainer/SmoothScroll';


function App() {

  // REF"S
  const app = useRef(null);

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
          <SmoothScroll>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/reset-password/:id">
                <ResetPassword />
              </Route>
              <Route exact path="/register">
              <Register />
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
            </Switch>
          </SmoothScroll>
        </div>
      </Router>
  );
}

export default App;
