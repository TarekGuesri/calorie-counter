import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ProfilePage,
  TodayCaloriesPage,
  MyFoodsPage,
  ActivitiesPage,
  TipsPage,
  NotFoundPage,
} from 'src/pages/pageListAsync';
import PrivateRoute from 'src/components/routing/PrivateRoute';
import 'src/styles/Auth.scss';

const Application = () => {
  return (
    <div className="main-layout text-center p-5 m-5 mx-auto bg-light">
      <Switch>
        <Route path="/activities" component={ActivitiesPage} />
        <Route path="/tips" component={TipsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/today" component={TodayCaloriesPage} />
        <PrivateRoute path="/my-foods" component={MyFoodsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Application;
