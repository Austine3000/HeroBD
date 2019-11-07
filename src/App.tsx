import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ErrorBoundary from "./common/ErrorBoundary";
import "./App.scss";

import LoginPage from "./containers/Auth/Login/LoginPage";
import HomePage from "./containers/Home/HomePage";
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="dashboard-body">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/app" component={AppRoutes} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;
