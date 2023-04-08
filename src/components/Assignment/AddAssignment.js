import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddAssignmentMutation } from '../../features/Assignment/AssignmentApi';
import { useGetAllVideosQuery } from '../../features/Videos/VideosApi';

const AddAssignment = () => {
    const navigate = useNavigate();
    const [addAssignment] = useAddAssignmentMutation();
    const { data: allVideos } = useGetAllVideosQuery();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const mark = e.target.mark.value;
        const videoTitle = e.target.videoTitle.value;
        const assignmentAndId = e.target.addAssignment.value;

        // console.log("output", title, mark, videoTitle, assignmentAndId);

        addAssignment({
            title: title,
            video_id: assignmentAndId,
            video_title: videoTitle,
            totalMark: mark,
        })

        alert('Assignment Add Successfully');
        navigate('/admin/assignment');
    }

    return (
        <section id='section'>
            <h1 className='text-2xl'>ADD Assignment</h1>
            <br />
            <form onSubmit={handleSubmit} className='inputField'>
                <div className=''>
                    <div>
                        <label for="name" >Assignment Title</label>
                        <input id="name" name="title" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Title"
                        />
                    </div>
                    <br />
                    <div>
                        <label for="name" >video Title</label>
                        <input id="name" name="videoTitle" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Description"

                        />
                    </div>
                    <br />
                    <div>

                        <label for="lws-projectName">Add Assignment</label>
                        <select id="lws-projectName"
                            name="addAssignment"
                            class="login-input rounded-t-md"
                            required

                        >
                            <option value="" hidden selected>Select Project</option>

                            {allVideos?.map(video => <option key={video.id} value={video.id}>{video.title}</option>)}
                        </select>
                    </div>
                    <br />
                    <div>
                        <label for="name" >Mark</label>
                        <input id="name" name="mark" type="number" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Marks"

                        />
                    </div>
                    <br />

                    <div>
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            ADD ASSIGNMENT
                        </button>
                    </div>

                </div>

            </form>
        </section >

    );
};

export default AddAssignment;