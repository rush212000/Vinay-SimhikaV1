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

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
        `}
      </style>

      <div 
        style={{
            background: `url(${OurEventP}) `,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
      >
        <h1
        className='min-[0px]:text-[65px] md:text-[100px]'
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '100px',
            position: 'relative',
            bottom: 10,
          }}
        >
          Our Wedding Events
        </h1>

      </div>

      {/* Mehndi Night section */}

      <div
      className='min-[0px]:px-[6%] md:px-[0%] container mx-auto h-full flex flex-col'
        style={{
          background: '',
          display: 'flex',
          flexDirection: 'column', // Change flexDirection to column
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: 120,
          //padding: "0% 0%",
        }}
      >
        <h2
        className='min-[0px]:text-[65px] md:text-[75px]'
          style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '75px',
            color: '#000000',
          }}
        >
           

          Mehndi Night
        </h2>
        <img
          src={MehndiNight}
          alt="Mehndi Night"
          style={{
            maxWidth: '150px',
            maxHeight: '100px', // Adjust the height accordingly
            marginTop: '-10px', // Add some spacing between the heading and the image
          }}
        />


        {/* Mehndi images */}
        <div 
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
            
            Tuesday 2nd April 2024
<br/>
            <br />
            Time Square Club, Bhuj
            <br />
            <br/>
            We kick off the wedding shenanigans with the mehndi party where we invite you to adorn your hands with the traditional art of mehndi, or henna. Immerse yourself in the ambiance of uplifting music, the aromatic scent of mehndi and dance performances.
            <br/>
            <br/>
            Dress code: Bright and vibrant outfits 
            <br/>
          
          
        </div>
<br/>
<br/>
<br/>
        <h3
        className='min-[0px]:text-[65px] md:text-[75px]'
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '75px',
            color: '#000000',
          }}
        >
        
          Vinay's Mandvo
          </h3>

        <img
          src={VinayMandvo}
          alt="Vinay's Mandvo "
          style={{
            maxWidth: '150px',
            maxHeight: '100px', // Adjust the height accordingly
            marginTop: '-10px', // Add some spacing between the heading and the image
            position: 'relative',
            left: '-2px'
          }}
        />

        {/* Mehndi images */}
        <div
        className='min-[0px]:text-[18px] md:text-[20px]' 
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024

            <br />
            <br/>

            Time Square Club, Bhuj
            <br />
            <br/>
            Vinay’s Mandvo signifies the sacred commencement of the Hindu wedding starting with a Ganesh Pooja, where we seek the blessings of Lord Ganesh to remove obstacles from our path. During the ceremony, a bamboo plant is planted signifying growth, strength and prosperity in our journey. A traditional oil lamp, a Diva, is also lit and kept alight until we return home after the Hindu wedding, guiding and protecting us.
            <br/>
            <br/>
             Dress code: Bright and vibrant outfits
             <br/>
             This event will be for Vinay's guests.
          
        </div>
        <br/>
        <br/>
        <br/>
        <h3
        className='min-[0px]:text-[65px] md:text-[75px]'
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '75px',
            color: '#000000',
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
            marginTop: '-10px', // Add some spacing between the heading and the image
            position: 'relative',
            left: '2px'
          }}
        />

        {/* Mehndi images */}
        <div 
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024
            <br/>
            <br />
            Time Square Club, Bhuj
            <br />
            <br/>
           Our light hearted Haldi ceremony is an opportunity for you to shower your blessings on us in a fun-loving way in the form of applying haldi paste, a paste made from turmeric, known for its cleansing and purifying properties. 
            <br/>
            <br/>
            Dress code: White or yellow outfits that you don’t mind getting wet and stained with turmeric.
            
          
        </div>
        <br/>
          <br/>
          <br/>
        <h3
        className='min-[0px]:text-[65px] md:text-[75px]'
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '75px',
            color: '#000000',
          }}
        >
          Sangeet Night
          </h3>

        <img
          src={SangeetNight}
          alt="Sangeet Night "
          style={{
            maxWidth: '200px',
            maxHeight: '115px', // Adjust the height accordingly
            marginTop: '-20px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div 
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{ marginTop: '0px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
            
            Wednesday 3rd April 2024
      <br/>
            <br />
            Time Square Club, Bhuj
            <br />
            <br/>
            Immerse yourselves in an evening of traditional live Gujarati music, energetic dancing and a vibrant atmosphere celebrating love, unity and the spirit of togetherness. The Sangeet night will showcase the infectious energy of the traditional Gujarati folk dance, Garba.
            <br/>
            <br/>
            Dress code: Traditional Gujarati attire or vibrant outfits
            
        </div>
        <br/>
          <br/>
          <br/>
        <h3
        className='min-[0px]:text-[65px] md:text-[75px]'
        style={{
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '75px',
            color: '#000000',
          }}
        >
         
          Hindu Wedding
          </h3>
        <img
          src={Wedding}
          alt="Wedding"
          style={{
            maxWidth: '200px',
            maxHeight: '175px', // Adjust the height accordingly
            marginTop: '-60px', // Add some spacing between the heading and the image
          }}
        />

        {/* Mehndi images */}
        <div 
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{ marginTop: '-30px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

        {/* Add more img elements here as needed */}
        {/* Content */}
        
        
        Thursday 4th April 2024
<br/>
        <br />
        Time Square Club, Bhuj
        <br/>
        <br />
        The Hindu wedding holds a deeply sacred and spiritual significance, marking the beginning of a new phase of our lives. Witness us take our seven sacred vows and make a lifelong commitment to each other. We eagerly await the company and blessings of our closest friends and family to celebrate this joyous occasion as we start our new beginning.
        <br/>
        <br/>
        Dress code: Dress to impress
        <br/>
        <br/>
        
        
    </div>

    
    </div>
<br/>
<br/>
<br/>
<br/>
<br/>


    {/* Footer */}
    <footer className="footer mt-auto">
      <div className="container mx-auto py-4">
        {/* Add your footer content here */}
        <div className="flex justify-center items-center">
          <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
          <p className="text-center text-gray-600">
           
          </p>
        </div>
      </div>
     
    </footer>

    </>
  );
};

export default OurEvent;