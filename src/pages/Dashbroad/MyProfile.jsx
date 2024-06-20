// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
// import { imageUpload } from "../../api/utils";
// import useRole from "../../hooks/useRole";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const MyProfile = () => {
//   const { user } = useAuth();
//   const [role] = useRole();

//   const axiosSecure = useAxiosSecure();

//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

//   const handleMakeRequest = (user) => {
//     axiosSecure.patch(`/users/guide/${user._id}`).then((res) => {
//       console.log(res.data);
//       if (res.data.modifiedCount > 0) {
//         refetch();
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: `${user.name} is an Admin Now!`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     });
//   };
  
//   const handleAddStory = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const touristName = user.displayName;
//     const photo = user.photoURL;
//     const email = user.email;
//     const image_1 = form.photo.value;
//     const tour_type = form.tour_type.value;
//     const excerpt = form.message.value;
//     const title = form.trip_title.value;
//     // const image_url =  imageUpload(image)
//     const story = {
//       email,
//       photo,
//       touristName,
//       excerpt,
//       title,
//       image_1,
//       tour_type,
//     }; // Fixed property name
//     // console.log(addComment);

//     // send to server

//     fetch("http://localhost:8000/story", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(story),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Add story successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };
//   return (
//     <div>
//       <div className="flex gap-6">
//         <img src={user.photoURL} className="" />
//         <div>
//           {" "}
//           <h1>{user.email}</h1>
//           <h1>{user.displayName}</h1>
//         </div>
//       </div>
//       <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
//         <p>{role} </p>
//       </div>
//       <div>
//         <div>
//           <div className=" text-black font-bold mx-auto  w-full m-4">
//             <h1 className="text-center pt-6 text-[25px]">Make A story</h1>

//             <form onSubmit={handleAddStory}>
//               <div className=" bg-[#eef3f8]">
//                 <div className="lg:px-10 h-full pt-8 grid grid-cols-2 gap-6">
//                   <div>
//                     <label>Tour Type</label>
//                     <input
//                       type="text"
//                       name="tour_type"
//                       placeholder="trip_type"
//                       className="w-full p-3 mt-2"
//                     />

//                     <label>Tour Title</label>
//                     <input
//                       type="text"
//                       name="trip_title"
//                       placeholder="tour_title"
//                       className="w-full p-3 mt-2"
//                     />

//                     <br />
//                   </div>
//                   <div className="">
//                     <label>Write a Message</label>
//                     <textarea
//                       type="text"
//                       name="message"
//                       required
//                       placeholder="write short description"
//                       className="w-full p-3 mt-4"
//                     />

//                     <br />
//                     <label>Upload photo</label>
//                     <input
//                       type="text"
//                       name="photo"
//                       placeholder="insert photoUrl*"
//                       className="w-full p-3"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <input
//                 type="submit"
//                 value="Save & Continue"
//                 className="w-full btn btn-primary my-6"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={() => handleMakeRequest(user)}
//         className="btn btn-lg bg-blue-500"
//       >
//         {user.status}Request to Guide
//       </button>
//     </div>
//   );
// };

// export default MyProfile;
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import useRole from "../../hooks/useRole";
import { useQuery, useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const MyProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeRequest = async (user) => {
    axiosSecure.patch(`/user/guide/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleAddStory = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const story = {
      email: user.email,
      photo: user.photoURL,
      touristName: user.displayName,
      image_1: form.photo.value,
      tour_type: form.tour_type.value,
      excerpt: form.message.value,
      title: form.trip_title.value,
    };

    try {
      const response = await fetch("http://localhost:8000/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story),
      });
      const data = await response.json();
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Story added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error("Error adding story:", error);
    } finally {
      setLoading(false);
    }
  };
// const {status} = users;
  return (
    <div>
    <p>{users.length}</p>
      <div className="flex gap-6">
        <img src={user.photoURL} className="" alt={`${user.displayName}`} />
        <div>
          <h1>{user.email}</h1>
          <h1>{user.displayName}</h1>
        </div>
      </div>
      <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
        <p>{role}</p>
      </div>
      <div>
        <div className="text-black font-bold mx-auto w-full m-4">
          <h1 className="text-center pt-6 text-[25px]">Make A Story</h1>
          <form onSubmit={handleAddStory}>
            <div className="bg-[#eef3f8]">
              <div className="lg:px-10 h-full pt-8 grid grid-cols-2 gap-6">
                <div>
                  <label>Tour Type</label>
                  <input
                    type="text"
                    name="tour_type"
                    placeholder="Tour type"
                    className="w-full p-3 mt-2"
                    required
                  />
                  <label>Tour Title</label>
                  <input
                    type="text"
                    name="trip_title"
                    placeholder="Tour title"
                    className="w-full p-3 mt-2"
                    required
                  />
                </div>
                <div>
                  <label>Write a Message</label>
                  <textarea
                    name="message"
                    placeholder="Write short description"
                    className="w-full p-3 mt-4"
                    required
                  />
                  <label>Upload photo</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Insert photo URL"
                    className="w-full p-3 mt-2"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Save & Continue"
              className="w-full btn btn-primary my-6"
              disabled={loading}
            />
          </form>
        </div>
      </div>
      {/* {users.map((user) => (
              <tr key={user._id}>
                
                <td>
                  {
                    <button
                      onClick={() => handleMakeRequest(user)}
                      className="btn btn-lg bg-blue-500"
                    >
                     {user.status}
                    </button>
                  }
                
                </td>
                
               
              </tr>
            ))} */}
            
            <button
                      onClick={() => handleMakeRequest(user)}
                      className="btn btn-lg bg-blue-500"
                    >
                     Request to guide
                    </button>
    </div>
  );
};

export default MyProfile;
