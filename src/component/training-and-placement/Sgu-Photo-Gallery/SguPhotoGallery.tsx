import React from 'react'

const SguPhotoGallery = () => {
    const photogallerydata = [
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to AGIO Pharma.jpg",
            title : "SGU team visit to AGIO Pharma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Emcure Pharma.jpg",
            title : "SGU team visit to Emcure Pharma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Haffkine Research Institute.jpg",
            title : "SGU team visit to Haffkine Research Institute"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Hindustan Antibiotics.jpg",
            title : "SGU team visit to Hindustan Antibiotics"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Korpan Pharma.jpg",
            title : "SGU team visit to Korpan Pharma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Piramal Pharma Solution.jpg",
            title : "SGU team visit to Piramal Pharma Solution"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Privi Chemicals.jpg",
            title : "SGU team visit to Privi Chemicals"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to Serum Institute.jpg",
            title : "SGU team visit to Serum Institute"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to various companies in Pune-1.jpg",
            title : "SGU team visit to various companies in Pune-1"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team visit to various companies in Pune-2.jpg",
            title : "SGU team visit to various companies in Pune-2"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Lupin.jpeg",
            title : "SGU Team visit to Lupin"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Marksons Pharma.jpeg",
            title : "SGU Team visit to Marksons Pharma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Sanofi.jpeg",
            title : "SGU Team visit to Sanofi"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Sigma.jpeg",
            title : "SGU Team visit to Sigma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Sunpharma.jpeg",
            title : "SGU Team visit to Sunpharma"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Tool X System.jpeg",
            title : "SGU Team visit to Tool X System"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Unichem.jpeg",
            title : "SGU Team visit to Unichem"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Vergo Chemicals.jpeg",
            title : "SGU Team visit to Vergo Chemicals"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Sparkline Equipments Private Limited, Pune Ms.Yojana Kanhe Manager HR.jpg",
            title : "Sparkline Equipments Private Limited, Pune Ms.Yojana Kanhe Manager HR"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Mr. Ketan Kadpatil, Manager, Truth Automation.jpg",
            title : "Mr. Ketan Kadpatil, Manager, Truth Automation"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Dr.Sanjiv Shinde, Jsons Laboratories.jpg",
            title : "SGU team with Dr.Sanjiv Shinde, Jsons Laboratories"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Mr.Pramod Pise, Senior Manager , Machine Shop,  Wilo Mathar Platt,Pune.jpg",
            title : "SGU team with Mr.Pramod Pise, Senior Manager , Machine Shop, Wilo Mathar Platt,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Mr.Ashutosh Chaturvedi, Senior HR Manager, LOreal India Pvt Ltd.jpg",
            title : "SGU team with Mr.Ashutosh Chaturvedi, Senior HR Manager, LOreal India Pvt Ltd"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Mr Sushant Pune, Head R n D ,  Mr Chidambar Kulkarni, Head Electrical Engg.jpg",
            title : "SGU team with Mr Sushant Pune, Head R n D , Mr Chidambar Kulkarni, Head Electrical Engg"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with Mr.Raj Ayyar, HR Manager.jpg",
            title : "SGU Team with Mr.Raj Ayyar, HR Manager"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Callidus Research Laboratories, MoU signed for collaboration student internship,training and placement.jpg",
            title : "Callidus Research Laboratories, MoU signed for collaboration student internship,training and placement"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Mr.Netaji Patil ,Director ASK Industries.jpg",
            title : "SGU team with Mr.Netaji Patil ,Director ASK Industries"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Our placed students and interns of School of Science at Callidus Research Laboratories.jpg",
            title : "Our placed students and interns of School of Science at Callidus Research Laboratories"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Dr.Vasudha Keskar, MD Maarc Lab.jpg",
            title : "SGU team with Dr.Vasudha Keskar, MD Maarc Lab"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with Mr.Jayant Deshpande, Plant- Head, Will Mathar Platt,Pune.jpg",
            title : "SGU team with Mr.Jayant Deshpande, Plant- Head, Will Mathar Platt,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Doordarshan DD Kokan, Goa.jpg",
            title : "SGU Team visit to Doordarshan DD Kokan, Goa"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to Doordarshan DD Kokan, Goa.jpg",
            title : "SGU Team visit to Doordarshan DD Kokan, Goa"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to ABP Maza.jpg",
            title : "SGU Team visit to ABP Maza"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit to ABP Maza.jpg",
            title : "SGU Team visit to ABP Maza"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Anka Publisher, Pvt, Ltd.Goa.jpg",
            title : "Anka Publisher, Pvt, Ltd.Goa"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU TEAM WITH SELECTED STUDENTS PHOTO.jpg",
            title : "SGU TEAM WITH SELECTED STUDENTS PHOTO"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU TEAM WITH TCS SELECTED STUDENTS.jpg",
            title : "SGU TEAM WITH TCS SELECTED STUDENTS"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU TEAM WITH WIPRO SELECTED STUDENTS.jpg",
            title : "SGU TEAM WITH WIPRO SELECTED STUDENTS"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/JW HR team with campus drive shortlisted students.jpg",
            title : "JW HR team with campus drive shortlisted students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with CAPGEMINI selected students.jpg",
            title : "SGU team with CAPGEMINI selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with CENTELON selected students.jpg",
            title : "SGU team with CENTELON selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU team with PERSISTENTselected students .jpg",
            title : "SGU team with PERSISTENT selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Centelon team along with the selected students through campus drive.jpg",
            title : "Centelon team along with the selected students through campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pre-Placement talk by Centelon company.jpg",
            title : "Pre-Placement talk by Centelon company"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pre-Placement talk by Centelon company.jpg",
            title : "Pre-Placement talk by Centelon company"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team along with Centelon officials during the campus drive.jpg",
            title : "SGU Team along with Centelon officials during the campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team visit in Skoda Plant, Pune.jpg",
            title : "SGU Team visit in Skoda Plant, Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with CEO and MD, Doshaheen Soluions,Pune.jpg",
            title : "SGU Team with CEO & MD, Doshaheen Soluions,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with CEO of Uptricks Services Pvt Ltd.,Pune.jpg",
            title : "SGU Team with CEO of Uptricks Services Pvt Ltd.,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with CEO,Centalon Pune.jpg",
            title : "SGU Team with CEO,Centalon Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with Doshaheen Solutions, Pune.jpg",
            title : "SGU Team with Doshaheen Solutions, Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with HR Manager Wipro-PARI.jpg",
            title : "SGU Team with HR Manager Wipro-PARI"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with Project Manager Skoda India, Pune.jpg",
            title : "SGU Team with Project Manager Skoda India, Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with Project Manager,Faith Automation,Pune.jpg",
            title : "SGU Team with Project Manager,Faith Automation,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team With Projrct Manager, Taural India,Pune .jpg",
            title : "Doshaheen Solutions Pvt Ltd. team with Selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SGU Team with ROSS Process Equipment,Pune.jpg",
            title : "SGU Team with ROSS Process Equipment,Pune"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Doshaheen Solutions Pvt Ltd. team with Selected students.jpg",
            title : "Doshaheen Solutions Pvt Ltd. team with Selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pre-Placement talk by Doshaheen Solutions Pvt Ltd.jpg",
            title : "Pre-Placement talk by Doshaheen Solutions Pvt Ltd"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Offer letter distribution by Doshaheen Solutions Pvt Ltd. officials .jpg",
            title : "Offer letter distribution by Doshaheen Solutions Pvt Ltd. officials"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Selected students in Doshaheen Solutions Pvt Ltd.jpg",
            title : "Selected students in Doshaheen Solutions Pvt Ltd"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Bosch -CSR India Head Mr.Goyal.jpg",
            title : "Bosch -CSR India Head Mr.Goyal"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/CEO and Project Manager- BAIL.jpg",
            title : "CEO and Project Manager- BAIL"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Dr.Tengli EX.HAL MD, at Nitte Minakshi Institute.jpg",
            title : "Dr.Tengli EX.HAL MD, at Nitte Minakshi Institute"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/HR- TAAL, Hosur.jpg",
            title : "HR- TAAL, Hosur"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/HR- VP India for Cypress Semiconductors, USA.jpg",
            title : "HR- VP India for Cypress Semiconductors, USA."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Intern at Boltzmann.jpg",
            title : "Intern at Boltzmann."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Intern at Techno-Thinks up.jpg",
            title : "Intern at Techno-Thinks up"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Interns at Aerotics Tech.jpg",
            title : "Interns at Aerotics Tech"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Interns at Deccan Avaition.jpg",
            title : "Interns at Deccan Avaition"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Interns at Star-Air Banglore.jpg",
            title : "Interns at Star-Air Banglore"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Interns at TAAL.jpg",
            title : "Interns at TAAL"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Meet with Vergeo Edutech.jpg",
            title : "Meet with Vergeo Edutech"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/MoU with Aerotics Tech.jpg",
            title : "MoU with Aerotics Tech"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/mou_agni.jpg",
            title : "MoU with Agni Aviation."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Project manager-TAAL.jpg",
            title : "Project manager-TAAL"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/all.jpg",
            title : "SGU team with Tech Mahindra, Wipro, SLK ( Kirloskar Group Company), IDFC bank, Black and White Fin Solutions selected students."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/BnW.jpg",
            title : "Felicitation of Mr. Manikandan ( CEO BLACK & WHITE FIN SOLUTIONS LLP). The company have visited SGU to recruit Management students."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/tcsstud.jpg",
            title : "SGU Team with TCS Selected students."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/capgeministud.jpg",
            title : "SGU Team with Capgemini Selected students."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/capgeminiteam.jpg",
            title : "Capgemini company Technical and HR team visited SGU."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/navi4.jpg",
            title : "Indian Navy pool campus drive  (University Entry Scheme-20)."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/navi1.jpg",
            title : "Indian Navy pool campus drive  (University Entry Scheme-20)."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/navi2.jpg",
            title : "Indian Navy pool campus drive  (University Entry Scheme-20)."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/navi3.jpg",
            title : "Indian Navy pool campus drive  (University Entry Scheme-20)."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pp1.jpg",
            title : "Parivartana Program ( A CSR Activity by Gallagher Service Center) started for our SGU BBA and Bcom-3 students. Mr. Ajay Bhalerao (Center Manager- Kolhapur Gallagher) and Mr. D. Shankar (Trainer) conducted the program."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pp2.jpg",
            title : "Parivartana Program ( A CSR Activity by Gallagher Service Center) started for our SGU BBA and Bcom-3 students. Mr. Ajay Bhalerao (Center Manager- Kolhapur Gallagher) and Mr. D. Shankar (Trainer) conducted the program."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pp3.jpg",
            title : "Parivartana Program ( A CSR Activity by Gallagher Service Center) started for our SGU BBA and Bcom-3 students. Mr. Ajay Bhalerao (Center Manager- Kolhapur Gallagher) and Mr. D. Shankar (Trainer) conducted the program."
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/wipro-visit.jpg",
            title : "Mr.Amit R.Sarkar (Head T& P-SGU) with Lavanam Amballa- National Head - Campus Hiring Wipro"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Sci-Edge-Abstract-1.jpg",
            title : "Sci Edge Abstract campus drive for MSc Organic chemistry students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Sci-Edge-Abstract-2.jpg",
            title : "Sci Edge Abstract campus drive for MSc Organic chemistry students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/ICICI2019.jpg",
            title : "SGU team with ICICI Bank selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari2019-1.jpg",
            title : "2019 PARI Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari2019-2.jpg",
            title : "2019 PARI Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari2019-3.jpg",
            title : "2019 PARI Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Jaro-Felicitation.jpg",
            title : "Felicitation of Jaro Education official"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Jaro-Edu.jpg",
            title : "SGU team with JARO Education selected students - Package 12 Lakh"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Dhoot-Trans.jpg",
            title : "SGU team with Dhoot Transmission company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Eallora.jpg",
            title : "SGU team with Eallora company Pvt Ltd selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/ICICI- Prudential.jpg",
            title : "SGU team with ICICI- Prudential company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/byju.jpg",
            title : "SGU team with Byjus company selected students. Package : 10 LPA"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Futurism.jpg",
            title : "SGU team with Futurism Technology selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/PARI_MoU.jpg",
            title : "Signed MoU between SGU and PARI company"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Amazonpool1.jpg",
            title : "Amazon Pool campus drive 2019"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Amazonpool2.jpg",
            title : "Amazon Pool campus drive 2019"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Amazon.jpg",
            title : "SGU team with Amazon selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Mahindra.jpg",
            title : "The Mahindra - Truck divisions internship drive for  MBA-1 SGU students. Mr. Sagar Ganoo Sir is briefing the recruitment process"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Unikaihatsu-1.jpg",
            title : "SGU team with Unikaihatsu company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Unikaihatsu-2.jpg",
            title : "SGU team with Unikaihatsu company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Futurism-Technology-1.jpg",
            title : "SGU team with Futurism Technology officials during campus recruitment drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Futurism-Technology-2.jpg",
            title : "SGU team with Futurism Technology officials during campus recruitment drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Futurism-Technology-3.jpg",
            title : "SGU team with Futurism Technology officials during campus recruitment drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/BYJUS-1.jpg",
            title : "SGU team, other college TPO's with BYJUS company officials"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/BYJUS-2.jpg",
            title : "SGU team, other college TPO's with BYJUS company officials"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/BYJUS-3.jpg",
            title : "Pre-Placement talk of BYJUS company for shortlisted students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Wipro-2019.jpg",
            title : "SGU team with Wipro company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Karvi1-2019.jpg",
            title : "Karvi Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Karvi2-2019.jpg",
            title : "Karvi Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Karvi3-2019.jpg",
            title : "Karvi Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Webtech1-2019.jpg",
            title : "Webtech Developer Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Webtech2-2019.jpg",
            title : "Webtech Developer Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Webtech3-2019.jpg",
            title : "Webtech Developer Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Webtech3-2019.jpg",
            title : "Webtech Developer Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Jsons-Lab-1.jpg",
            title : ""
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Jsons-Lab-2.jpg",
            title : "Felicitation of Mr. Sanjiv Shinde Sir (CEO Jsons Laboratories)"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Jsons-Lab-3.jpg",
            title : "SGU Team with Mr. Sanjiv Shinde Sir (CEO Jsons Laboratories)"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Mphasis-Campus1.1-2018.jpg",
            title : "Mphasis and L&T Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/LTI-Campus2-2018.jpg",
            title : "L&T Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/LTI-Campus3-2018.jpg",
            title : "L&T Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/LTI-Campus4-2018.jpg",
            title : "SGU team with Larsen & Toubro Infotech company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Mphasis-Campus2-2018.jpg",
            title : "Mphasis Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Mphasis-Campus3-2018.jpg",
            title : "Mphasis Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Navi-Campus1-2018.jpg",
            title : "Indian Navy Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Navi-Campus3.1-2018.jpg",
            title : "Indian Navy Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Navi-Campus2.1-2018.jpg",
            title : "Indian Navy Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Wipro-Campus1-2018.jpg",
            title : "Wipro Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Wipro-Campus2-2018.jpg",
            title : "Wipro Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Wipro-Campus3-2018.jpg",
            title : "Wipro Pool Campus Drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/GlobalEdge-Stude.jpg",
            title : "SGU team with Global edge campus selected student"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/TataTech-Stud.png",
            title : "SGU team with Tata Technology company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/TCS-Stud.jpg",
            title : "SGU team with TCS company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/SLK-Ripple Advisory-Stud.jpg",
            title : "SGU team with SLK, Bangalore and Ripple Advisory company selected students"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari-GO1.jpg",
            title : "Mr.Govind Oza (MD PARI) visit to SGU"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari-GO2.jpg",
            title : "Mr.Govind Oza (MD PARI) visit to SGU"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/Pari-GO3.jpg",
            title : "Mr.Govind Oza (MD PARI) visit to SGU"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/IN1.jpg",
            title : "Indian Navy Pre-Placement Talk"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/IN2.jpg",
            title : "Indian Navy Pre-Placement Talk"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/IN3.jpg",
            title : "Indian Navy Pre-Placement Talk"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/TCS1.jpg",
            title : "TCS Officials visit to SGI"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/TCS2.jpg",
            title : "TCS Officials visit to SGI"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/TCS3.jpg",
            title : "TCS Officials visit to SGI"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pari3.jpg",
            title : "PARI campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pari4.jpg",
            title : "PARI campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/pari5.jpg",
            title : "PARI campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/CooperCorp2.jpg",
            title : "Cooper Corporation campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/CooperCorp3.jpg",
            title : "Cooper Corporation campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/GlobalEdge.jpg",
            title : "Global Edge selected students along with SGI Team"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/IIFL1.jpg",
            title : "IIFL campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/IIFL2.jpg",
            title : "IIFL campus drive"
        },
        {
            imgSrc: "assets/images/training-and-placement/photo-gallery/CAPGEMINI2.jpg",
            title : "Capgemini campus Drive"
        },
     ];
    
  return (
   <section className="tl-9-blogs pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery</h2>
            <div className="row g-3 g-lg-4 justify-content-center">
            {photogallerydata.map((galleryitems, index) => (
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
                    <div className="tl-9-photo-gallery"> 
                        <div className="tl-9-event-img">
                            <figure><img src={galleryitems.imgSrc} alt="SGU Photo Gallery Image"/></figure>
                            <h3 className="tl-6-latest-article-title mt-2">{galleryitems.title}</h3>
                        </div>
                    </div>
                  </div>
                ))}
            </div>   
        </div>
    </section>
    )
}

export default SguPhotoGallery