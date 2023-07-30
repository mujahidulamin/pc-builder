import RootLayout from '@/components/Layout/RootLayout';
import CategoryProduct from '@/components/UI/CategoryProduct';
import React from 'react';

const StorageDevice = ({products}) => {
    return (
        <div>
      <h1 className="text-center text-4xl text-black my-8 font-bold">
        Storage Device
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <CategoryProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
    );
};

export default StorageDevice;

StorageDevice.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  
  export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3001/api/products?category=Storage Device");
    const data = await res.json();
    return {
      props: {
        products: data.data,
      },
      revalidate: 10,
    };
  };
  