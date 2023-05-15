import React from "react";
import XLSX from "xlsx";
import Page1 from "./cataloS6/Page1";
import List from "./List";
import Image from "next/image";
import ScrollToTopButton from "./ScrollToTop";
const Homepage = () => {
  // Đọc file Excel
  const workbook = XLSX.readFile("data/Book1.xlsx");

  // Lấy sheet đầu tiên của workbook
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Lấy dữ liệu của sheet
  const data = XLSX.utils.sheet_to_json(sheet);
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
          <div className="px-8">
            <div className="text-center flex flex-col justify-center items-center ">
              <Image
                alt="logo"
                src="/catalo.jpg"
                width={700}
                height={250}
                className="w-auto h-auto"
              ></Image>
              <p className="text-lg leading-8 text-gray-600">
                Chúng tôi luôn cố gắng cải thiện chất lượng dịch vụ mỗi ngày để
                đem đến cho khách hàng trải nghiệm tốt nhất
              </p>
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Tìm hiểu thêm
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Liên hệ ngay <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-8 sm:py-16 lg:py-24">
            <div>
              <p className="mt-4 mx-auto text-3xl md:text-5xl text-teal-600 font-semibold px-4">
                Catalogue MDF Melamine
              </p>
              <div className="py-8">
                <Page1></Page1>
                <Image
                  alt="kitchen"
                  src="/kitchen.jpg"
                  height={766}
                  width={1916}
                ></Image>
                <div className="px-1">
                  <List data={data}></List>
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
export default Homepage;
