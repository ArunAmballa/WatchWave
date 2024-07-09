"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

const NavBar = () => {
   const router = useRouter()

   const goToUpload = () => {
       router.push('/upload')
   }
   return (
       <div>
           <nav className="bg-white border-gray-200 dark:bg-gray-900">

               <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                   <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WatchWave</span>
                   <div>
                     <SearchBar></SearchBar>
                   </div>
                  
               </div>
           </nav>
       </div>
   )
}

export default NavBar