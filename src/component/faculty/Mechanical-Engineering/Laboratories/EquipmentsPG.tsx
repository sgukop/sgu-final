import React from 'react';
import Table from "react-bootstrap/Table";

const EquipmentsPG = () => {
  return (
    <div className="col-lg-12">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <Table striped responsive className="governing-table">
                  <thead>
                      <tr>
                        <th><p className="text-[#4f70b6]">Name of Equipment</p></th>
                        <th><p className="text-[#4f70b6]">Quantity</p></th>
                        <th><p className="text-[#4f70b6]">Cost in INR</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td><p>Ansys Version 13.0, 32000 Node Limits software</p></td>
                          <td><p>1 (25 Seats)</p></td>
                          <td><p>390000/-</p></td>
                      </tr>
                      <tr>
                          <td><p>Dell optiplex 3020 CORE 3/4th GENE/4GB RAM/ 500GB HDD</p></td>
                          <td><p>18</p></td>
                          <td><p>585900/-</p></td>
                      </tr>
                      <tr>
                          <td><p>Sheet casting & preparation of photo elastic model</p></td>
                          <td><p>1</p></td>
                          <td><p>40838/-</p></td>
                      </tr>
                      <tr>
                          <td><p>12" diffused light research Polari scope with digital load indicator</p></td>
                          <td><p>1</p></td>
                          <td><p>	165797/-</p></td>
                      </tr>
                      <tr>
                          <td><p>M TAB make maxturn + CNC turning lathe with controller</p></td>
                          <td><p>1</p></td>
                          <td><p>	1351734/-</p></td>
                      </tr>
                      <tr>
                          <td><p>Toolling packages for maxturn</p></td>
                          <td><p>1</p></td>
                          <td><p>	44120/-</p></td>
                      </tr>
                      <tr>
                          <td><p>Four channel spectrum (FFT) analyser</p></td>
                          <td><p>1</p></td>
                          <td><p>850000/-</p></td>
                      </tr>
                    
                      <tr>
                          <td><p><strong> TOTAL </strong></p></td>
                          <td></td>
                          <td><p><strong>34,28,389/-</strong></p></td>
                      </tr>
                    </tbody>
                  </Table>
            </div>
        </div>
    </div>
  )
}

export default EquipmentsPG