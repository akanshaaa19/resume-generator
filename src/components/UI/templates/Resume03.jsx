import React from "react";

const Resume03 = React.forwardRef((props, ref) => {
  return (
    <div className="resume  bg-white text-black px-5  h-fit py-5" ref={ref}>
      <div className="sec-1 flex flex-row justify-between mt-4">
        <div>
          <div className="text-3xl font-bold">
            {props.personalDetails.name}
          </div>
          <div className="text-2xl font-bold text-slate-500">
            {props.personalDetails.designation}
          </div>
        </div>
        <div>
          <span className="font-medium">portfolio:</span> {props.personalDetails.url} <br />
          <span className="font-medium">email:</span> {props.personalDetails.email} <br />
          <span className="font-medium">phone #:</span> {props.personalDetails.phone}
        </div>
      </div>
      <hr />
      <div className="sec-2 mt-4">
        <div className="text-xl font-bold mb-2">ABOUT ME</div>
        <div>{props.personalDetails.about}</div>
      </div>
      <hr />

      <div className="sec-3 mt-4">
        <div className="text-xl font-bold mb-2">SKILLS</div>
        <div>
          <div className="row">
            {props.skills.map((skill) => {
              return <div className="col-6">{skill}</div>;
            })}
          </div>
        </div>
      </div>
      <hr />

      <div className="sec-4 mt-4">
        <div className="text-xl font-bold mb-2">WORK EXPERIENCES</div>
        <ul className="list-disc">
          {props.work.map((work) => {
            return (
              <li>
                <div className="font-bold">{work.title}</div>
                <div>{work.org}</div>
                <div>
                  <ul className="">
                    <li>{work.desc}</li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />

      <div className="sec-5 mt-4">
        <div className="text-xl font-bold mb-2">EDUCATION</div>
        <ul className="list-disc">
          {props.education.map((school) => {
            return (
              <li>
                <div>
                  <span className="font-bold">{school.school}</span> | {" "}
                  {school.duration}
                </div>
                <div>{school.degree}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Resume03;
