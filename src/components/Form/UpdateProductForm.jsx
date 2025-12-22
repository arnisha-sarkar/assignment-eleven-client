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
