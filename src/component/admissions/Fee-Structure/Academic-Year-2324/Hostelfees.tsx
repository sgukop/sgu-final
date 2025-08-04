import React from 'react';
import Table from "react-bootstrap/Table";

const Hostelfees = () => {
  return (
    <div className="accordion mt-20" id="accordionExample">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          Hostel Fee
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
      
      <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Hostel Fee in Rs.</p></th>
                 
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>57000</p></td>
                 
              </tr>
              
          </tbody>
      </Table>

     
        </div>
      </div>
    </div>
    
</div>
  )
}

export default Hostelfees