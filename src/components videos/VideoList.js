import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ onVideoSelect, videos }) => {

    if (!videos) {
        return null;
    };



    return (
        <div className="ui middle aligned selection list">
            {videos.map((video) => {
                return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
            })}
        </div>
    );
}



export default VideoList;