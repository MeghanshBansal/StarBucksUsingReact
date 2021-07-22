import React from "react";
function Questions() {
  return (
    <>
      <div className="mb-32 my-0 mx-auto max-w-1440">
        <div className="px-16 w-2/4 m-16">
          <p className="text-4xl font-semibold pb-6 m-0">Questions?</p>
          <p className="text-base pb-6 m-0">
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions{" "}
            <a className="text-base underline text-green-600">
              right over here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default React.memo(Questions);
