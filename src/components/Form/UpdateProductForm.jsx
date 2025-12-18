// // import React from "react";
// // import toast from "react-hot-toast";

// // const UpdateProductForm = ({ _id, updatedData, product, refetch }) => {
// //   const handleUpdate = async () => {
// //     try {
// //       const res = await fetch(
// //         `${import.meta.env.VITE_API_URL}/all-product/${product._id}`,
// //         {
// //           method: "PATCH",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(updatedData), // updatedData = { name, price, category, image, ... }
// //         }
// //       );

// //       const data = await res.json();

// //       if (data.success) {
// //         toast.success(data.message); // "Product updated successfully ✅"
// //         // closeModal(); // close your modal if using one
// //         refetch(); // refresh data in UI
// //       } else {
// //         toast.error(data.message); // "No product updated ❌"
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Something went wrong ❌");
// //     }
// //   };
// //   return (
// //     <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
// //       <form>
// //         <div className="grid grid-cols-1 gap-10">
// //           <div className="space-y-6">
// //             {/* Name */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="name" className="block text-gray-600">
// //                 Name
// //               </label>
// //               <input
// //                 className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                 name="name"
// //                 id="name"
// //                 type="text"
// //                 placeholder="Plant Name"
// //                 required
// //               />
// //             </div>
// //             {/* Category */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="category" className="block text-gray-600 ">
// //                 Category
// //               </label>
// //               <select
// //                 required
// //                 className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                 name="category"
// //               >
// //                 <option value="Indoor">Indoor</option>
// //                 <option value="Outdoor">Outdoor</option>
// //                 <option value="Succulent">Succulent</option>
// //                 <option value="Flowering">Flowering</option>
// //               </select>
// //             </div>
// //             {/* Description */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="description" className="block text-gray-600">
// //                 Description
// //               </label>

// //               <textarea
// //                 id="description"
// //                 placeholder="Write plant description here..."
// //                 className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
// //                 name="description"
// //               ></textarea>
// //             </div>
// //           </div>
// //           <div className="space-y-6 flex flex-col">
// //             {/* Price & Quantity */}
// //             <div className="flex justify-between gap-2">
// //               {/* Price */}
// //               <div className="space-y-1 text-sm">
// //                 <label htmlFor="price" className="block text-gray-600 ">
// //                   Price
// //                 </label>
// //                 <input
// //                   className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                   name="price"
// //                   id="price"
// //                   type="number"
// //                   placeholder="Price per unit"
// //                   required
// //                 />
// //               </div>

// //               {/* Quantity */}
// //               <div className="space-y-1 text-sm">
// //                 <label htmlFor="quantity" className="block text-gray-600">
// //                   Quantity
// //                 </label>
// //                 <input
// //                   className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                   name="quantity"
// //                   id="quantity"
// //                   type="number"
// //                   placeholder="Available quantity"
// //                   required
// //                 />
// //               </div>
// //             </div>
// //             {/* Image */}
// //             <div className=" p-4  w-full  m-auto rounded-lg grow">
// //               <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
// //                 <div className="flex flex-col w-max mx-auto text-center">
// //                   <label>
// //                     <input
// //                       className="text-sm cursor-pointer w-36 hidden"
// //                       type="file"
// //                       name="image"
// //                       id="image"
// //                       accept="image/*"
// //                       hidden
// //                     />
// //                     <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
// //                       Upload Image
// //                     </div>
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               onClick={handleUpdate}
// //               type="submit"
// //               className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
// //             >
// //               Update Plant
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateProductForm;

// // ---------------------------------------

// // import React, { useState } from "react";
// // import toast from "react-hot-toast";

// // const UpdateProductForm = ({ product, refetch }) => {
// //   const [formData, setFormData] = useState({
// //     name: product.name || "",
// //     category: product.category || "",
// //     description: product.description || "",
// //     price: product.price || 0,
// //     quantity: product.quantity || 0,
// //     image: product.image || "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleUpdate = async (e) => {
// //     e.preventDefault(); // prevent page reload

