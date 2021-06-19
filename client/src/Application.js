import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import { TodayCaloriesPage, NotFoundPage } from 'src/pages/pageListAsync';
import 'src/styles/Auth.scss';

const Application = () => {
  console.log('Application');
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
