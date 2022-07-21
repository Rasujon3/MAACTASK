import React from "react";
import aven from "../../assets/images/Aven.png";
import armena from "../../assets/images/Amara.png";
import circle from "../../assets/images/Circle.png";
import kyan from "../../assets/images/Kyan.png";
import treva from "../../assets/images/Treva.png";

const Impact = () => {
  return (
    <div className="my-12">
      <h2 className="text-blue-600 text-center my-12">
        5,000+ high-impact teams rely on Fieldx
      </h2>
      <div className="flex gap-12 ml-12 content-center">
        <img className="h-[48px] w-[160px]" src={aven} alt="amara" />
        <img className="h-[48px] w-[160px]" src={armena} alt="armena" />
        <img className="h-[48px] w-[160px]" src={circle} alt="amara" />
        <img className="h-[48px] w-[160px]" src={kyan} alt="amara" />
        <img className="h-[48px] w-[160px]" src={treva} alt="amara" />
      </div>
    </div>
  );
};

export default Impact;
