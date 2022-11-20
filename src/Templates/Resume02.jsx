import React from "react";

const Resume02 = React.forwardRef((props, ref) => {
  return (
    <div
      className="resume  bg-white text-black px-5  justify-center h-fit"
      ref={ref}
    >
      <div className="intro mb-4">
        <div className="mb-5 ">
          <div className="text-4xl font-black">ALFREDO TORRES</div>
          <div className="text-2xl text-slate-400">Marketing Manager</div>
        </div>
        <div className="text-xs border-l-4 border-slate-300 pl-2">
          <div>
            <a href="https://akanshaaa19.github.io/portfolio">
              akanshaaa19.github.io/portfolio
            </a>
          </div>
          <div>
            9425010449{" "}
            <a href="mailto:akanshasakhre@gmail.com">akanshasakhre@gmail.com</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="sec-2  flex flex-row mt-3">
        <div className="profile w-8/12">
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-sm w-9/12">
            Experienced and energetic Marketing Manager with over six years of
            experience effectively managing marketing projects from conception
            to completion. Using digital and analog marketing platforms to
            increase sales and overall company productivity.
          </p>
        </div>
        <div className="skills ">
          <h1 className="text-xl font-bold">Skills</h1>
          <ul className="list-disc	text-sm">
            <li> Project Management Skills</li>
            <li> Digital Marketing</li>
            <li> Negotiation</li>
            <li> Critical Thinking</li>
            <li> Communication Skills</li>
          </ul>
        </div>
      </div>

      <hr />


      <div className="sec-2 work row mt-3">
        <div className="text-xl font-bold col-3">
          Work <br /> Experience
        </div>
        <div className="col">
          <div className="text-sm row">
            <div className="text-xs col-3 mr-4">
              2016-2020
              <br />
              Ginyard International Co.
            </div>
            <div  className="col">
              <div className="font-bold">Marketing Manager</div>
              <ul className="text-xs list-disc">
                <li>
                  Developed new promotional campaign by bundling products
                  together for Cosmetic business, increasing sales revenue by
                  24%
                </li>
                <br />
                <li>
                  Established new social media team including Web developers,
                  and Creative Designer growing company web presence and global
                  brand awareness by 45%
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm row">
            <div className="text-xs col-3 mr-4">
              2016-2020
              <br />
              Ginyard International Co.
            </div>
            <div className="col">
              <div className="font-bold">Marketing Manager</div>
              <ul className="text-xs list-disc">
                <li>
                  Developed new promotional campaign by bundling products
                  together for Cosmetic business, increasing sales revenue by
                  24%
                </li>
                <br />
                <li>
                  Established new social media team including Web developers,
                  and Creative Designer growing company web presence and global
                  brand awareness by 45%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr />


      <div className="sec-3 edu row mt-3">
        <div className="text-xl font-bold col-3">Education</div>
        <div className="col">
          <div className="e-1 text-sm row">
            <div className="text-xs col-3 mr-4">
              2012-2014
              <br />
              Fauget University
            </div>
            <div className="col">
            <span className="font-bold">Master of Science in Marketing</span>
              <br />
              <ul className="text-xs">3.85/4 GPA</ul>
            </div>
          </div>
          <div className="e-1 text-sm row">
            <div className="text-xs col-3 mr-4">
              2012-2014
              <br />
              Fauget University
            </div>
            <div className="col">
              <span className="font-bold">Master of Science in Marketing</span>
              <br />
              <ul className="text-xs">3.85/4 GPA</ul>
            </div>
          </div>
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

export default Resume02;
