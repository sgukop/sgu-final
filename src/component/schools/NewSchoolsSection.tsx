import React from 'react'
import NewTestimonialSlider from '../NewTestimonialSlider'
import NewSchoolsSlider from './NewSchoolsSlider'

const NewSchoolsSection = () => {
    return (
        <>
            <section className='w-full flex justify-center items-center flex-col sm:pt-16 schools-responsive-section'>
                <h2 className='text-center w-fit py-3 px-6 bg-[#286f83] text-white font-extrabold text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                    Schools
                </h2>
               {/*  <div className='w-full flex flex-wrap justify-center items-center gap-4 mt-10'>
                    <div className='w-[360px] h-full py-14 px-[1px] bg-[#f26122] text-white rounded-tr-[200px]'>
                        <h2 className='text-4xl font-extrabold pt-4 mb-3 tracking-wide px-6 text-white'>
                            UG, PG, Ph.D.
                        </h2>
                        <p className='text-2xl font-medium tracking-wide px-6'>
                            School of Commerce & Management
                        </p>
                        <a
                            href="/commerce-dept-about"
                            target="_self"
                            aria-label="Read more about the School of Commerce and Management"
                            className='py-3 mt-4 pl-3 bg-white text-[#f26122] text-3xl font-bold rounded-r-[100px] w-[90%]'
                        >
                           <span className='text-3xl' style={{color:'#f26122'}}> Read More &gt;&gt;</span>
                        </a>
                    </div>

                    <div className='w-[360px] h-full py-14 px-[1px] bg-[#ed1e81] text-white rounded-tr-[200px]'>
                        <h2 className='text-4xl font-extrabold pt-4 mb-3 tracking-wide px-6 text-white'>UG, PG, Ph.D.</h2>
                        <p className='text-2xl font-medium tracking-wide px-6'>School of Commerce & Management</p>
                        <a href="/commerce-dept-about" target="_self" style={{ color: '#ed1e81' }} className='py-3 mt-4 pl-3 bg-white text-[#ed1e81] tet-3xl font-bold rounded-r-[100px] w-[90%]'> <span className='text-3xl' style={{color:'#ed1e81'}}> Read More &gt;&gt;</span> </a>
                    </div>
                    <div className='w-[360px] h-full py-14 px-[1px] bg-[#47bfaf] text-white rounded-tr-[200px]'>
                        <h2 className='text-4xl font-extrabold pt-4 mb-3 tracking-wide px-6 text-white'>UG, PG, Ph.D.</h2>
                        <p className='text-2xl font-medium tracking-wide px-6'>School of Commerce & Management</p>
                        <a href="/commerce-dept-about" target="_self" style={{ color: '#47bfaf' }} className='py-3 mt-4 pl-3 bg-white text-[#47bfaf] tet-3xl font-bold rounded-r-[100px] w-[90%]'> <span className='text-3xl' style={{color:'#47bfaf'}}> Read More &gt;&gt;</span> </a>
                    </div>
                    <div className='w-[360px] h-full py-14 px-[1px] bg-[#4f70b6] text-white rounded-tr-[200px]'>
                        <h2 className='text-4xl font-extrabold pt-4 mb-3 tracking-wide px-6 text-white'>UG, PG, Ph.D.</h2>
                        <p className='text-2xl font-medium tracking-wide px-6'>School of Commerce & Management</p>
                        <a href="/commerce-dept-about" target="_self" style={{ color: '#4f70b6' }} className='py-3 mt-4 pl-3 bg-white text-[#4f70b6] tet-3xl font-bold rounded-r-[100px] w-[90%]'> <span className='text-3xl' style={{color:'#4f70b6'}}> Read More &gt;&gt;</span> </a>
                    </div>
                </div>  */}
                <NewSchoolsSlider />
            </section>

            <section className="relative w-full h-full">
                {/* Background Image */}
                <div
                    className="inset-0 bg-cover bg-no-repeat h-[800px] transition duration-300 ease-in-out hover:scale-110"
                    style={{ backgroundImage: 'url(/assets/images/home/explore-image/sgu-image.jpg)' }}
                ></div>

                {/* Overlay Text */}
                <div className="absolute top-8 left-0 flex justify-start items-center">
                    <h2 className='text-[20px] sm:text-[32px] lg:text-[42px] 2xl:text-[48px] py-4 font-bold text-white bg-[#5c7cbd] rounded-r-[100px] px-6 sm:px-8 md:px-14 uppercase tracking-wide'>Explore Sanjay <br /> Ghodawat University</h2>
                </div>
            </section>


            {/* Management Section */}

            <section className='w-full flex justify-center items-center flex-col pt-16'>
                <h2 className='text-center w-fit py-3 px-10 bg-[#31469d] text-white font-bold text-[36px] sm:text-[40px] md:text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                    Management
                </h2>
                <div className='w-full flex flex-wrap justify-center items-center gap-4 mt-10 pb-10'>
                  
                    <div className='w-[340px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/management/team1.jpg' />
                        <a href="/president" target="_blank" className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex hover:text-[#ffcb04]'>Mr. Sanjay Ghodawat</a>
                        <p className='text-[#231f20] font-medium text-lg text-center'>President</p>
                        <div className='my-1 flex gap-2 items-center justify-center'>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href='https://www.instagram.com/sanjayghodawat_official?igsh=MXFzbjh1OTkwbWpkdQ=='>
                                    <img src='/assets/images/home/instagram.svg' alt='Instagram' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href='https://www.facebook.com/share/12FuuYHWhau/?mibextid=wwXIfr'>
                                    <img src='/assets/images/home/facebook.svg' alt='facebook' />
                                </a>
                            </div>
                          {/*  <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/linkedin.svg' alt='linkedin' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/twitter.svg' alt='twitter' />
                                </a>
                            </div>  */}
                        </div>
                    </div>
                  
                    <div className='w-[340px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/management/team2.jpg' />
                        <a href="/secretary" target="_blank" className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex hover:text-[#ffcb04]'>Mr. Shrenik Ghodawat</a>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Secretary</p>
                        <div className='my-1 flex gap-2 items-center justify-center'>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/instagram.svg' alt='Instagram' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/facebook.svg' alt='facebook' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href='https://www.linkedin.com/in/shrenik-ghodawat-80023852/'>
                                    <img src='/assets/images/home/linkedin.svg' alt='linkedin' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/twitter.svg' alt='twitter' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-[340px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/management/team3.jpg' />
                        <a href="/trustee" target="_blank" className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex hover:text-[#ffcb04]'>Mr. Vinayak V Bhosale</a>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Trustee</p>
                        <div className='my-1 flex gap-2 items-center justify-center'>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href='https://www.instagram.com/vinayak_bhosale_5?igsh=djFmeGd5dG93cTNo'>
                                    <img src='/assets/images/home/instagram.svg' alt='Instagram' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href='https://www.facebook.com/share/1ERZdD3qfv/?mibextid=wwXIfr'>
                                    <img src='/assets/images/home/facebook.svg' alt='facebook' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/linkedin.svg' alt='linkedin' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/twitter.svg' alt='twitter' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-[340px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/management/team4.jpg' />
                        <a href="/vice-chancellor" target="_blank" className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex hover:text-[#ffcb04]'>Dr. Udhav Bhosale</a>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Vice Chancellor</p>
                        <div className='my-1 flex gap-2 items-center justify-center'>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/instagram.svg' alt='Instagram' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/facebook.svg' alt='facebook' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/linkedin.svg' alt='linkedin' />
                                </a>
                            </div>
                            <div className='rounded-full bg-[#4e94cf] cursor-pointer text-white transition-all duration-500 hover:-translate-y-1'>
                                <a className='text-white w-[28px] h-[28px] flex justify-center items-center' target='_blank' href=''>
                                    <img src='/assets/images/home/twitter.svg' alt='twitter' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex justify-center items-center flex-col pt-20'>
                <h2 className='text-center w-fit py-3 px-10 mx-4 bg-[#ed1e81] text-white font-bold text-[36px] sm:text-[40px] xl:text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                    Trusted by over 40,000+ Students Have To Say
                </h2>

                <div className='pt-10 relative h-full w-full flex flex-col items-center justify-center'>

                    <NewTestimonialSlider />

                    <div className='w-full bg-[#4f70b6] h-[200px] text-white mt-[260px]'> </div>

                    <div className='w-full h-full bg-[#ffd300] pb-10 px-4 sm:px-20 md:px-30'>
                        <div className='recruiters-responsive-section w-full h-full flex flex-col items-center justify-center gap-y-4'>
                            <h2 className='text-center w-fit py-3 px-10 bg-[#4f70b6] text-white font-bold text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                                Our Recruiters
                            </h2>
                            <p className='text-[#221f1f] text-2xl 2xl:text-3xl tracking-wide font-medium text-center w-full line-heighttt 2xl:w-[70%]'>
                                The SGU Training & Placement Cell is committed to providing all possible assistance to its graduates and postgraduates students in their efforts to find employment. The purpose of the Training and Placement is to give the students right knowledge, skill and aptitude and meet the manpower requirements of the Industry. This commitment is demonstrated by the existence Placement record.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewSchoolsSection