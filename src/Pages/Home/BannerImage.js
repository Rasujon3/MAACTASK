import React from "react";
import table from "../../assets/images/tablet.png";
import phone from "../../assets/images/phone.png";

const BannerImage = () => {
  return (
    <div className="relative">
      <img className="static" src={table} alt="table" />
      <img
        className="absolute bottom-[-90px] right-[250px]"
        src={phone}
        alt="phone"
      />
    </div>
  );
};

export default BannerImage;
