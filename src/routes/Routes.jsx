import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'

import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashbroad from '../pages/Dashbroad/Dashbroad'
import Home from '../components/Home/Home'
import BeachHolyDay from '../components/Home/Tab/OurPackage/BeachHolyday/BeachHolyDay'
import GuideDetails from '../components/Home/Tab/OurPackage/TourSection/GuideDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/beach',
        element: <BeachHolyDay></BeachHolyDay>,
      },
      {
        path: '/beach/:id',
        element: <PrivateRoute><GuideDetails></GuideDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:8000/guide/${params.id}`)
      },
      {
        path: '/dashbroad',
        element: <Dashbroad></Dashbroad>
      },
    
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
