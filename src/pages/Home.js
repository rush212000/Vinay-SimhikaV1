import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import VS1Image from '../img/home/V&S1.jpg';
import VS2Image from '../img/home/V&S2.jpg';
import VS3Image from '../img/home/V&S3.jpg';
import VS4Image from '../img/home/V&S4.jpg';
import VS5Image from '../img/home/V&S5.jpg';
import VS6Image from '../img/home/V&S6.jpg';
import VS7Image from '../img/home/V&S7.jpg';
import VS8Image from '../img/home/V&SVV8Foot.jpg';
import VSfoot from '../img/home/V&SFOOT.png';

const Footer = () => {
  return (
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
  );
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [VS1Image, VS2Image, VS3Image, VS4Image, VS5Image, VS6Image, VS7Image];
  const imagePositions = [
    'center',
    'top',
    'bottom',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const calculateCountdown = () => {
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
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: imagePositions[currentImage],
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container mx-auto flex flex-col h-full justify-center items-center">
              <div className="pt-8 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10">
                <h1
                  className="h1 text-center text-2xl font-semibold mb-4"
                  style={{
                    fontSize: '35px',
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: 'cormorant infant',
                    textAlign: 'center',
                  }}
                >
                  We're getting married!
                </h1>
                <h2
                  className="h2"
                  style={{
                    fontFamily: 'shelby, sans-serif',
                    fontStyle: 'normal',
                    fontSize: '105px',
                    color: 'white',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                >
                  Vinay & Simhika
                </h2>
                <p
                  className="text-[15px] lg:text-[20px] font-primary mb-4 lg:mb-12 color: white"
                  style={{
                    fontSize: '25px',
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: 'adobe-garamond-pro',
                    textAlign: 'center',
                  }}
                >
                  {calculateCountdown()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Page Section */}
      <section style={{ zIndex: '2' }}>
        <div
          className="container mx-auto h-full flex flex-col"
          style={{
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'regular',
            fontSize: '100px',
            color: 'black',
            fontWeight: 'normal',
            maxHeight: 'calc(100vh - 200px)',
          }}
        >
          <h3
            className="text-center text-2xl mb-4"
            style={{
              fontFamily: 'shelby, ragular',
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
            style={{
              fontSize: '21px',
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
            We are so excited for our big day (or should we say big week?) and can't wait to share this special journey
            with all our loved ones. Your presence and love on this day are very important to us, and we truly hope you
            can join in on the celebrations.
            <br />
            <br />
            This website contains all the information you will need to plan ahead. Please take some time to review our
            event dates and details, travel information for out-of-town guests, as well as a little bit about us and
            our story so far.
            <br />
            <br />
            This love story has been 7 years in the making, and now it's finally time for our "happily ever after"!
            <br />
            <br />
          </div>

          <div
            style={{
              fontSize: '21px',
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
            <br />
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          padding: '0',
          backgroundImage: `url(${VS8Image})`, // Add the gradient overlay
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto flex flex-col h-full justify-center items-center">
          {/* Content */}
          {/* Add your content here */}
          <div className="flex flex-col items-center justify-center text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1
              style={{
                fontSize: '3.5rem',
                fontFamily: 'cormorant infant',
              }}
            >
              We hope to see you there
            </h1>

            <br />
            <Link
              to="/pages/RSVP"
              className="btn rounded-lg"
              style={{
                color: 'black',
                width: '150px', // Adjust the width as desired
                height: '40px', // Adjust the height as desired
                fontSize: '1.2rem', // Adjust the font size as desired
                fontFamily: 'Montserrat, sans-serif', // Add the font-family here too
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
