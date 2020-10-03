import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import RouteWithLayout from './RouteWithLayout';
import { Main as MainLayout } from 'layouts';
import { Home as HomeView, NotFound as NotFoundView } from 'views';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout
          component={HomeView}
          exact
          layout={MainLayout}
          path={ROUTES.HOME}
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MainLayout}
          path={ROUTES.NOT_FOUND}
        />
        <Redirect from="*" to={ROUTES.NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
