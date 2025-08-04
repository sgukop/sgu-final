"use client";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ManagementDeptLaboratories = () => {

  const managementlaboratories = [
    {
      imgSrc: "assets/images/commerce-dept/laboratories/MBA-1.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-2.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-3.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-4.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-5.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-6.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-9.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-10.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-11.jpg",
    },
    {
        imgSrc: "assets/images/commerce-dept/laboratories/MBA-12.jpg",
    },
];
return (
    <section className="tl-4-innovs tl-3-section-spacing">
      <div className="container-fluid">
        <div className="tl-4-innovs-heading mb-50">
          <h2 className="tl-4-section-title">Infrastructure & Laboratories</h2>
        </div>
        <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row tl-7-classes-row">
       
          {managementlaboratories.map((labItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={labItem.imgSrc} alt="Laboratories Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default ManagementDeptLaboratories;
