import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Hiển thị danh sách các lợi ích nổi bật (benefits/features)
const Benefits = () => {
  return (
    // Section chứa toàn bộ khối lợi ích
    <Section id="feature">
      <div className="container relative z-2">
        {/* Heading: tiêu đề cho section benefits */}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainware"
        />

        {/* Danh sách các benefit card */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            // Card từng benefit, có background riêng, hiệu ứng hover và clip-path
            <div
              className="block relative p-0 5 bg-n-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Nội dung chính của benefit */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* Hiệu ứng gradient sáng cho card nếu có thuộc tính light */}
              {item.light && <GradientLight />}

              {/* Lớp phủ nền tối và hiệu ứng hover mờ, dùng clip-path SVG */}
              <div
                className="absolute inset-0 5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0 opcity-0 transition-opacity hover:opacity-10">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width={380}
                    height={362}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* SVG định nghĩa clip-path cho hiệu ứng bo góc đặc biệt */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
