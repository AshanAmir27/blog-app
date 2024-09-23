import React from 'react';
import styles from './Home.module.css'; // Import the CSS module

function Home() {
  return (
    <div className={`p-10 md:p-20 ${styles.bgCustom}`}> {/* Adjust padding for smaller screens */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-5 md:m-10 text-slate-300'>
        Where Words Ignite Change: <br />
        <span className='font-bold'>Explore, Learn, Create</span>
      </h1>
      {/* <button className='bg-green-500 hover:text-gray-900 hover:bg-white hover:border-2 text-white py-2 px-4 rounded-md'>
        Get Started!
      </button> */}

      <button className='text-white border-2 px-2 py-2 hover:bg-white hover:text-black rounded-md text-xl hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1'>Get Started!</button>
    </div>
  );
}

export default Home;
