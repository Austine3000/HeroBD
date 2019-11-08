import React, { useEffect } from "react";
import { connect } from "react-redux";

const CategoryListTable = React.lazy(() => import("./CategoryListTable"));

function CategoryListPage(props: any) {
  const { getCategoryHandler, categories } = props;

  useEffect(() => {
    //getCategoryHandler();
  }, []);

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
    getBusinessHandler: () => dispatch()
  };
};

const mapStateToProps = (state: any) => {
  return {
    categories: []
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListPage);
