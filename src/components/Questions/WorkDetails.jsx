import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import { db } from "../../firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";

import Question from "../UI/Question";
import AuthContext from "../../store/auth-context";

function WorkDetails() {
  const titleRef1 = useRef();
  const orgRef1 = useRef();
  const descRef1 = useRef();

  const titleRef2 = useRef();
  const orgRef2 = useRef();
  const descRef2 = useRef();

  const history = useHistory();

  const ctx = useContext(AuthContext);

  async function sendData(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const docRef = doc(db, "users", email);

    // if (!ctx.isWorkFilled) {
      const work1 = {
        title: titleRef1.current.value,
        org: orgRef1.current.value,
        desc: descRef1.current.value,
      };

      const work2 = {
        title: titleRef2.current.value,
        org: orgRef2.current.value,
        desc: descRef2.current.value,
      };

      await updateDoc(docRef, {
        workDetails: [work1, work2],
      });
    // }

    ctx.setDetails("work");
    history.replace("/edit/skills");
  }

  return (
    <div className="personal-details question-container flex flex-col justify-center py-10">
      <h3 className="pb-4 text-xl">Work Experience</h3>
      <form className="flex flex-col">
        {/* {!ctx.isWorkFilled && ( */}
          <div className="form-content">
            <Question
              type="text"
              placeholder="Job Title"
              inputRef={titleRef1}
            />
            <Question
              type="text"
              placeholder="Company Name"
              inputRef={orgRef1}
            />
            <Question
              className="mb-3"
              type="text"
              placeholder="Job Description"
              inputRef={descRef1}
            />

            <Question
              type="text"
              placeholder="Job Title"
              inputRef={titleRef2}
              className="mt-8"
            />
            <Question
              type="text"
              placeholder="Company Name"
              inputRef={orgRef2}
            />
            <Question
              className="mb-3"
              type="text"
              placeholder="Job Description"
              inputRef={descRef2}
            />
          </div>
        {/* )} */}
        {/* {ctx.isWorkFilled && <p>You have alredy filled this</p>} */}

        <div className="btn-div pt-5 flex flex-row justify-end">
          <button
            onClick={() => {
              history.replace("/edit/skills");
            }}
            className="px-4 py-2 mx-1 bg-indigo-500"
            disabled
          >
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
  );
}

export default WorkDetails;
