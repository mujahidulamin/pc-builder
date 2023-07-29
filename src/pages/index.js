import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/UI/Banner';
import FeaturedProducts from '@/components/UI/FeaturedProducts';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};