const ProductCard = ({ title, image, bulletPoints }) => {
    return (
        <div className="w-[300px] items-center shadow-lg rounded-lg justify-center hover:scale-105 duration-300">
            <div className="broder rounded-lg  w-full" >
            <img src={image} alt="Card" className="h-64 rounded-lg w-full object-cover" />
            <div className="flex flex-col justify-between px-2 py-4">
            <div className="mt-0 mb-1 text-xl font-bold tracking-tight text-gray-900">
                  <h5>{title}</h5>
                </div>
                <ul>
                     {bulletPoints.map((des) => {
                        return (
                            <li key={des}>{des}</li>
                        )
                    })}
                </ul>
            </div>
            </div>
        </div>
       
    )
}

export default ProductCard;






