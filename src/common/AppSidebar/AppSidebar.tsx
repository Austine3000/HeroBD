import React from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import { LOGO } from "../../components/Headings/Headings";

import "./AppSidebar.scss";

export default function DashboardSidebar(props: any): JSX.Element {
  return (
    <React.Fragment>
      <section id="side-menu">
        <LOGO className="item-align-center">HeroBD</LOGO>
        <AppNavigation />
      </section>
    </React.Fragment>
  );
}
