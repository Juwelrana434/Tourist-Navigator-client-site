
import { FaUserCog, FaUsers } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={ FaUsers} label='Manage Users' address='/dashbroad/users' />
      <MenuItem icon={FaUserCog} label='Add Tour'address='/dashbroad/addtour'/>
      <MenuItem icon={FaUserCog} label='My Profile'address='/dashbroad/profile'/>
     
      
      </>
  )
}

export default AdminMenu
