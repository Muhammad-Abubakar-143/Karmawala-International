import React from 'react';

import about_1 from '../assets/data/about_1';

import AboutUp from '../components/AboutUp';

const About = () => {
  return (
    <>
    <div className="flex flex-wrap flex-col">
      <div className="p-2 mx-auto font-serif text-[50px] italic text-center text-gray-400">
        <h1>About Us</h1>
      </div>
      <div className="max-w-[1680px] m-auto px-4">
        {about_1.map((about_1) =>{
          return(
            <AboutUp key={about_1.id}
            para={about_1.paragraph}
            image={about_1.image}/>
          )
        })}
      </div>
      
    </div>

   
    
    
    </>
  )
}

export default About