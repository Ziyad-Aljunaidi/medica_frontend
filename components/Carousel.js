import React, { useState, useEffect } from "react";
import Image from "next/image";
// import "daisyui";

export default function Carousel() {
  /*
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
  );*/

  return (
    <div className="carousel w-full bg-red-200">
      <div id="slide1" className="carousel-item  relative w-full">
        <div className="flex justify-center m-8">
          <a href="/">
          <div className="flex justify-center rounded-md">
            <img src="https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2" className="flex justify-center w-3/4 rounded-md m-8" />
            
          </div></a>

          <div className="flex justify-center">
            <img src="https://api.lorem.space/image/car?w=800&h=400&hash=8B7BCDC2" className="flex justify-center w-3/4 rounded-md m-8" />
          </div>
          <div className="flex justify-center">
            <img src="https://api.lorem.space/image/car?w=800&h=400&hash=8B7BCDC2" className="flex justify-center w-3/4 rounded-md m-8" />
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle opacity-50">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}
