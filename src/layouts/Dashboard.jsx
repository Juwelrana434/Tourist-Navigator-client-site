import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import AdminMenu from "../pages/Dashbroad/Menu/AdminMenu";
import TouristMenu from './../pages/Dashbroad/Menu/TouristMenu';
import GuideMenu from "../pages/Dashbroad/Menu/GuideMenu";

import Navbar from './../components/Shared/Navbar/Navbar';



const Dashboard = () => {
  const { logOut } = useAuth();
  const [role] = useRole()
 
// console.log(role);
  return (
    <div>
    <div><Navbar></Navbar></div>
    <div className="relative min-h-screen lg:md:flex flex-row pt-20">
    {/* dashboard side bar */}
    <div className="w-64 min-h-screen bg-blue-500 text-white mt-6">
      <ul className="pl-4">
      
      
         
      <li>
         
         {/* <NavLink to="/">Home</NavLink> */}
       
       </li>
                  <li>
                  {role === 'admin' && <AdminMenu/>}
                  {role === 'guest' && <TouristMenu/>}
                  {role === 'guide' && <GuideMenu/>}
         
         
       </li>
              
                
                  
                    
                  
          
       
        
        {/* <li>
         
          <NavLink to="/dashbroad/profile">MyProfile</NavLink>
        </li> */}
        {/* <li>
         
          <NavLink to="/dashbroad/mybooking">My Booking</NavLink>
        </li> */}
        {/* <li>
         
          <NavLink to="/dashbroad/wishlist">Wish List</NavLink>
        </li> */}
        {/* <li>
         
          <NavLink to="/dashbroad/guideprofile">Profile</NavLink>
        </li> */}
      </ul>
      <div
        onClick={logOut}
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
      >
        <p >Logout</p>
      </div>
    
    </div>
    {/* dashboard content */}
    <div className="flex-1 md:ml-10">
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  </div></div>
  );
};

export default Dashboard;
