import React from "react";
import DefaultVideoItem from "./DefaultVideoItem";
import Carousel from 'react-grid-carousel'

const PopularVideosList = ({ onCategorySelect, onVideoSelect, musicVideos, petsVideos }) => {
    if (!musicVideos) {
        return <div>Loading...</div>;
    }

    const musicCategorySelect = () => {
        onCategorySelect(musicVideos);
    };

    const petsCategorySelect = () => {
        onCategorySelect(petsVideos);
    };


    return (
        <div>
            <h2 className="ui header">
                Top Music Videos
            </h2>
            <div>
                <Carousel cols={4} rows={1} gap={5} loop>
                    {musicVideos.map((video) => {
                        return (
                            <Carousel.Item key={video.id.videoId}>
                                <DefaultVideoItem onVideoSelect={onVideoSelect} video={video} doCategorySelect={musicCategorySelect} />
                            </Carousel.Item>
                        )
                    })
                    }
                </Carousel>
            </div>
            <h2 className="ui header">
                Top Pets and Animals Videos
            </h2>
            <Carousel cols={4} rows={1} gap={5} loop>
                {petsVideos.map((video) => {
                    return (
                        <Carousel.Item key={video.id.videoId}>
                            <DefaultVideoItem onVideoSelect={onVideoSelect} video={video} doCategorySelect={petsCategorySelect}/>
                        </Carousel.Item>
                    )
                })
                }
            </Carousel>
        </div>
    );

};

export default PopularVideosList;