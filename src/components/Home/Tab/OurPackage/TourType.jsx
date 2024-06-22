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
        <div className="bg-[#e6f2fd] rounded-3xl">
         <h1 className="text-[25px] font-bold my-10 text-center">Find your Tour</h1>
            <div className="grid md:lg:grid-cols-4 gap-4">
        {tourTypes.map((tourType) => (
          <Link to={`tourtype/${tourType._id}`}
            key={tourType._id}
            
          >
            
             <div className="flex flex-col justify-center items- pb-6"> <img
                src={tourType.image_url}
                className=" h-[150px] w-[150px] hover:scale-110 rounded-full p-4"
              />
              <h2 className="card-title">{tourType.tour_type}</h2></div>
            
           
          </Link>
        ))}
      </div>
        </div>
    );
};

export default TourType;