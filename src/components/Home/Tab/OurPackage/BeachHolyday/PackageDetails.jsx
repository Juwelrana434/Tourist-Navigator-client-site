// import im1 from "../../../../../assets/images/adventure.jpg";
import im2 from "../../../../../assets/images/beach1.jpg";
import im3 from "../../../../../assets/images/saint.jpg";
import im4 from "../../../../../assets/images/beach2.jpg";
import im5 from "../../../../../assets/images/bankok.jpg";
import im6 from "../../../../../assets/images/gettyimages-465883815-612x612.jpg";
import im7 from "../../../../../assets/images/historical.jpg";
import im8 from "../../../../../assets/images/pic5.jpg";
import im9 from "../../../../../assets/images/wildlife-africa-tanzania-mammal.jpg";
import im10 from "../../../../../assets/images/moru.jpg";
import im11 from "../../../../../assets/images/statu.jpg";
import im12 from "../../../../../assets/images/pic3.jpg";
import TourSection from "../TourSection/TourSection";
import TourPlan from "../TourSection/TourPlan";
import TouristGuide from "../TourSection/TouristGuide";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";
import { DateRange } from 'react-date-range'
import { useEffect, useState } from "react";

const PackageDetails = () => {
  const { user } = useAuth();
  const tour = useLoaderData();
  
  const [roles, setRoles] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/allguides')
      //   fetch("http://localhost:8000/wishList")
          .then((res) => res.json())
          .then((data) => setRoles(data));
      }, []);
  
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  console.log(dates);
  //Date range handler
  const handleDates = item => {
    setDates(item.selection)
  }
  console.log(tour);
  const {
    tour_type,
    trip_title,
    image_url,
    price,
    image_1,
    image_2,
    image_3,
    durations,
    Transport,
    location,
  } = tour;

  //For booking

  const handleAddComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user.displayName;
    const photo = user.photoURL;
    const email = user.email;
    const to = dates.endDate
    const from = dates.startDate
    const GuideName = form.Guide.value;
    const guideemail =  form.guideemail.value;
    const status = "In Review";
    const booking = {
     
      
      email,
      photo,
      name,
      tour_type,
      trip_title,
      image_url,
      durations,
      Transport,
      location,
      GuideName,
      to,
      from,
      price,
      guideemail,
      status
    }; // Fixed property name
    // console.log(addComment);



    // send to server

    fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Booking successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 top-10">
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
      </div>
      <div className="my-10 mx-10">
        <TourSection></TourSection>
        <div className="">
          <TourPlan></TourPlan>
        </div>
        <div>
          <TouristGuide></TouristGuide>
        </div>
      </div>
      <div>
        <div className=" text-black font-bold mx-auto  w-full m-4">
          <h1 className="text-center pt-6 text-[25px]">Book Your Tour</h1>

          <form onSubmit={handleAddComment}>
          <div className="grid lg:grid-cols-2 gap-6 bg-[#0487f1]">
            <div className="lg:px-10 h-full pt-8">
              <input
                type="text"
                name="name"
                required
                placeholder={user?.displayName}
                className="w-full p-3 mt-4"
                readOnly
              />

              <br />
              <input
                type="photo"
                name="photo"
                placeholder="photoUrl*"
                className="w-full p-3 mt-4"
                readOnly="true"
              />

              <br />
              <input
                type="email"
                name="email"
                required
                placeholder=
                {user?.email}
                className="w-full p-3 mt-4"
                readOnly="true"
              />
              <br />
              <input
                type="number"
                name="price"
                placeholder=
                {price}
                className="w-full p-3 mt-4"
                readOnly
              />
              <br />

              <select name="Guide" className="w-full p-2 mt-4 mb-4">
                <option value="Pavel Novak">Pavel Novak</option>
                <option value="Maria Garcia">Maria Garcia</option>
                <option value="John Smith">John Smith</option>
                <option value="Anna Kovacs">Anna Kovacs</option>
              </select>
              
              <br />
              
              <select name="guideemail" className="w-full p-2 mt-4 mb-4">
                <option>{<ul>{roles.map((item) => (
        <li key={item._id}>{item.email}</li>
      ))}
    </ul>}  {user.email}</option>
               
              </select>
              <br />
              {/* <input
                type="text"
                name="status"
                placeholder='In Review'
                className="w-full p-3 mt-4 mb-2 "
                readOnly
              /> */}
            </div>
           
             <div className='space-y-1 w-full p-4'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              {/* Calender */}
              <DateRange
                rangeColors={['#F43F5E']}
                editableDateInputs={true}
                onChange={item => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
              />
            </div>
            </div>
            <input
              type="submit"
              value="Save & Continue"
              className="w-full btn btn-primary my-6"
            />
            
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default PackageDetails;
