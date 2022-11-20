import React from "react";

const Resume03 = React.forwardRef((props, ref) => {
  return (
    <div className="resume  bg-white text-black px-5  h-fit" ref={ref}>
      <div className="sec-1 flex flex-row justify-between mt-4">
        <div>
          <div className="text-3xl font-extrabold">MARGARITA PEREZ</div>
          <div className="text-2xl font-bold">Graphic Designer</div>
        </div>
        <div>
          portfolio: reallygreatsite.com <br/>email: hello@reallygreatsite.com <br/>phone
          #: +123-456-7890
        </div>
      </div>
      <hr />
      <div className="sec-2 mt-4">
        <div className="text-xl font-extrabold mb-2">ABOUT ME</div>
        <div>
          I work with established entrepreneurs by creating different types of
          designs so they can showcase their business, gain more exposure,
          attract their target audience, get more website traffic, and increase
          their revenue.
        </div>
      </div>
      <hr />

      <div className="sec-3 mt-4">
        <div className="text-xl font-extrabold mb-2">SKILLS</div>
        <div>
          Design principles (such as color theory and typography), social media
          marketing, content marketing, project management, online
          presentations, and website management. Making presentations and designing ui for websites
        </div>
      </div>
      <hr />

      <div className="sec-4 mt-4">
        <div className="text-xl font-extrabold mb-2">WORK EXPERIENCES</div>
        <ul className="list-disc">
          <li>
            <div className="font-bold">Graphic Designer</div>
            <div>October 2026 - up to present | Self-employed/Freelancer</div>
            <div>
              <ul className="">
                <li>
                  Determine the best ways to convey clients' vision through
                  different forms of design.
                </li>
                <li>
                  Create designs and illustrations via graphic design and
                  digital art software.
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="font-bold">Social Media Manager</div>
            <div>September 2025 - August 2026 | Liceria & Co.</div>
            <div>
              <ul>
                <li>
                  Supervised social media interaction between Liceria & Co. and
                  its followers.
                </li>
                <li>
                  Implemented a strategy that enabled Liceria & Co. to get a 40%
                  increase in website traffic.
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="font-bold">Marketing Associate</div>
            <div>May 2024 - July 2025 | Studio Shodwe</div>
            <div>
              <ul >
                <li>
                  Managed daily administrative tasks to support the marketing
                  design team.
                </li>
                <li>
                  Conducted qualitative market research for Studio Shodwe's
                  latest products.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <hr />

      <div className="sec-5 mt-4">
        <div className="text-xl font-extrabold mb-2">EDUCATION</div>
        <ul className="list-disc">
          <li>
            <div><span className="font-bold">Really Great University</span> | 2020 - 2024 </div>
            <div>Bachelor of Fine Arts in Graphic and Digital Design</div>
          </li>

          <li>
          <div><span className="font-bold">Really Great University</span> | 2020 - 2024 </div>
            <div>Bachelor of Fine Arts in Graphic and Digital Design</div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Resume03;
