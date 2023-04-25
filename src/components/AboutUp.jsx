import React from 'react';
import about_1 from '../assets/data/about_1';


const AboutUp = ({image, para}) => {
  return (
    <>
     <div className="broder shadow-lg max-w-[500px] bg-white rounded-lg">
        <img src={image} alt="pic" className="rounded-t-lg" />
        {about_1.map(()=>{
            return(
              <div className="px-2">
                  <p key={para} className="font-bold p-4">
                    {para}
                </p>
                </div>
            )
        })}
        
       
      </div>
    
    </>
  )
}

export default AboutUp
