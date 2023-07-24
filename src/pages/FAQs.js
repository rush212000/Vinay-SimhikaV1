import React from 'react';
import FAQsP from '../img/FAQs/V&SFAQs.jpg';

const FAQs = () => {
  return (
    <>
      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');
      `}
      </style>

      <div
        style={{
          background: `url(${FAQsP})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '133vh',
          overflowY: 'scroll', // Enable vertical scrolling for the entire container
        }}
      >
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '105px',
          }}
        >
          FAQs
        </h1>
      </div>

      <div
        style={{
          height: '200vh',
          background: '#E0E0E0',
          display: 'flex',
          flexDirection: 'column', // Change flexDirection to column
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '69px',
            color: '#333',
          }}
        >
          <br />
          <br />
          <br />
          Frequently asked questions 
        </h2>

        {/* New Section with Scroll */}
        <div
          style={{
            height: '400px', // Adjust the height as needed
            background: '#E0E0E0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'auto', // Enable vertical scrolling for this section
          }}
       >
        </div>
      </div>
    </>
  );
};

export default FAQs;
