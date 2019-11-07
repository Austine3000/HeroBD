import React from "react";

import "./Home.scss";

const HomeContent = React.lazy(() => import("./HomeContent"));

export default function HomePage() {
  return (
    <div>
      <HomeContent />
    </div>
  );
}
