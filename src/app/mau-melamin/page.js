"use client";
import React from "react";
import { data } from "../../../data/data";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { SearchMaMelamin } from "../components/search/SearchMaMelamin";
import { ListMelamine } from "./ListMelamine";
import Page1 from "../components/cataloS6/Page1";
import ScrollToTopButton from "../components/ScrollToTop";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { CustomList } from "./CustomList";
const tabs = [
  {
    name: "TÌM MẪU",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: true,
  },
  {
    name: "TẤT CẢ",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "DS TỰ CHỌN",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "ĐƠN SẮC",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "OAK",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "WALNUT",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "ASH",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "CHERRY",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "MAPLE",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "TEAK",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "OTHER",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "FABRIC",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "CONCRETE",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [tabNo, settabNo] = useState(0);
  const [listitem, setListitem] = useState([]);
  function HandleDeleteItem(STT) {
    const newValue = listitem.filter((item) => item.STT !== STT);
    localStorage.setItem("itemsAdded", JSON.stringify(newValue));
    setListitem(newValue);
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("itemsAdded")) || [];
    setListitem(localData);
  }, []);
  function Handlelist(item) {
    const giatri = listitem.find((itm) => {
      return itm.STT == item.STT;
    });
    if (!giatri) {
      listitem.push(item);
      localStorage.setItem("itemsAdded", JSON.stringify(listitem));
    }
  }
  function HandleKeyword(keyword) {
    const result = data.filter((item) => item.NHOMGO.includes(keyword));
    return result;
  }
  function HandleResortData() {
    const danhSachMoi = [...listitem.sort(() => Math.random() - 0.5)];
    setListitem(danhSachMoi);
  }

  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-7xl py-8 sm:py-16 lg:py-24">
            <div>
              <p className="mt-4 mx-auto text-3xl md:text-5xl text-teal-600 font-semibold px-4">
                Catalogue MDF Melamine
              </p>
              <div className="py-8">
                <Page1></Page1>
                <div className="container mx-auto mt-4 max-w-7xl ">
                  <div className="border border-gray-300 p-4">
                    <div className="sticky top-0 z-50 flex space-x-6 overflow-x-auto bg-white px-4 py-1 scrollbar-hide">
                      {tabs.map((tab, index) => (
                        <p
                          key={tab.name}
                          onClick={() => settabNo(index)}
                          className={classNames(
                            tabNo == index
                              ? "border-indigo-500 text-indigo-600"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "group inline-flex cursor-pointer items-center border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          <tab.icon
                            className={classNames(
                              tab.current
                                ? "text-indigo-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "-ml-0.5 mr-2 h-5 w-5"
                            )}
                            aria-hidden="true"
                          />
                          <span className="whitespace-nowrap">{tab.name}</span>
                        </p>
                      ))}
                    </div>
                    <div className="animate-pulse flex justify-center border-b border-gray-300 font-semibold">
                      <ArrowLeftIcon className="w-5  animate-bounceLeft text-gray-700"></ArrowLeftIcon>
                      sweap
                      <ArrowRightIcon className="w-5 animate-bounceRight text-gray-700 "></ArrowRightIcon>
                    </div>
                    <div className={`${tabNo == 0 ? "block" : "hidden"} py-4 `}>
                      <SearchMaMelamin
                        data={data}
                        listofitems={Handlelist}
                        addItemToPage={Handlelist}
                      ></SearchMaMelamin>
                    </div>
                    <div className={`${tabNo == 1 ? "block" : "hidden"} `}>
                      <ListMelamine data={data} listofitems={Handlelist} />
                    </div>
                    <div className={`${tabNo == 2 ? "block" : "hidden"} `}>
                      <CustomList
                        data={listitem}
                        deleteItem={HandleDeleteItem}
                        resortdata={HandleResortData}
                      ></CustomList>
                    </div>
                    <div className={`${tabNo == 3 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("SOLID")}
                        listofitems={Handlelist}
                      />
                    </div>
                    <div className={`${tabNo == 4 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("OAK")}
                        listofitems={Handlelist}
                      />
                    </div>
                    <div className={`${tabNo == 5 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("WALNUT")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 6 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("ASH")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 7 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("CHERRY")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 8 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("MAPLE")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 9 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("TEAK")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 10 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("OTHER")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 11 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("FABRIC")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                    <div className={`${tabNo == 12 ? "block" : "hidden"} py-4`}>
                      <ListMelamine
                        data={HandleKeyword("CONCRETE")}
                        listofitems={Handlelist}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="py-8">
                <img src="/livingroom.png" className="w-full h-auto"></img>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <ScrollToTopButton></ScrollToTopButton>
        </div>
      </div>
    </div>
  );
};

export default page;
