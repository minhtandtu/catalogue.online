"use client";
import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    address: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi đối tượng JSON inputvalue đi qua page khác ở đây

    console.log(inputValue);
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Info */}
        <div className="relative px-6 pb-8 pt-24 sm:pt-32 lg:static lg:px-8 flex flex-col justify-between ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              LIÊN HỆ
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quý khách vui lòng để lại thông tin vào form, bộ phận kinh doanh
              của chúng tôi sẽ liên hệ lại với quý khách trong thời gian sớm
              nhất.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  69 Nguyễn Thi
                  <br />
                  Quận 5, TP.HCM
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+84 916781824">
                    0916781824
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto: tanhm@kesgroup.com.vn"
                  >
                    tanhm@kesgroup.com.vn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <Image
              alt="kestrees"
              src="/kestrees.PNG"
              height={300}
              width={500}
              className="w-full"
            ></Image>
          </div>
        </div>
        {/* FORM */}
        <div className="mt-4 md:mt-36 px-4 ">
          <form
            className="max-w-md"
            method="POST"
            action="https://formspree.io/f/mqkojdeg"
          >
            <p className="text-gray-500">
              * Quý Khách Vui Lòng Để Lại Thông Tin Để Nhận Catalogue
            </p>
            <div className="mb-4 block">
              <p htmlFor="name" className="mb-2 text-lg text-gray-700">
                Tên
              </p>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 p-2 w-full text-gray-700 text-lg"
              />
            </div>
            <div className="mb-4">
              <p
                htmlFor="phonenumber"
                className="block mb-2 text-lg text-gray-700"
              >
                Số điện thoại
              </p>
              <input
                type="phonenumber"
                id="phonenumber"
                name="phonenumber"
                className="border border-gray-300 p-2 w-full text-gray-700 text-lg"
              />
            </div>
            <div className="mb-4">
              <p htmlFor="email" className="block mb-2 text-lg text-gray-700">
                Email
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 p-2 w-full text-gray-700 text-lg"
              />
            </div>
            <div className="mb-4">
              <p htmlFor="address" className="block mb-2 text-lg text-gray-700">
                Địa chỉ công ty
              </p>
              <input
                type="address"
                id="address"
                name="address"
                className="border border-gray-300 p-2 w-full text-gray-700 text-lg"
              />
            </div>
            <div className="mb-4">
              <p htmlFor="message" className="block mb-2 text-lg text-gray-700">
                Lời nhắn
              </p>
              <input
                type="message"
                id="message"
                name="message"
                className="border border-gray-300 p-2 w-full text-gray-700 text-lg "
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 md:w-28 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
