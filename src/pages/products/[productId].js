import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import StarRatings from "react-star-ratings";
const ProductDetails = ({ product }) => {
  const Ratings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = Ratings / product?.Reviews.length;

  return (
    <div className="my-8">
      <div className="max-w-xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
        <img
          className="object-cover w-full h-64"
          src={product.image}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <p className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">
              {product.ProductName}
            </p>

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
          </div>

          <div>
            <p class="my-3 text-sm text-gray-600 dark:text-gray-400 text-justify">
              {product.Description}
            </p>
          </div>

          <div className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">
            Key Features
          </div>

          <div className="my-2">
            {Object?.keys(product?.KeyFeatures)?.length > 0 ? (
              Object?.keys(product?.KeyFeatures)?.map((key, i) => {
                return (
                  <div key={i} className="flex items-center mb-[7px]">
                    <p className="md:text-[16px] text-[14px] font-bold mr-1.5">
                      {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}:
                    </p>
                    <p className="md:text-[16px] text-[14px]">
                      {product?.KeyFeatures[key]}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="font-bold md:text-[16px] text-[14px]">
                No Features Available!
              </p>
            )}
          </div>

          <div className="mt-4 md:w-[240px] w-[250px] flex items-center">
            <h3 className="font-[500] md:text-[16px] text-[14px] mr-1.5">
              Avg. Rating:
            </h3>

            <div className="flex items-center justify-start">
              <StarRatings
                rating={averageRating}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension="16px"
                starSpacing="2px"
              />
              <p className="ml-1.5">({averageRating})</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-8 text-4xl font-bold">Reviews</h1>

      {product.Reviews?.map((review, i) => (
        <>
          {review ? (
            <div key={i} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={review.Image}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.Name}</h4>
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                <div className="flex items-center">
                      <StarRatings
                        rating={review?.IndividualRating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        starDimension="16px"
                        starSpacing="2px"
                      />
                      <p className="text-[14px] ml-1.5">
                        ({review?.IndividualRating})
                      </p>
                    </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                {review.Comment}
              </div>
            </div>
          ) : (
            <div>There is no reviews</div>
          )}
        </>
      ))}
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3001/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};
