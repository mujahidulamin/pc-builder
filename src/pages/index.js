import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/UI/Banner';
import FeaturedCategories from '@/components/UI/FeaturedCategories';
import FeaturedProducts from '@/components/UI/FeaturedProducts';
import React from 'react';

const HomePage = ({products}) => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts products={products}></FeaturedProducts>
      <FeaturedCategories></FeaturedCategories>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  // Randomly select 6 products
  function getRandomProducts(data, count) {
    const shuffled = data.data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomProducts = getRandomProducts(data, 6);

  return {
    props: {
      products: randomProducts,
    },
    revalidate: 10,
  };
};