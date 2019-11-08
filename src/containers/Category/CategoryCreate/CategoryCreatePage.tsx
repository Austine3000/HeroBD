import React, { useState } from "react";
import { connect } from "react-redux";

import { requestCreateCategory } from "../redux/actions";

const CategoryCreateForm = React.lazy(() => import("./CategoryCreateForm"));

type FormElem = React.FormEvent<HTMLFormElement>;
function CategoryCreatePage(props: any) {
  const { createCategoryHandler } = props;
  const categoryDetail = {
    name: ""
  };
  const [category, setCategory] = useState(categoryDetail);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    createCategoryHandler(category);
    setCategory(categoryDetail);
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CategoryCreateForm
          category={category}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createCategoryHandler: (payload: any) =>
      dispatch(requestCreateCategory(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryCreatePage);
