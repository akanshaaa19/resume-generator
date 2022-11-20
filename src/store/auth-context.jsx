import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  logInHandeler: (token) => {},
  logOutHandeler: () => {},
  isPersonalFilled: false,
  isEducationFilled: false,
  isWorkFilled: false,
  isSkillFilled: false,
  setDetails: (field) => {},
});

export function AuthContextProvider(props) {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token; //if token is not empty this will return true, if token is empty this will return false

  const [isPersonalFilled, setIsPersonalFilled] = useState(
    localStorage.getItem("per")
  );
  const [isEducationFilled, setIsEducationFilled] = useState(
    localStorage.getItem("edu")
  );
  const [isWorkFilled, setIsWorkFilled] = useState(
    localStorage.getItem("skill")
  );
  const [isSkillFilled, setIsSkillFilled] = useState(
    localStorage.getItem("work")
  );

  const history = useHistory();

  function logInHandeler(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logOutHandeler() {
    localStorage.clear();
    setToken(null);
    history.replace("/auth");
  }

  function setDetails(field, e) {
    e.preventDefault();
    switch (field) {
      case "per":
        localStorage.setItem("per", true);
        setIsPersonalFilled(true);
        break;
      case "edu":
        localStorage.setItem("edu", true);
        setIsEducationFilled(true);
        break;
      case "skill":
        localStorage.setItem("skill", true);
        setIsSkillFilled(true);
        break;
      case "work":
        localStorage.setItem("work", true);
        setIsWorkFilled(true);
        break;

      default:
        break;
    }
  }

  const ctxValue = {
    isLoggedIn: userIsLoggedIn,
    token: token,
    logInHandeler: logInHandeler,
    logOutHandeler: logOutHandeler,
    isPersonalFilled: isPersonalFilled,
    isEducationFilled: isEducationFilled,
    isWorkFilled: isWorkFilled,
    isSkillFilled: isSkillFilled,
    setDetails: setDetails,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
