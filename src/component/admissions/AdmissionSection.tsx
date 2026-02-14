import React from 'react'
import AdmissionForm from '../form/AdmissionForm';

interface Props {
    style: string;
}

const AdmissionSection: React.FC<Props> = ({ style }) => {
  return (
    <section className={`pt-50 mb-60 ${style}`}>
      <div className="container">
        <div className="tl-4-innovs-heading">
          <h2 className="tl-9-section-title mb-50">Online Admission Enquiry</h2>

          <p
            className="tl-4-innovs-heading-txt"
            style={{ marginTop: '20px', paddingTop: '20px', fontSize: '18px', color: "black" }}
          >
            Dear Applicants, <br /><br />
            Kindly fill up the information in below registration form & submit.
            You will receive login credentials with username & password on your registered mail id.
            For any queries contact us - 7028811190 , 7028811192.
            <br /><br />
            Kindly refer below steps for completion of application form:
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "black",
              marginBottom: "30px",
              lineHeight: "30px"
            }}
          >
            Online Registration → Login with username & password → Fill up personal details →
            Fill up academic details → Payment Process → Submit
          </p>

          <h4 style={{ marginBottom: "20px" }}>Registration Open 2026-27</h4>

          {/* ✅ Added Register Button */}
          <div style={{ marginTop: "20px" }}>
            <a
              href="https://sanjayghodawat.edmission.app/register"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                backgroundColor: "#007bff",
                color: "#fff",
                fontSize: "18px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              Register Now
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AdmissionSection;
