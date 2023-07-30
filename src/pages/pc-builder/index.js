import RootLayout from "@/components/Layout/RootLayout";
import {
  chooseSelectCategory,
  clearBuilder,
} from "../../redux/features/builderSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const PCBuilder = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const categories = [
    {
      title: "CPU",
      image: "https://cdn-icons-png.flaticon.com/512/689/689338.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "https://cdn-icons-png.flaticon.com/512/3870/3870550.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "https://cdn-icons-png.flaticon.com/512/1689/1689137.png",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: "https://cdn-icons-png.flaticon.com/512/1547/1547882.png",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "https://cdn-icons-png.flaticon.com/512/3151/3151254.png",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image:
        "https://cdn.icon-icons.com/icons2/2159/PNG/512/monitor_display_unit_desktop_icon_132929.png",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: "https://static.thenounproject.com/png/4513746-200.png",
      href: "/categories/others",
    },
  ];

  const handleChooseClick = (redirectUri, title) => {
    router.push(redirectUri);
    dispatch(chooseSelectCategory(title));
  };

  const builderState = useSelector((state) => state?.builder?.selectedProducts);

  const showChoosedProduct = (category) => {
    if (category === "CPU") {
      return builderState["cpu"];
    } else if (category === "RAM") {
      return builderState["ram"];
    } else if (category === "Monitor") {
      return builderState["monitor"];
    } else if (category === "Motherboard") {
      return builderState["motherboard"];
    } else if (category === "Storage Device") {
      return builderState["storage"];
    } else if (category === "Power Supply Unit") {
      return builderState["powersupply"];
    } else if (category === "Others") {
      return builderState["others"];
    }
  };

  const handleCompleteBuild = () => {
    toast.success("Successfully Create your pc")
    dispatch(
      clearBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        powersupply: null,
        others: null,
      })
    );
  };

  return (
    <div>
        <Toaster />
      <div className="w-11/12 mx-auto pb-12 ">
          <div>
            <h1 className="text-4xl my-12 font-semibold text-center">Choose Your Products and build your PC</h1>
          </div>

        <div className="grid grid-cols-1 gap-8">
          {categories?.map((category, i) => (
            <div
              key={i}
              className="flex md:flex-row flex-col md:items-center items-start justify-between border border-gray-200 rounded-[10px] md:px-10 px-4 py-3"
            >
              <div className="md:w-[240px] w-auto">
                <div className="flex items-center mb-2">
                  <img
                    src={category?.image}
                    height={50}
                    width={50}
                    alt="CategoryImage"
                  />
                  <h3 className="md:text-[18px] text-[16px] font-[500] ml-4">
                    {category?.title !== "Others"
                      ? category?.title
                      : `${category?.title} (Optional)`}
                  </h3>
                </div>
              </div>
              <div className="md:w-[300px] w-auto">
                {showChoosedProduct(category?.title) && (
                  <div className="flex items-center mt-2">
                    <img
                      src={showChoosedProduct(category?.title)?.image}
                      className="md:h-[60px] h-[150px] md:w-[60px] w-[150px] rounded-[16px]"
                    />
                    <div className="md:text-[16px] text-[14px] ml-[15px]">
                      <h3 className="font-[600]">
                        {showChoosedProduct(category?.title)?.ProductName}
                      </h3>
                      <h4>
                        Price: {showChoosedProduct(category?.title)?.Price}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  handleChooseClick(category?.href, category?.title)
                }
                type="button"
                className={`py-2 px-4 md:mt-0 mt-3 border border-transparent md:text-[16px] text-[14px] font-medium rounded-md text-white ${
                  showChoosedProduct(category?.title)
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                } focus:outline-none`}
              >
                {showChoosedProduct(category?.title) ? "Change" : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-8">
      {Object?.entries(builderState)?.every(
            ([key, value]) => key === "others" || value !== null
          ) ? (
            <button
              onClick={handleCompleteBuild}
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Complete Build
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-blue-200"
            >
              Complete Build
            </button>
          )}
      </div>
    </div>
  );
};

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;
