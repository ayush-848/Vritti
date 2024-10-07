import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Logo from '../assets/logo.png'; // Your logo path

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center text-[#add7f6] p-6 rounded-lg font-montserrat h-[95vh]"
      
      style={{
        background: 'linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)',
        overflow: 'hidden',
      }}
    >
      {/* Logo Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: '900px', // Adjust size of the logo
          backgroundPosition: 'center', // Center the logo
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main Heading */}
      <h1
        className="mt-48 max-w-sm text-center text-4xl font-extrabold sm:max-w-4xl sm:text-5xl z-10 "
      >
        Empowering Tomorrow with <br />
        <span className="my-4 block">
          <TypeAnimation
            sequence={[
              'Vritti Academy',
              1000,
              '',
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: 'white', fontSize: '4rem' }}
            speed={250}
          />
        </span>
      </h1>

      {/* Subtitle */}
      <span className="mt-8 max-w-xl text-center text-xl leading-relaxed text-blue-300 z-10">
        At Vritti, we empower you to unlock your tech potential and elevate your skills in programming, web development, and DSA.
      </span>

      {/* Buttons */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 z-10" id='hero'>
        <a
          href="https://example.com/new-feature"
          className="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-8 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 font-medium"
        >
          <svg
            className="h-[30px] text-white"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            strokeWidth="3"
            fill="none"
          >
            <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
            <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
            <circle cx="39.46" cy="24.56" r="6.2"></circle>
            <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
            <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
            <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
          </svg>
          Get Started
        </a>

        <a
          href="#demo"
          className="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-white px-8 py-3 text-white hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Hero;
