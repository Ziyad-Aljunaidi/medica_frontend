import Head from "next/head";
import Image from "next/image";
//import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import Carousel from "../components/Carousel";
// import Search from "../components/Search";
//import 'tw-elements';
import { useRouter } from 'next/router'


export default function Results() {

   const [isLoading, setIsLoading] = useState(true)
   const [isDoctorData, setDoctorData] = useState(null)

   useEffect(() => {
     async function fetchDoctorData(){
       const response = await fetch(`http://localhost:5000/medica72-5933c/us-central1/api/doctor?speciality=Child Health`)
       const data = await response.json()
       console.log(data)
       setDoctorData(data)
       setIsLoading(false)
 
      }
      fetchDoctorData()
   },[])


   if(isLoading){
     return <h2>Loading...</h2>
   }
   
   return(
     <div>
       <h2>Doctors</h2>
       <h2>{isDoctorData[0].name}</h2>
       <h2>{isDoctorData[1].name}</h2>
       <h2>{isDoctorData[2].name}</h2>
       <h2>{isDoctorData[3].name}</h2>
       <h2>{isDoctorData[4].name}</h2>
       <h2>{isDoctorData[5].name}</h2>
       <h2>{isDoctorData[6].name}</h2>
       <h2>{isDoctorData[7].name}</h2>
       <h2>{isDoctorData[8].name}</h2>
       <h2>{isDoctorData[9].name}</h2>
     </div>
   )
}
