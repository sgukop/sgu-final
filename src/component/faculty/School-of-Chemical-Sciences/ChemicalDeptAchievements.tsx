import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ChemicalDeptAchievements = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-9-section-title mb-50">Achievements</h2>
        </div>
        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty/Students Achievements</h2></div>
                <div className="col-lg-12 mt-30">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content">
                <h3 className="tl-event-details-area-title">Students Achievements</h3>
                <ul className="tl-event-details-key-content-list">
                    <li>Ms Eureka Kadlas, Cracked IIT-JAM 2025-2026.</li>
                    <li>Shreya Koregave awareded DST- Inspire scholarship for Bsc Program.</li>
                    <li>Ms Ruth Madhale, Research Scholar from the Department of Chemistry has successfully Ph.D degree in Chemistry.
                         Thesis entitled: “development of novel photocatalytic materials for water splitting, environmental remediation and antimicrobial activity”.</li>
                    <li>Ms Pratiksha Lambe who is selected for an prestigious  Indian Academy of Science, Bangalore (IASc) Summer Research Fellowship in 2023 at Guru Nanak Dev University, Amritsar.</li>
                    <li>Kirti Patil (MSc-II Analytical Chemistry) received WEnyan Fellowship 2023 for pursuing her research project from BASF-PKC Pune Maharashtra</li>
                    <li>Mr. Satyam Kore (M.Sc. Analytical Chemistry) and Chaitrali Kabbin (M.Sc. Organic Chemistry) were selected all over India for a 3-month Summer Research Fellowship/internship at CSIR-CSMCRI, Gujarat.</li>
                    
                    <li>Miss Nikita Dadhich, T. Y. B. Sc student selected for award of Wenyan scholarship for her UG research project from BASF-PKC Pune Maharashtra. </li>
                    <li>Mr. Tejas Patil who has been selected for the Summer internship program at IIT, Bhubaneshwar.</li>
                    <li>Mr. Tejas Patil (M.Sc. Organic Chemistry) selected for a 3 month internship/dissertation at CSIR-N.I.O, Goa.</li>
                    <li>Akanksha Talwalkar (M.Sc-II  Oganic Chemistry) was selected for Teesside University, UK for a Management disaster program funded by British Council, UK and SGU.</li>
                    <li>Ms. Shrilekha Bachche selected for skill development Program course at NCL.</li>
                    <li>Miss Shrilekha Bachche and Mrs Ruth Madhale, Ph.D students for the STUTI workshop organized by SAIF-DST-CFC, Shivaji University, Kolhapur from 1-7th Nov 2022.</li>
                    <li>Sunny Dubal (M.Sc- II project student) received a Best poster presentation prize at National conference on “Emerging Trends in Chemical and Material Sciences” (ETCMS- 2020) on 6-7th March., 2020 at Shivaji University, Kolhapur.</li>
                </ul>
            </div>
        </div>
    </div>
        
        <div className="col-lg-12">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content">
                <h3 className="tl-event-details-area-title">Faculty Achievements</h3>
                <ul className="tl-event-details-key-content-list">
                  <li>Dr. Pallavi Bhange received the Prestigious Young Associate Award in Chemical Sciences from the Maharashtra Academy of Science in 2023 from Prof. G.D. Yadav.</li>
                  <li>Dr. Sonali suryawanshi rechieved InSc Young Researcher, Institute of Scholar, Bengaluru 2021-2022</li>
                  <li>Dr. Santosh Chavan received DST-SERB, NPDF at IICT Hydrabad 2019-20</li>
                  <li>Mr. Audumber A Patil Best Oral Presentation award in National conference held by Shivaji University, Kolhapur in 2019.</li>
                  <li>Dr. Shivaji Jadhav received Summer research fellowship in 2019 from  Indian Academy of Science, Bangalore</li>
                
                  
                  
                </ul>

            </div>
        </div>
    </div>

    <div className="tl-8-course mt-10 mb-30">
        <div className="tl-8-course-img">
            <img src="assets/images/chemical-sciences-dept/achievements/image9.jpeg" alt="Achievement Image"/>
        </div>
    </div>



    <div className="col-lg-12 mt-30">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content">
                <h3 className="tl-event-details-area-title">Sports Achievements</h3>
                <ul className="tl-event-details-key-content-list">
                    
                    <li>Miss Prachi Mane, a student pursuing FYB.Sc., secured a bronze medal in the RSC National Boxing Championship held in Bangalore, Karnataka, on February 19, 2024.</li>
                    <li>Mr. Rohan Dhole, a FY B.Sc. student, clinched the first prize in 74 kg group at the State Level wrestling competition in Chandur, Dist Kolhapur, from 26 to 28 Jan 2024. Also win Silver Medal, Kolhapur Mahaour Wrestling competition December 28, 2023.</li>
                    <li>Mr. Pruthavi Magdum, FYB.Sc. student, secured first prize in the 79 kg category at the State Level wrestling competition in Chandur, Dist Kolhapur, from 26 to 28 Jan 2024. Additionally, he won a Silver Medal in Kolhapur Mahaour Wrestling competition on December 28, 2023, and a Gold medal at the Sena Kesari 2024 competition held in Pune from 16 to 18, 2024.</li>
                    <li>Miss Vaishnavi Desai, FY B.Sc student, bagged 10th rank among 180 participants at the South-West Zone Archery Tournament December 2023, which was held at Guru Kashi University. She is selected for All India Inter University which will be held at Patiala.</li>
                </ul>

            </div>
        </div>
    </div>
    </div>
    </div>
</div>
</section>
  )
}

export default ChemicalDeptAchievements