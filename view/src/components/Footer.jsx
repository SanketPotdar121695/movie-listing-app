import React from 'react';

const Footer = () => {
  return (
    <div className='flex bg-gray-700 h-20 items-center px-4 justify-between xs:px-5 md:px-24 md:justify-evenly gap-8 text-white'>
      <h2>&copy; {new Date().getFullYear()} All right reserved.</h2>
      <h2>
        Made with <span className='text-red-600 text-xl'> &hearts;</span> by
        Sanket Potdar
      </h2>
    </div>
  );
};

export default Footer;
