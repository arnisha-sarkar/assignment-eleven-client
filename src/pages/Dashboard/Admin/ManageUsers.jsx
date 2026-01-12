import { useQuery } from "@tanstack/react-query";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/users`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="flex flex-col md:table-row mb-4 md:mb-0 border border-gray-200 md:border-none bg-white rounded-lg md:rounded-none shadow-sm md:shadow-none overflow-hidden">
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Email
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Role
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserDataRow key={user._id} user={user} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

// ------------------------------------
