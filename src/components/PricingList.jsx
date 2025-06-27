import React from "react";
import { pricing } from "../constants"; // Import dữ liệu các gói pricing
import Button from "./Button"; // Import component Button
import { check } from "../assets"; // Import icon check

// Component PricingList hiển thị danh sách các gói dịch vụ/pricing
const PricingList = () => {
  return (
    // Layout chia các gói pricing thành các khối ngang, tự động xuống dòng trên mobile
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        // Mỗi khối là một gói pricing
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          key={item.id}
        >
          {/* Tiêu đề gói */}
          <h4 className="h4 mb-4">{item.title}</h4>

          {/* Mô tả ngắn về gói */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          {/* Hiển thị giá nếu có */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {/* Nút hành động: nếu có giá thì là Get started, không thì là Contact us */}
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "malto:contact@jsmastery.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          {/* Danh sách các tính năng của gói */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-starts py-5 border-t border-n-6"
              >
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
