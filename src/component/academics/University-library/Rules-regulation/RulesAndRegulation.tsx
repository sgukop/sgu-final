"use client";
import React from "react";
import LibraryRules from "./LibraryRules";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const RulesAndRegulation = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
            Rules & Regulations
        </h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
              <LibraryRules />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesAndRegulation;
