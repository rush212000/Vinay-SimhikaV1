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
            fontSize: '100px',
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




<h2
          style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '75px',
            color: '#000000',
          }}
        >
           

          Mehndi Night
        </h2>
        <div 
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
            
            Tuseday 2nd April 2024
<br/>
            <br />
            Time Square Club, Bhuj
            <br />
            <br/>
            We kick of the wedding shenanigans with the mehndi party where we invite you to adorn your hands with the traditional art of mehndi, or henna. Immerse yourself in the ambiance of uplifting music, the aromatic scent of mehndi and dance performances.
            <br/>
            <br/>
            Dress code: Bright and vibrant outfits 
            <br/>
          
          
        </div>

        </div>
      </div>
    </>
  );
};

export default FAQs;
