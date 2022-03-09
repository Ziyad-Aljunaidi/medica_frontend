import React, { useState, useEffect } from "react";
import Image from "next/image";
import "daisyui";

export default function Carousel() {
  return (
    <div className="carousel w-full bg-blue-100">
      <div id="slide1" className="carousel-item justify-center relative w-full">
        <div className="flex justify-center">
          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center rounded-md m-5">
              <img
                src="carsouels/Child Health.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
              
            </div>
          </a>

          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center rounded-md m-5">
              <img
                src="carsouels/Neurology.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
            </div>
          </a>

          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center flex justify-center rounded-md m-5">
              <img
                src="carsouels/Dermatology.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
            </div>
          </a>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle opacity-50">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle opacity-50">
            ❯
          </a>
        </div>

      </div>

      <div id="slide2" className="carousel-item justify-center relative w-full">
      <div className="flex justify-center">
          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center rounded-md m-5">
              <img
                src="carsouels/Orthopedic Surgery.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
              
            </div>
          </a>

          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center rounded-md m-5">
              <img
                src="carsouels/Ophthalmology.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
            </div>
          </a>

          <a href="/results?speciality=Ophthalmology">
            <div className="flex justify-center flex justify-center rounded-md m-5">
              <img
                src="carsouels/Otolaryngology.jpg"
                className="flex justify-center w-full rounded-md m-2"
              />
            </div>
          </a>
        </div>

        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle opacity-50">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle opacity-50">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
