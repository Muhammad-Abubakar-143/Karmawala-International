import React from 'react'

const Econic = ({title, image, descprition}) => {
  return (
    <>
        <div className="w-[300px] hover:scale-105 duration-300 items-center p-1 bg-white shadow-lg rounded-lg">
            <div className="broder w-full">
              <img src={image} alt="Card" className="h-64 rounded-lg w-full object-cover" />

              <div className="bottom-0 left-0 right-0 p-4 bg-white rounded-b-md">
                <div className="mt-0 mb-1 text-xl font-bold tracking-tight text-gray-900">
                  <h5>{title}</h5>
                </div>
                <div>
                {descprition.map((des) =>{
                            return(
                               <p  key={des}>{des}</p>
                            )
                        })}
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Econic
