import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../components/Home/Home";
import GuideDetails from "../components/Home/Tab/OurPackage/TourSection/GuideDetails";
import PrivateRoute from "./PrivateRoute";
import PackageDetails from "../components/Home/Tab/OurPackage/BeachHolyday/PackageDetails";
import OurPackage from "../components/Home/Tab/OurPackage/OurPackage";
import AllPackages from "../components/Home/Tab/OurPackage/AllPackages";
import AllStrory from "../components/Home/TouristStoreSection/AllStrory";
import TourStoryDetails from './../components/Home/TouristStoreSection/TourStoryDetails';
import Dashboard from './../layouts/Dashboard';
import MyProfile from "../pages/Dashbroad/MyProfile";
import MyBooking from "../pages/Dashbroad/MyBooking";
import WishList from "../pages/Dashbroad/WishList";
import GuideProfile from "../pages/Dashbroad/GuideProfile";
import ManageUsers from "../pages/Dashbroad/ManageUsers";
import AddTour from './../pages/Dashbroad/AddTour';
import Profile from "../pages/Dashbroad/Menu/Profile";
import MyAssignedTours from "../pages/Dashbroad/Menu/MyAssignedTours";
import Payment from './../pages/Dashbroad/PaymentHistory/Payment/Payment';
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/beach",
      //   element: <PackageDetails></PackageDetails>,
      // },
      {
        path: "/tourtype/:id", 
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`https://tourist-server-six.vercel.app/tourtype/${params.id}`),
      },
      {
        path: "/beach:id",
        element: <OurPackage></OurPackage>,
        loader: ({ params }) =>
          fetch(`https://tourist-server-six.vercel.app/tourtype/${params.id}`),
      },
      {
        path: "/beach/:id",
        element: (
          <PrivateRoute>
            <GuideDetails></GuideDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tourist-server-six.vercel.app/guide/${params.id}`),
      },
      {
        path: "/allpackage",
        element: <AllPackages></AllPackages>,
        // loader: ({ params }) =>
        //   fetch(`https://tourist-server-six.vercel.app/tourtype/${params.id}`),
      },
      {
        path: "/AllStory",
        element: <AllStrory></AllStrory>,
        
      },
      {
       path: '/aboutUs',
       element: <AboutUs></AboutUs>,
      },
      {
       path: '/blogs',
       element: <Blogs></Blogs>,
      },
      {
        path: "/tourstory/:id",
        element: (
          <PrivateRoute>
            <TourStoryDetails></TourStoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tourist-server-six.vercel.app/tourstory/${params.id}`),
      },
      
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  
  {
    path: 'dashbroad',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myprofile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'mybooking',
        element: <MyBooking></MyBooking>,
      },
      {
        path: 'wishlist',
        element: <WishList></WishList>,
      },
      {
        path: 'guideprofile',
        element: <GuideProfile></GuideProfile>,
      },
      {
        path: 'users',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: 'addtour',
        element: <AddTour></AddTour>,
      },
      {
        path: 'profile',
        element: <Profile></Profile>,
      },
      {
        path: 'assigned',
        element: <MyAssignedTours></MyAssignedTours>,
        
      },
      {
        path: 'addtour',
        element: <AddTour></AddTour>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
    ],
  },
  
]);
