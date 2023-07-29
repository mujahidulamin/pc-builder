import React from "react";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://images.unsplash.com/photo-1593152167544-085d3b9c4938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt=""/>
        <div>
          <h1 className="text-4xl font-bold">
            Build Your Most Desired PC Wiht US
          </h1>
          <p className="py-6 text-justify">
            Build your dream PC with ease - choose components, customize, and
            create the perfect setup for your needs
          </p>
          <button className="py-2 px-4  font-medium rounded-md btn text-base bg-indigo-600 hover:bg-indigo-600 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
