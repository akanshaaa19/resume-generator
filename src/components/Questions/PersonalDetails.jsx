import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

import Question from "../UI/Question";
import AuthContext from "../../store/auth-context";

function PersonalDetails() {

  const [isFilled, setIsFilled] = useState(false)

  const nameRef = useRef();
  const posRef = useRef();
  const urlRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const aboutRef = useRef();

  const history = useHistory();

  const ctx = useContext(AuthContext);

  async function sendData(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const docRef = doc(db, "users", email);

    // if (!ctx.isPersonalFilled && isFilled) {
      const details = {
        name: nameRef.current.value,
        designation: posRef.current.value,
        url: urlRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        about: aboutRef.current.value,
      };
      console.log(details);
      await updateDoc(docRef, {
        personalDetails: details,
      });
    // }

    ctx.setDetails("per");
    setIsFilled(true)
    history.replace("/edit/education");
  }

  return (
    <React.Fragment>
      <div className="personal-details question-container flex flex-col justify-center py-10">
        <h5 className="pb-4 text-xl">Personal Details</h5>

        <form className="flex flex-col">
          {/* {!ctx.isPersonalFilled && !isFilled && ( */}
            <div className="form-content">
              <Question
                required
                type="text"
                placeholder="Name"
                inputRef={nameRef}
              />
              <Question
                required
                type="text"
                placeholder="Position"
                inputRef={posRef}
              />
              <Question
                required
                type="url"
                placeholder="URL"
                inputRef={urlRef}
              />
              <Question
                required
                type="email"
                placeholder="Email"
                inputRef={emailRef}
              />
              <Question
                type="text"
                required
                placeholder="Phone Number"
                inputRef={phoneRef}
                maxLength="10"
              />
              <textarea
                ref={aboutRef}
                placeholder="About Yourself(50 words)"
                rows="5"
                className="bg-transparent border-b-2 border-slate-600 focus:border-indigo-400 py-2 px-4 my-2"
              />
            </div>
          {/* )} */}
          {/* {ctx.isPersonalFilled && (
            <div>
              <p>You have alredy filled this</p>
              <button>Edit</button>
            </div>
          )} */}

          <div className="btn-div pt-5 flex flex-row justify-end">
            <button className="px-4 py-2 mx-1 bg-indigo-300" disabled>
              Previous
            </button>
            <button
              onClick={sendData}
              className="px-4 py-2 mx-1 ml-16 bg-indigo-500"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default PersonalDetails;
