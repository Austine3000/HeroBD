import React from "react";

import Select from "react-select";
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputname" className="col-form-label">
                    Name
                  </Label>
                  <div className="">
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputdescription" className="col-form-label">
                    Description
                  </Label>
                  <div className="">
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputwebsiteUrl" className=" col-form-label">
                    Website Url
                  </Label>
                  <div className="">
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputcontactEmail" className="col-form-label">
                    Contact Email
                  </Label>
                  <div className="">
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputphoneNumber" className="col-form-label">
                    Phone Number
                  </Label>
                  <div className="">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={props.business.phoneNumber}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputphoneNumber"
                    />
                  </div>
                </div>
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputaddress" className="col-form-label">
                    Address
                  </Label>
                  <div className="">
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
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputimages" className="col-form-label">
                    Images (Enter comma separated strings of image links)
                  </Label>
                  <div className="">
                    <input
                      type="text"
                      name="images"
                      value={props.business.images}
                      onChange={props.handleChange}
                      className="form-control"
                      id="inputimages"
                    />
                  </div>
                </div>
                <div className="form-group audit-filter-group-input">
                  <Label htmlFor="inputcategory" className="col-form-label">
                    Category
                  </Label>
                  <div className="">
                    <Select
                      value={props.business.category}
                      onChange={props.handleSelectChange}
                      isMulti
                      options={props.categories}
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
