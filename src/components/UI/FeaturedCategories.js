import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
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

  return (
    <div>
      <div className="w-11/12 mx-auto py-12 ">
        <h1 className="text-center text-4xl font-bold mb-6">
          Featured Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 justify-between">
          {categories?.map((category, i) => (
            <>
              <div
                key={i}
                class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <Link href={category?.href}>
                  <div className="text-center">
                    <img
                      src={category?.image}
                      width={100}
                      height={100}
                      alt="card image"
                      className="mx-auto pt-4"
                    />
                  </div>
                  <div class="text-center mt-3 text-sm font-medium">
                    {category?.title}
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
