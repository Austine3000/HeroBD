import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppSidebar from "../common/AppSidebar/AppSidebar";
import BusinessListPage from "../containers/Business/BusinessList/BusinessListPage";
import BusinessCreatePage from "../containers/Business/BusinessCreate/BusinessCreatePage";

export default function AppRoutes() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <AppSidebar />
        <section id="content-area">
          <Switch>
            <Route exact path="/app/Business" component={BusinessListPage} />
            <Route path="/app/Business/create" component={BusinessCreatePage} />
            <Redirect to="/app/Business" />
          </Switch>
        </section>
      </Suspense>
    </React.Fragment>
  );
}
