import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as ROUTES from 'navigation/CONSTANTS';
import RouteWithLayout from './RouteWithLayout';
import { Main as MainLayout } from 'layouts';
import { Home as HomeView, NotFound as NotFoundView } from 'views';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout exact layout={MainLayout} component={HomeView} path={ROUTES.HOME} />
        <RouteWithLayout
          exact
          layout={MainLayout}
          component={NotFoundView}
          path={ROUTES.NOT_FOUND}
        />
        <Redirect from="*" to={ROUTES.NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
