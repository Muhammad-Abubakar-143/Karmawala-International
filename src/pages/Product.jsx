import React from 'react';
import econic from '../assets/data/econic';
import spice from '../assets/data/spice';
import logo1 from '../assets/images/logo1.png'
import Econic from '../components/Econic';
import Spice from '../components/Spice';

const Product = () => {
  return (
    <>
      <div>
          <div className="max-w-[1680px] m-auto p-2 mx-auto font-serif text-[50px] italic text-center text-gray-400">
            <h1>Our Products</h1>
          </div>
          
          <div className="max-w-[1680px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
           
           {spice.map((spice) =>{
            return(
              <Spice key={spice.id}
              title={spice.title}
              image={spice.image}
              para={spice.para}/>
            )
           })}
        </div>

        <div className="flex flex-col items-center pt-2">
          <img src={logo1} className="align-middle justify-center" alt="logo" />
        </div>
        <div className="max-w-[1680px] p-4 py-6 grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6 pt-4 justify-center">

          {econic.map((econic) => {
            return (
              <Econic key={econic.id}
                title={econic.title}
                image={econic.image}
                descprition={econic.desc} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Product