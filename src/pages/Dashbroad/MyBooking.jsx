import { useEffect, useState } from "react";

// import { FaTrashAlt } from "react-icons/fa";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyBooking = () => {
const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
      fetch(`https://tourist-server-six.vercel.app/booking/${user?.email}`)
    //   fetch('https://tourist-server-six.vercel.app/booking')
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }, []);
    // console.log(bookings);
   // Calculate total price
  const totalPrice = bookings.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
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
    if (bookings.length > 3) {toast.success('Congratulations You have successfully won discount')}
    return (
        <div>
        <h1 className="text-xl font-semibold"> Total Tour price : ${totalPrice}</h1>
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
                               
                                
                                    <p>{item.status}</p>    
                                   
                                    
                                    
                                    {item.status === "In Review" ? (<button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                       Cancel
                                    </button>):( ''
                )}
                                   
                                </th>
                                <th>
                                {item.status === "Accepted" ? (<Link to='/dashbroad/payment'><button
                                        className="btn btn-primary">
                                       Payment
                                    </button></Link>):(''
                )}
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