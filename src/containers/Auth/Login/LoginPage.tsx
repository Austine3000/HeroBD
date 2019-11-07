import React, { useState } from "react";
const LoginForm = React.lazy(() => import("./LoginForm"));

type FormElem = React.FormEvent<HTMLFormElement>;

export default function LoginPage() {
  // const { searchAuditHandler } = props;
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
    // searchAuditHandler(business);
  };
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
