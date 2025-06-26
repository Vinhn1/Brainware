// Component Generating: Hiển thị thông báo loading khi AI đang xử lý
import React from "react";
import { loading } from "../assets";

// props: className cho phép tuỳ chỉnh style từ bên ngoài
const Generating = ({ className }) => {
  return (
    // Khối bao ngoài: flex căn giữa, nền mờ, bo góc, nhận thêm class tuỳ chỉnh
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Icon loading động */}
      <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
      {/* Thông báo trạng thái */}
      AI is generating
    </div>
  );
};

export default Generating;
