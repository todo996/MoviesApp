const Banner = () => {
  return (
    <section className="mt-8 w-full px-4 pb-10 sm:mt-10 sm:px-6 sm:pb-14 lg:mt-14 lg:px-10 lg:pb-20">
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
        <div className="h-[420px] sm:h-[520px] lg:h-[720px]">
          <img
            src="/banner.jpg"
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* content */}
        <div className="absolute bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 flex-col items-center text-center text-white sm:bottom-10 sm:w-[85%] lg:bottom-16 lg:w-[70%]">
          <h2 className="text-2xl font-black sm:text-4xl lg:text-6xl">
            Avengers: Endgame
          </h2>

          <p className="mt-3 text-sm font-light leading-6 text-white/80 sm:mt-4 sm:text-base lg:mt-5 lg:text-lg lg:leading-8">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos&apos;s actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6">
            <button className="h-11 min-w-[132px] cursor-pointer rounded-md bg-red-600 px-5 text-sm font-medium transition hover:bg-red-500 sm:h-12 sm:min-w-[150px] sm:text-base">
              <i className="fa-solid fa-play pr-2"></i>
              Play Now
            </button>

            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-black/60 transition hover:bg-black/80 sm:h-11 sm:w-11">
              <i className="fa-solid fa-plus"></i>
            </button>

            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-black/60 transition hover:bg-black/80 sm:h-11 sm:w-11">
              <i className="fa-regular fa-thumbs-up"></i>
            </button>

            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-black/60 transition hover:bg-black/80 sm:h-11 sm:w-11">
              <i className="fa-solid fa-volume-high"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;