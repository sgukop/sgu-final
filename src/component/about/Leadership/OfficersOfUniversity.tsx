import { courseList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const OfficersOfUniversity = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col pt-100 pb-100 university-officers'>
                <h2 className='text-center w-fit py-4 px-10 bg-[#4f70b6] text-white font-bold text-[36px] sm:text-[40px] md:text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                  Officers of University
                </h2>
                <div className='w-full flex flex-wrap justify-center gap-8 mt-10 pb-10'>
                  
                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/registrar.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex]'>Dr. Vivek M. Kayande</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Registrar</p>
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="https://manage-api.sguk.ac.in/api/assets/6756bfa59173bf9f471abe0e" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>

                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/ceo.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex'>Dr. N.K Patil</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Controller of Examination</p>
                       
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="https://manage-api.sguk.ac.in/api/assets/6756bfc99173bf9f471abe13" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>

                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/cfo.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex'>Mr. P. A. Desai</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Chief Finance & Account Officer</p>
                       
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="#" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>

                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/3.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex'>Prof. Dr.V. V. Kulkarni</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Dean,Faculty of Science & Technology <br/> Director (Add. Charge)-School of Design</p>
                       
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="https://manage-api.sguk.ac.in/api/assets/674ec3544b17e19d8f3616a6" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>



                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/1.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex'>Dr. A.D.Sawant</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>Associate Dean, Physical & Chemical Science</p>
                       
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="https://manage-api.sguk.ac.in/api/assets/674eef3e4b17e19d8f361805" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>

                    <div className='w-[380px] p-3 xl:p-3 rounded-[10%] shadow-[0_0_60px_-10px_#c3c2c2]'>
                        <img className='rounded-[10%] w-full h-[340px] transition ease-in duration-200 hover:-translate-y-1 hover:scale-105' src='/assets/images/officers-in-university/2.jpg' />
                        <p className='text-center text-[#231f20] my-2 font-semibold text-xl justify-center items-center flex'>Dr. U. P.Jadhav</p>
                        <p className='text-[#231f20] font-medium text-lg text-center'>I/C Dean,Faculty of Humanities & Social Science <br/> BOS Chairman of Faculty of Liberal Arts. <br/> Director-Knowledge Resource Center Director-School of Social Sciences</p>
                       
                        <div className='my-1 flex gap-2 items-center justify-center'>
                              <a href="#" target="_blank" className="px-6 py-3.5 mt-2 text-[14px] xl:text-xl rounded-tl-[20px] rounded-br-[20px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300">Profile</a>
                        </div>
                    </div>
                </div>
            </section>
  );
};

export default OfficersOfUniversity;
