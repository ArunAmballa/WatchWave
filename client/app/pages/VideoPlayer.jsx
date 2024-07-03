"use client"
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
   const videoRef = useRef(null);
   const src = "https://watchwave.s3.us-west-1.amazonaws.com/4+Network+Protocols+-+%5B+telegram+%40Myhackersworld2+%5D.mp4";

   useEffect(() => {
       const video = videoRef.current;

       if (Hls.isSupported()) {
           console.log("HLS is supported");
               console.log(src);
               const hls = new Hls();
               hls.attachMedia(video);
               hls.loadSource(src);
               hls.on(Hls.Events.MANIFEST_PARSED, function () {
                   console.log("playing video");
                   video.play();
               });
       } else {
           console.log('HLS is not supported');
           // Play from the original video file
       }
   }, [src]);

   return <video ref={videoRef} controls />;
};

export default VideoPlayer;