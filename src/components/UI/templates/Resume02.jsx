import React from "react";
import "./style.css";

const Resume02 = React.forwardRef((props, ref) => {
  return (
    <div className="resume bg-white text-black px-5  h-fit pt-1" ref={ref}>
      <div className="sec-1 flex flex-col mt-4">
        <div>
          <div className="text-4xl font-bold">{props.personalDetails.name}</div>
          <div className="text-3xl text-slate-500">{props.personalDetails.designation}</div>
        </div>
        <div className="flex items-center">
          <a href={`https://${props.personalDetails.url}`} className="mr-8" target="_blank">
          {props.personalDetails.url}{" "}
          </a>
          <a href={`mailto:${props.personalDetails.email}`} className="mr-8">
          {props.personalDetails.email}{" "}
          </a>
          <p className="mb-0">{props.personalDetails.phone}</p>
        </div>
      </div>
      <div className="about mt-4">
        <h4>ABOUT</h4>
        <hr />
        <p className="text-gray-700">
        {props.personalDetails.about}
        </p>
      </div>
      <div className="education mt-4">
        
        <h4 className="mb-4">EDUCATION</h4>
        <hr />

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
      <div className="skill mt-4">
        <h4>SKILLS</h4>
        <hr />

        <div>
            <div className="row">
            {props.skills.map((skill) => {
              return <div className="col-4">{skill}</div>;
            })}
            </div>
        </div>
      </div>
      <div className="work mt-4">
        <h4 className="mb-4">WORK</h4>
        <hr />

        {props.work.map((work) => {
          return (
            <div className="w1 text-gray-700">
              <h6 className="text-lg text-black mb-0">{work.title}</h6>
              <h6 className="text-base text-black">{work.org}</h6>
              <p>{work.desc}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
});

export default Resume02;
