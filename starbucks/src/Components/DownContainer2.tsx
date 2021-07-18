import React from "react";

function DownContainer2() {
  return (
    <div className="text-center mb-32">
      <div className="w-2/3 ml-16 text-center max-w-1440">
        <p className="text-4xl font-semibold">Endless Extras</p>
        <p className="pt-6 ">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.{" "}
        </p>
      </div>
      <div className="pt-12 flex mx-16 my-0 pb-10 min-w-768 flex-shrink-0 text-center">
        <div className="w-4/12 pb-0 mr-10 flex box border flex-col">
          <div className="cursor-pointer max-w-8 my-0 mx-auto pb-10 flex-shrink-0 text-center">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
              alt=""
              width="112"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-2xl m-0 text-center text-semibold">
              Fun freebies{" "}
            </p>
            <p className="pt-6">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <button className="border-0 underline p-0 min-w-24 min-h-24 mt-6 text-green-900 cursor-pointer overflow-visible hover:no-underline">Learn more</button>
          </div>
        </div>
        <div className="w-4/12 pb-0 mx-10 flex flex-col">
          <div className="mx-auto my-0 max-w-8 pb-10 text-center flex-shrink-0 block">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
              alt=""
              width="112"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-2xl m-0 text-center text-semibold">
              Order & pay ahead{" "}
            </p>
            <p className="pt-6">
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </p>
            <button className="border-0 underline p-0 min-w-24 min-h-24 mt-6 text-green-900 cursor-pointer overflow-visible hover:no-underline">Learn more</button>

          </div>
        </div>
        <div className="w-4/12 pb-0 flex flex-col ml-10">
          <div className="mx-auto my-0 max-w-8 pb-10 flex-shrink-0 text-center">
            <img
              className="opacity-100 ease-in duration-150 max-w-full h-auto border-0"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
              alt=""
              width="112"
            />
          </div>
          <div className="min-w-card text-center">
            <p className="text-2xl m-0 text-center text-semibold">
              Get to free faster{" "}
            </p>
            <p className="pt-6">
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </p>
            <button className="border-0 underline p-0 min-w-24 min-h-24 mt-6 text-green-900 cursor-pointer overflow-visible hover:no-underline">Learn more</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DownContainer2;
