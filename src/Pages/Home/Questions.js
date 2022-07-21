import React from "react";

const Questions = () => {
  return (
    <div className="mt-12 bg-blue-600">
      <p className="text-center text-white">Common Questions</p>
      <h2 className="text-center text-2xl font-semibold mb-6 text-white">
        Frequently asked questions
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mx-12">
        {/* 1st */}
        <div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <div class="collapse-title text-xl font-medium">
              What kind of data can I see in FieldX?
            </div>
            <div class="collapse-content">
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
