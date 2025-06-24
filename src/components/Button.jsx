import ButtonSvg from "../assets/svg/ButtonSvg";
// Component Button tái sử dụng, nhận các props để tùy chỉnh giao diện và chức năng
const Button = ({ className, href, onClick, children, px, white }) => {
  // class tailwind tạo nút button
  const classes = `button relative inline-flex items-center justify-center h-11 trantision-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  // Class cho span bao nội dung, để đảm bảo nó hiển thị đúng lớp z-index
  const spanClasses = "relative z-10";

  // Trả về một thẻ button với class đã xử lý ở trên
  const renderButton = () => (
    <button className={classes}>
      {/* children là nội dung do người dùng truyền vào */}
      <span className={spanClasses}>{children}</span>
      {/* Hiển thị icon SVG đi kèm, màu phụ thuộc vào prop 'white' */}
      {ButtonSvg(white)}
    </button>
  );

  // Nếu có truyền href thì trả về thẻ <a> thay vì <button>
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Nếu có href thì là link, còn không thì là button
  return href ? renderLink() : renderButton();
};

export default Button;
