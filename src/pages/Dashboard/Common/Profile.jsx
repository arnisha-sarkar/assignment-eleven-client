// // import coverImg from "../../../assets/images/cover.jpg";
// import { useNavigate } from "react-router";
// import useAuth from "../../../hooks/useAuth";
// import useRole from "../../../hooks/useRole";
// import toast from "react-hot-toast";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthContext";

// const Profile = () => {
//   const { user, setUser, signOutFun, loading, setLoadin } =
//     useContext(AuthContext);
//   console.log(user);
//   const handleSignOut = () => {
//     signOutFun()
//       .then(() => {
//         toast.success("Signout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };
//   const [role, isRoleLoading] = useRole();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/login"); // ✅ logout এর পর login page
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
//         <img
//           alt="cover photo"
//           src=""
//           className="w-full mb-4 rounded-t-lg h-56"
//         />

//         <div className="flex flex-col items-center justify-center p-4 -mt-16">
//           <a href="#" className="relative block">
//             <img
//               alt="profile"
//               src={user?.photoURL}
//               className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
//             />
//           </a>

//           <p className="p-2 px-4 text-xs text-white bg-[#007aff] rounded-full">
//             {isRoleLoading ? "Loading..." : role}
//           </p>

//           <p className="mt-2 text-xl font-medium text-gray-800">
//             User Id: {user?.uid}
//           </p>

//           <div className="w-full p-2 mt-4 rounded-lg">
//             <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
//               <p className="flex flex-col">
//                 Name
//                 <span className="font-bold text-gray-600">
//                   {user?.displayName}
//                 </span>
//               </p>

//               <p className="flex flex-col">
//                 Email
//                 <span className="font-bold text-gray-600">{user?.email}</span>
//               </p>

//               <div className="space-y-2">
//                 {/* <button className="bg-lime-500 px-10 py-1 rounded-lg text-white hover:bg-lime-800 block">
//                   Update Profile
//                 </button>

//                 <button className="bg-lime-500 px-7 py-1 rounded-lg text-white hover:bg-lime-800 block">
//                   Change Password
//                 </button> */}

//                 {/* ✅ Logout Button */}
//                 <button
//                   onClick={handleSignOut}
//                   className="bg-[#007aff] px-12 py-1 rounded-lg text-white  block"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// ------------------------------

import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthContext";
import { motion } from "framer-motion";
import {
  FiLogOut,
  FiMail,
  FiUser,
  FiShield,
  FiEdit3,
  FiKey,
} from "react-icons/fi";

const Profile = () => {
  const { user, setUser, signOutFun } = useContext(AuthContext);
  const [role, isRoleLoading] = useRole();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutFun()
      .then(() => {
        toast.success("Signed out successfully");
        setUser(null);
        navigate("/login");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070d19] flex items-center justify-center py-12 px-4 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white dark:bg-[#0A192F] shadow-2xl rounded-[3rem] overflow-hidden w-full max-w-2xl border border-gray-100 dark:border-white/5"
      >
        {/* Cover Section */}
        <div className="h-48 bg-gradient-to-r from-[#0A2540] to-[#C9A24D] relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        </div>

        {/* Profile Content */}
        <div className="relative px-8 pb-10">
          {/* Profile Image & Role Badge */}
          <div className="flex flex-col items-center -mt-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#C9A24D] rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                alt="profile"
                src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                className="relative h-40 w-40 object-cover rounded-full border-4 border-white dark:border-[#0A192F] shadow-xl"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border dark:border-white/10 cursor-pointer text-[#C9A24D]"
              >
                <FiEdit3 size={18} />
              </motion.div>
            </div>

            <h2 className="mt-4 text-3xl font-black text-gray-800 dark:text-white flex items-center gap-2">
              {user?.displayName}
            </h2>

            <div className="mt-2 flex items-center gap-2 px-4 py-1.5 bg-[#C9A24D]/10 border border-[#C9A24D]/20 rounded-full">
              <FiShield className="text-[#C9A24D]" size={14} />
              <span className="text-xs font-black text-[#C9A24D] uppercase tracking-widest">
                {isRoleLoading ? "Authenticating..." : role}
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white dark:bg-white/10 rounded-xl text-[#C9A24D] shadow-sm">
                  <FiMail size={18} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Email Address
                </span>
              </div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-200 truncate">
                {user?.email}
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white dark:bg-white/10 rounded-xl text-[#C9A24D] shadow-sm">
                  <FiUser size={18} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  User Identity
                </span>
              </div>
              <p className="text-[10px] font-mono font-bold text-gray-700 dark:text-gray-200">
                ID: {user?.uid}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#0A2540] dark:bg-white/10 text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-[#133a61] transition-all"
            >
              <FiKey size={18} /> Change Password
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignOut}
              className="flex items-center gap-2 px-8 py-3 bg-red-500/10 text-red-500 rounded-2xl font-bold text-sm border border-red-500/20 hover:bg-red-500 hover:text-white transition-all group"
            >
              <FiLogOut
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Sign Out
            </motion.button>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="h-2 bg-[#C9A24D] w-full"></div>
      </motion.div>
    </div>
  );
};

export default Profile;
