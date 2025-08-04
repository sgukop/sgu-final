'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Table from "react-bootstrap/Table";
import { testimonialList } from '@/data/Data';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  arrows: boolean;
};

const ElectronicsDeptAlumni: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

  const sliderSettings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: imgNavRef.current || undefined,
    arrows: false,
  };

  return (
    <section className="tl-4-testimonial tl-3-section-spacing">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">
          Alumni
        </h2>
        <div className="row">
                    <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">

        <div className="tl-4-testimonial-slider owl-carousel">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonialList.map((item) => (
              <div key={item.id}>
                <div className="tl-4-testimony">
                  

                  <div className="tl-4-testimony-txt">
                    <p className="tl-4-testimony-review">{item.review}</p>

                    <div className="tl-4-reviewer">
                      <div className="tl-4-reviewer-txt">
                        <h6 className="tl-4-reviewer-name">{item.name}</h6>
                        <span className="tl-4-reviewer-label">{item.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="tl-4-testimonial-users">
          <Slider
            ref={imgNavRef}
            asNavFor={sliderRef.current || undefined}
            slidesToShow={testimonialList.length}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {testimonialList.map((item) => (
              <div key={item.id} role='button' onClick={() => sliderRef.current?.slickGoTo(item.id)}>
                <button>
                  {/* Use onClick to manually control the first slider */}
                  <span className="tl-4-reviewer">
                    <img
                      src={item.imgSrc}
                      alt="User Image"
                      className="tl-4-reviewer-img"
                    />

                    <span className="tl-4-reviewer-txt">
                      <span className="tl-4-reviewer-name">{item.name}</span>
                      <span className="tl-4-reviewer-label">{item.label}</span>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="row gx-0 tl-blog-details-row mt-50">
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Organization</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>Mr. Sheetal Jangeed</p></td>
                  <td><p>Seniror Manager R & D</p></td>
                  <td><p>Tata Communications, Pune</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Ashutosh Parulekar</p></td>
                  <td><p>Project Engineer</p></td>
                  <td><p>Quinnox Consultancy Services</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Dheeraj Maloo</p></td>
                  <td><p>System Engineer</p></td>
                  <td><p>Infosys, Pune</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Indrajeet Pachore</p></td>
                  <td><p>System Engineer</p></td>
                  <td><p>Infosys, Pune</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Prajot Kamalakar</p></td>
                  <td><p>M.S.Telecom. Engineering</p></td>
                  <td><p>Staffordshire  University,UK</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Nikhil Rathod</p></td>
                  <td><p>Associate S/W Engineer</p></td>
                  <td><p>Tech Mahindra Ltd.,Pune</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Vinayak Koli</p></td>
                  <td><p>Design System Engineer</p></td>
                  <td><p>Infosys, Pune</p></td>
                </tr>

                <tr>
                  <td><p>Ms. Gayatri Jadhav</p></td>
                  <td><p>Software Engineer</p></td>
                  <td><p>TCS ,Pune</p></td>
                </tr>

                <tr>
                  <td><p>Mr. Uday Babar</p></td>
                  <td><p>Design Engineer</p></td>
                  <td><p>Sankalp Semiconductors</p></td>
                </tr>
                <tr>
                  <td><p>Ms. Ankita  Khanolkar</p></td>
                  <td><p>Support Services</p></td>
                  <td><p>ICICI Prudential</p></td>
                </tr>
            </tbody>
            </Table>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default ElectronicsDeptAlumni;
