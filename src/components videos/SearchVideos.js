import React, { useEffect, useState } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./SearchBar";
import PopularVideosList from "./PopularVideosList";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const SearchVideos = () => {   //1. 把function傳進SearchBar
    const [videos, setVideos] = useState([]); //預設是空的array，之後才可以填進array data
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 1200px)").matches);
    const [musicVideos, setMusicVideos] = useState([]);
    const [petsVideos, setPetsVideos] = useState([]);
    const [clearDefault, setClearDefault] = useState(false);

    useEffect(() => {
        const getMusicVideos = async () => {
            const response = await youtube.get('/videos', {
                params: {
                    chart: 'mostPopular',
                    videoCategoryId: 10,
                    maxResults: 12
                }
            });

            const tempResult = response.data.items;
            const changeVideoId = tempResult.map((result) => {
                const temp = result.id;
                delete result.id;
                result.id = {};
                result.id.videoId = temp;
                return result;
            });

            setMusicVideos(changeVideoId);
        };
        getMusicVideos();



        const getPetsVideos = async () => {
            const petsResponse = await youtube.get('/videos', {
                params: {
                    chart: 'mostPopular',
                    videoCategoryId: 15,
                    maxResults: 12
                }
            });

            const tempResult = petsResponse.data.items;
            const changeVideoId = tempResult.map((result) => {
                const temp = result.id;
                delete result.id;
                result.id = {};
                result.id.videoId = temp;
                return result;
            });

            setPetsVideos(changeVideoId);
        };
        getPetsVideos();

        window.matchMedia("(min-width: 1200px)").addEventListener(
            'change', e => {
                setMatches(e.matches);
            }
        );

    }, []);



    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                maxResults: 7,
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(null);
        setClearDefault(true);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
        setClearDefault(true);
    };

    const onCategorySelect = (videos) => {
        setVideos(videos);
    };




    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />

            <div className={selectedVideo ? 'ui grid' : 'ui'} style={{ justifyContent: "center" }}>
                {matches ?
                    (
                        <div className="ui row">
                            <div className="eleven wide column" style={{ padding: '0.5em' }}>
                                <VideoDetail video={selectedVideo} />
                            </div>
                            <div className={selectedVideo ? 'five wide column' : 'row'}>
                                <VideoList
                                    onVideoSelect={onVideoSelect}
                                    selectedVideo={selectedVideo}
                                    videos={videos}
                                />
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            <div className="row" style={{ padding: '0.5em' }}>
                                <VideoDetail video={selectedVideo} />
                            </div>
                            <div className="row">
                                <VideoList
                                    onVideoSelect={onVideoSelect}
                                    selectedVideo={selectedVideo}
                                    videos={videos}
                                />
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="ui">
                {(clearDefault === false) ?
                    <PopularVideosList
                        onCategorySelect={onCategorySelect}
                        onVideoSelect={onVideoSelect}
                        musicVideos={musicVideos}
                        petsVideos={petsVideos}
                    />
                    : null}
            </div>
        </div>
    );
};

export default SearchVideos;