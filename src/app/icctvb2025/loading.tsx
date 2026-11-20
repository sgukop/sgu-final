import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div className="loading-content">
                    <Image 
                    className="loading-logo-text" 
                    src="https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/logo/logo-text1.jpg" 
                    alt="SGU"
                    height={80}
                    width={242}
                    />
                    <div className="loading-stroke">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default loading