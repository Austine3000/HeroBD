import React from "react";
import { NavLink } from "react-router-dom";

const AppNavigation: React.FC = (props: any) => {
  return (
    <nav>
      <NavLink to="/app/business">
        <i className="fas fa-briefcase"></i>
        <span>Business</span>
      </NavLink>
      <NavLink to="/app/category">
        <i className="fas fa-layer-group"></i>
        <span>Categories</span>
      </NavLink>
    </nav>
  );
};

export default AppNavigation;
