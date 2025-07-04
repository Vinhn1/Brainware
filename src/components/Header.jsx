import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Component Header
const Header = () => {
  // Sử dụng hook useLocation để lấy thông tin đường dẫn hiện tại
  const pathName = useLocation();

  // State để kiểm soát trạng thái mở/đóng menu navigation trên mobile
  const [openNavigation, setOpenNavigation] = useState(false);

  // Hàm bật/tắt menu navigation, đồng thời khóa/mở cuộn trang khi menu mở
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll(); // Mở lại cuộn trang khi đóng menu
    } else {
      setOpenNavigation(true);
      disablePageScroll(); // Khóa cuộn trang khi mở menu
    }
  };

  // Hàm xử lý khi click vào một mục menu, sẽ đóng menu nếu đang mở
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll(); // Mở lại cuộn trang
    setOpenNavigation(false); // Đóng menu
  };

  return (
    // Khối bao ngoài header: cố định trên cùng, nền mờ, có viền
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      {/* Khối flex chứa logo và menu điều hướng */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo, bấm về đầu trang */}
        <a href="#hero" className="blocx w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainware" width={190} height={40} />
        </a>

        {/* Menu điều hướng (ẩn trên mobile, hiện trên màn hình lớn) */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          {/* Khối chứa các mục menu */}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Navigation: duyệt qua mảng object và render ra màn hình */}
            {navigation.map((item) => (
              <a
                key={item.id} // key giúp React nhận diện từng phần tử trong danh sách
                href={item.href} // Đường dẫn của từng mục menu
                onClick={handleClick} // Đóng menu khi click vào mục menu (trên mobile)
                className={`block relative font-code text-2xl uppercase text-n-1 transiton-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title} {/* Tiêu đề của mục menu */}
              </a>
            ))}
            {/* HambugerMenu (components design) */}
            {/* End Navigation */}
          </div>
          <HambugerMenu />
        </nav>
        {/* End Nav */}

        {/* Singup, Login */}
        <a
          href="#singup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        {/* Dùng Components Button Đã Tạo */}
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          {/* Toggle Menu Khi Ở Giao Diện Mobile Click Vào Button Sẽ Ra Menu */}
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        {/* End Singup, Login */}
      </div>
    </div>
  );
};

export default Header;
