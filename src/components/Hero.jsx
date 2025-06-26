// Component Hero: Phần hero đầu trang, sử dụng Section để tạo layout và hiệu ứng trang trí
import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
// thư viện hiệu ứng parallax nhẹ, mượt mà và đơn giản dành cho ReactJS.
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    // Sử dụng component Section với các tuỳ chọn padding, hiệu ứng gạch ngang và id để điều hướng
    <Section
      className="pt-[12rem] -mt-[5.25rem]" // Padding trên lớn, margin-top âm để đẩy section lên
      crosses // Hiển thị các đường gạch ngang trang trí
      crossesOffset="lg:translate-y-[5.25rem]" // Offset cho đường gạch ngang trên màn hình lớn
      customPaddings // Cho phép tuỳ chỉnh padding
      id="hero" // Đặt id để điều hướng tới section này
    >
      {/* Nội dung phần hero */}
      <div className="container relative" ref={parallaxRef}>
        {/* Khối chứa tiêu đề, mô tả và nút chính của hero */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Tiêu đề lớn của hero */}
          <h1 className="h1 mb-6">
            Explore the Possibilites of&nbsp;AI&nbsp; Chatting with {` `}
            <span className="inline-block relative">
              Brainwave {/* Hình ảnh curve trang trí dưới chữ Brainwave */}
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={642}
                height={28}
              />
            </span>
          </h1>
          {/* Đoạn mô tả ngắn về sản phẩm */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainware. Upgrade your productivity
            with Brainware, the open AI chat app.
          </p>
          {/* Nút chuyển đến trang pricing */}
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Hình ảnh minh họa chính của hero */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* Hiệu ứng viền gradient bo góc quanh hình ảnh */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            {/* Nền tối và bo góc cho khối hình ảnh */}
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* Thanh ngang phía trên hình, tạo hiệu ứng chiều sâu */}
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Hình ảnh robot minh họa cho hero với tỉ lệ khung hình responsive, bo góc dưới và ẩn phần dư */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* Đã loại bỏ scale và translate-y để hình robot hiển thị đầy đủ hơn */}
                <img
                  src={robot}
                  alt="AI"
                  width={1024}
                  height={490}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" // Hiện tại vẫn còn scale và translate-y, cần điều chỉnh lại nếu muốn hình hiển thị đầy đủ
                />

                {/* Hiển thị thanh trạng thái loading bên dưới img*/}
                <Generating className="absolute left-4 right-4 bottom-4 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Hiệu ứng parallax cho dải icon bên trái hình robot, chỉ hiển thị trên màn hình lớn (xl) */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          {/* Hình nền gradient lớn phía sau hình robot, tạo hiệu ứng nổi bật cho hero */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          {/* Các vòng tròn gradient động phía sau hình robot, tạo chiều sâu cho hero */}
          <BackgroundCircles />
        </div>
      </div>
      {/* Đường kẻ gradient phía dưới cùng section hero */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
