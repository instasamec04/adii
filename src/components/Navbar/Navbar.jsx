import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link style={{ fontSize: "30px" }} to="/">
        PRODUCT
      </Link>
    </div>
  );
};

export default Navbar;
