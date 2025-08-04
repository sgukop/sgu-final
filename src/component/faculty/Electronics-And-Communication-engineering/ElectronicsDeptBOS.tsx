"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function ElectronicsDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            

         {/*   <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">SN</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Swapnil Hirikude</p></td>
                  <td><p>Assistant Professor & H.o.D <br/>Department of Electronics & Communication Engineering, SGU</p></td>
                  <td><p>Chairman</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Sudhakar Mande</p></td>
                  <td><p>Prinicpal & Professor, DBIT, Mumbai</p></td>
                  <td><p>Member <br/> Academia Expert</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Yogesh Dandawate</p></td>
                  <td><p>Professor, VIIT, Pune.</p></td>
                  <td><p>Member <br/> Research Expert</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Mrs. S. R. Mahadik</p></td>
                  <td><p>Professor, Electronics & Communication Engineering, SGU.</p></td>
                  <td><p>Member <br/> Ph.D Coordinator</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mrs. Shubhangi C. Deshmukh</p></td>
                  <td><p>Assistant Professor, <br/> Department of Electronics & Communication Engineering, SGU.</p></td>
                  <td><p>Member <br/> M. Tech. Program Coordinator</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Mr. Prasan G. Kamble</p></td>
                  <td><p>Assistant Professor, <br/> Department of Electronics & Communication Engineering, SGU.</p></td>
                  <td><p>Member <br/> B. Tech. Program Coordinator</p></td>
                </tr>
            </tbody>
            </Table>  */}

<Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                  <th><p className="text-[#4f70b6]">Email</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Swapnil Hirikude</p></td>
                  <td><p>Assistant Professor & Head, E & C Engg Department, Sanjay Ghodawat University</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>swapnil.hirikude@ec.sguk.ac.in</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Sudhakar Mande</p></td>
                  <td><p>Prinicpal& Professor, Don Bosco Institute of Technology, Mumbai, Maharashtra</p></td>
                  <td><p>Member Academia Expert</p></td>
                  <td><p>ssmande@dbit.in</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Y.S.Rao</p></td>
                  <td><p>Vice Principal & Professor - E & TC Engg, Sardar Patel Institute of Technology, Mumbai, Maharashtra</p></td>
                  <td><p>Member Academia Expert</p></td>
                  <td><p>ysrao@spit.ac.in</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Pallavi Mane</p></td>
                  <td><p>Professor and Head, E & C Engg.  Manipal Institute of Technology, Manipal, Karnataka</p></td>
                  <td><p>Member Academia Expert</p></td>
                  <td><p>palvi.mane@manipal.edu</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. Yogesh H. Dandawate</p></td>
                  <td><p>Professor of E & TC Engg, Vishwakarma Institute of Information Technology, Pune, Maharashtra</p></td>
                  <td><p>Member Research Expert</p></td>
                  <td><p>yogesh.dandawate@viit.ac.in</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Sanjay Pawar</p></td>
                  <td><p>Director, Artificial Intelligence and Emerging Technology (BAIET) Foundation, Pune, Maharashtra</p></td>
                  <td><p>Member Industry Expert</p></td>
                  <td><p>sspawar@ieee.org</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr. Nitin Naik</p></td>
                  <td><p>Research and Innovation Professional, Sangli</p></td>
                  <td><p>Member Professor of Practice</p></td>
                  <td><p>nitinbnaik@gmail.com</p></td>
                </tr>

              {/*  <tr>
                  <td><p>8</p></td>
                  <td><p>Mr. Manoj Chougule</p></td>
                  <td><p>Versatile R&D professional, Dhayari Pune</p></td>
                  <td><p>Member Professor of Practice</p></td>
                  <td><p>chougulemanoj@gmail.com</p></td>
                </tr>  */}

                <tr>
                  <td><p>8</p></td>
                  <td><p>Ms. Mrunal Patwardhan</p></td>
                  <td><p>Embedded Software Engineer Honeywell Technology Solutions, Bangalore</p></td>
                  <td><p>Member Alumni</p></td>
                  <td><p>mrunalpatwardhan01@gmail.com</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Dr. Mrs. S. R. Mahadik</p></td>
                  <td><p>Professor, E & C Engg, Sanjay Ghodawat University</p></td>
                  <td><p>Member Ph.D. Coordinator</p></td>
                  <td><p>shamala.mahadik@ec.sguk.ac.in </p></td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>Mrs. Shubhangi C. Deshmukh</p></td>
                  <td><p>Assistant Professor, E & C Engg, Sanjay Ghodawat University</p></td>
                  <td><p>Member PG Program Coordinator</p></td>
                  <td><p>shubhangi.deshmukh@ec.sguk.ac.in</p></td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>Mr. Prasan G. Kamble</p></td>
                  <td><p>Assistant Professor, E & C Engg, Sanjay Ghodawat University</p></td>
                  <td><p>Member Secretary UG Program Coordinator</p></td>
                  <td><p>prasan.kamble@ec.sguk.ac.in</p></td>
                </tr>

               </tbody>
            </Table>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ElectronicsDeptBOS;
