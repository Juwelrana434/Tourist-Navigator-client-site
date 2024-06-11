import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/booking")
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

                axiosSecure.delete(`/booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
                            <th>Guide name</th>
                            <th>Date</th>
                            <th>price</th>
                           
                            <th>status</th>
                            <th>payment</th>
                            
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
                                       In Review
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                       Accepted
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                       Cancel
                                    </button>
                                    
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                       Payment
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

export default MyBooking;