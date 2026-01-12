import { useForm } from "react-hook-form";

import { imageUpload } from "../../utils";

import useAuth from "../../hooks/useAuth";

import axios from "axios";

import { useMutation } from "@tanstack/react-query";

import LoadingSpinner from "../Shared/LoadingSpinner";

import ErrorPage from "../../pages/ErrorPage";

import toast from "react-hot-toast";

import {
  FiPlusCircle,
  FiUploadCloud,
  FiImage,
  FiVideo,
  FiTag,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";

const AddProduct = () => {
  const { user } = useAuth();

  const {
    isPending,

    isError,

    mutateAsync,

    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/add-product`, payload),

    onSuccess: () => {
      toast.success("Product added successfully! 🚀");

      mutationReset();

      reset();
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const {
    register,

    handleSubmit,

    formState: { errors },

    reset,

    watch,
  } = useForm();

  // ইমেজ সিলেক্ট করলে ফাইলের নাম দেখানোর জন্য

  const selectedImage = watch("image");

  const onSubmit = async (data) => {
    const imageFile = data.image[0];

    try {
      const imageUrl = await imageUpload(imageFile);

      const plantData = {
        ...data,

        image: imageUrl,

        quantity: Number(data.quantity),

        price: Number(data.price),

        moq: Number(data.moq),

        seller: {
          image: user?.photoURL,

          name: user?.displayName,

          email: user?.email,
        },
      };

      await mutateAsync(plantData);
    } catch (err) {
      toast.error("Image upload failed!");
    }
  };

  if (isPending) return <LoadingSpinner />;

  if (isError) return <ErrorPage />;

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-[#101828]  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}

        <div className="mb-8 flex items-center gap-3">
          <div className="p-3 bg-[#C9A24D] rounded-2xl shadow-lg shadow-[#C9A24D]/20 text-white">
            <FiPlusCircle size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-black text-gray-800 dark:text-[#F5F2EE] uppercase tracking-tight">
              Add New Product
            </h1>

            <p className="text-sm text-gray-500 dark:text-[#F5F2EE] font-medium">
              Create a new listing for your store
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Side: General Info */}

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FiTag className="text-[#C9A24D]" /> General Information
              </h3>

              <div className="space-y-5">
                {/* Product Name */}

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Product Title
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Premium Cotton Shirt"
                    className={`w-full px-5 py-4 bg-gray-50 border ${
                      errors.name ? "border-red-300" : "border-gray-200"
                    } rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all`}
                    {...register("name", {
                      required: "Product name is required",
                    })}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Description */}

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Description
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Describe the product details, material, and features..."
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all resize-none"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>

                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Inventory & Pricing */}

            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FiDollarSign className="text-[#C9A24D]" /> Pricing & Stock
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Price
                  </label>

                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all"
                    {...register("price", { required: "Required" })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Stock
                  </label>

                  <input
                    type="number"
                    placeholder="Qty"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all"
                    {...register("quantity", { required: "Required" })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    MOQ
                  </label>

                  <input
                    type="number"
                    placeholder="Min Order"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all"
                    {...register("moq", { required: "Required" })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Media & Categories */}

          <div className="space-y-6">
            {/* Image Upload */}

            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FiImage className="text-[#C9A24D]" /> Media
              </h3>

              <div className="relative group">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-[1.5rem] cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#C9A24D] transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUploadCloud
                      size={32}
                      className="text-gray-400 mb-3 group-hover:text-[#C9A24D]"
                    />

                    <p className="text-sm text-gray-500 font-medium">
                      {selectedImage?.[0]
                        ? selectedImage[0].name
                        : "Upload Main Image"}
                    </p>
                  </div>

                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                  />
                </label>
              </div>

              {errors.image && (
                <p className="text-red-500 text-xs mt-2 text-center">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Organization */}

            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FiLayers className="text-[#C9A24D]" /> Organization
              </h3>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Category
                </label>

                <select
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none appearance-none"
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="Shirt">Shirt</option>

                  <option value="Pant">Pant</option>

                  <option value="Jacket">Jacket</option>

                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Payment Method
                </label>

                <select
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none appearance-none"
                  {...register("payment", { required: "Payment required" })}
                >
                  <option value="Cash on Delivery">Cash on Delivery</option>

                  <option value="PayFast">PayFast</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1 flex items-center gap-1">
                  <FiVideo size={14} /> Video URL
                </label>

                <input
                  type="url"
                  placeholder="Youtube link"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C9A24D]/20 focus:border-[#C9A24D] outline-none transition-all"
                  {...register("video")}
                />
              </div>
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-[#C9A24D] hover:bg-[#b38f42] text-white font-black rounded-2xl shadow-lg shadow-[#C9A24D]/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isPending ? "SAVING..." : "SAVE PRODUCT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

// ----------------------------------
// import { useForm } from "react-hook-form";
// import { imageUpload } from "../../utils";
// import useAuth from "../../hooks/useAuth";
// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";
// import LoadingSpinner from "../Shared/LoadingSpinner";
// import ErrorPage from "../../pages/ErrorPage";
// import toast from "react-hot-toast";
// import {
//   FiPlusCircle,
//   FiUploadCloud,
//   FiImage,
//   FiVideo,
//   FiTag,
//   FiDollarSign,
//   FiLayers,
//   FiLock,
//   FiUnlock,
// } from "react-icons/fi";

// const AddProduct = () => {
//   const { user } = useAuth();

//   /** * ১. মেইন ম্যানেজার চেক লজিক:
//    * আপনার ব্রাউজার কনসোলে গিয়ে লিখবেন: localStorage.setItem('isMasterAdmin', 'true')
//    * যারা এটি লিখবে না (যেমন HR বা Client), তারা শুধু Read-Only মোড দেখবে।
//    */
//   const isMasterAdmin = localStorage.getItem("isMasterAdmin") === "true";

//   const {
//     isPending,
//     isError,
//     mutateAsync,
//     reset: mutationReset,
//   } = useMutation({
//     mutationFn: async (payload) =>
//       await axios.post(`${import.meta.env.VITE_API_URL}/add-product`, payload),
//     onSuccess: () => {
//       toast.success("Product added successfully! 🚀");
//       mutationReset();
//       reset();
//     },
//     onError: (error) => {
//       toast.error(error.message || "Something went wrong");
//     },
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//   const selectedImage = watch("image");

//   const onSubmit = async (data) => {
//     // ২. সাবমিট করার আগে আবার চেক (নিরাপত্তা)
//     if (!isMasterAdmin) {
//       return toast.error("READ-ONLY MODE: You cannot save changes.");
//     }

//     const imageFile = data.image[0];
//     try {
//       const imageUrl = await imageUpload(imageFile);
//       const plantData = {
//         ...data,
//         image: imageUrl,
//         quantity: Number(data.quantity),
//         price: Number(data.price),
//         moq: Number(data.moq),
//         seller: {
//           image: user?.photoURL,
//           name: user?.displayName,
//           email: user?.email,
//         },
//       };
//       await mutateAsync(plantData);
//     } catch (err) {
//       toast.error("Image upload failed!");
//     }
//   };

//   if (isPending) return <LoadingSpinner />;
//   if (isError) return <ErrorPage />;

//   return (
//     <div className="min-h-screen bg-gray-50/50 dark:bg-[#101828] py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* ৩. স্ট্যাটাস মেসেজ (HR/Client-কে বোঝানোর জন্য) */}
//         <div
//           className={`mb-6 p-4 border-l-4 flex items-center gap-3 rounded-r-xl transition-all ${
//             isMasterAdmin
//               ? "bg-green-50 border-green-500 text-green-700"
//               : "bg-amber-50 border-amber-500 text-amber-700"
//           }`}
//         >
//           {isMasterAdmin ? <FiUnlock className="animate-pulse" /> : <FiLock />}
//           <div>
//             <p className="text-sm font-bold uppercase">
//               {isMasterAdmin
//                 ? "Master Manager Access: Enabled"
//                 : "Demo View Mode: Active (Read-Only)"}
//             </p>
//             {!isMasterAdmin && (
//               <p className="text-xs opacity-80 font-medium">
//                 Clients can see the UI, but database editing is restricted.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Header */}
//         <div className="mb-8 flex items-center gap-3">
//           <div
//             className={`p-3 rounded-2xl shadow-lg text-white ${
//               isMasterAdmin ? "bg-[#C9A24D]" : "bg-gray-400"
//             }`}
//           >
//             <FiPlusCircle size={28} />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black text-gray-800 dark:text-[#F5F2EE] uppercase tracking-tight">
//               Add New Product
//             </h1>
//             <p className="text-sm text-gray-500 font-medium">
//               Create a new listing for your store
//             </p>
//           </div>
//         </div>

//         {/* ৪. fieldset এর মাধ্যমে পুরো ফর্ম একসাথে কন্ট্রোল করা হচ্ছে */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <fieldset
//             disabled={!isMasterAdmin}
//             className="grid grid-cols-1 lg:grid-cols-3 gap-8 group"
//           >
//             {/* Left Side: General Info */}
//             <div className="lg:col-span-2 space-y-6">
//               <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
//                   <FiTag className="text-[#C9A24D]" /> General Information
//                 </h3>
//                 <div className="space-y-5">
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">
//                       Product Title
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="e.g. Premium Cotton Shirt"
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-[#C9A24D] transition-all disabled:cursor-not-allowed disabled:bg-gray-100/50"
//                       {...register("name", { required: true })}
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">
//                       Description
//                     </label>
//                     <textarea
//                       rows="5"
//                       placeholder="Product details..."
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none transition-all resize-none disabled:cursor-not-allowed"
//                       {...register("description", { required: true })}
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>

//               {/* Pricing & Stock */}
//               <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
//                   <FiDollarSign className="text-[#C9A24D]" /> Pricing & Stock
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">
//                       Price
//                     </label>
//                     <input
//                       type="number"
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none disabled:cursor-not-allowed"
//                       {...register("price", { required: true })}
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">
//                       Stock
//                     </label>
//                     <input
//                       type="number"
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none disabled:cursor-not-allowed"
//                       {...register("quantity", { required: true })}
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">
//                       MOQ
//                     </label>
//                     <input
//                       type="number"
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none disabled:cursor-not-allowed"
//                       {...register("moq", { required: true })}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="space-y-6">
//               <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <FiImage className="text-[#C9A24D]" /> Media
//                 </h3>
//                 <label
//                   className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-[1.5rem] transition-all ${
//                     isMasterAdmin
//                       ? "cursor-pointer hover:border-[#C9A24D] border-gray-300 bg-gray-50"
//                       : "cursor-not-allowed border-gray-200 bg-gray-100/50"
//                   }`}
//                 >
//                   <FiUploadCloud size={32} className="text-gray-400 mb-3" />
//                   <p className="text-xs text-gray-500">
//                     {selectedImage?.[0]?.name || "Upload Image"}
//                   </p>
//                   <input
//                     type="file"
//                     className="hidden"
//                     {...register("image", { required: isMasterAdmin })}
//                   />
//                 </label>
//               </div>

//               <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
//                 <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
//                   <FiLayers className="text-[#C9A24D]" /> Organization
//                 </h3>
//                 <select
//                   className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none disabled:cursor-not-allowed"
//                   {...register("category")}
//                 >
//                   <option value="Shirt">Shirt</option>
//                   <option value="Pant">Pant</option>
//                 </select>
//                 <input
//                   type="url"
//                   placeholder="Video URL"
//                   className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none disabled:cursor-not-allowed"
//                   {...register("video")}
//                 />
//               </div>

//               {/* ৫. বাটন লজিক */}
//               <button
//                 type="submit"
//                 disabled={isPending || !isMasterAdmin}
//                 className={`w-full py-4 text-white font-black rounded-2xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2
//                   ${
//                     isMasterAdmin
//                       ? "bg-[#C9A24D] hover:bg-[#b38f42]"
//                       : "bg-gray-400 cursor-not-allowed"
//                   }`}
//               >
//                 {isPending
//                   ? "SAVING..."
//                   : isMasterAdmin
//                   ? "SAVE PRODUCT"
//                   : "LOCKED FOR DEMO"}
//               </button>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

// ওপরের মেনু থেকে Console ট্যাবে ক্লিক করুন। ২. নিচে খালি জায়গায় এই কোডটি লিখুন (বা কপি করে পেস্ট করুন): localStorage.setItem('isMasterAdmin', 'true') ৩. কিবোর্ড থেকে Enter চাপুন।

// লক সরাবেন কিভাবে? যদি আবার লক করতে চান, তবে কনসোলে লিখবেন: localStorage.removeItem('isMasterAdmin') এবং রিফ্রেশ দেবেন।
