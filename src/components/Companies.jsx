// components/Companies.jsx
import React from "react";
import { companyIcon } from "../utils/data";

const Companies = () => {
  return (
    // keep this as a single-line, no-wrap container so react-fast-marquee duplicates cleanly
    <div className="flex items-center gap-32 bg-white whitespace-nowrap bg-transparent">
      {companyIcon.map((company, index) => (
        <div
          key={index}
          className="inline-block w-[170px] p-5 bg-white mr-0"
          style={{ display: "inline-block" }}
        >
          <img
            src={company.imgsrc}
            alt={company.alt}
            className="w-full h-auto object-contain block"
            style={{ display: "block", border: "0", background: "transparent" }}
          />
        </div>
      ))}

      {/* Spacer to ensure a visible gap before the duplicated loop begins */}
      <div className="inline-block" style={{ minWidth: 140 }} />
    </div>
  );
};

export default Companies;
