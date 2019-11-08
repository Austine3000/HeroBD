import React from "react";
import { H2, H3 } from "../../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../../components/ContainerWrapper/ContainerWrapper";

import { Button } from "../../../components/Form/Form";

import { TH, TD, TABLE, THEAD } from "../../../components/Table/Table";

import "../../Business/Business.scss";

export default function CategoryListTable(props: any) {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <H2>Category</H2>
        <div className="row margin-padding-remove">
          <div className="audit-button">
            <Button
              className="audit-button-filter"
              onClick={() => props.goToCreateCategory()}
            >
              Add Category
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
                    </tr>
                  </THEAD>
                  <tbody>
                    {props.categories.map((category: any, index: number) => (
                      <tr key={category.id}>
                        <TD>{index + 1}</TD>
                        <TD>{category.name}</TD>
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
