import { FaUsers } from "react-icons/fa";
import MenuItem from "./MenuItem";

const GuideMenu = () => {
    return (
        <div>
             <MenuItem icon={FaUsers} label='My Profile'address='/dashbroad/profile'/>
            <MenuItem icon={FaUsers} label='My Assignment'address='/dashbroad/assigned'/>
        </div>
    );
};

export default GuideMenu;