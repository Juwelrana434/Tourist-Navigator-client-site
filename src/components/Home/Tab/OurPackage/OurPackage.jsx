// import im1 from "../../../../assets/images/beach1.jpg"
// import im2 from "../../../../assets/images/historical.jpg"
// import im3 from "../../../../assets/images/wildlife-africa-tanzania-mammal.jpg"
// import im4 from "../../../../assets/images/adventure.jpg"
import { GoHeartFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OurPackage = () => {
  const [tourTypes, setTourTypes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tourtype")
      .then((res) => res.json())
      .then((data) => setTourTypes(data));
  }, []);
   
  //  const {_id,image_url, tour_type, trip_title} = tourTypes;
console.log(tourTypes);
//   add to wish list 

const { user } = useAuth();
const navigate = useNavigate();
const location = useLocation();
const axiosSecure = useAxiosSecure();
// const [, refetch] = useCart();

const handleAddToWishList = (item) => {
  if (user && user.email) {
      //send cart item to the database
      const WishListItem = {
        
        email: user.email,
       ...item
          
         
         
      }
      axiosSecure.post('/wishList', WishListItem)
          .then(res => {
              console.log(res.data)
              if (res.data.insertedId) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${item.tour_type} added to your cart`,
                      showConfirmButton: false,
                      timer: 1500
                  });
                  // refetch cart to update the cart items count
                //   refetch();
              }

          })
  }
  else {
      Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
      }).then((result) => {
          if (result.isConfirmed) {
              //   send the user to the login page
              navigate('/login', { state: { from: location } })
          }
      });
  }
}
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {tourTypes.map((tourType) => (
          <div
            key={tourType._id}
            className="grid grid-cols-2 bg-base-100 shadow-xl"
          >
            <div className="rounded-xl relative">
              <img
                src={tourType.image_url}
                className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
              />
              <div className="absolute bottom-12 w-14 h-14 rounded-xl right-10 top-10 hover:bg-[#ffff] text-center">
                
                 <button> <GoHeartFill onClick={()=>handleAddToWishList(tourType)} className="text-green-500 text-4xl hover:text-rose-500 m-3" /></button>
              
              </div>
            </div>
            <div className="ml-4 py-4">
              <h2 className="card-title">{tourType.tour_type}</h2>
              <p className="text-[16px] font-normal">{tourType.trip_title}</p>
              <p>Price $550</p>
              <div className="">
                <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
                  <Link  to={`tour/${tourType._id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto text-center my-6"><Link>
        <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
          <Link to="/beach">View Details</Link>
        </button>
      </Link></div>
    </div>
  );
};

export default OurPackage;
