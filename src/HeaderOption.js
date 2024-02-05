import React from 'react';
const HeaderOption = ({ title, icon,   }) => {
  return (
    <div className='header_option flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-blue-500'>
      {icon && <div className='header_option_icon object-contain h-6 w-6'>{icon}</div>}
      <h3  className='text-xs font-normal'>{title}</h3>

      
   
 
    </div>
  );
};

export default HeaderOption;
