import React from "react";

function CardsTab() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  let newStyle;
  if (screenWidth < 940) {
    newStyle = " w-full";
  } else {
    newStyle = " w-1/6";
  }

  let cardstyle;
  if (screenWidth < 940) {
    cardstyle = " w-2/4";
  } else {
    cardstyle = " w-1/3";
  }

  return (
    <>
      <div className="mb-32 bg-cardcolor">
        <div className="my-0 mx-auto max-w-1440 px-10 py-20">
          <div className="w-2/3 pb-24 ml-16 text-center mb-7">
            <p className="font-semibold text-3xl pt-0 pb-7 m-0 text-center">
              Cash or card, you earn Stars
            </p>
            <p>
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>
          <div className="block p-0 m-0 pb-10 text-left">
            <div
              className={
                "pb-12 relative inline-block text-left align-top" + newStyle
              }
            >
              <p className="font-semibold text-3xl m-0 text-left">
                1<span className="text-xl">★</span> per dollar
              </p>
              <p>Pay as you go</p>
            </div>
            <div
              className={
                "w-relative inline-block m-0 p-0 align-top" + cardstyle
              }
            >
              <div className="pr-3 flex text-left">
                <div className="max-w-8 pr-6 flex-shrink-0 text-center">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                    alt=""
                    width="112"
                  />
                </div>
                <div className="min-w-card text-left">
                  <p className="font-semibold text-2xl m-0 text-left">
                    Scan and pay separately
                  </p>
                  <p className="pt-6 m-0 text-left">
                    Use cash or credit/debit card at the register.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "w-relative inline-block m-0 p-0 align-top" + cardstyle
              }
            >
              <div className="pr-3 flex text-left">
                <div className="max-w-8 pr-6 flex-shrink-0 text-center">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                    alt=""
                    width="112"
                  />
                </div>
                <div className="min-w-card text-left">
                  <p className="font-semibold text-2xl m-0 text-left">
                    Save payment in the app
                  </p>
                  <p className="pt-6 m-0 text-left">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="pt-10 pb-20 before:border-t-2 before:block"></hr>
          <div className="block p-0 m-0 pb-10 text-left">
            <div
              className={
                "pb-12 relative inline-block text-left align-top" + newStyle
              }
            >
              <p className="font-semibold text-3xl m-0 text-left">
                2<span className="text-xl">★</span> per dollar
              </p>
              <p>Add funds in the app</p>
            </div>
            <div
              className={
                "w-relative inline-block m-0 p-0 align-top" + cardstyle
              }
            >
              <div className="pr-3 flex text-left">
                <div className="max-w-8 pr-6 flex-shrink-0 text-center">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                    alt=""
                    width="112"
                  />
                </div>
                <div className="min-w-card text-left">
                  <p className="font-semibold text-2xl m-0 text-left">
                    Preload
                  </p>
                  <p className="pt-6 m-0 text-left">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "w-relative inline-block m-0 p-0 align-top" + cardstyle
              }
            >
              <div className="pr-3 flex text-left">
                <div className="max-w-8 pr-6 flex-shrink-0 text-center">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                    alt=""
                    width="112"
                  />
                </div>
                <div className="min-w-card text-left">
                  <p className="font-semibold text-2xl m-0 text-left">
                    Register your gift card{" "}
                  </p>
                  <p className="pt-6 m-0 text-left">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="pt-10 pb-20 before:border-t-2 before:block"></hr>
          <div className="block p-0 m-0 pb-10 text-left">
            <div
              className={
                "pb-12 relative inline-block text-left align-top" + newStyle
              }
            >
              <p className="font-semibold text-3xl m-0 text-left">
                Up to 3 <span className="text-xl">★</span> per dollar
              </p>
              <p>With Starbucks® Rewards Visa® Card</p>
            </div>
            <div
              className={
                "w-relative inline-block m-0 p-0 align-top" + cardstyle
              }
            >
              <div className="pr-3 flex text-left">
                <div className="max-w-8 pr-6 flex-shrink-0 text-center">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
                    alt=""
                    width="112"
                  />
                </div>
                <div className="min-w-card text-left">
                  <p className="font-semibold text-2xl m-0 text-left">
                    Earn Stars even faster
                  </p>
                  <p className="pt-6 m-0 text-left">
                    Earn Stars on all purchases you make with our
                    <a href={"#"}> credit card</a> opens in new window in and
                    outside of Starbucks. Earn 1 Star per $1 when you digitally
                    preload your Starbucks Card with your Starbucks® Rewards
                    Visa® Card, and earn 2 Stars per $1 when you pay with that
                    preloaded Starbucks Card.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsTab;
