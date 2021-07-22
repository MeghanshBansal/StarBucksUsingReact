import React from "react";
function TermsAndCondition() {
  return (
    <>
      <div className="mb-20 bg-gray-100 mx-auto max-w-1440">
        <div className="px-10 py-20 block m-0 text-left">
          <p className="pb-12 m-0 text-sm">
            At participating stores. Restrictions apply.
          </p>
          <div className="flex">
            <div className="pb-12 m-0 pr-4 text-left align-top flex-1">
              <p className="uppercase font-bold pb-6 text-lg text-gray-500">
                EARNING STARS
              </p>
              <p className="pb-6 text-sm">
                Stars cannot be earned on purchases of alcohol, Starbucks Cards
                or Starbucks Card reloads.
              </p>
              <p className="pb-6 text-sm">
                Earn 1 Star per $1 spent when you scan your member barcode in
                the app, then pay with cash, credit/debit cards or mobile
                wallets at participating stores. You can also earn 1 Star per $1
                spent when you link a payment method and pay directly through
                the app.
              </p>
              <p className="pb-6 text-sm">
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks Card in the app. You can also earn 2 Stars per
                $1 spent when you pay in-person at a participating store with
                your registered physical Starbucks Card or scan your member
                barcode in the app, and then use any physical Starbucks Card
                (regardless of whether it is registered) to complete the
                purchase.
              </p>
              <p className="uppercase font-bold pb-6 text-lg text-gray-500">
                BENIFITS
              </p>
              <p className="pb-6 text-sm">
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward, you must have made at least one
                Star-earning transaction.
              </p>
            </div>
            <div className="pb-12 pl-4 m-0 text-left align-top flex-1">
              <p className="uppercase font-bold pb-6 text-lg text-gray-500">
                Terms of Use{" "}
              </p>
              <p className="pb-6 text-sm">For full program details visit</p>
              <a className="underline text-green-600">
                starbucks.com/rewards/terms
              </a>
              <p className="pb-6 text-sm">
                * Earn 1 Star per $1 when digitally loading your Starbucks Card
                with your Starbucks® Rewards Visa® Card: See your Card Rewards
                Program Agreement for more details.
              </p>
              <p className="pb-6 text-sm">
                Starbucks® Rewards benefits are available at participating
                Starbucks stores. Not all stores have the ability to honor
                Rewards at this time. Visit the{" "}
                <a className="underline text-green-600">
                  Starbucks Store Locator
                </a>{" "}
                and search for locations honoring “Redeem Rewards”.
              </p>
              <p className="pb-6 text-sm">
                Deposit and credit card products provided by JPMorgan Chase
                Bank, N.A. Member FDIC
              </p>
              <p className="uppercase font-bold pb-6 text-lg text-gray-500">
                Redeeming Rewards
              </p>
              <p className="pb-6 text-sm">
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. Not all stores honor tiered Rewards. Select
                stores redeem 150 Stars for free food or drink items only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(TermsAndCondition);
