import MenuItem from "./MenuItem";
import { FaUserCog, FaUsers } from "react-icons/fa";

const TouristMenu = () => {
    return (
        <>
        <MenuItem icon={FaUserCog} label='My Booking' address='/dashbroad/mybooking' />
        <MenuItem icon={FaUserCog} label='My WishList' address='/dashbroad/wishlist'/>
        <MenuItem icon={FaUsers} label='My Profile'address='/dashbroad/myprofile'/>
        
        </>
    );
};

export default TouristMenu;