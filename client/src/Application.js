import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodayCaloriesPage, NotFoundPage } from 'src/pages/pageListAsync';
import 'src/styles/Auth.scss';

const Application = () => {
  return (
    <div className="main-layout text-center p-5 m-5 mx-auto bg-light">
      <Switch>
        <Route path="/today" component={TodayCaloriesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Application;