// //     try {
// //       const res = await fetch(
// //         `${import.meta.env.VITE_API_URL}/all-product/${product._id}`,
// //         {
// //           method: "PATCH",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       const data = await res.json();

// //       if (data.success) {
// //         toast.success(data.message);
// //         // closeModal(); // close modal
// //         refetch(); // refresh UI
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Something went wrong ❌");
// //     }
// //   };

// //   return (
// //     <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
// //       <form onSubmit={handleUpdate}>
// //         <div className="grid grid-cols-1 gap-10">
// //           <div className="space-y-6">
// //             {/* Name */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="name" className="block text-gray-600">
// //                 Name
// //               </label>
// //               <input
// //                 className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                 name="name"
// //                 id="name"
// //                 type="text"
// //                 placeholder="Plant Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>

// //             {/* Category */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="category" className="block text-gray-600 ">
// //                 Category
// //               </label>
// //               <select
// //                 required
// //                 className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Indoor">Indoor</option>
// //                 <option value="Outdoor">Outdoor</option>
// //                 <option value="Succulent">Succulent</option>
// //                 <option value="Flowering">Flowering</option>
// //               </select>
// //             </div>

// //             {/* Description */}
// //             <div className="space-y-1 text-sm">
// //               <label htmlFor="description" className="block text-gray-600">
// //                 Description
// //               </label>
// //               <textarea
// //                 id="description"
// //                 placeholder="Write plant description here..."
// //                 className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 bg-white focus:outline-lime-500 "
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleChange}
// //               ></textarea>
// //             </div>
// //           </div>

// //           <div className="space-y-6 flex flex-col">
// //             {/* Price & Quantity */}
// //             <div className="flex justify-between gap-2">
// //               <div className="space-y-1 text-sm">
// //                 <label htmlFor="price" className="block text-gray-600 ">
// //                   Price
// //                 </label>
// //                 <input
// //                   className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                   name="price"
// //                   id="price"
// //                   type="number"
// //                   value={formData.price}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="space-y-1 text-sm">
// //                 <label htmlFor="quantity" className="block text-gray-600">
// //                   Quantity
// //                 </label>
// //                 <input
// //                   className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
// //                   name="quantity"
// //                   id="quantity"
// //                   type="number"
// //                   value={formData.quantity}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Image */}
// //             <div className="p-4 w-full m-auto rounded-lg grow">
// //               <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
// //                 <div className="flex flex-col w-max mx-auto text-center">
// //                   <label>
// //                     <input
// //                       className="text-sm cursor-pointer w-36 hidden"
// //                       type="file"
// //                       name="image"
// //                       id="image"
// //                       accept="image/*"
// //                       onChange={handleChange}
// //                     />
// //                     <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
// //                       Upload Image
// //                     </div>
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
// //             >
// //               Update Plant
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateProductForm;

// import { useForm } from "react-hook-form";
// import { imageUpload } from "../../utils";
// import toast from "react-hot-toast";
// import axios from "axios";

// const UpdateProductForm = ({ product, refetch, closeModal }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: product?.name,
//       description: product?.description,
//       category: product?.category,
//       price: product?.price,
//       quantity: product?.quantity,
//       video: product?.video,
//       payment: product?.payment,
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       let imageUrl = product.image; // default old image

//       // 👉 যদি user নতুন image select করে
//       if (data.image && data.image.length > 0) {
//         const imageFile = data.image[0];
//         imageUrl = await imageUpload(imageFile);
//       }

//       const updatedProduct = {
//         name: data.name,
//         description: data.description,
//         category: data.category,
//         price: Number(data.price),
//         quantity: Number(data.quantity),
//         video: data.video,
//         payment: data.payment,
//         image: imageUrl, // ✅ always URL
//       };

//       const res = await axios.patch(
//         `${import.meta.env.VITE_API_URL}/all-product/${product._id}`,
//         updatedProduct
//       );

