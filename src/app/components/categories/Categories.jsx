"use client";
import Image from "next/image";
import React from "react";
const categories = [
  {
    name: "Phòng Khách",
    url: "",
    imageurl: "/../public/images/accessories.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Phòng Ngủ",
    url: "",
    imageurl: "/../public/images/bed-1.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Phòng Làm Việc",
    url: "",
    imageurl: "/../public/images/cabinet.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Bếp",
    url: "",
    imageurl: "/../public/images/chair.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
];
const Categories = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-center py-10">
        <p className="text-3xl font-semibold text-green-800">MẪU DECOR</p>
      </div>
      <div className="flex w-full justify-between">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="relative aspect-[3/4] w-[23%] overflow-hidden p-2  "
            >
              <Image
                src={item.imageurl}
                width={400}
                height={700}
                className=""
                alt={item.imageurl}
              ></Image>
              <div className="group">
                <div className="absolute inset-0 bg-zinc-700 opacity-60 transition-opacity delay-200 duration-700 group-hover:opacity-0  "></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 group-hover:text-6xl  ">
                  <p className="">{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
