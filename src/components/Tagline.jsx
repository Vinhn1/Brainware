// Component Tagline: Hiển thị một dòng tagline với dấu ngoặc trang trí hai bên
import React from "react";
import brackets from "../assets/svg/Brackets";

// props: className cho phép tuỳ chỉnh style, children là nội dung tagline
const Tagline = ({ className, children }) => {
  return (
    // Khối bao ngoài: flex căn giữa, thêm class tagline và class tuỳ chỉnh
    <div className={`tagline flex items-center ${className || ""}`}>
      {/* Dấu ngoặc trái */}
      {brackets("letf")}
      {/* Nội dung tagline */}
      <div className="mx-3 text-n-3">{children}</div>
      {/* Dấu ngoặc phải */}
      {brackets("right")}
    </div>
  );
};

export default Tagline;
