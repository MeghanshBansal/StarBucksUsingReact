import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-bannerImage py-20 h-2x w-full flex justify-start items-center align-middle">
        <div className="min-w-half max-w-400 px-10 py-12 text-left">
          <p className="font-semibold text-3xl m-0">
            FREE COFFEE<br></br>IS A TAP AWAY
          </p>
          <p className="pt-6 text-xl">Join now to start earning Rewards.</p>
          <a className="mt-12 text-white min-w-minimum min-h-minimum bg-bannerlink inline-block border-solid border-2 rounded-small font-semibold px-4 py-2 align-middle justify-center">
            Join now
          </a>
          <p className="mt-6 text-xl min-h-24 min-w-24">
            Or <a className="underline">join the app</a> for the best experience
          </p>
        </div>
      </div>
    </>
  );
}

export default React.memo(Banner);
