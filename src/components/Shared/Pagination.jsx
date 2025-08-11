import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const Pagination = ({ page, onNext, onPrev, onLast, onFirst, totalPages }) => {
  return (
    <div className="flex items-center mt-8 justify-center gap-4 mb-4">
      <button
        onClick={onFirst}
        disabled={page === 1}
        className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center bg-[#B4E50D] rounded-full"
      >
        <BsChevronDoubleLeft />
      </button>
      <FaChevronLeft
        onClick={onPrev}
        disabled={page === 1}
        className="cursor-pointer"
      />
      <span className="text-gray-800 font-bold text-lg">
        {" "}
        Page {page} of {totalPages}
      </span>
      <FaChevronRight
        onClick={onNext}
        disabled={page === 1}
        className="cursor-pointer"
      />
      <button
        onClick={onLast}
        className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center bg-[#B4E50D] rounded-full"
      >
        <BsChevronDoubleRight />
      </button>
    </div>
  );
};

export default Pagination;
