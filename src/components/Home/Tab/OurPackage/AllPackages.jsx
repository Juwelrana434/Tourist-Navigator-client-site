// import { useEffect, useState } from "react";
// // import { GoHeartFill } from "react-icons/go";
// import { Link } from "react-router-dom";
// // import { Link } from "react-router-dom";


// const AllPackages = () => {
//     const [tourTypes, setTourTypes] = useState([]);
//     useEffect(() => {
//       fetch("https://tourist-server-six.vercel.app/tourtype")
//         .then((res) => res.json())
//         .then((data) => setTourTypes(data));
//     }, []);
    
//     return (
//         <div>
          
// <div className="grid gap-4">
//         {tourTypes.map((tourType) => (
//           <div
//             key={tourType._id}
//             className="grid grid-cols-1 bg-base-100 shadow-xl"
//           >
//             <div className="rounded-xl grid lg:md:grid-cols-2">
//               <img
//                 src={tourType.image_url}
//                 className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
//               />
//               <img
//                 src={tourType.image_1}
//                 className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
//               />
//               <img
//                 src={tourType.image_2}
//                 className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
//               />
//               <img
//                 src={tourType.image_3}
//                 className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
//               />
//               {/* <div className="absolute bottom-12 w-14 h-14 rounded-xl right-10 top-10 hover:bg-[#ffff] text-center">
                
//                  <button> <GoHeartFill onClick={()=>handleAddToWishList(tourType)} className="text-green-500 text-4xl hover:text-rose-500 m-3" /></button>
              
//               </div> */}
//             </div>
//             <div className="py-4 mx-auto">
//               <h2 className="card-title">{tourType.tour_type}</h2>
//               <p className="text-[16px] font-normal">{tourType.trip_title}</p>
//               <h2 className="card-title">Transport By :{tourType.Transport}</h2>
//               <p className="text-[16px] font-normal"> Visited Area :{tourType.location}</p>
//               <p className="text-[16px] font-normal"> Traveling Time :{tourType.durations}</p>
//               <p>Price $550</p>
//               <div className="">
//                 <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
//                   <Link  to={`tourtype/${tourType._id}`}>Book Now</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//         </div>
//     );
// };

// export default AllPackages;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPackages = () => {
  const [tourTypes, setTourTypes] = useState([]);

  useEffect(() => {
    fetch("https://tourist-server-six.vercel.app/tourtype")
      .then((res) => res.json())
      .then((data) => setTourTypes(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 gap-4">
        {tourTypes.map((tourType) => (
          <div
            key={tourType._id}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Full-Width Image Group: 4 Images in one group, 2 Columns */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* First Image */}
              <div className="relative">
                <img
                  src={tourType.image_url}
                  alt={tourType.tour_type}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Place Name in the Bottom-Right Corner */}
                <div className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-lg opacity-75">
                  <span className="text-xl font-semibold">{tourType.location[0]}</span>
                </div>
              </div>
              {/* Second Image */}
              <div className="relative">
                <img
                  src={tourType.image_1}
                  alt={tourType.tour_type}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Place Name in the Bottom-Right Corner */}
                <div className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-lg opacity-75">
                  <span className="text-xl font-semibold">{tourType.location[1]}</span>
                </div>
              </div>
              {/* Third Image */}
              <div className="relative">
                <img
                  src={tourType.image_2}
                  alt={tourType.tour_type}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Place Name in the Bottom-Right Corner */}
                <div className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-lg opacity-75">
                  <span className="text-xl font-semibold">{tourType.location[2]}</span>
                </div>
              </div>
              {/* Fourth Image */}
              <div className="relative">
                <img
                  src={tourType.image_3}
                  alt={tourType.tour_type}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Place Name in the Bottom-Right Corner */}
                <div className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-lg opacity-75">
                  <span className="text-xl font-semibold">{tourType.location[3]}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
  {/* Tour Type Title */}
  <h2 className="text-2xl font-bold text-gray-800">{tourType.tour_type}</h2>
  
  {/* Trip Title */}
  <p className="text-lg text-gray-600 mt-2">{tourType.trip_title}</p>
  
  {/* Transport Details */}
  <div className="mt-4">
    <h3 className="text-lg font-semibold text-gray-700">
      Transport By: <span className="text-gray-600">{tourType.Transport}</span>
    </h3>
  </div>
  
  {/* Visited Area */}
  <div className="mt-4">
    <h3 className="text-lg font-semibold text-gray-700">
      Visited Area: 
      <span className="text-gray-600"> {tourType.location[1]}, {tourType.location[3]}</span>
    </h3>
  </div>

  {/* Traveling Time */}
  <div className="mt-4">
    <h3 className="text-lg font-semibold text-gray-700">
      Traveling Time: <span className="text-gray-600">{tourType.durations}</span>
    </h3>
  </div>

  {/* Price */}
  <div className="mt-6">
    <p className="text-xl font-bold text-gray-800">
      Price: <span className="text-[#BB8506]">${tourType.price}</span>
    </p>
  </div>

  {/* Book Now Button */}
  <Link to={`/tourtype/${tourType._id}`} className="inline-block mt-6">
    <button className="w-full px-6 py-3 text-white font-medium bg-[#BB8506] rounded-md shadow-lg hover:bg-[#9a6e03] transition duration-300">
      Book Now
    </button>
  </Link>
</div>


            </div>
          
        ))}
      </div>

      {/* View All Packages Button */}
      
    </div>
  );
};

export default AllPackages;
