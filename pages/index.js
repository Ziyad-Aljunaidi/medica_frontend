import Head from "next/head";
import Image from "next/image";
//import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, { useState } from "react";
import Search from "../components/Search";

export default function Home() {
  const [showMe, setShowMe] = useState(false);

  function toggleSpecailtyMenu() {
    setShowMe(!showMe);
    if (showMe) {
      document.getElementById("dropdownSmallSpecialty").className =
        "hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600";
    } else {
      document.getElementById("dropdownSmallSpecialty").className =
        "z-10 w-44 mr-10  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600";
    }
  }

  return (
    <div
      className="py-20 w-full"
      style={{
        background: "linear-gradient(90deg, #EEEEEE 0%, #b20a2c 100%)",
        height: "600px",
      }}
    >
      <div
        className="container mx-auto px-6 flex flex-col 
                    items-center justify-center"
      >
        <h2 className="text-4xl font-bold mb-2 text-white">
          Healthcare for better life
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          book your doctor appointment now
        </h3>
        <Search/>
          
      </div>
      
    </div>
  );
}
