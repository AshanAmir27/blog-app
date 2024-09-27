import React from 'react';
import styles from './Home.module.css'; // Import the CSS module

function Home() {
  return (
    <div className={`p-10 md:p-20 ${styles.bgCustom} flex flex-col items-center`}>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-5 text-center md:m-10 text-slate-300'>
        Where Words Ignite Change: <br />
        <span className='font-bold'>Explore, Learn, Create</span>
      </h1>
      <button className='bg-gradient-to-b from-slate-900 to-neutral-900 border-2 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 text-white rounded-md text-lg sm:text-xl md:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 mt-5'>
        Get Started!
      </button>
    </div>
  );
}

export default Home;
