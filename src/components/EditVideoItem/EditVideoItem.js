import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditVideoMutation } from '../../features/Videos/VideosApi';

const EditVideoItem = ({ editVideo: editFromVideo }) => {
    const { id, title: defaultTitle, description: defaultDescription, url: defaultUrl, createdAt: defaultCreatedAt } = editFromVideo || {};

    const navigate = useNavigate();
    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);
    const [url, setUrl] = useState(defaultUrl);
    const [createdAt, setCreatedAt] = useState(defaultCreatedAt);
    const [editVideo] = useEditVideoMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        editVideo({
            id,
            data: {
                title,
                description,
                url,
                createdAt,
            }
        })
        alert('Edit video Successfully')
        navigate('/admin/Videos');
    }

    return (
        <section id='section'>
            <h1 className='text-2xl'>EDIT VIDEO</h1>
            <br />
            <form onSubmit={handleSubmit} className='inputField'>
                <div className=''>
                    <div>
                        <label for="name" >Title</label>
                        <input id="name" name="name" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                        />
                    </div>
                    <br />
                    <div>
                        <label for="name" >Description</label>
                        <input id="name" name="name" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <label for="name" >Url Link</label>
                        <input id="name" name="name" type="name" autocomplete="name" required
                            class="login-input rounded-t-md" placeholder="video link "
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <label for="name" >createdAt</label>
                        <input id="name" name="name" type="date" autocomplete="name" required
                            class="login-input rounded-t-md bg-white" placeholder="createdAt"
                            value={createdAt}
                            onChange={(e) => setCreatedAt(e.target.value)}
                        />
                    </div>

                    <br />
                    <div>
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            SAVE VIDEO
                        </button>
                    </div>

                </div>
            </form>
        </section >

    );
};

export default EditVideoItem;