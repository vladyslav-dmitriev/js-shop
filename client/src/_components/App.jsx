import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { pathsConstants } from '../_constants';

import Header from './Header';
import Footer from './Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Switch>
          <Route exact path={pathsConstants.HOME_PAGE} component={Home} />
          <Route path={`${pathsConstants.PRODUCT_PAGE}/:id`} component={Product} />
          <Route path={pathsConstants.CART_PAGE} component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
