"use client";

import React, { useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import PhdAdmissionProcess from "./PhdAdmissionProcess";
import UGAdmissionProcess from "./UGAdmissionProcess";

const AdmissionProcess = () => {
  useEffect(() => {
    // Load EE Form Widget script dynamically
    const script = document.createElement("script");
    script.src =
      "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/sanjayghodawatuniversity/ee-form-widget/form-1/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row">
          <h2 className="universityobject-heading py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
            Admission Process
          </h2>

          <div className="col-md-12 mt-4">
            {/* EE Form Widget */}
            <div className="d-lg-flex justify-content-center">
              <div className="col-lg-12 col-12 d-flex justify-content-center">
                <div
                  id="ee-form-1"
                  style={{ maxWidth: "600px", width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