//       if (res.data.success) {
//         toast.success("Product updated successfully ✅");
//         refetch();
//         closeModal();
//       } else {
//         toast.error("No changes detected ❌");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Update failed ❌");
//     }
//   };

//   return (
//     <div className="w-full bg-gray-50 rounded-xl p-6">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* LEFT */}
//           <div className="space-y-4">
//             <input
//               className="input input-bordered w-full"
//               placeholder="Product Name"
//               {...register("name", { required: true })}
//             />

//             <textarea
//               className="textarea textarea-bordered w-full"
//               placeholder="Description"
//               {...register("description", { required: true })}
//             />

//             <select
//               className="select select-bordered w-full"
//               {...register("category", { required: true })}
//             >
//               <option value="Shirt">Shirt</option>
//               <option value="Pant">Pant</option>
//               <option value="Jacket">Jacket</option>
//             </select>
//           </div>

//           {/* RIGHT */}
//           <div className="space-y-4">
//             <div className="flex gap-3">
//               <input
//                 type="number"
//                 className="input input-bordered w-full"
//                 placeholder="Price"
//                 {...register("price", { required: true })}
//               />
//               <input
//                 type="number"
//                 className="input input-bordered w-full"
//                 placeholder="Quantity"
//                 {...register("quantity", { required: true })}
//               />
//             </div>

//             {/* IMAGE */}
//             <div>
//               <label className="block mb-1 text-sm">Change Image</label>
//               <input type="file" accept="image/*" {...register("image")} />
//             </div>

//             {/* OLD IMAGE PREVIEW */}
//             <img src={product.image} alt="product" className="w-32 rounded" />

//             <button className="btn btn-success w-full">Update Product</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateProductForm;

// --------------------------------------

import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateProductForm = ({ product, refetch, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      category: product?.category,
      price: product?.price,
      quantity: product?.quantity,
      video: product?.video || "",
      payment: product?.payment || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      let imageUrl = product.image;

      if (data.image && data.image.length > 0) {
        const imageFile = data.image[0];
        imageUrl = await imageUpload(imageFile);
      }

      const updatedProduct = {
        name: data.name,
        description: data.description,
        category: data.category,
        price: Number(data.price),
        quantity: Number(data.quantity),
        video: data.video,
        payment: data.payment,
        image: imageUrl,
      };

      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/all-product/${product._id}`,
        updatedProduct
      );

      if (res.data.success) {
        toast.success("Product updated successfully ✅");
        refetch();
        closeModal();
      } else {
        toast.error("No changes detected ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error("Update failed ❌");
    }
  };

  return (
    <div className="w-full bg-gray-50 rounded-xl p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* Name */}
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              className="input input-bordered w-full"
              placeholder="Product Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}

            {/* Description */}
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}

            {/* Category */}
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Jacket">Jacket</option>
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}

            {/* Demo Video */}
            <label className="block text-sm font-medium text-gray-700">
              Demo Video URL
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Demo Video URL"
              {...register("video")}
            />

            {/* Payment Options */}
            {/* <label className="block text-sm font-medium text-gray-700">
              Payment Options
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Payment Options"
              {...register("payment")}
            /> */}
            <label className="block text-sm font-medium text-gray-700">
              Payment Options
            </label>
            <select
              className="select select-bordered w-full"
              {...register("payment", { required: true })}
            >
              <option value="">Select Payment Option</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="PayFast">PayFast</option>
              {/* <option value="Stripe">Stripe</option>
              <option value="PayPal">PayPal</option> */}
            </select>
            {errors.payment && (
              <span className="text-red-500">Payment option is required</span>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            {/* Price */}
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Price"
              {...register("price", { required: true })}
            />

            {/* Quantity */}
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Quantity"
              {...register("quantity", { required: true })}
            />

            {/* Image Upload */}
            <label className="block text-sm font-medium text-gray-700">
              Change Image
            </label>
            <input type="file" accept="image/*" {...register("image")} />

            {/* Old Image Preview */}
            {product.image && (
              <img src={product.image} alt="product" className="w-32 rounded" />
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-success w-full mt-4">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
