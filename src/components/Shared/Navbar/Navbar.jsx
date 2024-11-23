import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(user);
  const navbar = (
  <>
  <li>
        <NavLink to="/">HOME</NavLink>
      </li>
  <li>
        <NavLink to="/AllStory">Community</NavLink>
      </li>
  <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
  <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
  <li>
        <NavLink to="/contactUs,">Contact Us</NavLink>
      </li>
  </>
  )
  return (
   
    <div className="navbar border-b-2 border-gray-100 rounded-md shadow-lg text-black font-bold fixed z-10 h-24 max-w-[1270px] mx-auto">
    <div className="lg:navbar-start justify-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
          <img
    className="rounded-full w-12 h-12 fixed top-6 lg:block ml-12"
    // className='hidden md:block'
    src="https://static.vecteezy.com/system/resources/thumbnails/026/286/673/small/sunset-logo-design-vector.jpg"
    alt="menu-icon"
    
  />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navbar}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl"><div className="flex ">
     
<Link to="/">
  <img
    className="rounded-full w-16 h-16 fixed top-4 hidden lg:block items-center justify-center"
    // className='hidden md:block'
    src="https://static.vecteezy.com/system/resources/thumbnails/026/286/673/small/sunset-logo-design-vector.jpg"
    alt="logo"
    
  />
</Link>
<h1 className="lg:pl-24 md:pl-16 pl-4 text-green-800 flex items-center justify-center">Tourist Navigator</h1>
</div></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navbar}
      </ul>
    </div>
    <div className="flex-end">
    <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            {/* <div>
              <Link to="/">
                <img
                  className="rounded-full"
                  // className='hidden md:block'
                  src="https://static.vecteezy.com/system/resources/thumbnails/026/286/673/small/sunset-logo-design-vector.jpg"
                  alt="logo"
                  width="80"
                  height="80"
                />
              </Link>
              
            </div> */}
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="40"
                      width="40"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {/* <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link> */}

                    {user ? (
                      <>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          <p>Logout</p>
                        </div>
                        <p className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                          <Link to="dashbroad">Dashbroad</Link>
                        </p>
                        <p className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                          {user.displayName}
                        </p>
                        <p className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                          {user.email}
                        </p>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
  );
};

export default Navbar;




