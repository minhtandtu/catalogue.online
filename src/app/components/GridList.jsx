import React from "react";
import Image from "next/image";
import CustomImage from "./CustomImage";
const GridList = ({ category, data }) => {
  return (
    <div className="py-8 md:py-16 border-b border-gray-300">
      <div>
        <p className="text-amber-950 text-3xl font-medium">{category}</p>
      </div>
      <div className="pt-4 grid md:grid-cols-2 gap-4 md:gap-8">
        {data.map((item, index) => {
          return (
            <div className="mb-2">
              <div className="border border-gray-400">
                <CustomImage imageUrl={item.ANH} index={index}></CustomImage>
              </div>
              <div className="mt-2">
                <p className="text-sm italic text-gray-400">{item.TEN}</p>
                <p className="text-gray-700 text-lg">{item.MA}</p>
                <p
                  className={` ${
                    item.STATUS == "MTS" ? "text-lime-600" : "text-red-400"
                  } text-sm italic`}
                >
                  {item.STATUS}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridList;
