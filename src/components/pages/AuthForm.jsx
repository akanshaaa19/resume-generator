import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

import AuthContext from "../../store/auth-context";
import LoadingSpinner from '../UI/Loading/Loading'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const ctx = useContext(AuthContext);

  const history = useHistory();

  function switchAuthModeHandler(e) {
    e.preventDefault();
    setIsLogin(!isLogin);
  }

  async function addUser(name, email) {
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      personalDetails: {},
      educationDetails: [],
      workDetails: [],
      skills: [],
    });
  }

  async function getUser(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  }

  function submitHandeler(e) {
    setLoading(true)
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVtiboU4R5dn8SlxhkwwVzrZmsJ3W7l0Y";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVtiboU4R5dn8SlxhkwwVzrZmsJ3W7l0Y";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then((data) => {
            setError(data.error.message);
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (isLogin) {
          getUser(data.email).then((result) => {
            console.log(result);
            localStorage.setItem("email", result.email);
          });
        } else {
          addUser(nameRef.current.value, emailRef.current.value);
          localStorage.setItem("email", emailRef.current.value);
        }
        setLoading(false)
        ctx.logInHandeler(data.idToken);
        history.replace("/edit/personal");
      });
  }

  return (
    <div className=" auth form-container flex flex-col items-center h-screen justify-center">
      <form
        className="flex flex-col items-center 100 w-1/4"
        onSubmit={submitHandeler}
      >
        {!isLogin && (
          <input
            autoComplete="false"
            className="bg-transparent p-3 text-lg my-2 border border-indigo-500 rounded-lg"
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
        )}
        <input
          autoComplete="false"
          className="bg-transparent p-3 text-lg my-2 border border-indigo-500 rounded-lg"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          autoComplete="false"
          className="bg-transparent p-3 text-lg my-2 border border-indigo-500 rounded-lg"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          
        />
        <button
          className="bg-indigo-500 p-3 text-lg rounded-lg my-4"
          type="submit"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        {loading && <LoadingSpinner />}
        <p>
          <button className="change-btn" onClick={switchAuthModeHandler}>
            {!isLogin
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
