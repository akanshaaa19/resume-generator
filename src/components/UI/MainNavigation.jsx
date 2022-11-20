import React from "react";
import { NavLink } from "react-router-dom";

import "./MAinNavigation.css";

function MainNavigation() {
  return (
    <React.Fragment>
      {/* <div className="inline-flex flex-col fixed"> */}
      <aside className="fixed sidebar left-0 pt-5 flex justify-center border-r-2 border-gray-800 px-4">
        <ul>
          <NavLink
            to="/edit/personal"
            className="hover:text-indigo-500"
            activeClassName="active"
          >
            Personal Details
          </NavLink>
          <NavLink to="/edit/education" className="hover:text-indigo-500">
            Education
          </NavLink>
          <NavLink to="/edit/work" className="hover:text-indigo-500">
            Work Experience
          </NavLink>
          <NavLink to="/edit/skills" className="hover:text-indigo-500">
            Skills
          </NavLink>
        </ul>
      </aside>
      {/* </div> */}
    </React.Fragment>
  );
}

export default MainNavigation;
