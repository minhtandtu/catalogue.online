import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = () => {
  return (
    <div>
      <a
        href="/mau-melamin"
        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block "
      >
        <MagnifyingGlassIcon className="w-6 text-gray-500 cursor-pointer"></MagnifyingGlassIcon>
      </a>
    </div>
  );
};

export default Search;
