import React from 'react';
import Video from '../Videos/Video';
import VideoList from '../VideoList/VideoList';

const CoursePlayerVideo = () => {


    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-7xl px-5 lg:px-0">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">

                    <Video></Video>
                    <VideoList></VideoList>
                </div>
            </div>
        </section>
    );
};

export default CoursePlayerVideo;