"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
const navigation = [
  { name: "Trang chủ", href: "" },

  {
    name: "Catalogue ",
    href: "/",
    submenu: [
      {
        name: "Tải về (PDF)",
        href: "/Catalogue.pdf",
      },
      {
        name: "Liên hệ nhận Catalogue (bảng giấy)",
        href: "/lienhe",
      },
    ],
  },
  { name: "Tìm mã", href: "/mau-melamin" },

  {
    name: "Liên hệ",
    href: "/lienhe",
  },
];
const Topmenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>

        <div className="flex relative">
          {navigation.map((item, index) => (
            <div key={index} className="group">
              <div className="flex px-3 md:px-8 py-2 hover:bg-gray-200/50 ">
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
                {navigation[index].submenu && (
                  <div className="pl-2 pt-1">
                    <ChevronDownIcon className="w-4 text-gray-400 "></ChevronDownIcon>
                  </div>
                )}
              </div>
              <div className="absolute left-8 md:left-10 top-10 opacity-0 group-hover:opacity-90 group-hover:bg-white/70 group-hover:rounded-md transition duration-500">
                {item.submenu?.map((itm, idx) => {
                  return (
                    <div
                      key={idx}
                      className="hover:bg-gray-300/50 p-4 cursor-pointer"
                    >
                      <Link
                        href={itm.href}
                        download
                        className="whitespace-nowrap"
                      >
                        {itm.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
};

export default Topmenu;
