import React, { useState } from "react";
import { connect } from "react-redux";

import { requestCreateBusiness } from "../redux/actions";

const BusinessCreateForm = React.lazy(() => import("./BusinessCreateForm"));

type FormElem = React.FormEvent<HTMLFormElement>;

function BusinessCreatePage(props: any): JSX.Element {
  const { createbusinessHandler, categories } = props;

  let newCategories = [];
  for (let i = 0; i < categories.length; i++) {
    newCategories.push({
      value: categories[i].name,
      label: categories[i].name
    });
  }
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
    createbusinessHandler(business);
    setBusiness(businessDetail);
  };

  const handleClear = (e: FormElem): void => {
    e.preventDefault();
    setBusiness(businessDetail);
  };

  const handleSelectChange = (category: any) => {
    setBusiness({ ...business, category });
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BusinessCreateForm
          business={business}
          categories={newCategories}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          handleSelectChange={handleSelectChange}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createbusinessHandler: (payload: any) =>
      dispatch(requestCreateBusiness(payload))
  };
};

const mapStateToProps = (state: any) => {
  return {
    categories: state.category.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessCreatePage);
