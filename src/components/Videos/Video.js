import React from 'react';
import { useGetVideosQuery } from '../../features/Videos/VideosApi';
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import VideoItem from './VideoItem';
import { useParams } from 'react-router-dom';

const Video = () => {
    const { id } = useParams();
    const { data: videos, isLoading, isError, error } = useGetVideosQuery(id);


    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }
    if (!isLoading && !isError && videos.length === 0) {
        content = <Error message={"There are no Video"}></Error>
    }
    if (!isLoading && !isError && videos.length > 0) {
        content = videos.map(video => <VideoItem key={video.id} videoDetails={video}></VideoItem>)
    }


    return <>{content}</>;

};

export default Video;