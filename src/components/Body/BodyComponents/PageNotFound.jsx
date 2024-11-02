import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">Oops! Page Not Found.</h1>
          <Link className="btn btn-primary btn-outline" onClick={handleGoBack}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
