import React from "react";
import boxicon from "../../assets/icons/boxicon.png";
import centerphone from "../../assets/images/centralphone.png";

const ProductsFeatures = () => {
  return (
    <div>
      <p className="text-blue-600 text-center">Products Features</p>
      <h1 className="text-2xl text-center font-bold">
        Make more out of your data
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-12">
        {/* Part 1 */}
        <div className="mt-8">
          <div>
            <img className="float-right" src={boxicon} alt="boxicon" /> <br />{" "}
            <br />
            <h4 className="text-2xl font-bold float-right">
              Real-time analytics
            </h4>{" "}
            <br /> <br />
            <p className="text-opacity-0 float-left">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mt-8">
            <img className="float-right" src={boxicon} alt="boxicon" /> <br />{" "}
            <br />
            <h4 className="text-2xl font-bold float-right">
              Real-time analytics
            </h4>{" "}
            <br /> <br />
            <p className="text-opacity-0 float-left">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mt-8">
            <img className="float-right" src={boxicon} alt="boxicon" /> <br />{" "}
            <br />
            <h4 className="text-2xl font-bold float-right">
              Real-time analytics
            </h4>{" "}
            <br /> <br />
            <p className="text-opacity-0 float-left">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
        <div>
          <img
            src={centerphone}
            alt="Center Phone"
            className="h-[534px] w-[372px]"
          />
        </div>
        {/* Part 2 */}
        <div className="mt-8">
          <div>
            <img className="" src={boxicon} alt="boxicon" />
            <h4 className="text-2xl font-bold mt-2">Real-time analytics</h4>
            <p className="text-opacity-0 mt-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mt-2">
            <img className="" src={boxicon} alt="boxicon" />
            <h4 className="text-2xl font-bold mt-2">Real-time analytics</h4>
            <p className="text-opacity-0 mt-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mt-2">
            <img className="" src={boxicon} alt="boxicon" />
            <h4 className="text-2xl font-bold mt-2">Real-time analytics</h4>
            <p className="text-opacity-0 mt-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-[140px] mb-10" />
    </div>
  );
};

export default ProductsFeatures;
