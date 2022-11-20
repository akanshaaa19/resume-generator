import React, { useContext } from "react";
import AppContext from "../store/app-context";
import './style.css'

const Resume = React.forwardRef((props, ref)=> {
  const ctx = useContext(AppContext);
  const personalDetails = ctx.personalDetails
  const educationDetails = ctx.educationDetails
  console.log(educationDetails)

  const content = <div className="resume bg-white text-black flex flex-col py-6 px-8 justify-center" ref={ref}>
  <div className="intro text-center	">
    <h1 className="text-4xl font-black">{personalDetails[0].name}</h1>
    <h3 className="text-lg">{personalDetails.position}</h3>
    <div className="contact flex text-center justify-evenly	 text-sm">
      <div className="link ">
        <a href="https://akanshaaa19.github.io/portfolio">{personalDetails.url}</a>
      </div>
      <div className="number">{personalDetails.phone}</div>
      <div className="email">
        <a href="mailto:akanshasakhre@gmail.com">{personalDetails.email}</a></div>
    </div>
  </div>
<hr />
  <div className="about mt-4">
    <h1 className="text-xl font-bold">About</h1>
    <p className="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      molestie orci ac nulla dapibus, eget suscipit felis porta. Suspendisse
      fringilla et libero nec commodo. In hac habitasse platea dictumst. Ut
      dictum faucibus urna id varius. Fusce ac felis ut diam elementum
      bibendum ac eu arcu. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos.
    </p>
  </div>
  <hr />

  <div className="skill row text-sm mt-4">
    <h1 className="text-xl font-bold">Skills</h1>
    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>

    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>
    <div className=" col-3">Skill</div>
  </div>
  <hr />

  <div className="Education mt-4">
  <h1 className="text-xl font-bold">Education</h1>

    {/* <div className="edu-sec-1 text-sm mb-3">
      <div className="font-bold">{educationDetails[0].degree + "/" + educationDetails[0].school}</div>
      <div>{educationDetails[0].location}</div>
      <p>
        {educationDetails[0].cgpa}
      </p>
    </div>
    <div className="edu-sec-1 text-sm mb-3">
      <div className="font-bold">{educationDetails[1].degree + "/" + educationDetails[1].school}</div>
      <div>{educationDetails[1].location}</div>
      <p>
        {educationDetails[1].cgpa}
      </p>
    </div>*/}
  </div> 
  <hr />

  <div className="experience mt-4">
    <h1 className="text-xl font-bold">Work experience</h1>
  <div className="sec-1 text-sm mb-3">
      <div className="font-bold">Job Title</div>
      <div className="font-bold">Company Name</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        molestie orci ac nulla dapibus, eget suscipit felis porta.
        Suspendisse fringilla et libero nec commodo. In hac habitasse platea
        dictumst.
      </p>
    </div>
    <div className="sec-1 text-sm">
      <div className="font-bold">Job Title</div>
      <div className="font-bold">Company Name</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        molestie orci ac nulla dapibus, eget suscipit felis porta.
        Suspendisse fringilla et libero nec commodo. In hac habitasse platea
        dictumst.
      </p>
    </div>
  </div>
  <hr />
</div>
  return (
    // {personalDetails[0] ? <p>empty</p> : null}
    <p>gu</p>
  );
})

export default Resume;
