import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/pages/AuthForm";
import PdfDownload from "./components/pages/pdf";

import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/UI/Header";
import MainNavigation from "./components/UI/MainNavigation";
import Home from "./components/pages/Home";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <div className="phone flex flex-col items-center mt-32 pt-48 text-center px-10">
        <h1 className="font-bold">Not Compatible with small screens.</h1>
        <p className="text-gray-400">Switch to a larger screens</p>
      </div>
      <div className="App flex flex-col items-center">
        <Header />
        {ctx.isLoggedIn && <MainNavigation />}
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" exact>
          {ctx.isLoggedIn && <Redirect to="/edit/personal" />}
          {!ctx.isLoggedIn && <AuthForm />}
        </Route>

        {ctx.isLoggedIn && <Home />}
        <Route path="/resume">
          {ctx.isLoggedIn && <PdfDownload />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/personal">
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/education">
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/skills">
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/edit/work">
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
      </div>
    </React.Fragment>
  );
}

export default App;
