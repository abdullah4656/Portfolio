
import React, { useState } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutme = () => {
  const [isVisible, setVisible] = useState(false);

  const handlePage = () => {
    setVisible(!isVisible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
   <>
   
   <div className="flex items-center relative">
        {isVisible ? (
          <button
           className="focus:ring-2  getin  transition-transform duration-300 hover:scale-105 focus:outline-none m-7 flex items-center  font-semibold z-20  p-3 rounded-md text-black"
          onClick={handleClose}
          >

<>
                <div className="flex items-center gap-2">
                  Close
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4  "><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
              </>
          </button>
        ) : (
          <>
            {" "}
            <button
              onClick={handlePage}
              className="focus:ring-2  getin  transition-transform duration-300 hover:scale-105 focus:outline-none m-7 flex items-center   font-semibold z-20  p-3 rounded-md text-black"
            >
              <>
                <div className="flex items-center gap-2">
                  About me
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </>
            </button>
          </>
        )} 
        </div>
  
    <div className="flex items-center justify-center ">
        {/* actual container */}
        
  <div className={`fixed top-20  -left-   bg-opacity-50  transition-opacity duration-500  p-6 rounded-md shadow-lg z-10 container flex items-center justify-between ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  

>

<div className="w-full">


<span   className=" p-3 text-2xl font-semibold text-orange transition-transform 
                 duration-300   hover:scale-105 "     >
                  ABOUT ME
                </span>      
              <p className="mqtext p-4 ">
                I am a professional software developer specializing in
                full-stack development, with a strong focus on back-end
                technologies like Python, Django, and REST APIs. Proficient in
                HTML, CSS, JavaScript, and frameworks like React, Bootstrap, and
                Tailwind, I aim to leverage my skills in a challenging role that
                fosters professional growth and contributes to organizational
                success
              </p>
              <ul className="mqhashtags list flex gap-1 flex-wrap p-4">
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #python
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #django
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #djangorestframework
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #react
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #html
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #restapi
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #css
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #javascript
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #bootstrap
                </li>
                <li className="border border-indigo-200 rounded-3xl p-2">
                  #tailwind
                </li>
              </ul>
              <img
                className="h-32 mqdjimg"
                src="images/pngwing.com.png"
                alt="Django logo"
              />
</div>
<div className="flex flex-row-reverse justify-start">
<div className="cross"
onClick={handleClose}
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 "><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>

</div>
<img className="w-full aimg" src="images/d.png" alt="" />
</div>
  </div>
  
</div>


   </>
  )
}

export default Aboutme