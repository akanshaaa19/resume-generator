import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import { db } from "../../firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";

import Question from "../UI/Question";
import AuthContext from "../../store/auth-context";

function SkillDetails() {
  const skill1Ref = useRef();
  const skill2Ref = useRef();
  const skill3Ref = useRef();
  const skill4Ref = useRef();
  const skill5Ref = useRef();
  const skill6Ref = useRef();

  const history = useHistory();
  const ctx = useContext(AuthContext);

  async function sendData(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const docRef = doc(db, "users", email);

    // if (!ctx.isSkillFilled) {
      const skills = [
        skill1Ref.current.value,
        skill2Ref.current.value,
        skill3Ref.current.value,
        skill4Ref.current.value,
        skill5Ref.current.value,
        skill6Ref.current.value,
      ];
      await updateDoc(docRef, {
        skills: skills,
      });
    // }

    ctx.setDetails("skill");
    history.replace("/resume");
  }

  return (
    <div className="personal-details question-container flex flex-col justify-center py-10">
      <h5 className="pb-4 text-xl">Skills</h5>
      <form className="flex flex-col">
        {/* {!ctx.isSkillFilled && ( */}
          <div className="form-content">
            <Question type="text" placeholder="Skill 1" inputRef={skill1Ref} />
            <Question type="text" placeholder="Skill 2" inputRef={skill2Ref} />
            <Question type="text" placeholder="Skill 3" inputRef={skill3Ref} />
            <Question type="text" placeholder="Skill 4" inputRef={skill4Ref} />
            <Question type="text" placeholder="Skill 5" inputRef={skill5Ref} />
            <Question type="text" placeholder="Skill 6" inputRef={skill6Ref} />
          </div>
        {/* )} */}
        {/* {ctx.isSkillFilled && <p>You have alredy filled this</p>} */}

        <div className="btn-div pt-5 flex flex-row justify-end">
          <button className="px-4 py-2 mx-1 bg-indigo-500" onClick={()=>{history.replace("/edit/work")}}>
            Previous
          </button>
          <button
            onClick={sendData}
            className="px-4 py-2 mx-1 ml-16 bg-indigo-300"
            type="submit" disabled
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SkillDetails;
