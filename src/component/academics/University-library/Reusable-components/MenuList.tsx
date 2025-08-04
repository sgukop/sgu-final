'use client';
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuList = ({ dept = "", subMenu = [{ title: "", path:""}]}) => {
    const loc = usePathname();

  return (
    <div className="col-sm-12 col-lg-3 col-md-6 mb-4">
    <nav
      id="menu-navbar"
      className="submenu navbar navbar-light flex-column mt-4"
    >
      <span className="mb-3">{dept}</span>
      <nav className="nav nav-pills flex-column nav-pills-wrapper">
        {subMenu.map((v, i) => (
          <Link
            className={`nav-link ${loc === v.path ? "active" : ""}`}
            href={v.path} key={i}
          >
            {v.title}
          </Link>
        ))}
      </nav>
    </nav>
  </div>
  );
};

export default MenuList;



