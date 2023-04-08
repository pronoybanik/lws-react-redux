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
import PrivateRouteStudent from "./PrivateRouteStudent";
import PublicRouteStudent from "./PublicRouteStudent";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import PrivateRoteAdmin from "./PrivateRoteAdmin";
import PublicRouteAdmin from "./PublicRouteAdmin";
import AddVideo from "../components/AddVideo/AddVideo";
import EditVideo from "../components/EditVideo/EditVideo";
import CoursePlayerVideo from "../components/CoursePlayerVideo/CoursePlayerVideo";
import AddAssignment from "../components/Assignment/AddAssignment";
import EditAssignment from "../components/Assignment/EditAssignment";
import AddQuizzes from "../components/Quizzes/AddQuizzes";


const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <PublicRouteStudent><Login></Login></PublicRouteStudent>
    },
    {
        path: '/register',
        element: <PublicRouteStudent><Register></Register></PublicRouteStudent>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/coursePlayer/:id',
                element: <PrivateRouteStudent><CoursePlayerVideo></CoursePlayerVideo></PrivateRouteStudent>
            },
            {
                path: '/leaderBoard',
                element: <PrivateRouteStudent><LeaderBoard></LeaderBoard></PrivateRouteStudent>
            },
            {
                path: '/quiz/:id',
                element: <PrivateRouteStudent><Quiz></Quiz></PrivateRouteStudent>
            },

        ]
    },
    // Admin role section..
    {
        path: "/admin/login",
        element: <PublicRouteAdmin><AdminLogin></AdminLogin></PublicRouteAdmin>
    },
    {
        path: '/admin',
        element: <AdminLayOut></AdminLayOut>,
        children: [
            {
                path: '/admin',
                element: <PrivateRoteAdmin><AdminDashBoard></AdminDashBoard></PrivateRoteAdmin>
            },
            {
                path: '/admin/Videos',
                element: <PrivateRoteAdmin><AdminAddVideo></AdminAddVideo></PrivateRoteAdmin>
            },
            {
                path: '/admin/addVideo',
                element: <PrivateRoteAdmin><AddVideo></AddVideo></PrivateRoteAdmin>
            },
            {
                path: '/admin/editVideo/:id',
                element: <PrivateRoteAdmin><EditVideo></EditVideo></PrivateRoteAdmin>
            },
            {
                path: '/admin/assignment',
                element: <PrivateRoteAdmin><Assignment></Assignment></PrivateRoteAdmin>
            },
            {
                path: '/admin/assignment/:id',
                element: <PrivateRoteAdmin><EditAssignment></EditAssignment></PrivateRoteAdmin>
            },
            {
                path: '/admin/addAssignment',
                element: <PrivateRoteAdmin><AddAssignment></AddAssignment></PrivateRoteAdmin>
            },
            {
                path: '/admin/quizzes',
                element: <PrivateRoteAdmin><Quizzes></Quizzes></PrivateRoteAdmin>
            },
            {
                path: '/admin/addQuizzes',
                element: <PrivateRoteAdmin><AddQuizzes></AddQuizzes></PrivateRoteAdmin>
            },
            {
                path: '/admin/assignmentMark',
                element: <PrivateRoteAdmin><AssignmentMark></AssignmentMark></PrivateRoteAdmin>
            },
        ]
    }
]);

export default allRouter;