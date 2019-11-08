import React from "react";
import { H3, H2 } from "../../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../../components/ContainerWrapper/ContainerWrapper";
import { Label, Button } from "../../../components/Form/Form";

import "../../Auth/Auth.scss";

export default function CategoryCreateForm(props: any) {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <H2>Category</H2>
        <div className="auth-container">
          <ContainerWrapperCard className="col-md-12 auth-form-wrapper">
            <H3>Create Category</H3>
            <form className="">
              <div className="form-group audit-filter-group-input">
                <Label htmlFor="inputname" className="col-form-label">
                  Name
                </Label>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={props.category.name}
                    onChange={props.handleChange}
                    className="form-control"
                    id="inputname"
                    placeholder="Enter name"
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
