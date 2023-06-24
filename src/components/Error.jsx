import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <h1>An error occurred!</h1>
    // <h1>Error: {error.message}</h1>
    // <pre>{error.status} - {error.statusText}</pre>
  );
};

export default Error;
