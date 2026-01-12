// import React, { useContext } from "react";
// import Container from "../../components/Shared/Container";
// import { Link, useLocation, useNavigate } from "react-router";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../providers/AuthContext";
// import { saveOrUpdateUser } from "../../utils";

// const Login = () => {
//   const {
//     signInWithEmailAndPasswordFun,
//     signInWithPopupFun,
//     user,
//     setLoading,
//   } = useContext(AuthContext);
//   console.log(user);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state || "/";
//   // react hook form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   console.log(errors);
//   const onSubmit = async (data) => {
//     const { name, image, email, password } = data;
//     console.log(name, image);

//     try {
//       //2. User Registration
//       const { user } = await signInWithEmailAndPasswordFun(email, password);
//       await saveOrUpdateUser({
//         name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL,
//       });
//       navigate(from, { replace: true });
//       toast.success("Login Successful");
//       // setUser(user.user);
//     } catch (err) {
//       console.log(err);
//       console.log(err.code);
//       // toast.error(err?.message);
//       if (err.code == "auth/invalid-credential") {
//         toast.error("Invalid email address");
//       }
//     }
//   };

//   // Handle Google Signin
//   const handleGoogleSignIn = async () => {
//     try {
//       //User Registration using google
//       const { user } = await signInWithPopupFun();
//       await saveOrUpdateUser({
//         name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL,
//       });
//       // setUser(user.user);
//       navigate(from, { replace: true });
//       setLoading(false);
//       toast.success("Login Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };
//   return (
//     <div>
//       <Container>
//         <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br bg-[#000] relative overflow-hidden">
//           {/* Animated glow orbs */}
//           <div className="absolute inset-0">
//             <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
//             <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
//           </div>

//           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
//             {/* Left section */}
//             <div className="max-w-lg text-center lg:text-left">
//               <h1 className="text-5xl font-extrabold drop-shadow-lg">
//                 Welcome Back
//               </h1>
//             </div>

//             {/* Login card */}
//             <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//                 <h2 className="text-2xl font-semibold mb-2 text-center text-white">
//                   Sign In
//                 </h2>

//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter Your Email Here"
//                     className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
//                     data-temp-mail-org="0"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value:
//                           /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                         message: "please enter a valid  email address",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <div className="flex justify-between">
//                     <label htmlFor="password" className="text-sm mb-2">
//                       Password
//                     </label>
//                   </div>
//                   <input
//                     type="password"
//                     autoComplete="new-password"
//                     id="password"
//                     placeholder="*******"
//                     className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "password must be at least 6 characters",
//                       },
//                     })}
//                   />
//                   {errors.password && (
//                     <p className="text-[#fff] text-xs mt-1">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   className="hover:underline cursor-pointer"
//                   type="button"
//                 >
//                   Forget password?
//                 </button>

//                 <div>
//                   <button
//                     type="submit"
//                     className="btn btn-primary w-full rounded-md py-3 text-white"
//                   >
//                     Login in
//                   </button>
//                 </div>

//                 {/* Divider */}
//                 <div className="flex items-center justify-center gap-2 my-2">
//                   <div className="h-px w-16 bg-white/30"></div>
//                   <span className="text-sm text-white/70">or</span>
//                   <div className="h-px w-16 bg-white/30"></div>
//                 </div>

//                 {/* Google Signin */}
//                 <button
//                   onClick={handleGoogleSignIn}
//                   type="button"
//                   className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
//                 >
//                   <img
//                     src="https://www.svgrepo.com/show/475656/google-color.svg"
//                     alt="google"
//                     className="w-5 h-5"
//                   />
//                   Continue with Google
//                 </button>

//                 {/* Github Signin */}
//                 {/* <button
//                   type="button"
//                   className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
//                 >
//                   <img
//                     src="https://img.icons8.com/fluency/48/github.png"
//                     alt="google"
//                     className="w-5 h-5"
//                   />
//                   Continue with Github
//                 </button> */}

