"use client"
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({url}) => {
   const videoRef = useRef(null);

    const base = url.replace('.mp4', '');
    
    // Extract the filename
    const filename = base.split('/').pop();
    
    // Create the new URL
    const newUrl = `${base.substring(0, base.lastIndexOf('/'))}/hls/${filename}_mp4_master.m3u8`;
    
    const src=newUrl;

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