import React from "react";

function DownContainer() {
  return (
    <div className="text-center mb-32">
      <div className="w-2/3 ml-16 text-center">
        <p className="text-4xl font-semibold">Getting started is easy</p>
        <p className="pt-6 ">
          Earn Stars and get rewarded in a few easy steps.
        </p>
      </div>
      <div className="pt-12 flex mx-16 my-0 pb-10 flex-shrink-0 text-center">
        <div className="w-4/12 pb-0 mr-10 flex box border flex-col">
          <div className="mx-auto my-0 max-w-8 pb-10 flex-shrink-0">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
              alt=""
              width="48"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-3xl m-0 text-center text-semibold">
              Create an account
            </p>
            <p className="pt-6">
              To get started,{" "}
              <a className="text-green-700 underline" href={"#"}>
                join now
              </a>{" "}
              you can also,{" "}
              <a className="text-green-700 underline" href={"#"}>
                join in the app
              </a>{" "}
              to get access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>
        </div>
        <div className="w-4/12 pb-0 mx-10 flex flex-col">
          <div className="mx-auto my-0 max-w-8 pb-10 text-center flex-shrink-0 block">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
              alt=""
              width="48"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-3xl m-0 text-center text-semibold">
              Order and pay how you’d like
            </p>
            <p className="pt-6">
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.{" "}
              <a className="text-green-700 underline" href={"#"}>
                Learn how.
              </a>
            </p>
          </div>
        </div>
        <div className="w-4/12 pb-0 flex flex-col ml-10">
          <div className="mx-auto my-0 max-w-8 pb-10 flex-shrink-0 text-center">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
              alt=""
              width="48"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-3xl m-0 text-center text-semibold">
              Earn Stars, get Rewards
            </p>
            <p className="pt-6">
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownContainer;
