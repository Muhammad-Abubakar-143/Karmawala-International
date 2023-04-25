import React,{useState} from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [nav,setNav] =useState(false)
  return (
    <>
    <div className="max-w-[1680px] mx-auto flex items-center p-4 justify-between bg-white shadow-xl">
      <div className="flex items-center right-4 top-4">
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30}/>
        </div>
        <Link to="/"><img src={logo} alt="Logo" className="h-12 px-4 md:object-cover" /></Link> 
          <h1 className="flex items-start px-2 font-serif text-[25px] italic text-center text-gray-700">KarmaWala international</h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
          <nav className="absolute flex items-center justify-between p-6">
         
         <ul className="flex flex-wrap sm:justify-evenly font-bold md:flex-row md:flex-wrap">
           <li className="mr-6">
             <Link to="/" className="font-serif italic text-gray-800 hover:text-gray-600">Home</Link>
           </li>
           <li className="mr-6">
             <Link to="Product" className="font-serif italic text-gray-800 hover:text-gray-600">Product</Link>
           </li>
           <li className="mr-6">
             <Link to="About" className="font-serif italic text-gray-800 hover:text-gray-600">About</Link>
           </li>
           <li className="mr-6">
             <Link to="Contact" className="font-serif italic text-gray-800 hover:text-gray-600">Contact</Link>
           </li>
         </ul>
       </nav>
          </div>
      </div>
      
       {/*Mobile Menu*/}

             {/*Side Menu*/}
             <div className={nav ? "fixed w-[200px] md:w-[200px] h-screen bg-white left-0 top-0 z-10 duration-300" : 'fixed w-[300px] h-screen bg-white left-[-100%] top-0 z-10 duration-300' }>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl font-serif p-4 italic">KarmaWala International</h2>
        <nav>
            <ul className="flex flex-col p-4 text-gray-800 cursor-pointernom ">
              
                <li className="text-xl py-4 flex">
                <Link to="/" className="font-serif italic text-gray-800 hover:text-gray-600">Home</Link></li>
                <li className="text-xl py-4 flex">
                <Link to="Product" className="font-serif italic text-gray-800 hover:text-gray-600">Product</Link></li>
                <li className="text-xl py-4 flex">
                <Link to="About" className="font-serif italic text-gray-800 hover:text-gray-600">About</Link></li>
                <li className="text-xl py-4 flex">
                <Link to="Contact" className="font-serif italic text-gray-800 hover:text-gray-600">Contact</Link></li>
            </ul>
        </nav>
       </div>


    </div>
   

    </>
  )
}

export default Navbar