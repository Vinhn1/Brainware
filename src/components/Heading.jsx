// Component Heading: Hiển thị tiêu đề section với tagline, title và mô tả
import React from "react";
import Tagline from "./Tagline";

// props: className (tuỳ chỉnh style), title (tiêu đề), text (mô tả), tag (tagline)
const Heading = ({ className, title, text, tag }) => {
  return (
    // Khối bao ngoài căn giữa, giới hạn chiều rộng, margin dưới
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Hiển thị tagline nếu có */}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {/* Hiển thị tiêu đề nếu có */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Hiển thị mô tả nếu có */}
      {text && <p className="body-2 mt4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
