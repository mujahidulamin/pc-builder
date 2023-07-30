import React from "react";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBuilder } from "@/redux/features/builderSlice";
import toast, { Toaster } from "react-hot-toast";

const CategoryProductCard = ({ product }) => {
  const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length;

  const router = useRouter();

  const handleProductClick = () => {
    // Redirect the user to the product detail page when the card is clicked
    router.push(`/products/${product?._id}`);
  };

  const dispatch = useDispatch();
  const categoryState = useSelector(
    (state) => state.builder.chooseSelectedCategory
  );

  const handleAddProduct = (product) => {
    if (product.Category === "CPU/Processor") {
      dispatch(addProductToBuilder({ key: "cpu", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "RAM") {
      dispatch(addProductToBuilder({ key: "ram", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Motherboard") {
      dispatch(addProductToBuilder({ key: "motherboard", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Monitor") {
      dispatch(addProductToBuilder({ key: "monitor", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Storage Device") {
      dispatch(addProductToBuilder({ key: "storage", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Power Supply Unit") {
      dispatch(addProductToBuilder({ key: "powersupply", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Others") {
      dispatch(addProductToBuilder({ key: "others", data: product }));
      router.push("/pc-builder");
    }
  };

  return (
    <div className=" p-4  cursor-pointer">
      <div className="cursor-pointer">
        <div
          onClick={handleProductClick}
          className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-5"
        >
          <img
            className="object-cover object-center w-full h-56"
            src={product.image}
            alt="avatar"
          />

          <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-lg font-semibold text-white">
              {product.ProductName}
            </h1>
          </div>

          <div className="px-6 py-4">
            <div className="flex lg:gap-5 gap-3">
              <div className="px-2 w-[133px] py-2 my-3 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none text-center">
                {product.Category}
              </div>

              <div className="px-2 w-[133px] py-2 my-3 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none text-center">
                {product.Price}
              </div>
            </div>
            <div className="">
              <div className="badge badge-success gap-2">{product.Status}</div>
            </div>

            <div className="flex items-center mt-2">
              <h2 className="md:text-[16px] text-[14px] mr-1.5"> Rating:</h2>
              <div className="flex items-center">
                <StarRatings
                  rating={product.Ratings}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  starDimension="16px"
                  starSpacing="2px"
                />
                <p className="text-[14px] ml-1.5">({product.Ratings})</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {categoryState !== "" && (
        <div className="text-center mt-4">
          <button
            onClick={() => handleAddProduct(product)}
            className="border border-blue-600 px-6 py-1.5 bg-white text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Add To Builder
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryProductCard;
