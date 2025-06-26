// hiển thị một thông báo (notification) đẹp mắt
import React from "react";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    // Khối thông báo chính, có thể nhận thêm className từ props
    <div
      className={`$${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Ảnh đại diện thông báo */}
      <img
        src={notification1}
        alt="image"
        width={62}
        height={62}
        className="rounded-xl"
      />

      <div className="flex-1">
        {/* Tiêu đề thông báo */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          {/* Danh sách các icon nhỏ đại diện cho các notification phụ */}
          <ul className="flex -m-0 5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          {/* Thời gian thông báo */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
