"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      {/* ================= DESKTOP ================= */}
      <div className="mx-auto hidden min-h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 lg:grid xl:px-8">
        {/* Logo - LEFT */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/tripzen.png"
            width={110}
            height={60}
            alt="TripZen Logo"
            className="h-auto w-20 xl:w-24"
          />
        </Link>

        {/* Main Navigation - CENTER */}
        <ul className="flex items-center justify-center gap-5 xl:gap-8">
          <li>
            <Link
              href="/"
              className="whitespace-nowrap font-medium text-slate-700 transition hover:text-indigo-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className="whitespace-nowrap font-medium text-slate-700 transition hover:text-indigo-600"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/my-bookings"
              className="whitespace-nowrap font-medium text-slate-700 transition hover:text-indigo-600"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link
              href="/add-destination"
              className="whitespace-nowrap font-medium text-slate-700 transition hover:text-indigo-600"
            >
              Add Destination
            </Link>
          </li>
        </ul>

        {/* Right Menu - RIGHT */}
        <ul className="flex items-center justify-end gap-3">
          <li>
            <Link
              href="/profile"
              className="whitespace-nowrap font-medium text-slate-700 transition hover:text-indigo-600"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="whitespace-nowrap rounded-lg border border-indigo-600 px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/signUp"
              className="whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="flex min-h-20 items-center justify-between px-4 sm:px-6 lg:hidden">
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

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
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
        <div className="border-t border-slate-200 bg-white shadow-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/destinations"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/add-destination"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Add Destination
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Profile
              </Link>
            </li>

            <li className="mt-3 flex gap-3 border-t border-slate-200 pt-5">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex-1 rounded-lg border border-indigo-600 px-5 py-2.5 text-center font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/signUp"
                onClick={closeMenu}
                className="flex-1 rounded-lg bg-indigo-600 px-5 py-2.5 text-center font-medium text-white hover:bg-indigo-700"
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
