"use client";

import Link from "next/link";

import { LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block text-3xl font-bold">
              <span className="text-[#1683ff]">hire</span>
              <span className="text-white">l</span>
              <span className="text-[#ff8a00]">oop</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              The AI-native career platform. Built for people
              who take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-[#1877F2] hover:text-white"
              >
                <LogoFacebook size={18} />
              </Link>

 <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-[#1877F2] hover:text-white"
              >
                <LogoGithub size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-[#E4405F] hover:text-white"
              >
                <LogoLinkedin size={18} />
              </Link>

             

           

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-indigo-400">
              Product
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/jobs"
                  className="transition hover:text-white"
                >
                  Job Discovery
                </Link>
              </li>

              <li>
                <Link
                  href="/worker-ai"
                  className="transition hover:text-white"
                >
                  Worker AI
                </Link>
              </li>

              <li>
                <Link
                  href="/companies"
                  className="transition hover:text-white"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  href="/salary-data"
                  className="transition hover:text-white"
                >
                  Salary Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-indigo-400">
              Resources
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/career-library"
                  className="transition hover:text-white"
                >
                  Career Library
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/brand"
                  className="transition hover:text-white"
                >
                  Brand Guideline
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} HireLoop. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Policy
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;