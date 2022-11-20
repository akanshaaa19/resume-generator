import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";


import AuthContext from "../store/auth-context";

import PersonalDetails from "../components/Questions/PersonalDetails";
import EducationDetails from "../components/Questions/EducationDetails";
import WorkDetails from "../components/Questions/WorkDetails";
import SkillDetails from "../components/Questions/SkillDetails";
import PdfDownload from "./pages/pdf";


function Home() {

    const ctx = useContext(AuthContext)
  return (
    <div className="home flex flex-row right-0 fixed justify-around bottom-0">
      <div className="question-div">
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
