import React from 'react'

const Spice = ({ title, image, para }) => {
  return (
    <>
      <div class="relative rounded-xl hover:scale-105 duration-300 shadow-lg">
       
          <img class="max-h-[160px] md:max-h-[200px] rounded-xl object-cover w-full"
            src={image} alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>

            {para.map((para) => {
              return (
                <p key={para} className="text-gray-700 text-base mb-4">{para}</p>
              )
            })}



          </div>
        </div>
      
    </>
  )
}

export default Spice




