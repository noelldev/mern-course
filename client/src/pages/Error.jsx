import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError;
  console.log("this is error", error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
