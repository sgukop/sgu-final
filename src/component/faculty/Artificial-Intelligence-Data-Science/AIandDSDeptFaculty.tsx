'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIandMLDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
          Faculty Profile
        </h2>

        <div className="row">
          <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-course-details-top-courses">
              <div className="row g-4">

                {/* Faculty 1 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Gurunath Machhale</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Head</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>  

                {/* Faculty 2 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/MR. Aditya kshirsagar.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Aditya Kshirsagar</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                 {/* Faculty 3 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mr. Akshay Baviskar.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Akshay Baviskar</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 4 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mr. Mobarak Hossain.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Mobarak Hossain</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 5 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mr. Sameer Jadhav.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Sameer Jadhav</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 6 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mrs. Diksha Karandikar.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Diksha Karandikar</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 7 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mrs. Kavya Kurup.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Kavya Kurup</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 8 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mrs. Madhushri Tangali.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Madhushri Tangali</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                {/* Faculty 9 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/AIDS/Faculty profile/Mrs. Vaishali Fulare.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Vaishali Fulare</h4>
                      <p className="tl-1-course-author-new dark-mode-white-color">Instructor</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIandMLDeptFaculty
