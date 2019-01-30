import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/layout/Header';
import HomePage from '../components/pages/HomePage';
import Contact from '../components/pages/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
