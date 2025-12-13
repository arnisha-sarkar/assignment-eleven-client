import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateUserRoleModal = ({ isOpen, closeModal, user, refetch }) => {
  const [updatedRole, setUpdatedRole] = useState(user?.role);

  const axiosSecure = useAxiosSecure();

  const handleRoleUpdate = async () => {
    try {
      await axiosSecure.patch("/update-role", {
        email: user?.email,
        role: updatedRole,
      });
      toast.success("Role Updated!");
      refetch();
      // setUpdatedRole(updatedRole);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      closeModal();
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
              Update User Role
            </DialogTitle>
            <form>
              <div>
                <select
                  value={updatedRole}
                  onChange={(e) => setUpdatedRole(e.target.value)}
                  className="w-full my-3 border border-gray-200 rounded-xl px-2 py-3"
                  name="role"
                  id=""
                >
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex mt-2 justify-around">
                <button
                  onClick={handleRoleUpdate}
                  type="button"
                  className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUserRoleModal;

// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useState } from "react";

// const UpdateUserRoleModal = ({ isOpen, closeModal, user, onUpdate }) => {
//   const [updatedRole, setUpdatedRole] = useState(user?.role);

//   const handleUpdate = () => {
//     onUpdate(updatedRole); // Parent component will handle API call
//     closeModal();
//   };

//   return (
//     <Dialog
//       open={isOpen}
//       as="div"
//       className="relative z-10 focus:outline-none"
//       onClose={closeModal}
//     >
//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-center justify-center p-4">
//           <DialogPanel
//             transition
//             className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
//           >
//             <DialogTitle
//               as="h3"
//               className="text-lg font-semibold text-gray-800 mb-4"
//             >
//               Update User Role
//             </DialogTitle>

//             {/* User Info */}
//             <div className="mb-4">
//               <p className="text-sm text-gray-600">
//                 <strong>Name:</strong> {user?.name}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Email:</strong> {user?.email}
//               </p>
//             </div>

//             <form>
//               <div>
//                 <label className="text-sm font-medium">Select Role</label>
//                 <select
//                   value={updatedRole}
//                   onChange={(e) => setUpdatedRole(e.target.value)}
//                   className="w-full my-3 border border-gray-300 rounded-xl px-3 py-3 focus:ring focus:ring-indigo-300"
//                   name="role"
//                 >
//                   <option value="customer">Customer</option>
//                   <option value="seller">Seller</option>
//                   <option value="manager">Manager</option>
//                   <option value="admin">Admin</option>
//                   <option value="approved">Approve</option>
//                   <option value="suspended">Suspend</option>
//                 </select>
//               </div>

//               <div className="flex mt-4 justify-between">
//                 <button
//                   onClick={handleUpdate}
//                   type="button"
//                   className="cursor-pointer inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200"
//                 >
//                   Update
//                 </button>

//                 <button
//                   type="button"
//                   className="cursor-pointer inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </DialogPanel>
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default UpdateUserRoleModal;
