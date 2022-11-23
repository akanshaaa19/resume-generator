import React from "react";

import img1 from "../../../img/1.png";
import img2 from "../../../img/2.png";
import img3 from "../../../img/3.png";

function Templates() {
  return (
    <div className="flex flex-col justify-center py-10">
      <h1 className="mb-16">Templates</h1>
      <div className="row text-center">

        <div className="col-6 border-8 border-[#141414] p-2 cursor-pointer" onClick={()=>{localStorage.setItem('temp', '1')}}>
          <img className="pb-3" src={img1} alt="temp-1"/>
          <span className="text-lg">Template 1</span>
        </div>

        <div className="col-6 border-8 border-[#141414] p-2 cursor-pointer" onClick={()=>{localStorage.setItem('temp', '2')}}>
          <img className="pb-3" src={img2} alt="temp-2" />
          <span className="text-lg">Template 2</span>
        </div>

        <div className="col-6 border-8 border-[#141414] p-2 cursor-pointer" onClick={()=>{localStorage.setItem('temp', '3')}}>
          <img className="pb-3" src={img3} alt="temp-3"/>
          <span className="text-lg">Template 3</span>
        </div>

      </div>
    </div>
  );
}

export default Templates;
