import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetVideosIdQuery } from '../../features/Videos/VideosApi';
import Loading from '../ui/Loading';
import EditVideoItem from '../EditVideoItem/EditVideoItem';
import Error from '../ui/Error';

const EditVideo = () => {
    const { id } = useParams();
    const { data: videos, isLoading, isError, error } = useGetVideosIdQuery(id);

    let content = null;

    if (isLoading) {
        content = <Loading></Loading>;

    } else if (!isLoading && isError) {
        content = <div className="">{error}</div>
    } else if (!isLoading && !isError && videos?.length === 0) {
        content = <Error message={"There are no videos"}></Error>;

    } else if (!isLoading && !isError && videos?.id) {
        content = <EditVideoItem editVideo={videos}></EditVideoItem>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default EditVideo;