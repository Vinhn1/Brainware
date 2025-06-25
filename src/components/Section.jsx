// Component Section: Tạo một section (khối) có thể tái sử dụng với các tuỳ chọn về padding, border, hiệu ứng SVG và các dấu gạch ngang trang trí
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className, // className bổ sung cho section
  id, // id của section để điều hướng hoặc tham chiếu
  crosses, // boolean: có hiển thị các đường gạch ngang trang trí không
  crossesOffset, // tuỳ chọn offset cho các đường gạch ngang
  customPaddings, // tuỳ chọn padding tuỳ chỉnh
  children, // nội dung bên trong section
}) => {
  return (
    // Khối bao ngoài section, thiết lập id, padding và các class
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : " "} ${
          className || ""
        }`
      } `}
    >
      {/* Nội dung truyền vào section */}
      {children}
      {/* Đường kẻ dọc bên trái section (ẩn trên mobile) */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />

      {/* Đường kẻ dọc bên phải section (ẩn trên mobile) */}
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Nếu crosses = true thì hiển thị thêm các đường gạch ngang và SVG trang trí */}
      {crosses && (
        <>
          {/* Đường kẻ ngang phía trên section */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />

          {/* SVG trang trí section */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
