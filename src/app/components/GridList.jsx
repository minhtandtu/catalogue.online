"use client";
import React from "react";
import Image from "next/image";
import CustomImage from "./CustomImage";
import { useState } from "react";
const GridList = ({ category, data }) => {
  return (
    <div className="relative py-8 md:py-16 border-b border-gray-300">
      <div>
        <p className="text-amber-950 text-3xl font-medium">{category}</p>
      </div>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
                  {item.STATUS == "MTS" ? "MTS (1-2 ngày)" : "MTO (5-7 ngày)"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="fixed bottom-0 left-0">
        <div className="p-8">
          <div className="rounded transition duration-300 ">
            <span className="isolate inline-flex rounded-md shadow-sm bg-white/50">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:bg-gray-400/70"
              >
                2 cột
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:bg-gray-400/70"
              >
                3 cột
              </button>
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GridList;
