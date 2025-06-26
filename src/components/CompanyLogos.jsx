import React from "react";
import { companyLogos } from "../constants";

//  hiển thị danh sách các logo công ty
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Tieu de */}
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      {/* Danh sach logo cac cty */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem"
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
