// Import các component và dữ liệu cần thiết
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

// Component Roadmap hiển thị lộ trình phát triển sản phẩm
const Roadmap = () => (
  // Khối bọc toàn bộ nội dung Roadmap, dùng Section để căn chỉnh và định danh
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      {/* Khối tiêu đề của Roadmap */}
      <Heading tag="Ready to get started" title="What we're working on" />

      {/* Khối danh sách các mục trong roadmap, hiển thị dạng lưới */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* Lặp qua từng mục trong roadmap để hiển thị card */}
        {roadmap.map((item) => {
          // Xác định trạng thái của từng mục (đã hoàn thành hoặc đang thực hiện)
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            // Khối card cho từng mục trong roadmap
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              {/* Khối nội dung chính của card, có nền và bo góc */}
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                {/* Khối hình nền lưới trang trí */}
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  {/* Khối thông tin ngày tháng và trạng thái hoàn thành */}
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* Khối hình ảnh minh họa cho từng mục */}
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  {/* Khối tiêu đề và mô tả của từng mục */}
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Khối hiệu ứng Gradient trang trí cho Roadmap */}
        <Gradient />
      </div>

      {/* Khối nút chuyển đến trang chi tiết Roadmap */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
