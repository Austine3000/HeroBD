import React from "react";
import { H2, H3 } from "../../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../../components/ContainerWrapper/ContainerWrapper";
import { Label, Button } from "../../../components/Form/Form";

import "../Business.scss";

export default function BusinessCreateForm(props: any): JSX.Element {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <H2>Business</H2>
        <div className="row margin-padding-remove">
          <div className="col-md-12 audit-filter">
            <ContainerWrapperCard className="audit-filter-container">
              <H3>Create Business</H3>
              <form className="audit-filter-form">
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputname"
                    className="col-sm-3 col-form-label"
                  >
                    Name
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      value={props.business.name}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputname"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputdescription"
                    className="col-sm-3 col-form-label"
                  >
                    Description
                  </Label>
                  <div className="col-sm-9">
                    <textarea
                      name="description"
                      value={props.business.description}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputdescription"
                      placeholder="Enter description"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputwebsiteUrl"
                    className="col-sm-3 col-form-label"
                  >
                    Website Url
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="websiteUrl"
                      value={props.business.websiteUrl}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputwebsiteUrl"
                      placeholder="Enter websiteUrl"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputcontactEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Contact Email
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      name="contactEmail"
                      value={props.business.contactEmail}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputcontactEmail"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputDate"
                    className="col-sm-3 col-form-label"
                  >
                    Phone Number
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      name="startDate"
                      value={props.business.startDate}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputDate"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputaddress"
                    className="col-sm-3 col-form-label"
                  >
                    Address
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="address"
                      value={props.business.address}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputaddress"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputDate"
                    className="col-sm-3 col-form-label"
                  >
                    Images
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="startDate"
                      value={props.business.startDate}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputDate"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputDate"
                    className="col-sm-3 col-form-label"
                  >
                    Category
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="startDate"
                      value={props.business.startDate}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputDate"
                    />
                  </div>
                </div>
                <div className="audit-button">
                  <Button
                    className="audit-button-clear"
                    onClick={props.handleClear}
                  >
                    Clear
                  </Button>
                  <Button
                    className="audit-button-filter"
                    onClick={props.handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </ContainerWrapperCard>
          </div>
        </div>
      </ContainerWrapper>
    </React.Fragment>
  );
}
