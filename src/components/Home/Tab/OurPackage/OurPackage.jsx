
// import { GoHeartFill } from "react-icons/go";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useAuth from "../../../../hooks/useAuth";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// // import { useLoaderData } from 'react-router-dom';

// const OurPackage = () => {
//   const [tourTypes, setTourTypes] = useState([]);
//   useEffect(() => {
//     fetch("https://tourist-server-six.vercel.app/tourtype")
//       .then((res) => res.json())
//       .then((data) => setTourTypes(data));
//   }, []);
 

// const { user } = useAuth();

// const handleAddToWishList = (item) => {
//   if (user && user.email) {
//       //send cart item to the database
//       const WishListItem = {
        
//         email: user.email,
//        list: item._id,
//        tour_type: item.tour_type,
//        trip_title: item.trip_title,
//        image_url: item.image_url,
//        image_1: item.image_1, 
//        image_2: item.image_2, 
//        image_3: item.image_3, 
//        durations: item.durations,
//        price: item.price, 
//        descriptions: item.descriptions, 
//        location: item.location,
//        Transport: item.Transport
       
//       }
// fetch("https://tourist-server-six.vercel.app/wishList", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify( WishListItem),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data);
//     if (data.insertedId) {
//       Swal.fire({
//         title: "Success!",
//         text: "Add to wish list successfully",
//         icon: "success",
//         confirmButtonText: "Cool",
//       });
//     }
//   });
// }};
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-4">
//         {tourTypes.map((tourType) => (
//           <div
//             key={tourType._id}
//             className="grid grid-cols-2 bg-base-100 shadow-xl"
//           >
//             <div className="rounded-xl relative">
//               <img
//                 src={tourType.image_url}
//                 className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
//               />
//               <div className="absolute bottom-12 w-14 h-14 rounded-xl right-10 top-10 hover:bg-[#ffff] text-center">
                
//                  <button> <GoHeartFill onClick={()=>handleAddToWishList(tourType)} className="text-green-500 text-4xl hover:text-rose-500 m-3" /></button>
              
//               </div>
//             </div>
//             <div className="ml-4 py-4">
//               <h2 className="card-title">{tourType.tour_type}</h2>
//               <p className="text-[16px] font-normal">{tourType.trip_title}</p>
//               <p>Price $550</p>
//               <div className="">
//                 <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
//                   <Link  to={`tourtype/${tourType._id}`}>View Details</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mx-auto text-center my-6"><Link>
//         <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
//           <Link to="/allpackage">View All Package</Link>
//         </button>
//       </Link></div>
//     </div>
//   );
// };

// export default OurPackage;

import { GoHeartFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const OurPackage = () => {
  const [tourTypes, setTourTypes] = useState([]);
  const { user } = useAuth();  // User info for wishlist functionality

  useEffect(() => {
    fetch("https://tourist-server-six.vercel.app/tourtype")
      .then((res) => res.json())
      .then((data) => setTourTypes(data));
  }, []);

  const handleAddToWishList = async (item) => {
    if (user && user.email) {
      const WishListItem = {
        email: user.email,
        list: item._id,
        tour_type: item.tour_type,
        trip_title: item.trip_title,
        image_url: item.image_url,
        image_1: item.image_1,
        image_2: item.image_2,
        image_3: item.image_3,
        durations: item.durations,
        price: item.price,
        descriptions: item.descriptions,
        location: item.location,
        Transport: item.Transport,
      };

      try {
        const response = await fetch("https://tourist-server-six.vercel.app/wishList", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(WishListItem),
        });

        const data = await response.json();
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added to your wishlist successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add to your wishlist.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {tourTypes.map((tourType) => (
          <div key={tourType._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
            <div className="relative">
              <img
                src={tourType.image_url}
                alt={tourType.tour_type}
                className="w-full h-[300px] object-cover rounded-t-lg hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition">
                <button onClick={() => handleAddToWishList(tourType)}>
                  <GoHeartFill className="text-green-500 text-3xl hover:text-rose-500" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{tourType.tour_type}</h2>
              <p className="text-gray-600 text-sm mt-1">{tourType.trip_title}</p>
              <p className="text-gray-700 text-lg font-semibold mt-2">Price: ${tourType.price}</p>
              <div className="mt-4">
                <Link to={`tourtype/${tourType._id}`}>
                  <button className="w-full bg-rose-500 text-white py-2 rounded-lg shadow-md hover:bg-rose-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto text-center mt-8">
        <Link to="/allpackage">
          <button className="bg-rose-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-rose-700 transition duration-300">
            View All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPackage;

