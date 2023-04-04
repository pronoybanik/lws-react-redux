import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from '../../features/Auth/AuthSlice';
import image from '../../image/learningportal.svg'
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)

    const handleLogOut = () => {
        dispatch(userLoggedOut())
        localStorage.clear()
    }
    return (
        <nav class="shadow-md">
            <div class="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                <Link to='/admin'>
                <img class="h-10" src={image} alt='' />
                </Link>
                <div class="flex items-center gap-3">
                    <h2 class="font-bold">{user?.name}</h2>
                    <button
                        onClick={handleLogOut}
                        class="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;