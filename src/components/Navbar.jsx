"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-2 py-2">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#222222] px-5 shadow-lg">
        <header className="flex h-14 items-center justify-between">

        
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#1683ff]">hire</span>
            <span className="text-white">l</span>
            <span className="text-[#ff8a00]">oop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/jobs"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Browse Jobs
            </Link>

            <Link
              href="/company"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Company
            </Link>

            <Link
              href="/pricing"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Pricing
            </Link>

            <Link
              href="/pricing"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Pricing
            </Link>

            <div className="h-5 w-px bg-gray-600" />

            <Link
              href="/auth/login"
              className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Sign In
            </Link>

            <Button
              as={Link}
              href="/auth/register"
              className="rounded-lg bg-indigo-500 px-5 text-sm font-medium text-white hover:bg-indigo-600"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-700 py-4 md:hidden">
            <div className="flex flex-col gap-1">

              <Link
                href="/jobs"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Browse Jobs
              </Link>

              <Link
                href="/company"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Company
              </Link>

              <Link
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Pricing
              </Link>

              <div className="my-2 h-px bg-gray-700" />

              <Link
                href="/auth/login"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-indigo-400 hover:bg-gray-800"
              >
                Sign In
              </Link>

              <Button
                as={Link}
                href="/auth/register"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Get Started
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;