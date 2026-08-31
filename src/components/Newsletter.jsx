const Newsletter = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-cyan-600 px-6 py-16 shadow-xl sm:rounded-3xl sm:px-24 xl:py-24 flex flex-col items-center text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get travel inspiration directly in your inbox
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cyan-100">
            Sign up for our newsletter and receive exclusive deals, travel tips, and early access to our best vacation packages.
          </p>
          <form className="mx-auto mt-10 flex w-full max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-xl border-0 bg-white/10 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder:text-white/60"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="flex-none rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-cyan-600 shadow-sm hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#77B5FE" />
                <stop offset="1" stopColor="#06b6d4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
