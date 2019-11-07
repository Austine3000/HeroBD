import React from "react";
import { LOGO, H3 } from "../../components/Headings/Headings";

export default function HomeContent() {
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
              <a className="nav-link" href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
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
          <div className="card col-md-3 card-custom-style">
            <img src="..." className="card-img-top" alt="img-card" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3 card-custom-style">
            <img src="..." className="card-img-top" alt="img-card" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3 card-custom-style">
            <img src="..." className="card-img-top" alt="img-card" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3 card-custom-style">
            <img src="..." className="card-img-top" alt="img-card" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3 card-custom-style">
            <img src="..." className="card-img-top" alt="img-card" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
