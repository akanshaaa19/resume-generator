import React from "react";
import './style.css'

const Resume = React.forwardRef((props, ref) => {
  return (
    <div
      className="resume  bg-white text-black px-5  justify-center h-fit"
      ref={ref}
    >
      <div className="intro mb-4">
        <div className="mb-5 ">
          <div className="text-4xl font-black">{props.personalDetails.name}</div>
          <div className="text-2xl text-slate-400">Marketing Manager</div>
        </div>
        <div className="text-xs border-l-4 border-slate-300 pl-2">
          <div>
            <a href="https://akanshaaa19.github.io/portfolio">
              {props.personalDetails.url}
            </a>
          </div>
          <div>
            {props.personalDetails.phone}{" "}
            <a href="mailto:akanshasakhre@gmail.com">{props.personalDetails.email}</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="sec-2  flex flex-row mt-3">
        <div className="profile w-8/12">
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-sm w-9/12">
            {props.personalDetails.about}
          </p>
        </div>
        <div className="skills ">
          <h1 className="text-xl font-bold">Skills</h1>
          <ul className="list-disc	text-sm">
            {props.skills.map(skill=>{
              return <li>{skill}</li>
            })}
          </ul>
        </div>
      </div>

      <hr />


      <div className="sec-2 work row mt-3">
        <div className="text-xl font-bold col-3">
          Work <br /> Experience
        </div>
        <div className="col">
          {props.work.map(work=>{
            return <div className="text-sm row">
            <div className="text-xs col-3 mr-4">
              2016-2020
              <br />
              {work.org}
            </div>
            <div  className="col">
              <div className="font-bold">{work.title}</div>
              <p className="text-xs">
                {work.desc}
              </p>
            </div>
          </div>
          })}
          

        </div>
      </div>

      <hr />


      <div className="sec-3 edu row mt-3">
        <div className="text-xl font-bold col-3">Education</div>
        <div className="col">
          {props.education.map(school=>{
            return <div className="e-1 text-sm row">
            <div className="text-xs col-3 mr-4">
              {school.duration}
              <br />
              {school.name}
            </div>
            <div className="col">
            <span className="font-bold">{school.degree}</span>
              <br />
              <ul className="text-xs">{school.cgpa}</ul>
            </div>
          </div>
          })}
        </div>
      </div>

      <hr />


      <div className="sec-3 edu row mt-3">
        <div className="text-xl font-bold col-3">Certifications</div>
        <div className="col">
          <div className="e-1 text-sm row">
            <div className="text-xs col-3 mr-4">
              2016
            </div>
            <div className="col">
            <span className="font-bold">Certified in Project Management</span>
              <br />
              <ul className="text-xs">Giggling Platypus Co., Institute of Certified
Public Management</ul>
            </div>
          </div>
          <div className="e-1 text-sm row">
            <div className="text-xs col-3 mr-4">
              2013
            </div>
            <div className="col">
              <span className="font-bold">Certified Marketing Assistant</span>
              <br />
              <ul className="text-xs">Thynk Unlimited Company</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
