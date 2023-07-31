import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import VS1Image from '../img/home/V&S1.jpg';
import VS2Image from '../img/home/V&S2.jpg';
import VS3Image from '../img/home/V&S3.jpg';
import VS4Image from '../img/home/V&S4.jpg';
import VS5Image from '../img/home/V&S5.jpg';
import VS6Image from '../img/home/V&S6.jpg';
import VS7Image from '../img/home/V&S7.jpg';
import VS8Image from '../img/home/V&S8Foot.jpg';

import VS1MImage from '../img/home/V&S1M.jpg';
import VS2MImage from '../img/home/V&S2M.jpg';
import VS3MImage from '../img/home/V&S3M.jpg';
import VS4MImage from '../img/home/V&S4M.jpg';
import VS5MImage from '../img/home/V&S5M.jpg';
import VS6MImage from '../img/home/V&S6M.jpg';
import VS7MImage from '../img/home/V&S7M.jpg';
import VS8MImage from '../img/home/V&S8M.jpg';
import VSfoot from '../img/home/V&SFOOT.png';

const Footer = () => {
  return (
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
  );
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePositions = [
    { url: window.innerWidth >= 650 ? VS1Image : VS1MImage, position: 'bottom'},
    { url: window.innerWidth >= 650 ? VS2Image : VS2MImage, position: 'bottom' },
    { url: window.innerWidth >= 650 ? VS3Image : VS6MImage, position: 'bottom' },
    { url: window.innerWidth >= 650 ? VS4Image : VS4MImage, position: 'bottom' },
    { url: window.innerWidth >= 650 ? VS5Image : VS5MImage, position: 'bottom' },
    { url: window.innerWidth >= 650 ? VS6Image : VS3MImage, position: 'bottom' },
    { url: window.innerWidth >= 650 ? VS7Image : VS7MImage, position: 'bottom' },
   
  ];
 
  const [countdown, setCountdown] = useState(calculateCountdown());



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePositions.length);
    }, 3500); // Change image every 1.5 seconds (1500ms)

    return () => clearInterval(interval);
  }, [imagePositions]);







  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000); // Update the countdown every second (1000ms)

    return () => clearInterval(interval);
  }, []);



 



  function calculateCountdown() {
    const targetDate = new Date('2024-04-04T00:00:00');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
    }
  
    return 'Countdown finished!';
  };
  
  

  return (
    <>
      {/* Add the meta tag for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');

        /* Add custom CSS styles for responsive images */
        .responsive-image {
          width: 100%;
          height: auto;
        }
        `}
      </style>

     






      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
        `}
      </style>

      <nav className="navbar" style={{ zIndex: '2' }}>
        {/* Replace with your navbar component */}
      </nav>
      <section className="section" style={{ backgroundColor: '#E0E0E0' }}>
        <div className="mx-auto h-screen relative">
          <div
            className="flex flex-col justify-center h-full"
            style={{
              backgroundPosition: imagePositions[currentImageIndex].position,
              backgroundImage: `url(${imagePositions[currentImageIndex].url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'background-image 0.8s ease-in-out',
            }}
            
>
          

          
            <div className="container mx-auto flex flex-col h-full justify-center items-center">
              <div className="pt-8 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10">
                <h1
                  className="min-[0px]:text-[25px] md:text-[30px] h1 text-center text-2xl font-semibold mb-4"
                  style={{
                    //fontSize: '25px',
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: 'cormorant infant',
                    textAlign: 'center',
                  }}
                >
                  We're getting married!
                </h1>
                <h2
                  className="min-[0px]:text-[75px] md:text-[105px] h2"
                  style={{
                    fontFamily: 'shelby, sans-serif',
                    fontStyle: 'normal',
                    //fontSize: '75px',
                    color: 'white',
                    fontWeight: '400',
                    textAlign: 'center',
                    position: 'relative',
                    bottom: 20,
                  }}
                >
                  Vinay & Simhika
                </h2>
                <p
        className="min-[0px]:text-[18px] md:text-[25px] font-primary mb-4 lg:mb-12 color: white"
        style={{
          //fontSize: '18px',
          color: 'white',
          fontWeight: 'normal',
          fontFamily: 'cormorant infant',
          textAlign: 'center',
          position: 'relative',
          bottom: 25,
        }}
      >
        {countdown}
      </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Page Section */}
      <section style={{ zIndex: '2' }}>
        <div
          className="min-[0px]:px-[6%] md:px-[0%] container mx-auto h-full flex flex-col"
          style={{
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'regular',
            fontSize: '100px',
            color: 'black',
            fontWeight: 'normal',
            //padding: "0% 0%",
          }}
        >
          <h3
            className="text-center text-2xl mb-4"
            style={{
              fontFamily: 'shelby, regular',
              fontStyle: 'regular',
              fontSize: '115px',
              color: 'black',
              fontWeight: '400',
              textAlign: 'centre',
              Display: 'flex',
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            Welcome!
          </h3>

          <div
          className='min-[0px]:text-[18px] md:text-[20px]'
            style={{
              //fontSize: '21px',
              color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',

            }}
          >
            {/* Content */}
            <br />
            Dear Friends and Family,
            <br />
            <br />
            We are (finally) getting married this April! Time is flying by so fast and preparations are in full swing.
            We are so excited for our big day and can't wait to share this special journey
            with all our loved ones. Your presence and love on this day are very important to us, and we truly hope you
            can join in on the celebrations.
            <br />
            <br />
            This website contains all the information you will need to plan ahead. Please take some time to review our
            event dates and details, travel information for our out-of-town guests, as well as a little bit about us and
            our story so far.
            <br />
            <br />
            This love story has been 7 years in the making, and now it's finally time for our "happily ever after!"
            <br />
            <br />
          </div>

          <div
          className='min-[0px]:text-[18px] md:text-[20px]'
            style={{
              //fontSize: '21px',
              color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'italic',
              textAlign: 'right',
            }}
          >
            With Lots of Love,
            <br />

            Vinay & Simhika
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
      
      <section
      className="section"
      style={{
        padding: '0',
        backgroundImage: `url(${window.innerWidth >= 650 ? VS8Image : VS8MImage})`, // Add the gradient overlay
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        position: 'relative', // Set the section to a relative position
      }}
    >
      <div className="container mx-auto flex flex-col h-full justify-center items-center">
        {/* Content */}
        {/* Add your content here */}
        <div className="min-[0px]:text-[60px] md:text-[75px] flex flex-col items-center justify-center text-center">
          <h1
            style={{
              fontFamily: 'cormorant infant',
              position: 'absolute', // Set the h1 to an absolute position
              top: '50%', // Adjust the top position as needed
              left: '50%', // Center horizontally
              transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
              padding: '0% 0%',
            }}
          >
            We hope to see you there
          </h1>

          <br />

          <Link
            to="/pages/RSVP"
            className="btn rounded-lg bg-white hover:bg-opacity-80 transition-all duration-300"
            style={{
              color: 'black',
              width: '250px', // Adjust the width as desired
              height: '50px', // Adjust the height as desired
              fontSize: '20px', // Adjust the font size as desired
              fontFamily: 'Montserrat, sans-serif', // Add the font-family here too
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute', // Set the button to an absolute position
              bottom: '50px', // Adjust the bottom position as needed
              left: '50%', // Center horizontally
              transform: 'translateX(-50%)', // Center horizontally
            }}
          >
            RSVP
          </Link>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Home;
