import React from "react";
import Page1 from "./cataloS6/Page1";
import GridList from "./GridList";
import List from "./List";
import XLSX from "xlsx";

const CatalogueS6 = ({ data }) => {
  return (
    <div>
      <p className="mx-auto text-5xl text-emerald-700 font-semibold ">
        Catalogue Melamine S6
      </p>
      <div className="mx-auto max-w-5xl py-8 sm:py-16 lg:py-24">
        <div>
          <p className="mx-auto text-5xl text-teal-600 font-semibold ">
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
            <List data={data}></List>
          </div>
          <div className="py-8">
            <img src="/livingroom.png" className="w-full h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueS6;
