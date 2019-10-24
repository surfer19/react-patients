/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PatientsPage from 'containers/PatientsPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Graph from '../../components/Graph';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="container h-100">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/patients" component={PatientsPage} />
        <Route path="/patients/:id" component={Graph} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
