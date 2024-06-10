import useAuth from "../../hooks/useAuth";


const MyProfile = () => {
const {user, logOut} =useAuth();
    return (
        <div>
          <div className="flex gap-6"><img src={user.photoURL } />  
         <div> <h1>{user.email}</h1>
          <h1>{user.displayName
          }</h1></div></div>
          <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          <p>Logout</p>
                        </div>
          
          
        </div>
    );
};

export default MyProfile;