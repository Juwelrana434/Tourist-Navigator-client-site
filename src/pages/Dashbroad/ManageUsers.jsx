

// import { useEffect, useState } from "react";
// import { FaTrashAlt, FaUsers } from "react-icons/fa";
// import Swal from "sweetalert2";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";


// const AllUsers = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users"); 
//       return res.data;
//     },
//   });

//   const [userss, setUsers] = useState([]);
//   useEffect(() => {
//       fetch("https://tourist-server-six.vercel.app/users")
//         .then((res) => res.json())
//         .then((data) => setUsers(data));
//     }, []);
//     console.log(users);
//   const handleMakeAdmin = (user) => {
//     axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
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

//   const handleDeleteUser = (user) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/users/${user._id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             // refetch();
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//             const remain = users.filter(tour =>tour._id !==user._id);
//               setUsers(remain);
//           }
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-evenly my-4">
//         <h2 className="text-3xl">All Users</h2>
//         <h2 className="text-3xl">Total Users: {users.length}</h2>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userss.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>{user.displayName}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   {user.role === "admin" ? (
//                     "Admin"
//                   ) : (
//                     <button
//                       onClick={() => handleMakeAdmin(user)}
//                       className="btn btn-lg bg-blue-500"
//                     >
//                       <FaUsers
//                         className="text-white 
//                                         text-2xl"
//                       ></FaUsers>
//                     </button>
//                   )}
//                 </td >
                
//                 <td>
//                   <button
//                     onClick={() => handleDeleteUser(user)}
//                     className="btn btn-ghost btn-lg"
//                   >
//                     <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;


// import { useEffect, useState } from "react";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      // console.log(res.data);
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
  const handleMakeGuide = (user) => {
    axiosSecure.patch(`/users/guide/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Guide Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Role</th>
              {/* <th>Status</th> */}
              <th> Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  
                     {user.role}
                   
                
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button className="btn btn-primary"
                      onClick={() => handleMakeAdmin(user)}
                     
                    >
                    Make Admin
                    </button>
                  )}
                
                </td>
                <td>
                {user.role === "admin" || user.role ==="guide" ? (""):(<button
                      onClick={() => handleMakeGuide(user)}
                    
                    className="btn btn-accent"
                    >
                     Make guide
                    </button>
                )}
                    
                  
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        

      </div>
    </div>
  );
};

export default ManageUsers;
