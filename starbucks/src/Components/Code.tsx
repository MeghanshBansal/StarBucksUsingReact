import React from "react";

function Code() {
  return (
    <>
      <div className="mt-10 mx-auto max-w-1440">
        <div className="px-16 w-2/4 ml-16">
          <p className="font-semibold text-4xl pb-6 m-0">Star Codes</p>
          <p className="pb-6 mb-4">
            Yesssss. You’ve got Stars in your hand. Enter your code here and
            we’ll add Stars to your account.
          </p>
          <form className="pb-12" method="post">
            <div className="px-3 -mx-3 block relative pb-0 overflow-hidden">
              <div className="mt-2 relative rounded-lg py-3 px-4 items-center flex shadow-code border-4">
                <input
                  type="text"
                  className="block border-0 p-0 w-full placeholder-red-600"
                  aria-required={true}
                  placeholder="Enter Your Star Code"
                />
                <svg className="w-6 h-6 overflow-visible flex-shrink-0 text-red-600">
                  <path d="M12.65 3.04l7.66 14.165c.264.558-.04 1.2-.662 1.2H4.352c-.622 0-.926-.642-.652-1.22l7.644-14.137c.297-.61 1.025-.606 1.307-.008zM11 8.904v3.192c0 .5.448.904 1 .904s1-.405 1-.904V8.904c0-.5-.448-.904-1-.904s-1 .405-1 .904zM11 15c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"></path>
                </svg>
              </div>
              <button
                className="rounded-small py-2 px-4 font-semibold text-center block ml-auto min-w-minimum min-h-minimum border-solid border-2 mt-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-xs">Have a receipt but don't have a code?</p>
          <p className="text-xs">
            Go to{" "}
            <a href={"#"} className="text-green-600 underline">
              starbucks-starbucks.com
            </a>{" "}
            to collect your reciept and earn your Stars.
          </p>
        </div>
      </div>
    </>
  );
}

export default React.memo(Code);
