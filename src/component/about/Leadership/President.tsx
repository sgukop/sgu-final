import React from 'react'

const President = () => {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
            <div className="tl-2-section-heading d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">Chairman's Message</h2></div>
            <div className="tl-staff-profile-top">
                <img src="/assets/images/management/team1.jpg" alt="staff image"/>

                <div className="tl-staff-profile-txt">
                    <div className="tl-staff-profile-intro">
                        <div>
                            <h4 className="tl-staff-profile-name">Mr. Sanjay Ghodawat</h4>
                            <h6 className="tl-staff-profile-role">President</h6>
                        </div>
                        <ul className="tl-3-footer-socials">
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>

                    <p className="tl-staff-profile-bio">Sanjay Ghodawat University commenced in the year 2017 to accommodate more students under its aegis to prepare them for the 21st century. The motto is to prepare leaders who can lead on all fronts on a global platform. We have a wide variety of courses where inter-disciplinary approach among students is encouraged. We also focus on entrepreneurial skill impartation among students. We want to have industry-ready technocrats and business-ready professionals.<br/>With curricular education, our University is keen on imparting value education to students. We are helping our students to be sensitive about global issues like climate change, global warming, gender discrimination, loss of Biodiversity and extinction of species, hunger crisis, and Post Covid-19 world challenges. Developing a broader outlook and being more accommodating are some of the virtues that our students imbibe in the culture of our University.<br/>I welcome you to the Sanjay Ghodawat University where excellence is the order of the day, where you will discover more opportunities to prepare yourself for your true calling and be ready to lead the century.<br/><br/> With Best Wishes,</p>

                    <div>
                        <a
                            rel="noopener noreferrer"
                            href="https://manage-api.sguk.ac.in/api/assets/68c7a39d58f443fed174b07b"
                            target="_blank"
                            className="tl-def-btn bg-[#4f70b6] border-none text-white font-bold"
                            style={{ borderRadius: '30px' }}
                        >
                            Short Profile
                        </a>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default President