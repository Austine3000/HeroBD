import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { requestUserLogin } from "../redux/actions";

const LoginForm = React.lazy(() => import("./LoginForm"));

type FormElem = React.FormEvent<HTMLFormElement>;

function LoginPage(props: any) {
  const { loginUserHandler, isAuthenticated, history } = props;
  const userDetail = {
    email: "",
    password: ""
  };
  const [user, setUser] = useState(userDetail);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    loginUserHandler(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/app/business");
    }
  }, [isAuthenticated]);
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LoginForm
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUserHandler: (payload: any) => dispatch(requestUserLogin(payload))
  };
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
