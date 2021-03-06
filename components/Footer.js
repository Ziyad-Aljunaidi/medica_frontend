import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-zinc-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.medica72.com"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src="/medica-logo.svg"
              width={200}
              height={60}
              className="mr-3 h-8"
              alt="Medica Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://www.medica72.com" className="hover:underline">
            Medica™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
