"use client"
import { useVideosStore } from "../zustand/useVideoStore"
import VideoPlayer from "../pages/VideoPlayer";

export default function SearchHome(){

    const {searchedVideos}=useVideosStore();

    if (searchedVideos.length===0){
        return <div> Please Search To Get Videos</div>
    }

    return (
        
        
         <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
                {searchedVideos.map(video => (
                    <div key={video._id}
                        className="border rounded-md overflow-hidden">
                        <div>
                             <VideoPlayer url={video._source.url}/>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{video._source.title}</h2>
                            <p className="text-gray-700">Author - {video._source.author}</p>
                            <p className="text-gray-700">{video._source.description}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    )
}