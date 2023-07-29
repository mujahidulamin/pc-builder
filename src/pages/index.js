import RootLayout from '@/components/Layout/RootLayout';
import Navbar from '@/components/UI/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};