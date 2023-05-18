"use client";
import { ListMelamine } from "@/app/mau-melamin/ListMelamine";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { SearchResult2 } from "./SearchResult2";
export const SearchMaMelamin = ({ data, addItemToPage }) => {
  const firstInputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value); // update the input value in state
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
  }
  function HandleAddItemToStorage(item) {
    addItemToPage(item);
  }

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }

    const result = data.filter(
      (item) =>
        item.MAAC.includes(inputValue.toUpperCase()) ||
        item.NHOMGO.includes(inputValue.toUpperCase()) ||
        item.GHICHU.includes(inputValue.toUpperCase())
    );

    if (result && inputValue) {
      setSearchResult(result);
    }
  }, [inputValue]);

  return (
    <div className="mt-4 md:mt-8">
      <form onSubmit={handleSubmit}>
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Nhập mã AC cần tìm:
        </p>
        <div className="relative mt-2 flex items-center">
          <input
            ref={firstInputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border block w-full max-w-lg rounded-md border-gray-300 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </form>
      {inputValue && (
        <SearchResult2
          data={searchResult}
          addItemToStorage={HandleAddItemToStorage}
        ></SearchResult2>
      )}
    </div>
  );
};
