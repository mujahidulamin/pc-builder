import RootLayout from "@/components/Layout/RootLayout";
import CategoryProduct from "@/components/UI/CategoryProduct";
import React from "react";

const Monitor = ({ products }) => {
  return (
    <div>

      <h1 className="text-center text-4xl text-black my-8 font-bold">
        Monitor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <CategoryProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Monitor;
Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {

  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const res = await fetch(
    'http://localhost:3000/api/products?category=Monitor'
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};


