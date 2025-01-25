import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/register";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import TrainerDetails from "../Pages/AllTrainer/TrainerDetails";
import Dashboard from "../Layout/Dashboard";
import AllNewsletter from "../Pages/Dashboard/Admin/AllNewsletter";
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers";
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import Balance from "../Pages/Dashboard/Admin/Balance";
import AddNewClass from "../Pages/Dashboard/Admin/AddNewClass";
import ManageSlots from "../Pages/Dashboard/Trainer/ManageSlots";
import AddNewSlot from "../Pages/Dashboard/Trainer/AddNewSlot";
import AddNewForam from "../Pages/Dashboard/Trainer/AddNewForam";
import ActivityLogPage from "../Pages/Dashboard/Member/ActivityLogPage";
import Profile from "../Pages/Dashboard/Member/Profile";
import BookedTrainer from "../Pages/Dashboard/Member/BookedTrainer";
import AllClassesPage from "../Pages/AllClassesPage/AllClassesPage";
import TrainerBooking from "../Pages/AllTrainer/TrainerBooking";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import BeATrainer from "../Pages/AllTrainer/BeATrainer";
import CommunityPage from "../Pages/CommunityPage/CommunityPage";
import PrivateRoute from "./PrivateRoute";
import TrainerRoute from "./TrainerRoute";
import AdminRoute from "./AdminRoute";
import Error from "../Pages/Error/Error";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allTrainers',
            element:<AllTrainer></AllTrainer>,
        },
        {
            path:'/trainerDetails/:id',
            element:<TrainerDetails></TrainerDetails>
        },
        {
            path:'/bookingTrainer/:id/:slot',
            element:<PrivateRoute><TrainerBooking></TrainerBooking></PrivateRoute>
        },
        {
            path:'/paymentPage',
            element:<PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>
        },
        {
            path:'/allClassesPage',
            element:<AllClassesPage></AllClassesPage>
        },
        {
            path:'/community',
            element:<CommunityPage></CommunityPage>
        },
        {
          path:'/beATrainer',
          element:<PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>
        },
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // admin routes
        {
          path:'allNewsletter',
          element:<AdminRoute><PrivateRoute><AllNewsletter></AllNewsletter></PrivateRoute></AdminRoute> 
        },
        {
          path:'allTrainers',
          element:<AdminRoute><PrivateRoute><AllTrainers></AllTrainers></PrivateRoute></AdminRoute> 
        },
        {
          path:'appliedTrainers',
          element:<AdminRoute><PrivateRoute><AppliedTrainer></AppliedTrainer></PrivateRoute></AdminRoute> 
        },
        {
          path:'balance',
          element:<AdminRoute><PrivateRoute><Balance></Balance></PrivateRoute></AdminRoute> 
        },
        {
          path:'addNewClass',
          element:<AdminRoute><PrivateRoute><AddNewClass></AddNewClass></PrivateRoute></AdminRoute> 
        },
        // trainer routes
        {
          path:'manageSlots',
          element:<TrainerRoute><PrivateRoute><ManageSlots></ManageSlots></PrivateRoute></TrainerRoute>
        },
        {
          path:'addNewSlots',
          element:<TrainerRoute><PrivateRoute><AddNewSlot></AddNewSlot></PrivateRoute></TrainerRoute>
        },
        {
          path:'addNewForum',
          element:<PrivateRoute><AddNewForam></AddNewForam></PrivateRoute>
        },
        // member routes
        {
          path:'activityLog',
          element:<PrivateRoute><ActivityLogPage></ActivityLogPage></PrivateRoute>
        },
        {
          path:'profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'bookedTrainer',
          element:<PrivateRoute><BookedTrainer></BookedTrainer></PrivateRoute>
        },
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);