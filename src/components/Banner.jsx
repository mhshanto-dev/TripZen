import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat text-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-between">
        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-5 py-12 text-center sm:px-8 lg:max-w-5xl">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-sm">
            ✈️ Explore The World
          </span>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your <br />
            <span className="text-cyan-400">Next Adventure</span>
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg md:text-xl lg:text-2xl">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          {/* Buttons */}
          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold uppercase transition hover:bg-cyan-600 hover:shadow-lg">
              Explore Now
            </button>

            <button className="rounded-lg border border-white/50 bg-white/10 px-6 py-3 font-semibold uppercase backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
              View Destinations
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="w-full bg-black/40 px-4 py-5 backdrop-blur-md sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg md:flex-row md:items-center md:justify-between md:gap-0">
            {/* Location */}
            <div className="flex-1 px-3 py-2">
              <h3 className="text-sm font-semibold text-cyan-300">Location</h3>
              <p className="mt-1 text-xs text-white/80">Address, City or Zip</p>
            </div>

            <Separator
              className="hidden h-10 md:block"
              orientation="vertical"
            />

            <Separator className="block md:hidden" orientation="horizontal" />

            {/* Date */}
            <div className="flex-1 px-3 py-2">
              <h3 className="text-sm font-semibold text-cyan-300">
                Date / Duration
              </h3>
              <p className="mt-1 text-xs text-white/80">Anytime / 3 Days</p>
            </div>

            <Separator
              className="hidden h-10 md:block"
              orientation="vertical"
            />

            <Separator className="block md:hidden" orientation="horizontal" />

            {/* Budget */}
            <div className="flex-1 px-3 py-2">
              <h3 className="text-sm font-semibold text-cyan-300">Budget</h3>
              <p className="mt-1 text-xs text-white/80">$0 - $3000</p>
            </div>

            <Separator
              className="hidden h-10 md:block"
              orientation="vertical"
            />

            <Separator className="block md:hidden" orientation="horizontal" />

            {/* People */}
            <div className="flex-1 px-3 py-2">
              <h3 className="text-sm font-semibold text-cyan-300">People</h3>
              <p className="mt-1 text-xs text-white/80">5 - 10</p>
            </div>

            {/* Search Button */}
            <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold uppercase transition hover:bg-cyan-600 hover:shadow-lg md:ml-3">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
