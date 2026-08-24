import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-slate-400 sm:px-8 md:px-16 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Brand Section */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-block text-4xl font-black tracking-[0.2em] text-cyan-400 transition hover:text-cyan-300 sm:text-5xl md:text-6xl"
          >
            TRIPZEN
          </Link>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
            Discover amazing destinations and create unforgettable memories.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-white">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm leading-6 text-slate-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form className="flex overflow-hidden rounded-lg border border-slate-700 bg-slate-900 focus-within:border-cyan-400">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="px-4 text-lg font-bold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                aria-label="Subscribe"
              >
                ↗
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-white">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-cyan-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="transition hover:text-cyan-400"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="transition hover:text-cyan-400"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="transition hover:text-cyan-400"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-white">
              SUPPORT
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="transition hover:text-cyan-400">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="/terms" className="transition hover:text-cyan-400">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-white">
              CONTACT US
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+8807869011622"
                  className="transition hover:text-cyan-400"
                >
                  +880 786 901 1622
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@tripzen.com"
                  className="break-all transition hover:text-cyan-400"
                >
                  info@tripzen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © 2026 TripZen. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              X
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              ◎
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
