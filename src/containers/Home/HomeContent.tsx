import React from "react";
import { connect } from "react-redux";

import { LOGO, H3 } from "../../components/Headings/Headings";
import { NavLink } from "react-router-dom";

function HomeContent(props: any) {
  const { businesses } = props;
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg nav-home">
        <LOGO>HeroBD</LOGO>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-list" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-6">Find a business today!</h1>
          <p className="lead">
            Let's help you find that business today with easy.
          </p>
        </div>
      </div>
      <div className="featured-listing">
        <H3>Featured Listings</H3>
        <div className="row">
          {businesses.map((business: any, index: number) => (
            <div className="card col-md-3 card-custom-style" key={index}>
              <img
                src={business.images}
                className="card-img-top img-fluid"
                alt="img-card"
              />
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <p className="card-text text-shorten">{business.description}</p>
                <div className="business-category-area">
                  {business.category.map((item: any, index: number) => (
                    <span key={index} className="category-pill">
                      {item.label}
                    </span>
                  ))}
                </div>

                <a href="#" className="btn btn-primary ">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    businesses: state.business.data
  };
};

export default connect(
  mapStateToProps,
  null
)(HomeContent);
