import React from "react";

function Footer() {
  return (
    <>
      <div className="flex items-start justify-start p-10">
        <div className="flex-col items-center justify-between pr-10">
          <p className="font-semibold text-2xl text-gray-800 pb-5">About Us</p>
          <p className="pb-7 text-gray-500">
            <a href="#">Our Heritage</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Our Coffee</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Story and News</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Investor Relations</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Policies and Standards</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Custormer Service</a>
          </p>
        </div>

        <div className="flex-col items-center justify-between max-w-sm pr-10">
          <p className="font-semibold text-2xl text-gray-800 pb-5">Careers</p>
          <p className="pb-7 text-gray-500">
            <a href="#">Culture and Values</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Inclusion, Diversity and Equity</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Collage Achievement Plans</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">U.S. Carrers</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">International Carrers</a>
          </p>
        </div>

        <div className="flex-col items-center justify-between pr-10">
          <p className="font-semibold text-2xl text-gray-800 pb-5">Social Impact</p>
          <p className="pb-7 text-gray-500">
            <a href="#">Ethical Sourcing</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Leading in Sustainability</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Strengthening in Comunities</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Creating Opportunities</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Global Social Impact Report</a>
          </p>
        </div>

        <div className="flex-col items-center justify-between pr-10">
          <p className="font-semibold text-2xl text-gray-800 pb-5">
            For Business Partners
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Landlord Support Center</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Suppliers</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Corporate Gift Card Sales</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Offices and Food Service Coffee</a>
          </p>
        </div>

        <div className="flex-col items-center justify-between pr-10">
          <p className="font-semibold text-2xl text-gray-800 pb-5">
            Order and Pickup
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Order on the App</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Order on the Web</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Delivery</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Order and Pickup Options</a>
          </p>
          <p className="pb-7 text-gray-500">
            <a href="#">Explore and Find Coffee for Home</a>
          </p>
        </div>
      </div>
      <hr className="py-2 mx-10 border-gray-300" />
      <div className="flex items-center p-10">
        <img
          className="rounded-full mr-3"
          src="data:image/png;base64,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"
          height="3%"
          width="3%"
        />
        <img
          className="rounded-full mr-3"
          src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"
          height="4.2%"
          width="4.2%"
        />

        <img
          className="rounded-full mr-3"
          src="data:image/png;base64,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"
          height="3.2%"
          width="3.2%"
        />

        <img
          className="rounded-full mr-3"
          src="data:image/png;base64,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"
          height="5%"
          width="5%"
        />

        <img
          className="rounded-full mr-3"
          src="data:image/png;base64,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"
          height="3.7%"
          width="3.7%"
        />

        <img
          className="rounded-full mr-3"
          src="data:image/png;base64,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"
          height="4.3%"
          width="4.3%"
        />
      </div>
      <p className="px-10 text-gray-800 font-semibold">
        <a href="#">Privacy Policy</a>{"   "}|{"    "}
        <a href="#">Terms of Use</a>{"   "}|{"    "}
        <a>CA Supply Chain Act</a>{"   "}|{"    "}
        <a>Submit Your Idea</a>{"   "}|{"    "}
        <a>Cookie Preferences</a>
      </p>
      <p className="px-10 pt-5 pb-7">
        © 2021 Starbucks Coffee Company. All rights reserved.
      </p>
    </>
  );
}

export default React.memo(Footer);
