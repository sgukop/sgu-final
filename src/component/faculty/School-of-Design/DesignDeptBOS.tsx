"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function DesignDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Design" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name of Member</p></th>
                  <th><p className="text-[#4f70b6]">Post/ Category</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                {/*  <th><p>Mail ID & Mob No.</p></th>  */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Prof. Dr. V. V. Kulkarni</p></td>
                  <td><p>Director, IIC, <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Chairman</p></td>
                 {/*  <td><a href="mailto:vivek.kulkarni@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2">vivek.kulkarni@sanjayghodawatuniverisy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9011050145</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Mrs. Swapnali P. Kulkarni</p></td>
                  <td><p>Associate Professor <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Member </p></td>
                {/*   <td><a href="mailto:swapnali.kulkarni@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2">swapnali.kulkarni@sanjayghodawatuniverisy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>7447427775</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. Vinay Gawali</p></td>
                  <td><p>Asst. Professor <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Member </p></td>
                 {/*  <td><a href="mailto:vinay.gawali@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2">vinay.gawali@sanjayghodawatuniverisy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9174869756</p>
                    </td> */}
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Ms. Bhakti Gaikwad</p></td>
                  <td><p>Asst. Professor <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Member</p></td>
                {/*   <td><a href="mailto:bhakti.gaikwad@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2">bhakti.gaikwad@sanjayghodawatuniverisy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9765585218</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Ms. Rasika Kandale</p></td>
                  <td><p>Asst. Professor <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Member</p></td>
                 {/*  <td><a href="mailto:rasika.kandale@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2">rasika.kandale@sanjayghodawatuniverisy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>7768085760</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Mr. Rohit Shinde</p></td>
                  <td><p>CEO, Unimetals, Kolhapur</p></td>
                  <td><p>External Member (Industrialist) Product Design</p></td>
                 {/*  <td><a href="mailto:rasika.kandale@sanjayghodawatuniverisy.ac.in" className="tl-def-btn-2"> <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9049933344</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr. Amey Ghatge</p></td>
                  <td><p>CEO, Wings 44, Kolhapur</p></td>
                  <td><p>External Member (Industrialist)Product Design</p></td>
                {/*   <td><a href="mailto:info@wings44.com" className="tl-def-btn-2">info@wings44.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9422049065</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Dr. Ankit Jain</p></td>
                  <td><p>Academician & Free Lancer (AVGC - Graphics)</p></td>
                  <td><p>External Member (Invitee) Graphics Design</p></td>
                 {/*  <td><a href="mailto:Avgc.ankit@gmail.com" className="tl-def-btn-2">Avgc.ankit@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9408869315</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Mr. Kaustubh Joshi</p></td>
                  <td><p>CEO, Pixl Play Creative</p></td>
                  <td><p>External Member (Industrialist)Graphics Design</p></td>
                 {/*  <td><a href="mailto:Avgc.ankit@gmail.com" className="tl-def-btn-2"><i className="fa-regular fa-arrow-right"></i></a>
                  <p>9689595974</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>Mr. Sameet Soman</p></td>
                  <td><p>Head Design, Cognizant, Pune</p></td>
                  <td><p>External Member (Industrialist)Graphics Design</p></td>
                {/*   <td><a href="mailto:sameet.soman@gmail.com" className="tl-def-btn-2">sameet.soman@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9763327556</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>Ar. Amit Danait</p></td>
                  <td><p>Founder & Chief Editor,A & I Digest Magazine</p></td>
                  <td><p>External Member (Industrialist)Space Design</p></td>
                  {/* <td><a href="mailto:amitdanait97@gmail.com" className="tl-def-btn-2">amitdanait97@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9604789789</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>12</p></td>
                  <td><p>Dr. Dharati Sote-Wankhade</p></td>
                  <td><p>Associate Professor,BNCA College, Pune</p></td>
                  <td><p>External Member (Academician)Space Design</p></td>
                {/*   <td><a href="mailto:dharati.sote@gmail.com" className="tl-def-btn-2">dharati.sote@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9561775792</p>
                    </td>  */}
                </tr>

                <tr>
                  <td><p>13</p></td>
                  <td><p>Mrs. Sheetal Athalye</p></td>
                  <td><p>Principal, Times & Trends Academy, Pune</p></td>
                  <td><p>External Member (Academician)Fashion Design</p></td>
                 {/*  <td><a href="mailto:dharati.sote@gmail.com" className="tl-def-btn-2">dharati.sote@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9890241901</p>
                    </td>  */}
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

export default DesignDeptBOS;
