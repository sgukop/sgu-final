"use client";
import React, { useState } from "react";
import { programsList } from "@/data/Data";
import { toast } from "react-toastify";
interface FormProps {
  style: string;
}
const AdmissionForm: React.FC<FormProps> = ({ style }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [programLevel, setProgramLevel] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [program, setProgram] = useState<string>("");

  const availableSchools = programsList.level.find((c) => c.levelName === programLevel);
  //console.log(availableSchools);
  const availabePrograms = availableSchools?.school?.find((s) => s.schoolName === school);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !mobileNumber || !email || !city || !state || !programLevel || !school || !program) {
      toast.error("Please fill out all fields.", { position: "top-right" });
      return;
    }
    try {
      // const res = await fetch("http://localhost:8000/api/enquiry", {
      const res = await fetch("https://manage-api.sguk.ac.in/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          mobileNumber,
          email,
          city,
          state,
          programLevel,
          school,
          program,
          type: "admission",
        }),
      });
      if (!res.ok) {
        throw new Error(`Fetch Error code ${res.status}`);
      }
      toast.success("Thank You for your Enquiry!", { position: "top-right" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setCity("");
      setState("");
      setProgramLevel("");
      setSchool("");
      setProgram("");
    } catch (error) {
      console.log(error);
      toast.error("Network Issue Occured! Please try again later.", { position: "top-right" });
    }
  };
  return (
    <form className={`tl-5-admission-form ${style}`} style={{ marginTop: "60px" }} onSubmit={handleFormSubmit}>
      <h5 className="tl-5-admission-form-title">Admission</h5>
      <div className="row g-14">
        <div className="col-sm-12 col-12">
          <label>First Name:</label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="text"
            name="applicant-first-name"
            id="tl-5-applicant-first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="col-sm-12 col-12">
          <label>Last Name: </label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="text"
            name="applicant-last-name"
            id="tl-5-applicant-last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="col-sm-12 col-12">
          <label>Phone Number: </label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="number"
            name="applicant-student-mobile"
            id="tl-5-applicant-student-mobile"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className="col-sm-12 col-12">
          <label>Email: </label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="email"
            name="applicant-email"
            id="tl-5-applicant-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-sm-12 col-12">
          <label>City of Residence: </label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="text"
            name="applicant-city"
            id="tl-5-applicant-city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="col-sm-12 col-12">
          <label>State: </label>
          <input
            style={{ borderRadius: "5px", marginTop: "8px" }}
            type="text"
            name="applicant-state"
            id="tl-5-applicant-state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="col-sm-12 col-12">
          <label>Program Level: </label>
          <select
            style={{ borderRadius: "5px", marginTop: "8px" }}
            name="applicant-program-level"
            id="tl-5-applicant-program-level"
            value={programLevel}
            onChange={(e) => setProgramLevel(e.target.value)}
            required
          >
            <option className="optioooon-default">Select Program Level</option>
            {programsList.level.map((level1, key) => {
              return (
                <option value={level1.levelName} key={key} className="optioooon">
                  {level1.levelName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-sm-12 col-12">
          <label>School: </label>
          <select
            style={{ borderRadius: "5px", marginTop: "8px" }}
            name="applicant-school"
            id="tl-5-applicant-school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          >
            <option className="optioooon-default">Select Schools</option>
            {availableSchools?.school?.map((e, key) => {
              return (
                <option value={e.schoolName} key={key} className="optioooon">
                  {e.schoolName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-sm-12 col-12">
          <label>Program: </label>
          <select
            style={{ borderRadius: "5px", marginTop: "8px" }}
            name="applicant-program"
            id="tl-5-applicant-program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option className="optioooon-default">Select Program</option>
            {availabePrograms?.program.map((e, key) => {
              return (
                <option value={e.programName} key={key} className="optioooon">
                  {e.programName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-12 mt-35">
          <button type="submit" className="tl-def-btn tl-4-def-btn bg-[#f26122]">
            SUBMIT <i className="fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;
