import React from "react";
import Link from 'next/link'

const CourseSection2 = () => {
  return (
    <section className="tl-10-course pt-60 pb-60">
      <div className="container">
      <div className="tl-2-section-heading d-flex justify-content-center">
                    <h2 className="tl-2-section-title">Academic Excellence and Industry Integration</h2>
                </div>
        <div className="tl-10-course-row" style={{alignItems:'center'}}>
      
          <div className="tl-10-single-course" style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
            {/* <h3 className="tl-10-single-course-title paddding-bottttom" >Collaborations</h3> */}
            <h3 className="tl-10-single-course-title " ><Link href="/collaborations" target="_self">Collaborations</Link></h3>
            <p className="tl-10-single-course-descr" style={{marginBottom:'0px'}}>
            SGU has collaborations with Foreign Universities, Industries .....
            </p>
          </div>

          <div className="tl-10-single-course active tl-10-single-course-2" style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
            {/* <h3 className="tl-10-single-course-title">Credit Based Evaluation (CBE) System</h3> */}
            <h3 className="tl-10-single-course-title"><Link href="/credit-system" target="_self">Credit Based Evaluation (CBE) System</Link></h3>
            <p className="tl-10-single-course-descr" style={{marginBottom:'0px'}}>
            Student have the flexibility to pursue.
            </p>
          </div>

          <div className="tl-10-single-course tl-10-single-course-3" style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
            {/* <h3 className="tl-10-single-course-title" style={{marginBottom:'60px'}}>Job Oriented Programmes</h3> */}
            <h3 className="tl-10-single-course-title"><Link href="/job-programmes" target="_self">Job Oriented Programmes</Link></h3>
            <p className="tl-10-single-course-descr" style={{marginBottom:'0px'}}>
            Industry Oriented Programmes for job opportunities.
            </p>
          </div>
          <div className="tl-10-single-course" style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
            {/* <h3 className="tl-10-single-course-title">Outcome Based Education (OBE) System</h3> */}
            <h3 className="tl-10-single-course-title"><Link href="/outcome-system" target="_self">Outcome Based Education (OBE) System</Link></h3>
            <p className="tl-10-single-course-descr" style={{marginBottom:'0px'}}>
            Best Practices in Teaching - Learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;
