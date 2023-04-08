import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Model from '../Model/Model';
import { useGetAssignmentQuery } from '../../features/Assignment/AssignmentApi';
import { useGetQuizzesQuery } from '../../features/Quizzes/QuizzesApi';

const VideoItem = ({ videoDetails }) => {

    const [opened, setOpened] = useState(false);
    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };

    const { id, title, createdAt, url, description } = videoDetails || {};
    const { data: quizzes } = useGetQuizzesQuery(id);
    const { data: assignments, isLoading, isError, } = useGetAssignmentQuery(id);

    return (
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <iframe width="100%" class="aspect-video" src={url}
                title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

            <div>
                <h1 class="text-lg font-semibold tracking-tight text-slate-100">
                    {title}
                </h1>
                <h2 class=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                    {createdAt}
                </h2>



                <div class="flex gap-4">
                    <button
                        onClick={controlModal}
                        className={`px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary
                         ${assignments?.length === 0 && 'hidden'}`}>
                        এসাইনমেন্ট
                    </button>

                    <Link to={`/quiz/${id}`}
                        className={`px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary ${quizzes?.length === 0 && 'hidden'}`}>কুইজে
                        অংশগ্রহণ
                        করুন</Link>
                </div>
                <p class="mt-4 text-sm text-slate-400 leading-6">
                    {description}
                </p>
                <Model open={opened} control={controlModal} />
            </div>
        </div>
    );
};

export default VideoItem;