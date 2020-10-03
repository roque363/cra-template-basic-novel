import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import RouteWithLayout from './RouteWithLayout';
import { Main as MainLayout } from 'layouts';
import { Home as HomeView, NotFound as NotFoundView } from 'views';

const Routes = () => {
  return (
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
  );
};

export default Routes;
