import React from "react";
import aboutus1 from "../../assets/images/aboutus1.png";
import aboutus2 from "../../assets/images/aboutus2.png";
import aboutus3 from "../../assets/images/aboutus3.png";

const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {/* Image  start*/}
        <div>
          <img
            className="inline-block ml-[140px] text-center"
            src={aboutus1}
            alt="aboutus1"
          />
          <div className="flex">
            <img className="inline-block" src={aboutus2} alt="aboutus2" />
            <img className="inline-block" src={aboutus3} alt="aboutus3" />
          </div>
        </div>
        {/* Image  end*/}

        {/* About us text start */}
        <div>
          <p className="text-blue-600">About Us</p>
          <h2 className="text-2xl font-semibold">
            A dedicated solution for <br /> startups and enterprises
          </h2>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <hr className="my-12" />
          {/* avatar */}
          <div className="flex">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="ceo" />
              </div>
            </div>
            <div className="grid grid-cols-1 ml-4">
              <p>"Fieldx is for teams that care about their product growth."</p>
              <h5 className="font-bold">CEO, FieldX</h5>
            </div>
          </div>
        </div>
        {/* About us text end */}
      </div>
    </div>
  );
};

export default AboutUs;
