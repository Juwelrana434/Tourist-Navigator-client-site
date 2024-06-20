// import { useEffect, useState } from "react";
// import { axiosSecure } from "../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import useAuth from './../../../hooks/useAuth';


// const Request = () => {
// const {user} =useAuth();
//     const [bookings, setBookings] = useState([]);
//     useEffect(() => {
//       fetch(`http://localhost:8000/user/${user?.email}`)
//     //   fetch('http://localhost:8000/booking')
//         .then((res) => res.json())
//         .then((data) => setBookings(data));
//     }, []);
//     // console.log(bookings);
//     const handleStatus = async (id, prevStatus, status) => {
//         console.log(id, prevStatus, status);
//         if (prevStatus === status) return console.log("Sry vai.. hobena");
//         axiosSecure.patch(`/user/${id}`, { status }).then((res) => {
//           console.log(res.data);
//           if (res.data.modifiedCount > 0) {
          
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "tour status updated",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         });
      
        
//       };
//     return (
//         <div>
//              <div className="overflow-x-auto">
//         <table className="table  w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Package Name</th>
//               <th>Name</th>
//               <th>Date</th>
//               <th>price</th>
//               <th className="border-spacing-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((item, index) => (
//               <tr key={item._id}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <h1>{item.tour_type}</h1>
//                   </div>
//                 </td>
//                 <td>{user.displayName}</td>
//                 <td>{item.to}</td>

//                 <td>{item.price}</td>
//                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                   <div className="flex items-center gap-x-6">
//                     {/* Accept Button: In Progress */}
//                     <button
//                       onClick={() =>
//                         handleStatus(item._id, item.status, "Accepted")
//                       }
//                       disabled={item.status === "Rejected"}
//                       className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
//                     >
//                       Accept
//                     </button>
//                     {/* Reject Button */} 
//                     <button
//                       onClick={() =>
//                         handleStatus(item._id, item.status, "Rejected")
//                       }
//                       disabled={item.status === "Accepted"}
//                       className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//         </div>
//     );
// };

// export default Request;