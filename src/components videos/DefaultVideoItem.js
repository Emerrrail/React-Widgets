import React from "react";
// import $ from 'jquery';

const DefaultVideoItem = ({ onVideoSelect, video, doCategorySelect }) => {

    // $('.special.cards .image').hover(function () {
    //     $('.dimmer').toggleClass('active');
    // });

    return (
        // <div className="ui selection list">
        <div 
        className="default-video-item item" 
        onClick={() => {
            onVideoSelect(video);
            doCategorySelect();
            }} 
        style={{ cursor: 'pointer' }}>
            {/* <div className="blurring dimmable image"> */}
            {/* <div className="ui dimmer">
                        <div className="content">
                            <div className="ui inverted button">
                                Play
                            </div>
                        </div>
                    </div> */}
            <img width="100%" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            {/* </div> */}
            <div className="content" style={{ marginTop: "1rem" }}>
                <h4 className="header">
                    {video.snippet.title}
                </h4>
            </div>
        </div>
        // </div>
    );
};

export default DefaultVideoItem;