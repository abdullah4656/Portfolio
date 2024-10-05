import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ contactFormRef }) => {
  const handleGetInTouchClick = () => {

      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    
      
  };

  return (
    <nav className='flex justify-between m-2 items-center bg-black p-4'>

     <a className="logo  font-bold text-4xl" href='/'>ABDULLAH </a>
     <a className="logo mqlogo  font-bold text-4xl" href='/'>AY </a>
      <div className="flex gap-6 mr-10 items-center">
      
    
        <a  href="tel:+923054618558" className='text-2xl mqnavic phone'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-8 phone animate-pulse'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        </a>
        <button  onClick={handleGetInTouchClick} className='getin getinbutton  font-semibold shadow-2xl flex mx-auto text-white  border-0 py-2 px-8   rounded text-lg focus:ring-2  transition-transform duration-300 hover:scale-105 focus:outline-none'>
        Get in Touch
      </button>
     
      </div>
    </nav>
    
  );
};

export default Navbar;
