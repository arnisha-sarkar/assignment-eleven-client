// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

// const useRole = () => {
//   const { user, loading } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { data: role, isLoading: isRoleLoading } = useQuery({
//     enabled: !loading && !!user?.email,
//     queryKey: ["role", user?.email],
//     queryFn: async () => {
//       const { data } = await axiosSecure(`/user/role/${user?.email}`);
//       return data.role;
//     },
//   });
//   return [role, isRoleLoading];
// };

// export default useRole;

import axios from "axios";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role = "no-role", isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/role/${user?.email}`
      );
      return res.data.role;
    },
  });

  return [role, isRoleLoading];
};

export default useRole;
