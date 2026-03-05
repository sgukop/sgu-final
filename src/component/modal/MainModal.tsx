import "./modal.css";

export const MainModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div className={isOpen ? "modal" : "modal closed-modal"}>
      <div className="modalcontent">
      <div className="close-btn">
          {/*   <button className="btn btn-danger" onClick={onClose}>
            <i className="fa-solid fa-circle-xmark"></i>
            </button>  */}
            
            <a
              role='button'
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              style={{border:"1px solid #fff"}}
              onClick={onClose}
            >
              <span><i className="icofont-brand-nexus"></i></span>
              <span>close</span>
            </a>
          
          </div>
        <div className="modal-background text-center">
         
          <div className="modalheader">
            <img src="assets/images/sguu-logoo.png" width="90px" />
            <h3 style={{ fontWeight: "700" }}>
              Admission Notification 2026-27
            </h3>
          </div>

          <table border={0} style={{ width: "100%" }} className="modalbody">
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <span className="mb-10">
                    <a
                      target="_blank"
                      className="tl-def-btn-2"
                      href="/admission-open"
                    >
                      Registration For Admission 2026-2027{" "}
                      <i className="fa-regular fa-arrow-right"></i>
                    </a>
                  </span>
                </td>
              </tr>

              

              <tr>
                <td style={{ textAlign: "center" }}>
                  <span className="mb-10">
                    <a target="_blank" className="tl-def-btn-2" href="#">
                      Procedure For Admission{" "}
                      <i className="fa-regular fa-arrow-right"></i>
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
