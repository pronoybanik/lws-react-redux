import React from 'react';
import { useGetAllVideosQuery } from '../../features/Videos/VideosApi';
import VideoListItem from './VideoListItem';
import Loading from '../ui/Loading';
import Error from '../ui/Error';

const VideoList = () => {
    const { data: allVideos, isLoading, isError, error } = useGetAllVideosQuery();

    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }
    if (!isLoading && !isError && allVideos.length === 0) {
        content = <Error message={"There are no Video"}></Error>
    }
    if (!isLoading && !isError && allVideos.length > 0) {
        content = allVideos.map(video => <VideoListItem key={video.id} videoListDetails={video}></VideoListItem>)
    }

    return (
        <div>
            <div
                class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">

                   {content}

            </div>
        </div>
    );
};

export default VideoList;