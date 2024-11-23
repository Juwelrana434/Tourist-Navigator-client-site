// import TourSection from "../TourSection/TourSection";
// import TourPlan from "../TourSection/TourPlan";
// import TouristGuide from "../TourSection/TouristGuide";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAuth from "../../../../../hooks/useAuth";
// import { DateRange } from 'react-date-range'
// import { useEffect, useState } from "react";

// const PackageDetails = () => {
//   const { user } = useAuth();
//   const tour = useLoaderData();
  
//   const [roles, setRoles] = useState([]);
//     useEffect(() => {
//         fetch('https://tourist-server-six.vercel.app/allguides')
//       //   fetch("https://tourist-server-six.vercel.app/wishList")
//           .then((res) => res.json())
//           .then((data) => setRoles(data));
//       }, []);
  
//   const [dates, setDates] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: 'selection',
//   })
//   // console.log(dates);
//   //Date range handler
//   const handleDates = item => {
//     setDates(item.selection)
//   }
//   // console.log(tour);
//   const {
//     tour_type,
//     trip_title,
//     image_url,
//     price,
//     image_1,
//     image_2,
//     image_3,
//     durations,
//     Transport,
//     location,
//   } = tour;

//   //For booking

//   const handleAddComment = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = user.displayName;
//     const photo = user.photoURL;
//     const email = user.email;
//     const to = dates.endDate
//     const from = dates.startDate
//     const GuideName = form.Guide.value;
//     const guideemail =  form.guideemail.value;
//     const status = "In Review";
//     const booking = {
     
      
//       email,
//       photo,
//       name,
//       tour_type,
//       trip_title,
//       image_url,
//       durations,
//       Transport,
//       location,
//       GuideName,
//       to,
//       from,
//       price,
//       guideemail,
//       status
//     };

//     // send to server

//     fetch("https://tourist-server-six.vercel.app/booking", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(booking),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Add Booking successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };

//   return (
//     <div className="my-10">
//       <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 top-10">
//         <div>
//           <div className="relative">
//             <img src={image_url} className="rounded-xl w-full h-[330px]" />
//             <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
//               Saint martin
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="relative">
//             <img src={image_1} className="rounded-xl w-full h-[330px]" />
//             <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
//               Saint martin
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="relative">
//             <img src={image_2} className="rounded-xl w-full h-[330px]" />
//             <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
//               {location[1]}
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="relative">
//             <img src={image_3} className="rounded-xl w-full h-[330px]" />
//             <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
//               {location[1]}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="my-10 mx-10">
//         <TourSection></TourSection>
//         <div className="">
//           <TourPlan></TourPlan>
//         </div>
//         <div>
//           <TouristGuide></TouristGuide>
//         </div>
//       </div>
//       <div>
//         <div className=" text-black font-bold mx-auto  w-full m-4">
//           <h1 className="text-center pt-6 text-[25px]">Book Your Tour</h1>

//           <form onSubmit={handleAddComment}>
//           <div className="grid lg:grid-cols-2 gap-6 bg-[#0487f1]">
//             <div className="lg:px-10 h-full pt-8">
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 placeholder={user?.displayName}
//                 className="w-full p-3 mt-4"
//                 readOnly
//               />

//               <br />
//               <input
//                 type="photo"
//                 name="photo"
//                 placeholder="photoUrl*"
//                 className="w-full p-3 mt-4"
//                 readOnly="true"
//               />

//               <br />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder=
//                 {user?.email}
//                 className="w-full p-3 mt-4"
//                 readOnly="true"
//               />
//               <br />
//               <input
//                 type="number"
//                 name="price"
//                 placeholder=
//                 {price}
//                 className="w-full p-3 mt-4"
//                 readOnly
//               />
//               <br />

//               <select name="Guide" className="w-full p-2 mt-4 mb-4">
//                 <option value="Pavel Novak">Pavel Novak</option>
//                 <option value="Maria Garcia">Maria Garcia</option>
//                 <option value="John Smith">John Smith</option>
//                 <option value="Anna Kovacs">Anna Kovacs</option>
//               </select>
              
//               <br />
              
