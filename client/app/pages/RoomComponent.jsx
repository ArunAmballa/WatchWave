"use client"
import dynamic from 'next/dynamic'
import { useState } from 'react';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function RoomComponent(){{

    const [userStream, setUserStream] = useState();


    const callUser = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        setUserStream(stream);
    }
 
    return (
        <div>
            
            <div className='m-10'>
               <ReactPlayer
                   width="1280px"
                   height="720px"
                   url="https://watchwave.s3.us-west-1.amazonaws.com/4+Network+Protocols+-+%5B+telegram+%40Myhackersworld2+%5D.mp4"
                   controls={true}
               />

        <button type="button"
               onClick={callUser}
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10">Stream</button>
           <div className='m-10'>
               <ReactPlayer
                   width="1280px"
                   height="720px"
                   url={userStream}
                   controls={true}
               />
           </div>
           </div>
        </div>
    )
}}