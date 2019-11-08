import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestBusinessLogData, deleteBusinessData } from "../redux/actions";
const BusinessListTable = React.lazy(() => import("./BusinessListTable"));

type FormElem = React.FormEvent<HTMLFormElement>;

function BusinessPage(props: any): JSX.Element {
  const { getBusinessHandler, businesses, deleteBusinessDataHandler } = props;

  useEffect(() => {
    getBusinessHandler();
  }, [getBusinessHandler]);

  const goToCreateBuiness = () => {
    props.history.push("/app/business/create");
  };

  const onDeleteBusiness = (id: any) => {
    deleteBusinessDataHandler(id);
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BusinessListTable
          businesses={businesses}
          goToCreateBuiness={goToCreateBuiness}
          onDeleteBusiness={onDeleteBusiness}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusinessHandler: () => dispatch(requestBusinessLogData()),
    deleteBusinessDataHandler: (id: any) => dispatch(deleteBusinessData(id))
  };
};

const mapStateToProps = (state: any) => {
  return {
    businesses: state.business.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessPage);
