import React, { useState, useEffect } from "react";
import Image from "next/image";
import 'daisyui';

export default function Carousel() {
  /*
  setTimeout(function () {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove("translate-x-full");
    nextSlide.classList.add("translate-x-0");
  }, 3000);
  */
  return (
    <>
    <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
          className="w-full"
        />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
          className="w-full"
        />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
          className="w-full"
        />
      </div>
      <div id="item4" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
          className="w-full"
        />
      </div>
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#item1" className="btn btn-xs">
        1
      </a>
      <a href="#item2" className="btn btn-xs">
        2
      </a>
      <a href="#item3" className="btn btn-xs">
        3
      </a>
      <a href="#item4" className="btn btn-xs">
        4
      </a>
    </div>
  </>
  );
  

  /*
  return (
    <>
      <div id="controls-carousel" className="relative">
        <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          <div
            className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
            data-carousel-item=""
          >
            <Image
              src="/carousel-1.svg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              layout="fill"
              alt="..."
            />
          </div>

          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full"
            data-carousel-item=""
          >
            <Image
              src="/carousel-2.svg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              layout="fill"
              alt="..."
            />
          </div>

          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0"
            data-carousel-item="active"
          >
            <Image
              src="/carousel-3.svg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              layout="fill"
              alt="..."
            />
          </div>

          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full"
            data-carousel-item=""
          >
            <Image
              src="/carousel-4.svg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              layout="fill"
              alt="..."
            />
          </div>

          <div
            className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
            data-carousel-item=""
          >
            <Image
              src="/carousel-5.svg"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              layout="fill"
              alt="..."
            />
          </div>
        </div>

        <button
          type="button"
          className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
  */
}
