import React, { useState } from 'react';
import OurEventP from '../img/OurEvent/V&Sourevent.jpg';
import MehndiNight from '../img/OurEvent/Mehndi Icon.svg';
import VinayMandvo from '../img/OurEvent/Vinay_s Mandvo Icon.svg';
import Haldi from '../img/OurEvent/Haldi Icon.svg'; // Import the new image here
import SangeetNight from '../img/OurEvent/Sangeet Icon.svg'; // Import the new image here
import Wedding from '../img/OurEvent/Wedding Icon.svg'; // Import the new image here
import VSfoot from'../img/OurEvent/vsFoot.png';

const OurEvent = () => {

  return (
    <>
      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');
        `}
      </style>
      <div
        style={{
            background: `url(${OurEventP}) `,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
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
          Our Wedding Events
        </h1>
      </div>

      {/* Mehndi Night section */}
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
            <br/>
            <br/>
            <br/>

          Mehndi Night
        </h2>
        <img
          src={MehndiNight}
          alt="Mehndi Night"
          style={{
            maxWidth: '150px',
            maxHeight: '80px', // Adjust the height accordingly
            marginTop: '40px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          <br />
            
            Tuseday 2nd April 2024

            <br />
            Time Square Club, Bhuj
            <br />
            We kick of the wedding shenanigans with the mehndi party where we invite you to adorn your hands with the traditional art of mehndi, or henna.
            <br/>
            Immerse yourself in the ambiance of uplifting music, the aromatic scent of mehndi and dance performanfes.
          
          
        </div>

        <h3
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '69px',
            color: '#333',
          }}
        >
          Vinay's Mandvo
          </h3>

        <img
          src={VinayMandvo}
          alt="Vinay's Mandvo "
          style={{
            maxWidth: '150px',
            maxHeight: '80px', // Adjust the height accordingly
            marginTop: '20px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024

            <br />
            Time Square Club, Bhuj
            <br />
            Vinay's Mandvo signifies the sacred commencement of the Hindu weeding starting with a Ganesh Pooja, where we seek obstacles from our path.
            <br/>
             During the ceremony, a bamboo plant is planted signifying growth,strength and prosperity in our journey.
        <br/>
        A traditional oil lamp, a Diva, is also lit and kept loght until we return home after the Hindu wedding, guiding and protecting us.
          
        </div>
        <h3
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '69px',
            color: '#333',
          }}
        >
          Haldi
          </h3>

        <img
          src={Haldi}
          alt="Haldi "
          style={{
            maxWidth: '150px',
            maxHeight: '80px', // Adjust the height accordingly
            marginTop: '20px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024

            <br />
            Time Square Club, Bhuj
            <br />
           Join us in our light hearted Haldi ceremony, 
            <br/>
            where we invite you to shower your blessings on us in the form of applying haldi paste a paste made from turmeric,known for its cleansing and purifying properties.
            
          
        </div>
        <h3
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '69px',
            color: '#333',
          }}
        >
          Sangeet Night
          </h3>

        <img
          src={SangeetNight}
          alt="Sangeet Night "
          style={{
            maxWidth: '150px',
            maxHeight: '80px', // Adjust the height accordingly
            marginTop: '20px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024

            <br />
            Time Square Club, Bhuj
            <br />
            Immerse yourselves in an evening of traditional live Gujarati music,
            
            energetic dancing and a vibrant atmosphere clebrating love,
            
            unity and the spirit of togetherness
            
        </div>
        <h3
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '69px',
            color: '#333',
          }}
        >
          Hindu Wedding
          </h3>
        <img
          src={Wedding}
          alt="Wedding"
          style={{
            maxWidth: '180px',
            maxHeight: '80px', // Adjust the height accordingly
            marginTop: '20px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
    }}>

        {/* Add more img elements here as needed */}
        {/* Content */}
        
        
        Thursday 4th April 2024

        <br />
        Time Square Club, Bhuj
        <br />
        The Hindu wedding holds, a deeply sacred and spiritual significance, marking the beginning of a new phase of our lives.
        <br/>
        We invite you to witness us take our seven sacred vows and make a lifelong commitment to each other.
        <br/>
        We eagerly await the company and blessing of our closest friends and family to celebrate this joyous occasion as we start our new beginning.
        
    </div>
    </div>

   {/* Footer */}
   <section>
        <footer className="footer mt-auto">
          <div className="container mx-auto py-4">
            {/* Add your footer content here */}
            <div className="flex justify-center items-center">
              <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
              <p className="text-center text-gray-600">
                <span>© {new Date().getFullYear()}</span> <span className="ml-auto"></span>
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
  
export default OurEvent;
