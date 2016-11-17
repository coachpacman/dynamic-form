import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


// Layouts
import App from 'layouts/app';

// Styles
import 'assets/styles/style.css'

// Content
import Home from 'ui/home'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route component={Home} path="/"/>
    </Route>
  </Router>
), document.getElementById('app'));