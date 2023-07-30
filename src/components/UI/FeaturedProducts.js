import React from "react";
import StarRatings from "react-star-ratings";

const FeaturedProducts = ({ products }) => {
  console.log(products);

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-6">Featured Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
        {products?.map((product, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
          >
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {product.ProductName}
              </h3>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  {product.Price}
                </span>
                <div className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  {product.Category}
                </div>
              </div>

              <div className="text-center bg-gray-200 dark:bg-gray-700 pt-1">
                <div className="badge badge-success gap-2">
                  {product.Status}
                </div>
              </div>

              <div className="flex items-center justify-center py-2 bg-gray-200 dark:bg-gray-700">
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
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
