import React from "react";
import { companyIcon } from "../utils/data";

const Companies = () => {
  return (
    <div className="flex items-center justify-between gap-15">
      {companyIcon.map((company, index) => (
        <div className="w-[150px] p-5" key={index}>
          <img
            src={company.imgsrc}
            alt={company.alt}
            className="w-full h-auto object-contain "
          />
        </div>
      ))}
    </div>
  );
};

export default Companies;
