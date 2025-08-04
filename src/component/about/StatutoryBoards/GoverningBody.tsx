"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function GoverningBody() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
            <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Governing Body</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per Section 21(1) of Mah Act No XL of 2017)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>DESIGNATION</p></th>
                  <th><p>NAME & PARTICULARS & ADDRESS</p></th>
                  <th><p>SECTION (21) (1)</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>Chairman</p></td>
                  <td>
                    <p>Mr. Sanjay D. Ghodawat <br />
                    President, Sanjay Ghodawat University,Kolhapur.
                    <br />
                    <br/>
                    28, Sushreya, Yashwant Co-Op Housing Society,
                    <br />
                    A/o: Jaysingpur. Tal: Shirol, Dist: Kolhapur. 416 101</p>
                   
                    {/*<Link href="mailto:chairman@ghodawat.com">
                      chairman@ghodawat.com
                    </Link>  */}
                    <a href="mailto:chairman@ghodawat.com" className="table-link">chairman@ghodawat.com <i className="fa-regular fa-arrow-right text-[#4f70b6]"></i></a>
                  </td>
                  <td><p>(a)</p></td>
                </tr>

                <tr>
                  <td><p>Member</p></td>
                  <td>
                  <p>Prof. Dr. Udhav Bhosle <br />
                  Vice-Chancellor,Sanjay Ghodawat University, Kolhapur.
                    <br />
                    <br />
                    Apartment No-A-2, SGU Campus, Atigre.</p>
                   
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="table-link">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>(b)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                     (Nominee of the Trust)</p></td>
                  <td>
                  <p>Mr. Shrenik S. Ghodawat <br />
                  
                    <br />
                  
                    Secretary, Sou. Sushila Danchand Ghodawat Cha. Trust, Jaysingpur.
                    <br />
                    28, Sushreya, Yashwant Co-Op Housing Society,<br/>
                    A/o: Jaysingpur. Tal: Shirol, Dist: Kolhapur. 416 101<br/></p>
                   
                    
                    <a href="mailto:shrenik@ghodawat.com" className="table-link">shrenik@ghodawat.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>(c)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                     (Nominee of the Trust)</p></td>
                  <td>
                  <p>Mr. Vinayak V. Bhosale <br />
                  
                    <br />
                  
                    Trustee, Sou. Sushila Danchand Ghodawat Cha. Trust, Jaysingpur.
                    <br />
                    Plot No 630, Shahu Nagar, Sudarshan Chowk, Jaysingpur.<br/>
                    Tal: Shirol, Dist: Kolhapur. 416 101<br/></p>
                   
                   
                    <a href="mailto:vinayak@sanjayghodawatuniversity.ac.in" className="table-link">vinayak@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                    <a href="mailto:vinayak@sginstitute.in" className="table-link">vinayak@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>(c)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                     (Nominee of the Trust)</p></td>
                  <td>
                  <p>Dr. Arun D. Sawant <br />
                  
                    <br />
                  
                    C-002 Gandhar Towers,1st Khed Lane, Off Sayani Road, Prabhadevi Mumbai-400025</p>
                    
                  </td>
                  <td><p>(c)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Educationist Nominated by the Trust)</p></td>
                  <td>
                  <p>Dr. Salunkhe Manikrao M. <br />
                  
                    <br />
                  
                    Vishnu Madhav, 496/1, Plot No 1, 
                    <br />
                    Samratnagar, Ambai Defence Colony, Rajendranagar Road, Kolhapur.<br/></p>
                   
                   
                   
                    <a href="mailto:manikrao.salunkhe@gmail.com" className="table-link">manikrao.salunkhe@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                   
                  </td>
                  <td><p>(c)</p></td>
                </tr>

                
                <tr>
                  <td><p>Member <br/>
                  (Educationist Nominated by the Trust)</p></td>
                  <td>
                  <p>Prof. Dr. Rajnish K. Kamat,</p>
                  </td>
                  <td><p>(c)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Nominee of the President from expert of Management outside the University)</p></td>
                  <td>
                  <p> Dr. Bhimraya Metri <br />
                  
                    <br />
                  
                    Director, IIM Nagpur. 
                    <br />
                    VNIT Campus, S Ambazari Rd, Ambazari, Nagpur, Maharashtra 440010.</p>
                   
                   
                   
                    <a href="mailto:metriba@gmail.com" className="table-link">metriba@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                   
                  </td>
                  <td><p>(d)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Nominee of the State Government)</p></td>
                  <td>
                  <p>Awaited from State Government </p>
                   
                  </td>
                  <td><p>(e)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Nominee of the State Government)</p></td>
                  <td>
                  <p>Awaited from State Government </p>
                   
                  </td>
                  <td><p>(e)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Nominee of the President from Industry)</p></td>
                  <td>
                  <p>Mr. Anand Surana  <br/>
                  45/3 Fairfield layout Race Course Road, Bengaluru-560001 </p>
                  
                    <a href="mailto:abhay@jains.com" className="table-link">abhay@jains.com <i className="fa-regular fa-arrow-right"></i></a>
                   
                  </td>
                  <td><p>(f)</p></td>
                </tr>

                <tr>
                  <td><p>Member <br/>
                  (Nominee of the President from Industry)</p></td>
                  <td>
                  <p> Mr. Amit Mate  </p>
                 
                  </td>
                  <td><p>(f)</p></td>
                </tr>

                <tr>
                  <td><p>Member Secretary <br/>
                  (Nominee of the President from Industry)</p></td>
                  <td>
                  <p> Dr. Vivek M. Kayande  <br/>
                  Sanjay Ghodawat University Kolhapur.</p>
                 
                    <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="table-link">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                   
                  </td>
                  <td><p>(f)</p></td>
                </tr>

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoverningBody;
