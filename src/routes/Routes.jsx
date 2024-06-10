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
          fetch(`http://localhost:8000/tourtype/${params.id}`),
      },
      {
        path: "/beach:id",
        element: <OurPackage></OurPackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/tourtype/${params.id}`),
      },
      {
        path: "/beach/:id",
        element: (
          <PrivateRoute>
            <GuideDetails></GuideDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/guide/${params.id}`),
      },
      {
        path: "/allpackage",
        element: <AllPackages></AllPackages>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:8000/tourtype/${params.id}`),
      },
      {
        path: "/AllStory",
        element: <AllStrory></AllStrory>,
        
      },
      {
        path: "/tourstory/:id",
        element: (
          <PrivateRoute>
            <TourStoryDetails></TourStoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/tourstory/${params.id}`),
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
        path: 'profile',
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
    ],
  },
  
]);
