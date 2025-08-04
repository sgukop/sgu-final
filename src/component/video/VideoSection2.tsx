'use client'
import { useTalimContext } from '@/context/TalimContext';
import React from 'react';
import VideoModal from '../modal/VideoModal';

const VideoSection2 = () => {
  const {openVideoModal} = useTalimContext()
  return (
    <div className="tl-7-vid">
      <div className="container">
        <a
          className="tl-7-vid-btn"
          role='button'
          onClick={() => openVideoModal("https://www.youtube.com/embed/5GM31_IoS4I")}>
          Play
        </a>
      </div>
      <VideoModal/> 
    </div>
  );
}

export default VideoSection2;
