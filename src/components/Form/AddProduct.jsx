import React from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";
const AddProduct = () => {
  const { user } = useAuth();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    const { name, description, category, quantity, price, image, moq, video } =
      data;
    const imageFile = image[0];
    const imageUrl = await imageUpload(imageFile);
    const plantData = {
      image: imageUrl,
      name,
      description,
      category,
      quantity: Number(quantity),
      price: Number(price),
      moq: Number(moq),
      video,
      seller: {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
    };
    console.log(plantData);
  };
  return (
    <div>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Product Name / Title */}
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Product Name / Title
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter product name"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  {...register("name", {
                    required: "Product name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              {/* Product Description */}
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Product Description
                </label>
                <textarea
                  id="description"
                  placeholder="Write product details..."
                  className="block rounded-md w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 bg-white focus:outline-lime-500"
                  {...register("description", {
                    required: "Description is required",
                  })}
                ></textarea>
                {errors.description && (
                  <p className="text-xs text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="Shirt">Shirt</option>
                  <option value="Pant">Pant</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {errors.category && (
                  <p className="text-xs text-red-500">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Payment Options */}
              {/* <div className="space-y-1 text-sm">
                <label htmlFor="payment" className="block text-gray-600">
                  Payment Options
                </label>
                <select
                  className="w-full px-4 py-3 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  {...register("payment", {
                    required: "Payment option is required",
                  })}
                >
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="PayFast">PayFast</option>
                </select>

                {errors.payment && (
                  <p className="text-xs text-red-500">
                    {errors.payment.message}
                  </p>
                )}
              </div> */}
            </div>

            {/* SECOND COLUMN */}
            <div className="space-y-6 flex flex-col">
              {/* Price + Available Quantity + MOQ */}
              <div className="flex justify-between gap-2">
                {/* Price */}
                <div className="space-y-1 text-sm w-full">
                  <label htmlFor="price" className="block text-gray-600">
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Price"
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                    {...register("price", {
                      required: "Price is required",
                    })}
                  />
                  {errors.price && (
                    <p className="text-xs text-red-500">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Available Quantity */}
                <div className="space-y-1 text-sm w-full">
                  <label htmlFor="quantity" className="block text-gray-600">
                    Available Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                    {...register("quantity", {
                      required: "Quantity is required",
                    })}
                  />
                  {errors.quantity && (
                    <p className="text-xs text-red-500">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>

                {/* MOQ */}
                <div className="space-y-1 text-sm w-full">
                  <label htmlFor="moq" className="block text-gray-600">
                    Minimum Order Quantity (MOQ)
                  </label>
                  <input
                    id="moq"
                    type="number"
                    placeholder="MOQ"
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                    {...register("moq", { required: "MOQ is required" })}
                  />
                  {errors.moq && (
                    <p className="text-xs text-red-500">{errors.moq.message}</p>
                  )}
                </div>
              </div>

              {/* MULTIPLE IMAGE UPLOAD */}
              {/* <div className="p-4 w-full">
                <label className="block text-sm text-gray-600 mb-1">
                  Upload Product Images (Multiple)
                </label>

                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    id="images"
                    {...register("images", {
                      required: "Images are required",
                    })}
                  />
                  <label
                    htmlFor="images"
                    className="bg-lime-500 text-white rounded font-semibold cursor-pointer p-2 px-4"
                  >
                    Upload Images
                  </label>
                </div>

                {errors.images && (
                  <p className="text-xs text-red-500">
                    {errors.images.message}
                  </p>
                )}
              </div> */}
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    // name="image"
                    id="image"
                    accept="image/*"
                    hidden
                    {...register("image", {
                      required: "image is required",
                    })}
                  />
                  {errors.image && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.image.message}
                    </p>
                  )}
                  <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                    Upload
                  </div>
                </label>
              </div>

              {/* Demo Video Link */}
              <div className="space-y-1 text-sm">
                <label htmlFor="video" className="block text-gray-600">
                  Demo Video Link (optional)
                </label>
                <input
                  id="video"
                  type="url"
                  placeholder="https://youtube.com/demo"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                  {...register("video")}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white rounded shadow-md bg-lime-500"
              >
                Save Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
