import React from "react";
import { H2, H3 } from "../../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../../components/ContainerWrapper/ContainerWrapper";

import { Button } from "../../../components/Form/Form";

import { TH, TD, TABLE, THEAD } from "../../../components/Table/Table";

import "../Business.scss";

export default function BusinessListTable(props: any): JSX.Element {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <H2>Business</H2>
        <div className="row margin-padding-remove">
          <div className="audit-button">
            <Button
              className="audit-button-filter"
              onClick={() => props.goToCreateBuiness()}
            >
              Add Business
            </Button>
          </div>
          <div className="col-md-12 audit-table">
            <ContainerWrapperCard className=" table-responsive ">
              <div className="table-padding">
                <TABLE className="table table-borderless">
                  <THEAD>
                    <tr>
                      <TH scope="col">S/N</TH>
                      <TH scope="col">Name</TH>
                      <TH scope="col">Webiste URL</TH>
                      <TH scope="col">Contact email</TH>
                      <TH scope="col">address</TH>
                      <TH scope="col"></TH>
                    </tr>
                  </THEAD>
                  <tbody>
                    {props.businesses.map((business: any, index: number) => (
                      <tr key={business.id}>
                        <TD>{index + 1}</TD>
                        <TD>{business.name}</TD>
                        <TD>{business.websiteUrl}</TD>
                        <TD>{business.contactEmail}</TD>
                        <TD>{business.address}</TD>

                        <TD
                          className="audit-details"
                          onClick={() => props.onDeleteBusiness(business.id)}
                        >
                          Delete
                        </TD>
                      </tr>
                    ))}
                  </tbody>
                </TABLE>
              </div>
            </ContainerWrapperCard>
          </div>
        </div>
      </ContainerWrapper>
    </React.Fragment>
  );
}
