import React, { useState } from "react";
import { connect } from "react-redux";

import { requestCreateBusiness } from "../redux/actions";

const BusinessCreateForm = React.lazy(() => import("./BusinessCreateForm"));

type FormElem = React.FormEvent<HTMLFormElement>;

function BusinessCreatePage(props: any): JSX.Element {
  const { searchAuditHandler } = props;
  const businessDetail = {
    name: "",
    description: "",
    websiteUrl: "",
    phoneNumber: "",
    contactEmail: "",
    address: "",
    images: "",
    category: ""
  };
  const [business, setBusiness] = useState(businessDetail);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setBusiness({ ...business, [name]: value });
  };

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    searchAuditHandler(business);
  };

  const handleClear = (e: FormElem): void => {
    e.preventDefault();
    setBusiness(businessDetail);
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BusinessCreateForm
          business={business}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchAuditHandler: (payload: any) =>
      dispatch(requestCreateBusiness(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BusinessCreatePage);
