import React from "react";
import "./style.css";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="resume bg-white text-black px-5  h-fit py-2" ref={ref}>
      <div className="sec-1 flex flex-col items-center text-center mt-4">
        <div>
          <div className="text-4xl mb-3 font-extrabold">
            {props.personalDetails.name}
          </div>
          <div className="text-2xl text-slate-500">
            {props.personalDetails.designation}
          </div>
        </div>
        <div className="flex items-center">
          <a href="mailto:" className="mr-8">
            {props.personalDetails.url}{" "}
          </a>
          <a href="" className="mr-8">
            {props.personalDetails.email}{" "}
          </a>
          <p className="mb-0">{props.personalDetails.phone}</p>
        </div>
      </div>
      <hr />
      <div className="about">
        <h4>ABOUT</h4>
        <p className="text-gray-700">{props.personalDetails.about}</p>
      </div>
      <hr />
      <div className="education">
        <h4 className="mb-4">EDUCATION</h4>
        <div className="flex flex-row">
          {props.education.map((school) => {
            return (
              <div className="e1 mr-16">
                <h6 className="text-lg">{school.school}</h6>
                <div className="text-gray-700">
                  <p>{school.degree}</p>
                  <p>{school.duration}</p>
                  <p>{school.gpa}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="skill">
        <h4>SKILLS</h4>
        <div>
          <div className="row">
            {props.skills.map((skill) => {
              return <div className="col-4">{skill}</div>;
            })}
          </div>
        </div>
        <hr />
      </div>
      <div className="work">
        <h4 className="mb-4">WORK</h4>
        {props.work.map((work) => {
          return (
            <div className="w1 text-gray-700 mb-4">
              <h6 className="text-lg text-black mb-0">{work.title}</h6>
              <h6 className="text-base text-black">{work.org}</h6>
              <p>{work.desc}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
});

export default Resume;
