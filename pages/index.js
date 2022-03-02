import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="py-20" style={{background: "linear-gradient(90deg, #EEEEEE 0%, #b20a2c 100%)", height:"600px"}}>
      <div className="container mx-auto px-6 flex flex-col 
                    items-center justify-cente">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Healthcare for better life
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
        book your doctor appointment now
        </h3>

        <div className="md:order-2 r w-6/12">
      <div className="hidden relative mr-3 md:mr-0 md:block">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" className="mr-3 py-5 px-4 block p-3 pl-10 w-full  text-gray-200 bg-gray-50 rounded-full border border-white sm:text-sm" placeholder="Search..."/>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-400" aria-controls="mobile-menu-3" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </div>
      </div>
    </div>
  );
}
