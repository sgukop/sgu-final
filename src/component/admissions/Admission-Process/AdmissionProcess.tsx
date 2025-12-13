'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PhdAdmissionProcess from './PhdAdmissionProcess';
import UGAdmissionProcess from './UGAdmissionProcess';

const AdmissionProcess = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row">
          <h2 className="universityobject-heading py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
            Admission Process
          </h2>

          <div className="col-md-12 mt-4">
            {/* Google Form Embed */}
            <div className="w-full h-[900px]">
              <iframe
                src="https://forms.gle/PEycfg7nX5iFXDdNA"
                width="100%"
                height="100%"
               
                className="rounded-lg shadow-md"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
