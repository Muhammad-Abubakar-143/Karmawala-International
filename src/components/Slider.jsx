import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import super_basmati_rice from '../assets/images/super_basmati_rice.jpg';
import sella_basmati_rice from '../assets/images/sella_basmati_rice.jpg';
import steam_basmati_rice from '../assets/images/steam_basmati_rice.jpg';



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    steam_basmati_rice,
    sella_basmati_rice,
    super_basmati_rice,
    
  ];

  const handlePrevious = () => {
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex < 0 ? images.length - 1 : previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex === images.length ? 0 : nextIndex);
  };
  return (
    <>
      <div className= "max-w-[1680px] p-4 mx-auto m-2 bg-white rounded-md">
        <div className="relative object-fill scale-100">
          <img src={images[currentIndex]} alt="Slider" className="w-full max-h-[600px] object-cover lg:object-fill" />
          <button className="absolute left-0 m-10 top-[35%]" onClick={handlePrevious}>
            <IoIosArrowBack size={50} />
            
          </button>
          <button className="absolute right-0 m-4 top-[35%]" onClick={handleNext}>
            <IoIosArrowForward size={50} />
          </button>
        </div>

      </div>

    </>
  );
};

export default Slider;
