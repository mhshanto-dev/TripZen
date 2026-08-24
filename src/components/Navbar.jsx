"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Get current session
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    closeMenu();
    router.push("/");
    router.refresh();
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
          {user ? (
            <>
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <Avatar size="sm">
                    <Avatar.Image
                      src={user.image || undefined}
                      alt={user.name || "User"}
                    />
                    <Avatar.Fallback>
                      {user.name?.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>
                  <span>Profile</span>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-lg border border-red-500 px-4 py-2 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
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

        {/* Logged-in Avatar (shortcut, menu closed) */}
        {user && !isOpen && (
          <Link href="/profile" className="ml-auto mr-2">
            <Avatar size="sm">
              <Avatar.Image
                src={user.image || undefined}
                alt={user.name || "User"}
              />
              <Avatar.Fallback>
                {user.name?.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
          </Link>
        )}

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

            {/* ================= MOBILE AUTH ================= */}
            {user ? (
              <>
                <li>
                  <Link
                    href="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-indigo-50"
                  >
                    <Avatar size="sm">
                      <Avatar.Image
                        src={user.image || undefined}
                        alt={user.name || "User"}
                      />
                      <Avatar.Fallback>
                        {user.name?.charAt(0).toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-800">{user.name}</p>
                      <p className="text-sm text-slate-500">Profile</p>
                    </div>
                  </Link>
                </li>

                <li className="mt-2 border-t border-slate-200 pt-3">
                  <button
                    type="button"
                    onClick={logout}
                    className="w-full rounded-lg border border-red-500 px-5 py-2.5 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
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
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
