"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const researchData = [
    // ===== 2025 =====
  {
    year: 2025,
    title: "Advances in Deep Learning and Hybrid Neural Networks For Leakemia Diagnosis : A Review",
    authors: "Mr. Amrish Patil, Mrs. ",
    journal: "International Conference"
  },
  // ===== 2024 =====
  {
    year: 2024,
    title: "The Impact of AI-Powered Personalization on Academic Performance",
    authors: "Mrs. Shweta Shete, Mrs. Priyanka Koshti",
    journal: "IEEE Conference"
  },
  {
    year: 2024,
    title: "Increase the Productivity of Internet Marketing by Using Unsupervised Machine Learning",
    authors: "Kousar Ghalwade, Dr. Mahesh Gaikwad",
    journal: "International Journal of Innovative Research in Science, Engineering and Technology"
  },
  {
    year: 2024,
    title: "Extraction of Popular Product Attributes by Using Unsupervised Machine Learning",
    authors: "Kousar Ghalwade, Dr. Mahesh Gaikwad",
    journal: "International Journal of Innovative Research in Computer and Communication Engineering"
  },
  {
    year: 2024,
    title: "Vision Model Application Using Gemini Pro",
    authors: "Mahesh P. Gaikwad, Amrish A. Patil, Ruturaj D. Patil",
    journal: "International Journal of Engineering Research and Technology"
  },
  {
    year: 2024,
    title: "Strategic Insights and Innovations in Prefabricated Component Obsolescence Mitigation: A Focus on SVM-Based Models",
    authors: "R. B. Dhumale, M. P. Gaikwad, S. S. Nikam, Sandipann P Narote, Mahendra H. Sonawane, P. B. Mane",
    journal: "International Journal of Intelligent Systems and Applications in Engineering"
  },
  {
    year: 2024,
    title: "Comprehensive Review of Population Based Metaheuristic Algorithms & Ontology Integration",
    authors: "Sujata Pardeshi, Suresh Kumar Billakurthi, Sushopti Gawade",
    journal: "IEEE Conference at Vellore, IEEE Xplore"
  },

  // ===== 2023 =====
  {
    year: 2023,
    title: "A Review Paper on Machine Education Methods and Its Applications",
    authors: "Mrs. Shweta G. Shete, Mrs. Radhika M. Mane",
    journal: "National Conference on Emerging Trends in Engineering & Technology"
  },
  {
    year: 2023,
    title: "Feed Forward Neural Network based Brain Tumor Diagnosis in Magnetic Resonance Images",
    authors: "M. P. Gaikwad, R. B. Dhumale, N. R. Dhumale, P. B. Mane, A. M. Umbrajkaar, A. N. Sarwade",
    journal: "International Journal of Electrical and Electronics Research (IJEER)"
  },
  {
    year: 2023,
    title: "Outlier Identification Based on Machine Learning for Medical Equipment",
    authors: "Dr. Harsh Lohiya, Gaikwad Mahesh Parasharam",
    journal: "Journal Mathematical Statistician and Engineering Applications"
  },
  {
    year: 2023,
    title: "A Review Paper on the Use of AI in the Recruitment Process",
    authors: "Mrs. Shweta Shete, Mrs. Priyanka Koshti",
    journal: "IJARCCE"
  },
  {
    year: 2023,
    title: "Ontology as an Open World Assumptions and Its Futuristic",
    authors: "Sujata Pardeshi, Suresh Kumar Billakurthi, Sushopti Gawade",
    journal: "12th International Conference on Advanced Computing (ICoAC), IEEE Xplore"
  },

  // ===== 2022 =====
  {
    year: 2022,
    title: "Student Learning Time Analysis during COVID-19 using Linear Programming - Simplex Method",
    authors: "Sujata Pardeshi, Sushopti Gawade, Palivela Hemant",
    journal: "Social Sciences & Humanities Open, Elsevier"
  },
  {
    year: 2022,
    title: "Feed Forward Neural Network based Brain Tumor Diagnosis in Magnetic Resonance Images",
    authors: "M. P. Gaikwad, R. B. Dhumale, N. R. Dhumale, P. B. Mane, A. M. Umbrajkaar, A. N. Sarwade",
    journal: "International Journal of Electrical and Electronics Research (IJEER)"
  },
  {
    year: 2022,
    title: "Outlier Identification Based on Machine Learning for Medical Equipment",
    authors: "Dr. Harsh Lohiya, Gaikwad Mahesh Parasharam",
    journal: "Journal Mathematical Statistician and Engineering Applications"
  },
  {
    year: 2022,
    title: "Student Learning Time Analysis during COVID-19 Using Linear Programming",
    authors: "Sujata Pardeshi, Sushopti Gawade, Palivela Hemant",
    journal: "Journal of Scientific Research, Banaras Hindu University"
  },

  // ===== 2021 =====
  {
    year: 2021,
    title: "An Evaluation of Outlier Detection Using Machine Learning in Medicine",
    authors: "Dr. Harsh Lohiya, Gaikwad Mahesh Parasharam",
    journal: "Journal Mathematical Statistician and Engineering Applications"
  },
  {
    year: 2021,
    title: "Tumor Diagnosis using Gray Level Co-occurrence Matrix and Artificial Neural Network",
    authors: "M. P. Gaikwad, R. B. Dhumale",
    journal: "International Journal of Advanced Science and Technology"
  },
  {
    year: 2021,
    title: "The Digital Eye Android Application for Assisting Visually Impaired",
    authors: "Manasi Powar, Shivani Patil, Shwetali Nikam, Komal Kurundwade, Sujata Pardeshi",
    journal: "International Research Journal of Engineering and Technology (IRJET)"
  },
  {
    year: 2021,
    title: "Use Of Artificial Intelligence in Education",
    authors: "Shweta G. Shete, Asavari A. Patil, Varsha K. Kasote, Vinayak I. Pujari",
    journal: "SEYBOLD"
  },
  {
    year: 2021,
    title: "Artificial Intelligence: Development, Issues and Applications",
    authors: "Shweta Girish Shete, Rupali Babaso Dhansare, Priyanka Vijay Patil",
    journal: "Journal of Northeastern University"
  },

  // ===== 2020 =====
  {
    year: 2020,
    title: "An Empirical Research on the Use of Machine Learning Algorithm for Medical Image Classification",
    authors: "Gaikwad Mahesh Parasharam, Dr. Harsh Lohiya",
    journal: "Journal of Critical Reviews"
  },
  {
    year: 2020,
    title: "A Survey Paper on Smart Vehicles",
    authors: "Sahil Inamdar, Ajit Shete, Akshay Ghatage, Jaydeep Gholap, Ashitosh Atnurkar, Sujata Pardeshi",
    journal: "Journal of Internet of Things and Information Technology"
  },
  {
    year: 2020,
    title: "Smart Vehicles",
    authors: "Ajit Shete, Akshay Ghatage, Sahil Inamdar, Ashitosh Atnurkar, Jaydeep Gholap, Sujata Pardeshi",
    journal: "Journal of Research in Engineering, Science and Management"
  },
  {
    year: 2020,
    title: "Digital Bus Pass Generation System Using Android Application",
    authors: "Ms. S. A. Pardeshi, Suraj Dinde, Akash Gaikwad, Aditi Kole, Supriya Patil, Sadaf Mujawar",
    journal: "Journal of Applied Science and Computations"
  },

  // ===== 2019 =====
  {
    year: 2019,
    title: "Survey on Different Data Mining Techniques for Prediction",
    authors: "Pooja Akulwar, Sujata Pardeshi, Arvind Kamble",
    journal: "2nd International Conference on I-SMAC, IEEE Xplore"
  }
];

// 🔽 Sort descending by year
const sortedResearchData = [...researchData].sort(
  (a, b) => b.year - a.year
);

const AIandMLDeptResearch = () => {
  return (
    <section className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">
          Research & Publications
        </h2>

        <div className="row">
          <MenuList
            dept="Artificial Intelligence and Machine Learning"
            subMenu={NavLinks}
          />

          <div className="col-lg-9 col-md-6 col-sm-12 dept-content">
            <Table bordered responsive className="governing-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Year</th>
                  <th>Title of Paper</th>
                  <th>Authors</th>
                  <th>Journal / Conference</th>
                </tr>
              </thead>

              <tbody>
                {sortedResearchData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.year}</td>
                    <td>{item.title}</td>
                    <td>{item.authors}</td>
                    <td>{item.journal}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIandMLDeptResearch;
