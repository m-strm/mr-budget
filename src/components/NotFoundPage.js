import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    This page does not exist. 404! <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
