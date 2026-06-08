"use client";

import React, { useState, useEffect } from "react";
import { useTalimContext } from "@/context/TalimContext";
import NavLink from "../navigation/NavLink";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";

const NewHeaderSection = () => {
  const { handleSidebarOpen } = useTalimContext();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ FIX: replaced next/navigation with next/router
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname === "/") {
      setIsPopupOpen(true);
    }
  }, [pathname]);

  return (
    <>
      {/* ================= POPUP ================= */}
      {pathname === "/" && isPopupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative max-w-[90%] max-h-[90vh] bg-white p-2 rounded-lg shadow-2xl">

            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute -top-4 -right-4 bg-[#f26122] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-[#212f64] transition"
            >
              ✕
            </button>

            <a
              href="https://www.sguk.ac.in/admission-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/images/popup/#.jpeg"
                alt="Popup"
                className="max-h-[80vh] object-contain rounded-md"
              />
            </a>

          </div>
        </div>
      )}

      {/* ================= LOGO ================= */}
      <div className="w-full">
        <img
          src="assets/images/new-logo/sgu-main-logo.jpg"
          alt="Logo"
          className="w-full object-contain"
        />
      </div>

      {/* ================= TOP NAV ================= */}
      <div className="w-full relative z-50">

        <div className="bg-[#212f64] text-white flex justify-between items-center px-4 py-2 text-sm flex-wrap">

          <ul className="flex gap-3 items-center">
            <li><NavLink href="/internationalization-SGU">Internationalization @SGU</NavLink></li>
            <li>|</li>
            <li><NavLink href="/antiragging">Anti-Ragging</NavLink></li>
            <li>|</li>
            <li><NavLink href="/careers">Careers</NavLink></li>
            <li>|</li>
            <li><NavLink href="/NIRF-ranking">NIRF Ranking</NavLink></li>
          </ul>

          <ul className="flex gap-3 items-center">
            <li><NavLink href="/public-disclosure">Public Disclosure</NavLink></li>
            <li>|</li>
            <li><a href="https://sgu.edulip.in/UI/indexSGU.php" target="_blank">Staff Login</a></li>
            <li>|</li>
            <li><NavLink href="/Media">Media</NavLink></li>
          </ul>

        </div>

        {/* ================= MARQUEE ================= */}
        <Marquee speed={100} pauseOnHover gradient={false} className="bg-white py-2">
          <a
            href="https://www.sguk.ac.in/admission-open"
            target="_blank"
            className="text-red-700 font-semibold mr-8"
          >
            Admissions Open 2026–27
          </a>

          <a
            href="https://manage-api.sguk.ac.in/api/assets/6a02fdbda93e8415504a4dca"
            target="_blank"
            className="text-red-700 font-semibold mr-8"
          >
            SGU Placements 2025 Updates
          </a>
        </Marquee>

        {/* ================= HAMBURGER ================= */}
        <div className="bg-[#f26122] p-2">
          <button onClick={handleSidebarOpen} className="text-white text-xl">
            ☰ Menu
          </button>
        </div>

      </div>
    </>
  );
};

export default NewHeaderSection;