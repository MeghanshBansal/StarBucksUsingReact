function Banner() {
  return (
    <>
      <div className="mb-32 box-border none">
        <div className="bg-bannercolor bg-no-repeat flex box-border">
          <div className="clear-both w-full flex box-border">
            <div className="pb-supermax float-left box-border">
              <div className="w-full justify-center items-start flex box-border">
                <div className="min-w-half max-w-fourtimes px-10 py-12 align-center box-border">
                  <p className="text-5xl font-semibold m-0 align-left">
                    FREE COFFEE<br></br>IS A TAP AWAY
                  </p>
                  <div className="py-6 text-2xl align-left">
                    <p>Join now to start earning Rewards.</p>
                  </div>
                  <div>
                    <a
                      className="px-4 py-2 min-w-minimum min-h-minimum bg-bannerlink text-white align-center  rounded-full inline-block border-solid border-1"
                      href="{#}"
                    >
                      Join Now
                    </a>
                    <div className="mt-3 text-2xl">
                      <span>
                        Or{' '}
                        <a className="text-left underline hover:no-underline" href={"#"}>join in the app</a>
                        {" "}for the best experience
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
