import React from "react";

const PhdProgram = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100">
      <div className="container">
        <div className="row tl-event-details-row g-0">
          <div className="col-lg-12">

            <div className="table-responsive mb-5">
              <table className="table table-bordered table-hover">
                <tbody>

                  {/* ================= IMAGE 01 ================= */}
                  <tr>
                    <td className="text-center">
                      <a
                        href="/assets/images/admission-open/3.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/assets/images/admission-open/3.png"
                          alt="Admission Open 1"
                          className="img-fluid"
                          style={{
                            width: "200%",
                            maxWidth: "1000px",
                            height: "auto",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </td>
                  </tr>

                  {/* ================= IMAGE 02 ================= */}
                  <tr>
                    <td className="text-center">
                      <a
                        href="/assets/images/admission-open/4.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/assets/images/admission-open/4.png"
                          alt="Admission Open 2"
                          className="img-fluid"
                          style={{
                            width: "200%",
                            maxWidth: "1000px",
                            height: "auto",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdProgram;