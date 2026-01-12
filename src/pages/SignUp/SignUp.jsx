// import React, { useContext } from "react";
// import Container from "../../components/Shared/Container";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../providers/AuthContext";
// import { imageUpload, saveOrUpdateUser } from "../../utils";
// import { Link, useLocation, useNavigate } from "react-router";

// const SignUp = () => {
//   const {
//     createUserWithEmailAndPasswordFun,
//     signInWithPopupFun,
//     updateUserProfile,
//     setLoading,
//   } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onsubmit = async (data) => {
//     const { name, image, email, password } = data;

//     const imageFile = image && image[0];
//     if (!imageFile) {
//       return toast.error("Please upload a profile image");
//     }

//     try {
//       setLoading(true);

//       const imageURL = await imageUpload(imageFile);

//       const result = await createUserWithEmailAndPasswordFun(email, password);

//       await updateUserProfile(name, imageURL);

//       await saveOrUpdateUser({ name, email, image: imageURL });

//       toast.success("Signup Successful");
//       navigate(from, { replace: true });
//     } catch (err) {
//       console.error(err);

//       const errorMsg = err.response?.data?.message || err.message;
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithPopupFun();

//       await saveOrUpdateUser({
//         name: result?.user?.displayName,
//         email: result?.user?.email,
//         image: result?.user?.photoURL,
//       });

//       toast.success("Signup Successful with Google");
//       navigate(from, { replace: true });
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <div className="min-h-[96vh] flex items-center justify-center bg-[#000] relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
//           <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
//           <div className="max-w-lg text-center lg:text-left">
//             <h1 className="text-5xl font-extrabold">Create Your Account</h1>
//           </div>

//           <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

//             <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
//               <div>
//                 <label className="block mb-1 text-sm">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
//                   {...register("name", { required: "Name is required" })}
//                 />
//                 {errors.name && (
//                   <p className="text-red-400 text-xs">{errors.name.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm">Email address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="text-red-400 text-xs">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm">Profile Picture</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-lime-50 file:text-lime-700 bg-gray-100 rounded-md"
//                   {...register("image", { required: "Image is required" })}
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm">Password</label>
//                 <input
//                   type="password"
//                   placeholder="*******"
//                   className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: { value: 6, message: "At least 6 characters" },
//                   })}
//                 />
//                 {errors.password && (
//                   <p className="text-red-400 text-xs">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary w-full rounded-md py-3 text-white font-bold transition"
//               >
//                 SIGN UP
//               </button>
//             </form>

//             <div className="flex items-center pt-4 space-x-1">
//               <div className="flex-1 h-px bg-white/20"></div>
//               <p className="px-3 text-sm">Or signup with</p>
//               <div className="flex-1 h-px bg-white/20"></div>
//             </div>

//             <button
//               onClick={handleGoogleSignIn}
//               className="w-full flex justify-center items-center space-x-2 border mt-4 p-2 rounded-md hover:bg-white/10 transition"
//             >
//               <span>Continue with Google</span>
//             </button>

//             <p className="mt-4 text-sm text-center">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-600 hover:underline">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SignUp;

// -------------------------------

import React, { useContext } from "react";
import Container from "../../components/Shared/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthContext";
import { imageUpload, saveOrUpdateUser } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowRight } from "react-icons/fi";

const SignUp = () => {
  const {
    createUserWithEmailAndPasswordFun,
    signInWithPopupFun,
    updateUserProfile,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { name, image, email, password } = data;
    const imageFile = image && image[0];

    if (!imageFile) return toast.error("Please upload a profile image");

    try {
      setLoading(true);
      const imageURL = await imageUpload(imageFile);
      await createUserWithEmailAndPasswordFun(email, password);
      await updateUserProfile(name, imageURL);
      await saveOrUpdateUser({ name, email, image: imageURL });

      toast.success("Welcome to the family! Signup Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopupFun();
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      });
      toast.success("Signup Successful with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[#C9A24D]/10 rounded-full blur-[120px] -top-48 -right-24 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -bottom-48 -left-24 animate-pulse"></div>
      </div>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block lg:w-1/2"
          >
            <h4 className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Join Our Community
            </h4>
            <h1 className="text-5xl font-black text-white leading-tight mb-6">
              Start Your <br />{" "}
              <span className="text-[#C9A24D]">Style Journey</span> Today
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed italic border-l-2 border-[#C9A24D] pl-4">
              "Fashion is the armor to survive the reality of everyday life."
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-[2.5rem] p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Sign Up
              </h2>

              <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
                {/* Name */}
                <div className="space-y-1">
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#C9A24D] outline-none transition-all placeholder:text-gray-600"
                      {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-[10px] ml-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#C9A24D] outline-none transition-all placeholder:text-gray-600"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-[10px] ml-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Profile Picture */}
                <div className="space-y-1">
                  <div className="relative group">
                    <FiCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D] z-10" />
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-dashed border-white/20 rounded-2xl text-xs text-gray-400 file:hidden cursor-pointer hover:bg-white/10 transition-all flex items-center"
                      {...register("image", { required: "Image is required" })}
                    />
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 text-[13px] pointer-events-none group-hover:text-gray-300"></span>
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
                    <input
                      type="password"
                      placeholder="Create Password"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#C9A24D] outline-none transition-all placeholder:text-gray-600"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Min 6 characters" },
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-[10px] ml-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#C9A24D] text-[#0A2540] font-black rounded-2xl shadow-lg shadow-[#C9A24D]/20 flex items-center justify-center gap-2 group mt-4 transition-all"
                >
                  CREATE ACCOUNT
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <div className="flex items-center gap-4 my-6">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                  Or Join with
                </span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center gap-3 bg-white py-3 rounded-2xl text-[#0A2540] font-bold text-sm shadow-xl transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                Google
              </motion.button>

              <p className="mt-8 text-center text-sm text-gray-400">
                Member already?{" "}
                <Link
                  to="/login"
                  className="text-[#C9A24D] font-bold hover:underline ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
