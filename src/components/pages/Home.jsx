import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import PersonalDetails from "../Questions/PersonalDetails";
import EducationDetails from "../Questions/EducationDetails";
import WorkDetails from "../Questions/WorkDetails";
import SkillDetails from "../Questions/SkillDetails";
import PdfDownload from "./pdf";
import Templates from "../UI/templates/Templates";

function Home() {
  const ctx = useContext(AuthContext);
  return (
    <div className="home flex flex-row right-0 fixed justify-around bottom-0">
      <div className="question-div">
        <Route path="/edit/templates">
          {ctx.isLoggedIn && <Templates />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/personal">
          {ctx.isLoggedIn && <PersonalDetails />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/edit/education">
          {ctx.isLoggedIn && <EducationDetails />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/edit/work">
          {ctx.isLoggedIn && <WorkDetails />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/skills">
          {ctx.isLoggedIn && <SkillDetails />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
      </div>
      <div className="resume-div py-4">
        <PdfDownload />
      </div>
    </div>
  );
}

export default Home;
