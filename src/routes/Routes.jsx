import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'

import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashbroad from '../pages/Dashbroad/Dashbroad'
import Home from '../components/Home/Home'

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
        path: '/dashbroad',
        element: <Dashbroad></Dashbroad>
      },
    
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
