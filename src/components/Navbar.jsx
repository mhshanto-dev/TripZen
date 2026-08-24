"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/tripzen.png"
            width={110}
            height={60}
            alt="TripZen Logo"
            className="h-auto w-20 sm:w-24"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {/* Left Menu */}
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/destinations"
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                My Bookings
              </Link>
            </li>
          </ul>

          {/* Right Menu */}
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/profile"
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="rounded-lg border border-indigo-600 px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                href="/signUp"
                className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/destinations"
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 transition hover:text-indigo-600"
              >
                Profile
              </Link>
            </li>

            <li className="flex gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-indigo-600 px-5 py-2 font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/signUp"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
