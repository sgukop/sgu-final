import React from 'react';
import Table from "react-bootstrap/Table";

const JournalStatistics = () => {
  return (
    <div className="accordion" id="accordionExample1">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header text-[#4f70b6]" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-controls="collapseOne"
        >
          Journal Statistics 2024-2025
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
      
      <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Name of School</p></th>
                  <th><p className="text-[#4f70b6]">National</p></th>
                  <th><p className="text-[#4f70b6]">International</p></th>
                  <th><p className="text-[#4f70b6]">Total Journal and Magazine</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>School of Allied Health Science</p></td>
                  <td><p>1</p></td>
                  <td><p>1</p></td>
                  <td><p>2</p></td>
              </tr>
              <tr>
                  <td><p>School of Design</p></td>
                  <td><p>5</p></td>
                  <td><p>2</p></td>
                  <td><p>7</p></td>
              </tr>
              <tr>
                  <td><p>School of Commerce and Management</p></td>
                  <td><p>8</p></td>
                  <td><p>4</p></td>
                  <td><p>12</p></td>
              </tr>
              <tr>
                  <td><p>School of Computer Science and Engineering</p></td>
                  <td><p>6</p></td>
                  <td><p>1</p></td>
                  <td><p>7</p></td>
              </tr>
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>5</p></td>
                  <td><p>6</p></td>
                  <td><p>11</p></td>
              </tr>
              
              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>6</p></td>
                  <td><p>0</p></td>
                  <td><p>6</p></td>
              </tr>

              <tr>
                  <td><p>School of Technology</p></td>
                  <td><p>19</p></td>
                  <td><p>4</p></td>
                  <td><p>23</p></td>
              </tr>

              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                  <td><p>15</p></td>
              </tr>

              <tr>
                  <td><p>Magazine</p></td>
                  <td><p>8</p></td>
                  <td><p>0</p></td>
                  <td><p>8</p></td>
              </tr>

              <tr>
                  <td><p>School of Legal Studies</p></td>
                  <td><p>10</p></td>
                  <td><p>9</p></td>
                  <td><p>19</p></td>
              </tr>
            
              <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>78</strong></p></td>
                  <td><p><strong>32</strong></p></td>
                  <td><p><strong>110</strong></p></td>
              </tr>
          </tbody>
      </Table>

     
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         Journal Statistics 2023-2024
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Name of School</p></th>
                  <th><p className="text-[#4f70b6]">National</p></th>
                  <th><p className="text-[#4f70b6]">International</p></th>
                  <th><p className="text-[#4f70b6]">Total Journal and Magazine</p></th>
              </tr>
          </thead>
          <tbody>
             
              <tr>
                  <td><p>School of Design</p></td>
                  <td><p>5</p></td>
                  <td><p>2</p></td>
                  <td><p>7</p></td>
              </tr>
              <tr>
                  <td><p>School of Commerce and Management</p></td>
                  <td><p>8</p></td>
                  <td><p>4</p></td>
                  <td><p>12</p></td>
              </tr>
              <tr>
                  <td><p>School of Computer Science and Engineering</p></td>
                  <td><p>6</p></td>
                  <td><p>6</p></td>
                  <td><p>12</p></td>
              </tr>
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>5</p></td>
                  <td><p>1</p></td>
                  <td><p>6</p></td>
              </tr>
              
              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>6</p></td>
                  <td><p>0</p></td>
                  <td><p>6</p></td>
              </tr>

              <tr>
                  <td><p>School of Technology</p></td>
                  <td><p>31</p></td>
                  <td><p>9</p></td>
                  <td><p>40</p></td>
              </tr>

              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                  <td><p>15</p></td>
              </tr>

              <tr>
                  <td><p>Magazine</p></td>
                  <td><p>9</p></td>
                  <td><p>0</p></td>
                  <td><p>9</p></td>
              </tr>

            <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>80</strong></p></td>
                  <td><p><strong>27</strong></p></td>
                  <td><p><strong>107</strong></p></td>
              </tr>
          </tbody>
      </Table>

        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
         Journal Statistics 2022-2023
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Name of School</p></th>
                  <th><p className="text-[#4f70b6]">National</p></th>
                  <th><p className="text-[#4f70b6]">International</p></th>
                  <th><p className="text-[#4f70b6]">Total Journal and Magazine</p></th>
              </tr>
          </thead>
          <tbody>
             
              <tr>
                  <td><p>School of Design and Architecture</p></td>
                  <td><p>6</p></td>
                  <td><p>4</p></td>
                  <td><p>10</p></td>
              </tr>
              <tr>
                  <td><p>School of Commerce and Management</p></td>
                  <td><p>6</p></td>
                  <td><p>6</p></td>
                  <td><p>12</p></td>
              </tr>
              <tr>
                  <td><p>School of Computer Science and Engineering</p></td>
                  <td><p>4</p></td>
                  <td><p>3</p></td>
                  <td><p>7</p></td>
              </tr>
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>4</p></td>
                  <td><p>0</p></td>
                  <td><p>4</p></td>
              </tr>
              
              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>4</p></td>
                  <td><p>0</p></td>
                  <td><p>4</p></td>
              </tr>

              <tr>
                  <td><p>School of Technology</p></td>
                  <td><p>32</p></td>
                  <td><p>9</p></td>
                  <td><p>41</p></td>
              </tr>

              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                  <td><p>15</p></td>
              </tr>

              <tr>
                  <td><p>Magazine</p></td>
                  <td><p>13</p></td>
                  <td><p>0</p></td>
                  <td><p>13</p></td>
              </tr>

            <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>79</strong></p></td>
                  <td><p><strong>27</strong></p></td>
                  <td><p><strong>106</strong></p></td>
              </tr>
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
         Journal Statistics 2021-2022
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Name of School</p></th>
                  <th><p className="text-[#4f70b6]">National</p></th>
                  <th><p className="text-[#4f70b6]">International</p></th>
                  <th><p className="text-[#4f70b6]">Total Journal and Magazine</p></th>
              </tr>
          </thead>
          <tbody>
             
              <tr>
                  <td><p>School of Architecture</p></td>
                  <td><p>5</p></td>
                  <td><p>5</p></td>
                  <td><p>10</p></td>
              </tr>
              <tr>
                  <td><p>School of Commerce and Management</p></td>
                  <td><p>6</p></td>
                  <td><p>5</p></td>
                  <td><p>11</p></td>
              </tr>
             
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>5</p></td>
                  <td><p>0</p></td>
                  <td><p>5</p></td>
              </tr>
              
              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>5</p></td>
                  <td><p>0</p></td>
                  <td><p>5</p></td>
              </tr>

              <tr>
                  <td><p>School of Technology(B.Tech & M.Tech)</p></td>
                  <td><p>59</p></td>
                  <td><p>23</p></td>
                  <td><p>82</p></td>
              </tr>

              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>9</p></td>
                  <td><p>6</p></td>
                  <td><p>15</p></td>
              </tr>

              <tr>
                  <td><p>Magazine</p></td>
                  <td><p>4</p></td>
                  <td><p>0</p></td>
                  <td><p>4</p></td>
              </tr>

            <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>93</strong></p></td>
                  <td><p><strong>39</strong></p></td>
                  <td><p><strong>132</strong></p></td>
              </tr>
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
         Journal Statistics 2020-2021
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Name of School</p></th>
                  <th><p className="text-[#4f70b6]">National</p></th>
                  <th><p className="text-[#4f70b6]">International</p></th>
                  <th><p className="text-[#4f70b6]">Total Journal and Magazine</p></th>
              </tr>
          </thead>
          <tbody>
                <tr>
                  <td><p>School of Architecture</p></td>
                  <td><p>6</p></td>
                  <td><p>5</p></td>
                  <td><p>11</p></td>
                </tr>
                <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                  <td><p>15</p></td>
                </tr>

                <tr>
                  <td><p>Magazine</p></td>
                  <td><p>4</p></td>
                  <td><p>0</p></td>
                  <td><p>4</p></td>
                </tr>

                <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>20</strong></p></td>
                  <td><p><strong>10</strong></p></td>
                  <td><p><strong>30</strong></p></td>
              </tr>
          </tbody>
      </Table>
        </div>
      </div>
    </div>
</div>
  )
}

export default JournalStatistics