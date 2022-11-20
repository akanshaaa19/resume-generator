import React, { useEffect, useState } from "react";

const Resume02 = React.forwardRef((props, ref) => {

  return (
    <div
      className="resume  bg-white text-black px-5  justify-center h-fit"
      ref={ref}
    >
      <div className="intro mb-4">
        <div className="mb-5 ">
          <div className="text-4xl font-black">{props.details.name}</div>
          <div className="text-2xl text-slate-400">{props.details.designation}</div>
        </div>
        <div className="text-xs border-l-4 border-slate-300 pl-2">
          <div>
            <a href={`https://${props.details.url}`}>{props.details.url}</a>
          </div>
          <div>
            {props.details.phone} <a href={`mailto:${props.details.email}`}>{props.details.email}</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="sec-2  flex flex-row mt-3">
        <div className="profile w-8/12">
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-sm w-11/12">{props.details.about}</p>
        </div>
        <div className="skills ">
          <h1 className="text-xl font-bold">Skills</h1>
          <ul className="list-disc	text-sm">
            {props.skills.map((skill) => {
              return <li>{skill}</li>;
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
          {props.work.map((work) => {
            return <div className="text-sm row">
              <div className="text-xs col-3 mr-4">
                {work.duration}
                <br />
                {work.companyName}
              </div>
              <div className="col">
                <div className="font-bold">{work.position}</div>
                <ul className="text-xs list-disc">
                  <li>{work.responsibility1}</li>
                  <br />
                  <li>{work.responsibility2}</li>
                </ul>
              </div>
            </div>;
          })}
        </div>
      </div>

      <hr />

      <div className="sec-3 edu row mt-3">
        <div className="text-xl font-bold col-3">Education</div>
        <div className="col">
          {props.education.map((edu) => {
            return (
              <div className="e-1 text-sm row">
                <div className="text-xs col-3 mr-4">
                  {edu.duration}
                  <br />
                  {edu.schoolName}
                </div>
                <div className="col">
                  <span className="font-bold">{edu.degree}</span>
                  <br />
                  <ul className="text-xs">{edu.gpa} GPA</ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      <div className="sec-3 edu row mt-3">
        <div className="text-xl font-bold col-3">Certifications</div>
        <div className="col">
          {props.certification.map((certificate) => {
            return (
              <div className="e-1 text-sm row">
                <div className="text-xs col-3 mr-4">{certificate.year}</div>
                <div className="col">
                  <span className="font-bold">
                    {certificate.title}
                  </span>
                  <br />
                  <ul className="text-xs">{certificate.org}</ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Resume02;