//                 <p className="text-center text-sm text-white/80 mt-3">
//                   Don’t have an account?{" "}
//                   <Link
//                     to="/signup"
//                     className="text-blue-600 hover:text-white underline"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Login;

// -------------------------------

// import React, { useContext } from "react";
// import Container from "../../components/Shared/Container";
// import { Link, useLocation, useNavigate } from "react-router";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../providers/AuthContext";
// import { saveOrUpdateUser } from "../../utils";
// import { motion } from "framer-motion";
// import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

// const Login = () => {
//   const { signInWithEmailAndPasswordFun, signInWithPopupFun, setLoading } =
//     useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state || "/";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { email, password } = data;
//     try {
//       const { user } = await signInWithEmailAndPasswordFun(email, password);
//       await saveOrUpdateUser({
//         name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL,
//       });
//       navigate(from, { replace: true });
//       toast.success("Welcome back! Login Successful");
//     } catch (err) {
//       if (err.code === "auth/invalid-credential") {
//         toast.error("Invalid email or password");
//       } else {
//         toast.error(err.message);
//       }
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const { user } = await signInWithPopupFun();
//       await saveOrUpdateUser({
//         name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL,
//       });
//       navigate(from, { replace: true });
//       setLoading(false);
//       toast.success("Login Successful with Google");
//     } catch (err) {
//       toast.error(err?.message);
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-12 px-4">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute -top-20 -left-20 w-96 h-96 bg-[#C9A24D]/20 rounded-full blur-[100px]"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//           className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
//         />
//       </div>

//       <Container>
//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
//           {/* Left Side: Branding Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:block lg:w-1/2 text-left"
//           >
//             <h4 className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-sm mb-4">
//               Quality & Excellence
//             </h4>
//             <h1 className="text-6xl font-black text-white leading-tight mb-6">
//               Elevate Your <br />{" "}
//               <span className="text-[#C9A24D]">Fashion Journey</span>
//             </h1>
//             <p className="text-gray-400 text-lg max-w-md leading-relaxed">
//               Login to access your personalized dashboard and manage your
//               garment orders with ease.
//             </p>
//           </motion.div>

//           {/* Right Side: Login Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="w-full max-w-md"
//           >
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 md:p-10">
//               <div className="text-center mb-10">
//                 <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
//                 <div className="w-12 h-1 bg-[#C9A24D] mx-auto rounded-full"></div>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                 {/* Email Input */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
//                     <input
//                       type="email"
//                       placeholder="name@company.com"
//                       className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D] transition-all placeholder:text-gray-600"
//                       {...register("email", { required: "Email is required" })}
//                     />
//                   </div>
//                   {errors.email && (
//                     <p className="text-red-400 text-xs mt-1 ml-1">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Password Input */}
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center ml-1">
//                     <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       className="text-xs text-[#C9A24D] hover:underline"
//                     >
//                       Forgot?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
//                     <input
//                       type="password"
//                       placeholder="••••••••"
//                       className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D] transition-all placeholder:text-gray-600"
//                       {...register("password", {
//                         required: "Password is required",
//                       })}
//                     />
//                   </div>
//                   {errors.password && (
//                     <p className="text-red-400 text-xs mt-1 ml-1">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Login Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full py-4 bg-[#C9A24D] text-[#0A2540] font-black rounded-2xl shadow-lg shadow-[#C9A24D]/20 flex items-center justify-center gap-2 group transition-all"
//                 >
//                   LOGIN NOW
//                   <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>

//                 {/* Divider */}
//                 <div className="flex items-center gap-4 my-8">
//                   <div className="h-[1px] flex-1 bg-white/10"></div>
//                   <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
//                     OR
//                   </span>
//                   <div className="h-[1px] flex-1 bg-white/10"></div>
//                 </div>

//                 {/* Social Login */}
//                 <motion.button
//                   whileHover={{ y: -2 }}
//                   onClick={handleGoogleSignIn}
//                   type="button"
//                   className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl text-[#0A2540] font-bold shadow-xl transition-all"
//                 >
//                   <img
//                     src="https://www.svgrepo.com/show/475656/google-color.svg"
//                     className="w-5 h-5"
//                     alt="google"
//                   />
//                   Continue with Google
//                 </motion.button>

