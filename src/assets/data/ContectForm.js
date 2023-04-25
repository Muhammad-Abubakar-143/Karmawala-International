import React, { useState } from "react";
import factory_pic from '../images/factory_pic.JPG'

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
      setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2">
 <div>
 <img src={factory_pic} alt="factory pic" className="w-full h-full"/>
 </div>
 <div className="bg-white flex flex-col justify-center">
   <form 
   action={FORM_ENDPOINT}
   onSubmit={handleSubmit}
   method="POST"
   target="_blank"
    className="shadow-lg bg-gray-100 max-w-[400px] w-full mx-auto rounded-lg px-8 p-8">
     <div className="flex flex-col text-black-400 py-2">
       <label>Name</label>
       <input className="rounded-lg focus:border-black p-2 mt-2" type="text" required placeholder="Enter your name"/>
     </div>
     <div className="flex flex-col text-black-400 py-2">
       <label>Email</label>
       <input className="rounded-lg focus:border-black p-2 mt-2" type="email" required placeholder="Enter your Email"/>
     </div>
     <div className="flex flex-col text-black-400 py-2">
       <label>Comment</label>
       <textarea className="rounded-lg focus:border-black p-2 mt-2" type="text" required placeholder="Enter anything..."/>
     </div>

     <button className="w-full my-5 py-2 shadow-sm bg-blue-600 text-white rounded-lg">Submit</button>
   </form>
 </div>
</div>
    </>
  
  );
};

export default ContactForm;





