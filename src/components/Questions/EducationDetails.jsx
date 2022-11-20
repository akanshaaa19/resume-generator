import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

import Question from "../UI/Question";
import AuthContext from "../../store/auth-context";

function EducationDetails() {
  const degree1Ref = useRef();
  const school1Ref = useRef();
  const duration1Ref = useRef();
  const cgpa1 = useRef();

  const degree2Ref = useRef();
  const school2Ref = useRef();
  const duration2Ref = useRef();
  const cgpa2 = useRef();

  const history = useHistory();

  const ctx = useContext(AuthContext);

  async function sendData(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const docRef = doc(db, "users", email);

    // if (!ctx.isEducationFilled) {
      const edu1 = {
        degree: degree1Ref.current.value,
        school: school1Ref.current.value,
        duration: duration1Ref.current.value,
        gpa: cgpa1.current.value,
      };

      const edu2 = {
        degree: degree2Ref.current.value,
        school: school2Ref.current.value,
        duration: duration2Ref.current.value,
        gpa: cgpa2.current.value,
      };
      await updateDoc(docRef, {
        educationDetails: [edu1, edu2],
      });
    // }

    ctx.setDetails("edu");
    history.replace("/edit/work");
  }

  return (
    <form>
      <div className="personal-details question-container flex flex-col justify-center py-10">
        <h3 className="pb-4 text-xl">Education</h3>
        <form className="flex flex-col">
          {/* {!ctx.isEducationFilled && ( */}
            <div className="form-content">
              <Question
                type="text"
                placeholder="Degree Name"
                inputRef={degree1Ref}
              />
              <Question
                type="text"
                placeholder="School Name"
                inputRef={school1Ref}
              />
              <Question
                type="text"
                placeholder="Duration"
                inputRef={duration1Ref}
              />
              <Question
                className="mb-4"
                type="text"
                placeholder="CGPA"
                inputRef={cgpa1}
              />

              <Question
                type="text"
                placeholder="Degree Name"
                inputRef={degree2Ref}
                className="mt-8"
              />
              <Question
                type="text"
                placeholder="School Name"
                inputRef={school2Ref}
              />
              <Question
                type="text"
                placeholder="Duration"
                inputRef={duration2Ref}
              />
              <Question
                className=""
                type="text"
                placeholder="CGPA"
                inputRef={cgpa2}
              />
            </div>
          {/* )}
          {ctx.isEducationFilled && <p>You have alredy filled this</p>} */}

          <div className="btn-div pt-5 flex flex-row justify-end">
            <button
              onClick={() => {
                history.replace("/personal");
              }}
              className="px-4 py-2 mx-1 bg-indigo-500"
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
    </form>
  );
}

export default EducationDetails;
