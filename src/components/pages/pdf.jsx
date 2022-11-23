import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Resume03 from "../UI/templates/Resume03";
import Resume01 from "../UI/templates/Resume01";
import Resume02 from "../UI/templates/Resume02";

import "../UI/templates/style.css";

function PdfDownload() {
  const [personal, setPersonal] = useState({});
  const [education, seteducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setskill] = useState([]);

  async function getUser(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  }

  const email = localStorage.getItem("email");

  getUser(email).then((result) => {
    setPersonal(result.personalDetails);
    seteducation(result.educationDetails);
    setWork(result.workDetails);
    setskill(result.skills);
  });
  

  const [temp, setTemp] = useState('3');

  const componentRef = useRef();

  return (
    <div className="bg-[#161616]">
      <ReactToPrint
        trigger={() => (
          <button>
            <div className="flex flex-row items-center text-lg font-bold py-3 px-4">
              <span>PDF</span> <i className="fa-solid fa-arrow-down fa-xl ml-4"></i>
            </div>
          </button>
        )}
        content={() => componentRef.current}
      />
      {temp === "1" && (
        <Resume01
          ref={componentRef}
          personalDetails={personal}
          skills={skill}
          work={work}
          education={education}
        />
      )}
      {temp === "2" && (
        <Resume02
          ref={componentRef}
          personalDetails={personal}
          skills={skill}
          work={work}
          education={education}
        />
      )}
      {temp === "3" && (
        <Resume03
          ref={componentRef}
          personalDetails={personal}
          skills={skill}
          work={work}
          education={education}
        />
      )}
    </div>
  );
}

export default PdfDownload;
