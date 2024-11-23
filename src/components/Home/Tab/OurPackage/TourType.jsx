import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TourType = () => {
  const [tourTypes, setTourTypes] = useState([]);

  useEffect(() => {
    fetch("https://tourist-server-six.vercel.app/tourtype")
      .then((res) => res.json())
      .then((data) => setTourTypes(data));
  }, []);

  return (
    <div className="bg-[#e6f2fd] rounded-3xl p-6">
      <h1 className="text-[25px] font-bold my-10 text-center">Find your Tour</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {tourTypes.map((tourType) => (
          <Link to={`tourtype/${tourType._id}`} key={tourType._id}>
            <div className="flex flex-col justify-center items-center pb-6">
              <img
                src={tourType.image_url}
                alt={tourType.tour_type}
                className="h-[150px] w-[150px] hover:scale-110 rounded-full p-4 transition-transform duration-300"
              />
              <h2 className="text-center mt-2 text-lg font-semibold">{tourType.tour_type}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourType;
