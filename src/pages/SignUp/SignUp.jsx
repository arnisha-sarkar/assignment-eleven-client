// import React, { useContext } from "react";
// import Container from "../../components/Shared/Container";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../providers/AuthContext";
// import { Link, useLocation, useNavigate } from "react-router";
// import { imageUpload, saveOrUpdateUser } from "../../utils";

// const SignUp = () => {
//   const {
//     createUserWithEmailAndPasswordFun,
//     signInWithPopupFun,
//     updateUserProfile,
//     user,
//     setUser,
//     setLoading,
//   } = useContext(AuthContext);
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
//   const onsubmit = async (data) => {
//     const { name, image, email, password } = data;

//     const imageFile = image[0];
//     // const fomrData = new FormData();
//     // fomrData.append("image", imageFile);

//     try {
//       // const { data } = await axios.post(
//       //   `https://api.imgbb.com/1/upload?key=${
//       //     import.meta.env.VITE_IMGBB_API_KEY
//       //   }`,
//       //   fomrData
//       // );
//       // console.log(data.data.display_url);
//       const imageURL = await imageUpload(imageFile);
//       console.log(imageURL);
//       //2. User Registration
//       await saveOrUpdateUser({ name, email, image: imageURL });
//       const result = await createUserWithEmailAndPasswordFun(email, password);
//       //3. Save username & profile photo
//       await updateUserProfile(name, imageURL);
//       console.log(result);
//       navigate(from, { replace: true });
//       setLoading(false);
//       toast.success("Signup Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
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
//       toast.success("Signup Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };

//   return (
//     <Container>
//       <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br bg-[#000] relative overflow-hidden">
//         {/* Animated floating circles */}
//         <div className="absolute inset-0">
//           <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
//           <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
//           <div className="max-w-lg text-center lg:text-left">
//             <h1 className="text-5xl font-extrabold drop-shadow-lg">
//               Create Your Account
//             </h1>
//             <p className="mt-4 text-lg text-white/80 leading-relaxed">
//               Join our community and unlock exclusive features. Your journey
//               begins here!
//             </p>
//           </div>

//           <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-center text-white">
//               Sign Up
//             </h2>

//             {/* <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Habib utsho"
//                   className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                   {...register("name", { required: "name is required" })}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="image"
//                   className="block mb-2 text-sm font-medium text-gray-700"
//                 >
//                   Profile Image
//                 </label>
//                 <input
//                   name="image"
//                   type="file"
//                   id="image"
//                   accept="image/*"
//                   className="block w-full text-sm text-gray-500
//       file:mr-4 file:py-2 file:px-4
//       file:rounded-md file:border-0
//       file:text-sm file:font-semibold
//       file:bg-lime-50 file:text-lime-700
//       hover:file:bg-lime-100
//       bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
//       focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
//       py-2"
//                   {...register("image")}
//                 />
//                 <p className="mt-1 text-xs text-gray-400">
//                   PNG, JPG or JPEG (max 2MB)
//                 </p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="example@email.com"
//                   className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                 />
//               </div>

//               <div className="relative">
//                 <label className="block text-sm font-medium mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="••••••••"
//                   className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                 />
//                 <span className="absolute right-[8px] top-[36px] cursor-pointer z-50"></span>
//               </div>

//               <button type="submit" className="my-btn">
//                 Sign Up
//               </button>

