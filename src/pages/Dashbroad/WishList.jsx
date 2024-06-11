import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";


const WishList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/wishList")
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }, []);
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishlist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tour has been deleted.",
                                icon: "success"
                            });
                            const remain = bookings.filter(tour =>tour._id !==id);
              setBookings(remain);
                        }
                    })
            }
        });
    }
    return (
        <div>
         <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                           
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image_url} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.tour_type}
                                </td>
                                <td>{item.GuideName}</td>
                                <td>{item.from}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                      <FaTrashAlt className="text-red-700"/>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                       Details
                                    </button>
                                    
                                </th>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;