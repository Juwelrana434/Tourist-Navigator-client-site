import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecures from "./useAxiosSecures";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecures = useAxiosSecures();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecures.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;