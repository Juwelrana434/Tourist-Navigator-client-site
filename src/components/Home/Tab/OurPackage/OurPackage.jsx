// import im1 from "../../../../assets/images/beach1.jpg"
// import im2 from "../../../../assets/images/historical.jpg"
// import im3 from "../../../../assets/images/wildlife-africa-tanzania-mammal.jpg"
// import im4 from "../../../../assets/images/adventure.jpg"
import { GoHeartFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurPackage = () => {
  const [tourTypes, setTourTypes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tourtype")
      .then((res) => res.json())
      .then((data) => setTourTypes(data));
  }, []);
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
                <Link to="/beach">
                  <GoHeartFill className="text-green-500 text-4xl hover:text-rose-500 m-3" />
                </Link>
              </div>
            </div>
            <div className="ml-4 py-4">
              <h2 className="card-title">{tourType.tour_type}</h2>
              <p className="text-[16px] font-normal">{tourType.trip_title}</p>
              <p>Price $550</p>
              <div className="">
                <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
                  <Link to="/beach">View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="grid grid-cols-2 bg-base-100 shadow-xl">
<div className="rounded-xl"><img src={im2} className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"/> </div>
<div className="ml-4 py-4">
 <h2 className="">Historical Tours</h2>
 <p className="text-[16px] font-normal">Traveling the world and visiting its most amazing historical sites is every architect’s dream
 </p>
 <p>Price $550</p>
 <div className="">
 <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
 <Link to='/beach'>View Details</Link>
       </button>
 </div>
</div>
</div>  */}
        {/* <div className="grid grid-cols-2 bg-base-100 shadow-xl">
<div className="rounded-xl"><img src={im3} className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"/> </div>
<div className="ml-4 py-4">
 <h2 className="card-title">Wildlife Safaris</h2>
 <p className="text-[16px] font-normal">Embark on an exhilarating Wildlife Safari and experience the thrill of encountering majestic animals in their natural habitat
 </p>
 <p>Price $550</p>
 <div className="">
 <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
 <Link to='/beach'>View Details</Link>
       </button>
 </div>
</div>
</div>  */}
        {/* <div className="grid grid-cols-2 bg-base-100 shadow-xl">
<div className="rounded-xl"><img src={im4} className=" h-[300px] w-full hover:scale-110 rounded-xl p-4"/> </div>
<div className="ml-4 py-4">
 <h2 className="card-title">Adventure Tours</h2>
 <p className="text-[16px] font-normal">Unleash your inner explorer with our Adventure Tours, designed for thrill-seekers craving unforgettable experiences and adrenaline-pumping activities
 </p>
 <p>Price $550</p>
 <div className="">
 <button className="text-xl font-semibold text-[#BB8506] p-3 border-b-4 rounded-xl border-[#BB8506] bg-[#F3F3F3] my-4 hover:bg-[#161716]">
 <Link to='/beach'>View Details</Link>
       </button>
 </div>
</div>
</div>  */}
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
