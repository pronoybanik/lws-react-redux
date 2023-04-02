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
import Assignment from "../components/Assignment/Assignment";
import Quizzes from "../components/Quizzes/Quizzes";
import AssignmentMark from "../components/AssignmentMark/AssignmentMark";


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
    //     path: "/adminLogin",
    //     element: <Register></Register>
    // },
    {
        path: '/admin',
        element: <AdminLayOut></AdminLayOut>,
        children: [
            {
                path: '/admin',
                element: <AdminDashBoard></AdminDashBoard>
            },
            {
                path: '/admin/Videos',
                element: <AdminAddVideo></AdminAddVideo>
            },
            {
                path: '/admin/assignment',
                element: <Assignment></Assignment>
            },
            {
                path: '/admin/quizzes',
                element: <Quizzes></Quizzes>
            },
            {
                path: '/admin/assignmentMark',
                element: <AssignmentMark></AssignmentMark>
            },

        ]
    }
]);

export default allRouter;