//                 <p className="text-center text-sm text-gray-400 mt-8">
//                   Don’t have an account?{" "}
//                   <Link
//                     to="/signup"
//                     className="text-[#C9A24D] font-bold hover:underline ml-1"
//                   >
//                     Create Account
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Login;

// -----------------------------------------

import React, { useContext } from "react";
import Container from "../../components/Shared/Container";
import { Link, useLocation, useNavigate } from "react-router"; // Standard import
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthContext";
import { saveOrUpdateUser } from "../../utils";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";

const Login = () => {
  const { signInWithEmailAndPasswordFun, signInWithPopupFun, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // ১. ডেমো অ্যাক্সেস হ্যান্ডলার (ডুপ্লিকেট রিমুভ করা হয়েছে)
  const handleDemoLogin = (role) => {
    if (role === "admin") {
      setValue("email", "admin100@gmail.com");
      setValue("password", "12345Ad@");
      toast.success("Admin credentials loaded!");
    } else if (role === "manager") {
      setValue("email", "manager100@gmail.com");
      setValue("password", "2468@Mg");
      toast.success("Manager credentials loaded!");
    }
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true); // লোডিং শুরু
      const { user } = await signInWithEmailAndPasswordFun(email, password);
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Welcome back! Login Successful");
    } catch (err) {
      toast.error(
        err.code === "auth/invalid-credential"
          ? "Invalid email or password"
          : err.message
      );
    } finally {
      setLoading(false); // লোডিং শেষ
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const { user } = await signInWithPopupFun();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2540] relative overflow-hidden flex items-center justify-center py-12 px-4">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,77,0.1),transparent_50%)]"></div>
      </div>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block lg:w-1/2"
          >
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">
              Access the <br />{" "}
              <span className="text-[#C9A24D]">Management Panel</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-sm">
              Use the quick access buttons to explore different roles and
              features of our platform.
            </p>

            {/* Quick Access Buttons */}
            <div className="space-y-4">
              <p className="text-[#C9A24D] text-xs font-bold uppercase tracking-widest">
                Quick Testing Access
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleDemoLogin("admin")}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#C9A24D]/20 transition-all text-white group"
                >
                  <FiShield className="text-[#C9A24D] text-xl" />
                  <div className="text-left">
                    <p className="text-sm font-bold">Admin Account</p>
                    <p className="text-[10px] text-gray-500">Full Access</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleDemoLogin("manager")}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#C9A24D]/20 transition-all text-white group"
                >
                  <FiUserCheck className="text-[#C9A24D] text-xl" />
                  <div className="text-left">
                    <p className="text-sm font-bold">Manager Account</p>
                    <p className="text-[10px] text-gray-500">Limited Access</p>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Sign In
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1">
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
                    <input
                      {...register("email", { required: "Email is required" })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-1 focus:ring-[#C9A24D]"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs ml-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]" />
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-1 focus:ring-[#C9A24D]"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-xs ml-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#C9A24D] text-[#0A2540] font-black rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#C9A24D]/20"
                >
                  LOGIN <FiArrowRight />
                </motion.button>

                {/* Mobile Demo Access */}
                <div className="lg:hidden grid grid-cols-2 gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("admin")}
                    className="text-[10px] bg-white/5 border border-white/10 py-2 rounded-xl text-gray-400"
                  >
                    Demo Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("manager")}
                    className="text-[10px] bg-white/5 border border-white/10 py-2 rounded-xl text-gray-400"
                  >
                    Demo Manager
                  </button>
                </div>

                <div className="relative py-4 flex items-center gap-2">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    OR
                  </span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-white py-3.5 rounded-2xl text-[#0A2540] font-bold hover:bg-gray-100 transition-all"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                    alt="google"
                  />
                  Continue with Google
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
