'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link';
import React from 'react'
import AdmissionOpenForm from '../form/AdmissionOpenForm';
import AdmissionFormNew from '../admissions/AdmissionFormNew';

const NewBanner = () => {
  const { openVideoModal } = useTalimContext();

  return (
    <section className="">
      <div className="banner-image">
          <figure><img src='/assets/images/banner-image/new-banner-image1.png' className="w-full z-0"/></figure>
      </div>
     
      <div className='w-full bg-[#ffd300] py-8 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 flex flex-col justify-center items-center gap-y-4 pb-0 text-[#221f1f] relative'>
        <h2 className='text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-wide uppercase text-center px-2 md:px-6 lg:px-8 2xl:px-10'>Let&apos;s Build Your Future With SGU</h2>
        <p className="w-full md:w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] text-center text-2xl md:text-3xl 2xl:text-4xl xl:leading-[40px] 2xl:leading-[46px] mb-8 xl:mb-10 font-medium">Through a Combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>

        <div className="w-full">
        <div className='w-full h-[100px] bg-white absolute bottom-0 left-0'></div>
        <div className='w-full flex justify-center gap-3 flex-wrap gap-y-5 px-20'>
          <div className='w-[320px] xl:w-[300px] 2xl:w-[20%] p-6 bg-[#4f70b6] text-white rounded-tl-[140px] flex flex-col justify-center items-center rounded-br-[140px] px-8 z-30 shadow-xl transition-all ease-in hover:-translate-y-5 hover:scale-105 duration-200'>
            <div className='w-fit flex justify-center items-center'>
              <img src='/assets/images/home/notebook.png' width={80} alt='Notebook'/>
            </div>
            <a href="/admission-open" target="_blank" className='text-center text-3xl font-semibold tracking-wide mb-2.5 uppercase mt-3'>
              Admission Enquiry
            </a>
            <span className='w-full text-white text-center text-2xl uppercase tracking-wide'>2025 - 2026</span>
          </div>
          <div className='w-[320px] xl:w-[300px] 2xl:w-[20%] p-6 bg-[#f26122] text-white rounded-tl-[140px] flex flex-col justify-center items-center rounded-br-[140px] px-8 z-30 shadow-xl transition-all ease-in hover:-translate-y-5 hover:scale-105 duration-200'>
          <div className='w-fit flex justify-center items-center'>
              <img src='/assets/images/home/admission.png' width={80} alt='Notebook'/>
            </div>
            <h3 className='text-center text-3xl font-semibold tracking-wide mb-2.5 uppercase mt-3'>
              For Admission
            </h3>
            <a href="/admission-open" target="_blank"className='w-full text-white text-center text-2xl uppercase tracking-wide'>Learn More</a>
          </div>
          <div className='w-[320px] xl:w-[300px] 2xl:w-[20%] p-6 bg-[#286f83] text-white rounded-tl-[140px] flex flex-col justify-center items-center rounded-br-[140px] px-8 z-30 shadow-xl transition-all ease-in hover:-translate-y-5 hover:scale-105 duration-200'>
          <div className='w-fit flex justify-center items-center'>
              <img src='/assets/images/home/download-catalogue.png' width={80} alt='Notebook'/>
            </div>
            <h3 className='text-center text-3xl font-semibold tracking-wide mb-2.5 uppercase mt-3'>
             Download Catalogue
            </h3>
            <span className='w-full text-white text-center text-2xl uppercase tracking-wide'>Learn More</span>
          </div>
          <div className='w-[320px] xl:w-[300px] 2xl:w-[20%] p-6 bg-[#ec008c] text-white rounded-tl-[140px] flex flex-col justify-center items-center rounded-br-[140px] px-8 z-30 shadow-xl transition-all ease-in hover:-translate-y-5 hover:scale-105 duration-200'>
          <div className='w-fit flex justify-center items-center'>
              <img src='/assets/images/home/read-more.png' width={80} alt='Notebook'/>
            </div>
            <h3 className='text-center text-3xl font-semibold tracking-wide mb-2.5 uppercase mt-3'>
              More About SGU
            </h3>
            <a href="/about-university" target="_blank" className='w-full text-white text-center text-2xl uppercase tracking-wide'>Learn More</a>
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default NewBanner