import { useEffect, useState } from "react";


const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/booking")
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }, []);
    return (
        <div>
           
        </div>
    );
};

export default MyBooking;