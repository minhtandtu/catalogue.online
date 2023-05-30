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
    <div>
      {" "}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8  ">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="group relative p-2 rounded-md  hover:bg-gray-300/50 "
              >
                <div className="flex ">
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold leading-6 text-gray-900 "
                  >
                    {item.name}
                  </Link>
                  {navigation[index].submenu && (
                    <div className="pl-2 pt-1">
                      <ChevronDownIcon className="w-4 text-gray-400 "></ChevronDownIcon>
                    </div>
                  )}
                </div>
                <div className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:bg-white/70 group-hover:rounded-md transition duration-500">
                  {item.submenu?.map((itm, idx) => {
                    return (
                      <div
                        key={idx}
                        className="hover:bg-gray-300/50 p-4 cursor-pointer "
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 border border-gray-300 rounded-md shadow-md right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
              <a href="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="/logo4.jpg" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex">
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
                      <div className="transition duration-500">
                        {item.submenu?.map((itm, idx) => {
                          return (
                            <div
                              key={idx}
                              className="hover:bg-gray-300/50 p-4 cursor-pointer text-gray-600 "
                            >
                              <Link
                                href={itm.href}
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
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Topmenu;
