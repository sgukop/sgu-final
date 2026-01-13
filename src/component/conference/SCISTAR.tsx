"use client";

import React from "react";

const SciStar2026FullPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-14">
      {/* Title */}
      <header className="text-center space-y-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Sci-STAR 2026</h1>
          <p className="text-gray-600">(Inspiring Innovations)</p>
        </div>

        {/* Announcement */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto space-y-2">
          <p className="text-blue-900 font-medium">
            📢 Registrations are now open for <strong>Sci-STAR 2026</strong>! Interested students are requested to fill out the registration form using the link below.
          </p>

          <p className="text-blue-800">
            📞 <strong>For assistance & queries:</strong><br />
            Dr. Prajakta Shete (Coordinator): <strong>8830222561</strong><br />
            Mr. Sangram Salve (Sub‑Coordinator): <strong>7387478287</strong><br />
            Dr. Ajay Nalawade (Sub‑Coordinator): <strong>9518709419</strong><br />
            📧 <strong>Email:</strong> 
            <a href="mailto:scistar2026@sguk.ac.in" className="underline hover:text-blue-600 ml-1">
              scistar2026@sguk.ac.in
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
            <a
              href="https://forms.gle/AAFLVvvNDJxnAL4P9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register for Sci-STAR 2026"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Register Now (Google Form)
            </a>

            <a
              href="https://chat.whatsapp.com/Bb9ZEh7b7Au1MzxRQYuTuF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join WhatsApp group for Sci-STAR 2026"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </header>

      {/* QR Codes Section */}
      <section id="qrcodes">
        <h2 className="text-2xl font-semibold mb-4 text-center">Quick Access via QR Codes</h2>
        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
          {/* Registration QR */}
          <div className="text-center">
            <img
              src="https://manage-api.sguk.ac.in/api/assets/696622702707d1e5bb924255"
              alt="QR Code for Registration"
              className="mx-auto border p-2 rounded-md"
            />
            <p className="mt-2 font-medium">Scan to Register</p>
          </div>

          {/* Payment QR */}
          
        </div>
      </section>

      {/* Basic Event Info */}
      <section id="overview">
        <h2 className="text-2xl font-semibold mb-4">Event Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <tbody>
              <tr><td className="border p-3 font-semibold">Event</td><td className="border p-3">Sci‑STAR 2026</td></tr>
              <tr><td className="border p-3 font-semibold">Tentative Date</td><td className="border p-3">31st January 2026</td></tr>
              <tr><td className="border p-3 font-semibold">Target Students</td><td className="border p-3">11th–12th (Science) & UG (All)</td></tr>
              <tr><td className="border p-3 font-semibold">Theme</td><td className="border p-3">Science And Technology for Sustainable Future</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Events & Coordinators */}
      <section id="events">
        <h2 className="text-2xl font-semibold mb-4">Event‑wise Coordinators</h2>
        <div className="overflow-x-auto">
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
                [3, "Scientific Model Competition", "Ms. Ashwini Chakote"],
                [4, "Scientific Reel Star", "Dr. Sarika Patil"],
                [5, "Scientific Memes", "Ms. Shivani Samarth"],
                [6, "Scientific Short Films", "Mr. Siddhappa Balikar"],
                [7, "Water Rocket Challenge", "Dr. Sulthan S."],
                [8, "Ingredient Hunting", "Dr. Tejaswini Vhaskoti"],
                [9, "Free Health Check‑up Camp", "Mr. Suraj Gabale"],
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
        </div>
      </section>

      {/* Committees */}
      <section id="committees">
        <h2 className="text-2xl font-semibold mb-4">Committees</h2>
        <div className="overflow-x-auto">
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
                <td className="border p-2">Dr. Anand Sawant, Mr. Sangram Salve, Dr. Ajay Nalawade, Ms. Vishakha Deshpande, Mr. Vimalkumar Dige</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">Reception & Registration</td>
                <td className="border p-2">Dr. Ajay Nalawade</td>
                <td className="border p-2">Dr. Sonali Suryawanshi, Dr. Satish Mahadik, Dr. Yuvraj Jagtap, Mr. Sailab Momin, Mrs. Sangita Sankpal, Mr. Birappa Dudhal</td>
              </tr>
              <tr>
                <td className="border p-2">3</td>
                <td className="border p-2">Program Committee</td>
                <td className="border p-2">Dr. Vidyarani Khot</td>
                <td className="border p-2">Dr. Pallavi Bhange, Mr. Dhananjay Kinikar, Mr. Prafull Patil</td>
              </tr>
              <tr>
                <td className="border p-2">4</td>
                <td className="border p-2">Competitions Committee</td>
                <td className="border p-2">Dr. Sunetra Deshmukh</td>
                <td className="border p-2">Dr. Tejaswini Vhaskoti, Mr. Suraj Gabale, Mr. Vimalkumar Dige, Ms. Riya Tari, Ms. Simran Jamadar, Mr. Sourabh Patil, Ms. Mitali Bora, Dr. Sarika Patil, Ms. Ashwini Chakote, Ms. Vishakha Deshpande, Ms. Shivani Samarth, Mrs. Pranoti Patil, Mr. Avadhut Athanikar, Ms. Pooja Swami, Mrs. Manasi Patil, Ms. Priyadarshini Patil</td>
              </tr>
              <tr>
                <td className="border p-2">5</td>
                <td className="border p-2">Food Committee</td>
                <td className="border p-2">Dr. Sambhaji Pawar</td>
                <td className="border p-2">Ms. Nagina Mulla, Mrs. Sampada Patil, Mr. Suraj Patil</td>
              </tr>
              <tr>
                <td className="border p-2">6</td>
                <td className="border p-2">Discipline Committee</td>
                <td className="border p-2">Dr. Jiwan Lavande</td>
                <td className="border p-2">Ms. Sonali Sawant, Ms. Ashweta Kudale, Mr. Avadhut Athanikar, Ms. Gayatri Sawant</td>
              </tr>
              <tr>
                <td className="border p-2">7</td>
                <td className="border p-2">Transportation</td>
                <td className="border p-2">Dr. Subhash Kumbhar</td>
                <td className="border p-2">Mr. Sourabh Bhosale, Mr. Jaypal Lohar, Mrs. Sangita Kumbhar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* General Rules */}
      <section id="rules">
        <h2 className="text-2xl font-semibold mb-4">General Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>One student can participate in only one event.</li>
          <li>Maximum two participants per team.</li>
          
        </ul>
       
      </section>

      {/* Coordinator Details */}
      <section id="coordination">
        <h2 className="text-2xl font-semibold mb-4">Overall Coordination</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Coordinator</th>
                <th className="border p-3">Sub‑Coordinator</th>
                <th className="border p-3">Sub‑Coordinator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Dr. Prajakta Shete</td>
                <td className="border p-3">Mr. Sangram Salve</td>
                <td className="border p-3">Dr. Ajay Nalawade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SciStar2026FullPage;
