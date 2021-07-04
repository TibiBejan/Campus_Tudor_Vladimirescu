import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
//STYLES
import './scss/_reset.scss';
import './scss/_globalStyles.scss';
import './scss/_typography.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
