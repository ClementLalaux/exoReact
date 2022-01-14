import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav>
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
              <Link key={index} to={pages.to}>
                {" "}
                {pages.nom}{" "}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