//              {roles.length > 0 ? (<select name="guideemail" className="w-full p-2 mt-4 mb-4">
//                 <option>{<ul>{roles.map((item) => (
//         <li key={item._id}>{item.email}</li>
//       ))}
//     </ul>}</option>
               
//               </select>):(<select name="guideemail" className="w-full p-2 mt-4 mb-4"> <option >{user.email}</option></select>)} 
//               <br />
            
//             </div>
           
//              <div className='space-y-1 w-full p-4'>
//               <label htmlFor='location' className='block text-gray-600'>
//                 Select Availability Range
//               </label>
//               {/* Calender */}
//               <DateRange
//                 rangeColors={['#F43F5E']}
//                 editableDateInputs={true}
//                 onChange={item => handleDates(item)}
//                 moveRangeOnFirstSelection={false}
//                 ranges={[dates]}
//               />
//             </div>
//             </div>
//             <input
//               type="submit"
//               value="Save & Continue"
//               className="w-full btn btn-primary my-6"
//             />
            
//           </form>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;
import TourSection from "../TourSection/TourSection";
import TourPlan from "../TourSection/TourPlan";
import TouristGuide from "../TourSection/TouristGuide";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";

const PackageDetails = () => {
  const { user } = useAuth();
  const tour = useLoaderData();

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    fetch("https://tourist-server-six.vercel.app/allguides")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch guides");
        }
        return res.json();
      })
      .then((data) => {
        setRoles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDates = (item) => {
    setDates(item.selection);
  };

  if (!tour) {
    return <p className="text-red-500 text-center">Failed to load tour details.</p>;
  }

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

  const handleAddComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user.displayName;
    const photo = user.photoURL;
    const email = user.email;
    const to = dates.endDate;
    const from = dates.startDate;
    const GuideName = form.Guide.value;
    const guideemail = form.guideemail.value;
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
      status,
    };

    fetch("https://tourist-server-six.vercel.app/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Booking added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          throw new Error("Failed to add booking");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="my-10 px-4">
      {/* Tour Images */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
        {[image_url, image_1, image_2, image_3].map((img, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={img}
              alt={`Tour location ${location?.[index] || trip_title}`}
              className="w-full h-[330px] object-cover"
            />
            <p className="absolute bottom-5 left-5 bg-blue-700 text-white px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {location?.[index] || "Tour Location"}
            </p>
          </div>
        ))}
      </div>

      {/* Tour Details */}
      <div className="my-10 mx-auto max-w-screen-lg">
        <TourSection />
        <TourPlan />
        <TouristGuide />
      </div>

      {/* Booking Form */}
      <div className="text-black font-bold mx-auto w-full max-w-screen-lg my-10">
        <h1 className="text-center text-3xl font-semibold mb-8">Book Your Tour</h1>

        <form onSubmit={handleAddComment}>
          <div className="grid lg:grid-cols-2 gap-8 bg-gray-100 rounded-lg shadow-lg p-1">
            {/* Left Column */}
            <div>
              <input
                type="text"
                name="name"
                value={user?.displayName || ""}
                className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                readOnly
              />

              <input
                type="text"
                name="photo"
                value={user?.photoURL || ""}
                className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                readOnly
              />

              <input
                type="email"
                name="email"
                value={user?.email || ""}
                className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                readOnly
              />

              <input
                type="number"
                name="price"
                value={price || ""}
                className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                readOnly
              />

              <select
                name="Guide"
                className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
              >
                <option value="Pavel Novak">Pavel Novak</option>
                <option value="Maria Garcia">Maria Garcia</option>
                <option value="John Smith">John Smith</option>
                <option value="Anna Kovacs">Anna Kovacs</option>
              </select>

              {loading ? (
                <p className="text-gray-500">Loading guides...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <select
                  name="guideemail"
                  className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                >
                  {roles.map((role) => (
                    <option key={role._id} value={role.email}>
                      {role.email}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Availability Range
              </label>
              <DateRange
                rangeColors={["#3b82f6"]}
                editableDateInputs={true}
                onChange={handleDates}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors duration-300"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
