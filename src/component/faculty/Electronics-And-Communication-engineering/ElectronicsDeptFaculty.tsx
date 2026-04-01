'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>

        <div className="row">
          <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />

          <div className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content">

            <div className="tl-course-details-top-courses">
              <div className="row g-4">

                {/* 1 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/1. Dr. SHAMALA MAHADIK.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Dr. Shamala Rajaram Mahadik</h4>
                      <p className="tl-1-course-author-new">Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed2954b17e19d8f36172a" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/2. Dr. SWAPNIL HIRIKUDE.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Dr. Swapnil Manohar Hirikude</h4>
                      <p className="tl-1-course-author-new">Assistant Professor & HoD</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed2ba4b17e19d8f36172f" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/3. Mr. PRASAN KAMBLE.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Prasan Gopal Kamble</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed2d14b17e19d8f361734" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/4. Ms. SHUBHANGI DEKHMUKH.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Shubhangi Chandrashekhar Deshmukh</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed2e84b17e19d8f361739" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/05. KIRAN SALUNKHE.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Kiran Dattatray Salunkhe</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed2fc4b17e19d8f36173e" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/6. Ms. JYOTI WAYKULE.png" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Jyoti Madanrao Waykule</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/674ed3124b17e19d8f361743" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 7 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/sayaliholkar.jpg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mrs. Sayali Bhushan Holkar</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/69942172601ecefb5ce22380" target="_blank" className="tl-3-def-btn">Profile</Link>
                    </div>
                  </div>
                </div>

                {/* 8 */}
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                  <div className="tl-1-course-new">
                    <div className="tl-1-course-img-new">
                      <img src="/assets/images/faculty-profile-photos/etc/Surajkumar.jpeg" alt="Faculty Image"/>
                    </div>
                    <div className="tl-1-course-txt">
                      <h4 className="tl-1-course-title-new mt-30">Mr. Surajkumar Sadashiv Ghatage</h4>
                      <p className="tl-1-course-author-new">Assistant Professor</p>
                      <Link href="https://manage-api.sguk.ac.in/api/assets/69942196601ecefb5ce22385" target="_blank" className="tl-3-def-btn">Profile</Link>
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

export default ElectronicsDeptFaculty