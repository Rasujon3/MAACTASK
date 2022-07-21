import React from "react";
import people from "../../assets/icons/people.png";
import monitor from "../../assets/icons/monitormobbile.png";
import cup from "../../assets/icons/cup.png";
import user from "../../assets/icons/user.png";

const Summary = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <img
            className="inline-block text-center"
            src={monitor}
            alt="people"
          />
          <h4 className="font-bold text-blue-600 text-center mt-4">10+</h4>
          <p className="text-center my-4">Platforms Created</p>
        </div>
        <div className="text-center">
          <img className="inline-block text-center" src={user} alt="people" />
          <h4 className="font-bold text-blue-600 text-center mt-4">1559+</h4>
          <p className="text-center my-4">Total Users</p>
        </div>
        <div className="text-center">
          <img className="inline-block text-center" src={people} alt="people" />
          <h4 className="font-bold text-blue-600 text-center mt-4">10+</h4>
          <p className="text-center my-4">Total Clients</p>
        </div>
        <div className="text-center">
          <img className="inline-block text-center" src={cup} alt="people" />
          <h4 className="font-bold text-blue-600 text-center mt-4">300 days</h4>
          <p className="text-center my-4">In Operations</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
