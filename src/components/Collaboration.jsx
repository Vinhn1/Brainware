// Component Collaboration: Hiển thị giao diện hợp tác với AI, gồm 2 phần trái/phải
import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    // Section có hiệu ứng crosses (gạch ngang)
    <Section crosses>
      {/* Bên trái: text, danh sách tính năng, nút CTA */}
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          {/* Tiêu đề chính */}
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          {/* Danh sách các tính năng nổi bật */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex flex-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {/* Hiển thị mô tả nếu có */}
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          {/* Nút kêu gọi hành động */}
          <Button>Try it now</Button>
        </div>
      </div>
      {/* End left */}

      {/* Bên phải: biểu tượng tròn với các app xung quanh */}
      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        {/* Đoạn mô tả ngắn về hợp tác */}
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          {collabText}
        </p>

        {/* Vòng tròn lớn chứa logo trung tâm và các app xung quanh */}
        <div className="relative left-1/2 flex w-[22rem] aspect-spare border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
          {/* Vòng tròn trung tâm với logo brainware */}
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={brainwaveSymbol}
                  alt="brainware"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>

          {/* Danh sách các app, sắp xếp xoay quanh logo trung tâm */}
          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] bg-n-7 border border-n-1/5 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    src={app.icon}
                    alt={app.title}
                    width={app.width}
                    height={app.height}
                  />
                </div>
              </li>
            ))}
          </ul>
          {/* Đường cong trang trí bên trái và phải vòng tròn */}
          <LeftCurve />
          <RightCurve />
        </div>
      </div>
      {/* End Right */}
    </Section>
  );
};

export default Collaboration;
