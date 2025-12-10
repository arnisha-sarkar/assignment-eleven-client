import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Container from "../../components/Shared/Container";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";

const ProductDetails = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/all-product/${id}`
      );
      return result.data;
    },
  });
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isLoading) return <LoadingSpinner />;
  const {
    image,
    name,
    description,
    category,
    price,
    quantity,
    moq,
    payment,
    seller,
  } = product;
  console.log(payment);

  return (
    <Container>
      <div>
        <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
          {/* Left Side – Images / Video */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="w-full overflow-hidden rounded-xl">
              {/* If video exists show video, else show image */}
              {/* {video ? (
              <video controls className="w-full rounded-xl">
                <source src={video} type="video/mp4" />
              </video>
            ) : ( */}
              {/* <img
              className="object-cover w-full rounded-xl"
              src={image?.[0]}
              alt="Product Image"
            /> */}
              <img
                className="
        object-cover 
        h-full 
        w-full 
        group-hover:scale-110 
        transition 
        duration-300
      "
                referrerPolicy="no-referrer"
                src={image}
                alt="Product Image"
              />
              {/* )} */}
            </div>
          </div>

          {/* Right Side – Product Info */}
          <div className="md:gap-10 flex-1">
            {/* Product Title & Category */}
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-500 mt-2">Category: {category}</p>
            <hr className="my-6" />
            {/* Description */}
            <p className="text-lg font-light text-neutral-500">{description}</p>
            <hr className="my-6" />
            {/* Stock info */}
            <div className="space-y-2 text-neutral-600">
              <p>Available Quantity: {quantity} Units</p>
              <p>Minimum Order Quantity: {moq} Units</p>
              <p>Payment Options {payment}</p>
            </div>
            <hr className="my-6" />
            <div
              className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
            >
              <div>Seller: {seller?.name}</div>

              <img
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                referrerPolicy="no-referrer"
                src={seller?.image}
              />
            </div>
            {/* Payment Options */}
            {/* <div className="space-y-2">
            <p className="font-medium text-gray-700">Payment Options:</p>
            <p className="text-gray-500">{paymentOption}</p>
          </div> */}
            <hr className="my-6" />
            {/* Price */}
            <h2 className="font-bold text-3xl text-gray-700">
              Price: ${price}
            </h2>
            <hr className="my-6" />
            {/* Order / Booking Button (Role Based) */}
            {/* {user && user.role !== "admin" && user.role !== "manager" ? (
      <button
        onClick={() => navigate(`/booking/${id}`)}
        className="w-full py-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg transition"
      >
        Order / Book Now
      </button>
    ) : (
      <p className="text-sm text-red-500 text-center">
        Login as customer to place order
      </p>
    )} */}

            <div className="flex justify-between">
              <div>
                <Button
                  onClick={() => {
                    if (payment === "Cash on Delivery") {
                      toast.success("Order completed");
                    } else {
                      setIsOpen(true);
                    }
                  }}
                  label="Purchase"
                />
              </div>
            </div>

            <PurchaseModal
              product={product}
              closeModal={closeModal}
              isOpen={isOpen}
            />

            {/* <div className="flex justify-between">
              <div>
                <Button onClick={() => setIsOpen(true)} label="Purchase" />
              </div>
            </div>

            <PurchaseModal
              product={product}
              closeModal={closeModal}
              isOpen={isOpen}
            /> */}
            {/* <button className="w-full py-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg transition">
              Order / Book Now
            </button> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
