import React from "react";
import { H3, LOGO } from "../../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../../components/ContainerWrapper/ContainerWrapper";
import { Label, Button } from "../../../components/Form/Form";

import "../Auth.scss";

export default function LoginForm(props: any) {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <LOGO>HeroBD</LOGO>
        <div className="auth-container">
          <ContainerWrapperCard className="col-md-4 auth-form-wrapper">
            <H3>Login into your account</H3>
            <form className="">
              <div className="form-group">
                <Label htmlFor="inputEmail" className="col-form-label">
                  Email
                </Label>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={props.user.email}
                    onChange={props.handleChange}
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="inputdescription" className="col-form-label">
                  Password
                </Label>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={props.user.password}
                    onChange={props.handleChange}
                    className="form-control"
                    id="inputdescription"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="">
                <Button className="" onClick={props.handleSubmit}>
                  Submit
                </Button>
              </div>
            </form>
          </ContainerWrapperCard>
        </div>
      </ContainerWrapper>
    </React.Fragment>
  );
}
