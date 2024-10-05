import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Into = () => {
  return (
  <>

  <div className='introcont '>
  <div className='p-10' >
 
      <h2>
        <strong className='font-serif text-6xl text-white name italic'>Abdullah Yasin</strong>
      </h2>
      <h3 className='text-3xl  text-white intro italic '>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Django Developer',
        2000,
        'React Developer',
        2000,
        'Full Stack Developer',
        2000,
        
      ]}
      wrapper="span"
      speed={40}
      style={{ fontFamily:'none',fontStyle:'italic',color:'orange' }}
      repeat={0}
    />
       
      </h3>  
      <div className="flex flex-col items-center justify-center  intro">
      <p className="
        text-base
         md:text-xl
          lg:text-2xl 
            text-white
      ">
      𝘔𝘢𝘬𝘦 𝘺𝘰𝘶𝘳 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵𝘪𝘷𝘦 𝘸𝘦𝘣 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯𝘴 𝘸𝘪𝘵𝘩 𝘣𝘢𝘤𝘬𝘦𝘯𝘥 𝘵𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘺 𝘋𝘫𝘢𝘯𝘨𝘰 𝘰𝘳 𝘋𝘫𝘢𝘯𝘨𝘰 𝘙𝘌𝘚𝘛 𝘍𝘳𝘢𝘮𝘦𝘸𝘰𝘳𝘬 𝘢𝘯𝘥 𝘧𝘳𝘰𝘯𝘵𝘦𝘯𝘥 𝘸𝘪𝘵𝘩 𝘙𝘦𝘢𝘤𝘵 𝘰𝘳 𝘋𝘫𝘢𝘯𝘨𝘰 𝘛𝘦𝘮𝘱𝘭𝘢𝘵𝘦 𝘌𝘯𝘨𝘪𝘯𝘦 </p>
    </div>
  
     
    </div>
    <img className='w-1/4 rounded-xl mainimg' src="images/m.png" alt="" />
    <div>
</div>
</div>
    </>
  );
};

export default Into;
