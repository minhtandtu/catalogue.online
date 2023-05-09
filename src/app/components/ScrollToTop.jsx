"use client";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Kiểm tra vị trí cuộn của màn hình và hiển thị nút khi cần thiết
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isVisible = scrollTop > 200; // Hiển thị nút khi cuộn xuống 200px
    setIsVisible(isVisible);
  };

  // Thêm sự kiện lắng nghe khi cuộn màn hình
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Xử lý khi người dùng nhấp vào nút
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tạo hiệu ứng cuộn mượt
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 bg-gray-500/70 hover:bg-gray-600 text-white p-4 rounded transition duration-300 "
          onClick={handleClick}
        >
          <p>top</p>
          <p className="animate-bounce">↑</p>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
