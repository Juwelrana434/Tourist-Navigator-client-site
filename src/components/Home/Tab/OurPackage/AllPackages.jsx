import { useEffect, useState } from "react";
// import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const AllPackages = () => {
    const [tourTypes, setTourTypes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/tourtype")
        .then((res) => res.json())
        .then((data) => setTourTypes(data));
    }, []);
    
    return (
        <div>
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-10">
          {tourTypes.map((tourType) => (
   <div key={tourType._id}>
   <div>
   <div className="relative">
     <img src={tourType.image_url} className="rounded-xl w-full h-[330px]" />
     <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
       Saint martin
     </p>
   </div>
 
 </div>
   <div>
   <div className="relative">
     <img src={tourType.image_1} className="rounded-xl w-full h-[330px]" />
     <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
       Saint martin
     </p>
   </div>
 
 </div>
   <div>
   <div className="relative">
     <img src={tourType.image_2} className="rounded-xl w-full h-[330px]" />
     <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
      {location[1]}
     </p>
   </div>
 
 </div>
   <div>
   <div className="relative">
     <img src={tourType.image_3} className="rounded-xl w-full h-[330px]" />
     <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
      {location[1]}
     </p>
   </div>
 
 </div>
 </div>
          ))}

</div> */}
<div className="grid gap-4">
        {tourTypes.map((tourType) => (
          <div
            key={tourType._id}
            className="grid grid-cols-1 bg-base-100 shadow-xl"
          >
            <div className="rounded-xl grid lg:md:grid-cols-2">
              <img
                src={tourType.image_url}
                className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
              />
              <img
                src={tourType.image_1}
                className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
              />
              <img
                src={tourType.image_2}
                className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
              />
              <img
                src={tourType.image_3}
                className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"
              />
              {/* <div className="absolute bottom-12 w-14 h-14 rounded-xl right-10 top-10 hover:bg-[#ffff] text-center">
                
                 <button> <GoHeartFill onClick={()=>handleAddToWishList(tourType)} className="text-green-500 text-4xl hover:text-rose-500 m-3" /></button>
              
              </div> */}
            </div>
            <div className="py-4 mx-auto">
              <h2 className="card-title">{tourType.tour_type}</h2>
              <p className="text-[16px] font-normal">{tourType.trip_title}</p>
              <h2 className="card-title">Transport By :{tourType.Transport}</h2>
              <p className="text-[16px] font-normal"> Visited Area :{tourType.location}</p>
              <p className="text-[16px] font-normal"> Traveling Time :{tourType.durations}</p>
              <p>Price $550</p>
              <div className="">
                <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
                  <Link  to={`tourtype/${tourType._id}`}>Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
    );
};

export default AllPackages;