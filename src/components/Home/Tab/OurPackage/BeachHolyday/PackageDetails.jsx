// import im1 from "../../../../../assets/images/adventure.jpg";
// import im2 from "../../../../../assets/images/beach1.jpg";
// import im3 from "../../../../../assets/images/saint.jpg";
// import im4 from "../../../../../assets/images/beach2.jpg";
// import im5 from "../../../../../assets/images/bankok.jpg";
// import im6 from "../../../../../assets/images/gettyimages-465883815-612x612.jpg";
// import im7 from "../../../../../assets/images/historical.jpg";
// import im8 from "../../../../../assets/images/pic5.jpg";
// import im9 from "../../../../../assets/images/wildlife-africa-tanzania-mammal.jpg";
// import im10 from "../../../../../assets/images/moru.jpg";
// import im11 from "../../../../../assets/images/statu.jpg";
// import im12 from "../../../../../assets/images/pic3.jpg";
import TourSection from '../TourSection/TourSection';
import TourPlan from '../TourSection/TourPlan';
import TouristGuide from '../TourSection/TouristGuide';
import { useLoaderData } from 'react-router-dom';
// import { useEffect, useState } from 'react';

const PackageDetails = () => {
  const tour = useLoaderData();
  console.log(tour);
const {tour_type,
  trip_title,
  image_url,
  price,
  image_1,
  image_2,
  image_3,
  durations,
  Transport,
  location} = tour;
  // const [tourTypes, setTourTypes] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/tourtype")
  //     .then((res) => res.json())
  //     .then((data) => setTourTypes(data));
  // }, []);
  return (
    
    <div className="my-10"><div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 top-10">
   
          <div>
          <div className="relative">
            <img src={image_url} className="rounded-xl w-full h-[330px]" />
            <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
              Saint martin
            </p>
          </div>
        
        </div>
          <div>
          <div className="relative">
            <img src={image_1} className="rounded-xl w-full h-[330px]" />
            <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
              Saint martin
            </p>
          </div>
        
        </div>
          <div>
          <div className="relative">
            <img src={image_2} className="rounded-xl w-full h-[330px]" />
            <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
             {location[1]}
            </p>
          </div>
        
        </div>
          <div>
          <div className="relative">
            <img src={image_3} className="rounded-xl w-full h-[330px]" />
            <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
             {location[1]}
            </p>
          </div>
        
        </div>
            
    
    
  </div><div className="my-10 mx-10"><TourSection></TourSection>
  <div className=""><TourPlan></TourPlan></div>
  <div><TouristGuide></TouristGuide></div>
  </div></div>
  );
};

export default PackageDetails;
