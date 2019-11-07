import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const AppNavigation: React.FC = (props: any) => {
  return (
    <nav>
      <Router>
        <NavLink to="/app/Business">
          <i className="fas fa-briefcase"></i>
          <span>Business</span>
        </NavLink>
        <NavLink to="/app/category">
          <i className="fas fa-layer-group"></i>
          <span>Categories</span>
        </NavLink>
      </Router>
    </nav>
  );
};

export default AppNavigation;
