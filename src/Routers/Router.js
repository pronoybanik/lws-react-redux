import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../pages/Login/Login";
import CoursePlayer from "../pages/coursePlayer/CoursePlayer";
import LeaderBoard from "../pages/leaderBoard/LeaderBoard";
import Quiz from "../pages/quiz/Quiz";
import Register from "../pages/register/Register";
import AdminLayOut from "../LayOut/AdminLayOut";
import AdminDashBoard from "../pages/AdminDashBoard.js/AdminDashBoard";
import AdminAddVideo from "../components/AdminAddVideo/AdminAddVideo";


const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/coursePlayer',
                element: <CoursePlayer></CoursePlayer>
            },
            {
                path: '/leaderBoard',
                element: <LeaderBoard></LeaderBoard>
            },
            {
                path: '/quiz',
                element: <Quiz></Quiz>
            },

        ]
    },
    // {
    //     path: '/dashBoard',
    //     element: <AdminLayOut></AdminLayOut>,
    //     children: [
    //         {
    //             path: '/dashBoard',
    //             element: <AdminDashBoard></AdminDashBoard>
    //         },
    //         {
    //             path: '/dashBoard/videos',
    //             element: <AdminAddVideo></AdminAddVideo>
    //         }
    //     ]
    // }
]);

export default allRouter;