import React from 'react'
import { createBrowserRouter } from "react-router";
import MainLayouts from '../layouts/MainLayouts';
import Exercises from '../pages/Exercises';
import ExcerciseDetail from '../pages/ExcerciseDetail';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import ContactUs from '../pages/ContactUs';
import BmrCal from '../pages/BmrCal';
import HealthyRecipesDatabase from '../pages/Recipees';
import FitnessArticlesPage from '../pages/FitnessArticle';
import UpdateProfile from '../pages/UpdateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
    },
    {
        path: "/exercise",
        element: (
            <ProtectedRoute>
                <Exercises></Exercises>
            </ProtectedRoute>
        ),
    },
    {
        path: "/exercise/:params",
        element: (
            <ProtectedRoute>
                <ExcerciseDetail></ExcerciseDetail>
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <Profile></Profile>
            </ProtectedRoute>
        ),
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>,
    },
    {
        path: "/contact",
        element:<ContactUs></ContactUs>
    },
    {
        path: "/bmr",
        element:<BmrCal></BmrCal>
    },
    {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
    },
]);

export default router;
