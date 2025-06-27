import React from "react";
import Section from "./Section"; // Import component Section để bọc layout
import { smallSphere, stars } from "../assets"; // Import các asset hình ảnh
import Heading from "./Heading"; // Import component Heading (tiêu đề)
import { LeftLine, RightLine } from "./design/Pricing"; // Import các SVG đường kẻ trang trí
import PricingList from "./PricingList"; // Import component danh sách các gói pricing

// Component Pricing hiển thị toàn bộ phần pricing của trang
const Pricing = () => {
  return (
    // Section là layout chính, có thể thêm class và id
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Hình cầu và hiệu ứng ngôi sao nền, chỉ hiển thị trên màn hình lớn */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img src={smallSphere} alt="Sphere" width={255} height={255} />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="Starts"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        {/* Tiêu đề phần pricing */}
        <Heading
          tag="Get started with Brainware"
          title="Pay once, use forever"
        />

        {/* Danh sách các gói pricing và các đường kẻ trang trí */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* Link xem chi tiết các gói pricing */}
        <div className="flex justify-center mt-10">
          <a
            href=""
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
