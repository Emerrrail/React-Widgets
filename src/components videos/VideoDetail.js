import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return null;
    }

    const videoBaseSrc = "https://www.youtube.com/embed/"
    return (
        <div>
        <div className="ui embed">
            <iframe title="video player" src={`${videoBaseSrc}${video.id.videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;