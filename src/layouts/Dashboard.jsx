import { NavLink, Outlet } from "react-router-dom";
import MyProfile from "../pages/Dashbroad/MyProfile";
import useAuth from "../hooks/useAuth";
// import useCart from "../hooks/useCart";
// import useAdmin from './../hooks/useAdmin';
//import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
// import MyProfile from './../pages/Dashbroad/MyProfile';

const Dashboard = () => {
  const { logOut } = useAuth();
  //   const [cart] = useCart();
  // TODO: get isAdmin value from the database
  //   const [isAdmin] = useAdmin();

  return (
    <div className="relative min-h-screen lg:md:flex flex-row">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="pl-4">
          <li>
           
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashbroad/users">All users</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashbroad/profile">MyProfile</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashbroad/mybooking">My Booking</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashbroad/wishlist">Wish List</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashbroad/guideprofile">Profile</NavLink>
          </li>
        </ul>
        <div
          onClick={logOut}
          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
        >
          <p>Logout</p>
        </div>
      </div>
      {/* dashboard content */}
      <div className="flex-1 md:ml-10">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
