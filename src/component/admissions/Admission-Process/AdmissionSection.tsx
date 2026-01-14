"use client";

import React, { useEffect } from "react";

interface Props {
  style: string;
}

const AdmissionSection: React.FC<Props> = ({ style }) => {

  useEffect(() => {
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
    <section className={`pt-50 mb-60 ${style}`}>
      <div className="container">
        <div className="tl-4-innovs-heading">
          <h2 className="tl-9-section-title mb-50">
            Online Admission Enquiry
          </h2>

          <p
            className="tl-4-innovs-heading-txt"
            style={{
              marginTop: "20px",
              paddingTop: "20px",
              fontSize: "18px",
              color: "black",
            }}
          >
            Dear Applicants, <br /><br />
            Kindly fill up the information in below registration form & submit.
            You will receive login credentials with username & password on your
            registered mail id.
            <br /><br />
            For any queries contact us – 7028811190, 7028811192.
            <br /><br />
            Kindly refer below steps for completion of application form:
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "black",
              marginBottom: "30px",
              lineHeight: "30px",
            }}
          >
            Online Registration → Login with username & password → Fill up
            personal details → Fill up academic details → Payment Process →
            Submit
          </p>

          <strong>Registration Open 2025–26</strong>
        </div>

        <div className="d-lg-flex justify-content-center">
          <div className="col-lg-12 col-12 d-flex justify-content-center">
            <div
              id="ee-form-1"
              style={{ maxWidth: "600px", width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
