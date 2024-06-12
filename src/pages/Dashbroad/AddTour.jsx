

// const AddTour = () => {
//     const handleAddComment = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const name = user.displayName;
//         const photo = user.photoURL;
//         const email = user.email;
//         const to = dates.endDate
//         const from = dates.startDate
//         const GuideName = form.Guide.value;
    
//         const booking = {
         
          
//           email,
//           photo,
//           name,
//           tour_type,
//           trip_title,
//           image_url,
//           durations,
//           Transport,
//           location,
//           GuideName,
//           to,
//           from,
//           price
//         }; // Fixed property name
//         // console.log(addComment);
    
    
    
//         // send to server
    
//         fetch("http://localhost:8000/booking", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(booking),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             // console.log(data);
//             if (data.insertedId) {
//               Swal.fire({
//                 title: "Success!",
//                 text: "Add Booking successfully",
//                 icon: "success",
//                 confirmButtonText: "Cool",
//               });
//             }
//           });
//       };
//     return (
//         <div>
//             <div>
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
//         </div>
//     );
// };

// export default AddTour;