import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import VSTImage from '../img/home/V&Stitle.jpg';
import VS1Image from '../img/home/V&S1.jpg';
import VS2Image from '../img/home/V&S2.jpg';
import VS3Image from '../img/home/V&S3.jpg';
import VS4Image from '../img/home/V&S4.jpg';
import VS5Image from '../img/home/V&S5.jpg';
import VS6Image from '../img/home/V&S6.jpg';
import VS7Image from '../img/home/V&S7.jpg';
import VS8Image from '../img/home/V&S8.jpg';
import VS9Image from '../img/home/V&S9.jpg';
import VS10Image from '../img/home/V&S10Foot.jpg';
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
  const images = [VSTImage, VS1Image, VS2Image, VS3Image, VS4Image, VS5Image, VS6Image, VS7Image, VS8Image, VS9Image];
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

  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: imagePositions[currentImage], // Set background position based on current image index
    backgroundRepeat: 'no-repeat',
    transition: 'opacity 1.5s ease-in-out',
    opacity: isTransitioning ? 0 : 1,
  };

  useEffect(() => {
    setIsTransitioning(true);
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(transitionTimeout);
  }, [currentImage]);

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
      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');
        `}
      </style>

      <nav className="navbar" style={{ zIndex: '2' }}>
        {/* Replace with your navbar component */}
      </nav>

      <section className="section" style={{ backgroundColor: '#E0E0E0' }}>
        <div className="mx-auto h-screen relative">
          <div className="flex flex-col justify-center h-full" style={backgroundImageStyle}>
            <div className="container mx-auto flex flex-col h-full justify-center items-center">
              <div className="pt-8 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10">
                <h1
                  className="h1 text-center text-2xl font-semibold mb-4"
                  style={{
                    fontSize: '30px',
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: 'adobe-garamond-pro',
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
                    fontSize: '100px',
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
                    fontSize: '20px',
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
        <div className="fixed top-6 right-20" style={{ zIndex: '1' }}>
          <Link
            to="/contact"
            className="btn rounded-lg"
            style={{
              marginLeft: 'auto',
              color: 'black',
              width: '85px', // Adjust the width as desired
              height: '25px', // Adjust the height as desired
              fontSize: '12px', // Adjust the font size as desired
            }}
          >
            RSVP
          </Link>
        </div>
      </section>

      {/* New Page Section */}
      <section>
        <div
          ref={sectionRef}
          className="container mx-auto h-full flex flex-col"
          style={{
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'regular',
            fontSize: '100px',
            color: 'black',
            fontWeight: 'normal',
            maxHeight: 'calc(100vh - 200px)',
            overflowY: 'scroll',
          }}
        >
          <h3
            className="text-center text-2xl font-semibold mb-4"
            style={{
              fontFamily: 'shelby, sans-serif',
              fontStyle: 'regular',
              fontSize: '125px',
              color: 'black',
              fontWeight: '400',
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
              fontSize: '20px',
              color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'adobe-garamond-pro',
              fontStyle: 'regular',
              textAlign: 'center',
            }}
          >
            {/* Content */}
            <br />
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
              fontSize: '20px',
              color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'adobe-garamond-pro',
              fontStyle: 'italic',
              textAlign: 'right',
              //marginRight: '10px'
            }}
          >
            With Lots of Love,
            <br />
            Vinay & Simhika
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          margin: '0',
          padding: '0',
          backgroundImage: `url(${VS10Image})`, // Add the gradient overlay
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginBottom: '10px',
        }}
      >
        <div className="container mx-auto h-full flex relative">
          {/* Content */}
          {/* Add your content here */}
        </div>
        <div className="fixed top-6 right-20" style={{ zIndex: '1' }}>
          <Link
            to="/contact"
            className="btn rounded-lg"
            style={{
              marginLeft: 'auto',
              color: 'black',
              width: '85px', // Adjust the width as desired
              height: '25px', // Adjust the height as desired
              fontSize: '12px', // Adjust the font size as desired
            }}
          >
            RSVP
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
