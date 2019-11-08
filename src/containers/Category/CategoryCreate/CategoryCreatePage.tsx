import React, { useState } from "react";
const CategoryCreateForm = React.lazy(() => import("./CategoryCreateForm"));

type FormElem = React.FormEvent<HTMLFormElement>;
export default function CategoryCreatePage() {
  // const { searchAuditHandler } = props;
  const categoryDetail = {
    name: ""
  };
  const [category, setUser] = useState(categoryDetail);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setUser({ ...category, [name]: value });
  };

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    // searchAuditHandler(business);
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
