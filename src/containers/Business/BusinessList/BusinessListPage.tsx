import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestBusinessLogData } from "../redux/actions";
const BusinessListTable = React.lazy(() => import("./BusinessListTable"));

type FormElem = React.FormEvent<HTMLFormElement>;

function BusinessPage(props: any): JSX.Element {
  const { getBusinessHandler, businesses } = props;

  useEffect(() => {
    getBusinessHandler();
  }, [getBusinessHandler]);

  const goToCreateBuiness = () => {
    props.history.push("/app/business/create");
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BusinessListTable
          businesses={businesses}
          goToCreateBuiness={goToCreateBuiness}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusinessHandler: () => dispatch(requestBusinessLogData())
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
