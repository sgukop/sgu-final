import Link from 'next/link'
import React from 'react'

const NewFooter = () => {
    return (
        <section className='w-full bg-[rgb(46,56,103)] pb-10'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-start relative'>
                <div className='w-full lg:w-[40%] 2xl:w-[45%] py-14 px-8 flex justify-end items-center flex-col'>
                    <ul>
                        {/* <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <a className="hover:text-[#F26122]" href="" target="_blank">Academics</a>
                        </li>   */}
                        <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <Link className="hover:text-[#F26122]" href="/academic-brochure">Academic Brochure</Link>
                        </li>
                        <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <Link className="hover:text-[#F26122]" href="/collaborations">Foreign University Collaborations</Link>
                        </li>
                        <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <Link className="hover:text-[#F26122]" href="/industry-collaborations">Industry Collaborations</Link>
                        </li>
                        <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <Link className="hover:text-[#F26122]" href="/library-about">Knowledge Research Center</Link>
                        </li>
                        <li className='text-2xl 2xl:text-3xl font-medium text-white pb-3'>
                            <Link className="hover:text-[#F26122]" href="/nirf">National Institutional Ranking Framework</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full lg:w-[40%] 2xl:w-[45%] py-6 px-8 flex justify-between items-center gap-6 lg:gap-8 xl:gap-10 2x:gap-14 p-2'>
                    <div className='w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4532.089789633672!2d74.37967877576965!3d16.7425113210611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc103227ffea19b%3A0xba598d42f62e8fc1!2sSanjay%20Ghodawat%20University!5e1!3m2!1sen!2sin!4v1736427089753!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>

                    <div className='w-fit h-fit flex flex-col gap-y-3'>
                        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#f26122]'>
                            <a className="hover:[transform:rotate(180deg)]" href="https://www.instagram.com/sanjayghodawatuniversity/profilecard/?igsh=MWp3b3Q3OTF2bHBwcQ==" target="_blank"><img src='/assets/images/home/instagram.svg' alt='Instagram' /></a>
                        </div>
                        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#f26122]'>
                            <a className="hover:[transform:rotate(180deg)]" href="https://www.facebook.com/SGUniversityKolhapur?mibextid=LQQJ4d" target="_blank"><img src='/assets/images/home/facebook.svg' alt='facebook' /></a>
                        </div>
                        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#f26122]'>
                            <a className="hover:[transform:rotate(180deg)]" href="https://www.linkedin.com/school/sanjayghodawatuniversity/" target="_blank"><img src='/assets/images/home/linkedin.svg' alt='linkedin' /></a>
                        </div>
                        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#f26122]'>
                            <a className="hover:[transform:rotate(180deg)]" href="https://www.youtube.com/@sguniversity7645" target="_blank"><img src='/assets/images/home/youtube.svg' alt='youtube' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full my-3 py-4 px-8 2xl:px-10 flex gap-3 justify-center items-center bg-[#F26122] flex-wrap text-white'>
               {/*  <a href="/about-university" target="_blank" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> About Us </a>
                <span className='h-full w-[4px] bg-white text-white'>.</span>  */}
                <Link href="/about-university" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> About SGU </Link>
                <span className='h-full w-[4px] bg-white text-white'>.</span>
                <Link href="/student-submenues" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> Student </Link>
                <span className='h-full w-[4px] bg-white text-white'>.</span>
                <Link href="/campus-images" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> Infrastructure </Link>
                <span className='h-full w-[4px] bg-white text-white'>.</span>
                <Link href="/feedback" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> Feedback </Link>
                <span className='h-full w-[4px] bg-white text-white'>.</span>
                <Link href="/download" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> Download </Link>
                <span className='h-full w-[4px] bg-white text-white'>.</span>
                <Link href="/contact-us" className='text-2xl font-semibold tracking-wide hover:text-[#212f64]'> Contact Us </Link>
            </div>

            <div className='w-full pt-2 text-center text-white lg:text-lg'>
            Copyright &copy; 2024 All Rights Reserved by Enark
            </div>
        </section>
    )
}

export default NewFooter