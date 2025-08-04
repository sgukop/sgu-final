"use client"
import React from 'react'
import Link from 'next/link'
import Table from "react-bootstrap/Table";

const ComputerPGProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes Offered Under CSE Department</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/computer-science-engineering/programmes/AI-programmes.png" alt="About Electrial & Electronics Engineering" className="tl-8-about-main-img rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h6 className="tl-8-feature-title mb-4">M.Tech. in Artificial Intelligence & Data Science</h6>
                    <div className="tl-8-feature">
                           <h6 className="tl-8-feature-title mt-4">About the Programme:</h6>
                            <p className="tl-8-feature-descr mt-4">Artificial Intelligence and Data Science is advancement over traditional Computer Science and Engineering that aims to deliver data driven solutions using computational principles, methods and systems for extracting knowledge from data.<br/><br/>

                            M. Tech. in Artificial Intelligence and Data Science program covers concepts in data science and artificial intelligence and applied mathematics with an objective to prepare the students to analyze, design and implement solutions in various problem domains. The curriculum is designed to create strong foundations of data science and AI knowledge and usage of analytical methods and tools to solve challenging real-world problems. <br/><br/>
                            Students will gain thorough knowledge in courses like - Intelligent Systems, Deep Learning, Reinforcement Learning, Text Technologies for Data Science, Data Analytics and Mining, Big Data Management, Data Visualization, Bayesian Data Analysis, Probabilistic Modeling and Reasoning, Cloud Technologies etc.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default ComputerPGProgram