"use client";

import React from "react";

const SciStar2026FullPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-14">
      {/* Title */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Sci-STAR 2026</h1>
        <p className="text-gray-600">Science – Students Talent And Research</p>
      </header>

      {/* Event Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Event Overview</h2>
        <table className="w-full border">
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Event</td>
              <td className="border p-3">Sci-STAR 2026</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Tentative Date</td>
              <td className="border p-3">31st January 2026</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Target Students</td>
              <td className="border p-3">9th–12th (Science) & UG (Science)</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Theme</td>
              <td className="border p-3">Sustainable Development</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Event-wise Coordinators */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Event-wise Coordinators</h2>
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Sr. No.</th>
              <th className="border p-2">Event</th>
              <th className="border p-2">Coordinator</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Quiz Competition (Science)", "Mr. Vimalkumar Dige"],
              [2, "Poster Presentation", "Dr. Sunetra Deshmukh"],
              [3, "Model / Project", "Ms. Ashwini Chakote"],
              [4, "Scientific Reel Star", "Dr. Sarika Patil"],
              [5, "Scientific Memes", "Ms. Shivani Samarth"],
              [6, "Scientific Short Films", "Mr. Siddhappa Balikar"],
              [7, "Water Rocket Challenge", "Dr. Sulthan S."],
              [8, "Free Health Check-up Camp", "Mr. Suraj Gabale"],
              [9, "Ingredient Hunting", "Dr. Tejaswini Vhaskoti"],
              [10, "Food Stall (Testing new food products)", "Ms. Vishakha Deshpande"],
              [11, "Campus & Department Visit", "Mr. Abhijeet Latkar"],
            ].map((e) => (
              <tr key={e[0]}>
                <td className="border p-2">{e[0]}</td>
                <td className="border p-2">{e[1]}</td>
                <td className="border p-2">{e[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Committees */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tentative Committees</h2>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Sr. No.</th>
              <th className="border p-2">Committee</th>
              <th className="border p-2">Chairperson</th>
              <th className="border p-2">Coordinating Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Promotion & Marketing</td>
              <td className="border p-2">Dr. Prajakta Shete</td>
              <td className="border p-2">
                Dr. Anand Sawant, Mr. Sangram Salve, Dr. Ajay Nalawade,
                Ms. Vishakha Deshpande, Mr. Vimalkumar Dige
              </td>
            </tr>
            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">Reception & Registration</td>
              <td className="border p-2">Dr. Ajay Nalawade</td>
              <td className="border p-2">
                Dr. Sonali Suryawanshi, Dr. Satish Mahadik, Dr. Yuvraj Jagtap,
                Mr. Sailab Momin, Mrs. Sangita Sankpal, Mr. Birappa Dudhal
              </td>
            </tr>
            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">Program Committee</td>
              <td className="border p-2">Dr. Vidyarani Khot</td>
              <td className="border p-2">
                Dr. Pallavi Bhange, Mr. Dhananjay Kinikar, Mr. Prafull Patil
              </td>
            </tr>
            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2">Competitions Committee</td>
              <td className="border p-2">Dr. Sunetra Deshmukh</td>
              <td className="border p-2">
                Dr. Tejaswini Vhaskoti, Mr. Suraj Gabale, Mr. Vimalkumar Dige,
                Ms. Riya Tari, Ms. Simran Jamadar, Mr. Sourabh Patil,
                Ms. Mitali Bora, Dr. Sarika Patil, Ms. Ashwini Chakote,
                Ms. Vishakha Deshpande, Ms. Shivani Samarth,
                Mrs. Pranoti Patil, Mr. Avadhut Athanikar,
                Ms. Pooja Swami, Mrs. Manasi Patil, Ms. Priyadarshini Patil
              </td>
            </tr>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">Food Committee</td>
              <td className="border p-2">Dr. Sambhaji Pawar</td>
              <td className="border p-2">
                Ms. Nagina Mulla, Mrs. Sampada Patil, Mr. Suraj Patil
              </td>
            </tr>
            <tr>
              <td className="border p-2">6</td>
              <td className="border p-2">Discipline Committee</td>
              <td className="border p-2">Dr. Jiwan Lavande</td>
              <td className="border p-2">
                Ms. Sonali Sawant, Ms. Ashweta Kudale,
                Mr. Avadhut Athanikar, Ms. Gayatri Sawant
              </td>
            </tr>
            <tr>
              <td className="border p-2">7</td>
              <td className="border p-2">Transportation</td>
              <td className="border p-2">Dr. Subhash Kumbhar</td>
              <td className="border p-2">
                Mr. Sourabh Bhosale, Mr. Jaypal Lohar, Mrs. Sangita Kumbhar
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* General Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">General Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>One student can participate in only one event.</li>
          <li>Maximum two participants per team.</li>
          <li>Event coordinators must prepare rules and evaluator lists in advance.</li>
          <li>Winners list must be submitted to the program committee on time.</li>
          <li>Participant data, attendance and evaluation documents are mandatory.</li>
          <li>Regular committee meetings and reporting to Sci-STAR 2026 coordinator is required.</li>
        </ul>
        
      </section>

      {/* Overall Coordination with Mobile Numbers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Overall Coordination</h2>
        <table className="w-full border text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">Role</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Mobile No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Coordinator</td>
              <td className="border p-3">Dr. Prajakta Shete</td>
              <td className="border p-3">8830222561</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Sub-Coordinator</td>
              <td className="border p-3">Mr. Sangram Salve</td>
              <td className="border p-3">7387478287</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Sub-Coordinator</td>
              <td className="border p-3">Dr. Ajay Nalawade</td>
              <td className="border p-3">9518709419</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SciStar2026FullPage;