//               <div className="text-center mt-3">
//                 <p className="text-sm text-white/80">
//                   Already have an account?{" "}
//                   <Link
//                     to="/login"
//                     className="text-pink-300 hover:text-white font-medium underline"
//                   >
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </form> */}
//             <form
//               onSubmit={handleSubmit(onsubmit)}
//               noValidate=""
//               action=""
//               className="space-y-6 ng-untouched ng-pristine ng-valid"
//             >
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Enter Your Name Here"
//                     className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
//                     data-temp-mail-org="0"
//                     {...register("name", {
//                       required: "Name is required",
//                       maxLength: {
//                         value: 20,
//                         message: "name can not be to long",
//                       },
//                     })}
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>
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
//                 {/* Image */}
//                 <div>
//                   <label
//                     htmlFor="image"
//                     className="block mb-2 text-sm font-medium text-[#fff]"
//                   >
//                     photoURL
//                   </label>
//                   <input
//                     name="image"
//                     type="file"
//                     id="image"
//                     accept="image/*"
//                     className="block w-full text-sm text-gray-500
//       file:mr-4 file:py-2 file:px-4
//       file:rounded-md file:border-0
//       file:text-sm file:font-semibold
//       file:bg-lime-50 file:text-lime-700
//       hover:file:bg-lime-100
//       bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
//       focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
//       py-2"
//                     {...register("image")}
//                   />
//                   <p className="mt-1 text-xs text-[#fff]">
//                     PNG, JPG or JPEG (max 2MB)
//                   </p>
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
//                       pattern: {
//                         value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
//                         message:
//                           "Password must contain at least one uppercase and one lowercase letter",
//                       },
//                     })}
//                   />
//                   {errors.password && (
//                     <p className="text-red-400 text-xs mt-1">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="bg-lime-500 w-full rounded-md py-3 text-white"
//                 >
//                   sign up
//                 </button>
//               </div>
//             </form>
//             <div className="flex items-center pt-4 space-x-1">
//               <div className="flex-1 h-px sm:w-16 dark:bg-white"></div>
//               <p className="px-3 text-sm dark:text-[#fff]">
//                 Signup with social accounts
//               </p>
//               <div className="flex-1 h-px sm:w-16 dark:bg-white"></div>
//             </div>
//             <div
//               onClick={handleGoogleSignIn}
//               className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
//             >
//               <p>Continue with Google</p>
//             </div>
//             <p className="px-6 text-sm text-center text-[#fff]">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="hover:underline hover:text-lime-500 text-[#fff]"
//               >
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
// router-dom hobe
import { imageUpload, saveOrUpdateUser } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router";

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

    // ১. ইমেজ চেক করা
    const imageFile = image && image[0];
    if (!imageFile) {
      return toast.error("Please upload a profile image");
    }

    try {
      setLoading(true);

      // ২. ইমেজ আপলোড করা
      const imageURL = await imageUpload(imageFile);

      // ৩. ফায়ারবেসে ইউজার তৈরি করা (আগে এটা করা ভালো)
      const result = await createUserWithEmailAndPasswordFun(email, password);

      // ৪. ফায়ারবেস প্রোফাইল (নাম ও ছবি) আপডেট করা
      await updateUserProfile(name, imageURL);

      // ৫. ডাটাবেজে ইউজার ডাটা সেভ করা
      await saveOrUpdateUser({ name, email, image: imageURL });

      toast.success("Signup Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      // AxisError বা অন্য কোনো error handle করা
      const errorMsg = err.response?.data?.message || err.message;
      toast.error(errorMsg);
    } finally {
      setLoading(false); // সাকসেস হোক বা এরর, লোডিং বন্ধ হবে
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopupFun();

      // গুগল থেকে আসা ডাটা ডাটাবেজে সেভ করা
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      });

      toast.success("Signup Successful with Google");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="min-h-[96vh] flex items-center justify-center bg-[#000] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold">Create Your Account</h1>
            <p className="mt-4 text-lg text-white/80">
              Join our community and unlock exclusive features.
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

            <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm">Email address</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-lime-50 file:text-lime-700 bg-gray-100 rounded-md"
                  {...register("image", { required: "Image is required" })}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "At least 6 characters" },
                  })}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-600 w-full rounded-md py-3 text-white font-bold transition"
              >
                SIGN UP
              </button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px bg-white/20"></div>
              <p className="px-3 text-sm">Or signup with</p>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex justify-center items-center space-x-2 border mt-4 p-2 rounded-md hover:bg-white/10 transition"
            >
              <span>Continue with Google</span>
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-lime-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
