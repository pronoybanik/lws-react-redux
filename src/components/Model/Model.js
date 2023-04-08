import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetVideosIdQuery } from '../../features/Videos/VideosApi';
import { useGetAssignmentIdQuery, useGetAssignmentQuery } from '../../features/Assignment/AssignmentApi';
import { useAddAssignmentMarkMutation, useStudentAddAssignmentMarkMutation } from '../../features/assignmentMark/AssignmentMarkApi';

const Model = ({ open, control }) => {
    const [assignment, setAssainment] = useState({});
    const [git, setGit] = useState('');
    const [studentAddAssignmentMark, { isSuccess }] = useStudentAddAssignmentMarkMutation();
    const { id } = useParams();
    // console.log(id);
    const { data: video } = useGetVideosIdQuery(id);
    // console.log(video);
    const { id: vidoeid, } = video || {};
    const { data: assignents } = useGetAssignmentQuery(vidoeid);
    // const { data: assignents } = useGetAssignmentIdQuery(vidoeid);
    // console.log(assignents);
    const { title: assignmentTitle } = assignment || {};
    // console.log(assignmentTitle);


    const { user } = useSelector(state => state.auth);
    const { name, id: studentId } = user || {};

    useEffect(() => {
        assignents?.map(a => setAssainment(a));
    }, [assignents])
    console.log(assignment);

    useEffect(() => {
        if (isSuccess) {
            control()
            alert('Assinment Sumit SuccessFully')
        }
    }, [isSuccess])

    // const [gitLink, setGitLink] = useState('');


    const handleAssignment = (e) => {
        e.preventDefault();
        // console.log(gitLink);
        studentAddAssignmentMark({
            student_id: studentId,
            student_name: name,
            title: assignmentTitle,
            createdAt: new Date(),
            totalMark: 100,
            mark: 0,
            repo_link: git,
            status: "pending"
        })
    }

    return (
        open && (
            <>
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-2xl font-semiblod text-gray-900">
                        Tasks:<span>{assignment?.title}</span>
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleAssignment}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    Git
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-red-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Git-Ripo"
                                    value={git}
                                    onChange={(e) => setGit(e.target.value)}

                                // value={gitLink}
                                // onChange={(e) => setGitLink(e.target.value)}

                                />
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                Submit
                            </button>
                        </div>


                    </form>
                </div>
            </>
        )
    );
};

export default Model;