// import React, { useState } from "react";
// import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";

// const UserDataRow = ({ user, refetch }) => {
//   let [isOpen, setIsOpen] = useState(false);
//   const closeModal = () => setIsOpen(false);
//   return (
//     <tr>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{user?.name}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{user?.email}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{user?.role}</p>
//       </td>
//       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="">Unavailable</p>
//       </td> */}

//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <span
//           onClick={() => setIsOpen(true)}
//           className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//         >
//           <span
//             aria-hidden="true"
//             className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
//           ></span>
//           <span className="relative">Update Role</span>
//         </span>
//         {/* Modal */}
//         <UpdateUserRoleModal
//           user={user}
//           refetch={refetch}
//           isOpen={isOpen}
//           closeModal={closeModal}
//           role="customer"
//         />
//       </td>
//     </tr>
//   );
// };

// export default UserDataRow;

// ------------------------------------

import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserDataRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  // Status Change (Approve / Suspend)
  const handleStatusChange = async (newStatus) => {
    try {
      await axiosSecure.patch("/update-status", {
        email: user.email,
        status: newStatus,
      });
      toast.success(
        `User ${newStatus === "active" ? "Approved" : "Suspended"}!`
      );
      refetch(); // refresh table
    } catch (err) {
      toast.error("Failed to update status");
      console.log(err);
    }
  };

  return (
    <tr>
      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{user?.name}</p>
      </td>

      {/* Email */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{user?.email}</p>
      </td>

      {/* Role */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{user?.role}</p>
      </td>

      {/* Actions */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex flex-col gap-2">
        {/* Role Update */}
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer px-3 py-1 font-semibold text-blue-900 bg-blue-200 rounded text-center"
        >
          Update Role
        </span>

        <UpdateUserRoleModal
          user={user}
          refetch={refetch}
          isOpen={isOpen}
          closeModal={closeModal}
        />

        {/* Status Approve / Suspend */}
        {user.status === "pending" ? (
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => handleStatusChange("active")}
          >
            Approve
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => handleStatusChange("pending")}
          >
            Suspend
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserDataRow;
