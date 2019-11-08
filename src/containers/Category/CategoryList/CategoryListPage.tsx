import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestCategoryData } from "../redux/actions";

const CategoryListTable = React.lazy(() => import("./CategoryListTable"));

function CategoryListPage(props: any) {
  const { getCategoryHandler, categories } = props;

  useEffect(() => {
    getCategoryHandler();
  }, [getCategoryHandler]);

  const goToCreateCategory = () => {
    props.history.push("/app/category/create");
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CategoryListTable
          categories={categories}
          goToCreateCategory={goToCreateCategory}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCategoryHandler: () => dispatch(requestCategoryData())
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
)(CategoryListPage);
