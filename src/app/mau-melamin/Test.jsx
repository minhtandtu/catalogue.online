"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
const Test = ({ imageUrl, maac, callNextImage }) => {
  const [isFull, setIsFull] = useState(false);
  const [show, setShow] = useState(false);
  function nextImage() {
    setShow(false);
    callNextImage();
  }
  return (
    <div
      className={`${
        isFull ? " fixed inset-0 z-20 p-4 " : " relative"
      }  bg-gray-700/70 p-0 `}
    >
      <Image
        src={imageUrl}
        alt="image"
        width={5000}
        height={2500}
        className={`${
          isFull ? " h-full w-full " : " "
        } cursor-pointer object-cover   `}
        onClick={() => setIsFull(!isFull)}
      ></Image>

      <div className=" absolute  top-5 flex cursor-pointer text-lg font-semibold text-white">
        <div onClick={() => setShow(!show)} className="bg-green-900/50 p-2">
          <p>Xem Mã</p>
        </div>
        <div className="min-w-[100px] bg-red-300/70 p-2">
          <p className={`${show ? "block" : "hidden"}`}>{maac}</p>
        </div>
        <div className="min-w-[100px] bg-gray-700/50 p-2">
          <p onClick={nextImage}>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
