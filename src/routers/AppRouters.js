import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/layout/Header';
import HomePage from '../components/pages/HomePage';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';
import About from '../components/pages/About';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
